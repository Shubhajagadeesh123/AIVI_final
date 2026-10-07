# Automatic Emergency SOS

## What happens

When the user says **Emergency** (or activates SOS):

1. The app gets the latest GPS location.
2. The backend attempts an automatic SMS through Twilio.
3. The backend starts an automatic Twilio voice call to the primary emergency contact.
4. The user does not need to press Send or confirm the call when the server/Twilio channel succeeds.
5. If the server/Twilio channel is unavailable, the app falls back to the phone dialer.

## Twilio environment variables

Use the following in the backend `.env` file:

```text
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_SMS_FROM_NUMBER=...
TWILIO_VOICE_FROM_NUMBER=...
```

`TWILIO_PHONE_NUMBER` is also accepted as a backwards-compatible fallback when the SMS and Voice sender are the same.

Use E.164 format for emergency contacts, for example `+919876543210`.

### Important trial-account limitation

Twilio's current trial rules allow only Twilio-provided SMS templates; a custom SMS body containing the user's GPS link is not supported during the trial. Voice supports custom TwiML with restrictions. Therefore:

- **Trial:** automatic custom emergency voice call can be demonstrated; custom GPS-location SMS requires a fully enabled Twilio account.
- **After upgrade:** the current backend can send the custom emergency SMS containing the Google Maps location link and make the automatic call.

Twilio also notes that trial Messaging and Voice sender numbers can differ, so keep the SMS and Voice sender values separate when necessary.

## Testing

1. First test with your own verified phone number.
2. Confirm the Twilio account can call/message that verified destination.
3. Trigger SOS from the actual Android device/browser.
4. Confirm GPS permission is granted.
5. Verify the automatic voice call.
6. If the account is fully enabled, verify the SMS contains the location link.
7. Check the Flask terminal for any Twilio error returned by the provider.

## Safety note

This is an emergency-assistance prototype, not a guaranteed emergency service. GPS failure, mobile/internet failure, server downtime, provider restrictions, trial limits, or account limits can prevent an alert. Keep the native phone-call fallback and test the complete flow on the actual Android device before demonstration or real use.
