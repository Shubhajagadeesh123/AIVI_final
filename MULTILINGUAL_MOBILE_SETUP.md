# AIVisualAssistant – 5-Language Mobile Setup

## Supported languages

1. English – `en-IN`
2. Hindi – `hi-IN`
3. Kannada – `kn-IN`
4. Tamil – `ta-IN`
5. Telugu – `te-IN`

## What changed

- Language selection is shared across onboarding, dashboard, settings, navigation and help.
- The selected language is persisted in `localStorage`, so it remains selected after reopening the installed PWA.
- The main dashboard, settings and onboarding contain bundled translations for the important accessibility controls.
- Longer static help/instruction text is translated on demand through `/api/translate-ui` and cached on the device.
- Voice responses are translated through Gemini before speech synthesis.
- Non-English voice commands are normalized to English through `/api/translate-command` before the existing command router processes them. This preserves the existing navigation, OCR, memory and SOS logic.
- If the selected language voice is available on the phone/browser, native speech is used.
- If a selected-language voice is unavailable, `/api/tts` uses gTTS as a fallback and plays the resulting audio through the normal phone/Bluetooth audio output.
- The project remains a PWA and can be installed from Android Chrome using **Add to Home screen / Install app**.

## Mobile deployment

Deploy the Flask application over HTTPS. Do not test microphone/camera features from an ordinary insecure HTTP page on a phone.

After deployment on Android:

1. Open the HTTPS site in Chrome.
2. Complete the one-time setup.
3. Select English, Hindi, Kannada, Tamil or Telugu.
4. Allow camera, microphone and location permissions.
5. Use Chrome's **Install app / Add to Home screen** option.
6. Open AIVisualAssistant from the phone home screen.
7. Connect Bluetooth earphones if desired.
8. The selected language is retained for future launches.

## Voice behavior

The app first tries the phone's native speech engine. This is preferred for low latency. If the selected regional voice is missing, the app automatically calls `/api/tts` and plays the server-generated audio.

The TTS fallback requires internet access because gTTS contacts Google's online speech service. Gemini is also required for AI translation and natural-language command normalization.

## Environment variables

Copy `.env.example` to `.env` and set at least:

- `GEMINI_API_KEY`
- `SESSION_SECRET`
- `DATABASE_URL` as required by the deployment

SMTP variables are only required if emergency email functionality is being used.

## Important browser limitation

Speech recognition is still provided by the browser/device speech-recognition engine. Android Chrome is the recommended mobile target for this PWA. The application no longer requires Windows to contain the selected-language TTS voice because the server TTS fallback covers speech output.

For a future Play Store/iOS release, the same Flask backend can be wrapped in a native Android/iOS shell (for example, Capacitor) so native microphone, speech recognition and audio APIs can be used directly.

## Safety-first walking navigation

The navigation flow now uses the phone's high-accuracy GPS and the project's OpenStreetMap walking router (OSRM foot profile):

1. The user says a destination such as “take me to the library”.
2. The app obtains the current GPS position from the phone.
3. The destination is geocoded and a walking route is generated.
4. Turn-by-turn steps are announced in the selected language.
5. GPS is watched continuously while walking.
6. If the user moves significantly away from the route, the route is recalculated from the new GPS position.
7. A mobile Screen Wake Lock is requested during navigation when supported, reducing interruptions caused by the screen sleeping.
8. The main camera/COCO-SSD detector remains active during navigation and prioritizes close obstacle warnings.
9. Warnings identify detected objects such as people, cars, buses, motorcycles, bicycles, dogs, stairs, chairs and tables, with relative position and estimated distance when the model can detect them.
10. Navigation stops when the destination is reached or the user presses the emergency/stop control.

### Important safety limitation

This is an assistive prototype, not a certified mobility aid. Consumer GPS can be inaccurate, especially near buildings, and camera object detection can miss objects or estimate distance incorrectly. The walking router does not guarantee a physically safe sidewalk, crossing, curb, surface, construction area or obstacle-free path. A real deployment should add dedicated pedestrian-map data, accessibility/crossing information, stronger depth sensing (for example LiDAR/depth cameras where available), and extensive field testing with blind/low-vision users.
