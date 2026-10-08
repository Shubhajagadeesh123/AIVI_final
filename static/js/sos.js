/* ==========================================
   AIVisualAssistant SOS System

   Mobile-safe emergency actions:
   - Automatic SMS + automatic voice call: uses the server/Twilio channel when configured.
   - Direct call fallback: opens the phone dialer if automatic calling is unavailable.
   - SMS / WhatsApp fallback: opens the native app with the emergency message pre-filled.

   A browser/PWA cannot silently send local SMS/WhatsApp or place a cellular
   call itself; those actions require a native API or a server provider.
========================================== */

class EmergencySOS {
  constructor() {
    // NOTE: contacts are saved server-side via /api/settings (see
    // settings.js) - they were never actually written to the
    // "AIVisualAssistantSettings" localStorage key, so reading from
    // localStorage here always returned an empty object. Settings are
    // fetched fresh from the server each time instead.
    this.settings = {};

    this.initialize();
    // Shake-to-SOS is optional because accidental triggers are possible.
    if (localStorage.getItem("aivi_enable_shake_sos") === "true") this.setupShakeToTrigger();
    this.loadSettings();
  }

  async loadSettings() {
    try {
      const response = await fetch("/api/settings");
      this.settings = (await response.json()) || {};
    } catch (error) {
      console.error("Could not load settings for SOS:", error);
    }
  }

  initialize() {
    const btn1 = document.getElementById("emergencyBtn");
    const btn2 = document.getElementById("floatingSOS");

    if (btn1) {
      btn1.addEventListener("click", () => {
        this.triggerSOS();
      });
    }

    if (btn2) {
      btn2.addEventListener("click", () => {
        this.triggerSOS();
      });
    }
  }

  getContacts() {
    return [
      {
        name: this.settings.contact1Name,
        phone: this.settings.contact1Phone,
        email: this.settings.contact1Email,
      },
      {
        name: this.settings.contact2Name,
        phone: this.settings.contact2Phone,
        email: this.settings.contact2Email,
      },
      {
        name: this.settings.contact3Name,
        phone: this.settings.contact3Phone,
        email: this.settings.contact3Email,
      },
    ].filter((c) => c.phone || c.email);
  }

  async triggerSOS() {
    this.speak("Emergency mode activated. Getting your location.");

    // Always fetch fresh settings right now, rather than relying on
    // whatever was loaded at page load - the user may have just added a
    // contact, and this is safety-critical enough to not risk stale data.
    await this.loadSettings();

    const contacts = this.getContacts();
    if (contacts.length === 0) {
      this.speak(
        "No emergency contacts are saved yet. Please add one in settings first.",
      );
      return;
    }

    if (!navigator.geolocation) {
      this.speak(
        "Location is not supported on this device. Sending the alert without it.",
      );
      await this.sendAlert(null, null, contacts);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await this.sendAlert(
          position.coords.latitude,
          position.coords.longitude,
          contacts,
        );
      },
      async () => {
        this.speak(
          "Could not get your location, but I'm still sending the alert.",
        );
        await this.sendAlert(null, null, contacts);
      },
    );
  }

  async sendAlert(latitude, longitude, contacts) {
    const primary = contacts.find((c) => c.phone) || contacts[0];
    const mapsLink =
      latitude != null && longitude != null
        ? `https://maps.google.com/?q=${latitude},${longitude}`
        : "location unavailable";

    const body =
      `EMERGENCY: ${this.settings.name || "I"} need help. ` +
      (this.settings.userPhone
        ? `Call me at ${this.settings.userPhone}. `
        : "") +
      `My current location: ${mapsLink}. Please help me immediately.`;

    // First try the server channel. If Twilio is configured, this can send
    // an SMS automatically without requiring the user to tap Send.
    try {
      const response = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          latitude,
          longitude,
          contacts,
          user_name: this.settings.name || "",
          user_phone: this.settings.userPhone || "",
          message: body,
        }),
      });
      const result = await response.json();

      if (result.success) {
        if (result.sms_sent && result.call_sent) {
          this.speak("Emergency SMS sent and emergency call started automatically.");
        } else if (result.sms_sent) {
          this.speak("Emergency SMS sent automatically. Starting the phone call.");
        } else if (result.call_sent) {
          this.speak("Emergency call started automatically.");
        }

        // Twilio has already performed the call. Do not launch another call.
        if (result.call_sent) return;
      }
    } catch (error) {
      console.warn("Emergency server unavailable:", error);
    }

    // Browser fallback: this opens the dialer. A browser cannot silently
    // place a cellular call without native CALL_PHONE permission.
    if (primary && primary.phone) {
      this.speak("Automatic emergency call is unavailable. Opening the phone call now.");
      window.location.href = `tel:${encodeURIComponent(primary.phone)}`;
      return;
    }

    this.openFallbackSms(contacts, body, latitude, longitude);
  }

  /**
   * Browser fallback only. A website cannot silently send local SMS; use
   * the Twilio server channel for automatic emergency SMS.
   */
  openFallbackSms(contacts, message, latitude, longitude) {
    const contact = contacts.find((c) => c.phone);
    if (!contact) {
      this.speak("No emergency contact has a phone number saved.");
      return;
    }

    const mapsLink =
      latitude != null && longitude != null
        ? `https://maps.google.com/?q=${latitude},${longitude}`
        : "location unavailable";
    const body =
      message ||
      `EMERGENCY: ${this.settings.name || "I"} need help. My location: ${mapsLink}. Please call me.`;

    window.location.href = `sms:${contact.phone}?body=${encodeURIComponent(body)}`;
  }

  openWhatsApp(contacts, message, latitude, longitude) {
    const contact = contacts.find((c) => c.phone);
    if (!contact) {
      this.speak("No emergency contact has a phone number saved.");
      return;
    }
    const phone = String(contact.phone).replace(/[^0-9]/g, "");
    const mapsLink =
      latitude != null && longitude != null
        ? `https://maps.google.com/?q=${latitude},${longitude}`
        : "location unavailable";
    const body =
      message ||
      `EMERGENCY: ${this.settings.name || "I"} need help. My location: ${mapsLink}. Please call me immediately.`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
  }

  callPrimaryContact() {
    const contact = this.getContacts().find((c) => c.phone);
    if (!contact) {
      this.speak("No emergency phone number is saved.");
      return;
    }
    this.speak(`Calling ${contact.name || "your emergency contact"}.`);
    window.location.href = `tel:${encodeURIComponent(contact.phone)}`;
  }

  openEmergencySms() {
    this.openFallbackSms(this.getContacts(), null, null, null);
  }

  openEmergencyWhatsApp() {
    this.openWhatsApp(this.getContacts(), null, null, null);
  }

  /**
   * Shake-to-trigger: shaking the phone firmly starts the emergency flow.
   * This works without needing to find or tap anything on screen, which
   * matters in a real emergency, and unlike hardware volume/power buttons,
   * motion sensors ARE accessible to web pages (with permission on iOS).
   */
  setupShakeToTrigger() {
    const SHAKE_THRESHOLD = 18; // acceleration in m/s^2 above gravity noise
    const SHAKE_COOLDOWN_MS = 5000;
    let lastShakeTime = 0;
    let lastX = null;
    let lastY = null;
    let lastZ = null;

    const handleMotion = (event) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;

      const { x, y, z } = acceleration;
      if (lastX === null) {
        lastX = x;
        lastY = y;
        lastZ = z;
        return;
      }

      const delta =
        Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
      lastX = x;
      lastY = y;
      lastZ = z;

      const now = Date.now();
      if (delta > SHAKE_THRESHOLD && now - lastShakeTime > SHAKE_COOLDOWN_MS) {
        lastShakeTime = now;
        console.log("Shake detected - triggering emergency SOS");
        this.triggerSOS();
      }
    };

    const enableShakeListener = () => {
      window.addEventListener("devicemotion", handleMotion);
      console.log("Shake-to-trigger SOS enabled");
    };

    // iOS 13+ requires an explicit user-gesture permission request before
    // motion sensors can be read. On Android and desktop this permission
    // API doesn't exist, so we just enable the listener directly.
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      // Request on first touch anywhere, since it must follow a user
      // gesture - can't be requested silently on page load on iOS.
      const requestOnce = () => {
        DeviceMotionEvent.requestPermission()
          .then((state) => {
            if (state === "granted") enableShakeListener();
          })
          .catch((err) => console.warn("Motion permission denied:", err));
        document.removeEventListener("touchend", requestOnce);
      };
      document.addEventListener("touchend", requestOnce, { once: true });
    } else {
      enableShakeListener();
    }
  }

  async speak(text) {
    if (window.blindMate && typeof window.blindMate.speak === "function") {
      return window.blindMate.speak(text, true);
    }
    return false;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.emergencySOS = new EmergencySOS();
});