/*
 * AIVisualAssistant multilingual UI layer.
 * Primary languages: English, Hindi, Kannada, Tamil, Telugu.
 * The core accessibility labels are bundled locally; less-common/static
 * paragraphs can be translated and cached through /api/translate-ui.
 */
(function () {
  const LANGUAGES = {
    "en-IN": { name: "English", native: "English" },
    "hi-IN": { name: "Hindi", native: "हिन्दी" },
    "kn-IN": { name: "Kannada", native: "ಕನ್ನಡ" },
    "ta-IN": { name: "Tamil", native: "தமிழ்" },
    "te-IN": { name: "Telugu", native: "తెలుగు" },
  };

  const CORE = {
    "en-IN": {
      "Good Morning 👋": "Good Morning 👋", "Ready to help you.": "Ready to help you.",
      "Tap or Say": "Tap or Say", "Listening for your commands": "Listening for your commands",
      "Talk to Assistant": "Talk to Assistant", "Detect Objects": "Detect Objects", "Stop Detection": "Stop Detection",
      "Enable GPS": "Enable GPS", "Navigation": "Navigation", "Read Text": "Read Text", "Memory": "Memory",
      "Describe Scene": "Describe Scene", "Emergency SOS": "Emergency SOS", "Help & Shortcuts": "Help & Shortcuts",
      "Language": "Language", "Voice Tone": "Voice Tone", "Friendly": "Friendly", "Calm": "Calm", "Professional": "Professional",
      "Detection": "Detection", "Voice": "Voice", "Ready": "Ready", "Map": "Map", "Stop": "Stop", "Obstacle": "Obstacle",
      "Close": "Close", "Resume Navigation": "Resume Navigation", "Assistant Response": "Assistant Response",
      "Home": "Home", "History": "History", "Settings": "Settings", "AI Vision": "AI Vision",
      "Real-time Scene Understanding": "Real-time Scene Understanding", "AI Assistant": "AI Assistant",
      "Choose an action or simply speak.": "Choose an action or simply speak.", "Loading AI Engine...": "Loading AI Engine...",
      "Inactive": "Inactive", "ONLINE": "ONLINE", "Helping visually impaired people live independently ❤️": "Helping visually impaired people live independently ❤️",
      "Settings | AIVisualAssistant": "Settings | AIVisualAssistant", "Customize your AI Assistant": "Customize your AI Assistant",
      "Profile": "Profile", "Name": "Name", "Your Phone Number": "Your Phone Number", "Home Address": "Home Address",
      "Shown to your emergency contacts so they know who to call back.": "Shown to your emergency contacts so they know who to call back.",
      "Emergency Contacts": "Emergency Contacts", "These contacts will receive your location during an emergency.": "These contacts will receive your location during an emergency.",
      "Primary Contact": "Primary Contact", "Secondary Contact": "Secondary Contact", "Third Contact": "Third Contact",
      "Accessibility": "Accessibility", "Voice Feedback": "Voice Feedback", "Vibration Feedback": "Vibration Feedback",
      "High Contrast Mode": "High Contrast Mode", "Large Text": "Large Text", "Permissions": "Permissions", "Camera": "Camera",
      "Location": "Location", "Microphone": "Microphone", "Internet": "Internet", "Granted": "Granted", "Connected": "Connected",
      "AI Assistant": "AI Assistant", "Continuous Listening": "Continuous Listening", "Scene Description": "Scene Description",
      "Object Detection": "Object Detection", "Memory Assistant": "Memory Assistant", "Save Settings": "Save Settings", "Reset Settings": "Reset Settings", "Exit": "Exit",
      "Voice": "Voice", "Voice Speed": "Voice Speed", "Wake Word": "Wake Word",
      "Welcome to AIVisualAssistant": "Welcome to AIVisualAssistant", "Choose Language": "Choose Language", "Select your preferred language.": "Select your preferred language.",
      "Permissions": "Permissions", "AIVisualAssistant needs these permissions.": "AIVisualAssistant needs these permissions.",
      "Required for Object Detection": "Required for Object Detection", "Required for Voice Commands": "Required for Voice Commands",
      "Required for Navigation": "Required for Navigation", "Required for Alerts": "Required for Alerts", "Allow Permissions": "Allow Permissions",
      "Continue": "Continue", "Back": "Back", "Start Setup": "Start Setup", "Emergency Contacts": "Emergency Contacts",
      "Add people who should be contacted in an emergency.": "Add people who should be contacted in an emergency.", "Third Contact (Optional)": "Third Contact (Optional)",
      "Save your home address so you can simply say \"Take me home.\"": "Save your home address so you can simply say \"Take me home.\"",
      "Voice Test": "Voice Test", "Press the microphone and say": "Press the microphone and say", "Waiting...": "Waiting...",
      "Setup Completed": "Setup Completed", "AIVisualAssistant is now ready.": "AIVisualAssistant is now ready.", "Language Saved": "Language Saved",
      "Permissions Granted": "Permissions Granted", "Emergency Contacts Saved": "Emergency Contacts Saved", "Home Address Saved": "Home Address Saved",
      "Voice Assistant Configured": "Voice Assistant Configured", "Go To Dashboard": "Go To Dashboard", "Start Voice Test": "Start Voice Test",
      "Current Direction": "Current Direction", "Ready to navigate": "Ready to navigate", "Ready to Navigate": "Ready to Navigate",
      "Press the button or Volume Up key to start": "Press the button or Volume Up key to start", "Start Listening": "Start Listening",
      "Shortcuts & Instructions": "Shortcuts & Instructions", "Talking to Netra": "Talking to Netra", "Touch Gestures (work anywhere on screen)": "Touch Gestures (work anywhere on screen)",
      "Navigation": "Navigation", "Memory": "Memory", "Describe Scene": "Describe Scene", "Emergency": "Emergency", "Useful things to say": "Useful things to say",
      "Other buttons on the main screen": "Other buttons on the main screen", "Repeat": "Repeat", "Stop": "Stop", "Back to App": "Back to App",
    },
    "hi-IN": {
      "English": "अंग्रेज़ी", "Hindi": "हिन्दी", "Kannada": "कन्नड़", "Tamil": "तमिल", "Telugu": "तेलुगु",
      "Good Morning 👋": "सुप्रभात 👋", "Ready to help you.": "आपकी मदद के लिए तैयार हूं।", "Tap or Say": "टैप करें या बोलें", "Listening for your commands": "आपके आदेश सुन रहा हूं",
      "Talk to Assistant": "सहायक से बात करें", "Detect Objects": "वस्तुओं की पहचान करें", "Stop Detection": "पहचान बंद करें", "Enable GPS": "जीपीएस सक्षम करें",
      "Navigation": "नेविगेशन", "Read Text": "पाठ पढ़ें", "Memory": "स्मृति", "Describe Scene": "दृश्य का वर्णन करें", "Emergency SOS": "आपातकालीन एसओएस", "Help & Shortcuts": "सहायता और शॉर्टकट",
      "Language": "भाषा", "Voice Tone": "आवाज़ का स्वर", "Friendly": "मैत्रीपूर्ण", "Calm": "शांत", "Professional": "पेशेवर", "Detection": "पहचान", "Voice": "आवाज़", "Ready": "तैयार",
      "Map": "मानचित्र", "Stop": "रोकें", "Obstacle": "बाधा", "Close": "बंद करें", "Resume Navigation": "नेविगेशन फिर शुरू करें", "Assistant Response": "सहायक का उत्तर",
      "Home": "होम", "History": "इतिहास", "Settings": "सेटिंग्स", "AI Vision": "एआई विज़न", "Real-time Scene Understanding": "रीयल-टाइम दृश्य समझ",
      "AI Assistant": "एआई सहायक", "Choose an action or simply speak.": "कोई कार्रवाई चुनें या सीधे बोलें।", "Loading AI Engine...": "एआई इंजन लोड हो रहा है...", "Inactive": "निष्क्रिय", "ONLINE": "ऑनलाइन",
      "Helping visually impaired people live independently ❤️": "दृष्टिबाधित लोगों को स्वतंत्र जीवन जीने में मदद ❤️",
      "Customize your AI Assistant": "अपने एआई सहायक को अनुकूलित करें", "Profile": "प्रोफ़ाइल", "Name": "नाम", "Your Phone Number": "आपका फ़ोन नंबर", "Home Address": "घर का पता",
      "Shown to your emergency contacts so they know who to call back.": "आपके आपातकालीन संपर्कों को दिखाया जाएगा ताकि वे जान सकें कि आपको वापस किसे कॉल करना है।",
      "Emergency Contacts": "आपातकालीन संपर्क", "These contacts will receive your location during an emergency.": "आपातकाल में इन संपर्कों को आपका स्थान भेजा जाएगा।",
      "Primary Contact": "प्राथमिक संपर्क", "Secondary Contact": "द्वितीयक संपर्क", "Third Contact": "तीसरा संपर्क", "Third Contact (Optional)": "तीसरा संपर्क (वैकल्पिक)",
      "Accessibility": "सुलभता", "Voice Feedback": "आवाज़ प्रतिक्रिया", "Vibration Feedback": "कंपन प्रतिक्रिया", "High Contrast Mode": "उच्च कंट्रास्ट मोड", "Large Text": "बड़ा टेक्स्ट",
      "Permissions": "अनुमतियां", "Camera": "कैमरा", "Location": "स्थान", "Microphone": "माइक्रोफ़ोन", "Internet": "इंटरनेट", "Granted": "अनुमति मिली", "Connected": "कनेक्टेड",
      "Continuous Listening": "लगातार सुनना", "Scene Description": "दृश्य विवरण", "Object Detection": "वस्तु पहचान", "Memory Assistant": "मेमोरी सहायक", "Save Settings": "सेटिंग्स सहेजें", "Reset Settings": "सेटिंग्स रीसेट करें", "Exit": "बाहर निकलें",
      "Voice Speed": "आवाज़ की गति", "Wake Word": "वेक वर्ड", "Welcome to AIVisualAssistant": "AIVisualAssistant में आपका स्वागत है", "Choose Language": "भाषा चुनें", "Select your preferred language.": "अपनी पसंदीदा भाषा चुनें।",
      "AIVisualAssistant needs these permissions.": "AIVisualAssistant को इन अनुमतियों की आवश्यकता है।", "Required for Object Detection": "वस्तु पहचान के लिए आवश्यक", "Required for Voice Commands": "वॉइस कमांड के लिए आवश्यक",
      "Required for Navigation": "नेविगेशन के लिए आवश्यक", "Required for Alerts": "अलर्ट के लिए आवश्यक", "Allow Permissions": "अनुमतियां दें", "Continue": "जारी रखें", "Back": "वापस", "Start Setup": "सेटअप शुरू करें",
      "Add people who should be contacted in an emergency.": "उन लोगों को जोड़ें जिन्हें आपातकाल में संपर्क किया जाना चाहिए।", "Save your home address so you can simply say \"Take me home.\"": "अपना घर का पता सहेजें ताकि आप केवल \"मुझे घर ले चलो\" कह सकें।",
      "Voice Test": "वॉइस टेस्ट", "Press the microphone and say": "माइक्रोफ़ोन दबाकर बोलें", "Waiting...": "प्रतीक्षा हो रही है...", "Setup Completed": "सेटअप पूरा हुआ",
      "AIVisualAssistant is now ready.": "AIVisualAssistant अब तैयार है।", "Language Saved": "भाषा सहेजी गई", "Permissions Granted": "अनुमतियां मिल गईं", "Emergency Contacts Saved": "आपातकालीन संपर्क सहेजे गए", "Home Address Saved": "घर का पता सहेजा गया", "Voice Assistant Configured": "वॉइस सहायक कॉन्फ़िगर हो गया", "Go To Dashboard": "डैशबोर्ड पर जाएं", "Start Voice Test": "वॉइस टेस्ट शुरू करें",
      "Current Direction": "वर्तमान दिशा", "Ready to navigate": "नेविगेशन के लिए तैयार", "Ready to Navigate": "नेविगेशन के लिए तैयार", "Press the button or Volume Up key to start": "शुरू करने के लिए बटन या वॉल्यूम अप कुंजी दबाएं", "Start Listening": "सुनना शुरू करें",
      "Shortcuts & Instructions": "शॉर्टकट और निर्देश", "Talking to Netra": "Netra से बात करना", "Touch Gestures (work anywhere on screen)": "टच जेस्चर (स्क्रीन पर कहीं भी काम करते हैं)", "Emergency": "आपातकाल", "Useful things to say": "कहने के लिए उपयोगी वाक्य", "Other buttons on the main screen": "मुख्य स्क्रीन के अन्य बटन", "Repeat": "दोहराएं", "Stop": "रोकें", "Back to App": "ऐप पर वापस जाएं",
    },
    "kn-IN": {
      "English": "ಇಂಗ್ಲಿಷ್", "Hindi": "ಹಿಂದಿ", "Kannada": "ಕನ್ನಡ", "Tamil": "ತಮಿಳು", "Telugu": "ತೆಲುಗು",
      "Good Morning 👋": "ಶುಭೋದಯ 👋", "Ready to help you.": "ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ.", "Tap or Say": "ಟ್ಯಾಪ್ ಮಾಡಿ ಅಥವಾ ಹೇಳಿ", "Listening for your commands": "ನಿಮ್ಮ ಆಜ್ಞೆಗಳನ್ನು ಕೇಳುತ್ತಿದ್ದೇನೆ",
      "Talk to Assistant": "ಸಹಾಯಕನೊಂದಿಗೆ ಮಾತನಾಡಿ", "Detect Objects": "ವಸ್ತುಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ", "Stop Detection": "ಪತ್ತೆಹಚ್ಚುವಿಕೆಯನ್ನು ನಿಲ್ಲಿಸಿ", "Enable GPS": "ಜಿಪಿಎಸ್ ಸಕ್ರಿಯಗೊಳಿಸಿ",
      "Navigation": "ನ್ಯಾವಿಗೇಶನ್", "Read Text": "ಪಠ್ಯ ಓದಿ", "Memory": "ಸ್ಮರಣೆ", "Describe Scene": "ದೃಶ್ಯವನ್ನು ವಿವರಿಸಿ", "Emergency SOS": "ತುರ್ತು ಎಸ್‌ಒಎಸ್", "Help & Shortcuts": "ಸಹಾಯ ಮತ್ತು ಶಾರ್ಟ್‌ಕಟ್‌ಗಳು",
      "Language": "ಭಾಷೆ", "Voice Tone": "ಧ್ವನಿ ಶೈಲಿ", "Friendly": "ಸ್ನೇಹಪರ", "Calm": "ಶಾಂತ", "Professional": "ವೃತ್ತಿಪರ", "Detection": "ಪತ್ತೆಹಚ್ಚುವಿಕೆ", "Voice": "ಧ್ವನಿ", "Ready": "ಸಿದ್ಧ",
      "Map": "ನಕ್ಷೆ", "Stop": "ನಿಲ್ಲಿಸಿ", "Obstacle": "ಅಡೆತಡೆ", "Close": "ಮುಚ್ಚಿ", "Resume Navigation": "ನ್ಯಾವಿಗೇಶನ್ ಮುಂದುವರಿಸಿ", "Assistant Response": "ಸಹಾಯಕನ ಉತ್ತರ", "Home": "ಮುಖಪುಟ", "History": "ಇತಿಹಾಸ", "Settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      "AI Vision": "ಎಐ ದೃಷ್ಟಿ", "Real-time Scene Understanding": "ನೈಜ-ಸಮಯ ದೃಶ್ಯ ಅರಿವು", "AI Assistant": "ಎಐ ಸಹಾಯಕ", "Choose an action or simply speak.": "ಒಂದು ಕ್ರಿಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ.", "Loading AI Engine...": "ಎಐ ಎಂಜಿನ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...", "Inactive": "ನಿಷ್ಕ್ರಿಯ", "ONLINE": "ಆನ್‌ಲೈನ್",
      "Helping visually impaired people live independently ❤️": "ದೃಷ್ಟಿಹೀನರು ಸ್ವತಂತ್ರವಾಗಿ ಬದುಕಲು ಸಹಾಯ ❤️", "Customize your AI Assistant": "ನಿಮ್ಮ ಎಐ ಸಹಾಯಕವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ", "Profile": "ಪ್ರೊಫೈಲ್", "Name": "ಹೆಸರು", "Your Phone Number": "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ", "Home Address": "ಮನೆಯ ವಿಳಾಸ",
      "Shown to your emergency contacts so they know who to call back.": "ತುರ್ತು ಸಂಪರ್ಕಗಳಿಗೆ ನೀವು ಯಾರು ಎಂಬುದು ತಿಳಿಯಲು ತೋರಿಸಲಾಗುತ್ತದೆ.", "Emergency Contacts": "ತುರ್ತು ಸಂಪರ್ಕಗಳು", "These contacts will receive your location during an emergency.": "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿಈ ಸಂಪರ್ಕಗಳಿಗೆ ನಿಮ್ಮ ಸ್ಥಳ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
      "Primary Contact": "ಪ್ರಾಥಮಿಕ ಸಂಪರ್ಕ", "Secondary Contact": "ದ್ವಿತೀಯ ಸಂಪರ್ಕ", "Third Contact": "ಮೂರನೇ ಸಂಪರ್ಕ", "Third Contact (Optional)": "ಮೂರನೇ ಸಂಪರ್ಕ (ಐಚ್ಛಿಕ)", "Accessibility": "ಪ್ರವೇಶಸೌಲಭ್ಯ", "Voice Feedback": "ಧ್ವನಿ ಪ್ರತಿಕ್ರಿಯೆ", "Vibration Feedback": "ಕಂಪನ ಪ್ರತಿಕ್ರಿಯೆ", "High Contrast Mode": "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ ಮೋಡ್", "Large Text": "ದೊಡ್ಡ ಪಠ್ಯ",
      "Permissions": "ಅನುಮತಿಗಳು", "Camera": "ಕ್ಯಾಮೆರಾ", "Location": "ಸ್ಥಳ", "Microphone": "ಮೈಕ್ರೋಫೋನ್", "Internet": "ಇಂಟರ್ನೆಟ್", "Granted": "ಅನುಮತಿ ನೀಡಲಾಗಿದೆ", "Connected": "ಸಂಪರ್ಕಿಸಲಾಗಿದೆ", "Continuous Listening": "ನಿರಂತರವಾಗಿ ಕೇಳುವುದು", "Scene Description": "ದೃಶ್ಯ ವಿವರಣೆ", "Object Detection": "ವಸ್ತು ಪತ್ತೆ", "Memory Assistant": "ಸ್ಮರಣೆ ಸಹಾಯಕ", "Save Settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ", "Reset Settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ", "Exit": "ನಿರ್ಗಮಿಸಿ",
      "Voice Speed": "ಧ್ವನಿ ವೇಗ", "Wake Word": "ವೇಕ್ ವರ್ಡ್", "Welcome to AIVisualAssistant": "AIVisualAssistant ಗೆ ಸ್ವಾಗತ", "Choose Language": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ", "Select your preferred language.": "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.", "AIVisualAssistant needs these permissions.": "AIVisualAssistant ಗೆ ಈ ಅನುಮತಿಗಳು ಅಗತ್ಯವಿದೆ.",
      "Required for Object Detection": "ವಸ್ತು ಪತ್ತೆಗೆ ಅಗತ್ಯ", "Required for Voice Commands": "ಧ್ವನಿ ಆಜ್ಞೆಗಳಿಗೆ ಅಗತ್ಯ", "Required for Navigation": "ನ್ಯಾವಿಗೇಶನ್‌ಗೆ ಅಗತ್ಯ", "Required for Alerts": "ಎಚ್ಚರಿಕೆಗಳಿಗೆ ಅಗತ್ಯ", "Allow Permissions": "ಅನುಮತಿಗಳನ್ನು ನೀಡಿ", "Continue": "ಮುಂದುವರಿಸಿ", "Back": "ಹಿಂದೆ", "Start Setup": "ಸೆಟಪ್ ಪ್ರಾರಂಭಿಸಿ",
      "Add people who should be contacted in an emergency.": "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಸಂಪರ್ಕಿಸಬೇಕಾದ ಜನರನ್ನು ಸೇರಿಸಿ.", "Save your home address so you can simply say \"Take me home.\"": "ಮನೆಯ ವಿಳಾಸವನ್ನು ಉಳಿಸಿ, ನಂತರ \"ನನ್ನನ್ನು ಮನೆಗೆ ಕರೆದುಕೊಂಡು ಹೋಗಿ\" ಎಂದು ಹೇಳಬಹುದು.", "Voice Test": "ಧ್ವನಿ ಪರೀಕ್ಷೆ", "Press the microphone and say": "ಮೈಕ್ರೋಫೋನ್ ಒತ್ತಿ ಹೇಳಿ", "Waiting...": "ಕಾಯುತ್ತಿದೆ...", "Setup Completed": "ಸೆಟಪ್ ಪೂರ್ಣಗೊಂಡಿದೆ", "AIVisualAssistant is now ready.": "AIVisualAssistant ಈಗ ಸಿದ್ಧವಾಗಿದೆ.",
      "Language Saved": "ಭಾಷೆ ಉಳಿಸಲಾಗಿದೆ", "Permissions Granted": "ಅನುಮತಿಗಳು ದೊರೆತಿವೆ", "Emergency Contacts Saved": "ತುರ್ತು ಸಂಪರ್ಕಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ", "Home Address Saved": "ಮನೆಯ ವಿಳಾಸ ಉಳಿಸಲಾಗಿದೆ", "Voice Assistant Configured": "ಧ್ವನಿ ಸಹಾಯಕವನ್ನು ಹೊಂದಿಸಲಾಗಿದೆ", "Go To Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ", "Start Voice Test": "ಧ್ವನಿ ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ",
      "Current Direction": "ಪ್ರಸ್ತುತ ದಿಕ್ಕು", "Ready to navigate": "ನ್ಯಾವಿಗೇಶನ್‌ಗೆ ಸಿದ್ಧ", "Ready to Navigate": "ನ್ಯಾವಿಗೇಶನ್‌ಗೆ ಸಿದ್ಧ", "Press the button or Volume Up key to start": "ಪ್ರಾರಂಭಿಸಲು ಬಟನ್ ಅಥವಾ ವಾಲ್ಯೂಮ್ ಅಪ್ ಕೀ ಒತ್ತಿ", "Start Listening": "ಕೇಳುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿ", "Shortcuts & Instructions": "ಶಾರ್ಟ್‌ಕಟ್‌ಗಳು ಮತ್ತು ಸೂಚನೆಗಳು", "Talking to Netra": "Netra ಜೊತೆ ಮಾತನಾಡುವುದು", "Touch Gestures (work anywhere on screen)": "ಟಚ್ ಗೆಸ್ಚರ್‌ಗಳು (ಸ್ಕ್ರೀನ್‌ನ ಎಲ್ಲೆಡೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ)", "Emergency": "ತುರ್ತು", "Useful things to say": "ಹೇಳಲು ಉಪಯುಕ್ತ ಮಾತುಗಳು", "Other buttons on the main screen": "ಮುಖ್ಯ ಪರದೆಯ ಇತರ ಬಟನ್‌ಗಳು", "Repeat": "ಮತ್ತೆ ಹೇಳಿ", "Back to App": "ಆಪ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    },
    "ta-IN": {
      "English": "ஆங்கிலம்", "Hindi": "இந்தி", "Kannada": "கன்னடம்", "Tamil": "தமிழ்", "Telugu": "தெலுங்கு",
      "Good Morning 👋": "காலை வணக்கம் 👋", "Ready to help you.": "உங்களுக்கு உதவ தயாராக உள்ளேன்.", "Tap or Say": "தட்டவும் அல்லது சொல்லவும்", "Listening for your commands": "உங்கள் கட்டளைகளைக் கேட்கிறேன்",
      "Talk to Assistant": "உதவியாளருடன் பேசுங்கள்", "Detect Objects": "பொருட்களைக் கண்டறியவும்", "Stop Detection": "கண்டறிதலை நிறுத்தவும்", "Enable GPS": "ஜிபிஎஸ் இயக்கவும்", "Navigation": "வழிசெலுத்தல்", "Read Text": "உரையைப் படிக்கவும்", "Memory": "நினைவகம்", "Describe Scene": "காட்சியை விவரிக்கவும்", "Emergency SOS": "அவசர எஸ்ஓஎஸ்", "Help & Shortcuts": "உதவி மற்றும் குறுக்குவழிகள்",
      "Language": "மொழி", "Voice Tone": "குரல் தொனி", "Friendly": "நட்பான", "Calm": "அமைதியான", "Professional": "தொழில்முறை", "Detection": "கண்டறிதல்", "Voice": "குரல்", "Ready": "தயார்", "Map": "வரைபடம்", "Stop": "நிறுத்து", "Obstacle": "தடை", "Close": "மூடு", "Resume Navigation": "வழிசெலுத்தலைத் தொடரவும்", "Assistant Response": "உதவியாளரின் பதில்", "Home": "முகப்பு", "History": "வரலாறு", "Settings": "அமைப்புகள்",
      "AI Vision": "ஏஐ பார்வை", "Real-time Scene Understanding": "நிகழ்நேர காட்சி புரிதல்", "AI Assistant": "ஏஐ உதவியாளர்", "Choose an action or simply speak.": "ஒரு செயலைத் தேர்ந்தெடுக்கவும் அல்லது பேசவும்.", "Loading AI Engine...": "ஏஐ இயந்திரம் ஏற்றப்படுகிறது...", "Inactive": "செயலற்றது", "ONLINE": "ஆன்லைன்", "Helping visually impaired people live independently ❤️": "பார்வைக் குறைபாடு உள்ளவர்கள் சுதந்திரமாக வாழ உதவுகிறது ❤️",
      "Customize your AI Assistant": "உங்கள் ஏஐ உதவியாளரை தனிப்பயனாக்குங்கள்", "Profile": "சுயவிவரம்", "Name": "பெயர்", "Your Phone Number": "உங்கள் தொலைபேசி எண்", "Home Address": "வீட்டு முகவரி", "Shown to your emergency contacts so they know who to call back.": "உங்கள் அவசர தொடர்புகளுக்கு திரும்ப யாரை அழைக்க வேண்டும் என்பதை அறிய இது காட்டப்படும்.", "Emergency Contacts": "அவசர தொடர்புகள்", "These contacts will receive your location during an emergency.": "அவசர நேரத்தில் இந்த தொடர்புகளுக்கு உங்கள் இருப்பிடம் அனுப்பப்படும்.", "Primary Contact": "முதன்மை தொடர்பு", "Secondary Contact": "இரண்டாம் தொடர்பு", "Third Contact": "மூன்றாம் தொடர்பு", "Third Contact (Optional)": "மூன்றாம் தொடர்பு (விருப்பம்)",
      "Accessibility": "அணுகல்தன்மை", "Voice Feedback": "குரல் பின்னூட்டம்", "Vibration Feedback": "அதிர்வு பின்னூட்டம்", "High Contrast Mode": "உயர் மாறுபாடு பயன்முறை", "Large Text": "பெரிய எழுத்து", "Permissions": "அனுமதிகள்", "Camera": "கேமரா", "Location": "இருப்பிடம்", "Microphone": "மைக்ரோஃபோன்", "Internet": "இணையம்", "Granted": "அனுமதி வழங்கப்பட்டது", "Connected": "இணைக்கப்பட்டது", "Continuous Listening": "தொடர்ந்து கேட்கும்", "Scene Description": "காட்சி விளக்கம்", "Object Detection": "பொருள் கண்டறிதல்", "Memory Assistant": "நினைவக உதவியாளர்", "Save Settings": "அமைப்புகளைச் சேமிக்கவும்", "Reset Settings": "அமைப்புகளை மீட்டமைக்கவும்", "Exit": "வெளியேறு", "Voice Speed": "குரல் வேகம்", "Wake Word": "விழிப்பு சொல்",
      "Welcome to AIVisualAssistant": "AIVisualAssistant-க்கு வரவேற்கிறோம்", "Choose Language": "மொழியைத் தேர்ந்தெடுக்கவும்", "Select your preferred language.": "உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.", "AIVisualAssistant needs these permissions.": "AIVisualAssistant-க்கு இந்த அனுமதிகள் தேவை.", "Required for Object Detection": "பொருள் கண்டறிதலுக்கு தேவை", "Required for Voice Commands": "குரல் கட்டளைகளுக்கு தேவை", "Required for Navigation": "வழிசெலுத்தலுக்கு தேவை", "Required for Alerts": "எச்சரிக்கைகளுக்கு தேவை", "Allow Permissions": "அனுமதிகளை அனுமதிக்கவும்", "Continue": "தொடரவும்", "Back": "பின்செல்", "Start Setup": "அமைப்பைத் தொடங்கவும்", "Add people who should be contacted in an emergency.": "அவசர நேரத்தில் தொடர்பு கொள்ள வேண்டியவர்களைச் சேர்க்கவும்.",
      "Save your home address so you can simply say \"Take me home.\"": "உங்கள் வீட்டு முகவரியைச் சேமித்து, \"என்னை வீட்டிற்கு அழைத்துச் செல்லுங்கள்\" என்று மட்டும் சொல்லலாம்.", "Voice Test": "குரல் சோதனை", "Press the microphone and say": "மைக்ரோஃபோனை அழுத்தி சொல்லுங்கள்", "Waiting...": "காத்திருக்கிறது...", "Setup Completed": "அமைப்பு முடிந்தது", "AIVisualAssistant is now ready.": "AIVisualAssistant இப்போது தயாராக உள்ளது.", "Language Saved": "மொழி சேமிக்கப்பட்டது", "Permissions Granted": "அனுமதிகள் வழங்கப்பட்டன", "Emergency Contacts Saved": "அவசர தொடர்புகள் சேமிக்கப்பட்டன", "Home Address Saved": "வீட்டு முகவரி சேமிக்கப்பட்டது", "Voice Assistant Configured": "குரல் உதவியாளர் அமைக்கப்பட்டது", "Go To Dashboard": "டாஷ்போர்டுக்குச் செல்லவும்", "Start Voice Test": "குரல் சோதனையைத் தொடங்கவும்",
      "Current Direction": "தற்போதைய திசை", "Ready to navigate": "வழிசெலுத்த தயாராக உள்ளது", "Ready to Navigate": "வழிசெலுத்த தயாராக உள்ளது", "Press the button or Volume Up key to start": "தொடங்க பொத்தானை அல்லது வால்யூம் அப் விசையை அழுத்தவும்", "Start Listening": "கேட்பதைத் தொடங்கவும்", "Shortcuts & Instructions": "குறுக்குவழிகள் மற்றும் வழிமுறைகள்", "Talking to Netra": "Netra-வுடன் பேசுதல்", "Touch Gestures (work anywhere on screen)": "தொடு சைகைகள் (திரையில் எங்கும் வேலை செய்யும்)", "Emergency": "அவசரம்", "Useful things to say": "சொல்ல பயனுள்ளவை", "Other buttons on the main screen": "முதன்மை திரையின் பிற பொத்தான்கள்", "Repeat": "மீண்டும் சொல்லவும்", "Back to App": "ஆப்பிற்குத் திரும்பவும்",
    },
    "te-IN": {
      "English": "ఆంగ్లం", "Hindi": "హిందీ", "Kannada": "కన్నడ", "Tamil": "తమిళం", "Telugu": "తెలుగు",
      "Good Morning 👋": "శుభోదయం 👋", "Ready to help you.": "మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను.", "Tap or Say": "నొక్కండి లేదా చెప్పండి", "Listening for your commands": "మీ ఆదేశాలను వింటున్నాను",
      "Talk to Assistant": "సహాయకుడితో మాట్లాడండి", "Detect Objects": "వస్తువులను గుర్తించండి", "Stop Detection": "గుర్తింపును ఆపండి", "Enable GPS": "జీపీఎస్‌ను ప్రారంభించండి", "Navigation": "నావిగేషన్", "Read Text": "వచనాన్ని చదవండి", "Memory": "జ్ఞాపకం", "Describe Scene": "దృశ్యాన్ని వివరించండి", "Emergency SOS": "అత్యవసర SOS", "Help & Shortcuts": "సహాయం మరియు షార్ట్‌కట్‌లు",
      "Language": "భాష", "Voice Tone": "వాయిస్ టోన్", "Friendly": "స్నేహపూర్వక", "Calm": "ప్రశాంతమైన", "Professional": "వృత్తిపరమైన", "Detection": "గుర్తింపు", "Voice": "వాయిస్", "Ready": "సిద్ధంగా ఉంది", "Map": "మ్యాప్", "Stop": "ఆపండి", "Obstacle": "అడ్డంకి", "Close": "మూసివేయండి", "Resume Navigation": "నావిగేషన్‌ను కొనసాగించండి", "Assistant Response": "సహాయకుడి సమాధానం", "Home": "హోమ్", "History": "చరిత్ర", "Settings": "సెట్టింగ్‌లు",
      "AI Vision": "ఏఐ విజన్", "Real-time Scene Understanding": "రియల్-టైమ్ దృశ్య అవగాహన", "AI Assistant": "ఏఐ సహాయకుడు", "Choose an action or simply speak.": "ఒక చర్యను ఎంచుకోండి లేదా మాట్లాడండి.", "Loading AI Engine...": "ఏఐ ఇంజిన్ లోడ్ అవుతోంది...", "Inactive": "నిష్క్రియ", "ONLINE": "ఆన్‌లైన్", "Helping visually impaired people live independently ❤️": "దృష్టి లోపం ఉన్నవారు స్వతంత్రంగా జీవించేందుకు సహాయం ❤️",
      "Customize your AI Assistant": "మీ ఏఐ సహాయకుడిని అనుకూలీకరించండి", "Profile": "ప్రొఫైల్", "Name": "పేరు", "Your Phone Number": "మీ ఫోన్ నంబర్", "Home Address": "ఇంటి చిరునామా", "Shown to your emergency contacts so they know who to call back.": "మీకు తిరిగి ఎవరిని కాల్ చేయాలో అత్యవసర పరిచయాలకు చూపబడుతుంది.", "Emergency Contacts": "అత్యవసర పరిచయాలు", "These contacts will receive your location during an emergency.": "అత్యవసర సమయంలో ఈ పరిచయాలకు మీ స్థానం పంపబడుతుంది.", "Primary Contact": "ప్రాథమిక పరిచయం", "Secondary Contact": "ద్వితీయ పరిచయం", "Third Contact": "మూడవ పరిచయం", "Third Contact (Optional)": "మూడవ పరిచయం (ఐచ్ఛికం)",
      "Accessibility": "యాక్సెసిబిలిటీ", "Voice Feedback": "వాయిస్ ఫీడ్‌బ్యాక్", "Vibration Feedback": "వైబ్రేషన్ ఫీడ్‌బ్యాక్", "High Contrast Mode": "అధిక కాంట్రాస్ట్ మోడ్", "Large Text": "పెద్ద అక్షరాలు", "Permissions": "అనుమతులు", "Camera": "కెమెరా", "Location": "స్థానం", "Microphone": "మైక్రోఫోన్", "Internet": "ఇంటర్నెట్", "Granted": "అనుమతి ఉంది", "Connected": "కనెక్ట్ అయింది", "Continuous Listening": "నిరంతరం వినడం", "Scene Description": "దృశ్య వివరణ", "Object Detection": "వస్తు గుర్తింపు", "Memory Assistant": "మెమరీ సహాయకుడు", "Save Settings": "సెట్టింగ్‌లను సేవ్ చేయండి", "Reset Settings": "సెట్టింగ్‌లను రీసెట్ చేయండి", "Exit": "నిష్క్రమించండి", "Voice Speed": "వాయిస్ వేగం", "Wake Word": "వేక్ వర్డ్",
      "Welcome to AIVisualAssistant": "AIVisualAssistant కు స్వాగతం", "Choose Language": "భాషను ఎంచుకోండి", "Select your preferred language.": "మీకు ఇష్టమైన భాషను ఎంచుకోండి.", "AIVisualAssistant needs these permissions.": "AIVisualAssistant కు ఈ అనుమతులు అవసరం.", "Required for Object Detection": "వస్తు గుర్తింపుకు అవసరం", "Required for Voice Commands": "వాయిస్ ఆదేశాలకు అవసరం", "Required for Navigation": "నావిగేషన్‌కు అవసరం", "Required for Alerts": "అలర్ట్‌లకు అవసరం", "Allow Permissions": "అనుమతులను ఇవ్వండి", "Continue": "కొనసాగించండి", "Back": "వెనుకకు", "Start Setup": "సెటప్ ప్రారంభించండి", "Add people who should be contacted in an emergency.": "అత్యవసర సమయంలో సంప్రదించాల్సిన వ్యక్తులను జోడించండి.",
      "Save your home address so you can simply say \"Take me home.\"": "మీ ఇంటి చిరునామాను సేవ్ చేయండి, తర్వాత \"నన్ను ఇంటికి తీసుకెళ్లండి\" అని మాత్రమే చెప్పవచ్చు.", "Voice Test": "వాయిస్ పరీక్ష", "Press the microphone and say": "మైక్రోఫోన్ నొక్కి చెప్పండి", "Waiting...": "వేచి ఉంది...", "Setup Completed": "సెటప్ పూర్తయింది", "AIVisualAssistant is now ready.": "AIVisualAssistant ఇప్పుడు సిద్ధంగా ఉంది.", "Language Saved": "భాష సేవ్ అయింది", "Permissions Granted": "అనుమతులు ఇవ్వబడ్డాయి", "Emergency Contacts Saved": "అత్యవసర పరిచయాలు సేవ్ అయ్యాయి", "Home Address Saved": "ఇంటి చిరునామా సేవ్ అయింది", "Voice Assistant Configured": "వాయిస్ సహాయకుడు కాన్ఫిగర్ అయ్యాడు", "Go To Dashboard": "డ్యాష్‌బోర్డ్‌కు వెళ్లండి", "Start Voice Test": "వాయిస్ పరీక్ష ప్రారంభించండి",
      "Current Direction": "ప్రస్తుత దిశ", "Ready to navigate": "నావిగేషన్‌కు సిద్ధంగా ఉంది", "Ready to Navigate": "నావిగేషన్‌కు సిద్ధంగా ఉంది", "Press the button or Volume Up key to start": "ప్రారంభించడానికి బటన్ లేదా వాల్యూమ్ అప్ కీని నొక్కండి", "Start Listening": "వినడం ప్రారంభించండి", "Shortcuts & Instructions": "షార్ట్‌కట్‌లు మరియు సూచనలు", "Talking to Netra": "Netraతో మాట్లాడటం", "Touch Gestures (work anywhere on screen)": "టచ్ జెస్చర్లు (స్క్రీన్‌లో ఎక్కడైనా పనిచేస్తాయి)", "Emergency": "అత్యవసరం", "Useful things to say": "చెప్పడానికి ఉపయోగకరమైనవి", "Other buttons on the main screen": "ప్రధాన స్క్రీన్‌లోని ఇతర బటన్లు", "Repeat": "మళ్లీ చెప్పండి", "Back to App": "యాప్‌కు తిరిగి వెళ్లండి",
    },
  };

  const cacheKey = (lang) => `aivi_ui_translation_${lang}`;

  function walkTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        const value = node.nodeValue.trim();
        if (!value || value.length < 2) return NodeFilter.FILTER_REJECT;
        if (parent.closest("[data-no-translate='true']")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function replaceKnown(lang) {
    const dict = CORE[lang] || CORE["en-IN"];
    walkTextNodes(document.body).forEach((node) => {
      const raw = node.nodeValue;
      const original = node.parentElement.dataset.aiviOriginalText || raw.trim();
      node.parentElement.dataset.aiviOriginalText = original;
      if (dict[original]) node.nodeValue = raw.replace(raw.trim(), dict[original]);
    });

    document.querySelectorAll("[placeholder]").forEach((el) => {
      const p = el.getAttribute("placeholder");
      const original = el.dataset.aiviOriginalPlaceholder || p;
      el.dataset.aiviOriginalPlaceholder = original;
      if (dict[original]) el.setAttribute("placeholder", dict[original]);
    });
  }

  async function translateMissing(lang) {
    if (lang === "en-IN") return;
    const dict = CORE[lang] || {};
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem(cacheKey(lang)) || "{}"); } catch (_) {}

    const nodes = walkTextNodes(document.body);
    const missing = [];
    for (const node of nodes) {
      const s = node.parentElement.dataset.aiviOriginalText || node.nodeValue.trim();
      if (s && !dict[s] && !cache[s] && !missing.includes(s) && s.length >= 3) missing.push(s);
    }
    if (!missing.length) return;

    try {
      const response = await fetch("/api/translate-ui", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: lang, texts: missing.slice(0, 150) }),
      });
      const result = await response.json();
      if (result.success && result.translations) {
        cache = { ...cache, ...result.translations };
        localStorage.setItem(cacheKey(lang), JSON.stringify(cache));
        walkTextNodes(document.body).forEach((node) => {
          const s = node.parentElement.dataset.aiviOriginalText || node.nodeValue.trim();
          if (cache[s]) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), cache[s]);
        });
      }
    } catch (e) {
      console.warn("Optional UI translation service unavailable:", e);
    }
  }

  async function apply(lang) {
    if (!LANGUAGES[lang]) lang = "en-IN";
    document.documentElement.lang = lang;
    localStorage.setItem("blindmate_language", lang);
    const titles = {
      "en-IN": "AIVisualAssistant", "hi-IN": "AIVisualAssistant", "kn-IN": "AIVisualAssistant",
      "ta-IN": "AIVisualAssistant", "te-IN": "AIVisualAssistant"
    };
    if (document.title) document.title = titles[lang] || document.title;
    replaceKnown(lang);
    await translateMissing(lang);
  }

  window.AIVI_LANGUAGES = LANGUAGES;
  window.AIVI_TRANSLATIONS = CORE;
  window.AIVI_I18N = { apply, replaceKnown, translateMissing, languages: LANGUAGES };

  document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("blindmate_language") || "en-IN";
    apply(lang);
  });
})();
