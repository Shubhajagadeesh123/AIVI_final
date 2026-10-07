# AIVI Emergency SMS + Call Setup

This build is prepared for the AIVI emergency flow:

**Voice command / SOS → GPS → automatic Twilio SMS + automatic Twilio call**

The emergency contact is stored in AIVI settings. The outgoing SMS can contain:
- user's name
- user's phone number
- emergency text
- live Google Maps location link

The automated voice call announces:
- user's name
- that SOS was activated
- that the location was sent by SMS
- the user's callback number (when saved)

## 1. Twilio trial testing

Your Twilio trial can test Voice and SMS to verified recipients. Trial sender numbers may be different for Messaging and Voice.

Important: Twilio trial SMS does **not** allow a custom SMS body. Therefore the AIVI personalized emergency SMS (name + phone + GPS link) requires an upgraded/fully enabled Twilio account. The Voice trial can be used for the automatic call test, subject to Twilio's trial restrictions.

## 2. `.env`

Copy `.env.example` to `.env` and fill in:

```env
GEMINI_API_KEY=your_gemini_key

TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_SMS_FROM_NUMBER=your_twilio_messaging_number
TWILIO_VOICE_FROM_NUMBER=your_twilio_voice_number
```

Do not commit `.env` to GitHub.

## 3. Emergency contact settings

In AIVI settings/onboarding, save:

- Name
- Your phone number
- Primary emergency contact name
- Primary emergency contact phone

Phone numbers should be entered in E.164 format, for example:

```text
+919876543210
```

Do not rely on the app to guess a country code.

## 4. Automatic flow

When the user triggers SOS:

1. AIVI requests the latest device GPS location.
2. AIVI sends `/api/emergency` to Flask.
3. Flask creates the personalized emergency message.
4. Twilio Messaging sends the SMS when the account supports custom SMS bodies.
5. Twilio Voice starts the automatic call.
6. The call is made from the configured Twilio Voice sender, **not from the user's SIM number**.
7. If automatic calling is unavailable, the browser falls back to opening the phone dialer.

## 5. What the emergency SMS looks like after upgrade

```text
EMERGENCY: Shradha needs help.
Call me at +91XXXXXXXXXX.
My current location: https://maps.google.com/?q=12.9716,77.5946
Please help me immediately.
```

## 6. Test safely

Use your own verified phone number first. Trigger SOS once and verify:

- GPS location is correct.
- SMS arrives at the intended contact.
- SMS contains the user's name, callback number and map link.
- Voice call arrives.
- Voice call announces the user's name and callback number.
- The Flask terminal reports any provider error.

This is a project prototype, not a guaranteed emergency service. Network, GPS, server, Twilio account, phone permissions, or provider restrictions can prevent delivery.
