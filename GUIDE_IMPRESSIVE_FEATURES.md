# AIVI – Guide-Impressive Features

## 1. Voice-first accessibility
- Navigation, emergency SOS, object detection, help, system status and repeat can be initiated by voice.
- Buttons remain available as a fallback for sighted users and TalkBack users.
- Interactive controls should remain at least 48dp/48px and have meaningful accessibility labels.

## 2. Safety System Check
Say **“System status”** or **“Check system”**. AIVI checks and announces:
- secure connection
- microphone permission
- camera availability
- GPS availability
- emergency-contact configuration
- internet connectivity

This gives the user a quick readiness check before leaving home.

## 3. Repeat last instruction
Say **“Repeat that”** or **“Repeat last instruction”** to hear the latest assistant/navigation instruction again.

## 4. Intelligent object announcements
- Detection uses a lower threshold for visual tracking but a higher threshold for spoken announcements.
- Temporal confirmation reduces one-frame false announcements.
- Priority objects are announced first.
- Estimated distance and relative direction are included in spoken alerts.
- Speech throttling reduces repeated/noisy announcements.

## 5. Navigation safety
- Voice-first destination entry.
- GPS tracking and route deviation detection.
- Rerouting when the user moves away from the route.
- Object/obstacle announcements can interrupt routine navigation speech when safety requires it.

## 6. Emergency fallback hierarchy
1. Backend/Twilio automatic alert when configured.
2. Automatic Twilio voice call when available.
3. Native phone-dialer fallback when automatic calling is unavailable.

A browser/PWA cannot silently place a normal cellular call using the user's SIM without native/platform support.

## 7. Privacy and safety positioning
AIVI should be presented as an assistive prototype, not a guaranteed safety device. Users should verify surroundings and route conditions.

## Demo line for the guide
> “AIVI is not just an object detector. It combines perception, conversational voice control, navigation, memory, multilingual TTS, accessibility feedback and an emergency communication layer into one voice-first assistive system.”
