import { Slide } from "../slidesData";

export const lecture4Slides: Slide[] = [
  {
    id: 57,
    lectureId: 4,
    titleEn: "Network Administration LAB - Lecture 4: Joining A Domain",
    titleAr: "مختبر إدارة الشبكات - المحاضرة الرابعة: الانضمام للمجال وتهيئته",
    contentEn: [
      "Network Administration",
      "LECTURE 4: JOINING ACTIVE DIRECTORY DOMAINS",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "مختبر إدارة الشبكات",
      "المحاضرة الرابعة: كيفية الانضمام لبيئة ومجال الدليل النشط عملياً وبأمان",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "المحاضرة الرابعة من العمليات الميدانية للطلاب، تركز بالكامل على الآلية الفنية لربط أجهزة المستخدمين والعملاء (Clients) والعمل بنطاق الدليل النشط (Active Directory) لتمكين الإدارة المركزية وتطبيق الصلاحيات الشاملة والسياسات المشتركة.",
    keyConcepts: ["Domain Join", "Active Directory Joining", "Workstation Connection"],
    technicalTips: [
      "عقد وضم أجهزة العميل للمجال يمثل الخطوة الأولى لانطلاق السيطرة؛ وبدونها يعجز السيرفر تماماً عن تمرير سياسات المجموعة أو مراقبة سلوك الحاسوب."
    ]
  },
  {
    id: 58,
    lectureId: 4,
    titleEn: "Domain Joining Fundamentals",
    titleAr: "الأساسيات التقنية والانطلاقة السليمة للانضمام إلى النطاق",
    contentEn: [
      "Clients and servers can join the domain after proper AD configuration.",
      "Pre-requisite: Install and configure at least one AD Domain Controller (DC) and a DNS server.",
      "Network visibility: Clients who join successfully should see Active Directory resources via the Network icon."
    ],
    contentAr: [
      "يتاح لأجهزة العملاء والسيرفرات الانضمام للنطاق بمجرد تهيئة الدليل النشط بشكل سليم.",
      "شرط أساسي: يجب أن يكون هناك خادم متحكم مجال (DC) نشط وخادم DNS مهيأ بالكامل.",
      "الاستكشاف الشبكي: بمجرد الانضمام بنجاح، يستطيع العميل رؤية وتصفح موارد واستثمارات المجال عبر أيقونة الشبكة (Network)."
    ],
    explanation: "تعتمد عملية ربط الأجهزة بالمجال على جاهزية المنظومة. لا يمكن لجهاز أن يتخاطب مع النطاق ما لم يكن عنوان الـ Preferred DNS في بطاقة الشبكة للجهاز العميل يشير مباشرة وبدقة إلى آي بي (IP) خادم الـ DNS الخاص بالدليل النشط، لكي يستطيع ترجمة اسم المجال (مثل aljanad.edu) والعثور على السيرفر.",
    keyConcepts: ["Domain Controller readiness", "Preferred DNS configuration", "Network resource exploration"],
    technicalTips: [
      "في الكارت للعملاء، لا يصح أبداً الإبقاء على DNS لشركة إنترنت خارجية أو ترك الـ DNS تلقائياً ومسحوباً من راوتر منزلي؛ بل يجب أن يشير الـ Preferred DNS لعنوان آي بي متحكم المجال بالجامعة."
    ]
  },
  {
    id: 59,
    lectureId: 4,
    titleEn: "Step-by-Step Domain Joining (Part 1)",
    titleAr: "الخطوات الفنية المباشرة لربط جهاز عميل بالمجال (الجزء الأول)",
    contentEn: [
      "1. Right-click on the Start menu and choose 'System'.",
      "2. Scroll to 'Computer Name' section, click the 'Change Settings' link on the right.",
      "3. Under 'To Rename This Computer Or Change Its Domain Or Workgroup' section, click the 'Change...' button.",
      "4. Under 'Member Of' section, choose the 'Domain' option. Type the Active Directory domain name (e.g., ust.local) and click OK."
    ],
    contentAr: [
      "1. انقر بالزر الأيمن على قائمة ابدأ (Start) في العميل ثم اختر 'النظام' (System).",
      "2. اتجه إلى قسم 'اسم الكمبيوتر' (Computer Name) وانقر على رابط 'تغيير الإعدادات' (Change Settings) على اليسار/اليمين.",
      "3. بجوار النص 'لإعادة تسمية هذا الكمبيوتر أو تغيير المجال أو مجموعة العمل'، انقر على زر 'تغيير' (Change).",
      "4. في شاشة التغيير، تحت قسم 'عضو في' (Member of)، اضغط على خيار 'المجال' (Domain) واكتب اسم النطاق حرفياً (مثال: ust.local) ثم موافق."
    ],
    explanation: "المعالج التقليدي للانضمام (Online Domain Join):\nتتطلب هذه الخطوة اتصالاً مباشراً وحياً بالشبكة بين الجهاز العميل والـ Domain Controller.\nعند كتابة اسم المجال وضغط موافق، يبدأ كائن النظام بالعميل بالبحث عن سجلات DNS الخاصة بمتحكم المجال (SRV Records) لطلب منه توثيق وبناء قناة اتصال.",
    keyConcepts: ["Change Settings dialog", "Computer Name properties", "Member Of: Domain selection", "SRV connection records"],
    technicalTips: [
      "قبل النقر فوق 'تغيير' (Change)، يوصى بشدة بتعميد اسم منسق ومرتب لجهاز العميل (مثل WS-IT-01) بدلاً من الاسم العشوائي لخلق بيئة حاسوبية موحدة."
    ]
  },
  {
    id: 60,
    lectureId: 4,
    titleEn: "Step-by-Step Domain Joining (Part 2)",
    titleAr: "الخطوات الفنية المباشرة لربط جهاز بالمجال (الجزء الثاني)",
    contentEn: [
      "5. A prompt will appear: Enter the username and password of an authorized domain account.",
      "6. Authorized accounts can be a domain administrator or delegated user.",
      "7. Upon success, a welcoming dialog box appears: 'Welcome to the [domain] domain'.",
      "8. You will receive a notification that you must reboot the computer. Select Yes to reboot and apply changes."
    ],
    contentAr: [
      "5. ستظهر لك نافذة تطلب بيانات مستخدم وباسورد مسموح له بإدخال الأجهزة بالنطاق.",
      "6. الحساب المخول قد يكون مدير المجال (Domain Admin) أو مستخدم مفوض بصلاحيات محددة.",
      "7. عند المصادقة بنجاح، ترحب بك شاشة النظام بعبارة: 'Welcome to the [domain] domain'.",
      "8. ستحصل على إشعار يفيد بضرورة إعادة تشغيل الجهاز (Reboot). انقر نعم (Yes) للموافقة وإعادة الإقلاع بسلام."
    ],
    explanation: "خطوة التوثيق وإعادة التشغيل لإتمام العملية:\n\n- كلمة السر لمدير الدليل:\nبمجرد كتابة اسم النطاق ونقرك فوق موافق، وبفرض سلامة الـ DNS، تفتح نافذة أمان ويندوز تطلب كتابة بيانات حساب يمتلك سلطة بالمجال لإضافة الأجهزة. افتراضياً، يمتلك الـ Domain Admin هذه الصلاحية المطلقة.\n\n- أهمية إعادة التشغيل (Reboot):\nإعادة التشغيل إلزامية وحتمية ليقوم نظام تشغيل العميل بإعادة بناء نوى أمان ومصادقة مستخدميه، فيفصل حساباته المحلية القديمة، ويستحضر شاشة دخول مجهزة لتسجيل مستخدمي الدليل النشط وتحميل سياسات الحماية المترابطة GPOs.",
    keyConcepts: ["Domain Admin authorization", "Welcome dialog confirmations", "Accredited user quotas", "Mandatory system reboot"],
    technicalTips: [
      "يمكن للمسؤول تحديد وتعديل الأعداد القصوى المسموح بها للمستخدم العادي لإدخال الحواسب بالدومين، لحفظ وتنظيم الموارد ومنع إشباع الدليل بحسابات مكررة."
    ]
  },
  {
    id: 61,
    lectureId: 4,
    titleEn: "Offline Domain Join Concepts",
    titleAr: "الانضمام للمجال دون اتصال (Offline Domain Join) - النظرية والمنافع",
    contentEn: [
      "Allows administrators to pre-provision computer accounts in AD.",
      "Perfect for OS deployments where target computers cannot contact a DC initially.",
      "Benefits: No additional network traffic during Active Directory state changes.",
      "Benefits: No network traffic for computer state changes to DC at startup.",
      "Flexibility: AD provisioning and client device joining can happen at entirely different times."
    ],
    contentAr: [
      "تتيح لمدير الأنظمة حجز وإعداد حساب وتراخيص أجهزة الكمبيوتر مسبقاً في الدليل النشط.",
      "مثالية لبيئات تنصيب وتجهيز الأنظمة الشاملة حيث لا يتوجب على الأجهزة الاتصال الحي بالمتحكم فوراً.",
      "فائدة: انعدام استهلاك حزم البيانات من الشبكة أثناء تبادل بيانات الدليل النشط.",
      "فائدة: تقليص الضغط وحركة نقل البيانات المرتبطة بكائن الجهاز إلى DC عند بداية الإقلاع.",
      "المرونة: يمكن إتمام عملية حجز الحساب بالدليل وضبط الجهاز العميل في أوقات متباعدة تماماً دون الحاجة لاتصال متزامن."
    ],
    explanation: "الانضمام غير المتصل (Offline Domain Join):\nهي ميزة خارقة أدخلت لتلبية احتياجات المصانع والشركات ذات الفروع التبادلية أو بيئات الحماية العالية.\nففي الوضع الطبيعي (Online)، يحتاج جهاز العميل للاتصال بالـ DC أثناء عملية الضم. أما في الوضع غير المتصل (Offline)، نستخدم أداة سطر الأوامر (djoin.exe) على خادم الـ DC لصياغة ملف نصي مشفر يحتوي على شهادة وتفاصيل حساب الجهاز، ثم ننقل الملف عبر كارت ذاكرة أو إيميل للعميل، وهناك نقوم ببرمجة الملف محلياً، فيصبح الجهاز عضواً في المجال دون أن يتصل بالسيرفر DC ولو لثانية واحدة.",
    keyConcepts: ["djoin.exe CLI tool", "Pre-provisioning computer objects", "Offline metadata deployment", "Network bandwidth savings"],
    technicalTips: [
      "ميزة الانضمام غير الوجاهي (Offline) ممتعة وشائعة جداً في لجان التثبيت الواسعة عند قيادة تفعيل عشرات الأجهزة بنطاق الدليل دفعة واحدة."
    ]
  },
  {
    id: 62,
    lectureId: 4,
    titleEn: "Implementing Offline Domain Join",
    titleAr: "التطبيق العملي للانضمام غير المتصل عبر أداة djoin الكودية",
    contentEn: [
      "1. Run on Domain Controller to provision the machine account:",
      "   djoin /provision /domain ust.local /machine win8 /savefile c:\\win8.txt",
      "2. Copy the created file (win8.txt) to the target computer.",
      "3. Run on the target computer side to apply provisioning:",
      "   djoin /requestODJ /loadfile c:\\win8.txt /windowspath %SystemRoot% /localos"
    ],
    contentAr: [
      "1. اكتب ونفذ الأمر التالي على سيرفر متحكم المجال DC لحجز وتشفير الحساب بمكان واحد:",
      "   djoin /provision /domain ust.local /machine win8 /savefile c:\\win8.txt",
      "2. انسخ الملف النصي الناتج والمشفر (win8.txt) وانقله بأي وسيلة تخزين للجهاز العميل.",
      "3. افتح موجه الأوامر بالعميل كمسؤول واكتب الأمر التالي لتمرير التوثيق محلياً والربط:",
      "   djoin /requestODJ /loadfile c:\\win8.txt /windowspath %SystemRoot% /localos"
    ],
    explanation: "القراءة التحليلية العميقة لأوامر djoin:\n\n- الشق الأول بالسيرفر (Provisioning):\nالأمر /provision يطلب من السيرفر وبشكل أمني بناء كرت عتادي وصياغة حساب جهاز بالدليل باسم (win8) تابع لمجال الـ (ust.local)، وحفظ تلك الملفات والبيانات الحساسة كملف مشفر يدعى (win8.txt) بداخل مجلد C:\\.\n\n- الشق الثاني بالعميل (Request ODJ):\nعقب نقل الملف للجهاز العميل، وبموجه أوامر ذو صلاحية إدارية، نطلق الأمر /requestODJ ليقوم بالتماس الانضمام المحلي المشفر وتجهيز نظام التشغيل، حيث يشير المسلك %SystemRoot% لمجلد تثبيت ويندوز (C:\\Windows) ليقوم بحقن ملفات التسجيل والتعاريف والـ Registry بهدوء، ثم يطلب العميل محلياً إعادة التشغيل ليصبح المنقاد عضواً شرعياً بالمجال فوراً دون تلامس مباشر.",
    keyConcepts: ["/provision command block", "Savefile metadata construction", "/requestODJ local injection", "LocalOS registry bindings"],
    technicalTips: [
      "بعد إتمام أمر دمج الـ ODJ بالعميل، فإن أول ريبوت (Reboot Reset) سيعيد ولادة بطاقة الجهاز ومصادقته لتنبثق شاشة ترحيب الدخول للدومين ust\\username مباشرة."
    ]
  }
];
