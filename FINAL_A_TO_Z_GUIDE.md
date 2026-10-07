# AI Visual Assistant — Final A-to-Z Setup

## Included
- Five-language UI and voice: English, Hindi, Kannada, Tamil, Telugu.
- Persistent language selection and mobile/PWA support.
- Voice-command normalization for multilingual commands.
- GPS walking navigation with live position updates and rerouting.
- Camera/object detection running during navigation.
- Priority obstacle warnings over normal scene descriptions.
- Blind-friendly voice and touch shortcuts.
- Emergency SOS with GPS location.
- Automatic SMS and automated voice-call support through Twilio when configured.
- Phone call/SMS/WhatsApp fallbacks when automatic provider actions are unavailable.
- PWA install metadata and home-screen shortcuts.

## Recommended demo flow
1. Run the Flask server.
2. Open the app on Android Chrome.
3. Complete onboarding and save an emergency contact.
4. Select one of the five supported languages.
5. Test voice commands and navigation outdoors in a safe area.
6. Say `Emergency` only with a test contact during development.

## Local setup
```bash
python -m venv .venv
# Windows
.venv\\Scripts\\activate
# macOS/Linux
# source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open the local address printed by Flask. For phone testing, the phone must be able to reach the computer/server over the network, and camera/microphone/GPS browser permissions must be granted.

## Environment variables
Copy `.env.example` to `.env` and set only the credentials you actually use.

Required for the AI features:
- `GEMINI_API_KEY`
- `SESSION_SECRET`

Optional:
- `GOOGLE_MAPS_API_KEY`
- SMTP variables for legacy email alerts
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

Never commit `.env` or real API keys.

## Automatic emergency behavior
With Twilio configured, the SOS backend attempts:
1. Automatic emergency SMS containing the latest GPS link.
2. Automatic outbound voice call to the emergency contact.

The user does not need to press Send for those provider actions.

Without Twilio, the browser can still:
- open the phone dialer;
- open the SMS composer with the emergency message and GPS link;
- open WhatsApp with a prefilled message.

A web/PWA cannot silently send WhatsApp messages or silently place a cellular call on every device. Those actions require native OS capabilities or a server/API provider.

## Safety limitations
This is a final-year project prototype, not a certified safety-critical navigation device. GPS accuracy, network availability, object detection errors, lighting, camera position, and route-map data can all affect guidance. Test in controlled environments and never rely on the prototype as the sole safety mechanism.

## Next native-app phase
For a production Android version, migrate the web/PWA shell to a native Android layer. This can provide stronger background GPS, accessibility integration, native camera processing, native emergency permissions, and more reliable operation when the screen is locked.
