# Accessibility, Shortcuts and Emergency SOS

## Simple blind-friendly controls

- Double tap anywhere: start voice command.
- Triple tap anywhere: read visible text aloud.
- Long press anywhere: toggle object detection.
- Say “Emergency” / “SOS”: start emergency flow.
- Say “Call my emergency contact”: call primary emergency contact.
- Say “Send emergency SMS”: open SMS with location/message pre-filled.
- Say “Send emergency WhatsApp”: open WhatsApp with location/message pre-filled.
- PWA home-screen shortcuts: SOS, Voice, Navigation.

The shake-to-SOS gesture is disabled by default because accidental activation is possible. It can be enabled with localStorage key `aivi_enable_shake_sos=true`.

## SOS behavior

1. The app obtains the latest GPS location when possible.
2. If Twilio is configured, the server attempts the automatic personalized SMS and automatic voice call.
3. If automatic calling is unavailable, the app opens the primary contact in the phone dialer as a fallback.
4. SMS and WhatsApp can also be opened with the emergency message and live map link pre-filled as manual fallbacks.

A browser/PWA cannot silently send an SMS or WhatsApp message because mobile operating systems require user/app authorization. For fully automatic WhatsApp, use WhatsApp Business Cloud API; for fully automatic SMS, configure Twilio or use a native Android app with appropriate permissions.

## Recommended production architecture

For the final deployment, Android/iOS native wrappers should expose native call/SMS permissions and keep the web UI as the accessible interface. Emergency actions should also require an intentional trigger to prevent accidental calls/messages.
