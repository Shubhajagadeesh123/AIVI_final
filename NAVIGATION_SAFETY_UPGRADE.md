# Navigation + Safety Upgrade

## Implemented
- High-accuracy browser GPS tracking.
- Free OpenStreetMap/Nominatim + OSRM walking route generation.
- Continuous turn-by-turn route step tracking.
- Route deviation detection and automatic rerouting with cooldown protection.
- Destination arrival detection.
- Mobile Screen Wake Lock while navigation is active where supported.
- Main vision detector stays active during navigation.
- Navigation mode is synchronized with the main detector so safety alerts receive higher priority.
- Close obstacle alerts include relative position (left/center/right) and estimated distance.
- Multilingual navigation speech uses the selected language and server TTS fallback when the device lacks a matching voice.
- GPS watcher retry is fixed after location errors.

## Mobile usage
Use HTTPS when deployed. Allow Location, Camera and Microphone permissions. Keep the phone camera facing forward and use a Bluetooth headset/earphones so spoken directions do not block environmental awareness.

## Safety limitation
The prototype cannot guarantee that a route is physically safe or that every obstacle will be detected. GPS and camera estimates are approximate. Do not represent this prototype as a certified mobility or safety device without additional validation and hardware/sensor support.
