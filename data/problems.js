// Fallback loader so the site also works when opened directly from disk.
// When served over HTTP, app.js fetches problems.json instead.
window.__WSIDN_DATA__ = {
  "meta": {
    "siteName": "What Should I Do Now",
    "shortName": "WSIDN",
    "lastUpdated": "2025-01-15",
    "baseUrl": "https://wsidn.example"
  },
  "categories": [
    { "id": "01", "slug": "phone-sim",   "name": "Phone & SIM",       "name_ur": "فون اور سم",       "desc": "SIM, mobile network, lost phone, mobile data.",        "desc_ur": "سم، موبائل نیٹ ورک، گمشدہ فون، موبائل ڈیٹا۔" },
    { "id": "02", "slug": "money-scams", "name": "Money & Scams",     "name_ur": "پیسہ اور فراڈ",    "desc": "Fraud, suspicious calls, bank issues, OTP theft.",    "desc_ur": "فراڈ، مشکوک کالز، بینک مسائل، او ٹی پی چوری۔" },
    { "id": "03", "slug": "documents",   "name": "Documents & ID",    "name_ur": "دستاویزات اور شناخت", "desc": "CNIC, passport, driving licence, NADRA.",           "desc_ur": "شناختی کارڈ، پاسپورٹ، ڈرائیونگ لائسنس، نادرا۔" },
    { "id": "04", "slug": "emergencies", "name": "Emergencies",       "name_ur": "ایمرجنسی",         "desc": "Unconscious person, fire, accident, first steps.",    "desc_ur": "بے ہوش شخص، آگ، حادثہ، پہلے اقدامات۔" },
    { "id": "05", "slug": "everyday",    "name": "Everyday Services", "name_ur": "روزمرہ خدمات",     "desc": "Petrol pumps, electricity, water, fuel.",             "desc_ur": "پیٹرول پمپ، بجلی، پانی، ایندھن۔" }
  ],
  "urgency": {
    "emergency": { "en": "emergency", "ur": "ایمرجنسی" },
    "urgent":    { "en": "urgent",    "ur": "فوری" },
    "routine":   { "en": "routine",   "ur": "معمول" }
  },
  "problems": [
    {
      "id": "sim-stopped-working",
      "category": "phone-sim",
      "urgency": "urgent",
      "slug": "my-sim-stopped-working",
      "title": "My SIM stopped working. Now what?",
      "title_ur": "میرا سم بند ہو گیا۔ اب کیا کروں؟",
      "summary": "A practical checklist for identifying the problem and restoring service safely.",
      "summary_ur": "مسئلہ کی شناخت اور سروس بحال کرنے کے لیے ایک عملی چیک لسٹ۔",
      "readTime": "5 min read",
      "readTime_ur": "5 منٹ کا مطالعہ",
      "lastVerified": "2025-01-15",
      "firstProtect": "If this number is linked to banking or important accounts, secure access through official channels. Never share an OTP or account PIN with someone claiming to help.",
      "firstProtect_ur": "اگر یہ نمبر بینکنگ یا اہم اکاؤنٹس سے منسلک ہے تو سرکاری ذرائع سے رسائی محفوظ کریں۔ کبھی بھی کسی کے ساتھ او ٹی پی یا پن شیئر نہ کریں۔",
      "steps": [
        { "n": "01", "h": "Check the SIM",         "h_ur": "سم چیک کریں",   "p": "Restart the phone and test the SIM in a compatible device if safe to do so.", "p_ur": "فون ری اسٹارٹ کریں اور ممکن ہو تو سم کسی اور ڈیوائس میں آزمائیں۔" },
        { "n": "02", "h": "Read the error",        "h_ur": "ایرر پڑھیں",    "p": "Note whether the phone says 'No service', 'Invalid SIM' or something else.",   "p_ur": "دیکھیں کہ فون 'سروس نہیں'، 'غلط سم' یا کچھ اور دکھا رہا ہے۔" },
        { "n": "03", "h": "Contact your operator", "h_ur": "اپنے آپریٹر سے رابطہ کریں", "p": "Use its official support channel to check whether the number is blocked, inactive or needs replacement.", "p_ur": "اس کے سرکاری سپورٹ چینل سے پوچھیں کہ نمبر بلاک، غیر فعال یا تبدیل کرنے کی ضرورت ہے۔" }
      ],
      "doNot": [
        "Never share your OTP, PIN or CNIC photo with anyone who calls you.",
        "Do not buy a replacement SIM from an unofficial shop.",
        "Do not pay someone online to 'reactivate' your SIM."
      ],
      "doNot_ur": [
        "کبھی اپنا او ٹی پی، پن یا شناختی کارڈ کی تصویر کال کرنے والے کو نہ دیں۔",
        "غیر سرکاری دکان سے نیا سم نہ خریدیں۔",
        "آن لائن کسی کو 'سم بحال کرنے' کے پیسے نہ دیں۔"
      ],
      "official": [
        { "label": "Jazz — official support",    "label_ur": "جاز — سرکاری سپورٹ",    "url": "https://www.jazz.com.pk/" },
        { "label": "Zong — official support",    "label_ur": "زونگ — سرکاری سپورٹ",   "url": "https://www.zong.com.pk/" },
        { "label": "Telenor — official support", "label_ur": "ٹیلی نار — سرکاری سپورٹ", "url": "https://www.telenor.com.pk/" },
        { "label": "Ufone — official support",   "label_ur": "یوفون — سرکاری سپورٹ",  "url": "https://www.ufone.com/" },
        { "label": "PTA — official site",        "label_ur": "پی ٹی اے — سرکاری سائٹ", "url": "https://www.pta.gov.pk/" }
      ],
      "ifFails": "Visit the operator's official franchise in person with your original CNIC. Ask for a written reference number for your complaint.",
      "ifFails_ur": "اصل شناختی کارڈ کے ساتھ آپریٹر کی سرکاری فرنچائز پر جائیں۔ شکایت کا تحریری حوالہ نمبر لیں۔",
      "finder": {
        "question": "What message do you see?",
        "question_ur": "آپ کو کیا پیغام نظر آ رہا ہے؟",
        "options": [
          { "label": "Invalid SIM",                       "label_ur": "غلط سم",                 "next": "Reseat the SIM, test it in another phone. If still invalid, visit an operator franchise with your CNIC for replacement.", "next_ur": "سم نکال کر دوبارہ لگائیں، دوسرے فون میں آزمائیں۔ پھر بھی غلط ہو تو شناختی کارڈ کے ساتھ فرنچائز جائیں۔" },
          { "label": "No service / emergency calls only", "label_ur": "سروس نہیں / صرف ایمرجنسی کالز", "next": "Check network coverage in your area, toggle airplane mode, restart. If the problem persists, contact your operator's official support.", "next_ur": "اپنے علاقے میں نیٹ ورک چیک کریں، ایئرپلین موڈ آن/آف کریں، ری اسٹارٹ کریں۔ مسئلہ برقرار رہے تو سرکاری سپورٹ سے رابطہ کریں۔" },
          { "label": "SIM works in another phone",        "label_ur": "سم دوسرے فون میں چلتی ہے", "next": "The SIM is fine — the issue is likely your phone. Try a different SIM in your phone, or have the SIM slot inspected.",      "next_ur": "سم ٹھیک ہے — مسئلہ فون میں ہے۔ کوئی دوسری سم آزمائیں یا سم سلاٹ چیک کروائیں۔" },
          { "label": "My number is inactive",             "label_ur": "میرا نمبر غیر فعال ہے",     "next": "Visit your operator's franchise with your CNIC to check the status. Ask for a complaint reference number.",                 "next_ur": "شناختی کارڈ کے ساتھ آپریٹر کی فرنچائز جائیں۔ شکایت کا حوالہ نمبر لیں۔" }
        ]
      },
      "related": ["received-suspicious-call", "lost-cnic"]
    },
    {
      "id": "received-suspicious-call",
      "category": "money-scams",
      "urgency": "urgent",
      "slug": "received-suspicious-call",
      "title": "I received a suspicious call or message. What now?",
      "title_ur": "مجھے مشکوک کال یا پیغام آیا۔ اب کیا کروں؟",
      "summary": "How to tell if a call is a scam and what to do if you've already shared information.",
      "summary_ur": "کیسے پہچانیں کہ کال فراڈ ہے، اور اگر معلومات شیئر کر دی ہوں تو کیا کریں۔",
      "readTime": "4 min read",
      "readTime_ur": "4 منٹ کا مطالعہ",
      "lastVerified": "2025-01-15",
      "firstProtect": "Do not share any OTP, PIN, password, or CNIC photo. No legitimate bank, telecom, or government office will ask for these over a call.",
      "firstProtect_ur": "کوئی او ٹی پی، پن، پاس ورڈ یا شناختی کارڈ کی تصویر شیئر نہ کریں۔ کوئی سرکاری ادارہ، بینک یا ٹیلی کام کمپنی کال پر یہ نہیں مانگتی۔",
      "steps": [
        { "n": "01", "h": "Hang up",         "h_ur": "کال کاٹ دیں",       "p": "You do not owe a stranger your time. Hang up if you feel pressured.", "p_ur": "آپ کسی اجنبی کے ساتھ وقت گزارنے کے پابند نہیں۔ دباؤ محسوس ہو تو کال کاٹ دیں۔" },
        { "n": "02", "h": "Don't click links", "h_ur": "لنکس پر کلک نہ کریں", "p": "Do not click links in SMS or WhatsApp from unknown numbers, especially if they mention your account or a prize.", "p_ur": "نامعلوم نمبروں کے ایس ایم ایس یا واٹس ایپ لنکس پر کلک نہ کریں، خاص طور پر اگر وہ اکاؤنٹ یا انعام کا ذکر کریں۔" },
        { "n": "03", "h": "Verify through official channels", "h_ur": "سرکاری ذرائع سے تصدیق کریں", "p": "Call your bank or telecom operator using the number on the back of your card or their official website — not the number that called you.", "p_ur": "اپنے بینک یا آپریٹر کو کارڈ پر لکھے نمبر یا سرکاری ویب سائٹ سے کال کریں — اُس نمبر پر نہیں جس نے کال کی۔" },
        { "n": "04", "h": "Report it",        "h_ur": "رپورٹ کریں",         "p": "Report to the PTA (for telecom scams) or your bank (for banking scams).", "p_ur": "پی ٹی اے (ٹیلی کام فراڈ) یا اپنے بینک (بینکنگ فراڈ) کو رپورٹ کریں۔" }
      ],
      "doNot": [
        "Never share an OTP — even with someone who says they are from your bank.",
        "Do not install remote-access apps on request.",
        "Do not pay 'clearance fees' to receive a prize."
      ],
      "doNot_ur": [
        "کبھی او ٹی پی شیئر نہ کریں — چاہے کوئی کہے کہ وہ بینک سے ہے۔",
        "کسی کہنے پر ریموٹ رسائی ایپس انسٹال نہ کریں۔",
        "انعام لینے کے لیے 'کلیئرنس فیس' ادا نہ کریں۔"
      ],
      "official": [
        { "label": "PTA — complaint / report", "label_ur": "پی ٹی اے — شکایت / رپورٹ", "url": "https://www.pta.gov.pk/" },
        { "label": "State Bank of Pakistan",   "label_ur": "اسٹیٹ بینک آف پاکستان",   "url": "https://www.sbp.org.pk/" },
        { "label": "FIA Cybercrime Wing",      "label_ur": "ایف آئی اے سائبر کرائم",   "url": "https://www.fia.gov.pk/" }
      ],
      "ifFails": "If you've already shared an OTP or PIN, contact your bank immediately through official channels and ask them to freeze the account.",
      "ifFails_ur": "اگر او ٹی پی یا پن شیئر کر دیا ہے تو فوراً سرکاری ذرائع سے بینک کو کہیں کہ اکاؤنٹ منجمد کر دیں۔",
      "finder": {
        "question": "What has already happened?",
        "question_ur": "اب تک کیا ہوا ہے؟",
        "options": [
          { "label": "I shared an OTP or PIN",         "label_ur": "میں نے او ٹی پی یا پن شیئر کیا", "next": "Contact your bank immediately via their official number. Ask to freeze the account and dispute any transactions.", "next_ur": "فوراً سرکاری نمبر پر بینک کو کال کریں۔ اکاؤنٹ منجمد کرائیں اور لین دین پر اعتراض درج کریں۔" },
          { "label": "I sent money",                   "label_ur": "میں نے پیسے بھیجے",             "next": "Contact your bank or payment provider now. Report the fraud and ask for a transaction reversal. File an FIA complaint.", "next_ur": "ابھی بینک یا پیمنٹ پرووائیڈر سے رابطہ کریں۔ فراڈ رپورٹ کریں اور ٹرانزیکشن واپس کرانے کی درخواست دیں۔ ایف آئی اے میں شکایت درج کریں۔" },
          { "label": "Only received a suspicious link", "label_ur": "صرف مشکوک لنک آیا",            "next": "Do not click it. Block the number. Report to PTA if it arrived via SMS.", "next_ur": "اس پر کلک نہ کریں۔ نمبر بلاک کریں۔ ایس ایم ایس ہو تو پی ٹی اے کو رپورٹ کریں۔" },
          { "label": "Only received a suspicious call", "label_ur": "صرف مشکوک کال آئی",            "next": "Hang up. No legitimate bank or government office asks for OTPs over the phone.", "next_ur": "کال کاٹ دیں۔ کوئی جائز بینک یا سرکاری دفتر فون پر او ٹی پی نہیں مانگتا۔" }
        ]
      },
      "related": ["sim-stopped-working", "lost-cnic"]
    },
    {
      "id": "lost-cnic",
      "category": "documents",
      "urgency": "urgent",
      "slug": "lost-cnic",
      "title": "My CNIC is lost or stolen. What now?",
      "title_ur": "میرا شناختی کارڈ گم یا چوری ہو گیا۔ اب کیا کروں؟",
      "summary": "Steps to report, replace, and protect yourself after a lost CNIC in Pakistan.",
      "summary_ur": "گمشدہ شناختی کارڈ کے بعد رپورٹ، تبدیلی اور خود کو محفوظ رکھنے کے اقدامات۔",
      "readTime": "4 min read",
      "readTime_ur": "4 منٹ کا مطالعہ",
      "lastVerified": "2025-01-15",
      "firstProtect": "A lost CNIC can be misused for SIM registration, loans, or fraud. Report it as lost and check that no new SIMs are registered in your name.",
      "firstProtect_ur": "گمشدہ شناختی کارڈ سم رجسٹریشن، قرض یا فراڈ کے لیے استعمال ہو سکتا ہے۔ گمشدگی رپورٹ کریں اور چیک کریں کہ آپ کے نام پر نئی سم رجسٹرڈ نہ ہو۔",
      "steps": [
        { "n": "01", "h": "Report the loss",         "h_ur": "گمشدگی رپورٹ کریں",  "p": "File a lost-property report at your local police station. Keep a copy of the report.", "p_ur": "مقامی تھانے میں گمشدہ سامان کی رپورٹ درج کریں۔ رپورٹ کی کاپی رکھیں۔" },
        { "n": "02", "h": "Apply for a replacement", "h_ur": "نئے کارڈ کی درخواست", "p": "Visit a NADRA office or use the official NADRA website to apply for a replacement CNIC.", "p_ur": "نادرا دفتر جائیں یا سرکاری ویب سائٹ سے نیا شناختی کارڈ بنوائیں۔" },
        { "n": "03", "h": "Check for misuse",        "h_ur": "بدسلوکی چیک کریں",    "p": "Confirm with your telecom operator that no unauthorised SIMs are registered against your CNIC.", "p_ur": "اپنے آپریٹر سے تصدیق کریں کہ آپ کے کارڈ پر کوئی غیر مجاز سم رجسٹرڈ نہیں۔" }
      ],
      "doNot": [
        "Do not share a photo of your CNIC with strangers.",
        "Do not buy a replacement from an unofficial agent.",
        "Do not ignore the loss if your CNIC was linked to bank accounts."
      ],
      "doNot_ur": [
        "اجنبیوں کے ساتھ شناختی کارڈ کی تصویر شیئر نہ کریں۔",
        "غیر سرکاری ایجنٹ سے نیا کارڈ نہ بنوائیں۔",
        "اگر کارڈ بینک اکاؤنٹس سے منسلک تھا تو نظر انداز نہ کریں۔"
      ],
      "official": [
        { "label": "NADRA — official site", "label_ur": "نادرا — سرکاری سائٹ", "url": "https://www.nadra.gov.pk/" },
        { "label": "PTA — SIM information", "label_ur": "پی ٹی اے — سم معلومات", "url": "https://www.pta.gov.pk/" }
      ],
      "ifFails": "If the online system is unavailable, visit the nearest NADRA office in person with your police report.",
      "ifFails_ur": "آن لائن نظام دستیاب نہ ہو تو پولیس رپورٹ کے ساتھ قریبی نادرا دفتر جائیں۔",
      "finder": {
        "question": "Do you suspect your CNIC has been misused?",
        "question_ur": "کیا آپ کو شبہ ہے کہ کارڈ کا غلط استعمال ہوا؟",
        "options": [
          { "label": "Yes — I see unauthorized SIMs or accounts", "label_ur": "ہاں — غیر مجاز سم یا اکاؤنٹ نظر آ رہے ہیں", "next": "Report to PTA (for SIMs) and your bank (for accounts). File a police report if fraud is confirmed.", "next_ur": "پی ٹی اے (سم) اور بینک (اکاؤنٹ) کو رپورٹ کریں۔ فراڈ ثابت ہو تو پولیس رپورٹ درج کریں۔" },
          { "label": "Not sure",                                   "label_ur": "یقین نہیں",                               "next": "Check your SIMs with your telecom operator and check your bank statements. Block any unauthorized access.", "next_ur": "آپریٹر سے سم چیک کریں اور بینک اسٹیٹمنٹ دیکھیں۔ غیر مجاز رسائی بلاک کریں۔" },
          { "label": "No",                                         "label_ur": "نہیں",                                     "next": "Apply for a replacement CNIC through NADRA and keep the police report for your records.", "next_ur": "نادرا سے نیا کارڈ بنوائیں اور پولیس رپورٹ ریکارڈ کے لیے رکھیں۔" }
        ]
      },
      "related": ["received-suspicious-call"]
    },
    {
      "id": "unconscious-person",
      "category": "emergencies",
      "urgency": "emergency",
      "slug": "someone-is-unconscious",
      "title": "Someone is unconscious. What do I do right now?",
      "title_ur": "کوئی بے ہوش ہے۔ ابھی کیا کروں؟",
      "summary": "Immediate first-aid steps while waiting for emergency services in Pakistan.",
      "summary_ur": "پاکستان میں ایمرجنسی سروس کے انتظار میں فوری ابتدائی طبی امداد کے اقدامات۔",
      "readTime": "3 min read",
      "readTime_ur": "3 منٹ کا مطالعہ",
      "lastVerified": "2025-01-15",
      "firstProtect": "Call emergency services immediately. In Pakistan, Rescue 1122 handles medical emergencies. Do not delay this call to read further.",
      "firstProtect_ur": "فوراً ایمرجنسی سروس کو کال کریں۔ پاکستان میں ریسکیو 1122 طبی ایمرجنسی دیکھتا ہے۔ مزید پڑھنے کے لیے کال میں تاخیر نہ کریں۔",
      "steps": [
        { "n": "01", "h": "Call 1122",             "h_ur": "1122 پر کال کریں",      "p": "Give your exact location and describe the person's condition.", "p_ur": "اپنا درست مقام بتائیں اور شخص کی حالت بیان کریں۔" },
        { "n": "02", "h": "Check breathing",       "h_ur": "سانس چیک کریں",        "p": "Look, listen, and feel for normal breathing for no more than 10 seconds.", "p_ur": "10 سیکنڈ سے زیادہ نہیں — دیکھیں، سنیں اور محسوس کریں کہ سانس نارمل ہے۔" },
        { "n": "03", "h": "Recovery position",     "h_ur": "ریکوری پوزیشن",        "p": "If breathing normally, place them on their side (recovery position) to keep the airway clear. Do not leave them alone.", "p_ur": "سانس نارمل ہو تو انہیں کروٹ پر لٹا دیں تاکہ سانس کی نالی کھلی رہے۔ تنہا نہ چھوڑیں۔" },
        { "n": "04", "h": "If not breathing normally", "h_ur": "اگر سانس نارمل نہ ہو", "p": "Start CPR if trained: 30 chest compressions, 2 rescue breaths. Continue until help arrives.", "p_ur": "تربیت ہو تو سی پی آر شروع کریں: 30 چھاتی کے دباؤ، 2 ریسکیو سانس۔ مدد آنے تک جاری رکھیں۔" }
      ],
      "doNot": [
        "Do not give food or water to an unconscious person.",
        "Do not slap, shake, or splash water to 'wake' them.",
        "Do not leave them alone to look for help — call and stay."
      ],
      "doNot_ur": [
        "بے ہوش شخص کو کھانا یا پانی نہ دیں۔",
        "تھپڑ، ہلانا یا پانی چھڑک کر 'جگانے' کی کوشش نہ کریں۔",
        "مدد کے لیے تنہا نہ چھوڑیں — کال کریں اور ساتھ رہیں۔"
      ],
      "official": [
        { "label": "Rescue 1122 — official site", "label_ur": "ریسکیو 1122 — سرکاری سائٹ", "url": "https://www.rescue.gov.pk/" },
        { "label": "Edhi Foundation",             "label_ur": "ایدھی فاؤنڈیشن",            "url": "https://www.edhi.org/" }
      ],
      "ifFails": "If 1122 is unreachable, call Edhi (115) or the nearest hospital's emergency line directly.",
      "ifFails_ur": "1122 نہ ملے تو ایدھی (115) یا قریبی ہسپتال کی ایمرجنسی لائن پر کال کریں۔",
      "finder": {
        "question": "What is the person's condition?",
        "question_ur": "شخص کی حالت کیا ہے؟",
        "options": [
          { "label": "Not breathing",           "label_ur": "سانس نہیں آ رہی",      "next": "Start CPR if trained and call 1122 immediately. Every second counts.", "next_ur": "تربیت ہو تو سی پی آر شروع کریں اور فوراً 1122 پر کال کریں۔ ہر سیکنڈ قیمتی ہے۔" },
          { "label": "Breathing, unresponsive", "label_ur": "سانس ہے، بے ہوش",      "next": "Place them in the recovery position (on their side) and call 1122. Monitor breathing until help arrives.", "next_ur": "کروٹ پر لٹائیں اور 1122 پر کال کریں۔ مدد آنے تک سانس پر نظر رکھیں۔" },
          { "label": "Breathing, responsive",   "label_ur": "سانس ہے، ہوش میں",     "next": "Keep them still and calm. Ask what happened. Call 1122 if you suspect injury or illness.", "next_ur": "انہیں سکون سے رکھیں۔ پوچھیں کیا ہوا۔ چوٹ یا بیماری کا شبہ ہو تو 1122 پر کال کریں۔" }
        ]
      },
      "related": []
    },
    {
      "id": "find-petrol-pump",
      "category": "everyday",
      "urgency": "routine",
      "slug": "find-nearest-petrol-pump",
      "title": "I need petrol. How do I find the nearest pump?",
      "title_ur": "مجھے پیٹرول چاہیے۔ قریب کا پمپ کیسے تلاش کروں؟",
      "summary": "How to quickly locate a working petrol pump in Pakistan, even when you're low on fuel.",
      "summary_ur": "پاکستان میں قریب کا چلنے والا پیٹرول پمپ جلدی کیسے تلاش کریں، ایندھن کم ہونے پر بھی۔",
      "readTime": "2 min read",
      "readTime_ur": "2 منٹ کا مطالعہ",
      "lastVerified": "2025-01-15",
      "firstProtect": "If you are on a motorway or highway, note the nearest mile marker or exit before searching for a pump.",
      "firstProtect_ur": "اگر آپ موٹروے یا ہائی وے پر ہیں تو پمپ تلاش کرنے سے پہلے قریب کا مائیل مارکر یا ایگزٹ نوٹ کریں۔",
      "steps": [
        { "n": "01", "h": "Use a maps app",             "h_ur": "میپس ایپ استعمال کریں",         "p": "Open Google Maps or Waze and search for 'petrol pump' or 'CNG station' near you.", "p_ur": "گوگل میپس یا ویز کھولیں اور 'پیٹرول پمپ' یا 'سی این جی اسٹیشن' تلاش کریں۔" },
        { "n": "02", "h": "Call ahead if possible",     "h_ur": "ممکن ہو تو پہلے کال کریں",       "p": "If a pump is nearby, call to confirm it has stock — especially during fuel shortages.", "p_ur": "پمپ قریب ہو تو کال کر کے تصدیق کریں کہ ایندھن موجود ہے — خاص طور پر قلت کے دوران۔" },
        { "n": "03", "h": "On motorways, use the official line", "h_ur": "موٹروے پر سرکاری لائن استعمال کریں", "p": "On a motorway, call the Motorway Police helpline (130) for the nearest fuel station and emergency help.", "p_ur": "موٹروے پر موٹروے پولیس ہیلپ لائن (130) پر کال کریں۔" }
      ],
      "doNot": [
        "Do not buy fuel from unlicensed roadside sellers — quality and safety are not guaranteed.",
        "Do not leave your car unattended while refuelling in an unfamiliar area.",
        "Do not ignore a low-fuel warning for long — pumps can be far apart in some areas."
      ],
      "doNot_ur": [
        "غیر لائسنس یافتہ سڑک کنارے فروشوں سے ایندھن نہ خریدیں۔",
        "نئی جگہ پر ایندھن بھرتے وقت گاڑی تنہا نہ چھوڑیں۔",
        "کم ایندھن کے انتباہ کو نظر انداز نہ کریں — کچھ علاقوں میں پمپ دور ہوتے ہیں۔"
      ],
      "official": [
        { "label": "Motorway Police — helpline 130", "label_ur": "موٹروے پولیس — ہیلپ لائن 130", "url": "https://www.nhmp.gov.pk/" },
        { "label": "OGRA — official site",           "label_ur": "اوگرا — سرکاری سائٹ",          "url": "https://www.ogra.org.pk/" }
      ],
      "ifFails": "If no pump is near, call the Motorway Police (130) on a motorway, or your local traffic police in a city, for the nearest station.",
      "ifFails_ur": "قریب پمپ نہ ہو تو موٹروے پر 130 یا شہر میں ٹریفک پولیس کو کال کریں۔",
      "finder": {
        "question": "Where are you right now?",
        "question_ur": "آپ اس وقت کہاں ہیں؟",
        "options": [
          { "label": "On a motorway / highway", "label_ur": "موٹروے / ہائی وے پر", "next": "Call 130 (Motorway Police) for the nearest fuel station and emergency help. Note the nearest mile marker first.", "next_ur": "130 (موٹروے پولیس) پر کال کریں۔ پہلے قریب کا مائیل مارکر نوٹ کریں۔" },
          { "label": "In a city",               "label_ur": "شہر میں",              "next": "Open Google Maps and search 'petrol pump near me'. Call ahead if fuel shortages are reported in your area.", "next_ur": "گوگل میپس میں 'قریب پیٹرول پمپ' تلاش کریں۔ قلت ہو تو پہلے کال کریں۔" },
          { "label": "On a rural road",         "label_ur": "دیہی سڑک پر",          "next": "Ask a nearby shop or passer-by for the nearest pump. Call 130 if you are on a major highway.", "next_ur": "قریبی دکان یا راہگیر سے پوچھیں۔ بڑی ہائی وے ہو تو 130 پر کال کریں۔" }
        ]
      },
      "related": []
    }
  ]
}
null;