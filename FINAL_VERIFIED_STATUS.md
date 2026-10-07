# AIVI Final Build Status

This package is the consolidated AIVI build with:

- Real-time camera object detection (COCO-SSD)
- Voice command interaction and wake-word flow
- Voice-first navigation with GPS, Nominatim geocoding, OSRM walking routes, rerouting and arrival announcements
- Navigation obstacle-alert integration
- Multilingual server TTS for English, Hindi, Kannada, Tamil and Telugu
- Emergency SOS with GPS location, server-side Twilio SMS/call integration and browser fallbacks
- Emergency user name and callback number included in the generated alert payload
- Separate Twilio Messaging and Voice sender environment variables
- No credentials included in this ZIP

## Important Twilio limitation

The code is production-ready for a paid Twilio account, but a Twilio trial account does not permit arbitrary custom SMS bodies. Trial SMS uses Twilio-provided templates and verified recipients. Trial Voice supports restricted custom TwiML. Therefore, the personalized emergency SMS is enabled after upgrading Twilio.

## User flow

- Say `Hey Netra, navigate to <destination>` or `navigate to <destination>`.
- Say `Hey Netra, emergency` or `SOS` to start emergency mode.
- During navigation, the camera can provide obstacle alerts.
- Bluetooth earphones can be used for spoken feedback.

## Verification performed for this package

- Python syntax compilation: passed
- JavaScript syntax checks for app.js, navigation.js, sos.js and onboarding.js: passed
- Credential scan: no real Gemini/Twilio credentials found
