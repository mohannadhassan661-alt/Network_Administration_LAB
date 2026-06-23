export interface Slide {
  id: number;
  lectureId: number;
  titleEn: string;
  titleAr: string;
  contentEn: string[];
  contentAr: string[];
  explanation: string;
  keyConcepts: string[];
  technicalTips?: string[];
}

export interface GlossaryItem {
  term: string;
  definitionAr: string;
  definitionEn: string;
  importance: string;
  lectureId: number;
}

export interface QuizQuestion {
  id: number;
  lectureId: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface EssayQuestion {
  id: number;
  lectureId: number;
  question: string;
  answer: string;
  keyPoints?: string[];
  codeExample?: string;
}

export const slidesData: Slide[] = [
  {
    id: 1,
    lectureId: 1,
    titleEn: "Network Administration LAB - Lecture 1: Introduction",
    titleAr: "مختبر إدارة الشبكات - المحاضرة الأولى: مقدمة للتعريف بالمادة",
    contentEn: [
      "Network Administration LAB",
      "LECTURE 1: INTRODUCTION",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "مختبر إدارة الشبكات",
      "المحاضرة 1: مقدمة وتمهيد",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "هذا السلايد هو الغلاف والواجهة التعريفية للمحاضرة الأولى في مختبر مادة \"إدارة الشبكات\" للجانب العملي. تركز هذه المادة واللقاء الأول على إعطاء صورة متكاملة عن نظام تشغيل الخوادم الشهير Windows Server الذي تنتجه شركة مايكروسوفت، واستعراض إصداراته المختلفة، ونماذج التراخيص المعتمدة، ومتطلبات الأجهزة اللازمة لتثبيته وتشغيله ليكون بمثابة العمود الفقري للشبكة في الشركات والمؤسسات.",
    keyConcepts: ["Network Administration", "Windows Server"],
    technicalTips: [
      "مختبر إدارة الشبكات هو الجانب العملي الحاسم الذي يتعلم فيه مهندس الشبكات كيفية تثبيت وإعداد خوادم حقيقية وإصدار التراخيص وضبط إعدادات الأمان والمستودعات."
    ]
  },
  {
    id: 2,
    lectureId: 1,
    titleEn: "Introduction",
    titleAr: "مقدمة وتعريف بنظام ويندوز سيرفر",
    contentEn: [
      "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
      "Previous versions of Windows Server have focused on stability, security, networking, and various improvements to the file system."
    ],
    contentAr: [
      "ويندوز سيرفر (Windows Server) هو عبارة عن عائلة ومجموعة من أنظمة التشغيل المصممة والمطورة خصيصاً من قبل شركة مايكروسوفت (Microsoft) والتي تدعم الإدارة الشاملة على مستوى الشركات والمؤسسات الكبرى (Enterprise-level)، وتخزين البيانات الضخمة، والتحكم بالتطبيقات، وإدارة الاتصالات الشبكية المتقدمة.",
      "لقد ركزت وأولت الإصدارات السابقة والحالية من نظام التشغيل هذا اهتماماً وتركيزاً بالغاً على تحقيق أعلى مستويات الاستقرار والاتزان (Stability)، ورفع معايير الأمان والحماية (Security)، وإمداد الشبكات بالبروتوكولات المتكاملة (Networking)، وإجراء تحسينات مستمرة ومتنوعة على أنظمة الملفات (File Systems)."
    ],
    explanation: "في هذا السلايد، نضع التعريف والأساس التقني لنظام التشغيل ويندوز سيرفر. الخوادم تتميز عن أنظمة التشغيل الشخصية (مثل ويندوز 10 أو 11) بكونها مهيأة لخدمة مئات أو آلاف المستخدمين والطلبات المتزامنة. \n\nيركز التعريف على أربعة ركائز أساسية:\n1. الإدارة المتقدمة (Enterprise-level Management): توفير لوحة تحكم مركزية وخدمات دليل الهويات النشط للتحكم في جميع حسابات ومعدات الشبكة من مكان واحد.\n2. إدارة التخزين (Data Storage): الاستعداد لوحدات تخزين ضخمة وتقنيات النسخ الاحتياطي التلقائي ومشاركة الملفات بشكل مقيد بكلمات مرور وصلاحيات معقدة.\n3. التطبيقات المتقدمة (Applications): تهيئة الخادم لتشغيل وصيانة المواقع ومصادر الويب الكبرى (IIS) وقواعد البيانات (SQL Server).\n4. الاتصالات والربط (Communications): دعم تشغيل بروتوكولات التوجيه وخدمات الشبكة الافتراضية الخاصة (VPN) وتوزيع عناوين الآي بي التلقائي (DHCP).",
    keyConcepts: ["Enterprise-level", "Stability", "Security", "Networking", "File System"],
    technicalTips: [
      "الفارق الجوهري بين ويندوز سيرفر وويندوز الكمبيوتر الشخصي هو أن نظام السيرفر مصمم ليعمل لشهور أو سنوات متواصلة دون إعادة تشغيل (Uptime عالي جداً)، مع قدرة معالجة متزامنة تفوق الحدود البرمجية للأنظمة العادية."
    ]
  },
  {
    id: 3,
    lectureId: 1,
    titleEn: "Windows Server Timeline (versions)",
    titleAr: "الخط الزمني التاريخي - إصدارات وأجيال ويندوز سيرفر",
    contentEn: [
      "Before 2000: Windows Server NT",
      "Windows Server 2000",
      "Windows server 2003 – 2003 R2",
      "Windows Server 2008 – 2008 R2",
      "Windows Server 2012 – 2012 R2",
      "Windows Server 2016",
      "Windows Server 2019",
      "Windows Server 2022",
      "Windows Server 2025"
    ],
    contentAr: [
      "ما قبل عام 2000: نظام ويندوز سيرفر إن تي (Windows Server NT)",
      "ويندوز سيرفر لعام 2000 (Windows Server 2000)",
      "ويندوز سيرفر لعام 2003 والإصدار الثاني التحديثي له 2003 R2",
      "ويندوز سيرفر لعام 2008 والإصدار الثاني التحديثي له 2008 R2",
      "ويندوز سيرفر لعام 2012 والإصدار الثاني التحديثي له 2012 R2",
      "ويندوز سيرفر لعام 2016",
      "ويندوز سيرفر لعام 2019",
      "ويندوز سيرفر لعام 2022",
      "ويندوز سيرفر لعام 2025"
    ],
    explanation: "يستعرض هذا السلايد التدرج التاريخي والتطور العملاق لعائلة خوادم ويندوز عبر الأجيال:\n- Windows Server NT: كان البداية الأساسية، ورمز NT يعني (New Technology) وهو ما غيّر طريقة معالجة الذاكرة وحقوق الأمان عن أنظمة دوس وويندوز 95 القديمة.\n- Windows Server 2000: شهد ولادة تقنية \"الدليل النشط\" (Active Directory) والتي حلت محل فكرة مجالات NT القديمة ووضعت نظاماً هرمياً رائعاً لإدارة الشبكة.\n- مصطلح R2 تعني (Release 2 / الإصدار الثاني): اعتادت مايكروسوفت عبر هذه الأجيال إطلاق نسخة محسنة ومقواة في منتصف عمر المنتج كترقية برمجية تدعم الأجهزة الأحدث وتصلح ثغرات الإصدار الأصلي (مثال: Windows Server 2008 R2 المأخوذ من نواة ويندوز 7).\n- ويندوز سيرفر 2016 و 2019 و 2022: ركزت بشكل متطور جداً على الحوسبة السحابية (Azure Integration) ودعم تشغيل برمجيات الحاويات (Containers) وميزات الحماية الفائقة من روت كيت وبرمجيات الفدية.\n- ويندوز سيرفر 2025: هو أحدث نسخة من مايكروسوفت ويمتاز بدعم فائق للذكاء الاصطناعي، وتسريع قواعد البيانات، وإصدارات Hotpatching لتثبيت التحديثات الأمنية دون الحاجة لإعادة تشغيل الخادم.",
    keyConcepts: ["Windows NT", "Active Directory", "R2 Release", "Windows Server 2025"],
    technicalTips: [
      "دائماً ما يفضل مهندسو الشبكات المحترفون الانتظار لشراء وتثبيت إصدارات R2 أو الإصدارات الحاصلة على حزم التحديث الكبرى (Service Packs / Cumulative Updates) لتوقي المشاكل البرمجية غير المتوقعة في بيئات الإنتاج الحقيقية."
    ]
  },
  {
    id: 4,
    lectureId: 1,
    titleEn: "Windows Server Editions",
    titleAr: "إصدارات وفئات نظام ويندوز سيرفر المتاحة",
    contentEn: [
      "Advanced",
      "Professional",
      "Web",
      "Foundation",
      "Essentials",
      "Standard",
      "Standard Core",
      "Enterprise",
      "Datacenter",
      "Datacenter Core",
      "Datacenter: Azure Edition"
    ],
    contentAr: [
      "المتقدم (Advanced) - تم استخدامه قديماً في الإصدارات الأولى كنسخة أعلى كفاءة.",
      "الاحترافي (Professional) - نسخة تقع في الفئة المتوسطة لإنجاز أعمال التطوير والربط.",
      "خادم الويب (Web) - نسخة مخففة وصغيرة الحجم تستخدم حصرياً لخدمات استضافة المواقع وتطبيقات الويب (IIS).",
      "الأساسي (Foundation) - نسخة ابتدائية مخصصة للمؤسسات فائقة الصغر، وتأتي مثبتة مسبقاً من الشركات المصنعة للأجهزة (OEM).",
      "الجوهري (Essentials) - مصممة خصيصاً للمنشآت والمشاريع الناشئة (تخدم بحد أقصى 25 مستخدم و 50 جهازاً) مع سهولة ضبط برمجية.",
      "القياسي (Standard) - النسخة الأكثر مبيعاً واستخداماً وتعتبر الأساس لجميع بيئات الخوادم الفيزيائية والافتراضية المتوسطة.",
      "القياسي كور (Standard Core) - تشغيل وإدارة النسخة القياسية بالكامل عبر شاشة الأوامر الكودية السوداء بدون أي واجهة مستخدم بصرية.",
      "المؤسسات (Enterprise) - نسخة تميزت بدعم سعات كبرى من الذاكرة والأنوية وتصميم العقد التبادلية (تم استبدالها بـ Datacenter لاحقاً).",
      "مركز البيانات (Datacenter) - الفئة الأقوى والمعدّة لمراكز البيانات والشبكات الضخمة ذات مستويات المحاكاة الافتراضية العالية جداً.",
      "مركز البيانات كور (Datacenter Core) - تشغيل إصدار مركز البيانات بالكامل بدون نوافذ أو واجهات رسومية لضمان أمان فائق وسرعة مطلقة.",
      "مركز البيانات: إصدار السحاب أزور (Datacenter: Azure Edition) - نسخة مخصصة ومهيأة للاندماج السريع والعمل المزدوج مع منصة مايكروسوفت السحابية."
    ],
    explanation: "ينظم هذا السلايد مستويات التثبيت وتراخيص ويندوز سيرفر بما يلائم غرض وحجم وميزانية كل عميل:\n\n1. للتطبيقات ذات الغرض المحدود: يوجد إصدار Web (لاستضافة برمجيات ومواقع إنترنت فقط).\n2. للمؤسسات متناهية الصغر (أقل من 25 مستخدم): نوفر لهم Foundation أو Essentials وهو ما يوفر عليهم مبالغ مالية ضخمة ويمتاز بسهولة هائلة في الربط والتشغيل دون أدوات بالغة التعقيد.\n3. للشركات المتوسطة والكبيرة: الخيارات القياسية هي Standard للأنشطة العادية، بينما Datacenter لخدمات الحوسبة المتقدمة والأنظمة الافتراضية ومجموعات التجمع المقاوم للفشل (Failsafe Clusters).\n4. ميزة الـ Core (مثل Standard Core و Datacenter Core):\nهي طريقة تثبيت حكيمة تستحوذ على إعجاب مهندسي النظم حيث يثبت ويندوز سيرفر عارياً تماماً من الواجهة الرسومية (No GUI), وتتم كل العمليات عبر سطر الأوامر (CLI / PowerShell). الفوائد:\n- توفير هائل في استخدام الرام والمعالج (أكثر من 50% كفاءة عتادية).\n- تقليص بقعة الهجوم الأمني (Attack Surface): الواجهة الرسومية تحمل أكوادا ضخمة ومنافذ قد تستغل أمنياً. إلغاؤها يغلق الأبواب أمام الكثير من فيروسات وثغرات الاختراق.",
    keyConcepts: ["Windows Server Editions", "Standard vs Datacenter", "Server Core", "Azure Edition"],
    technicalTips: [
      "في بيئة العمل الحقيقية، يُنصح بشدة بتثبيت أنظمة السيرفر بنمط Server Core لكافة الأدوار الأساسية كـ Active Directory و DNS و DHCP، وترك نمط الواجهة الرسومية (Desktop Experience) فقط للأشخاص المبتدئين أو في الحالات التي تتطلب برامج لا تعمل إلا من خلال واجهة رسومية."
    ]
  },
  {
    id: 5,
    lectureId: 1,
    titleEn: "Windows Server Licensing Models",
    titleAr: "نماذج وأنظمة تراخيص ويندوز سيرفر القانونية",
    contentEn: [
      "Server Editions can be classified as: 1) Retail vs Volume. 2) Processor-based vs Core-based. 3) Client Access Licenses (CALs)",
      "A retail license can only be used on a single PC.",
      "A volume license can be used on more than one instance.",
      "A processor-based license takes one license to cover up to two physical processors on a single server.",
      "A core-based license requires licenses for all physical cores, with a minimum of 16 cores per server and 8 cores per processor. (2016-2025)",
      "Client Access Licenses (CALs) are legal, non-technical licenses required for users or devices to access server software. (Either User or Device CALs)."
    ],
    contentAr: [
      "يمكن تصنيف وتحديد تراخيص الخوادم حسب المنهجيات التالية: 1) تراخيص التجزئة الفردية (Retail) مقابل التراخيص الجماعية للمؤسسات (Volume). 2) الترخيص بحسب المعالجات الفيزيائية (Processor-based) مقابل الترخيص بحسب عدد الأنوية (Core-based). 3) رخص سماح وصول العميل للخدمات (CALs).",
      "ترخيص التجزئة (Retail License): رخصة تجارية شخصية محدودة يُسمح قانونياً باستخدامها لتشغيل جهاز حاسوب أو خادم واحد وعادة تأتي مع مفتاح تنشيط أحادي الفرادة.",
      "الترخيص الجماعي (Volume License): رخصة متكاملة تمكن كبرى المؤسسات والمهندسين من تنشيط وتثبيت عدة نسخ (Instances) من الخادم عبر مفتاح موحد (VLK) يسهل إدارته وتتبعه أوتوماتيكياً.",
      "الترخيص القائم على المعالج (Processor-based): نظام ترخيص يغطي الخادم بناء على عدد المعالجات الفيزيائية الموجودة فيه (كل رخصة واحدة تغطي حتى معالجين فيزيائيين في اللوحة الأم، دون الاهتمام بعدد الأنوية).",
      "الترخيص القائم على الأنوية (Core-based): نظام ترخيص حديث في مايكروسوفت (منذ إصدار 2016 وحتى 2025) يتطلب شراء تراخيص تغطي كافة الأنوية الفيزيائية في الخادم، بحد أدنى للترخيص هو 16 نواة لكل خادم، وبحد أدنى لا يقل عن 8 أنوية لكل معالج منفرد.",
      "تراخيص وصول العميل (CALs): هي رخص وتصاريح استخدام قانونية وليست حظر تقني برمجياً، مطلوب شراؤها بمجموع يتوافق مع عدد الموظفين (User CAL) أو عدد الأجهزة والطرفيات المتصلة (Device CAL) لمراجعتها مع التدقيق القانوني لمايكروسوفت."
    ],
    explanation: "تعتبر مسألة التراخيص (Licensing) من أهم معارف مهندس النظم والشبكات لكي لا تقع الشركة في مآزق قانونية وغرامات مالية ضخمة.\n\n- Retail vs Volume:\nرخص التجزئة (Retail) مكلفة وتفعل جهازاً واحداً ومناسبة للمعمل أو للتجريب الفردي. أما المؤسسات التي لديها 50 خادماً تشتري رخصة لترخيص جماعي (Volume License) لتبسيط تكاليف الصيانة والتحديث بالتعاقد المباشر مع مايكروسوفت.\n\n- Processor-based vs Core-based:\nسابقاً، كان الترخيص يعتمد على عدد المقابس (Sockets) أو المعالجات على اللوحة الأم بغض النظر عن قوتها. لاحقاً، مع دمج 8 و 16 و 32 نواة داخل المعالج الواحد، رأت مايكروسوفت أن السيرفر ذو الـ 32 نواة يقوم بمهام توازي خمس غرف خوادم قديمة، من هنا تم الانتقال إلى الترخيص القائم على الأنوية (Core-based). القاعدة هنا تفرض حداً أدنى للشراء:\n1. يجب ترخيص ما لا يقل عن 8 أنوية لكل معالج فيزيائي.\n2. يجب ترخيص ما لا يقل عن 16 نواة في الخادم الإجمالي (أي حتى لو كان السيرفر بمعالج ذكي صغير يحوي 4 أو 8 أنوية، أنت مجبر قانونياً بشراء رخصة تغطي 16 نواة كحد أدنى).\n\n- شرح مفصل لـ Client Access Licenses (CALs):\nشراء نظام ويندوز سيرفر يوفر لك تثبيت وتشغيل الخادم. لكن عملية اتصال الأجهزة والموظفين بالخادم للاستفادة من خدماته (كالطباعة المشتركة، الدليل النشط، السيرفر السحابي) تتطلب شراء رخص تسمى CAL. وهي على نوعين:\n1. User CAL: نشتري رخصة لكل موظف. ميزتها أن الموظف يمكنه الدخول للشبكة من حاسوبه المكتبي، أو من لابتوب المنزل، أو من هاتفه الذكي بنفس الرخصة القانونية. ممتازة للشركات التي يتمتع موظفوها بمرونة عمل وتنقل.\n2. Device CAL: نشتري رخصة للجهاز الفيزيائي نفسه. ملائمة وجديرة للتوفير الشديد في الأماكن التي يتناوب فيها موظفو الورديات (كالاستقبال في الفنادق أو المستشفيات) على كمبيوتر واحد، فبدلاً من ترخيص 3 موظفين للورديات الثلاثة، نرخص الكمبيوتر الواحد فقط برخصة جهاز واحدة.",
    keyConcepts: ["Licensing Models", "Retail vs Volume", "Processor vs Core licensing", "User CAL vs Device CAL"],
    technicalTips: [
      "رخص الـ CALs لا تمنعك تقنياً من تشغيل الخادم ولا تحتوي عادة على أكواد تفعيل، ولكنها أداة تدقيق مالي وقانوني أساسية تقوم لجان مايكروسوفت بالتفتيش عليها في كبرى المؤسسات وتغريم المخالفين."
    ]
  },
  {
    id: 6,
    lectureId: 1,
    titleEn: "Windows Server Standard vs. Datacenter",
    titleAr: "مقارنة تقنية وافية: الإصدار القياسي (Standard) مقابل مركز البيانات (Datacenter)",
    contentEn: [
      "Standard Edition: Offered in Versions: Server 2000, Server 2003, Server 2008, Server 2008 R2, Server 2012, Server 2012 R2, Server 2016, Server 2019, Server 2022, 2025. Designed for Small to medium businesses. Licensing Type: Evaluation, Volume License. Remarks: Only 2 OSEs and 1 Hyper-V host are allowed.",
      "Datacenter Edition: Offered in Versions: Server 2000, Server 2003, Server 2008, Server 2008 R2, Server 2012, Server 2012 R2, Server 2016, Server 2019, Server 2022, 2025. Designed for For high security and maximum reliability. Licensing Type: Evaluation, Volume License. Remarks: Includes Network Controller and Host Guardian Hyper-V Support."
    ],
    contentAr: [
      "الإصدار القياسي (Standard): يتوفر في كافة نسخ ويندوز سيرفر التاريخية والحديثة (من عام 2000 مروراً بجميع الأجيال والـ R2 وحتى 2022 و 2025). صمم ليلائم الشركات الصغيرة والمتوسطة التي لا تعتمد بكثافة فائقة على البيئات الافتراضية. نوع الترخيص المتاح: تقييمي مجاني (Evaluation) أو ترخيص جماعي للمؤسسات (Volume License). الملحوظة التقنية الفارقة: يسمح هذا الترخيص بتشغيل حتى بيئتي تشغيل افتراضيتين فقط (2 Operating System Environments / OSEs) على خادم فيزيائي مضيف واحد من خلال برنامج الهايبر في (1 Hyper-V Host).",
      "إصدار مركز البيانات (Datacenter): يتوفر في ذات الإصدارات والخطوط الزمنية التاريخية كافة. صمم للمؤسسات الضخمة ومراكز البيانات السحابية التي تتطلب مستويات قصوى من الأمان العالي، والاعتمادية المطلقة، والمحاكاة الافتراضية اللانهائية. نوع الترخيص المتاح: تقييمي مجاني (Evaluation) أو ترخيص جماعي (Volume License). الملحوظة التقنية الفارقة: يتيح ترخيص وتثبيت أعداداً وبوابات غير محدودة من أنظمة التشغيل والآلات الافتراضية (Unlimited VMs)، كما يمنحك بشكل افتراضي أدوات أمنية وشبكية جبارة مثل: متحكم الشبكة المركزي (Network Controller) وحماية الخوادم الافتراضية المعزولة (Host Guardian Support)."
    ],
    explanation: "جدول المقارنة هذا يلخص الفوارق في الميزات والحدود التقنية المفروضة على النسختين الرائدتين للشبكات التابعة لويندوز سيرفر:\n\n- حدود المحاكاة الافتراضية (Virtualization Limitations):\n  * في إصدار Standard: تقدم مايكروسوفت دعماً بسيطاً للمحاكاة الافتراضية. عند ترخيص الخادم المادي برخصة Standard وتفعيله كجهاز مضيف (Hyper-V Host)، يحق لك محاكاة وتثبيت خادمين افتراضيين فقط (2 Virtual Machines - OSEs). إذا قررت تثبيت خادم وهمي ثالث على نفس الجهاز الفيزيائي، سيتوجب عليك شراء وتخصيص رخصة Standard كاملة جديدة للتغطية عتادياً وقانونياً.\n  * في إصدار Datacenter: هو الترخيص الأعلى والمفتوح حيث تشتري رخصاً تغطي الأنوية المادية وتمنحك حق تثبيت أعداد لا نهائية وبلا قيود من الأجهزة والأنظمة الافتراضية (Unlimited Virtual Machines) على نفس الخوادم المسجلة، وهو خيار حتمي لمزودي الخدمة السحابية والشركات التي تدير مئات الأنظمة والخوادم الوهمية في مراكز بياناتها.\n\n- أدوات ومزايا معززة وحصرية لـ Datacenter:\n  1. وحدة التحكم بالشبكة (Network Controller):\n     أداة إدارة هامة لمدير الشبكة تسمح بإدارة الشبكة بطريقة برمجية (SDN - Software Defined Networking). تمنحك تحكماً ونظرة شاملة لضبط جدران الحماية، بوابات العبور المحاكية، ومفاتيح التوصيل الافتراضية (Virtual Switches) عبر واجهة إدارة رئيسية واحدة.\n  2. دعم خدمات حارس المضيف (Host Guardian Service - HGS):\n     مسؤولة عن إدارة وتوثيق الخوادم الموثوقة للتأكد من تشغيل ما يسمى بـ (Shielded VMs / الأنظمة الافتراضية المحمية). هذه الميزة تحمي ملفات وأنظمة وبيانات الآلات الافتراضية من الاختراق والسرقة حتى من قِبل الأشخاص الذين يمتلكون وصولا فيزيائياً لمشغلات الأقراص في السيرفر أو مهندسي الخوادم المضيفة، وهي طبقة أمان مذهلة لعزل وحماية الخصوصية في تكنولوجيا السحاب المتطورة.",
    keyConcepts: ["Standard vs Datacenter", "OSEs (Operating System Environments)", "Hyper-V", "Software-Defined Networking (SDN)", "Host Guardian Service"],
    technicalTips: [
      "إذا كان مشروعك في الشركة يحتاج لتشغيل أكثر من 10 إلى 12 آلة افتراضية على نفس الخادم الفعلي، فإن شراء ترخيص Datacenter الفردي يصبح اقتصادياً وأرخص بكثير من تجميع وتكرار شراء رخص Standard المتعددة."
    ]
  },
  {
    id: 7,
    lectureId: 1,
    titleEn: "Minimum Hardware Requirements",
    titleAr: "الحد الأدنى لمتطلبات الأجهزة والمواصفات العتادية لتشغيل ويندوز سيرفر",
    contentEn: [
      "Processor: 1.4 GHz 64-bit processor",
      "RAM: 1GB for server code and 2 GB for Server with Desktop Experience installation option)",
      "Disk Space: 32 GB"
    ],
    contentAr: [
      "المعالج (Processor): معالج بمعمارية ونظام معالجة 64 بت (64-bit) وبتردد وسرعة عمل لا تقل عن 1.4 جيجا هرتز (GHz) لضمان التشغيل المتوافق.",
      "الذاكرة العشوائية (RAM): يتطلب كحد أدنى 1 جيجابايت (1GB) لتثبيت وإدارة كود الخادم الأساسي (Server Core) الخالي من الواجهات، أو 2 جيجابايت (2GB) لتثبيت الخادم بخيار الواجهة الرسومية وتجربة سطح المكتب الكاملة (Desktop Experience).",
      "مساحة القرص الصلب (Disk Space): يتطلب توفر سعة ومساحة تخزينية خالية في القرص لا تقل عن 32 جيجابايت (32GB) لتنصيب ملفات النظام الأساسية وتخصيص مساحات المبادلة والذاكرة الافتراضية."
    ],
    explanation: "يوثق هذا السلايد المواصفات العتادية الدنيا المطلوبة لتشغيل نظام ويندوز سيرفر بنجاح. لفهم هذه المقاييس وتفسير تطبيقاتها الفنية على أرض الواقع:\n\n- معالجات 64 بت (64-bit Processors):\nتخلت مايكروسوفت تماماً عن دعم نواة المعالجات 32 بت منذ عهد ويندوز سيرفر 2008 R2. السبب يرجع لكون خوادم اليوم تحتاج لمعالجة جبارة وقدرة تخطيطية لعناوين الذاكرة تتجاوز حدود الـ 4 جيجابايت (وهو الحد الأقصى لمعالجات 32 بت). معالجات 64 بت تعطي عتبة استخدام للذاكرة تصل لمستويات إكسابايت خيالية وتوفر حماية عتادية أفضل ومقاومة لانفجار مخازن الذاكرة (Buffer Overflow).\n\n- الذاكرة العشوائية (RAM):\nتمثل متطلبات الرام صراعاً مستمراً لدى الإدارة التقنية. إذا قمت بتثبيت خيار \"السيرفر كور\" (Server Core)، فالأمر المثير للإعجاب أن الخادم سيعمل بسلاسة رائعة مستخدماً 1 جيجابايت فقط من الرام لعدم وجود متطلبات لتشغيل مكتبات الرسومات المعقدة. أما إن أردت تثبيت الخيار الكلاسيكي \"تجربة سطح المكتب\" (Desktop Experience) فإن تفاعلك مع الواجهات، النوافذ، الألوان، والمؤشر الفأري يفرض استخدام ما لا يقل عن 2 جيجابايت من الرام كحد أدنى للتشغيل المبدئي عدا البرمجيات والخدمات التي سيسيرها الخادم لاحقاً.\n\n- مساحة القرص (Disk Space):\nمساحة 32 جيجابايت تمثل الحجم الكافي لتثبيت ملفات الويندوز ومجلد الترقية والأدوات الأساسية وملفات إدارة الأجهزة، بالإضافة لمساحة الترحيل الافتراضية (Paging File). بطبيعة الحال في الحياة العملية، هذه المساحة لا تكفي للأعمال التنافسية، حيث بمجرد تفعيل أدوات كـ Active Directory أو خادم تحديثات ويندوز (WSUS) أو تخزين قواعد بيانات المستخدمين، فإن متطلبات التخزين تتضاعف لتصل لمئات الجيجابايت أو التيرابايت لتغطية احتياجات أمان وحجم الملفات الفعلية للشركات.",
    keyConcepts: ["64-bit Architecture", "Server Core memory usage", "Desktop Experience GUI", "Active Directory storage"],
    technicalTips: [
      "في الواقع العملي ومراكز البيانات، لا يقوم المهندس بتحديد مواصفات السيرفر بناء على الحد الأدنى هذا، بل يخطط مسبقاً لحساب ما يستهلكه كل برنامج مضاف (مثل خادم SQL يحتاج بحد أدنى 4 جيجا رام بمفرده، وخادم البريد Exchange يحتاج 8 جيجا بحد أدنى وهكذا) بالإضافة لاحتياجات نظام التشغيل."
    ]
  },
  {
    id: 8,
    lectureId: 2,
    titleEn: "Network Administration LAB - Lecture 2: Installation & Initial Parameters",
    titleAr: "مختبر إدارة الشبكات - المحاضرة الثانية: تثبيت الخادم والتهيئة الأولية",
    contentEn: [
      "Network Administration LAB",
      "LECTURE 2: SYSTEM INSTALLATION & POST-INSTALL CONFIGURATION",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "مختبر إدارة الشبكات",
      "المحاضرة الثانية: تثبيت النظام وضبط بارامترات الإعدادات الأولية",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "هذه هي المحاضرة الثانية من الجانب العملي لمختبر إدارة الشبكات. بعد أن تعرفنا في اللقاء الأول على المفاهيم الأساسية والتراخيص، ننتقل الآن إلى التطبيق العملي الفعلي: كيف نقوم بتثبيت نظام التشغيل Windows Server بالكامل في بيئة وهمية أو حقيقية، وكيف نتعامل مع خيارات التثبيت (واجهة رسومية مقابل الكور)، وما هي الخطوات الأساسية والإجبارية بعد التثبيت (Post-Installation Task Checklist) مثل تغيير اسم الخادم، وضبط عنوان IP الثابت، وكلمة مرور حساب المسؤول.",
    keyConcepts: ["Lab Setup", "Post-Installation", "Windows Server 2022/2025"],
    technicalTips: [
      "التهيئة الأولية الصحيحة للخادم هي الخطوة الأهم للوقاية من المشاكل الكارثية لاحقاً. أي خطأ في تسمية الخادم أو عنونة الآي بي بعد تفعيل الخدمات قد يعطل عمل الشبكة بالكامل."
    ]
  },
  {
    id: 9,
    lectureId: 2,
    titleEn: "Installation Steps & Target Platforms",
    titleAr: "مراحل وخطوات تثبيت النظام وبيئة العمل",
    contentEn: [
      "Setting up host virtualization (Hyper-V / VMware Workstation / VirtualBox)",
      "Booting from ISO Installation Media (Windows Server 2022/2025)",
      "Selecting Region, Language, and Keyboard Input layout",
      "Clean Installation vs. Upgrade Option"
    ],
    contentAr: [
      "تجهيز بيئة المحاكاة الافتراضية للتدريب (باستخدام Hyper-V أو VMware Workstation أو VirtualBox)",
      "إقلاع الخادم من وسيط تثبيت ملف الـ ISO الخاص بنظام التشغيل",
      "اختيار الموقع الجغرافي، لغة العرض، ونمط تخطيط مدخلات لوحة المفاتيح",
      "فهم الفارق بين التثبيت النظيف (Clean Install) وبين خيار الترقية (Upgrade)"
    ],
    explanation: "يبدأ السلايد الثاني باستعراض التحضيرات الأساسية قبل بدء التثبيت الفعلي. في المختبر والتعليم، نقوم عادة بإنشاء آلة افتراضية (Virtual Machine) عبر برمجيات مثل VMware أو VirtualBox أو Hyper-V المدمج بويندوز، ونقوم بتخصيص الموارد لها (مثل 2 أنوية للمعالج، 4 جيجابايت رام، وقرص صلب بسعة 50 جيجابايت لضمان عمل الواجهة الرسومية باعتدال).\n\nتركز مايكروسوفت على خيارين جوهريين في بداية التثبيت:\n1. التثبيت النظيف (Custom: Install Windows only):\nيقوم بمسح كامل الهارد ديسك وبناء ملفات نظام جديدة كلياً وهو الخيار المفضل والآمن لمسؤولي الأنظمة لمنع انتقال مشاكل الفيروسات أو تلف الريجستري القديم.\n2. الترقية (Upgrade: Install Windows and keep files, settings and applications):\nيستخدم في حال كان لدينا سيرفر قديم (مثال: Windows Server 2019) ونريد ترقيته إلى Windows Server 2022 مع الحفاظ على كافة حسابات المستخدمين ودليل الهويات النشط دون تدميرها (In-place Upgrade).",
    keyConcepts: ["ISO Media", "Clean Install", "In-place Upgrade", "Virtual Machine"],
    technicalTips: [
      "عند التثبيت في بيئات الإنتاج الحقيقية، احرص دائماً على خيار التثبيت النظيف (Clean Install) إلا في الحالات الاستثنائية القصوى التي تجبرك على الترقية المباشرة مع أخذ نسخة احتياطية كاملة (Full Backup) أولاً."
    ]
  },
  {
    id: 10,
    lectureId: 2,
    titleEn: "Crucial Choice: Server Core vs. Desktop Experience",
    titleAr: "الخيار الحاسم أثناء التثبيت: واجهة سطر الأوامر مقابل الواجهة الرسومية",
    contentEn: [
      "Windows Server Standard/Datacenter (Server Core) - Default Option",
      "Windows Server Standard/Datacenter (Desktop Experience) - With GUI",
      "Core mode lacks taskbar, start menu, and visual wizard tools",
      "Core mode is managed remotely or via PowerShell / Sconfig CLI tool"
    ],
    contentAr: [
      "خيار ويندوز سيرفر القياسي أو داتا سنتر بنمط (Server Core) - الخيار الافتراضي للتثبيت",
      "خيار ويندوز سيرفر بنمط (Desktop Experience) - يتضمن الواجهة الرسومية الكلاسيكية بالكامل",
      "نمط الكور (Core) يفتقر نهائياً لشريط المهام، قائمة ابدأ، ونوافذ الإعدادات الرسومية المعتادة",
      "يتم إدارة الكور عن بعد بالكامل أو محلياً عبر سطر الأوامر PowerShell وأداة Sconfig السريعة"
    ],
    explanation: "هذا السلايد يقودنا إلى أهم قرار يتخذه المهندس أثناء التثبيت. بشكل افتراضي، تضع مايكروسوفت خيار (Server Core) كخيار أول وافتراضي لتدفع المهندسين نحو تبنيه لما يقدمه من توفير موارد فائقة وأمان أمني صارم. في بيئة الكور، بمجرد انتهاء التثبيت، لن تظهر لك أي نوافذ، بل شاشة سوداء فقط (Command Prompt). يمكنك إدارة هذا النظام محلياً عبر كتابة الأوامر أو بكتابة الأمر sconfig الذي يفتح قائمة نصية لإعداد الخصائص الأساسية.\n\nبنيما خيار (Desktop Experience) يُهيكل ويجلب واجهة ويندوز الرسومية المألوفة تماماً كالتي تستخدمها في جهازك المنزلي، لتمكينك من إعداد الأدوار والخدمات عبر نقرات الفأرة ومعالجات التثبيت المتتالية (Wizards). يسهل هذا الخيار على المبتدئين فهم منطق الشبكات ولكنه يستهلك مساحة تخزينية ورام أكبر ويحتاج تحديثات أمنية دورية متكررة.",
    keyConcepts: ["Server Core", "Desktop Experience", "Sconfig", "PowerShell"],
    technicalTips: [
      "إذا قمت بتثبيت خيار Server Core بالخطأ في الإصدارات الحديثة، فلن تتمكن من التحويل إلى الواجهة الرسومية دون إعادة تثبيت النظام بالكامل من الصفر، على عكس الإصدارات القديمة (2012) حيث كان متاحاً التحويل عبر أمر برمجي."
    ]
  },
  {
    id: 11,
    lectureId: 2,
    titleEn: "Component Identity: Renaming & Workgroup Concept",
    titleAr: "هوية الخادم: تغيير الاسم ومفهوم Workgroup مقابل Domain",
    contentEn: [
      "Default randomized names (like WIN-A8B9D92C) must be updated immediately",
      "Unique naming conventions based on role (e.g., NYC-DC01, PRI-DNS-SRV)",
      "Workgroup holds local user database and decentralized accounts",
      "Transition to Domain (Active Directory Server) for centralized control"
    ],
    contentAr: [
      "الأسماء العشوائية الافتراضية المكونة من رموز معقدة يجب تغييرها وتحديثها فوراً",
      "صياغة وتحديد اسم الخادم بناء على نظام تسمية موحد للشركة يعبر عن دوره وجغرافيته",
      "مجموعة العمل (Workgroup) تعتمد على مبدأ اللامركزية وحسابات محلية مخزنة على كل جهاز",
      "الترقية إلى نظام المجال (Domain) لتمكين السيطرة والتحكم المركزي الموحد بالشبكة"
    ],
    explanation: "يناقش هذا السلايد خطوة حاسمة جداً ضمن قائمة المهام الأولى بعد إنهاء عملية التثبيت وهي إعادة تسمية الخادم (Renaming the Server).\n\nعند اكتمال تثبيت النظام، يقوم ويندوز تلقائياً بإنشاء اسم عشوائي للخادم (مثلاً WIN-B97GFTY). من المستحيل عملياً إبقاء هذا الاسم في شبكات العمل الكبرى لعدم إمكانية حفظه أو تتبعه من قبل مسؤولي الشبكات. لذلك، يجب صياغة معيار تسمية منظم في الشركة، فمثلاً خادم في فرع الرياض يعمل كدليل هويات أول نطلق عليه: RUH-DC01 (RUH تعني الرياض، DC تعني Domain Controller، و 01 للمسلسل).\n\nأيضاً يوضح السلايد نقطة الفرق بين الوضع الافتراضي للخادم وهو مجموعة العمل (Workgroup) حيث كل جهاز مستقل بذاته ويدير حساباته ومستخدميه بشكل محلي لامركزي تماماً، وبين وضع المجال (Domain) الذي نفعله لاحقاً عن طريق تحويل الخادم إلى Domain Controller ليدير الشبكة بالكامل بشكل رمزي مركزي متناسق.",
    keyConcepts: ["Server Renaming", "Workgroup", "Domain", "Naming Convention"],
    technicalTips: [
      "تغيير اسم الخادم يتطلب إعادة تشغيل جبارة (Reboot). احرص على تعديل الاسم قبل البدء بتنصيب أي ميزة كـ Active Directory لأن تغيير الاسم بعد تنصيب الدليل النشط يسبب مشاكل بالغة في مزامنة الشهادات والصلاحيات."
    ]
  },
  {
    id: 12,
    lectureId: 2,
    titleEn: "Ground Zero of Connectivity: Static IP Configuration",
    titleAr: "الخطوة الذهبية للاتصال: ضبط وإعداد الآي بي الثابت والخادم الأساسي",
    contentEn: [
      "Servers MUST never use dynamic IPs (DHCP) for primary services",
      "Setting up IPv4 Address, Subnet Mask, Default Gateway, and Preferred DNS",
      "Best-practice: Server's DNS points to itself or primary Domain Controller",
      "Commands for CLI configuration: netsh or PowerShell 'New-NetIPAddress'"
    ],
    contentAr: [
      "يجب ويتحتم ألا تستخدم الخوادم عناوين IP ديناميكية متغيرة من الـ DHCP للخدمات الأساسية",
      "إدخال وضبط عنوان الـ IPv4، قناع الشبكة (Subnet Mask)، بوابة العبور الافتراضية، والـ DNS المفصل",
      "الممارسة المثالية: الـ Preferred DNS للخادم يجب أن يشير لنفسه أو لأقرب Domain Controller بالشبكة",
      "الأوامر البرمجية للتنفيذ السريع من الكود: استخدام أداة netsh أو New-NetIPAddress في الباور شيل"
    ],
    explanation: "عنوان الآي بي هو العنوان السكني للخادم في عالم الشبكة. إن استخدام عنوان ديناميكي متغير (DHCP IP) في جهاز السيرفر يمثل كارثة فنية حقيقية؛ لأن الأجهزة العميلة بالشبكة تتصل بالخادم وتطلب خدماته بناء على عنوانه. فلو أعيد تشغيل الخادم وتغير عنوانه لأي سبب، ستفقد شبكة العمل بأكملها القدرة على الوصول لخدمات الملفات أو الطباعة أو الإنترنت.\n\nبناء عليه، يتم ضبط بطاقة الشبكة بقيم ثابتة دائماً (Static IP) تشمل:\n1. IP Address: حجز عنوان مميز وفريد للخادم.\n2. Subnet Mask: لتحديد نطاق الشبكة المحلية وفصلها.\n3. Default Gateway: بوابة العبور وعنوان جهاز الراوتر لتوصيل السيرفر بالإنترنت أو بالشبكات الأخرى.\n4. Preferred DNS Server: خادم تحويل الأسماء إلى أرقام، ويلعب دوراً استثنائياً؛ فإذا كان السيرفر هو خادم المجال (Domain Controller) الذي يحتوي على خدمة الدليل النشط، فيجب أن يوجه الـ DNS لنفسه عبر العنوان المحلي (127.0.0.1) والمعروف بعنوان الحلقة المرتدة (Loopback Address)، لكون نظام الدليل النشط لا يعمل على الإطلاق إلا بدمجه مع خدمة الـ DNS للبحث عن موارد المجال.",
    keyConcepts: ["Static IP", "DHCP", "Preferred DNS", "Loopback 127.0.0.1", "Gateway"],
    technicalTips: [
      "احرص في المختبر على تخطيط نطاقات عناوين الـ IP الخاصة بك مستبقاً العمل. على سبيل المثال، احجز النطاق من 192.168.1.1 إلى 192.168.1.20 حصرياً لخوادم شبكتك، واترك باقي النطاق ليتم توزيعه للأجهزة والطرفيات بشكل تلقائي."
    ]
  },
  {
    id: 13,
    lectureId: 2,
    titleEn: "Securing Gatekeeper: Local Administrator Setup",
    titleAr: "تأمين حارس البوابة: ضبط حساب المسؤول المحلي (Administrator)",
    contentEn: [
      "Managing 'Administrator' built-in high-privilege account",
      "Setting enterprise-grade password complexity (Uppercase, numbers, symbols)",
      "Understanding password expiration and account lockout security policies",
      "Renaming or disabling default Administrator for defense-in-depth security"
    ],
    contentAr: [
      "إدارة الحساب الأساسي الداخلي فائق الصلاحيات وهو حساب المسؤول (Administrator)",
      "صياغة وتعيين كلمة مرور فائقة التعقيد للمؤسسات وتطابق معايير الحماية",
      "فهم فاعلية سياسات انتهاء صلاحية كلمات المرور وتأمين إقفال الحسابات تلقائياً (Account Lockout)",
      "الممارسة الأمنية المتقدمة: تغيير اسم حساب Administrator أو تعطيله لحماية مضافة ضد التخمين"
    ],
    explanation: "هذا السلايد يركز على الجانب الأمني لحساب الإدارة الرئيسي. عند انتهاء تثبيت ويندوز سيرفر لأول مرة، يمتنع النظام عن تسجيل دخولك حتى تقوم بإنشاء كلمة مرور للحساب المحلي الفائق المسمى (Administrator).\n\nتفرض مايكروسوفت بشكل افتراضي وصارم سياسة لكلمات المرور المعقدة (Complexity Requirements)، حيث ترفض الكلمات البسيطة (مثل admin123) وتجبرك على صياغة كلمة مرور تزيد عن 8 رموز تحتوي على أحرف كبيرة (Uppercase)، وأحرف صغيرة (Lowercase)، وأرقام، ورموز خاصة (مثل P@ssw0rd!).\n\nيوضح السلايد أيضاً ممارسة أمنية شهيرة؛ نظراً لكون اسم الحساب الافتراضي معروفاً عالمياً لأي مخترق وهو (Administrator)، فإن المهاجمين يقومون بهجمات التخمين المكثفة (Brute-Force Attacks) لفك شفرته. لذلك، من مبادئ الدفاع الأمني الفائقة الاستباقية القيام بـ:\n- إعادة تسمية الحساب (Rename) لاسم ورمز آخر لا يخطر للمهاجمين.\n- أو تفعيل حساب إدارة مخصص وتعطيل (Disable) الحساب الافتراضي تماماً بعد نقل الصلاحيات، لحظر أي محاولات تخمين موجهة ضده.",
    keyConcepts: ["Complexity Requirements", "Brute-force Attack", "Defense-in-Depth", "Account Lockout"],
    technicalTips: [
      "في بيئات الإنتاج الفعلية، سياسة الأمان تفرض تغيير كلمة مرور المسؤول بشكل دوري (كل 42 أو 90 يوماً تلقائياً)، مما يمنع ثبات كلمات المرور لفترات طويلة في حال تسربها."
    ]
  },
  {
    id: 14,
    lectureId: 2,
    titleEn: "Command Center: Exploring Server Manager",
    titleAr: "مركز التحكم الرئيسي: استكشاف واجهة مدير الخادم (Server Manager)",
    contentEn: [
      "Server Manager is the prime console launched on startup for system admins",
      "Allows adding Roles (Active Directory, DHCP, Web Server) and Features",
      "Centralized dashboard to view server health, network status, and services",
      "Remotely managing multiple physical servers in a unified screen"
    ],
    contentAr: [
      "أداة Server Manager هي لوحة التحكم والوزارة الرئيسية التي تقلع مباشرة عند دخول خبير الأنظمة",
      "تتيح إضافة الأدوار الأساسية (Roles) كالدليل النشط والـ DHCP والمميزات التكميلية (Features)",
      "لوحة معلومات مركزية لمراقبة حيوية وأداء الخادم وحالة الخدمات والعمليات المشغلة",
      "إمكانية ربط وإدارة خوادم فيزيائية وافتراضية متعددة والتحكم بها من شاشة مركزية واحدة"
    ],
    explanation: "السلايد الأخير يتناول البوابة والتطبيق الأهم لإدارة ويندوز سيرفر: مدير الخادم (Server Manager).\n\nServer Manager هو البرنامج والمنصة المتكاملة التي تفتح تلقائياً بمجرد تشغيل الواجهة الرسومية للخادم. يضم ثلاث لوحات هامة:\n1. Dashboard (لوحة المعلومات): تعطي لمحة شاملة بالألوان والأرقام عن الخدمات التي تواجه عطلاً ومستوى تحميل المعالج والرام.\n2. Local Server (الخادم المحلي): بوابتك السريعة لتعديل اسم السيرفر، وتفعيل ميزة الـ Remote Desktop لدخول الخادم عن بعد، وتحديث النظام، وإيقاف الجدار الناري مؤقتاً للتجريب.\n3. Add Roles and Features (إضافة الأدوار والمميزات):\nهذه هي روح وإكسير ويندوز سيرفر. افتراضياً، ويندوز سيرفر بعد التثبيت لا يقدم خدمات قوية، بل هو مجرد نظام تشغيل أساسي. من هنا، يذهب المهندس لإضافة الأدوار (Roles) وهي الخدمات الكبرى التي تغير طبيعة وظيفة الخادم وتجعله يقوم بوظيفة كبرى بالشبكة (مثال: تفعيل دور Active Directory Domain Services ليتحول الخادم لمتحكم مجال، أو تفعيل دور DNS Server لخدمة تدوير الأسماء)، والمميزات (Features) وهي برمجيات ذكية تكميلية وثانوية تساند الخادم وتعزز كفاءته وتأمينه (كـ BitLocker للتشفير أو تنصيب .NET Framework).",
    keyConcepts: ["Server Manager", "Roles vs Features", "Dashboard", "Remote Management"],
    technicalTips: [
      "من خلال أداة Server Manager، يمكنك نقر خيار (Add Other Servers to Manage) لربط كافة خوادم فروع شركتك، لتتمكن من إدارتها، وتثبيت الأدوار عليها جميعاً بضغطة زر وأنت جالس بشكل مريح في مكتبك."
    ]
  },
  {
    id: 15,
    lectureId: 3,
    titleEn: "Network Administration LAB - Lecture 3: AD Users and Computers",
    titleAr: "مختبر إدارة الشبكات - المحاضرة الثالثة: مستخدمو وأجهزة الدليل النشط",
    contentEn: [
      "Network Administration",
      "LECTURE 3: AD USERS AND COMPUTERS",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "مختبر إدارة الشبكات",
      "المحاضرة الثالثة: مستخدمي وأجهزة الـ Active Directory",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "هذه المحاضرة هي الحجر الأساس لإدارة الهويات والتحكم بالأمن وتصاريح شبكة ويندوز سيرفر. سنلقي نظرة عامة على خدمة الدليل النشط (Active Directory)، ونفهم مفهوم المعرفات الأمنية (SIDs)، ثم نتعلم كيفية تقسيم وتصميم الوحدات التنظيمية (OUs)، ونطبق سيناريوهات محاكاة عملية لإنشاء وتخصيص حسابات المستخدمين، واستخدام القوالب الجاهزة لتوفير الوقت والجهد، بالإضافة إلى تفويض وتعيين موظفي ومسؤولي الفروع للتحكم بحسابات مستخدميهم دون منحهم صلاحيات الإدارة الفائقة لكامل هيكل الخادم.",
    keyConcepts: ["Active Directory", "Identity Management", "Security Principals"]
  },
  {
    id: 16,
    lectureId: 3,
    titleEn: "Active Directory Overview",
    titleAr: "نظرة عامة شاملة حول الدليل النشط (Active Directory)",
    contentEn: [
      "One of the fundamental design goals for Active Directory is to define a single, centralized repository of users and information resources.",
      "Each domain acts as a logical boundary, and members of the domain share information about the objects within them.",
      "The information stored within Active Directory determines which resources are accessible to which users.",
      "Through the use of permissions that are assigned to Active Directory objects, you can control all aspects of network security."
    ],
    contentAr: [
      "من أهم الأهداف التصميمية والمحورية لخدمة الدليل النشط هو تأسيس وجلب مستودع مركزي موحد (Centralized Repository) لحفظ الحسابات والبيانات والمسؤولين.",
      "يمثل كل مجال أو نطاق (Domain) حدوداً وحواجز منطقية (Logical boundary)، وتتشارك كافة أجهزة وأعضاء المجال المعلومات بمرونة داخل نطاقهم.",
      "المعلومات والصفات المسجلة داخل الدليل النشط هي التي تحدد بالضبط الصلاحيات والمطالب والموارد المسموح بالوصول إليها.",
      "من خلال تعيين وتطبيق الأذونات والمطالب الأمنية (Permissions) على كائنات الدليل، يمكنك فرض الرقابة والتحكم المتين بجميع معايير الحماية بالشبكة."
    ],
    explanation: "يوضح هذا السلايد الركائز الكبرى لعمل الدليل النشط:\n1. المستودع المركزي (Centralized Repository): فكرة الدليل تلغي فكرة تكرار إدخال الحسابات محلياً على الأجهزة العادية بالشركة. بامتلاكك AD، يتم الاحتفاظ بالهويات كلها في مكان مركزي واحد.\n2. النطاق كحدود منطقية (Logical Boundary): يمثل المجال (Domain) مثل ust.local حدوداً تنظيمية؛ كل الكائنات داخله تلجا لمتحكم المجال للتأكيد، ولا يعبر أحد خارج النطاق إلا بصلاحيات عبور واتفاقيات ثقة متبادلة.\n3. تحديد الوصول والتحكم بالأمان (Access Control & Permissions): يعطينا الـ AD القدرة الاحترافية لتحديد مثلاً من يستورد الملفات في فرع المحاسبة ومن يتصفح الخوادم في فرع الهندسة بكل دقة ومرونة.",
    keyConcepts: ["Centralized Repository", "Logical Boundary", "Permissions", "Network Security"]
  },
  {
    id: 17,
    lectureId: 3,
    titleEn: "Understanding Security Principals",
    titleAr: "فهم المعرفات الأمنية والكائنات الأساسية لشبكة الأمان",
    contentEn: [
      "Security principals are Active Directory objects that are assigned security identifiers (SIDs).",
      "An SID is a unique identifier that is used to manage any object to which permissions can be assigned.",
      "Each security principal is automatically assigned a SID when it's created.",
      "Security principals are assigned permissions to perform certain actions and access certain network resources."
    ],
    contentAr: [
      "الكائنات الأمنية (Security Principals) هي كائنات بالدليل تملك وتمنح معرفات وهوية أمنية فريدة تدعى (SIDs).",
      "المعرف الأمني (SID) هو عبارة عن رمز طويل ورقم تسلسلي فريد عالمياً يستخدم داخلياً لإدارة وصلاحية أي كائن بالشبكة.",
      "يتم إنشاء وتخصيص الـ SID تلقائياً وبشكل فوري بمجرد تصميم الكائن الجديد داخل بيئة الويندوز سيرفر.",
      "يتم إمداد وتعيين الحقوق والتصاريح للكائنات الأمنية لتنفيذ مهام مخصصة بالخادم والوصول لمصادر البيانات بالشبكة."
    ],
    explanation: "مفهوم الكيان الأمني (Security Principal) والمعرف الأمني (SID) يعتبران الأساس البرمجي لإدارة الأمان في بيئة ويندوز سيرفر:\n- إن نظام تشغيل الخوادم لا يرى المستخدم باسمه (مثل Ahmad) بل يراه داخلياً عبر كود فريد هو الـ SID (مثل S-1-5-21-3623...). هذا الكود لا يتكرر أبداً حتى في حال قمت بمسح المستخدم ahmad ثم أنشأت مستخدماً آخر بنفس الاسم تماماً، سيأخذ رمز SID جديد كلياً، وبالتالي لن يرث أياً من التراخيص السابقة للحساب الممسوح.\n- من خلال هذا الهيكل، يسهل على السيرفر التدقيق وعزل الملفات والمطالب بالاعتماد على الرقم التسلسلي SID.",
    keyConcepts: ["Security Principals", "SIDs", "Unique Identifier"]
  },
  {
    id: 18,
    lectureId: 3,
    titleEn: "Understanding Security Principals: The Three Core Types",
    titleAr: "كائنات الشبكة الأمنية: الأنواع الثلاثة الرئيسية ومستبعدات الأمان",
    contentEn: [
      "User Accounts: Identify individual users on your network by including information such as the user’s name and their password.",
      "Groups: Two main types exist: security groups and distribution groups. Security groups ease permission management, while distribution groups are solely for sending email (and are NOT security principals).",
      "Computer Accounts: Identify which client computers are members of particular domains, facilitating secure domain joining and authentication purposes.",
      "Crucial Reminder: Note that other structures—such as Organizational Units (OUs)—do NOT function as security principals."
    ],
    contentAr: [
      "حسابات المستخدمين (User Accounts): تحدد وتنظم هوية الموظفين الأفراد عبر جمع وحفظ اسم المستخدم للمرور والحساب معاً بالدليل.",
      "المجموعات (Groups): تنقسم لنوعين: مجموعات الأمان (Security Groups) لتوزيع وفرض الأذون والصلاحيات، ومجموعات التوزيع (Distribution Groups) وتستخدم حصلياً لإرسال بريد جماعي (وليست كائنات أمنية ولا تعطى صلاحيات).",
      "حسابات أجهزة الكمبيوتر (Computer Accounts): تمنح الهوية والتأكد من انضمام حواسيب الموظفين بسلام وأمان للمجال وتتبع حركتها بالشبكة.",
      "تذكير واف: انتبه جيداً إلى أن بعض الهياكل بالدليل - مثل الوحدات التنظيمية (OUs) - لا تصنف ولا تعمل ككائنات أمنية (أي لا يمكن منح OU صلاحية قراءة ملف مباشرة)."
    ],
    explanation: "هذا السلايد يفكك أنواع الكائنات الأمنية الممكنة داخل الدليل، ويؤكد على حقيقة تقنية هامة:\n1. حسابات الأفراد (Users): لتأكيد الهوية الشخصية وجلب صلاحية مخصصة للموظف.\n2. المجموعات (Groups): هنا تهدف مايكروسوفت لتوفير جهد تكرار كتابة وتخصيص السلبيات بالشبكة. نقوم بإنشاء مجموعة باسم 'المحاسبة' ونضم إليها موظفي المحاسبة، تم نمنح المجموعة سماحية القراءة لملفات الأرصدة دفعة واحدة. تذكر: مجموعات التوزيع البريدي (Distribution Groups) لا تملك SID ولا يمكن منحها صلاحية على ملف.\n3. حسابات الأجهزة (Computers): حاسوب الموظف يأخذ حساب بالدليل لتنظيم تحديثات الأمان له، وضمان تبعيته للنطاق.\n4. استبعاد الـ OUs: الوحدات التنظيمية نعتبرها بمثابة 'مجلد ووعاء' تنظيمي فقط، لرص وتدوير المستخدمين والأجهزة داخله، ولكنها لا تعتبر كائناً أمنياً بذاته أي لا يمكن أن يوزع له كود SID خاص أو نمنحه أذون دخول على ملف بشكل مباشر بمفرده.",
    keyConcepts: ["User Accounts", "Security Groups vs Distribution Groups", "Computer Accounts", "OUs exclusion"]
  },
  {
    id: 19,
    lectureId: 3,
    titleEn: "Managing Security with Security Principals",
    titleAr: "آليات ومنظومة إدارة الأمان ومراقبة الكائنات الأمنية",
    contentEn: [
      "You can assign them permissions to access various network resources (files, folders, printers).",
      "You can grant them specific user rights to perform actions on systems (e.g., local logon, taking ownership).",
      "You can track and audit their actions on network resources for forensic security.",
      "These major structures form the absolute foundation of the Active Directory security architecture."
    ],
    contentAr: [
      "يمكنك تخطيط وإعطاء الكائنات صلاحيات للولوج والوصول لمصادر الشبكة كالخوادم والملفات المشتركة كلياً.",
      "منح الكائنات حقوق مستخدمين مخصصة (User Rights) مثل حق تشغيل الخادم والولوج ومسك الملكية للملفات.",
      "تتبع ورصد سلوك وعمليات الكائنات الأمنية باستخدام نظام الرصد والتدقيق الفني اللحظي (Auditing).",
      "هذه المنظومة والأعمدة هي حجر الأساس للتصميم وبناء جدر البنية الأمنية بدليل مايكروسوفت."
    ],
    explanation: "نصل هنا لكيفية تسخير الكائنات الأمنية لإحكام السيطرة:\n- الأذون (Permissions): تحدد سلوك المستخدم مع الموارد الملموسة والملفات (كالقراءة، التعديل، المسح).\n- الحقوق (User Rights): تمنح صلاحيات لتنفيذ مهام إجرائية على نظام التشغيل نفسه (كالسماح بتسوية الـ Backup، وتعديل زمن الخادم، وتجربة الدخول المحلي).\n- الرصد والتدقيق (Auditing): يقوم الويندوز سيرفر بمراقبة الأحداث الأمنية في حال قام مستخدم بتعديل ملف مالي، يتم رصد ذلك بالدليل باسمه وهويته.",
    keyConcepts: ["Permissions", "User Rights", "Auditing", "Security Foundations"]
  },
  {
    id: 20,
    lectureId: 3,
    titleEn: "An Overview Of Organizational Units (OUs)",
    titleAr: "الوحدات التنظيمية (OUs) - المفهوم وبنية الترتيب والتقسيم",
    contentEn: [
      "An Organizational Unit (OU) is a logical container and group of Active Directory objects.",
      "OUs are used solely to establish structural organization and hierarchy within an Active Directory domain.",
      "An organization's real-world business structure and departments can be cleanly mirrored within AD using OUs.",
      "The core purpose is to organize objects logically based on business needs, apply security delegation, and manage Group Policies (GPOs)."
    ],
    contentAr: [
      "الوحدة التنظيمية (OU) هي عبارة عن مجلد وحاوية منطقية للملفات والرموز المفتوحة داخل حواشي المجال بدليل مايكروسوفت.",
      "تستخدم الـ OUs غرضاً تنظيمياً خالصاً بهدف تشكيل ورسم الهيكل الهرمي والإداري الفني للمؤسسة.",
      "تمثيل وتطابق الهيكل الحقيقي لأقسام وفروع الشركة (مثل الإدارة الهندسية والطبية والمالية) بدقة داخل الدليل.",
      "الهدف الرئيسي هو فرز وهيكلة الكائنات بما يلائم احتياجات المشروعات وتوطين الأمن وتفويض الصلاحيات وتمرير سياسات المجموعة (GPOs)."
    ],
    explanation: "إليك تفصيل مفهوم الوحدة التنظيمية (Organizational Unit):\n- تخيل أنك تمتلك مئات الحسابات والأجهزة لشركتك. بدون وجود حاويات، سيتجمع كل هذا في مجلد موحد مكدس يسمى Users، مما يعطل فاعلية الصيانة وتوزيع الصلاحيات.\n- تقوم الوحدة التنظيمية OU بفتح مجلدات تفصيلية داخل الخادم تشابه الهيكل المعتمد والمادي للشركة. نخترع وحدات للفرع الطبي، وأخرى للفرع الهندسي، وبهذا نستطيع إدارة كل قطاع عتادياً وخدماتياً وجلبه على حدة.",
    keyConcepts: ["Organizational Unit", "Logical Containment", "Business Mirroring", "GPOs"]
  },
  {
    id: 21,
    lectureId: 3,
    titleEn: "An Overview Of OUs: Nested Objects & Policy Application",
    titleAr: "الوحدات التنظيمية (OUs): الكائنات المضمنة وسياسة تطبيق نظام الـ GPOs",
    contentEn: [
      "OUs can populate the following objects: Users, Groups, Computers, Shared Folder objects, Contacts, Printers, and nested Sub-OUs.",
      "A massive advantage of OUs is that each container can assign and manage its own unique set of business policies.",
      "Administrators can map and execute custom Group Policy Objects (GPOs) targeted directly to specific OUs.",
      "GPOs represent enterprise-grade rules or restrictions applying directly to all objects residing inside that particular OU."
    ],
    contentAr: [
      "يمكن للوحدة التنظيمية (OU) أن تضم المكونات التالية: المستخدمين، المجموعات، أجهزة الكمبيوتر، المجلدات المشتركة، جهات الاتصال، الطابعات، ووحدات تنظيمية فرعية مضمنة.",
      "ميزة استباقية بالغة السطوع للأوعية OUs تمكن من وضع وتعيين حزم سياسات وأنظمة مستقلة تختلف من قسم لآخر.",
      "متاح لخبراء النظم بناء وتصميم كائنات سياسات المجموعة (GPOs) الخاصة وتوجيهها لتخدم مستخدمي OU محددة بمفردها.",
      "سياسات الـ GPOs هي قوانين وأوامر إجبارية تطبق فوريًا على كائنات الأجهزة والمستخدمين داخل نطاق الوعاء المستهدف."
    ],
    explanation: "يناقش هذا السلايد ميزتين أساسيتين لخيار الـ OUs:\n1. احتواء كائنات متنوعة (Nested Objects): لا تقتصر الـ OU على المستخدمين، بل يمكن وضع أجهزة المكاتب والطابعات المشتركة ومجلدات الشبكة وحتى OUs فرعية داخلها (مثل OU هندسة تحتوي على OU داخلية باسم IT وأخرى باسم CNDs) لتنظيم متدرج متطور.\n2. الارتباط بالـ GPOs (سياسات الأمان والمجموعة):\nالـ GPO هو أمر مركزي تفرضه لتنظيم الأجهزة والمستخدمين (مثال: منع تغيير خلفية الشاشة لجميع الموظفين، أو فرض تنصيب برنامج أوفيس تلقائياً عند الإقلاع). يمنحنا الـ AD إمكانية عزل وتربيت هذه السياسات حصراً على قطاعات محددة (نطبق سياسة حظر التصفح لـ OU المبيعات، ونمنع استخدام الفلاش ميموري لـ OU المحاسبة) مما يعطينا مرونة إدارية لا تضاهى.",
    keyConcepts: ["Nested OUs", "Group Policy Objects (GPOs)", "Targeted Administration"]
  },
  {
    id: 22,
    lectureId: 3,
    titleEn: "The Purpose Of OUs",
    titleAr: "الهدف والفرق التنظيمي للـ OUs وقواعد توريث الأذون",
    contentEn: [
      "OUs are primarily container structures for organizing objects, not classical logical security groups.",
      "Unlike security groups, OUs are NOT used directly to assign file system permissions or local server access rights.",
      "Industry Best-Practice: Assign individual users into Security Groups, and then place those groups inside respective OUs.",
      "By default, nested Organizational Units inherit all permissions assigned to their parent container."
    ],
    contentAr: [
      "الهدف الفعال للوحدات التنظيمية OUs هو هيكلة وتنظيم الكائنات، وهي ليست مجموعات أمنية بالمعنى التقليدي الشهير.",
      "على عكس المجموعات، لا تستخدم الـ OUs نهائياً لتعيين وتخصيص صلاحيات الملفات أو مشاركة المستندات ومصادر العبور مباشرة.",
      "التصميم الأمثل للمهندس: رتب الموظفين وضمهم بمجموعات أمنية أولاً، ثم رص المجموعات والأجهزة داخل الوحدات التنظيمية المقابلة.",
      "بشكل تلقائي، ترث الوحدات التنظيمية الفرعية (Sub-OUs) كافة الأذون والخصائص المطبقة عتادياً على الوعاء الأكبر الحاضن لها."
    ],
    explanation: "يوضح هذا السلايد فاصلاً تقنياً مهماً جداً يرتكبه الكثير من المبتدئين في امتحان الشبكات:\n- خطأ تقني: الذهاب لملف ومحاولة إضافة الوحدة التنظيمية (Engineering OU) لمنحها صلاحية القراءة. الـ OU ليست كائناً أمنياً ولا يمكن منحها أذوناً على الملفات أو مجلدات المشاركة.\n- الطريقة الصحيحة (Best Practice):\nنقوم بإنشاء مجموعة أمنية نطلق عليها (Eng_Staff_Group)، ونضيف فيها حسابات المهندسين. ثم نضع حسابات الموظفين وهياكل الأجهزة والمجموعة نفسها ككائنات مرتبة بانتظام داخل الوعاء (Engineering OU). نمنح الأذون بالملفات للمجموعة، بينما نستخدم الـ OU لفرض سياسات منع الأجهزة أو لتفويض الصلاحيات.\n- قانون التوريث (Inheritance):\nتلقائياً، لو قمت بتعديل أذون الإدارة في الوعاء الأكبر ust.local، فإن كافة الفروع والـ Sub-OUs بداخله ترث هذا الأمان تلقائياً إلا إذا ألغى خبير الشبكة توريث الأذون يدوياً لضمان الخصوصية.",
    keyConcepts: ["Security Groups vs OUs", "Industry Best-Practice", "Permission Inheritance"]
  },
  {
    id: 23,
    lectureId: 3,
    titleEn: "Creating OUs",
    titleAr: "طريقة وخطوات بناء الوحدات التنظيمية وحماية الكائنات من الإزالة",
    contentEn: [
      "1. Open Active Directory Users and Computers console (Tools -> Active Directory Users And Computers).",
      "2. Right-click your domain name (e.g., ust.local) & navigate to: New -> Organizational Unit.",
      "3. Type 'University' in the name text-field for your prime container.",
      "4. Crucial Lab Step: Uncheck the security option: 'Protect Container From Accidental Deletion' and click OK to proceed."
    ],
    contentAr: [
      "1. أطلق واجهة تحكم مستخدمي وأجهزة الدليل النشط من قائمة أدوات مدير الخادم (Tools -> Active Directory Users And Computers).",
      "2. انقر بزر الفأرة الأيمن فوق اسم نطاقك المحلي (مثل ust.local) ثم اختر: جديد (New) ثم وحدة تنظيمية (Organizational Unit).",
      "3. اكتب اسم الوحدة التنظيمية الأولى المستهدفة بالمعمل وهو 'University' بدقة في حقل النص المتاح.",
      "4. خطوة المختبر الإلزامية: قم بإلغاء علامة الاختيار عن خيار الأمان: 'حماية الحاوية من حذف الصدفة' (Accidental Deletion)، ثم انقر موافق."
    ],
    explanation: "هذه هي الخطوات العملية لإنشاء وحدة تنظيمية جديدة في السيرفر:\n- إدارة الدليل: نفتح أداة (Active Directory Users and Computers) وهي الأداة الأساسية لإدارة مستخدمي وموارد الدليل النشط.\n- الحماية من الحذف بالخطأ (Protect Container From Accidental Deletion):\nتضع مايكروسوفت ميزة رائعة وهي حماية إجبارية تمنع مسؤولو النظام من حذف الوعاء بالصدفة لكي لا يحذف معها مئات المستخدمين والأجهزة المشتركة ومجلدات الفرع. إذا تم تفعيلها وحاولت حذف الوعاء، سيعطيك نظام ويندوز رسالة تفيد بعدم وجود صلاحيات كافية لمسح هذا المجلد. لكي تتمكن من حذفه تالياً، سيتوجب عليك تفعيل خيار العرض المتقدم (Advanced Features) من لوحة العرض، والدخول لخصائص الوعاء، والذهاب لعلامة Object، ثم تعطيل خيار الحماية لتسمح للويندوز بمسحه بسلام.",
    keyConcepts: ["Accidental Deletion", "Active Directory Tools", "Advanced Features Object tab"]
  },
  {
    id: 24,
    lectureId: 3,
    titleEn: "Build The Following OUs",
    titleAr: "التدريب العملي الثاني: تشييد وتأسيس المخطط الهرمي للوحدات التنظيمية",
    contentEn: [
      "Target Domain Domain Database Root: 'ust.local'",
      "First-Level Sub-OUs: Create 'Engineering' and 'Medical' containers under domain root.",
      "Engineering Branch Internal Nesting: Under 'Engineering' OU, create sub-level OUs named 'IT' and 'CNDs'.",
      "Medical Branch Internal Nesting: Under 'Medical' OU, create sub-level OUs named 'Pharmacy' and 'Laboratory'."
    ],
    contentAr: [
      "جذر قاعدة بيانات المجال المستهدف: النطاق الرئيسي المحلي 'ust.local'.",
      "مستوى الأوعية الرئيسي الأول بالتدريب: تأسيس وحدة 'Engineering' ووحدة 'Medical' تحت جذر النطاق فوراً.",
      "تفريع أقسام وهيكل القطاع الهندسي الفني: داخل وعاء 'Engineering' العقلاني، أضف كائن 'IT' وكائن 'CNDs' فرعياً.",
      "تفريع أقسام وهيكل القطاع الطبي الإداري: داخل وعاء 'Medical' العقلاني، أضف كائن 'Pharmacy' وكائن 'Laboratory' فرعياً."
    ],
    explanation: "يقف خبير النظم لتنزيل وتطبيق مخطط وهيكل الشركة المرسوم له، والهدف هو تأسيس محاكاة حقيقية للهيكل الأكاديمي للجامعة:\n- ust.local (جذر النطاق)\n    ├── Engineering (وحدة تنظيمية رئيسية)\n    │     ├── IT (وحدة أولى فرعية)\n    │     └── CNDs (وحدة ثانية فرعية لشبكات الحاسب والأمن)\n    └── Medical (وحدة تنظيمية رئيسية ثانية)\n          ├── Pharmacy (وحدة فرعية طبيعة)\n          └── Laboratory (وحدة فرعية للمختبرات)\n\nهذا التقسيم يسهم في سهولة إدارة كل فرع، ويساعد لاحقاً لتوجيه سياسات محددة كحصر استخدام الإنترنت للفرع الهندسي وحجبه في القطاعات الطبية.",
    keyConcepts: ["Hierarchical OU Tree", "Sub-OUs", "Nesting Strategy"]
  },
  {
    id: 25,
    lectureId: 3,
    titleEn: "Administering Properties Of OUs",
    titleAr: "إدارة خصائص الوحدات التنظيمية وتحديد المسؤوليات التنظيمية",
    contentEn: [
      "Although OUs are primarily created for organizational purposes, they have several settings you can modify.",
      "To modify properties of an OU using Active Directory tool, right-click any OU and select Properties.",
      "In any organization, it helps to know who is responsible for managing an OU. You can set this on the 'Managed By' tab.",
      "The information specified on this tab is convenient because it's automatically pulled from contact info on a user record."
    ],
    contentAr: [
      "بالرغم من كون الـ OUs تبنى لهيكلة الدليل، إلا أنها تضم خصائص وصفات برمجية وعملية متعددة تخدم الإدارة والمهندسين.",
      "لتحديث وتغيير خصائص أي وعاء، انقر بزر الفأرة الأيمن فوقها واختر 'الخصائص' (Properties) لتعديل قيم ومكان الوعاء.",
      "في بيئات الشبكات الاحترافية، من الجوهري تسجيل وتحديد الشخص أو المكتب المسؤول عن متابعة الوحدة أو القسم بدقة.",
      "التحكم وإضافة المالك للوعاء يتم بتبويب 'المدار بواسطة' (Managed By) مما يعكس مرونة ممتازة لسحب الهويات مباشرة."
    ],
    explanation: "إلى جانب التنظيم، تمتلك كل وحدة تنظيمية خصائص فنية هامة تساعدنا في الأرشفة والتحكم الإداري:\n- لوحة الخصائص (Properties Window): تتيح لنا إضافة وصف واضح (Description) كـ (كلية الهندسة والعلوم)، وإضافة معلومات الشارع والموقع البريدي والدولة.\n- تبويب المدار بواسطة (Managed By):\nهذا خيار إداري ذهبي. يتيح لك تحديد مستخدم مسجل بالدليل ليكون هو 'المشرف' أو مدير الوحدة التنظيمية. بدلاً من كتابة معلوماته كتابة يدوية، يوفر النظام خيار البحث واختيار حسابه لربطه بالوعاء، مما يعكس بيانات التواصل، رقم الهاتف، والبريد المسجل له تلقائياً بالملف الإرشادي للوحدة.",
    keyConcepts: ["Managed By tab", "OU Properties", "Administrative Registry"]
  },
  {
    id: 26,
    lectureId: 3,
    titleEn: "Visual Layout: OU Properties & 'Managed By' Setup",
    titleAr: "الواجهة البرمجية لتخصيص الخصائص والمسؤول المكلف بقسم الهندسة",
    contentEn: [
      "General Tab Configuration for 'Engineering' OU: Description: Faculty of Engineering; Street: Al-musala st; City: Taiz; State: Alqahirah; ZIP Code: 1111; Country: Yemen.",
      "Managed By Tab Configuration: Sets the authority path pointing directly to: 'Aljanad.edu/Users/The_Legend'.",
      "Automated data population: The system auto-fills address (Almasbah, Taiz, Alqahirah, Yemen) & telephone number (775069901) directly from manager's record.",
      "This visual integration provides clear transparency into administrative ownership over network assets."
    ],
    contentAr: [
      "1. تهيئة التبويب العام (General) لوحدة قسم الهندسة (Engineering OU):",
      "   - الوصف: كلية الهندسة والعلوم (Faculty of Engineering)",
      "   - الشارع: Al-musala st، المدينة: تعز، الولاية: القاهرة، الرمز البريدي: 1111، البلد: اليمن.",
      "2. تهيئة خيار 'المدار بواسطة' (Managed By): ربط وإسناد المسؤولية إلى الحساب المشرف المباشر.",
      "3. السحب التلقائي للبيانات: يقوم النظام تلقائياً بملء بيانات المشرف (الهاتف، العنوان البريدي، إلخ) من ملفه التعريفي المسجل بالدليل النشط.",
      "4. التوثيق والمصداقية: يعزز هذا الربط الشفافية التامة لمعرفة المشرف المسؤول عن كل قطاع بالشبكة."
    ],
    explanation: "شرح تفصيلي لتكوين خصائص الوحدات التنظيمية (OU Properties):\n\n- التبويب العام (General Tab):\nهنا نقوم بملء الحقول الوصفية كالعنوان الفعلي للقسم ومبناه الجغرافي. هذا ليس مجرد هدر للوقت، بل هو أساس الأرشفة لتمكين مهندسي الشبكات من الفرز السريع والبحث الفعال.\n\n- تبويب 'المدار بواسطة' (Managed By):\nإدارة وتعيين صلاحية الإدارة والرقابة لوعاء معين. بالضغط على Change، نختار الملف الشخصي للمهندس المشرف (مثل The_Legend). عند تحديد حسابه، يقوم معالج الدليل النشط أوتوماتيكياً بسحب بيانات هاتفه وعنوانه وقسمه من قاعدة بيانات الهويات ليعرضها بشكل مباشر داخل لوحة خصائص الوحدة التنظيمية، مما يحفز التماشي التنظيمي التام داخل الجامعة.",
    keyConcepts: ["Managed By integration", "Automated Profile Pulling", "Administrative Property Panels"]
  },
  
  {
    id: 41,
    lectureId: 4,
    titleEn: "Lecture IV: Joining A Domain",
    titleAr: "المحاضرة الرابعة: الانضمام للمجال وتهيئته",
    contentEn: [
      "Introduction to joining Active Directory domains.",
      "Requires a properly configured domain controller and DNS server.",
      "Once joined, clients can view AD resources in their network."
    ],
    contentAr: [
      "مقدمة مفصلة عن الانضمام إلى نطاق ومجال الدليل النشط.",
      "يتطلب إعداداً مسبقاً وسليماً لمتحكم المجال (DC) وخادم الأسماء DNS.",
      "بمجرد الانضمام بنجاح، تظهر موارد الدليل النشط على أجهزة العملاء."
    ],
    explanation: "المحاضرة الرابعة من إعداد المهندس جوهر جمال، تركز بالكامل على الآلية الفنية لربط أجهزة المستخدمين والعملاء (Clients) والعمل بنطاق الدليل النشط (Active Directory) لتمكين الإدارة المركزية وتطبيق الصلاحيات الشاملة.",
    keyConcepts: ["Domain Join requirements", "DNS resolution role", "Central network visibility"]
  },
  {
    id: 42,
    lectureId: 4,
    titleEn: "Domain Joining Fundamentals",
    titleAr: "الأساسيات التقنية للانضمام إلى النطاق",
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
    keyConcepts: ["Domain Controller readiness", "Preferred DNS configuration", "Network resource exploration"]
  },
  {
    id: 43,
    lectureId: 4,
    titleEn: "Step-by-Step Domain Joining (Part 1)",
    titleAr: "الخطوات الفنية المباشرة لربط جهاز عميل بالمجال (الجزء الأول)",
    contentEn: [
      "1. Right-click on the Start menu and choose 'System'.",
      "2. Scroll to 'Computer Name' section, click the 'Change Settings' link on the right.",
      "3. Under 'To Rename This Computer Or Change Its Domain Or Workgroup' section, click the 'Change...' button.",
      "4. Under 'Member Of' section, choose the 'Domain' option. Type the Active Directory domain name (e.g., aljanad.edu) and click OK."
    ],
    contentAr: [
      "1. انقر بالزر الأيمن على قائمة ابدأ (Start) في العميل ثم اختر 'النظام' (System).",
      "2. اتجه إلى قسم 'اسم الكمبيوتر' (Computer Name) وانقر على رابط 'تغيير الإعدادات' (Change Settings) على اليسار/اليمين.",
      "3. بجوار النص 'لإعادة تسمية هذا الكمبيوتر أو تغيير المجال أو مجموعة العمل'، انقر على زر 'تغيير' (Change).",
      "4. في شاشة التغيير، تحت قسم 'عضو في' (Member of)، اضغط على خيار 'المجال' (Domain) واكتب اسم النطاق حرفياً (مثال: aljanad.edu) ثم موافق."
    ],
    explanation: "المعالج التقليدي للانضمام (Online Domain Join):\nتتطلب هذه الخطوة اتصالاً مباشراً وحياً بالشبكة بين الجهاز العميل والـ Domain Controller.\nعند كتابة اسم المجال وضغط موافق، يبدأ كائن النظام بالعميل بالبحث عن سجلات DNS الخاصة بمتحكم المجال (SRV Records) ليطلب منه توثيق وبناء قناة اتصال.",
    keyConcepts: ["Change Settings dialog", "Computer Name properties", "Member Of: Domain selection", "SRV connection records"]
  },
  {
    id: 44,
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
    explanation: "خطوة التوثيق وإعادة التشغيل لإتمام العملية:\n\n- كلمة السر لمدير الدليل:\nبمجرد كتابة اسم النطاق ونقرك فوق موافق، وبفرض سلامة الـ DNS، تفتح نافذة أمان ويندوز تطلب كتابة بيانات حساب يمتلك سلطة بالمجال لإضافة الأجهزة. افتراضياً، يمتلك الـ Domain Admin هذه الصلاحية المطلقة، ويمكن للمهندس تفويض مستخدمين عاديين عبر Delegation لإضافة ما يصل لـ 10 أجهزة لكل مستخدم افتراضياً.\n\n- أهمية إعادة التشغيل (Reboot):\nإعادة التشغيل إلزامية وحتمية ليقوم نظام تشغيل العميل بإعادة بناء نوى أمان ومصادقة مستخدميه، فيفصل حساباته المحلية القديمة، ويستحضر شاشة دخول مجهزة لتسجيل مستخدمي الدليل النشط (من خلال الصيغة DomainName\\Username) وتحميل سياسات الحماية المترابطة GPOs.",
    keyConcepts: ["Domain Admin authorization", "Welcome dialog confirmations", "Accredited user quotas", "Mandatory system reboot"]
  },
  {
    id: 45,
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
    explanation: "الانضمام غير المتصل (Offline Domain Join):\nهي ميزة خارقة أدخلت لتلبية احتياجات المصانع والشركات ذات الفروع التبادلية أو بيئات الحماية العالية.\nففي الوضع الطبيعي (Online)، يحتاج جهاز العميل للاتصال بالـ DC أثناء عملية الضم. أما في الوضع غير المتصل (Offline)، نستخدم أداة سطر الأوامر (djoin.exe) على خادم الـ DC لصياغة ملف نصي مشفر يحتوي على شهادة وتفاصيل حساب الجهاز، ثم ننقل الملف عبر كرت ذاكرة أو إيميل للعميل، وهناك نقوم ببرمجة الملف محلياً، فيصبح الجهاز عضواً في المجال دون أن يتصل بالسيرفر DC ولو لثانية واحدة، وعند أول تشغيل له مستقبلاً في بيئة العمل وباتصاله الفعلي، سيعمل الحساب وينفذ السياسات مباشرة.",
    keyConcepts: ["djoin.exe CLI tool", "Pre-provisioning computer objects", "Offline metadata deployment", "Network bandwidth savings"]
  },
  {
    id: 46,
    lectureId: 4,
    titleEn: "Implementing Offline Domain Join",
    titleAr: "التطبيق العملي للانضمام غير المتصل عبر أداة djoin",
    contentEn: [
      "1. Run on Domain Controller to provision the machine account:",
      "   djoin /provision /domain aljanad.edu /machine win8 /savefile c:\\win8.txt",
      "2. Copy the created file (win8.txt) to the target computer.",
      "3. Run on the target computer side to apply provisioning:",
      "   djoin /requestODJ /loadfile c:\\win8.txt /windowspath %SystemRoot% /localos"
    ],
    contentAr: [
      "1. اكتب ونفذ الأمر التالي على سيرفر متحكم المجال DC لحجز وتشفير الحساب:",
      "   djoin /provision /domain aljanad.edu /machine win8 /savefile c:\\win8.txt",
      "2. انسخ الملف النصي الناتج والمشفر (win8.txt) وانقله بأي وسيلة تخزين للجهاز العميل.",
      "3. افتح موجه الأوامر بالعميل كمسؤول واكتب الأمر التالي لتمرير التوثيق محلياً:",
      "   djoin /requestODJ /loadfile c:\\win8.txt /windowspath %SystemRoot% /localos"
    ],
    explanation: "القراءة التحليلية العميقة لأوامر djoin:\n\n- الشق الأول بالسيرفر (Provisioning):\nالأمر /provision يطلب من السيرفر وبشكل أمني بناء كرت عتادي وصياغة حساب جهاز بالدليل باسم (win8) تابع لمجال الـ (aljanad.edu)، وحفظ تلك الملفات والبيانات الحساسة كملف مشفر يدعى (win8.txt) بداخل مجلد C:\\.\n\n- الشق الثاني بالعميل (Request ODJ):\nعقب نقل الملف للجهاز العميل (ويندوز 8 فما فوق)، وبموجه أوامر ذو صلاحية إدارية، نطلق الأمر /requestODJ ليقوم بالتماس الانضمام المحلي المشفر وتجهيز نظام التشغيل، حيث يشير المسلك %SystemRoot% لمجلد تثبيت ويندوز (C:\\Windows) ليقوم بحقن ملفات التسجيل والتعاريف والـ Registry بهدوء، ثم يطلب العميل محلياً إعادة التشغيل ليصبح المنقاد عضواً شرعياً بالمجال فوراً دون تلامس مباشر.",
    keyConcepts: ["/provision command block", "Savefile metadata construction", "/requestODJ local injection", "LocalOS registry bindings"]
  },
  {
    id: 47,
    lectureId: 5,
    titleEn: "Network Administration Management - Lecture 5: Group Policy Objects",
    titleAr: "إدارة الشبكات - المحاضرة الخامسة: كائنات نهج المجموعة (Group Policy Objects)",
    contentEn: [
      "NETWORK ADMINISTRATION MANAGEMENT",
      "LECTURE 5: GROUP POLICY OBJECTS (GPO)",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "إدارة وإشراف الشبكات المتقدمة",
      "المحاضرة الخامسة: كائنات سياسة وموجّهات المجموعة (GPOs)",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "تركز المحاضرة الخامسة بالكامل على أحد أهم ركائز إدارة أنظمة ميكروسوفت وهو كائنات سياسة المجموعة GPO. تمثل هذه السياسات صمام الأمان والتحكم المركزي الفوقي الذي يمكن مدير النظام من إدارة آلاف حسابات المستخدمين ومحطات العمل بيسر وسهولة وتنزيل حزم البريد والبرامج وتقييد حريات الاختراق والعبث بملفات الريجستري وأنظمة التحكم دون مغادرة كرسيه.",
    keyConcepts: ["Group Policy Objects", "Centralized Management", "Active Directory integration"]
  },
  {
    id: 48,
    lectureId: 5,
    titleEn: "Introduction to Group Policy: The Command Hub",
    titleAr: "مقدمة إلى نهج المجموعة: مركز القيادة والتحكم الموحد",
    contentEn: [
      "What is a GPO? A virtual collection of policy settings, security permissions, and management scopes applied to users and computers in Active Directory (AD).",
      "Why is it used?",
      " - Standardization: Ensures all network devices adhere to baseline operational configurations.",
      " - Security Enforcement: Automates password policies, disables USB drives, and locks down the Control Panel system-wide.",
      "Centralized Management Concept: Instead of configuring 1,000 machines manually, an administrator configures one policy in AD. The Group Policy service automatically pushes and enforces settings across the entire network footprint."
    ],
    contentAr: [
      "ما هي سياسات المجموعة (GPO)؟ هي حزمة وافتراضات منظمة من إعدادات السياسات وتوجيهات الأمان وصلاحيات التطبيق التي تفرض قسرياً على المستخدمين والأجهزة بداخل الدليل النشط.",
      "لماذا نلجأ لاستخدامها؟",
      " - معايير موحدة ومستقرة: تضمن انصياع كافة الأجهزة لنموذج ومقاييس البناء الوظيفية الأساسية بالمنشأة.",
      " - فرض التدابير الأمنية: أتمتة سياسات كلمات المرور، وقطع اتصال منافذ الفلاشات USB، وإغلاق لوحة التحكم على مستوى الشبكة.",
      "فلسفة الإدارة المركزية: تخيل عناء صياغة وتعديل إعدادات لـ 1,000 جهاز لابتوب يدوياً! بفضل الـ GPO يقوم مدير النظام بتوليد وتعديل سياسة وحيدة في السيرفر ليقوم نظام الدليل النشط بتوزيعها تلقائياً على كامل الشبكة."
    ],
    explanation: "هذا السلايد يضع الأساس النظري الجوهري لسياسات المجموعة GPO كمركز قيادة مركزي. فبدلاً من الذهاب لكل جهاز كمبيوتر بشكل منفرد لتعطيل منفذ USB أو تعديل خلفية الشاشة مثلاً، تتيح لك الـ GPO إنشاء مصفوفة من الإعدادات وربطها بالشبكة لتتولى الخدمة دفعها قسرياً للأجهزة المستهدفة.",
    keyConcepts: ["A GPO Definition", "Centralized push distribution", "Network standardization", "Security baseline enforcement"]
  },
  {
    id: 49,
    lectureId: 5,
    titleEn: "Types of Policies: Computer vs. User Configuration",
    titleAr: "أنواع السياسات: نهج تكوين الأجهزة ضد تكوين المستخدمين",
    contentEn: [
      "Computer Configuration:",
      " - Target: Applies to the Computer Object in Active Directory.",
      " - When Applied: During system startup (background) and periodic refreshes.",
      " - Impact: Affects the machine regardless of who logs in.",
      " - Use Cases: Network settings, firewall rules, Windows updates, computer startup scripts.",
      "User Configuration:",
      " - Target: Applies to the User Object in Active Directory.",
      " - When Applied: During user logon and periodic refreshes.",
      " - Use Cases: Desktop wallpaper, folder redirection, Start menu restrictions, logon scripts."
    ],
    contentAr: [
      "تهيئة وإعداد جهاز الكمبيوتر (Computer Configuration):",
      " - الكائن المستهدف: تسري كلياً على حساب وجسد كائن الكمبيوتر بالدليل النشط.",
      " - موعد التطبيق: أثناء إقلاع وتشغيل النظام بالخلفية وقبل ظهور شاشة تسجيل الدخول.",
      " - الأثر: تلحق الضرر أو التهيئة بالآلة نفسها بصرف النظر عن هوية المستخدم الذي يلج إليها.",
      " - أمثلة: إعدادات بروتوكول IP وجدار الحماية، خطة التحديثات، برامج إقلاع الأجهزة.",
      "تهيئة وإعداد حساب المستخدم (User Configuration):",
      " - الكائن المستهدف: ترتبط مباشرة بملف وكائن المستخدم البشري بالدليل.",
      " - موعد التطبيق: تنشط بشكل ديناميكي لحظة تدوين كلمة المرور والولوج للنظام.",
      " - أمثلة: خلفيات الأسطح المخصصة، إعادة توجيه المجلدات، حجب لوحة التحكم وقائمة تشغيل."
    ],
    explanation: "يعد تقسيم الإعدادات إلى قسمين (Computer Configuration و User Configuration) هو الهيكل الجذري لشجرة محرر سياسات المجموعة GPE. فإن كانت السياسة مرتبطة بقطع هاردوير أو ميزة تخص عتاد الكمبيوتر فمكانها المناسب هو قسم تهيئة الأجهزة، بينما لو ارتبطت بتفضيلات مكتبية ومميزات تخص الحسابات الشخصية للموظفين فتدرج بقسم تهيئة المستخدمين.\n\nمن أفضل الممارسات الفنية تعطيل الشق غير المستغل (مثال: تجميد شق إعدادات المستخدم في سياسة لا تحتوي إلا على إعدادات أجهزة) لتخفيف عبء البحث الروتيني بالشبكة وتسريع فترات الإقلاع والدخول.",
    keyConcepts: ["Computer configuration lifecycle", "User logon environment setup", "Registry branch mapping (HKLM vs HKCU)", "Best Practice: Disable unused paths"]
  },
  {
    id: 50,
    lectureId: 5,
    titleEn: "GPO Processing Order: The LSDOU Framework",
    titleAr: "ترتيب تطبيق ومعالجة السياسات الهرمية: نموذج LSDOU",
    contentEn: [
      "The Hierarchy (Applied Top to Bottom):",
      " 1. [L] Local Policy (Applied first, lowest priority)",
      " 2. [S] Site-level GPOs",
      " 3. [D] Domain-level GPOs",
      " 4. [OU] Organizational Unit GPOs (Applied last, highest priority)",
      "The Golden Rule: The Last Writer Wins.",
      " - If a Domain GPO enables a setting but an OU GPO disables it, the OU GPO wins because it applies last.",
      "Modifying Inheritance of Policies:",
      " - Block Inheritance: Applied on an OU to stop higher-level policies (like Domain GPOs) from cascading down.",
      " - Enforced (No Override): Applied on a GPO link. Forces the policy to apply, overriding both 'Block Inheritance' and conflicting lower-level OU policies."
    ],
    contentAr: [
      "ترتيب أولويات وفرض السياسات (من الأعلى للأسفل):",
      " 1. السياسة المحلية [L]: تطبق بداية على اللوكال ماشين وهي الأضعف أولوية.",
      " 2. مستوى الموقع [S]: تسري على النطاقات الممثلة للموقع الجغرافي.",
      " 3. مستوى النطاق [D]: تطبق على نطاق الدومين بالكامل وتتحكم بجميع الكائنات.",
      " 4. مستوى الوحدات التنظيمية [OU]: تطبق آخراً وهي الأشد أولوية وقوة.",
      "القاعدة الذهبية: الكاتب الأخير هو المنتصر (The Last Writer Wins).",
      " - إذا سمح السيرفر على مستوى الدومين بالوصول للوحة التحكم، وعطلتها السياسة المعلقة بـ OU، فإن السياسة بـ OU هي التي تنفذ وتلغي السيرفر لأنها تطبق بالخاتمة.",
      "طرق تعديل التوريث الجغرافي للسياسة:",
      " - منع توريث السياسات (Block Inheritance): يوضع كقفل للـ OU لوقف الزحف الهابط للسياسات العليا.",
      " - الفرض الإجباري (Enforced): لتجاوز ميزة الحجب منع التوريث، وفوقية سياسة السيرفر رغماً عن اعتراض الوحدات التنظيمية."
    ],
    explanation: "تخضع طريقة فهم تطبيق السياسات بالشبكة لمعادلة تدعى (LSDOU). عندما يقلع الكمبيوتر أو يسجل المستخدم دخوله، يقوم بفحص السياسات بالترتيب: أولاً السياسة المحلية، ثم الموقع، ثم الدومين، وبالمطاف الأخير الوحدات التنظيمية OUs. وبما أن OU هي الأخيرة، فكل إعداد يتناقض مع مستوى أعلى يفوز به السيرفر بداخل الـ OU، ما عدا في حال تم تفعيل خيار Enforced (فرض السياسة) من مستوى أعلى، فيلغي تماماً ميزة Block ويصبح رأسه هو الأعلى تسيداً وتطبيقاً قسرياً.",
    keyConcepts: ["LSDOU Precedence", "Last Writer Wins logic", "Block Inheritance lock", "Enforced (No Override) absolute push"]
  },
  {
    id: 51,
    lectureId: 5,
    titleEn: "Lab Environment: Network Topology Setup",
    titleAr: "بيئة العمل المخبرية: طوبولوجيا وبناء هيكل الشبكة",
    contentEn: [
      "Infrastructure Nodes:",
      " - Domain Controller (DC): Windows Server 2019 running AD DS and DNS (UnivLab.local).",
      " - Client Machine: Windows 10/11 Enterprise joined to the domain.",
      "Active Directory Logical Structure:",
      " - Domain: UnivLab.local",
      " - Target Organizational Units (OUs):",
      "   - IT_Dept (Contains User Objects)",
      "   - Student_Computers (Contains Computer Objects)",
      "Lab Objective:",
      " We will create a GPO, target and link it to the IT_Dept OU, force its application, and verify the resulting settings on the Client Machine."
    ],
    contentAr: [
      "عقد وعناصر البنية التحتية والمحاكاة:",
      " - متحكم الدومين (DC): نظام Windows Server 2019 مجهز بخدمات AD DS ومترجم الأسماء DNS.",
      " - جهاز العميل (Client Machine): حاسوب يعمل بوندوز 10/11 Enterprise مربوط بالدومين بنجاح.",
      "الهيكل المنطقي لخدمة الدليل النشط AD:",
      " - اسم المجال المستهدف: UnivLab.local",
      " - الوحدات التنظيمية (OUs):",
      "   - وحدة IT_Dept: تحتوي وتخزن حسابات ومجموعات مستخدمي قسم الآي تي.",
      "   - وحدة Student_Computers: تجمع بداخلها كائنات أجهزة طلاب الكلية المعالجة.",
      "الهدف الأساس للمختبر العملي:",
      " سنقوم معاً بصناعة واختبار مفعول سياسة كائن مجموعة جديدة، ثم توجيهها وربطها بالوحدة التنظيمية IT_Dept لقفل بعض الصلاحيات، وإرغام العميل على فرضها لحظياً بالـ CMD ومعاينة النتيجة بشكل عملي ملموس."
    ],
    explanation: "يوضح هذا السلايد الطوبولوجيا وبناء الشبكة التي سنعد فيها المختبر العملي بالكامل. لدينا دومين يسمى (UnivLab.local)، ويضم وحدتين تنظيميتين شهيرتين هما IT_Dept و Student_Computers. وسنطبق السياسة التي نختارها للمستخدمين المقيدين بـ IT_Dept لنثبت كفاءة الخدمة مركزياً.",
    keyConcepts: ["Domain architecture UnivLab.local", "Infrastructure node roles", "Organizational Unit segregation", "Lab verification pathway"]
  },
  {
    id: 52,
    lectureId: 5,
    titleEn: "Practical Step 1: Open GPMC",
    titleAr: "الخطوة العملية الأولى: تشغيل وحدة إدارة كائنات السياسة GPMC",
    contentEn: [
      "What it does: Launches the Group Policy Management Console.",
      "Why it is needed: The GPMC is the central hub managing all Group Policy architecture. Without this, you lack a forest-wide view of all GPOs.",
      "The Execution:",
      " 1. Go to Windows Start -> Server Manager.",
      " 2. Click the Tools Menu in the top right corner.",
      " 3. Select 'Group Policy Management' from the list.",
      " 4. Navigate and expand: Forest -> Domains -> UnivLab.local."
    ],
    contentAr: [
      "وظيفة الأداة: فتح وتشغيل لوحة التحكم البرمجية المتكاملة لإدارة السياسات.",
      "لماذا نحتاجها؟: تمثل GPMC حجر الأساس والمحور الموحد المعني بمتابعة ورصد وتصدير وحذف وتعديل السياسات عبر مستويات الدليل؛ ولا يمكن استعراض مجلدات السياسات دونها.",
      "خطوات التنفيذ والاستعراض:",
      " 1. من واجهة السيرفر، اذهب لقائمة ابدأ -> ثم افتح مدير السيرفر (Server Manager).",
      " 2. انقر على قائمة 'أدوات' (Tools) في الزاوية العلوية اليمنى الكبرى.",
      " 3. اختر من سياق القائمة خيار 'أداة إدارة سياسة المجموعة' (Group Policy Management).",
      " 4. قم بالتمرير والتوسعة للمجلدات: الغابة Forest -> ثم النطاقات Domains -> ثم النطاق المحلي UnivLab.local."
    ],
    explanation: "نبدأ التثبيت والعمل الفعلي بفتح واجهة الـ GPMC (المعروف بـ gpmc.msc). هي اللوحة الأساسية التي تجد بها شجرة الغابة بالكامل ونطاقاتها والوحدات التنظيمية وأبرز مكون لها وهو حاوية GPO التي تدعى Group Policy Objects.",
    keyConcepts: ["Server Manager dashboard", "Tools menu accessibility", "gpmc.msc command block", "Active Directory forest hierarchy"]
  },
  {
    id: 53,
    lectureId: 5,
    titleEn: "Practical Step 2: Create a New GPO",
    titleAr: "الخطوة العملية الثانية: تشييد وتكوين كائن سياسة مجموعة جديد",
    contentEn: [
      "What it does: Creates an empty Group Policy Object inside the Active Directory domain database.",
      "Why it is needed: The logical container must exist before defining settings. Creating it separately from linking allows administrators to safely configure the template before it impacts active users.",
      "The Execution:",
      " 1. Expand your Domain (UnivLab.local) in GPMC.",
      " 2. Right-click the 'Group Policy Objects' folder and select 'New'.",
      " 3. Enter Name -> Click OK.",
      "Naming Best Practices: Use prefixes to easily identify targets.",
      " - U_BrowserSettings (User-targeted)",
      " - C_FirewallRules (Computer-targeted)"
    ],
    contentAr: [
      "وظيفة هذا الإجراء: تخليق وصياغة حاوية ذكية فارغة للسياسة بداخل قاعدة بيانات الدليل النشط.",
      "لماذا نحتاج لهذه الخطوة بشكل مستقل؟: يجب إرساء الوعاء المنطقي الذي سيضم السياسات قبل الشروع بالربط المباشر والعلني بالشبكة؛ يفيد هذا في تمكين مدير التقنية من فحص وتعديل وتجهيز الكائن بهدوء وبأمان تام قبل تفعيله على المستخدمين.",
      "خطوات تدوين وصياغة الكائن الجديد:",
      " 1. وسّع نطاق البحث والدراسة لدومين (UnivLab.local).",
      " 2. اضغط بالزر الأيمن للفأرة على مجلد 'كائنات نهج المجموعة' (Group Policy Objects) ثم انقر 'جديد' (New).",
      " 3. اكتب اسماً مميزاً للسياسة ثم انقر موافق.",
      "معايير وأخلاقيات التسمية الفنية: احرص على تدوين حروف لتمييز نوع الكائن ونطاقه:",
      " - استخدام حرف U_ للسياسات المرتبطة بالمستخدمين (مثال: U_BrowserSettings).",
      " - استخدام حرف C_ للسياسات المقترنة ببيئة ومحطات الأجهزة (مثال: C_FirewallRules)."
    ],
    explanation: "هذه الخطوة تضمن عدم خلق سياسات عشوائية أو ربط كائنات بنطاق المستخدمين بشكل غير مستقر. ننشئ سياسة فارغة، ويمنحنا نظام ميكروسوفت مرونة تدوين وبناء المحتوى دون حدوث تأثر أو عطب فوري بأجهزة الإنتاج والعمل.",
    keyConcepts: ["Group Policy Objects container", "Decoupled creation logic", "Structured prefix standard (U_ / C_)", "Template safety concepts"]
  },
  {
    id: 54,
    lectureId: 5,
    titleEn: "Practical Step 3: Link GPO to OU",
    titleAr: "الخطوة العملية الثالثة: ربط كائن السياسة بالوحدات التنظيمية المستهدفة",
    contentEn: [
      "What it does: Connects the created GPO to a specific Organizational Unit (e.g., IT_Dept).",
      "Why it is needed: An unlinked GPO is an inert template. Linking activates the policy for users and computers residing inside that specific link scope.",
      "The Execution:",
      " 1. In GPMC, locate and navigate to the target OU (IT_Dept).",
      " 2. Right-click the target OU and select 'Link an Existing GPO...'.",
      " 3. Select your newly created GPO from the list.",
      " 4. Click OK to establish the relationship."
    ],
    contentAr: [
      "وظيفة العملية: توصيل وقرن كائن المحتوى البرمجي المعالج بالوحدة الإدارية المخصصة (مثل IT_Dept).",
      "لماذا نحتاجه؟: إن إبقاء كائن السياسة حراً طليقاً دون ربطه بأي وحدة تنظيمية يجعله مجرد نص برمي معطل لا يؤثر بالشبكة. الربط هو المفتاح الكهربائي الذي يصل قنوات السيرفر بالسيركل أو الدائرة التنظيمية المستهدفة.",
      "طريقة التنفيذ والتمرير:",
      " 1. بداخل لوحة الـ GPMC، اذهب واعثر على الوحدة التنظيمية المنشودة (مثال: IT_Dept OU).",
      " 2. انقر بالزر الأيمن على مجلد الـ IT_Dept واختر 'ربط كائن نهج موجود...' (Link an Existing GPO...).",
      " 3. حدد السياسة المراد نشرها من باقة العرض أمامك.",
      " 4. اضغط 'موافق' (OK) لاستكمال وتعشيق كبل التمرير الهرمي للشبكة."
    ],
    explanation: "يرمز ربط السياسة بالحبل الكهربائي الفعال. عند إتمام هذه الخطوة، يعتبر السيرفر أن جميع كائنات الحسابات الموجودة تحت تلك الـ OU (أو الوحدات التنظيمية المندرجة تحتها بالوراثة) خاضعة بشكل تام وبقوة القوانين الجديدة المعرفة بالكائن.",
    keyConcepts: ["GPO-to-OU linking association", "Inert templates vs. active policy states", "Selective organizational targeting", "Inheritance flow triggers"]
  },
  {
    id: 55,
    lectureId: 5,
    titleEn: "Practical Step 4: Edit GPO Settings",
    titleAr: "الخطوة العملية الرابعة: تحرير وتسطير إعدادات الكائن الفعلي",
    contentEn: [
      "What it does: Opens the Group Policy Management Editor to modify actual registry settings, scripts, or security templates.",
      "Why it is needed: This is where configuration occurs. You navigate the internal architecture (Computer Configuration vs. User Configuration) to configure systemic behaviors.",
      "The Execution:",
      " 1. In GPMC, Right-click your linked GPO -> Select 'Edit'.",
      " 2. Navigate the tree structures:",
      "    User Configuration -> Policies -> Administrative Templates -> Control Panel",
      " 3. Double-click the target setting (e.g., 'Prohibit access to Control Panel and PC settings').",
      " 4. Choose 'Enabled' -> Click Apply/OK."
    ],
    contentAr: [
      "تفسير الخطوة: فتح محرر سیاسة المجموعة المستكشف لتسجيل وحقن قيم الريجستري وتعديل خصائص المكونات والتطبيقات الموجهة.",
      "لماذا نحتاجه؟: الدخول للوعاء الداخلي للسياسة وضبط المفاتيح. هنا ننقب بالشجرة الفرعية لنقرر أي الأبواب يغلق وأي المزايا تُمنع بموجب خطة الحماية.",
      "خطوات التحري والتحديد الشجري:",
      " 1. باللوحة الأساسية لمجلد الكائنات، انقر باليمين على ملف السياسة ثم تفضل باختيار 'تحرير' (Edit).",
      " 2. اتبع المسار الشجري المتفرع التالي بداخل شاشة المحرر التفاعلي:",
      "    تهيئة المستخدمين (User Configuration) -> ثم السياسات (Policies) -> قوالب الإدارة (Administrative Templates) -> لوحة التحكم (Control Panel).",
      " 3. انقر بشدة (دبل كليك) على السياسة المستهدفة (منع الولوج للوحة التحكم وإعدادات الجهاز).",
      " 4. غيّر الحالة من غير مهيأ إلى 'مفعل' (Enabled) ثم مرر أمر التطبيق وانقر موافق."
    ],
    explanation: "هذه هي الورشة الهندسية للـ GPO. يتم استدعاء واجهة (GPME - Group Policy Management Editor) وتتبع تصنيفات مايكروسوفت للوصول إلى الخيار الدقيق المراد تشغيله. تفعيل الخيار 'Enabled' يعني فرض تلك القاعدة وصهرها في سجلات الريجستري بالعميل.",
    keyConcepts: ["gpme.msc Editor node", "Administrative Templates (ADMX)", "Registry policy mapping", "Enabled/Disabled policy logic"]
  },
  {
    id: 56,
    lectureId: 5,
    titleEn: "Practical Step 5: Apply GPO on Client",
    titleAr: "الخطوة العملية الخامسة: فرض وتحديث نهج المجموعة بالعميل لحظياً",
    contentEn: [
      "What it does: Forces the client computer to immediately contact the Domain Controller and request the latest Group Policy updates.",
      "Why it is needed: By default, Group Policy refreshes in the background every 90 minutes. In labs or urgent production fixes, administrators use gpupdate to bypass the wait time.",
      "The Execution (On Client Machine):",
      " 1. Open the Windows Command Prompt (cmd.exe) as administrator.",
      " 2. Type: gpupdate /force",
      " 3. Press Enter and await status confirmation.",
      " 4. Verify GPO status locally via: gpresult /r"
    ],
    contentAr: [
      "تفصيل الأداة: إرغام وضغط نظام العميل على التخاطب السريع مع متحكم الدومين وسحب السياسات الطازجة دفعة واحدة.",
      "لماذا هي خطوة هامة؟: يمر التحديث العدي لسياسات المجموعة بمعدل هادئ في الخلفية بمعدل كل 90 دقيقة (مع انحراف عشوائي بنحو نصف ساعة لمنع الاختناق الشبكي). في التطبيق المخبري أو لإصدار الترقيعات الفورية نطلق أمر التعجيل فوراً للتأكد من زوال العبث أو تطبيق العزل بلحظته.",
      "خطوات العمل من جهة العميل (Client OS):",
      " 1. تفضل بفتح شاشة موجه الأوامر بالعميل (cmd.exe) بصلاحيات مدير فني.",
      " 2. اكتب الكود السحري للتحديث الإجباري: gpupdate /force",
      " 3. اضغط مفتاح الإدخال والتقط رسائل النجاح المبهجة بالخلفية.",
      " 4. لمراجعة وتدقيق السياسات التي نفذت بالكامل بداخل هذا الحاسوب، نفذ الأمر التحقيقي: gpresult /r"
    ],
    explanation: "يعبر أمر (gpupdate /force) عن الروح الميدانية لإدارة السيرفرات. بدلاً من الانتظار أو تكرار تشغيل الحاسوب، يفهم الجهاز فوراً أنه مطالب بالتحديث العتادي البرمجي للسياسات ويسحب الملفات المعدلة من السيرفر. وتكمن المتعة الفنية الكبرى في عمل (gpresult /r) للتأكد بأن السياسة التي أسست بالسيرفر قد هبطت بأمان ورست بنجاح داخل هذا الجهاز المضيف.",
    keyConcepts: ["gpupdate /force deployment trigger", "Regular Group Policy refresh cycle (90 mins)", "Command line verification", "gpresult /r technical reporting"]
  },
  {
    id: 57,
    lectureId: 5,
    titleEn: "Lecture 5: Group Policy Objects (Part 2)",
    titleAr: "المحاضرة الخامسة: كائنات نهج المجموعة (الجزء الثاني)",
    contentEn: [
      "NETWORK ADMINISTRATION MANAGEMENT",
      "Lecture 5: Group Policy Objects (Part 2)",
      "Applied Configurations, Advanced Troubleshooting, and Real-World Deployment",
      "Done by: Eng. Gawhar Gamal"
    ],
    contentAr: [
      "إدارة وتنظيم الشبكات الكبرى ومواردها",
      "المحاضرة الخامسة: سياسات المجموعة GPO (الجزء الثاني)",
      "البنى التطبيقية الميدانية، حلول المشاكل البرمجية، وخطة التوسع بالمشروعات",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "يرحب هذا القسم بالمهندسين لدراسة الشق المتقدم من كائنات السياسة GPO. سننتقل من مجرد مفاهيم وبنود أولية وأسس الربط النظري لندرس سوياً دساتير الحماية وقوانين كلمة المرور والمصداقية وحصار الهاردوير لقطع دابر تسريب المستندات واختراق الأنظمة بالشبكة.",
    keyConcepts: ["Advanced Group Policy implementation", "Real-world operational controls", "Active directory security lockouts"]
  },
  {
    id: 58,
    lectureId: 5,
    titleEn: "Computer Configuration: Password Policy",
    titleAr: "تهيئة الكمبيوتر: كود مصفوفة سياسات كلمة المرور القوية",
    contentEn: [
      "GUI Path:",
      " Computer Configuration > Policies > Windows Settings > Security Settings > Account Policies > Password Policy",
      "Core Settings & Complexity Options:",
      " - Password Complexity: Requires uppercase, lowercase, numbers, and symbols.",
      " - Minimum Password Length: Dictates minimum character length (e.g., 12+ characters).",
      " - Password History: Prevents users from reusing the last N passwords.",
      "Why It Matters:",
      " The absolute first line of defense against brute-force and credential-stuffing attacks. This baseline must be set at the Default Domain Policy to ensure global enforcement."
    ],
    contentAr: [
      "المسلك البرمجي بفرع الشجرة:",
      " تهيئة الأجهزة (Computer Configuration) -> السياسات -> إعدادات ويندوز -> إعدادات الأمان -> سياسات الحساب -> سياسة كلمة المرور.",
      "تفسير ثوابت حماية الحسابات الأساسية:",
      " - تعقيد كلمات المرور (Complexity): ضرورة خلط الحروف الكبيرة، بمزيج صغير، مطعمة بأرقام ورموز فنية.",
      " - الطول الأدنى للمفتاح (Length): فحص وحصار حجم الرمز لضمان تخطيه حاجز 12 حرفاً على الأقل.",
      " - أرشيف التكرار (History): منع المتلاعبين من إعادة استخدام آخر (N) كلمات مرور مستعملة تاريخياً.",
      "الأهمية الأمنية والميدانية:",
      " تمثل كلمة المرور المعقدة حائط الصد وحجر عثرة أول ضد برمجيات التخمين العشوائي Brute-force وحملات تسريب الريدينشيلز. القاعدة الذهبية تملي ضبط هذا النهج الاستثنائي داخل 'Default Domain Policy' لتعميم الأثر على كامل الإمبراطورية الشبكية."
    ],
    explanation: "إعدادات كلمات المرور من السياسات القوية جداً والتي لا تسري بالعادة من OUs عادية، بل تنبع مباشرة من قمة الدمومين (Default Domain Policy) بفضل ميزة خادم المصادقة Kerberos. تمنح الشركة هدوءاً أمنياً من فخ المفاتيح الضعيفة مثل '123456' والتي تحطم كفاءة الشبكة بمجرد ملامستها لأي برمجية خبيثة.",
    keyConcepts: ["Password Policy elements", "Complexity requirements matrix", "Minimum Length enforcement", "Default Domain Policy supremacy"]
  },
  {
    id: 59,
    lectureId: 5,
    titleEn: "Computer Configuration: Account Lockout Policy",
    titleAr: "تهيئة الكمبيوتر: قواعد وسياسات إغلاق وتجميد الحسابات",
    contentEn: [
      "GUI Path:",
      " Computer Configuration > Policies > Windows Settings > Security Settings > Account Policies > Account Lockout Policy",
      "Core Settings & Balancing Matrix:",
      " - Account lockout threshold: Maximum failed logon attempts allowed (e.g., 3 failed attempts) before lockout.",
      " - Account lockout duration: Minutes the account remains frozen (e.g., 30 mins) before auto-unlocking.",
      " - Reset account lockout counter after: Minutes of silence required to clear the failure tracker.",
      "Real-World Scenario: Balancing security vs. helpdesk overhead is critical. Settings too tight choke the staff; too loose leave directories exposed."
    ],
    contentAr: [
      "المسلك البرمجي بفرع الشجرة:",
      " تهيئة الأجهزة (Computer Configuration) -> السياسات -> إعدادات ويندوز -> إعدادات الأمان -> سياسات الحساب -> سياسة إغلاق الحساب.",
      "مصفوفة التوازن الأمني والفني:",
      " - عتبة الإغلاق المعتمدة (Threshold): الحد الأقصى المسموح به لمحاولات الدخول الخاطئة (مثال: 3 محاولات) ثم يصاب الحساب بالشلل المبرمج.",
      " - مدة غلق وقفل الحساب (Duration): الدقائق المستغرقة لبقاء الكائن معقلاً ومجمداً (مثال: 30 دقيقة) قبل السماح بالمحاولة مجدداً.",
      " - تصفير مرصد العداد المعطل (Reset Counter): المهلة الزمنية الهادئة لتصفير حساب المحاولات الفاشلة بعد آخر تخمين سيئ.",
      "معادلة التخطيط والتشغيل الميدانية: يجب مراعاة الموزانة الحساسة؛ إن اخترت عتبة ضيقة جداً (محاولتين مثلاً) فستغرق مكاتب الدعم الفني بتذاكر فك القفال، وإن منحت عتبة هشة سيتجرأ المخترق على رصد ثغرات الحساب بحرية."
    ],
    explanation: "آلية قفل الحساب المبرمجة تضمن تحييد روبوتات الهجوم المستمر. بمجرد تعدي عتبة 3 محاولات خاطئة مثلًا، ترفض منظومة النطاق تفعيل الحساب حتى لو جلب المستخدم الرمز الصحيح لاحقاً، ويبقى موقوفاً بانتظار مرور نصف ساعة أو إطلاق فكه يدوياً من طرف مهندس النظم.",
    keyConcepts: ["Account Lockout Threshold", "Lockout Duration values", "Reset counter window", "Helpdesk operational overhead balance"]
  },
  {
    id: 60,
    lectureId: 5,
    titleEn: "User Configuration: Desktop Restrictions",
    titleAr: "تهيئة حساب المستخدمين: سياسات حظر سطح المكتب ومنع العبث",
    contentEn: [
      "What it does: Restricts active workspace components to prevent operational drift.",
      "Target Path:",
      " User Configuration > Policies > Administrative Templates > System & Control Panel",
      "Core Enforcements:",
      " - Prohibit access to Control Panel and PC settings.",
      " - Remove and prevent access to the Run command (Win+R shortcuts).",
      " - Prevent access to Registry Editing tools (regedit).",
      "Deployment Modes:",
      " - Enterprise Environment: Selectively applied. Standard users get blocked, IT staff bypass via security filtering.",
      " - Kiosk / Lab Environment: Utmost lockdown. Task Manager and Run disabled to prevent students from breaking the system."
    ],
    contentAr: [
      "أبرز الوظائف للنهج: تحديد تصرفات وتحركات الموظفين والطلاب لمنع تشويش وبناء بيئة موحدة نظيفة.",
      "المسار البرمجي الفرعي بالتوجيه:",
      " تهيئة المستخدمين (User Configuration) -> السياسات -> قوالب الإدارة -> النظام ولوحة التحكم.",
      "أذرع القفل الفني الجماعي:",
      " - منع نهائي للوصول وتغيير إعدادات لوحة التحكم (Control Panel).",
      " - شطب وتعطيل ميزة مربع التشغيل السريع (Run Command).",
      " - منع وحظر أدوات تعديل الريجستري الحساسة (regedit.exe).",
      "بيئات العمل وتوزيع السياسات الميدانية:",
      " - بيئات عمل الشركات (Enterprise): تفعيل انتقائي. يتم حظر المستخدم البسيط، ويستثنى الدعم الفني عبر ميزة التصفية الأمنية (Security Filtering).",
      " - البيئات المعزولة والأكشاك والطلاب (Kiosk/Lab): قفل كامل وبقبضة حديدية، بما يمنع فك العمليات وإتلاف الحواسيب بصالات الامتحانات."
    ],
    explanation: "منع لوحة التحكم وأداة regedit تضمن بقاء شكل وتطبيقات الأجهزة ثابتاً لا يتأثر بتدخل غريب من الطلاب أو الفضوليين. تفيد هذه التدابير في حجر وتجميد الملفات الحيوية لنظام التشغيل وصيانة استقراره العام.",
    keyConcepts: ["Prohibit Control Panel setting", "Regedit execution blocking", "Kiosk environment lockdown", "Security Filtering exceptions"]
  },
  {
    id: 61,
    lectureId: 5,
    titleEn: "Computer Configuration: Logon Message",
    titleAr: "تهيئة الكمبيوتر: رسالة التحذير القانونية وعقد الانصياع",
    contentEn: [
      "GUI Path:",
      " Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies > Security Options",
      "Core Properties to Configure:",
      " - Interactive logon: Message text for users attempting to log on.",
      " - Interactive logon: Message title for users attempting to log on.",
      "Why It Matters:",
      " Establishes immediate legal compliance and psychological deterrence. Declares that all activities are subject to monitoring, creating solid legal grounds for prosecution of intruders."
    ],
    contentAr: [
      "المسلك البرمجي بفرع الشجرة:",
      " تهيئة الأجهزة (Computer Configuration) -> السياسات -> إعدادات ويندوز -> إعدادات الأمان -> سياسات محلية -> خيارات الأمان.",
      "أبرز الخصائص الواجب تفعيلها:",
      " - تسجيل الدخول التفاعلي: نص الرسالة للمستخدمين الساعين لتسجيل الدخول.",
      " - تسجيل الدخول التفاعلي: عنوان اللوحة للمستخدمين لحظة تدوير الدخول.",
      "أهمية تطبيق هذه السياسة البارزة:",
      " تدشين وبناء الامتثال القانوني والردع النفسي المباشر. تصف الرسالة بأن الحاسب ملك للشركة وأن جميع الحركات والأنشطة مرصودة وخاضعة للرقابة والتدقيق، مما يؤسس مادة قانونية مستندية حاسمة لمحاكمة المتسللين وكسر حجة عدم العلم بنظم العمل."
    ],
    explanation: "هذه الرسالة تظهر للمستخدم قبيل تسجيل الدخول، وتطلب منه ملامسة زر OK ليتعهد بالموافقة ومراقبة أنشطته بالكامل. تعتبر من أفضل المتطلبات لمطوري الامتثال والتدقيق الخارجي لضمان تطبيق السياسات بالشريعة والأمن السبراني.",
    keyConcepts: ["Interactive logon properties", "Legal notice configuration", "Compliance framing standard", "Security Options database node"]
  },
  {
    id: 62,
    lectureId: 5,
    titleEn: "Removable Media & Lock Screen Timeout Policies",
    titleAr: "سياسات حظر وسائط التخزين وقفل الشاشة الخاملة",
    contentEn: [
      "Policy 1: Disable USB Storage Devices [Target: Computer]",
      " - Path: Computer Config -> Admin Templates -> System -> Removable Storage Access",
      " - Feature: Prohibit read/write access to USB flash drives.",
      " - Goal: Prevents corporate data leakage, document exfiltration, and physical malware introduction.",
      "Policy 2: Lock Screen Timeout [Target: User]",
      " - Path: User Config -> Admin Templates -> Control Panel -> Personalization -> Screen saver timeout (and screen saver activation).",
      " - Feature: Forces screen saver with lockout after N seconds of silence.",
      " - Goal: Lowers risks of unauthorized physical access to abandoned workstations with active sessions."
    ],
    contentAr: [
      "النهج الأول: حظر وسائط التخزين ومنافذ الفلاشات USB [الكائن المستهدف: جهاز الكمبيوتر]",
      " - المسار: تهيئة الكمبيوتر -> قوالب الإدارة -> النظام -> الوصول لأجهزة التخزين الخارجية.",
      " - الخاصية: منع القراءة والكتابة على أقراص اليو إس بي والأجهزة القابلة للإزالة.",
      " - الغاية: إبادة فرص تسريب وحقن البرمجيات الضارة بالشبكة ووقف تهريب وثائق الشركة والاتفاقيات المصنفة.",
      "النهج الثاني: جدولة مهلة قفل الشاشة التلقائي [الكائن المستهدف: ملف حساب المستخدم]",
      " - المسار: تهيئة المستخدمين -> قوالب الإدارة -> لوحة التحكم -> التخصيص -> منقذ ومهلة شاشة التوقف.",
      " - الخاصية: إرغام شاشة القفل على تفعيل الأقفال وحجب سطح المكتب عقب فترة خمول معينة.",
      " - الغاية: تفادي محاولات التسلل الفيزيائية والعبث بملفات العمل عندما يترك الموظف جهازه مشغلاً بغيابه."
    ],
    explanation: "تهتم هذه الحزمة ببيئة الحماية المادية (Physical and Hardware Security). فحظر أقراص الـ USB يغلق البوابة الأخطر للبرامج التخريبية وسرقة البيانات التنافسية للشركة، بينما يضمن قفل الشاشة بعد فترة خمول تجميد الحوسبة ضد الفضوليين بالمكاتب عالية الحركة.",
    keyConcepts: ["Removable Storage Access blocking", "Screen Saver Timeout settings", "Data Loss Prevention (DLP)", "Physical access containment"]
  },
  {
    id: 63,
    lectureId: 5,
    titleEn: "Task Manager & Run Command Policies",
    titleAr: "سياسات شل مدير المهام وعزل نافذة التشغيل الركيزة",
    contentEn: [
      "Policy 1: Disable Task Manager [Target: User]",
      " - Path: User Config -> Admin Templates -> System -> Ctrl+Alt+Del Options",
      " - Feature: Remove Task Manager from Windows Security screen.",
      " - Goal: Prevents unauthorized shutdown of background protection, monitoring, or exam proctoring software.",
      "Policy 2: Disable Run Command [Target: User]",
      " - Path: User Config -> Admin Templates -> Start Menu and Taskbar",
      " - Feature: Gray out Run menu & disable Windows Key+R shortcut.",
      " - Goal: Blocks advanced users from launching system utilities (cmd, regedit) to bypass security frameworks."
    ],
    contentAr: [
      "النهج الأول: شل وتعطيل أداة مدير المهام (Task Manager) [الكائن المستهدف: حساب المستخدم]",
      " - المسار: تهيئة المستخدمين -> قوالب إدارة -> النظام -> خيارات Ctrl+Alt+Del.",
      " - الخاصية: سحب وإخفاء زر مدير المهام ليصبح معتماً وممنوعاً من التفعيل تماماً.",
      " - الغاية: تأمين برامج الحماية، أنظمة مراقبة الكاميرات، ومنصات إدارة الطلاب المدرسية من الإيقاف التعسفي.",
      "النهج الثاني: شطب وتعطيب نافذة التشغيل السريع (Run) [الكائن المستهدف: حساب المستخدم]",
      " - المسار: تهيئة المستخدمين -> قوالب الإدارة -> قائمة ابدأ وشريط المهام.",
      " - الخاصية: مسح أيقونة التشغيل بالكامل مع تعطيل حزمة الاختصار السريع (Win+R) على كيبورد العميل.",
      " - الغاية: سد منافذ الاستدعاء السريعة لسطر الأوامر والأكواد الملتوية ومسارات النظام المشبوهة."
    ],
    explanation: "يصنع هذا الدمج سياجاً عازماً يمنع المستخدم من فك ترابط السيرفر أو محاولة كسر القيود بالولوج السريع لنظام التشغيل. فحظر الـ Task Manager يقضي بالتبعية على إقدامات قتل برمجيات السيكيوريتي أو الحجب.",
    keyConcepts: ["Task Manager restriction", "Ctrl+Alt+Del Options sub-node", "Remove Run Menu settings", "Shortcut command prevention (Win+R)"]
  },
  {
    id: 64,
    lectureId: 5,
    titleEn: "Software Installation & Idle Logoff Settings",
    titleAr: "تحديد تثبيت التطبيقات وقوانين طرد الجلسات الخاملة",
    contentEn: [
      "Policy 1: Prevent Software Installation [Target: Computer]",
      " - Path: Computer Config -> Admin Templates -> Windows Components -> Windows Installer",
      " - Feature: Disable Windows Installer for non-administrator accounts.",
      " - Goal: Enforces baseline stability and limits risks of malicious software proliferation.",
      "Policy 2: Auto Logoff Idle Users [Target: Computer]",
      " - Path: Computer Config -> Windows Settings -> Security Settings > Local Policies -> Security Options",
      " - Feature: Interactive logon: Machine inactivity limit (seconds of inactivity before force logoff).",
      " - Goal: Releases locked remote connections and secures active directory computing nodes automatically."
    ],
    contentAr: [
      "النهج الأول: حجر ومنع تنصيب البرمجيات الجديدة [الكائن المستهدف: جهاز الكمبيوتر]",
      " - المسار: تهيئة الكمبيوتر -> قوالب الإدارة -> مكونات ويندوز -> مثبت ويندوز (Windows Installer).",
      " - الخاصية: تفعيل قانون تعطيل التثبيت ومنع حزم الـ MSI والبرامج من العمل بواسطة حسابات الموظفين.",
      " - الغاية: الحفاظ التام على نموذج واستقرار بيئات الشركة وسد منافذ تخلل البرممجيات ذات الملكية المشبوهة.",
      "النهج الثاني: تفكيك وطرد جلسات المستخدم الخاملة (Auto Logoff) [الكائن المستهدف: جهاز الكمبيوتر]",
      " - المسار: تهيئة الكمبيوتر -> إعدادات ويندوز -> إعدادات الأمان -> سياسات محلية -> خيارات الأمان.",
      " - الخاصية: تسجيل الدخول التفاعلي: حد عدم نشاط الماكينة (Interactive logon: Machine inactivity limit).",
      " - الغاية: تأمين الأجهزة المهجورة وتحييد بقاء الجلسات مفتوحة بشكل دائم مما ينهك موارد الرام ومحركات السيرفر."
    ],
    explanation: "هاتان السياستان تشكلان صمام الحفاظ التنظيمي على خزان موارد الذاكرة والرام والأمان. فالأولى تحمي الجهاز من أن يصبح ممتلئاً ببرمجيات التورنت أو الألعاب أو ملفات التجسس الخبيثة، والثانية تفصل المستخدم عسكرياً من النظام إن غادر وحيدًا لفترة محددة.",
    keyConcepts: ["Windows Installer blocking rules", "Machine inactivity lockout limit", "Standard Environment baseline maintenance", "Resource allocation defense"]
  },
  {
    id: 65,
    lectureId: 5,
    titleEn: "Synthesis: Group Policy Best Practices",
    titleAr: "الخلاصة والدروس المستفادة: آداب وتوجيهات تطبيق الـ GPO",
    contentEn: [
      "The Good (DO):",
      " - Create Functional GPOs: Always build smaller, targeted policies like 'Browser Settings' or 'Firewall Rules' to streamline troubleshooting.",
      " - Use Standard Naming Conventions: Prefix with U_ for user profiles and C_ for computer hardware structures.",
      " - Segment AD: Split accounts and devices into distinct Organizational Units (OUs) for discrete links.",
      "The Bad (DON'T):",
      " - Avoid Monolithic GPOs: Cramming hundreds of rules into one file delays client processing and complicates diagnostic trace logs.",
      " - Avoid Modifying Default Domain Policy: Keep it pristine, except for global account/password constraints.",
      " - Avoid Production Testing: Never apply a new GPO in production; verify changes in a clean Staging OU."
    ],
    contentAr: [
      "آداب ومستحسنات التجهيز (Do):",
      " - تشييد كائنات سياسية مبرمجة ومتخصصة (Functional GPOs): مثل إعداد سياسة منفصلة للمتصفحات أو لجدار حماية محدد ليسهل تصحيحها وتشخيصها.",
      " - تبني دساتير التسمية: بوضع حروف استهلالية واضحة تفرق الأجهزة وتصنف المستخدمين وعناوين الأقسام.",
      " - فرز مجلد الدليل النشط AD: تقسيم الحسابات بذكاء وتجريد محطات الموظفين عن الصالات العامة بـ OUs منفردة.",
      "ممنوعات ومخاطر التهيئة الفنية (Don't):",
      " - لا تخلّق كائنات مهجنة وضخمة (Monolithic GPOs): إن حشو وتوريد مئات التعديلات بكائن أحادي يبطئ سرعة تسجيل دخول الأجهزة ويعسر رصد المشاكل.",
      " - لا تعبث بالسياسة الشاملة للدومين (Default Domain Policy): اتركها نقية على طبيعتها؛ إلا في نطاقات سياسة تعقيد الـ Passwords.",
      " - لا تغامر بالفحص بمصانع الإنتاج والعمل الحياتية: جرب برامجك وسياساتك بهدوء داخل بيئة معزولة ووحدة تجريبية (Staging OU)."
    ],
    explanation: "يسطر هذا السلايد قواعد الكود الأخلاقي والمهني لمشرفي الشبكات. باتباع التصاميم المجزأة (Functional GPOs) والتسميات الصارمة، يستقر أداء السيرفر بأقصى إنتاجية وسلاسة، وتمر حوارات التقييم والتدريب بأبهى نجاح واحترافية.",
    keyConcepts: ["Functional GPOs design pattern", "Monolithic GPO performance lag", "Default Domain GPO separation", "Staging OU verification workflow"]
  },
  {
    id: 66,
    lectureId: 7,
    titleEn: "Lecture VII: DHCP Infrastructure & Address Allocation",
    titleAr: "المحاضرة السابعة: خدمة العنونة الديناميكية وتأجير المعرفات (DHCP)",
    contentEn: [
      "NETWORK ADMINISTRATION INFRASTRUCTURE",
      "LECTURE 7: DYNAMIC HOST CONFIGURATION PROTOCOL (DHCP)",
      "Done by: Eng. Gawhar Gamal"
    ],
    contentAr: [
      "إدارة وبنى الشبكات التحتية",
      "المحاضرة السابعة: بروتوكول التهيئة الديناميكية للمنافذ (DHCP)",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "تركز المحاضرة السابعة بالكامل على مفهوم وهندسة خدمة التوزيع والتأجير التلقائي للعناوين DHCP. ستناقش المحاضرة شروط وطريقة تفعيل وتفويض الخدمة بالسيرفر (Authorization)، وبناء مجالات التوزيع (Scopes)، وعلاقات الوراثة في خيارات التوزيع بين مستويات (Client, Reservation, Scope, Server)، ومصفوفات العنونة المتقدمة للجيل السادس IPv6 ومقارنتها بالجيل الرابع.",
    keyConcepts: ["Network Administration", "Windows Server DHCP", "Dynamic Handshake Overview"],
    technicalTips: [
      "تعتبر خدمة الـ DHCP من الخدمات الحيوية في أي شبكة مؤسسية لدورها في أوتوماتيكية سريان الاتصالات وصيانة البوابات بشكل موحد."
    ]
  },
  {
    id: 67,
    lectureId: 7,
    titleEn: "DHCP Requirements & Server Installation Pathway",
    titleAr: "متطلبات تفعيل DHCP ومسلك التثبيت في نظام ويندوز سيرفر",
    contentEn: [
      "Prerequisites for Enabling DHCP Server:",
      " 1. Static IP Address: The server local adapter MUST be configured with a static manual IP.",
      " 2. Subnet Match: The distributed IP Pool/Scope range must align with the server's own subnet.",
      "Dual Subnet Distribution:",
      " - Rule: To distribute to multiple subnets (e.g., 192.168.1.0/24 and 192.168.9.0/24), the server must have an active interface and assigned manual IP within each targeted subnet.",
      "Installation Steps (Add Roles wizard):",
      " - Server Manager -> Manage -> Add Roles and Features -> select Role-based -> Select Server -> Check-mark DHCP Server -> Next -> Install."
    ],
    contentAr: [
      "الاشتراطات الأساسية والمحاذير قبل تفعيل خادم DHCP:",
      " 1. المبدأ العتادي: لا بد لخادم DHCP أن يمتلك عنواناً يدوياً عتادياً ثابتاً (Static IP) في كرت الشبكة الخاص به.",
      " 2. تناسق مجال التوزيع: لا بد أن يكون نطاق التوزيع (Pool) متناغماً ومطابقاً لعنوان ومجال الآي بي الثابت الخاص بكرت السيرفر نفسه.",
      "كيفية توزيع العناوين لشبكات فرعية متعددة (مثال: شبكتي 1.5 و 9.5):",
      " - القاعدة العامة: لا بد للسيرفر أن يمتلك كرت اتصال أو واجهة ملموسة ويكون معه عنوان من كل شبكة مراد التوزيع إليها لتمكينه من السيطرة والتوزيع الصائب.",
      "خطوات التثبيت والتسليم (Add Roles):",
      " - لوحة الـ Server Manager -> التوجه لخيار Manage -> ثم اختيار Add Roles and Features Wizard -> المتابعة بالنقر على Next حتى الوصول للأدوار وإدراج علامة الصح على DHCP Server -> ثم النقر على Install لبدء المعالجة."
    ],
    explanation: "لا يسمح نظام التشغيل بتشغيل الـ DHCP بدون عنوان ثابت لكرت الشبكة لتفادي الانهيارات وقطع الإشارة. وتوضح الملاحظات خطة التثبيت الكلاسيكية وتفصل القاعدة الذهبية لتوزيع العناوين لعدة شبكات فرعية؛ بحيث يجب أن يمتلك السيرفر مخارج فيزيائية من تلك الشبكات لضمان وصول طلبات العملاء Broadcast.",
    keyConcepts: ["DHCP Static IP requirement", "Multi-subnet allocation rule", "Add Roles and Features installation steps"],
    technicalTips: [
      "إنشاء كروت شبكة افتراضية متعددة هو الحل الأمثل لتمثيل الشبكات الفرعية واختبار قدرات التوزيع الخادم في بيئات التدريب والمختبرات."
    ]
  },
  {
    id: 68,
    lectureId: 7,
    titleEn: "DHCP Server Authorization & Domain Coexistence",
    titleAr: "تفويض خادم الـ DHCP في الدليل النشط وعوامل المشاركة",
    contentEn: [
      "The Authorization Phase (Security Layer):",
      " - Goal: Prevents rogue DHCP servers from joining the domain and hijacking client configurations.",
      " - Pathway: After directory install -> Click warning badge -> Manage Credentials -> Click Authorize -> Await integration (exclamation mark badge disappears).",
      "Coexistence with Active Directory Domain Controller:",
      " - A DHCP server can run concurrently on the primary Domain Controller (DC) or reside on a standalone member server.",
      " - Resource Metric: For low-employee counts or light AD load, running DHCP on the same machine is safe and cost-effective. High-load environments demand separate virtual nodes."
    ],
    contentAr: [
      "مرحلة تفويض الخادم وتفعيل الصلاحية الأمنية (Authorize):",
      " - الغاية: وضع صمام أمان يمنع السيرفرات المتطفلة والمزيفة (Rogue DHCP) من العمل والتشويش بداخل نطاقات الشبكة.",
      " - مسار الإجراء التقني: بعد انتهاء التثبيت؛ ننقر على شارة التحذير الزرقاء بالسيرفر -> نختار معالج إدارة الاعتمادات والولوج -> ننقر على زر Authorize التفويضي -> لحظات وتختفي علامة التعجب معلنة بدء الخدمة رسمياً.",
      "أمان ومزامنة الجسد الواحد مع الدليل النشط:",
      " - يمكن لخادم DHCP العمل والنهوض كخدمة بداخل نفس السيرفر الحاضن للدومين متحكم المجال (Domain Controller) أو بآلة وسيرفر آخر منعزل.",
      " - معيار الأداء: لو كانت منشأة صغيرة بها موظفون قليلون وضغط الـ Active Directory منخفض، فمن السليم والأوفر تشغيلهما معاً بجسد واحد. الشركات الضخمة تفصلهما لأجهزة افتراضية متباينة."
    ],
    explanation: "يوضح هذا الجزء خطوة أمنية هامة تدعى الـ Authorization. طالما السيرفر عضو بالدومين فلن يعمل كـ DHCP إلا بعد أخذ رخصة مكتوبة أمنياً وتفويض رسمي بالدليل النشط. هذا الإجراء يحمي بيئة العمل من الأجهزة العشوائية المربوطة بمكتب أو منفذ جداري والتي قد تبدأ بتوزيع عناوين خاطئة وتدمير البوابة الافتراضية للشركة.",
    keyConcepts: ["Rogue DHCP definition", "Active Directory Authorization", "Resource Metric Coexistence"],
    technicalTips: [
      "وجود علامة تعجب صفراء على أيقونة الـ DHCP تعني غالباً فقدان المصادقة والتفويض؛ والحل السريع يكون بطلب معالج الـ Authorize بالمحطة المستهدفة."
    ]
  },
  {
    id: 69,
    lectureId: 7,
    titleEn: "Scope Construction, Range Parameters & Exclusions",
    titleAr: "إنشاء نطاق التوزيع (Scopes) وضبط الاستثناءات وخيار التأخير",
    contentEn: [
      "Building a New IPv4 Scope:",
      " - Path: Tools -> DHCP -> Expand IPv4 -> Right-click -> Select New Scope -> Enter Name & Scope Desc.",
      " - Define the Pool Limits: Establish Start IP and End IP (e.g., 192.168.1.20 to 192.168.1.150).",
      " - Subnet Metrics: Input Netmask (e.g., 255.255.255.0) or Subnet Length (e.g., 24).",
      "Scope Exclusions (The Reserving Mechanism):",
      " - Allows excluding specific IPs or a block of IPs from being distributed to standard clients.",
      "The Delay Option (Multi-Server Redundancy):",
      " - Set in milliseconds (e.g., 200 ms). If multiple DHCP servers are configured, setting a delay on a weaker or secondary server allows the primary fast machine to handle requests first, preventing conflicts."
    ],
    contentAr: [
      "خطوات تشييد نطاق توزيع جديد للـ IPv4:",
      " - المسار الفني: نتوجه لقائمة Tools -> ثم DHCP -> ثم نضغط باليمين على فرع IPv4 -> نختار New Scope كائن جديد -> ندون اسماً تعريفياً ووصفاً للنطاق.",
      " - رسم حدود الخزان (Start and End IP): تحديد أول آي بي وأخر آي بي للتوزيع بالشبكة (مثال: من 1.20 إلى 1.150).",
      " - قناع الشبكة: يتم كتابة الـ Mask (مثال: 255.255.255.0) أو تحديد الطول الإجرائي بالطول والبادئة Length (مثال: 24).",
      "استثناء المعرفات (Exclusions):",
      " - يتيح استثناء نطاق داخلي أو عنوان محدد من التوزيع التلقائي (لحجزه يدوياً للطابعات والخوادم بالفرع).",
      "خاصية مهلة التأخير (Delay Option) للتعددية الفنية بالشبكات:",
      " - معدلة بالملي ثانية (مثلاً 200ms)؛ تفيد لتأخير رد خادم الـ DHCP الثانوي الضعيف أو الاحتياطي لدقائق منأى، لإفساح الفرصة للخادم الأساسي السريع للتوزيع ورّد التلبية، مما يمنع تعارض العناوين."
    ],
    explanation: "عند بناء الـ Scope فإننا نحدد المجال الفعلي الذي يوزع منه السيرفر العناوين للأجهزة التلقائية. ويسمح السيرفر باستثناء عناوين معينة (Exclusions) كالتي تخص جدران الحماية أو السيرفرات الأخرى لئلا يتعارض توزيعها. ويمكن استخدام خيار Delay لتنظيم الرد في حال وجود أكثر من خادم DHCP نشط بالشبكة.",
    keyConcepts: ["Scope construction", "Subnet Length and Mask mapping", "Address Exclusions dynamic setup", "Response Delay parameter"],
    technicalTips: [
      "خيار الـ Delay مهم جداً لتجهيز سيناريوهات الـ High Availability الـ (Fault Tolerance) بحيث لا يرد السيرفر الاحتياطي إلا إذا تأخر الأصيل."
    ]
  },
  {
    id: 70,
    lectureId: 7,
    titleEn: "Lease Durations & Background Renewal States (T1/T2)",
    titleAr: "مدة عقد التأجير (Lease) ودورة التجديد في الخلفية بالشبكات",
    contentEn: [
      "Lease Duration Concept:",
      " - It dictates how long a client device can legally preserve and use the assigned IP address (Default: 8 Days).",
      " - The Sizing Balance: Dynamic environments (e.g., coffee shops or public hotspots) demand very short lease times (e.g., hours) to prevent IP depletion. Static offices (e.g., universities, headquarters) prefer long leases to avoid server overhead.",
      "Dynamic Background Lease Handshake (The T1 / T2 / Expiration States):",
      " - T1 State (50% of Lease Time): The client device initiates a background Unicast request to the granting DHCP server to renew its lease.",
      " - T2 State (87.5% of Lease Time): If the primary DHCP server makes no response, the client switches and sends a Broadcast request to any available DHCP server.",
      " - Expiration State (100% of Lease Time): If no server replies, the client releases its IP, drops active network links, and falls back to APIPA (169.254.x.x)."
    ],
    contentAr: [
      "فهم معنى فلسفة مدة التأجير (Lease Duration):",
      " - هي الفترة الزمنية التي يُحجز ويُملك فيها العنوان لجهاز العميل بشكل رسمي وقانوني (الافتراضي: 8 أيام).",
      " - معادلة الضبط الفنية: البيئات الديناميكية شديدة الدوران (مثل مقاهي الإنترنت أو المطارات العامة) تحتاج لمهل تأجير قصيرة جداً (بالساعات) لكي لا تنفد العناوين في الخزان ويصاب القادمون الجدد بالشلل. المكاتب والمباني الثابتة (مثل كليات الجامعة والوزارات) تفضل مهلاً طويلة تجنباً لإغراق ومجهود معالجات السيرفر.",
      "حركات التجديد الخفية بالشبكة (دورة حياة التجديد T1 / T2 ونقطة الحظر والضياع):",
      " - الخطوة الأولى T1 (عند انقضاء 50% من فترة التمليك): يقوم العميل بإرسال رسالة فردية Unicast للسيرفر يخبره أنه ما زال يعمل ويطلب بقاء العنوان.",
      " - الخطوة الثانية T2 (عند وصول 87.5% دون رد): إن غاب السيرفر أو لم يرسل التأكيد، يقوم العميل بتصميم وبث نداء جماعي (Broadcast) يسأل أي سيرفر لإنقاذه وتمديد عقده.",
      " - مرحلة النهاية (100%): إن مر الوقت بأكمله ولم يحصل العميل على تمديد، يستغني النظام عن آي بي المجال ويحرره، ويوجه لابتوب العميل لأخذ عنوان محلي عشوائي من فئة الـ APIPA."
    ],
    explanation: "هناك عمليات تقع بالخلفية بين العميل والسيرفر للحفاظ على استقرار العنونة وتجديد العقود (Renewals). تبدأ بطلب تجديد غير مرئي بالـ 50% كـ Unicast (لحفظ العناوين دون إحداث ضجيج بالشبكة)، وتصعد لـ Broadcast بالـ 87.5%، وتنتهي بالضياع وحجز APIPA بالـ 100% في حال انقطاع السيرفر نهائياً.",
    keyConcepts: ["Lease Duration planning", "T1 Renewal State (Unicast 50%)", "T2 Rebinding State (Broadcast 87.5%)", "APIPA Fallback at 100%"],
    technicalTips: [
      "إذا تمت حيازة عنوان APIPA (يبدأ بـ 169.254) فهذا يعني غالباً وجود انقطاع فيزيائي بالشبكة، أو أن خادم الـ DHCP مغلق أو نفدت عناوينه."
    ]
  },
  {
    id: 71,
    lectureId: 7,
    titleEn: "DHCP Options Hierarchy: Client, Reservation, Scope & Server",
    titleAr: "هرمية تدرج خيارات الـ DHCP وسيادة مفاتيح الوراثة",
    contentEn: [
      "The Extra Options Config (Scope Options):",
      " - Beyond the basic IP and Mask, the DHCP scope can distribute critical routes: Default Gateway (Router), DNS Server IP/Name, and domain search lists.",
      "The Three Levels of Option Inheritance:",
      " - Rules are inherited. However, targeted local properties override parent settings. The order of priority is (Highest to Lowest):",
      "   1. [Reservation Level]: Specific settings mapped to a single client reservation layout.",
      "   2. [Scope Level]: Settings configured locally within an active individual Scope.",
      "   3. [Server Level]: The parent root node settings, defining default metrics (like DNS or domain suffix) for all scopes on the machine.",
      "How to Fix VM Network Conflict:",
      " - When experimenting with custom domain DHCP on guest VMs (e.g. VirtualBox or VMware Workstation), ensure you open the Virtual Network Editor, select NAT, and uncheck 'Use local DHCP service to distribute IP address' to prevent IP hijack conflicts."
    ],
    contentAr: [
      "توطين الإعدادات الإضافية الملحقة بالآي بي (Scope Options):",
      " - في معالج نطاق التوجيه المتقدم؛ يتيح لنا السيرفر بجانب ميزات الآي بي والقناع دفع معلومات شبكية هامة للعملاء مثل: عنوان بوابة التوجيه (Router / Gateway)، اسم وعنوان خادمي الترجمة (DNS Server).",
      "مستويات الوراثة وقوانين تضارب الخيارات الشجرية:",
      " - تطبق إدارة مايكروسوفت قانون الوراثة الهرمية للمعلومات الموزعة، فما لم يحدد بالابن يتم توريثه من الأب، وقوى السيادة تترتب من الأقوى للأضعف بالشكل التالي:",
      "   1. مستوى الحجوزات [Reservation Level]: السياسات والضبط المخصص لحاسوب مفرد بعينه (يلغي أي ضبط آخر).",
      "   2. مستوى النطاقات [Scope Level]: السياسات والإعدادات التي تكتب بداخل مجلد النطاق المعين (تتغلب وتلغي السيرفر).",
      "   3. مستوى السيرفر الشامل [Server Level]: الإعدادات العامة الأساسية المكتوبة بقمة السيرفر (تورث لكافة الـ Scopes الفارغة).",
      "تدابير الحماية وتصحيح بيئة الـ Virtual Machines من التداخل:",
      " - عند استخدام أنظمة وهمية ببيئة NAT، تأكد من فتح محرر الشبكات بالمحاكي (Virtual Network Editor) بالـ VM -> انقر Change Settings -> حدد كرت الـ NAT والغي تفعيل 'Use local DHCP service' لمنع خادم المحاكي الداخلي من تمرير آي بي قبل السيرفر الخاص بك."
    ],
    explanation: "هناك هرمية تنظم خيارات الـ DHCP. فمثلاً لو حذفت خادم الـ DNS من مستوى الـ Scope، فسيقوم السيرفر تلقائياً بجلب وتوريث الإعداد البديل من مستوى الـ Server (Server Options). أما الحجز Reservation فله الكلمة العليا والمطلقة.",
    keyConcepts: ["Router / Gateway insertion", "DNS Server delivery mapping", "Options Inheritance Hierarchy", "Virtual Network Editor settings"],
    technicalTips: [
      "لإلغاء تعارض الشبكات عند التطبيق في Windows 8/10 الوهمي بالـ VM، ينصح دوماً تصفية واجهات الـ NAT وإطفاء ميزاتها التوزيعية المحلية."
    ]
  },
  {
    id: 72,
    lectureId: 7,
    titleEn: "Reservations, MAC Address Filtering & BOOTP Background",
    titleAr: "حجوزات الحسابات، تصفية وقفل العناوين بالـ MAC، ونشأة بروتوكول BOOTP",
    contentEn: [
      "Active Leases (Address Tracking):",
      " - Displays currently occupied IP address metrics, identifying lease expiration dates and matching client names.",
      "Advanced Reservation (Persistent IP):",
      " - Goal: Guarantees that a specific client device (e.g., file servers, printers) always receives the exact same dedicated IP.",
      " - Path: Right-click Reservation folder -> New Reservation -> Input Name, desired IP, and client physical MAC address.",
      "The Filter Shield (Allow / Deny lists):",
      " - Secure access utilizing client MAC addresses. In GPMC/DHCP: Expand Filters -> Right-click 'Allow' -> Add trusted MACs -> Right-click Filters folder and choose 'Enable'. All non-listed devices are blocked from obtaining an IP.",
      "Historical Evolution (BOOTP vs. DHCP):",
      " - BOOTP (Bootstrap Protocol): The ancestor of DHCP. It was purely static/manual and relied on hardcoded mapping tables of MAC-to-IP. DHCP introduced modern dynamic leases."
    ],
    contentAr: [
      "رصد العناوين المؤجرة النشطة في الشبكة (Lease Monitoring):",
      " - استعراض كافة محطات الأجهزة التي نجحت بسحب عنوان من السيرفر ورصد تاريخ انتهاء رخصتهم وعقودهم.",
      "توطين وتثبيت الحجوزات الذكية المستديمة (Reservations):",
      " - الغاية: إرغام وضمان بقاء آي بي محدد ثابت لشاشة طابعة أو جهاز خوادم فرعي بالمنشأة رغماً عن طبيعة التوزيع التلقائي.",
      " - الإجراء العملي: الضغط بيمين الماوس على مجلد Reservation -> اختيار New Reservation -> إدخال الاسم الفريد، الآي بي المراد، ثم إرفاق المعرف الفيزيائي MAC الخاص بها.",
      "حيازة درع التصفية وقفل الشبكة باستخدام الـ Filters (القوائم البيضاء والسوداء):",
      " - عزل تام لبيئات الشبكة على الماكات المسجلة فقط؛ نتوجه لـ Filters -> نذهب لـ Allow ونضغط كليك يمين -> نختار New Filter وندرج ماك الأجهزة الموثوقة لدينا -> ثم بيمين الماوس على مجلد Filters نفعل الأداة بالنقر على Enable. أي جهاز غير مدرج سيحرم من العنونة كلياً.",
      "النمو التاريخي والفرق الجذري بين BOOTP والـ DHCP:",
      " - بروتوكول BOOTP: المطور والجد المؤسس للـ DHCP. كان نظاماً تمليكياً سلبياً يعتمد على الصياغة اليدوية لتوصيل الماكات بالآي بي بملفات نصية. الـ DHCP حل ثورة وجلب معه الديناميكية والعقود."
    ],
    explanation: "تتيح الحجوزات (Reservations) ربط آي بي ثابت بماك أجهزة مخصصة كالطابعات، ويمكن عمل ذلك سريعاً بالضغط يمين الماوس على كائن بداخل قائمة Lease واختيار Add to Reservation. ويتميز قسم التصفية (Filters) بوجود مستويين Allow لتمكين الفتح و Deny لتنفيذ الحظر لمرشحي الكروت.",
    keyConcepts: ["Reservation wizards", "Active lease tracking", "MAC filter protection shield", "BOOTP manual limits"],
    technicalTips: [
      "يمكنك ببساطة وبشكل فوري تحويل أي عقد نشط بجدول التأجير (Lease) إلى حجز دائم (Reservation) عبر النقر بالزر الأيمن عليه واختيار 'Add to Reservation'."
    ]
  },
  {
    id: 73,
    lectureId: 7,
    titleEn: "IPv6 Integration: Architecture, SLAAC & Server Setup",
    titleAr: "هندسة العنونة من الجيل السادس IPv6 وتطبيقها في ويندوز سيرفر",
    contentEn: [
      "Why IPv6? Offers near-unlimited address capacity (128-bit structure divided into 8 hex groups), specifically designed to support IoT grids.",
      "The Three Allocation Modes on Client Devices (SLAAC / Stateless / Stateful):",
      " 1. SLAAC (Stateless Address Autoconfiguration): The client autogenerates its temporary global IP based on local routing advertisements and mathematical MAC calculations (SLAAC functions like APIPA).",
      " 2. Stateless DHCPv6: The client receives basic network IDs from router advertisements, but contacts the DHCPv6 server purely to obtain auxiliary data (like DNS Server list or domain suffix).",
      " 3. Stateful DHCPv6: Standard mode. The client fetches all configuration data directly from the DHCPv6 server.",
      "Prerequisite for IPv6 Server DHCP Role:",
      " - The host adapter MUST first be configured with a static manual IPv6 address (e.g., 2001::1, where double-colons :: compress consecutive blocks of zeroes) with appropriate subnet length prefix (e.g., 64, allowing up to 2^64 addresses)."
    ],
    contentAr: [
      "دوافع ومحاسن التوطين للجيل السادس IPv6:",
      " - كفاءة المعمارية: عمارة رقمية تمتد لـ 128 بت موزعة على 8 مجموعات من الأرقام السداسية عشرية، تضمن توفير عدد لا نهائي من الهويات وتغذية حقول إنترنت الأشياء IoT.",
      "أنماط وطرق توزيع العناوين لعملاء الـ IPv6 (ثلاثة مسارات بديلة كبرى):",
      " 1. آلية SLAAC: توليد ذاتي مستقل للآي بي في جهاز العميل عبر معادلات رياضية بالاستعانة بعنوان كرت الشبكة MAC والماكينات المحيطة دون ملامسة سيرفر (تشبه مفعول الـ APIPA للجيل الرابع).",
      " 2. النظام عديم الحالة (Stateless): يحوز العميل على عنوان الشبكة الرئيسي من راوتر المخرجات الجغرافي، ويتجه لخادم DHCPv6 فقط لسحب معلومات الـ DNS والمعارف المرافقة.",
      " 3. النظام شامل الحالة والسيطرة (Stateful): المنهج التقليدي الموثوق؛ يتوجه العميل كلياً لخادم الـ DHCPv6 ويستدعي كامل بياناته ليتثبت فيها.",
      "خطوات البناء والتحضير لخادم DHCPv6 بالسيرفر:",
      " - لا غنى في البداية لكرت الشبكة بالسيرفر عن حيازة آي بي ثابت ومكتوب يدوياً للـ IPv6 (مثال: 2001::1 بكتابة الـ :: لترحيل الأصفار)، مع طول البادئة السحابية Mask المقدر بـ 64 بت (وهذا يوفر حقولاً ضخمة تصل لمعادلة 2^64 عنوان شبكي)."
    ],
    explanation: "يضم نظام IPv6 تقنيات هامة أبرزها ميزة الاستغناء عن الـ DHCP الكلي عن طريق ميزة الـ SLAAC حيث يعتمد الكمبيوتر على نفسه بابتداع عنوانه الفيزيائي. ويتميز كتابة العناوين باستخدام النقطتين المتتاليتين :: كطريقة لاختزال سلاسل الأصفار الممنهجة لتوفير سهولة الحفظ والتدوين.",
    keyConcepts: ["IPv6 128-bit architecture", "SLAAC (APIPA-equivalent)", "Stateless vs Stateful DHCPv6", "Double colons :: abbreviation", "Subnet 64 calculation"],
    technicalTips: [
      "استخدام النقطتين :: في ترميز آي بي IPv6 يتيح اختصار الأصفار الشجرية المتتابعة بشكل آمن؛ ولا يمكن تكرار استخدامها بأكثر من جزء واحد بالنطاق تفادياً للضياع."
    ]
  },
  {
    id: 74,
    lectureId: 7,
    titleEn: "IPv6 Scopes, Preferences & Command-Line Debugging",
    titleAr: "إنشاء مجالات الـ IPv6، وفهم الـ Preferences، والأمر التحقيقي بالـ CMD",
    contentEn: [
      "Building an IPv6 Scope:",
      " - Tools -> DHCP -> Expand IPv6 -> Right-click -> Select New Scope.",
      " - Prefix Mapping: Define the targeted prefix (e.g., 2001::) and configure exclude pools.",
      "The Preference Value (The Selector Priority Metric):",
      " - Defines which DHCPv6 server has highest authority to answer clients first. Lower numbers have higher priority! A preference of 0 responds faster than a preference of 1.",
      "IPv6 Loopback Comparison:",
      " - The loopback / self-pointing address in IPv6 is '::1' (equivalent to '127.0.0.1' on IPv4).",
      "Crucial Command-Line Debugging Utilities:",
      " - ipconfig /release: Releases and frees current dynamic addresses obtained from the server.",
      " - ipconfig /renew: Requests immediate address allocation or lease renewal. Note that in nested lab virtualizations, the renew command might capture VM internal NAT addresses instead of your custom server if Virtual Local DHCP is not disabled."
    ],
    contentAr: [
      "خطوات إعداد كائن نطاق (Scope) للـ IPv6:",
      " - نتوجه لقائمة Tools -> ثم الـ DHCP -> نضغط كليك يمين على IPv6 -> نمرر خيار New Scope.",
      " - صياغة بادئة النطاق: كتابة القيمة الحزامية Prefix (مثال: 2001::) والتحفظ واستثناء المعرفات.",
      "فهم معيار التفضيل والأفضلية (Preference) للـ IPv6:",
      " - يحدد الأسبقية لمن له رأي ومقدار في الاستجابة والتوزيع بين خوادم الـ DHCPv6 المتعددة. المعيار الذهبي: الرقم الأقل هو الأشد أولوية وصاحب الأسبقية في رد النداء! (سيرفر بقيمة 0 يجيب أسرع من سيرفر بقيمة 1).",
      "عنوان فحص الاتصال الذاتي ومرجع الحلقة (Loopback):",
      " - العنوان المقابل لـ 127.0.0.1 في بنى الجيل السادس هو '::1' لفحص سلامة الكروت عتادياً وبرمجياً.",
      "أقوى أوامر الـ CMD والتحليل التقني بالميدان:",
      " - تنفيذ الأمر ipconfig /release: يستغنى العميل عن العنوان ويرخي قنوات تمريره التلقائي ليسلم المعرف.",
      " - تنفيذ الأمر ipconfig /renew: لتسديد طلب سريع لامتلاك أو تحديث تمليك العناوين. ملاحظة مخبرية: عند تشغيل بيئات تكرار افتراضية، قد يسحب الـ renew عنواناً طازجاً من كرت محاكي الـ VM نفسه إن أغفلت تعطيل خادم DHCP للمحاكي."
    ],
    explanation: "هذا يعطينا فهماً تاماً للعنونة والأمر العملي للـ IPv6 وكيفية التعامل مع موجه الأوامر بالعميل. فالآي بي لـ loopback هو ::1 وهو مساوٍ ومعادل تماماً لعنوان حماية وفحص بطاقة الاتصال الكلاسيكي 127.0.0.1.",
    keyConcepts: ["IPv6 scope setup", "Preference scaling metric (0 > 1)", "Loopback comparison (::1 vs 127.0.0.1)", "CMD troubleshooting cmdlets"],
    technicalTips: [
      "إذا أغلقت الـ DHCP المحلي للمحاكي NAT وسحبت الآي بي بـ ipconfig /renew، سيحلق كرت نظامك الوهمي مباشرة لخادمك الأساسي ويجلب العنونة والدومين من كنفك."
    ]
  },
  {
    id: 75,
    lectureId: 8,
    titleEn: "Lecture VIII: DHCP - Dynamic Host Configuration Protocol",
    titleAr: "المحاضرة الثامنة: بروتوكول التهيئة الديناميكية للمضيفين (DHCP) في ويندوز سيرفر",
    contentEn: [
      "AUTOMATING AND SECURING NETWORK ADDRESSING",
      "LECTURE 8: DYNAMIC HOST CONFIGURATION PROTOCOL (DHCP)",
      "Done BY: Eng. Gawhar Gamal"
    ],
    contentAr: [
      "أتمتة وتأمين عنونة الشبكات في Windows Server",
      "المحاضرة الثامنة: بروتوكول التوزيع التلقائي للعناوين (DHCP)",
      "إعداد وتقديم المهندس: جوهر جمال"
    ],
    explanation: "تركز هذه المحاضرة بالكامل على شرح بروتوكول DHCP، المشاكل الأساسية للعنونة اليدوية وكيفية حلها تلقائياً، دورة حياة التأجير (Lease Lifecycle)، عملية المصافحة رباعية المراحل (DORA Process)، تفعيل وحماية السيرفر عن طريق الـ Active Directory Authorization، تخطيط مجالات التوزيع والنسب المطبقة للاحتياط العالي (High Availability) وحجوزات الـ MAC.",
    keyConcepts: ["Network Automation", "Windows Server DHCP Core", "DORA Handshake"]
  },
  {
    id: 76,
    lectureId: 8,
    titleEn: "The Core Problem: Manual vs. Dynamic Configuration",
    titleAr: "المشكلة الجوهرية: المقارنة بين الإعداد اليدوي والإعداد التلقائي",
    contentEn: [
      "The Manual Approach:",
      " - High risk of human error & typing typos.",
      " - High chance of IP conflicts (same IP assigned twice).",
      " - Impossible to scale for networks exceeding 300+ employees.",
      "The Dynamic Solution (DHCP):",
      " - Automates the entire network addressing workflow.",
      " - Instantly eliminates IP conflict crashes.",
      " - Scales effortlessly to thousands of client devices."
    ],
    contentAr: [
      "المنهج والأسلوب اليدوي (Manual):",
      " - مخاطر عالية جداً للأخطاء البشرية وأخطاء الكتابة.",
      " - احتمالية مرتفعة لحدوث تعارض العناوين (IP Conflicts).",
      " - استحالة التوسع للمؤسسات التي تتجاوز الـ 300 موظف.",
      "الحل الديناميكي التلقائي (DHCP):",
      " - يبرمج ويؤتمت عملية توزيع وضبط العناوين بالكامل.",
      " - يلغي فوراً مشاكل وانهيارات تعارض العناوين.",
      " - يتوسع بمرونة وسهولة فائقة لخدمة آلاف الأجهزة اللحظية."
    ],
    explanation: "يعرض السلايد المشاكل التي تواجه مديري النظم عند كتابة العناوين يدوياً للأجهزة، والميزات الفائقة لخدمة DHCP التي تأخذ زمام المبادرة وتمنح الأجهزة العنونة بدون تدخل بشري.",
    keyConcepts: ["IP Conflict", "Manual scaling overhead", "DHCP Automation benefit"],
    technicalTips: [
      "تعد مشاكل تعارض العناوين (IP Conflicts) من أكثر المشاكل إزعاجاً وشللاً للشبكات وتحدث عندما يقوم مهندس بإسناد آي بي يدوي مستخدم بالفعل."
    ]
  },
  {
    id: 77,
    lectureId: 8,
    titleEn: "The Core Mechanism: The DORA Process",
    titleAr: "آلية العمل المحورية: عملية الـ DORA الثنائية والرباعية",
    contentEn: [
      "Four-Step Network Handshake (DORA):",
      " 1. D - Discover (Client -> Server): Client broadcasts: 'Help! I need an IP address!'",
      " 2. O - Offer (Server -> Client): Server offers: 'I have this IP and settings available for you.'",
      " 3. R - Request (Client -> Server): Client requests: 'Perfect, I accept that offer. Please register it.'",
      " 4. A - Acknowledge (Server -> Client): Server acknowledges: 'Done. The IP is yours. Here is your lease receipt.'",
      "Ports Used:",
      " - Operates over UDP Protocol utilizing Ports 67 (Server) and 68 (Client)."
    ],
    contentAr: [
      "المصاحفة الشبكية رباعية الخطوات (DORA):",
      " 1. خطوة الاستكشاف Discover: بث جماعي من العميل 'المساعدة! أحتاج لعنوان IP!'",
      " 2. خطوة العرض Offer: رد السيرفر 'عندي هذا العنوان والإعدادات المتاحة لك'.",
      " 3. خطوة الطلب Request: بث جماعي من العميل 'ممتاز! أنا أقبل هذا العرض، يرجى تسجيله أمنياً'.",
      " 4. خطوة التأكيد Acknowledge: رد السيرفر 'تم التسجيل، هذا العنوان ملكك الآن، وها هو إيصال العقد'.",
      "المنافذ المستخدمة بالخدمة:",
      " - تعمل الخدمة على بروتوكول UDP باستخدام منفذ 67 للخادم (Server) ومنفذ 68 للعميل (Client)."
    ],
    explanation: "عملية DORA هي الأساس الفيزيائي لعمل الـ DHCP. تتفجر بطلب استكشاف وتنتهي بتقديم إيصال تأجير وتأكيد الاتصال برحلة سلسة تبنى بالأول بـ Broadcast وتنتهي بالـ Unicast بين الطرفين.",
    keyConcepts: ["DORA handshake stages", "UDP Port 67 and 68", "Broadcast vs Unicast packets"]
  },
  {
    id: 78,
    lectureId: 8,
    titleEn: "The Network's Automated Leasing Agent: The Four Pillars",
    titleAr: "وكيل التأجير المؤتمت: الركائز الأربعة لعقد التأجير",
    contentEn: [
      "Dynamic IP Assignment:",
      " - Devices do not permanently own their IPs; they temporary rent them. Assigned the moment a client connects.",
      "Centralized Control:",
      " - Admins change global network settings once on the server, and all clients update automatically upon lease renewal.",
      "The Four Pillars of a Lease:",
      " 1. IP Address: The unique network identifier.",
      " 2. Subnet Mask: Outlines netmask boundaries.",
      " 3. Default Gateway: The core gateway router to the outside world.",
      " 4. DNS Server: Critical name resolution database for Active Directory.",
      "Analogy Box: Think of DHCP as a landlord. Clients rent the space for a specific time, but the landlord maintains absolute ownership of the IP."
    ],
    contentAr: [
      "التوزيع الديناميكي للتأجير:",
      " - الأجهزة لا تملك العناوين بشكل مستديم، بل تستأجرها مؤقتاً عند بدء الاتصال.",
      "التحكم المركزي المركز:",
      " - يغير المدير الإعدادات العامة مرة واحدة بالسيرفر، فتتحدث كافة الأجهزة تلقائياً عند تجديد عقودهم.",
      "أركان وركائز عقد الإيجار الأربعة:",
      " 1. عنوان الـ IP: المعرّف الشبكي الفريد.",
      " 2. قناع الشبكة Subnet Mask: يحدد حجم الحقل والشبكة الفرعية.",
      " 3. البوابة الافتراضية Default Gateway: راوتر العبور للعالم الخارجي.",
      " 4. خادم الـ DNS: دليل الهاتف الشبكي الضروري لبيئات الدليل النشط.",
      "صندوق التشبيه الفني: يمثل الـ DHCP المؤجر العتادي (Landlord)، تستأجر القطع الغرفة لفترة محددة لكن المؤجر الأصيل يملك الحقل بالكامل."
    ],
    explanation: "يوضح هذا السلايد أركان عقد تأجير الـ IP والفوائد المركزية للتأجير المؤتمت مقارنة بالتوزيع التقليدي الفردي.",
    keyConcepts: ["Dynamic Lease Ownership", "Four Pillars of a Lease", "DHCP Landlord analogy"]
  },
  {
    id: 79,
    lectureId: 8,
    titleEn: "The Race to Renew: The Lease Lifecycle",
    titleAr: "دورة تجديد وحياة عقود الإيجار (Lease Lifecycle)",
    contentEn: [
      "Default Lease Duration: A standard Windows Server lease lasts for 8 days.",
      "Lease Sizing Balance Rules:",
      " - Coffee shops / Hotspots: High rotation, demand short lease times (hours) to prevent IP pool exhaustion.",
      " - Static Offices / Universities: Stable clients, prefer longer leases (days) to minimize backend CPU overhead.",
      "The Renewal Milestones (The Three Key Points):",
      " - 50% Mark (T1 - Renewal - 4 Days): Client unicasts original server to request lease expansion.",
      " - 87.5% Mark (T2 - Rebinding - 7 Days): If original server is offline, client broadcasts to ANY available DHCP server.",
      " - 100% Mark (Release - 8 Days): Lease expires, IP returns to pool, client loses network access.",
      "Why 50%? Network self-repair mechanism quietly prevents sudden connection drops days in advance."
    ],
    contentAr: [
      "المدة الافتراضية للعقد: يمنح ويندوز سيرفر عقود تأجير لمدة 8 أيام بشكل افتراضي.",
      "موازنة وتخطيط المدد الزمنية للتأجير:",
      " - المقاهي والمطارات: حركة مرور سريعة، تتطلب عقوداً قصيرة جداً (بالساعات) لئلا تنفد عناوين المستودع.",
      " - المكاتب والجامعات: الموظفون مستقرون، نفضل عقوداً طويلة (أيام) لتخفيف ضغط المعالجة بالسيرفر.",
      "النقاط المفصلية الثلاث للتجديد:",
      " - عند وصول 50% (مرحلة T1 - بعد 4 أيام): يرسل العميل رسالة فردية Unicast للسيرفر الأصيل لطلب التمديد.",
      " - عند وصول 87.5% (مرحلة T2 - بعد 7 أيام): إن غاب السيرفر الأول، يطلق العميل بثاً عاماً لمراسلة أي سيرفر بديل بالشبكة.",
      " - عند وصول 100% (مرحلة الانتهاء والسقوط): ينتهي العقد رسمياً، ويعاد الآي بي للمستودع، ويفقد العميل الاتصال.",
      "لماذا تم اختيار الـ 50%؟ آلية ذكية تفيد بالإصلاح والترميم الذاتي لمنع سقوط الأجهزة فجأة."
    ],
    explanation: "توضح هذه الدورة كيف ينسق العميل مع السيرفر الحفاظ على العناوين بالخلفية لسنوات طويلة دون انقطاع، والفرق في جدولة مدد عقود الأماكن الحركية والثابتة.",
    keyConcepts: ["Lease Duration Sizing", "T1 State Unicast at 50%", "T2 State Broadcast at 87.5%", "Lease expiration at 100%"]
  },
  {
    id: 80,
    lectureId: 8,
    titleEn: "Step-by-Step: Bringing Windows DHCP Online",
    titleAr: "مسار التثبيت الفعلي: إطلاق وتشغيل خادم الـ DHCP",
    contentEn: [
      "The Installation Pathway (4 Core Steps):",
      " 1. Static IP Prep: The server MUST be assigned a manual static IP before installing the role.",
      " 2. Install Role: Add 'DHCP Server' and admin tools via Server Manager -> Add Roles Wizard.",
      " 3. AD Authorization (Crucial Security Step): Enterprise/Domain Admin must Authorize the server in Active Directory to prevent rogue servers from hijacking the network.",
      " 4. Activate Scope: Define IP pool range, exclude static server IPs, set lease time, and hit Activate.",
      "Instructor Question:",
      " - What happens if an employee plugs a home Wi-Fi router into the office wall? AD Authorization blocks rogue DHCP servers from handing out fake IPs and crashing the domain context."
    ],
    contentAr: [
      "مسار التثبيت والتجهيز التقني (اربعة معايير أساسية):",
      " 1. إسناد الآي بي الثابت: تحضير كرت خادم السيرفر بعنوان ثابت يدوي قبل محاولة تثبيت أي دور.",
      " 2. تثبيت الدور: إدراج دور 'DHCP Server' ومعدات الإدارة عبر لوحة Server Manager.",
      " 3. تفويض الدليل النشط AD Authorization (الدرع الأمني): لا بد لمشرف المجال من تفويض السيرفر بالمركزية لمنع الخوادم غير المصرح بها (Rogue Servers) من التشويش.",
      " 4. تنشيط المجال (Activate Scope): كتابة نطاق العنونة، حجب الاستثناءات، ضبط عقد التأجير، والنقر على Activate.",
      "تساؤل المعلم التفاعلي:",
      " - ماذا يحدث لو قام موظف بربط راوتر منزلي عتيق بمنفذ الجدار بالمكتب المالي؟ أداة AD Authorization تصد خوادم الـ DHCP المتطفلة وتمنعها من توزيع آي بيات خاطئة تعطل النظام."
    ],
    explanation: "يحكي هذا السلايد تسلسل تجهيز سيرفر الـ DHCP من كتابة الآي بي الثابت وحتى ترشيح وتفعيل معالج الـ AD Authorize والـ Scope المتزن وتفادي السيرفرات المتطفلة.",
    keyConcepts: ["Static configuration prep", "Active Directory Authorization", "Rogue DHCP threat control"]
  },
  {
    id: 81,
    lectureId: 8,
    titleEn: "Building the Address Pool: Anatomy of a Scope",
    titleAr: "تشييد مستودع العناوين: تشريح معمارية الـ Scope",
    contentEn: [
      "The Concept of a Scope:",
      " - Represents the continuous range of IP addresses authorized and allocated for dynamic clients.",
      "Anatomy representation:",
      " - Total IP Subnet Range: e.g., 192.168.1.1 to 192.168.1.254.",
      " - Exclusions (X): Specific IPs forbidden from distribution (explicitly reserved for printers, routers, and domain controllers). Example: 192.168.1.50 to 192.168.1.53.",
      " - Distributable Pool: The remaining active addresses assigned to clients (e.g., 192.168.1.30 to 192.168.1.245, minus exclusions).",
      "CRITICAL BEST PRACTICE:",
      " - Never place your default gateway or critical server IPs inside your active distributable pool without excluding them! This causes immediate network IP collisions and breaks routing."
    ],
    contentAr: [
      "تعريف ومعنى نطاق التوزيع (Scope):",
      " - يمثل النطاق المتسلسل والمتصل من العناوين المرخصة بالتوزيع التلقائي للأجهزة العادية بالشبكة الفرعية.",
      "تشريح الهرم التوزيعي للآي بي:",
      " - النطاق الإجمالي للشبكة: مثال: 192.168.1.1 إلى 192.168.1.254.",
      " - الاستثناءات (Exclusions): عناوين محظورة تماماً من التوزيع والتسليم؛ نحتفظ بها يدوياً للطابعات والسيرفرات وجدران الحماية بالشركة. مثال: الاستثناء من 1.50 إلى 1.53.",
      " - المستودع الفعلي القابل للتأجير: العناوين المتاحة للأجهزة التلقائية (مثلاً من 1.30 إلى 1.245 مطروحاً منها الاستثناءات).",
      "الممارسة الذهبية المحاذرة (Critical Best Practice):",
      " - لا تترك عن جهل عنوان بوابة الخروج الافتراضية (Default Gateway) أو السيرفر الحساس عرضة للتوزيع بالتلقائي الصريح! ذلك يسبق بكارثة تضارب IP عتادي ويشل توجيه البيانات بالشركة."
    ],
    explanation: "يشرح هذا السلايد كيفية تنظيم العناوين وعزل ما تخص العتاد الثابت مثل البوابة الافتراضية والسيرفرات لتجنب المشاكل التقنية وتضارب الأجهزة داخل مستودع العناوين.",
    keyConcepts: ["Scope Exclusion block", "Distributable Pool math", "Default Gateway collision check"]
  },
  {
    id: 82,
    lectureId: 8,
    titleEn: "Precision Control: Reservations & MAC Filtering",
    titleAr: "التحكم الكلي الفائق: الحجوزات المستقرة وتصفية الماك",
    contentEn: [
      "The VIP Pass (DHCP Reservations):",
      " - Explicitly ties a specific IP address to a client's unique physical MAC address.",
      " - Guarantee Rule: The CEO or specific printers connect and automatically receive e.g., IP 192.168.1.100 every single time.",
      "The Security Door (MAC Address Filters):",
      " - Allow Filters: Only devices with matching MAC addresses on this active list will be granted an IP. High security, but requires constant maintenance.",
      " - Deny Filters: Explicitly blocks specific, known malicious MAC addresses from obtaining configurations.",
      "THE FILTER TRAP ALERT:",
      " - If you enable an 'Allow' filter but leave the list completely empty, NOBODY gets an IP address, and the entire network drops immediately to APIPA!"
    ],
    contentAr: [
      "التذاكر الخاصة والمميزة (الحجوزات Reservations):",
      " - ربط وإلصاق آي بي محدد بماك كرت الشبكة الفيزيائي للعميل (MAC Address) بعهد أبدي.",
      " - قاعدة الضمان: عند اتصال رئيس مجلس الإدارة (CEO) أو طابعة الإدارة، يتم تزويدهم بالآي بي 1.100 بذاته في كل مكان وأي وقت بالملي.",
      "التصفيات وقفل الباب الأمني (MAC Filters):",
      " - قوائم ALLOW المسموحة: حصر وقصر توزيع العناوين للماكات المدونة بالقائمة فقط. غاية بالأمان لكنها مكلفة بالترميم الإداري.",
      " - قوائم DENY الممنوعة: تفصل وتحجب وتطرد عناوين ماكات خبيثة أو متسللة معروفة.",
      "تحذير وفخ أداة التصفية (Filter Trap):",
      " - إذا قمت بتمكين وتنشيط فلتر القائمة البيضاء (Allow) وتركت القائمة فارغة دون كتابة أي ماك بالداخل، فسيحرم الجميع من العنونة والـ IP بالمنشأة، وينهار المعمل بأكمله لأخذ آي بي فئة الـ APIPA!"
    ],
    explanation: "توضح هذه الشريحة نظام الفلترة والحجوزات لضمان أمن معتدل ومستوى حماية عتادي متميز يمنع الدخلاء ويضمن ثبات هوية الأجهزة الفاخرة.",
    keyConcepts: ["DHCP Reservations", "Allow vs Deny list filtering", "Empty Allow Filter Trap"]
  },
  {
    id: 83,
    lectureId: 8,
    titleEn: "When Things Go Wrong: Meet APIPA",
    titleAr: "عندما تنهار الاتصالات: العنونة المحلية التلقائية APIPA",
    contentEn: [
      "What is APIPA?",
      " - Automatic Private IP Addressing. Always falls inside the reserved range of 169.254.X.X.",
      "Why does it happen?",
      " - The client computer attempted the DORA process, but received NO response from any DHCP server (e.g., server crashed, cable unplugged, switch broken).",
      "The Result:",
      " - The computer gives up and invents its own local temporary 169.254.x.x address with a subnet mask of 255.255.0.0.",
      "The Limitation:",
      " - APIPA devices can ONLY communicate with other APIPA devices residing on the exact same physical switch. Absolute lack of Internet access or gateway routing."
    ],
    contentAr: [
      "ما هو بروتوكول الـ APIPA؟",
      " - العنونة المحلية التلقائية للأجهزة الخاصة. ويقع نطاقها دائماً تحت راية الفئة الرقمية المحددة 169.254.X.X.",
      "لماذا يحدث هذا التصرف الشاذ بالأجهزة؟",
      " - قام نظام العميل بإطلاق وبث نداء الاستكشاف DORA بأكمله، لكنه لم يتلق أي رد من خوادم الـ DHCP (سيرفر منهار، كبل تالف، تعطل الموزع الفيزيائي).",
      "النتيجة المباشرة:",
      " - يفقد الجهاز الأمل بامتلاك عنوان رسمي، ويقوم بابتكار وصياغة آي بي عشوائي لنفسه يبدأ بـ 169.254 وقناع شبكة 255.255.0.0.",
      "القيود والحدود الإجرائية:",
      " - أجهزة الـ APIPA لا تستطيع التكلم والاتصال إلا مع أجهزة APIPA معها على نفس السويتش المباشر. حظر تام لعناوين الإنترنت وبوابات العبور."
    ],
    explanation: "يتدخل نظام التشغيل بالـ APIPA لحماية وتغذية الأجهزة بالاتصالات الأساسية البسيطة عند غياب السيرفر، وهو من أهم الأدلة الاستكشافية لمشرفي الشبكة بأن هناك عطلاً في الخادم.",
    keyConcepts: ["APIPA 169.254.0.0/16 range", "DORA failure diagnostic", "Switch-only communication limitation"]
  },
  {
    id: 84,
    lectureId: 8,
    titleEn: "The Enterprise Requirement: High Availability (HA)",
    titleAr: "الاستدامة والجاهزية العالية للشركات (High Availability)",
    contentEn: [
      "The Network Vulnerability:",
      " - If your only DHCP server crashes, new devices cannot obtain an IP to join, and active devices will lose network access the moment their leases expire.",
      "The Legacy Fix (Clustering / Failover Cluster):",
      " - Involved two servers sharing a single storage drive. Extremely expensive, demands specialized fiber hardware, and complex configurations.",
      "The Modern Standard:",
      " - Enterprise networks require two standard, separate DHCP servers working seamlessly together to ensure 100% uptime with no specialized hardware overhead."
    ],
    contentAr: [
      "الهشاشة الأمنية وعيوب السيرفر الأوحد:",
      " - لو انهار خادم الـ DHCP اليتيم بالمنشأة؛ فلن يستطيع أي قادم جديد الارتباط، وستطرد الأجهزة النشطة تباعاً لحظة نفاذ مدد تأجيرها.",
      "المعالجة الكلاسيكية القديمة (التجميع المشترك Clustering):",
      " - يجمع سيرفرين للتشارك والاتصال بوحدة تخزين قرصية موحدة ومكلفة، الأمر الذي يتطلب أليافاً عتادية معقدة وضوابط شديدة التكلفة فاشلة بالمرونة السحابية.",
      "المعيار الحديث والمطلب المستقبلي:",
      " - تتطلب البيئات المؤسسية توأمة وتوزيع العمل على حاسبين سيرفر DHCP مستقلين تماماً، يعملان بتناغم تام وتكامل لحظي لضمان كفاءة أداء بـ 100% دون كتر لتوفير مصاريف الأجهزة العتادية."
    ],
    explanation: "يبين هذا السلايد لمحة حول تطور حماية وإسداء العنونة للشركات لضمان بقائها نشطة وصاحبة صمود تقني متكامل وتفادي وجود نقطة سقوط فردية بالشركة.",
    keyConcepts: ["Single Point of Failure", "Failover Cluster physical limits", "Uptime & High Availability modern standard Extent"]
  },
  {
    id: 85,
    lectureId: 8,
    titleEn: "HA Strategy 1: The Split Scope Option",
    titleAr: "استراتيجية الجاهزية الأولى: تجزئة النطاق (Split Scope)",
    contentEn: [
      "The Split Scope Concept:",
      " - The overall IP active pool is manually divided between two completely disconnected DHCP servers.",
      "The 80/20 Rule (The Golden Split):",
      " - Server A (Primary) distributes 80% of addresses for daily office clients.",
      " - Server B (Secondary/Backup) sits with a 20% reserved pool solely for emergency backup.",
      "ZERO SYNCHRONIZATION (THE FATAL FLAW):",
      " - Because they operate independently and do not communicate, if Server A dies, Server B knows absolutely nothing about active leases or VIP MAC reservations. Network configurations shatter or duplicate."
    ],
    contentAr: [
      "مفهوم وآلية تجزئة نطاق التوزيع (Split Scope):",
      " - نقوم بتقسيم وتجزئة مستودع العناوين المفرد يدوياً وتطبيقها على سيرفرين منفصلين تماماً لا تواصل تقني أو فيزيائي بينهما.",
      "قاعدة التقسيم الشهيرة الـ 80/20 الذهبية:",
      " - الخادم الأساسي (Server A): يوزع ويمتلك نسبة الـ 80% من عناوين المستودع لحل طلبات الاتصالات اليومية المعتادة لعقود المكاتب.",
      " - الخادم الاحتياطي (Server B): يستقر ومعه 20% فقط من النطاق في حالة طوارئ صامتة ولا يتدخل إلا عند غياب السيرفر الأول.",
      "الغياب التام للمزامنة (العيب القاتل الفادح):",
      " - لعدم وجود قنوات مراسلة، لو مات السيرفر الأول؛ فلن يملك الثاني أي دراية بالماكات المسجلة أو العقود الموزعة مسبقاً، مما يحدث فوضى وقطع لمستندات التوجيه وتضارب في حجوزات MAC الـ VIP."
    ],
    explanation: "على مدى سنوات كانت قاعدة الـ 80/20 ممارسة لتفادي انقطاع الشبكات، ورغم رخصها وبساطتها إلا أن انعدام المزامنة الحية جعلها حلاً قديماً ومعيباً.",
    keyConcepts: ["80/20 allocation rule", "Split Scope structural flaw", "Zero-synchronization issues"]
  },
  {
    id: 86,
    lectureId: 8,
    titleEn: "HA Strategy 2: DHCP Failover Integration",
    titleAr: "استراتيجية الجاهزية الثانية: معالج الـ DHCP Failover للمزامنة",
    contentEn: [
      "True Database Synchronization:",
      " - Servers constantly replicate their entire database-sharing scopes, leases, exclusions, and MAC reservations in real-time.",
      "Operating Modes (Two Solutions):",
      " 1. Load Balance (Active/Active): Both servers share the workload simultaneously (e.g., 50/50 split). Ideal for single-site high-traffic offices.",
      " 2. Hot Standby (Active/Passive): One primary server does 100% of the daily work. The backup server (assigned a default 5% reserve) takes over only if the primary fails. Ideal for remote branch connections.",
      "Maximum Client Lead Time (MCLT):",
      " - A temporal buffer period configured during failure standby, preventing the backup server from accidentally distributing in-use IP addresses."
    ],
    contentAr: [
      "التزامن التام المبرمج لقواعد البيانات:",
      " - ميزة تقنية تجعل السيرفرين في عملية مراجعة وتحديث حية لنسخ ومزامنة عقود التأجير والاستثناءات والحجوزات العتادية بجزء من الثانية.",
      "أنماط وأنظمة تشغيل الـ Failover المتاحة:",
      " 1. نمط توازن الأحمال Load Balance (Active/Active): يتشارك الخادمان الأعباء ويعملان معاً بذات اللحظة (تقسيم 50/50 مثلاً). ممتازة للمباني شديدة الكثافة بموقع وحيد.",
      " 2. نمط الاستعداد الفوري Hot Standby (Active/Passive): يعمل سيرفر أصيل وحيد بـ 100% من طاقتنا الكلية، وينام السيرفر الثاني بنظام 5% احتياطي فقط ولا يصحو لتخديم المنشأة إلا عند انهيار الأول. ممتازة للربط مع الفروع البعيدة.",
      "فهم معيار الـ MCLT (مؤقت الحماية الاستثنائي):",
      " - هي فترة الأمان والمهلة المؤقتة للانتظار المبرمجة بالاستعداد، لمنع السيرفر الاحتياطي الهاب من توزيع آي بيات نشطة حالياً بالشبكة."
    ],
    explanation: "يتغير الأداء كلياً باستخدام الـ DHCP Failover، حيث تتبادل الأجهزة البيانات بشكل فوري ومباشر مما يقضي على مشاكل التكرار وتصادم الهويات.",
    keyConcepts: ["Database Replication", "Active/Active vs Active/Passive modes", "MCLT failover buffer"]
  },
  {
    id: 87,
    lectureId: 8,
    titleEn: "Client-Side Control: Essential CMD Diagnostic Commands",
    titleAr: "التحكم بجهة العميل: أوامر الـ CMD المصيرية للتحقق",
    contentEn: [
      "Essential CMD Diagnostic Utilities:",
      " - ipconfig /all: The ultimate network diagnostic. Reveals current IP address, physical MAC address, calculated Lease Expiry date, and the exact IP of the DHCP server that granted the lease.",
      " - ipconfig /release: Forces the client computer to immediately surrender its current IP address back to the server pool.",
      " - ipconfig /renew: Forces the client to immediately request a new IP address or renew its current configurations.",
      "The Hardware Adapter Shortcut:",
      " - Physically disabling and re-enabling the network adapter performs a full release/renew cycle automatically in the background."
    ],
    contentAr: [
      "حزمة تشخيص موجه أوامرك بالمحطة (CMD Commands):",
      " - الأمر ipconfig /all: المنظار الفارق والمشخص الأكبر؛ يسرد لك الآي بي النشط، وحساب الماك المعرف كرتياً، وساعة انتهاء العقد بالتفصيل، وهوية وعنوان الـ DHCP سيرفر الذي أجرنا.",
      " - الأمر ipconfig /release: يجبر حاسبك على الاستغناء الفوري التام عن عنوانه الحالي وإرجاعه وقذفه لمستودع السيرفر.",
      " - الأمر ipconfig /renew: يرغم كرتك على بعث اتصال استكشافي فوري لشراء وتجديد العنونة مجدداً بالشبكة.",
      "اختصار المكون العتادي السريع (Hardware Shortcut):",
      " - إطفاء كبار بطاقة الواجهة للكرت برمجياً (Disable) then إعادة إشعاله ونشاطه (Enable) يعالج الدائرة بالكامل ويقوم بالـ Release/Renew تلقائياً بالخلفية."
    ],
    explanation: "هناك أوامر موجهة بالـ CMD لا غنى عنها في بيئة العميل لاستبيان تفاصيل ومعالم العنونة وحل الاختناقات المزعجة بالميدان.",
    keyConcepts: ["ipconfig diagnostics", "Release and Renew CMD switches", "Adapter disable/enable trick"]
  }
];

export const glossaryData: GlossaryItem[] = [
  {
    term: "Active Directory (AD)",
    definitionAr: "خدمة الدليل النشط من مايكروسوفت، وهي قاعدة بيانات وهيكل تنظيمي لإدارة الهويات وسماحيات الوصول والموارد في الشبكة بأسلوب مركزي وهرمي.",
    definitionEn: "Microsoft's directory service that provides centralized identity management, authentication, and security policies for network resources.",
    importance: "أهم خدمة على الإطلاق في ويندوز سيرفر، إذ تتيح تكوين مستخدمين، مجموعات، وتطبيق سياسات الأمان الجماعية (Group Policies) على آلاف الأجهزة بنقرة واحدة.",
    lectureId: 1
  },
  {
    term: "Hyper-V",
    definitionAr: "برنامج وتكنولوجيا متقدمة من مايكروسوفت لإنشاء وإدارة وتثبيت الأنظمة والخوادم الافتراضية (Virtual Machines) على نفس الجهاز المادي المضيف للتوفير العتادي.",
    definitionEn: "Microsoft's native hypervisor technology that enables hardware virtualization to run multiple operating systems simultaneously on a single host.",
    importance: "الحجر الأساس لبناء البنية التحتية السحابية ودمج الخوادم المتعددة في خادم واحد حقيقي لتقليل نفقات الشراء والطاقة الكهربائية والتبريد.",
    lectureId: 1
  },
  {
    term: "Client Access License (CAL)",
    definitionAr: "رخصة وصول العميل، وهي تصريح ترخيص قانوني ومالي يمنح المستخدم أو الجهاز حق الاتصال والوصول القانوني لبوابات وخدمات ويندوز سيرفر.",
    definitionEn: "A legal license purchasing requirement allowing users or client devices to construct connections and request services from Windows Server software.",
    importance: "ضرورية لعدم التعرض للغرامات المالية أثناء مراجعة تراخيص الشركة مع لجان التدقيق التابعة لمايكروسوفت للتأكد من قانونية الاتصالات.",
    lectureId: 1
  },
  {
    term: "Server Core",
    definitionAr: "خيار تثبيت لويندوز سيرفر يتميز بتجريد النظام من الواجهة الرسومية (GUI) وإدارته كلياً عبر الأوامر والـ PowerShell مما يجعله خفيفاً وعال الأداء وآمناً.",
    definitionEn: "A minimal installation option for Windows Server that excludes the classical graphical user interface (GUI) and is managed via command line or remote tools.",
    importance: "يوفر أكثر من 50% من الرام والمعالج، ويسرع الإقلاع، ويقلل عدد التحديثات اللازمة، وهو الأكثر أماناً لعدم امتلاكه ثغرات الواجهات البصرية.",
    lectureId: 1
  },
  {
    term: "User CAL vs Device CAL",
    definitionAr: "رخصة المستخدم تتبع الموظف أينما ذهب واستخدم عدة أجهزة، بينما رخصة الجهاز تلتصق بالكمبيوتر الفيزيائي نفسه ليستخدمه أي عدد من الموظفين بالتناوب.",
    definitionEn: "User CAL licenses a specific human employee accessing the server via many devices, while Device CAL licenses the machine for access by infinite shift employees.",
    importance: "التفرقة بينهما وتحديد الخيار الصحيح يوفر على المؤسسة آلاف الدولارات في خطط الميزانية والتعاقدات.",
    lectureId: 1
  },
  {
    term: "OSE (Operating System Environment)",
    definitionAr: "بيئة نظام تشغيل، وتطلق على المجلد التثبيتي الافتراضي لنظام التشغيل سواء كان مثبتاً داخل آلة فيزيائية أصيلة أو داخل آلة افتراضية (VM).",
    definitionEn: "The instance of an operating system running either virtualized in a VM or deployed as the native bare-metal environment on a physical system.",
    importance: "تستخدم كمصطلح فني حاسم من مايكروسوفت لتحديد عدد الأنظمة المسموح بتشغيلها مع تراخيص Standard (التي تسمح فقط ببيئتين 2 OSEs).",
    lectureId: 1
  },
  {
    term: "Network Controller",
    definitionAr: "وحدة التحكم بالشبكة مركزياً في إصدار Datacenter، تتيح إدارة وإعداد ومراقبة البنية التحتية الافتراضية والفيزيائية للشبكة عن طريق البرمجيات (SDN).",
    definitionEn: "A core capability in Windows Server Datacenter providing centralized, programmable management and monitoring of both physical and virtual network elements.",
    importance: "ميزة ثورية تناسب مراكز البيانات الضخمة لتغيير وتأمين مسارات المرور وقوى جدران الحماية للآلات الافتراضية أوتوماتيكياً دون تدخل فيزيائي.",
    lectureId: 1
  },
  {
    term: "Host Guardian Service (HGS)",
    definitionAr: "خدمة حارس المضيف وهي أداة أمنية لحماية الخوادم الافتراضية وتثبيت الخزائن المؤمنة التامة (Shielded VMs) وتشفيرها لضمان عزل البيانات.",
    definitionEn: "An advanced security role validating trusted physical hosts to safely execute protected or Shielded Virtual Machines, isolating them from server administrators.",
    importance: "تمنع كبرى الاختراقات ووصول المهاجمين أو المهندسين الفضوليين لنظام الملفات والبيانات الحساسة المشفرة للآلات الافتراضية المضيفة.",
    lectureId: 1
  },
  {
    term: "Post-Installation Tasks",
    definitionAr: "قائمة المهام والبارامترات الإجبارية التي يجب على المهندس إعدادها أولاً فور تصفير وتثبيت الخادم، لضمان هويته واتصاله بالإنترنت وأمانه العملي.",
    definitionEn: "A core setup checklist required immediately after completing Windows Server installation, including server renaming, IP configuration, and Admin security.",
    importance: "التهيئة الصحيحة للـ Post-Install تمنع المشاكل الناتجة عن تضارب الأسماء أو تغير عناوين الآي بي بالشبكة بعد الإنتاج الفعلي.",
    lectureId: 2
  },
  {
    term: "Sconfig",
    definitionAr: "أداة نصية سريعة ومدمجة تفتح عن طريق سطر الأوامر في إصدار Server Core، تمنحك واجهة نصية سريعة لضبط إعدادات الشبكة وتسمية السيرفر وغيرها.",
    definitionEn: "An interactive command-line-based utility built in Windows Server Core to quickly perform basic configuration tasks without typing long PowerShell cmdlets.",
    importance: "تسهل للغاية حياة مديري النظم الذين يستخدمون Server Core لربط الخادم بالشبكة وضبط إعداداته دون الحاجة لواجهات رسومية ثقيلة.",
    lectureId: 2
  },
  {
    term: "Static IP Address",
    definitionAr: "العنوان الثابت غير المتغير لبطاقة الشبكة، والذي يتم إدخاله وضبطه يدوياً لمنع الخادم من الاستعانة بـ DHCP مما يحفظ استقرار وصول العملاء.",
    definitionEn: "A fixed, manually assigned numerical IP address configured on a server’s network adapter that never changes throughout system reboots.",
    importance: "مبدأ ذهبي وإجباري للخوادم، فكل خدمات الاستضافة والدليل والتحكم تعتمد على ثبات العنوان لكي لا تنقطع اتصالات الشبكة نهائياً.",
    lectureId: 2
  },
  {
    term: "Roles vs Features",
    definitionAr: "الأدوار تمثل الوظائف الشبكية الكبرى والأساسية للخادم (أصل وجوده)، بينما المميزات هي برمجيات وحزم تكنولوجية مكملة وداعمة لأدائه وتأمينه.",
    definitionEn: "Roles represent the main business services of a server (like Directory, DNS, IIS), while Features provide auxiliary helper capabilities (like backup or encryption).",
    importance: "الفهم الصحيح للفرق بينهما يساعدك على تخطيط وتنصيب المكون البرمجي الأدق لمتطلبات الشركة في معالج التثبيت دون زيادة عبء مساحة التخزين.",
    lectureId: 2
  },
  {
    term: "Loopback Address (127.0.0.1)",
    definitionAr: "عنوان الحلقة المغلقة المخصص بروتوكولياً ليشير الجهاز لنفسه محلياً في الشبكة، لإرسال وفحص طلبات الإدخال دون مغادرة النظام.",
    definitionEn: "A special IPv4 loopback IP address ('127.0.0.1') reserved for a machine to route network traffic back onto itself for self-pointing and diagnostics.",
    importance: "خطوة ضرورية عند إعداد الـ Preferred DNS لخادم متحكم النطاق (DC)، كونه المرجع الهيكلي المباشر للتحقق الذاتي من حسابات الدليل.",
    lectureId: 2
  },
  {
    term: "Security Identifier (SID)",
    definitionAr: "رقم تسلسلي فريد عالمياً يتم إنشاؤه وتخصيصه تلقائياً بواسطة ويندوز سيرفر لتمييز وتتبع الكيانات والمسؤوليات الأمنية في الشبكة.",
    definitionEn: "A unique binary numerical value constructed by Windows Server to permanently identify security principals like users, groups, or computers.",
    importance: "يمثل الهوية غير المرئية والخلفية للكائنات بالدليل، فلا يمكن تكراره أو توارثه بالصدفة حتى لو تكررت أسماء الكائنات حرفياً.",
    lectureId: 3
  },
  {
    term: "Security Principal",
    definitionAr: "كائن في الدليل النشط يمتلك معرفاً أمنياً (SID) مخصصاً، ويحق لإدارة النظام توزيعه وتعيين الصلاحيات الأذونات وتتبع أعماله بالشبكة.",
    definitionEn: "Active Directory objects assigned a Security Identifier (SID) that can match access controls, permissions, and receive delegated system rights (e.g., users, groups, computers).",
    importance: "يمثل الوحدة البنائية الحية لأمن الخوادم لتوزيع المسؤوليات وقوانين العمل والتدقيق.",
    lectureId: 3
  },
  {
    term: "Organizational Unit (OU)",
    definitionAr: "وعاء منطقي فرعي وحاوية داخل النطاق، تهدف لتجميع وتنظيم المستخدمين والأجهزة والطابعات بما يتطابق مع الأقسام الفعلية للمؤسسة وتفويض سياسات الأمن والسيطرة.",
    definitionEn: "A logical container in Active Directory used to group users, computers, and groups hierarchically to apply GPOs and assign security delegation.",
    importance: "تسهل تنظيم فروع ومباني الشركات عتادياً وبرمجياً من وجهة تحكم واحدة وصياغة قوانين منفصلة ومقيدة لكل فرع.",
    lectureId: 3
  },
  {
    term: "Delegation of Control",
    definitionAr: "تفويض الصلاحية، وهو إجراء شبكي متطور يمكن مسؤول الأنظمة الفائق من توكيل وإعطاء سلطات محدودة لموظفي الفروع (كتغيير كلمات المرور) دون ترفيع صلاحياتهم.",
    definitionEn: "An administrative wizard process in Active Directory granting dedicated local permissions to a low-privilege user or group over specific OUs to ease management.",
    importance: "يحقق قاعدة الأمان الذهبية (الامتياز الأدنى) لمنع تضرر وتدمير خوادم ومجالات الشركة من قِبل موظفين أو فنيين قليلي الخبرة.",
    lectureId: 3
  },
  {
    term: "User Template",
    definitionAr: "حساب وقالب نموذجي معطل أمنياً، يتم تشييده وتخصيصه بصفات مشتركة وعضويات مجموعات محددة بالدليل ليسهل على المهندسين نسخ حسابات الموظفين الجدد.",
    definitionEn: "A disabled master user profile configured with collective credentials, folder paths, and memberships to accelerate duplicate provisioning of real-world accounts.",
    importance: "يحفظ الوقت ويمنع الأخطاء البشرية بالتوزيع الهرمي لعضويات المجموعات للأفراد الجدد بالشركة.",
    lectureId: 3
  },
  {
    term: "General Setup tab (OU)",
    definitionAr: "التبويب العام للوحدة التنظيمية، والمسؤول عن تسجيل البيانات والوصف الأكاديمي لفرع ومبنى المؤسسة والرمز البريدي والشارع والبلد.",
    definitionEn: "The primary informational properties page for an Organizational Unit documenting detailed descriptions, ZIP codes, and geopolitical boundaries of a department.",
    importance: "أداة ضرورية للترتيب الجغرافي وبناء الأرشفة وتجميع الخصائص.",
    lectureId: 3
  },
  {
    term: "Managed By tab (OU)",
    definitionAr: "تبويب المالك والمشرف المسؤول عن الوحدة التنظيمية، والذي يقوم بسحب وتجميد كامل معلومات الاتصال الخاصة به تلقائياً من حسابه المسجل بالدليل.",
    definitionEn: "Active Directory property sheet that maps a specific user account as the designated controller for a container, auto-fetching their core details from the identity database.",
    importance: "تنظيم الهيئات والمسؤوليات داخل الشركة للتعرف على حامي الوعاء والفرع في الفواجع التقنية.",
    lectureId: 3
  },
  {
    term: "Account is Disabled option",
    definitionAr: "خيار برمي في تبويب الحساب يفرض التجميد المباشر لحساب مستخدم أو قالب ومنعه من الولوج للشبكة لترشيد عوامل الأمن والتصدي للاختراقات.",
    definitionEn: "An essential checkbox security feature on the Account options list that blocks a user profile from initiating active sessions or authenticating until manually re-enabled.",
    importance: "مطلب أساسي لأدوات الفحص ومعيار حتمي لقوالب المستخدمين (User Templates) لكي لا تستخدم ثغرة اختراق بالشبكة.",
    lectureId: 3
  },
  {
    term: "Online Domain Join",
    definitionAr: "المعالج التقليدي المباشر لضم وربط جهاز عميل بالدليل النشط عبر اتصال شبكي حي ومستمر مع متحكم المجال (DC) وخادم DNS.",
    definitionEn: "The standard process of connecting a client computer to an Active Directory domain, requiring immediate, live network connectivity to a Domain Controller and DNS.",
    importance: "يتيح البناء اللحظي للحسابات وقبول تواصل الأجهزة بشكل حي لفرض وتجريد السياسات فوراً بعد إعادة التشغيل.",
    lectureId: 4
  },
  {
    term: "Offline Domain Join",
    definitionAr: "آلية متطورة تخول مهندسي النظم من إتمام ضم وربط الأجهزة بالمجال دون الحاجة للاتصال بمتحكم النطاق في لحظة البناء، عن طريق ملف تهيئة وسيط.",
    definitionEn: "A process that enables joining a computer to a domain without direct or immediate network contact with a Domain Controller, utilizing an intermediate configuration file.",
    importance: "توفر المرونة في التوزيع الشامل والبعيد للأجهزة المجهزة بمصانع أو فروع معزولة، وتبطئ الضغط على حزم شبكات الشركات.",
    lectureId: 4
  },
  {
    term: "djoin.exe",
    definitionAr: "أداة سطر الأوامر الأساسية في ويندوز سيرفر لتشييد وتحضير وتنفيذ الانضمام غير المتصل وتفتيت شهادات الأجهزة بصيغ مشفرة ومحولة.",
    definitionEn: "A specialized command-line command tool in Windows used to configure offline domain joins by provisioning domain files on DCs and applying them to targets.",
    importance: "الأداة الفنية والوحيدة القادرة على صياغة وحقن كود حجز الأجهزة محلياً دون الاضطرار لاتصال فعلي متزامن بالسيرفر.",
    lectureId: 4
  },
  {
    term: "SystemRoot (%SystemRoot%)",
    definitionAr: "متغير بيئي أساسي في ويندوز يشير تلقائياً ومحلياً لمجلد تنصيب وتجهيز ملفات تشغيل النظام (وهو غالباً المسار C:\\Windows).",
    definitionEn: "A standard Windows system environment variable referencing the active installation directory of the operating system core (typically C:\\Windows).",
    importance: "يستخدم كمسار وسيط لأمر djoin بالعميل لحقن وتوجيه تعاريف ومفاتيح الريجستري للمجال بالمكان المعالج الأصيل.",
    lectureId: 4
  },
  {
    term: "Group Policy Object (GPO)",
    definitionAr: "حزمة تنظيمية من قواعد وسياسات وإعدادات الأمان والتوجيهات التقنية التي تلتصق بالوحدات التنظيمية بالدليل لضبط بيئة المستخدمين والحواسيب مركزياً.",
    definitionEn: "A set of configuration rules, security options, and registry settings linked to Active Directory OUs to enforce centralized administration of users and computers.",
    importance: "يسمح بتحديد المظهر الموحد والإجراءات الأمنية وحساب لوحة التحكم لآلاف الأجهزة بالعمل دفعة واحدة.",
    lectureId: 5
  },
  {
    term: "GPMC (gpmc.msc)",
    definitionAr: "أداة ووحدة تحكم ميكروسوفت الأساسية لإدارة وصياغة وأرشفة ومراجعة كائنات سياسات المجموعة GPO عبر غابات وحقول الدليل النشط.",
    definitionEn: "The primary administrative console provided by Microsoft to create, deploy, back up, and troubleshoot Group Policies across an Active Directory infrastructure.",
    importance: "تمثل البوابة الفنية الوحيدة للمطورين لربط كائنات السياسة بالوحدات ومعاينة تقارير المحاكاة وتأثر العتاد.",
    lectureId: 5
  },
  {
    term: "LSDOU Processing Order",
    definitionAr: "المسلك الترتيبي والتدرجي لفرض وحقن السياسات بالأجهزة (محلية L، ثم موقع S، ثم دومين D، وينتهي بوحدة تنظيمية OU)، والكاتب المتأخر يملك السيادة.",
    definitionEn: "The hierarchical evaluation sequence for applying Group Policies, processing Local (L) first, Site (S), Domain (D), and lastly Organizational Unit (OU) settings.",
    importance: "العمود الفقري لفهم النزاعات وحل التناقضات بين الأوامر؛ ويفهم من خلاله المهندس أن الخصائص بـ OU تتسيد وتلغي إعدادات السيرفر الأبعد.",
    lectureId: 5
  },
  {
    term: "gpupdate /force",
    definitionAr: "أداة سطر الأوامر المستدعاة بجهات العميل لإجبار وسحب السياسات والخصائص الحديثة من خادم الدومين فوراً وإلغاء مهلة الانتظار الافتراضية.",
    definitionEn: "A core Windows command-line utility used to force immediate refreshment of both computer and user Group Policy settings from the DC.",
    importance: "تسرع عملية المعاينة وسريان خطط الأمان المستجدة أو إصلاح العيوب بالصيانة الدورية بلحظة الإطلاق.",
    lectureId: 5
  },
  {
    term: "GPO Enforcement (No Override)",
    definitionAr: "ميزة تمنح رابط السياسة قوة مطلقة وسلطة عمياء تقضي بفوز السياسة الشاملة وتجاوز أي قيود لمنع التوريث (Block Inheritance) بالوحدات التنظيمية الفرعية.",
    definitionEn: "A special GPO link configuration setting that forces the parent policy parameters to apply cascading down, overriding any downstream block settings.",
    importance: "تضمن انقياد الوحدات التنظيمية كلياً لسياسات التراخيص والمصادقة العليا لمدراء المركز وحماية الشركة من إغفال المعطيات بقرارات الأقسام الفرعية.",
    lectureId: 5
  },
  {
    term: "DHCP Server Authorization",
    definitionAr: "المصادقة الأمنية والترخيص لخادم الـ DHCP في الدليل النشط (Active Directory)، والذي يحمي النطاق بمنع الخوادم المتطفلة أو العشوائية (Rogue) من تخريب العنونة.",
    definitionEn: "An essential Active Directory security process that registers and authorizes a DHCP server in the domain, blocking unauthorized or rogue DHCP servers from operating.",
    importance: "يمنع حدوث انهيارات شبكية ناتجة عن قيام اجهزة عشوائية بتوزيع معلومات عبور خاطئة، ويحفظ سيادة السيرفر الأصيل.",
    lectureId: 7
  },
  {
    term: "DHCP Scope",
    definitionAr: "مجال ونطاق متكامل من عناوين الآي بي (Pool) المحددة بآي بي بداية ونهاية، بالإضافة إلى القناع وخيارات التوجيه الفرعية المجهزة للتأجير للعملاء.",
    definitionEn: "A continuous range of IP addresses that the DHCP server is configured to lease out to client devices on a specific subnet, configured with boundaries and options.",
    importance: "يمثل المكون الهيكلي والحيوي لعمل الـ DHCP، وبدونه لا يمكن للسيرفر توزيع أي إشارة أو عنونة للأجهزة.",
    lectureId: 7
  },
  {
    term: "Lease Duration",
    definitionAr: "المهلة الزمنية وعقد التأجير الرسمي الذي يحدد مدة احتفاظ وحجز العميل لعنوان الآي بي قبل الاضطرار إلى طلب تجديده أو تركه (الافتراضي 8 أيام).",
    definitionEn: "The pre-configured amount of time a DHCP client can keep and use its assigned IP address lease before needing renewal or releasing it back to the pool.",
    importance: "ضبط هذه المدة بذكاء يمنع نفاد العناوين بالشبكات سريعة الدوران كالمقاهي والمطارات، ويخفف الحمل التقني بالبيئات الثابتة كالجامعات.",
    lectureId: 7
  },
  {
    term: "T1 State (Unicast Renewal)",
    definitionAr: "حالة التجديد الأولى وتحدث عند انقضاء 50% من فترة عقد التأجير، حيث يرسل العميل بهدوء طلباً فردياً صامتاً (Unicast) للسيرفر المانح لتمديد عقده.",
    definitionEn: "The initial renewal landmark triggered when 50% of the lease duration expires, prompting the client to send a direct Unicast request to the granting DHCP server.",
    importance: "عملية صامتة تحافظ على استقرار حيازة العنوان وتزامنها عتادياً دون إشغال الشبكة برسائل البث العام المزعجة.",
    lectureId: 7
  },
  {
    term: "T2 State (Broadcast Rebind)",
    definitionAr: "حالة التجديد الطارئة وتحدث عند بلوغ 87.5% من مدة التأجير دون استجابة السيرفر الأساسي، حيث يبث العميل نداءً عاماً جماعياً (Broadcast) للبحث عن أي خادم DHCP منقذ لترحيل عقده قبل الحظر.",
    definitionEn: "The secondary rebinding landmark triggered at 87.5% of the lease duration when the client, having received no unicast T1 response, broadcasts a request to any reachable DHCP server.",
    importance: "إجراء احتياطي يمنع انقطاع اتصال العميل بالكامل بالاعتماد على خوادم الـ DHCP البديلة بالشبكة في حال سقوط السيرفر الأساسي.",
    lectureId: 7
  },
  {
    term: "BOOTP (Bootstrap Protocol)",
    definitionAr: "الجد التاريخي المباشر لبروتوكول الـ DHCP، وكان نظاماً عتادياً يدوياً وسلبياً يتطلب إعداد وتوثيق الماكات وعناوينها بملفات نصية صلبة ومعقدة بالمقارنة مع ديناميكية الـ DHCP.",
    definitionEn: "The older UDP-based host configuration protocol ancestor of DHCP, characterized by manual registry tables linking MACs to IPs dynamically without automated lease durations.",
    importance: "فهم BOOTP يرسخ مبادئ التطور التقني للشبكات وكيف حلت ديناميكية الـ DHCP مشاكل العنونة للأجهزة المتنقلة والعملاقة.",
    lectureId: 7
  },
  {
    term: "Stateful DHCPv6",
    definitionAr: "الوضع التقليدي التام لعنونة الجيل السادس IPv6، وفيه يتوجه العميل كلياً لخادم الـ DHCPv6 ويستدعي منه كافة تفاصيل آي بي الشبكة والـ DNS ومعارف الإرشاد.",
    definitionEn: "An IPv6 address configuration mode where the client obtains both its global IPv6 address and other network settings (like DNS) fully from a stateful DHCPv6 server.",
    importance: "مطلب أساسي لتحقيق السيطرة التامة وحوكمة وحجب العناوين ومراقبة سلوك الأجهزة الفرعية مركزياً من قبل مشرفي النظم.",
    lectureId: 7
  },
  {
    term: "SLAAC Autoconfiguration",
    definitionAr: "تقنية متميزة في IPv6 تعادل بروتوكولياً الـ APIPA، ويقوم من خلالها جهاز العميل بصياغة وتشكيل عنوانه بشكل تلقائي من الماك الخاص به MAC دون الاضطرار لوجود خادم DHCPv6.",
    definitionEn: "A mechanism in IPv6 (Stateless Address Autoconfiguration) enabling clients to self-generate their global IPv6 address using local router advertisements and MAC-based calculations.",
    importance: "تسمح للأجهزة بالنهوض والاتصال الفوري بإنترنت الأشياء IoT تلقائياً دون عبء تشييد خوادم DHCP ضخمة.",
    lectureId: 7
  },
  {
    term: "DHCP Filters (Allow/Deny)",
    definitionAr: "ميزة تصفية الوصول بالـ DHCP باستخدام المعرف الفيزيائي MAC، لتشييد جدر حماية بيضاء (Allow) تمرر الآي بي للأجهزة المسجلة فقط، أو سوداء (Deny) لحظر أجهزة متطفلة.",
    definitionEn: "A server security feature that filters address distribution based on client MAC addresses, enabling Whitelists (Allow) and Blacklists (Deny) to tightly control scope entries.",
    importance: "أقوى وسيلة أمان وحماية محلية لمنع أي لابتوب غريب أو هاتف شخصي للموظفين من التطفل وسحب معرف من السيرفر واستغلال إنترنت المؤسسة.",
    lectureId: 7
  },
  {
    term: "Options Inheritance Hierarchy",
    definitionAr: "المسلك الشجري الحاكم لوراثة القوانين بالـ DHCP، حيث تلغي الحجوزات (Reservation) النطاق (Scope)، ويلغي النطاق خيارات السيرفر (Server Options)، لترشيد ضبط البوابات وأسماء النطاق.",
    definitionEn: "The cascading evaluation structure governing DHCP configurations where local Reservation overrides Scope-level options, which in turn override Server-wide default parameters.",
    importance: "يمنح مديري الأنظمة مرونة كرت قيمة عامة موحدة لآلاف الأجهزة بالشركة كالسيرفر أوبشن، وتخصيص فروعات بدقة بمستوى النطاقات بنقرات ذكية.",
    lectureId: 7
  },
  {
    term: "DORA Process",
    definitionAr: "عملية المصافحة رباعية الخطوات (Discover, Offer, Request, Acknowledge) المستخدمة بواسطة العميل وخادم DHCP لتسليم وتأجير عناوين الـ IP تلقائياً.",
    definitionEn: "The four-step network handshake process (Discover, Offer, Request, Acknowledge) utilized by clients and DHCP servers to automatically negotiate dynamic IP configurations.",
    importance: "هي الآلية البروتوكولية الأساسية التي تضمن خلو الشبكة من تعارض العناوين واستقرار الاتصالات عند ولوج أي مستخدم للفضاء الرقمي للمؤسسة.",
    lectureId: 8
  },
  {
    term: "DHCP Safe Options / Scope Options",
    definitionAr: "خيارات شبكية إضافية مثل البوابة الافتراضية (Default Gateway) وخادم الـ DNS التي يتم ضخها وتسليمها للعميل تلقائياً برفقة خزان الآي بي.",
    definitionEn: "Additional configuration metrics distributed to network clients by the DHCP server, such as Default Gateway, DNS Servers, and Domain Subheading lists.",
    importance: "تمنع فوضى الكتابة اليدوية لعناوين الترجمة أو المسارات الجغرافية عند حركة وتوزيع المستخدمين؛ مما يؤمن انسيابية تدفق بيانات التصحح والإنترنت.",
    lectureId: 8
  },
  {
    term: "DHCP Reservations",
    definitionAr: "عملية ربط معرف فيزيائي MAC لجهاز محدد بعنوان IP ثابت بصفة مستمرة ودائمة لضمان عدم تغير هويته التوزيعية بالشبكة رغماً عن طبيعة الـ DHCP الديناميكية.",
    definitionEn: "A core DHCP mechanism mapping a dynamic scope IP explicitly to a single physical MAC address, securing stable addressing for key clients.",
    importance: "شديدة الأهمية لخوادم الطباعة والأجهزة الخاصة بالإدارات وعوامل التوجيه التي تتصل بالسيرفر باستمرار وتتطلب ثباتاً مطلقاً للهوية.",
    lectureId: 8
  },
  {
    term: "Rogue DHCP Server",
    definitionAr: "خادم DHCP غير مصرح أو عشوائي (مثل راوتر منزلي يربطه موظف بالمكتب) يقوم بتوزيع عناوين خاطئة والتشويش على المستخدمين وجرهم لانهيار الاتصال.",
    definitionEn: "An unauthorized or misconfigured DHCP server active on a network subnet, presenting incorrect configuration data and risking network infrastructure crashes.",
    importance: "أكبر خطر أمني يعالج ويندوز سيرفر حظره ومنعه عبر خاصية تفويض الخادم بالدليل النشط (Active Directory Authorization) لحماية الدوران والمنفذ.",
    lectureId: 8
  },
  {
    term: "APIPA (169.254.X.X)",
    definitionAr: "خدمة العنونة المحلية التلقائية المخصصة بروتوكولياً لحواسيب ويندوز لتعود إليها وتخلق آي بي محلي في نطاق 169.254 عندما يفشل معالج طلب الـ DHCP.",
    definitionEn: "Automatic Private IP Addressing. A native standby operating registry allocating block 169.254.0.0/16 to systems failing to connect with DHCP.",
    importance: "مؤشر وعلامة تشخيصية قاطعة لمديري الأنظمة بوجود خلل في خط الاستكشاف بالشبكة، كبل معطل، أو توقف السيرفر الأساسي عن الرد.",
    lectureId: 8
  },
  {
    term: "DHCP Failover",
    definitionAr: "الميزة المتطورة لويندوز سيرفر بالتنسيق والمزامنة اللحظية الشاملة لقاعدة بيانات الـ DHCP بين جهازين خادم لضمان صعود واستدامة اتصال الأجهزة دون توقف.",
    definitionEn: "A high-availability feature synchronizing lease status and scope options between two active DHCP servers to eliminate single points of failure.",
    importance: "المعيار الحديث لبناء الشبكات عالية المرونة والصمود (Active/Active or Active/Passive) كبديل متطور وآمن لتجزئة النطاق اليدوية الضعيفة.",
    lectureId: 8
  },
  {
    term: "MCLT (Maximum Client Lead Time)",
    definitionAr: "مؤشر ومهلة انتظار الأمان الزمنية الاحتياطية المبرمجة بالـ Failover، والتي تمنع السيرفر الواقف من تخمين وتوزيع آي بي نشط حالياً وتفادي صراعات الاتصال.",
    definitionEn: "A customizable safe-timing buffer defined within failover policies to manage active client parameters safely during node transition crashes.",
    importance: "يقي من تداخل وسرقة العناوين النشطة والمحجوزة للأجهزة في حال توقف السيرفر الفائق ودخول السيرفر المصاحب للعمل.",
    lectureId: 8
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    lectureId: 1,
    question: "أي من إصدارات ويندوز سيرفر التالية يسمح بشكل قانوني بتشغيل نظامين وهميين (2 OSEs) فقط على جهاز مادي مضيف واحد؟",
    options: [
      "Windows Server Datacenter",
      "Windows Server Essentials",
      "Windows Server Standard",
      "Windows Server Web Edition"
    ],
    correctAnswerIndex: 2,
    explanation: "الإصدار القياسي (Standard) مقيد قانونياً بتشغيل بيئتي تشغيل افتراضيتين فقط (2 OSEs/VMs) ومستضيف Hyper-V واحد لكل ترخيص. أما إصدار Datacenter فيعطي حقاً مفتوحاً لتشغيل عدد بيئات تشغيل افتراضية لا نهائي."
  },
  {
    id: 2,
    lectureId: 1,
    question: "إذا كانت شركتك تعمل بنظام الورديات (شفتات) ويتناوب 3 موظفين على نفس جهاز الكمبيوتر للوصول إلى الخادم، ما هو خيار ترخيص CAL الأكثر فاعلية واقتصاداً للشركة؟",
    options: [
      "شراء رخص User CAL للموظفين الثلاثة",
      "شراء رخصة Device CAL واحدة لجهاز الكمبيوتر المشترك",
      "شراء ترخيص Windows Server Standard إضافي",
      "تثبيت ويندوز سيرفر بنمط Server Core لتفادي التراخيص"
    ],
    correctAnswerIndex: 1,
    explanation: "بما أن الموظفين يتناوبون على جهاز واحد، فشراء رخصة جهاز واحدة (Device CAL) يلبي المتطلبات القانونية لجميع الموظفين على هذا الجهاز، وهو أوفر بكثير من شراء 3 رخص مستخدمين (User CAL) منفردة."
  },
  {
    id: 3,
    lectureId: 1,
    question: "بدءاً من أي إصدار لويندوز سيرفر، أصبح نموذج الترخيص المعتمد مبنياً على عدد الأنوية (Core-based) بدلاً من عدد المعالجات الفيزيائية؟",
    options: [
      "Windows Server 2003",
      "Windows Server 2012 R2",
      "Windows Server 2016",
      "Windows Server 2025"
    ],
    correctAnswerIndex: 2,
    explanation: "أدخلت مايكروسوفت نموذج الترخيص القائم على الأنوية (Core-based Licensing) بدءاً من إصدار Windows Server 2016 واستمرت عليه حتى إصدار 2025 الحالي، وذلك لمواكبة التطور التقني لظهور الأنوية المتعددة في المعالجات الحديثة."
  },
  {
    id: 4,
    lectureId: 1,
    question: "كم يبلغ الحد الأدنى المطلق للذاكرة العشوائية (RAM) المطلوبة لتثبيت ويندوز سيرفر بنظام واجهة سطر الأوامر (Server Core) وبنظام الواجهة الرسومية (Desktop Experience) على التوالي؟",
    options: [
      "512 ميجابايت لـ Core و 1 جيجابايت للرسومية",
      "1 جيجابايت لـ Core و 2 جيجابايت للرسومية",
      "2 جيجابايت لـ Core و 4 جيجابايت للرسومية",
      "512 ميجابايت للجهتين"
    ],
    correctAnswerIndex: 1,
    explanation: "المواصفات الدنيا لسرعة ويندوز سيرفر والتشغيل بسلام هي: 1 جيجابايت للنظام المنزوع الواجهات (Server Core) و 2 جيجابايت على الأقل للنظام المدعوم بالواجهة الرسومية وتجربة سطح المكتب الكاملة (Desktop Experience)."
  },
  {
    id: 5,
    lectureId: 1,
    question: "ما هو إصدار ويندوز سيرفر المجهز بميزات حماية Shielded VMs الأمنية، ومزايا Software-Defined Networking والتي تتضمن متحكم الشبكة (Network Controller)؟",
    options: [
      "Windows Server Standard",
      "Windows Server Web Edition",
      "Windows Server Essentials",
      "Windows Server Datacenter"
    ],
    correctAnswerIndex: 3,
    explanation: "يضم إصدار Datacenter خدمات حصرية متقدمة للشبكات الكبرى ومراكز السحاب الآمنة، تشمل وحدة التحكم الشبكي البرمجي (Network Controller) وحارس المضيف (Host Guardian Service) لتأمين وحماية الأجهزة الوهمية المعزولة."
  },
  {
    id: 6,
    lectureId: 2,
    question: "ما هو الأمر المكتوب السريع الذي نستخدمه داخل واجهة سطر الأوامر لنظام (Server Core) لفتح قائمة نصية سريعة تسمح بتعديل اسم الخادم، وضبط عنوان IP، وتفعيل ميزة الاتصال عن بعد (Remote Desktop)؟",
    options: [
      "sconfig",
      "ipconfig",
      "netsh",
      "powershell"
    ],
    correctAnswerIndex: 0,
    explanation: "أداة (Server Configuration - Sconfig) هي واجهة نصية تطلق بكتابة أمر sconfig داخل سطر الأوامر في Server Core، لتتيح لمهندس الشبكة تعديل بارامترات النظام وتسميته وعنونته بخطوات سهلة بدون واجهات رسومية ثقيلة."
  },
  {
    id: 7,
    lectureId: 2,
    question: "أي من الخيارات التالية يوضح الفرق الجوهري الفارق والعملي بين الأدوار (Roles) والمميزات (Features) في برنامج مدير الخادم (Server Manager)؟",
    options: [
      "الأدوار تمثل خدمات الشبكة الكبرى الأساسية التي يبنى الخادم لأجلها، بينما المميزات هي أدوات برمجية تكميلية ومساعدة",
      "الأدوار تستخدم فقط في نظام Datacenter والمميزات تعمل فقط في نظام Standard",
      "الأدوار تدار بالكامل بالماوس، بينما المميزات تتطلب الحفظ والكتابة من خلال الكود في شاشة الـ Core لتعمل",
      "لا يوجد أي فرق تقني أو مالي وبينهما وهما مجرد كلمتين مترادفتين لنفس الخصائص"
    ],
    correctAnswerIndex: 0,
    explanation: "الأدوار (Roles) هي وظائف وخدمات كبرى قائمة بذاتها تدعم العمل الأساسي للخادم (مثل خادم المواقع، خادم المجال AD، خادم الـ DHCP)، في حين أن المميزات (Features) هي برمجيات داعمة وإضافية تساند الأدوار وتساعد في الحماية والصيانة (مثل تشفير بيتلوكر)."
  },
  {
    id: 8,
    lectureId: 2,
    question: "لماذا يمتنع ويحظر مهندسو الأنظمة نهائياً تشغيل أو تفعيل نظام الحصول التلقائي على الآي بي (DHCP Client IP) للخوادم الحاملة لأدوار الشبكة الأساسية، ويفضلون ضبط عناوين الآي بي يدوياً (Static IP)؟",
    options: [
      "لأن عناوين DHCP تفرض تكلفة مالية واشتراكات مدفوعة دورية إضافية لمايكروسوفت",
      "لأن تغيير الآي بي التلقائي للخادم بسبب إعادة التشغيل سيمنع باقي أجهزة ومستخدمي الشبكة من الاستفادة من خدماته لجهلهم بعنوانه الجديد",
      "لأن تفعيل عنوان آي بي ثابت يقوم بتشفير وحماية البيانات داخل السيرفر بشكل تلقائي",
      "لأن معمارية 64 بت ترفض تماماً تشغيل الـ DHCP وتقبل فقط التثبيت من خلال عناوين 32 بت المكتوبة يدوياً"
    ],
    correctAnswerIndex: 1,
    explanation: "تعتمد الأجهزة والعملاء على ثبات عنوان الخادم للاتصال به والحصول على خدماته بشكل آمن ومستمر. فإذا كان آي بي الخادم ديناميكياً متغيراً وتغير العنوان، ستخسر جميع العملاء وباقي السيرفرات الاتصال به وستعطل الشبكة بالكامل."
  },
  {
    id: 9,
    lectureId: 2,
    question: "عند تفعيل خادم المجال (Domain Controller) في الشبكة وهو الذي يحتوي على خدمة الدليل النشط (Active Directory)، ما هي الممارسة القياسية والمثلى لقيمة عنوان الـ Default/Preferred DNS Server في إعدادات بطاقة الخادم؟",
    options: [
      "تركه تماماً فارغاً للاعتماد على ذكاء المودم المنزلي في العثور على الأسماء",
      "كتابة عنوان الآي بي الخاص بمسؤول نظام الشبكة الخارجي أو آي بي جوجل المشهور 8.8.8.8",
      "توجيه الـ Preferred DNS لنفسه عن طريق كتابة آي بي السيرفر الثابت أو استخدام عنوان الحلقة المرتدة Local Loopback 127.0.0.1",
      "يتوجب استخدام كبل شبكة مزدوج لمنع تعارض عناوين الـ DNS بالشبكة والاعتماد على السحاب أزور"
    ],
    correctAnswerIndex: 2,
    explanation: "الدليل النشط (Active Directory) يحتاج بشدة وبشكل وثيق جداً لخدمة الـ DNS للبحث وتحديد هويات وموارد النطاق بسلام. لذلك عند التفعيل يتوجب جعل الخادم يوجه طلبات الـ DNS لنفسه أو لأقرب خادم متحكم مجال آمن بالشبكة."
  },
  {
    id: 10,
    lectureId: 2,
    question: "إذا أردت تثبيت ويندوز سيرفر 2022 قياسي في معمل الجامعة المخصص للتدريب، وأردت واجهة رسومية مألوفة تدار كلياً بنقرات الفأرة والنوافذ البصرية، ما هو خيار التثبيت المطابق في شاشة معالج الإعداد؟",
    options: [
      "Windows Server Standard (Server Core)",
      "Windows Server Standard (Desktop Experience)",
      "Windows Server Essentials Core Edition",
      "Windows Server Standard (Azure Cloud Virtual)"
    ],
    correctAnswerIndex: 1,
    explanation: "يحتوي خيار تجربة سطح المكتب (Desktop Experience) على الواجهة الرسومية الكاملة (GUI) والنوافذ لسهولة ضبط الأدوار والتعلم، بينما خيار Server Core ينصب النظام مجرداً من الواجهات تماماً."
  },
  {
    id: 11,
    lectureId: 3,
    question: "ما هو المعرّف الأمني الرمزي الفريد (SID) الذي يمنحه نظام ويندوز سيرفر تلقائياً بمجرد إنشاء مستخدم أو جهاز جديد في الشبكة؟",
    options: [
      "عنوان إنترنت فيزيائي MAC Address",
      "معرّف أمن ورمز رقمي فريد يمثل الهوية غير المرئية للكائن بالخلفية",
      "بروتوكول تحويل العناوين DNS Root",
      "أداة معالج تفويض السيطرة المخصصة"
    ],
    correctAnswerIndex: 1,
    explanation: "المعرّف الأمني (Security Identifier - SID) هو الرمز الرقمي الفريد الذي يمنحه السيرفر لكل كائن أمني (مثل مستخدم، كمبيوتر، مجموعة أمان) لتمثيله وإدارة سماحياته أمنياً بشكل منفرد، ولا يمكن تكراره أو توارثه بالصدفة حتى لو تشابهت الأسماء."
  },
  {
    id: 12,
    lectureId: 3,
    question: "أي من الكائنات المدرجة والمصممة بداخل الدليل النشط (Active Directory) لا تصنف ولا تعمل ككائن أمني (Security Principal) ولا تملك معرف SID مخصصاً؟",
    options: [
      "حسابات مستخدمي الموظفين (User Accounts)",
      "حسابات أجهزة الكمبيوتر (Computer Accounts)",
      "الوحدات التنظيمية (Organizational Units - OUs)",
      "مجموعات الأمان (Security Groups)"
    ],
    correctAnswerIndex: 2,
    explanation: "الوحدات التنظيمية (OUs) هي أوعية منطقية لتنظيم الكائنات وتفويض السياسات، وليست كائنات أمنية (Security Principals)؛ لذا لا تمتلك SID خاصاً ولا يجوز منحها أذون وصول على ملف أو مجلد مالي بشكل مستقل."
  },
  {
    id: 13,
    lectureId: 3,
    question: "ما هو الفرق الرئيسي والجوهري بين مجموعة الأمان (Security Group) ومجموعة التوزيع (Distribution Group) بداخل ويندوز سيرفر؟",
    options: [
      "مجموعة الأمان تتطلب الحذف من سطر الأوامر فقط ومجموعات التوزيع تدار بالماوس",
      "مجموعة الأمان تستخدم لفرض وتوزيع وتعديل الأذونات والصلاحيات على الملفات، بينما مجموعات التوزيع تستخدم حصرياً لرسائل البريد الجماعية وليست كائنات أمنية",
      "تعمل مجموعات التوزيع فقط في بيئات السحاب أزور، بينما تعمل مجموعات الأمان بداخل الدليل الكلاسيكي",
      "لا يوجد أي فرق تقني أو مالي وبينهما وهما وجهان لعملة برمجية موحدة"
    ],
    correctAnswerIndex: 1,
    explanation: "تعد مجموعات الأمان (Security Groups) كائنات أمنية تملك SID وتستخدم لفرض تراخيص وأذون الملفات وتوزيع الصلاحيات. أما مجموعات التوزيع (Distribution Groups) فهي ليست كائنات أمنية، ولا تملك SID، وغرضها الوحيد بريدي لحزم مراسلات الايميل المشتركة."
  },
  {
    id: 14,
    lectureId: 3,
    question: "ما هي الفاعلية والأهمية الأمنية لمربّع الاختيار (Protect Container From Accidental Deletion) أثناء بناء وتشييد وحدة تنظيمية OU جديدة؟",
    options: [
      "يقوم بتشفير وحفظ محتويات الوعاء بالكامل تلقائياً ضد الهجمات الخارجية",
      "تمنع خبير الأنظمة أو المسؤولين من حذف الوعاء بالصدفة لكي لا تمسح مئات الحسابات والأجهزة المنضوية داخلها كاستجابة فورية",
      "تمنح كائنات الأجهزة سماحية الولوج واستخدام بطاقات الشبكة دون حظر",
      "تقوم بربط الوحدة التنظيمية بفرع إدارة السحاب أزور أوتوماتيكياً"
    ],
    correctAnswerIndex: 1,
    explanation: "تهدف ميزة حماية الحاوية من حذف الصدفة (Accidental Deletion Protection) لمنع حوادث المسح العشوائي المأساوية للـ OUs الكبرى ومحتوياتها. ولحذف الوعاء لاحقاً سيتوجب على المهندس تفعيل الخيارات المتقدمة وتعطيل الحماية يدوياً من تبويب Object في الخصائص."
  },
  {
    id: 15,
    lectureId: 3,
    question: "كيف يتعامل نظام الأوعية التراكمي وويندوز سيرفر مع عملية توريث الصفات والأذون في علاقة الأب والابن بالوحدات التنظيمية (OUs)؟",
    options: [
      "ترفض الوحدات الفرعية تماماً أي قيم يتم إدخالها بالوعاء الأب لضمان فك الارتباط",
      "تقوم الوحدات السفلية بنسخ وتوريث السياسات والأذونات المطبقة على الوحدة أو المجلد الأب الحاضن لها تلقائياً",
      "تقوم بحذف ودرء الكائنات الأمنية الفرعية عند تفعيل سياسة المجموعة الكبرى",
      "تستعين بالباور شيل كحل حتمي لتجهيز العضويات والمزامنة"
    ],
    correctAnswerIndex: 1,
    explanation: "بموجب المفهوم الإداري لويندوز سيرفر، ترث الوحدات والأوعية الفرعية (Sub-OUs) كافة سياسات وأذون الحاوية الأم المباشرة (Parent-Child Relationship) بشكل طبيعي وتلقائي، ما لم يقم مدير النظام بإلغاء ميزة التوريث صراحة (Block Inheritance)."
  },
  {
    id: 16,
    lectureId: 3,
    question: "تلتزم سياسات حماية الخوادم والشركات بتطبيق مبدأ (الامتياز الأدنى - Least Privilege) لمنع الموظفين المساعدين من العبث. كيف يحقق الخبير ذلك بالدليل؟",
    options: [
      "عن طريق ترفيع موظفي الفروع ليكونوا بداخل مجموعة المدراء الكبرى Domain Admins",
      "باستخدام معالج تفويض السيطرة (Delegation of Control Wizard) لإعطاء موظف الفرع صلاحيات محدودة (كتصفير الباسورد) على وعائه OU الخاص فقط",
      "عن طريق إلغاء وحظر كبلات اتصال بطاقات الشبكة لخوادم الـ Domain Controllers",
      "ببناء حسابات مستخدمين بصلاحية المسؤول وحذف قوالب المستخدمين"
    ],
    correctAnswerIndex: 1,
    explanation: "يتيح معالج تفويض السيطرة (Delegation of Control Wizard) تحقيق مبدأ الامتياز الأدنى بامتياز؛ إذ يمنح الموظف أو الفني صلاحية حصرية لإنجاز عمل محدد (مثل إعادة تعيين باسورادات الموظفين) على وحدة تنظيمية معينة تخص فرعه الفعلي، دون ترفيعه للمجموعة الخارقة للمدراء لحماية البنية الأساسية."
  },
  {
    id: 17,
    lectureId: 3,
    question: "أثاء الرغبة بإعطاء فني شبكات صلاحيات لإدارة حسابات الأجهزة (Computer Objects) فقط دون السماح له بالولوج لمستخدمي الشبكة، أي من شاشات معالج التفويض المخصص نلجأ إليها؟",
    options: [
      "شاشة تفويض المهام المشتركة الجاهزة (Common Tasks)",
      "شاشة تحديد فئة ونوع الكائنات (Active Directory Object Type) لاختيار فقط Computer Objects",
      "شاشة الخصائص العامة وإدخال الهاتف العام",
      "شاشة ربط سياسات المجموعة GPOs"
    ],
    correctAnswerIndex: 1,
    explanation: "المعالج المخصص للتفويض يمنحنا تحكماً دقيقاً (Granular Control). فمن خلال شاشة (Active Directory Object Type) نختار خيار 'فقط الكائنات المحددة' وتخصيص كائنات الأجهزة (Computer Objects) لحجر صلاحيات الموظف ومنعه عن كائنات المستخدمين أو المجموعات."
  },
  {
    id: 18,
    lectureId: 3,
    question: "في حال استخدام قالب مستخدم جاهز (User Template) لإنشاء حساب لموظف جديد في الجامعة بالمعمل، أي من الحقول والبيانات الأمنية الفردية يستثنيها ويندوز سيرفر بذكاء من النسخ؟",
    options: [
      "عضوية المجموعات الأمنية (Member of)",
      "المسمى الإداري للقسم والشركة والمدينة",
      "أرقام الهواتف، واسم الدخول للشبكة، وكلمات المرور، والبريد الشخصي للموظف",
      "مسار التخزين الخاص للملفات الشخصية ووحدة تخزين السيرفر"
    ],
    correctAnswerIndex: 2,
    explanation: "يقوم ويندوز سيرفر أثناء نسخ القالب باستبعاد البيانات الشخصية المحضة لخصوصيتها المطلقة واستحالة تطابقها تالياً (الاسم الأول والأخير، يوزر الدخول UPN، الهواتف، البريد الشخصي، كلمات المرور)، بينما ينسخ باقي القيم المشتركة لغرف العمل لإنجاز الوقت."
  },
  {
    id: 19,
    lectureId: 3,
    question: "لماذا تفرض قوانين وضوابط الأمن السيبراني لمايكروسوفت ضرورة أن يبقى الحساب القالب الرئيسي (User Template) في وضع تعطيل (Account is disabled) بعد برمجته؟",
    options: [
      "لكي لا يستهلك هذا الحساب مساحة في قرص السيرفر الصلب",
      "لأن تفعيله سيمنع عملية نسخ الكائنات والموظفين منه بالكامل برمجياً",
      "لمنع تغلغل أي مهاجم أو متسلل خارجي واستغلال الحساب القالب (غير المرتبط بشخص حقيقي) للولوج للشبكة لامتلاكه مجاميع وصلاحيات حساسة",
      "لأنه لا يعمل عتادياً إلا على معالجات وأنظمة تشغيل 64 بت"
    ],
    correctAnswerIndex: 2,
    explanation: "حساب القالب هو كيان وهمي لا يتبع موظفاً حقيقياً بعينه ولكنه محشو بعضويات مجموعات هامة (كـ Administrators). لإغلاق الثغرات، يتم تفعيله كحساب معطل (Disabled) لكي لا يوفر جسر عبور لأي متسلل، ويبقى فقط مرجعاً لعمليات النسخ."
  },
  {
    id: 20,
    lectureId: 3,
    question: "أين يتوجه خادم ويندوز سيرفر لوضع وتخزين حسابات بطاقات وحواسيب الموظفين (Client Computers) المنضمة حديثاً والداخلة في إدارة النطاق بشكل افتراضي؟",
    options: [
      "مجلد الأدوار والمزايا (Server Manager)",
      "الحاوية والمستودع الافتراضي لحسابات الحواسيب (Computers Container)",
      "الوحدة التنظيمية المفتوحة لمتحكمي المجال (Domain Controllers OU)",
      "مجلد الحماية والنشأة المدمج (Built-In)"
    ],
    correctAnswerIndex: 1,
    explanation: "بشكل قياسي وافتراضي، بمجرد ربط وضم جهاز كمبيوتر عادي للمجال بنجاح، يرسله ويندوز سيرفر ليرسو ويتثبت داخل مجلد الحاوية الافتراضية المخصصة (Computers Container). بينما يحتفظ بوحدة Domain Controllers للتحكم بمتحكمي النطاق."
  },
  {
    id: 21,
    lectureId: 4,
    question: "أثناء محاولة ربط جهاز العميل بالنطاق بالطريقة المباشرة (Online Domain Join)، ما هو العامل الأكثر حيوية والذي يؤدي فشله إلى تعذر العثور على اسم المجال aljanad.edu؟",
    options: [
      "عدم تفعيل خدمة المحاكاة الافتراضية Hyper-V بالعميل",
      "عدم تطابق لغة واجهة العميل مع لغة واجهة وموقع السيرفر",
      "عدم كتابة أو توجيه الـ Preferred DNS في العميل إلى الآي بي الصحيح لخادم مسمى المجال والـ AD",
      "امتلاك حساب العميل لصلاحيات Domain Admin بمستوى فني مشبوه"
    ],
    correctAnswerIndex: 2,
    explanation: "في الانضمام المتصل المباشر بالدومين، يمثل خادم نظام أسماء النطاقات (DNS Server) البوصلة الأساسية التي ترشد العميل لمكان وجود متحكم النطاق. إن لم يوجه كرت شبكة العميل بشكل صحيح إلى عنوان IP للـ DNS الخاص بالنطاق، فلن يستطيع التعرف عليه أبداً."
  },
  {
    id: 22,
    lectureId: 4,
    question: "عند استخدام أداة djoin.exe لإنجاز انضمام غير متصل (Offline Domain Join) في السيرفر، ما هو الخيار البرمجي (Parameter) المسؤول عن حفظ وتصدير ملف التوثيق والشهادة المشفرة؟",
    options: [
      "الحقيبة البرمجية /requestODJ",
      "الخيار التخزيني /savefile",
      "الوسيط التشغيلي /provision",
      "مسار النظام /windowspath"
    ],
    correctAnswerIndex: 1,
    explanation: "يستخدم الخيار /savefile لتوجيه مخرجات أمر djoin وحفظ التوثيق الكودي (provision metadata) بمسار ملف خارجي، حتى يتم نقله فعلياً أو برمجياً للعميل المعلق وحقنه به لإتمام الضم دون أي اتصال فوري بالسيرفر."
  },
  {
    id: 23,
    lectureId: 4,
    question: "عند إتمام أمر djoin /requestodj بالعميل لإكمال الانضمام غير المتصل، أي مسار أو متغير بيئي يمثل المجلد الحقيقي لملفات نظام ويندوز لتعديل سجلات الريجستري؟",
    options: [
      "المسار الافتراضي %SystemRoot%",
      "مجلد الأرشفة %ProgramFiles%",
      "ملف المستخدم المباشر %UserProfile%",
      "قرص التخزين المؤقت %TEMP%"
    ],
    correctAnswerIndex: 0,
    explanation: "يتطلب الجزء الأخير من عملية djoin على لابتوب أو حاسوب العميل تحديد مسار مجلد النظام الفعلي (ويندوز) وذلك عبر استخدام المتغير البيئي %SystemRoot% (الذي يشير افتراضياً إلى المجلد C:\\Windows) لحقن مفاتيح التسجيل وباقة الثقة للمجال بنجاح."
  },
  {
    id: 24,
    lectureId: 5,
    question: "أي من الخيارات التالية يمثل ترتيب الأسبقية ومعالجة السياسات (Processing Order) المعتمد من مايكروسوفت عند تشغيل أو تسجيل الدخول للأجهزة في النطاق؟",
    options: [
      "Site -> Domain -> OU -> Local [SDOUL]",
      "Local -> Site -> Domain -> OU [LSDOU]",
      "OU -> Domain -> Site -> Local [OUDSL]",
      "Domain -> OU -> Site -> Local [DOUSL]"
    ],
    correctAnswerIndex: 1,
    explanation: "الترتيب الرسمي الموثق والمدعو LSDOU يسري من الأقل أسبقية والأول بالتطبيق (Local السياسة المحلية) تليها الموقع (Site)، النطاق (Domain)، وانتهاءً بالوحدات التنظيمية (OU) التي تطبق في نهاية المطاف فتملك الأسبقية الأعلى وتلغي أي تناقض أعلى."
  },
  {
    id: 25,
    lectureId: 5,
    question: "أثناء عملك في شركة مالية، طلب منك الحفاظ على استقرار أسطح عمل الأجهزة بقسم خدمة العملاء ومنع الطلاب والموظفين من تثبيت أي تطبيقات، وتأمين جهاز السيرفر من هجمات الاختراق عن طريق فلاشات USB. أي الأقسام تختار لتثبيت حظر الـ USB Storage؟",
    options: [
      "مجلد تهيئة الأجهزة (Computer Configuration) تحت مسار Removable Storage Access",
      "مجلد تهيئة المستخدم (User Configuration) تحت مسار Personalization",
      "السياسة الافتراضية لقواعد الدومين (Default Domain Policy)",
      "لوحة التحكم المحلية بنظام العميل دون ربط السيرفر"
    ],
    correctAnswerIndex: 0,
    explanation: "بما أن كائنات ومنافذ الـ USB ترتبط بجسد وعتاد وقطع حاسب العميل الملموسة كجهاز كمبيوتر، فإن الخيار التقني الأسلم والموثق هو حظرها بقسم Computer Configuration بمسار Removable Storage Access لقطع الإشارات عتادياً."
  },
  {
    id: 26,
    lectureId: 5,
    question: "إذا قامت سياسة على مستوى الدومين (Domain-level GPO) بمنح حسابات قسم الحسابات حق الوصول الكامل لإدارة العمليات، بينما قامت سياسة معلقة بوحدة تنظيمية (OU GPO) بحظر وإيقاف مدير المهام (Task Manager). ما هي النتيجة العملية لأعضاء هذا القسم؟",
    options: [
      "يتوقف نظام العميل عن الاستجابة كلياً ويصاب بالشلل المالي",
      "تسود سياسة الدومين وتسمح بنشاط مدير المهام بالكامل",
      "تفوز سياسة الـ OU الفرعية وتلغي ميزة مدير المهام رضوخاً لقاعدة الكاتب المتأخر Wins",
      "يتعادل الأمران وتحدث قرارات عشوائية في أجهزة الموظفين"
    ],
    correctAnswerIndex: 2,
    explanation: "طبقاً لقاعدة 'الكاتب الأخير هو الفائز' (Last Writer Wins) بداخل تدرج تطبيق السياسات بالدليل، فإن السياسات المعلقة بجدول الـ OU تطبق آخراً وتلغي أي خيارات معارضة لها قد رُصّعت بمستويات أعلى مثل الدومين."
  },
  {
    id: 27,
    lectureId: 5,
    question: "أي من الأوامر البرمجية التالية يجب تنفيذه من خلال موجه الأوامر (CMD) كمسؤول داخل حاسوب العميل لإرغامه على الاتصال بالسيرفر وتطبيق تحديثات نهج المجموعة الأخيرة فوراً؟",
    options: [
      "gpresult /r",
      "ipconfig /flushdns",
      "gpupdate /force",
      "djoin /provision"
    ],
    correctAnswerIndex: 2,
    explanation: "يستخدم الأمر 'gpupdate /force' للتواصل الفوري وإجبار كرت ومستودع العميل على سحب حزمة وتحديثات السياسة الطازجة من متحكم الدومين بلحظته، متجاوزاً الإيقاع الطبيعي المعتاد المقدر بـ 90 دقيقة."
  },
  {
    id: 28,
    lectureId: 5,
    question: "ما هي النصيحة الذهبية والممارسة الفضلى (Best Practice) التي يوصى بها خبراء مايكروسوفت بشدة بخصوص تهيئة وكتابة كائنات سياسة المجموعة GPO لضمان ثبات الشبكة وسرعة الدخول؟",
    options: [
      "صناعة كائن سياسي ضخم أحادي (Monolithic) يحوي كل القواعد دفعة واحدة لتخفيف الإدراج",
      "تعديل وتشويه السياسة العامة الافتراضية للدومين (Default Domain Policy) باستمرار لكل الإعدادات الفرعية",
      "تعطيل المسارات الشجرية الفرعية غير المستغلة (مثل إغلاق User Config بداخل سياسة Computer-only GPO) لتسريع الفحص الدائري",
      "الامتناع عن تقسيم الحسابات والأجهزة لوحدات تنظيمية OUs وتكديسها بالحاويات الافتراضية"
    ],
    correctAnswerIndex: 2,
    explanation: "من النصائح الأساسية هي تعطيل الشق غير المستعمل لزيادة سرعة معالجة الأجهزة وتسريع الإقلاع والدخول للمنشأة (مثلاً، لو كانت سياسة مخصصة للأجهزة فقط، يعطل شق حسابات المستخدمين بها ليوفر السيرفر والعميل تكرار فحصها بلا داعي)."
  },
  {
    id: 29,
    lectureId: 7,
    question: "في شبكات ويندوز الكبرى، ما الذي يحدث عندما تبلغ فترة عقد التأجير (Lease) للآي بي نسبة 50% (T1 State) وجهاز العميل نشط بالاتصال؟",
    options: [
      "يقوم العميل بتحرير وحذف الآي بي وأخذ عنوان APIPA فوراً",
      "يبعث العميل برسالة بث عام جماعية (Broadcast) للبحث عن أي خادم DHCP آخر بالشبكة",
      "يوجه العميل رسالة طلب تجديد فردية (Unicast) لخادم الـ DHCP الأساسي الذي أجره العنوان سابقاً",
      "يقوم العميل بإعادة التشغيل لضمان استقرار العنونة وسحب معرف جديد"
    ],
    correctAnswerIndex: 2,
    explanation: "عند وصول فترة تأجير العميل لنسبة 50%، تتفعل حالة التجديد الأولى T1 حيث يقوم العميل بهدوء وسلاسة (Unicast) بمراسلة السيرفر الذي أجره العنوان سابقاً لطلب تمديد فترة البقاء."
  },
  {
    id: 30,
    lectureId: 7,
    question: "إذا أردت حظر وتقييد أجهزة معمل الكلية من سحب عناوين IP والاتصال بالخادم، بحيث تسمح فقط للأجهزة ذات كروت الشبكة المسجلة لدينا في السيرفر (White-listing)، أي الخيارات تفعل؟",
    options: [
      "تفعيل تصفية الماكات بوضعها تحت مجلد Allow بداخل Filters وتفعيل القائمة بالزر الأيمن Enable",
      "تعليق السياسة وحجب لوحة التحكم بمسار User Configuration للـ GPO",
      "حظر واجهات الـ USB بالسياسة العامة للدومين",
      "تشغيل معالج التوزيع Stateless DHCPv6 وعزل بوابة الراوتر"
    ],
    correctAnswerIndex: 0,
    explanation: "نظام التصفية Filters بالـ DHCP يتيح عزل وتأمين معابر الشبكة؛ حيث نقوم بتسجيل ماكات الأجهزة المصرحة تحت قائمة المسموحات (Allow) ثم نضغط يمين الماوس ونفعل الأداة بالكامل (Enable) لتصفية وسد المنافذ أمام الغرباء."
  },
  {
    id: 31,
    lectureId: 7,
    question: "في بروتوكول الجيل السادس IPv6، أي العبارات التالية تصف طريقة العنونة الآلية عديمة الحالة الـ SLAAC؟",
    options: [
      "يسحب العميل كامل تفاصيله والـ DNS من السيرفر كشبكة الجيل الرابع تماماً",
      "يقوم العميل بنحت وبناء عنوانه محلياً ودولياً بالاعتماد على معادلات كرت الماك MAC والراوتر محيطاً دون الاضطرار لوجود خادم DHCPv6",
      "تعتبر فئة تمليك عشوائية شبيهة بجرائم الاختراق وصراع الهويات بالدومين",
      "يعقد فيها العميل تراضياً مع قواعد البيانات Kerberos لغرس الـ SID"
    ],
    correctAnswerIndex: 1,
    explanation: "بروتوكول SLAAC بالـ IPv6 معادل عالي الكفاءة للـ APIPA، حيث يقوم كرت اتصالات العميل بإجراء عمليات عتادية ونحت وتوليد آي بي فريد عالمياً ومحلياً من الماك دون ملامسة السيرفر."
  },
  {
    id: 32,
    lectureId: 7,
    question: "أي من الخيارات التالية يوضح التدرج الهرمي الحقيقي والأولوية لفرض وتوارث خيارات الـ DHCP (DHCP Options) من الأقوى والأعلى سيادة إلى الأقل والأضعف؟",
    options: [
      "Server Options -> Scope Options -> Reservation",
      "Reservation -> Server Options -> Scope Options",
      "Reservation -> Scope Options -> Server Options",
      "Scope Options -> Reservation -> Server Options"
    ],
    correctAnswerIndex: 2,
    explanation: "يترتب هرم الوراثة بالـ DHCP بامتلاك مستوى الحجز (Reservation) للسيادة والكلمة المطلقة لإلغاء أي خيارات أشد عمومية، تليها خيارات النطاق البديل (Scope Options)، ثم خيارات السيرفر الأب العامة المورثة (Server Options)."
  },
  {
    id: 33,
    lectureId: 7,
    question: "عند رغبتك بعمل معمل وهمي وبناء خادم DHCP خاص بك للتجريب داخل غرف المحاكاة (كـ VMware أو VirtualBox) باستخدام نظام NAT، ما هو الإجراء الحيوي لتجنب تضارب وحصار العنونة عن الأجهزة الوهمية المستهدفة؟",
    options: [
      "حذف أداة djoin.exe من مجلدات النظام %SystemRoot%",
      "تثبيت وإرساء رخصة CAL مخصصة للأجهزة الوهمية المستهدفة",
      "فتح نافذة محرر الشبكات بالمحاكي (Virtual Network Editor) للـ NAT وإلغاء خيار Local DHCP",
      "إفساح وتعديل سياسة Default Domain Policy لطلب ميزة الـ Enforced"
    ],
    correctAnswerIndex: 2,
    explanation: "تلتزم المحاكيات بتشغيل خادم DHCP محلي وصغير بداخل كرت الـ NAT. لتجربة وتأجير الآي بي من سيرفرك الخاص، يتوجب قطع هذا الموزع المحاكي من الإعدادات لئلا تسبق وتختطف عقود العنونة لكرت العميل الوهمي."
  },
  {
    id: 34,
    lectureId: 7,
    question: "ما هو الرمز المقابل لعنوان الحلقة المغلفة وفحص كروت الاتصالات الذاتي Loopback (127.0.0.1) في معمارية الجيل السادس IPv6؟",
    options: [
      "2001::1",
      "fe80::",
      "::1",
      "apipa::6"
    ],
    correctAnswerIndex: 2,
    explanation: "عنوان فحص الاتصال الذاتي المرتد (Loopback) في IPv6 هو '::1' وهو معادل فريد ومباشر للآي بي 127.0.0.1 المستخدم بالجيل الرابع، والذي يستخدمه كرت العميل لتغذية الفحص للشبكة داخلياً."
  },
  {
    id: 35,
    lectureId: 7,
    question: "في إعدادات IPv6 DHCPv6، ما دلالة واحتساب بند التفضيل (Preference) عند صياغة نطاق جديد بالسيرفرات المتعددة؟",
    options: [
      "الرقم الأكبر هو صاحب السيادة والتوزيع اللحظي السلس بالشبكة",
      "الرقم الأقل هو صاحب الأولوية الأعلى بالرد والاستجابة (الـ 0 يسبق الـ 1 ويقهر الرد)",
      "يرمز لنسبة حجز المعالج للـ IPv4 بالمقاييس السحابية لآلات ويندوز",
      "يحدد حجم الرام والذاكرة للتطبيقات النشطة"
    ],
    correctAnswerIndex: 1,
    explanation: "منظومة IPv6 DHCP تمنح خيار Preference لتنسيق الخوادم المتعددة؛ وعكس الـ IPv4، كلما قل الرقم كانت الأولوية والأسبقية بالرد والاستحواذ أعلى (0 يملك أقصى أولوية والـ 1 أقل)."
  },
  {
    id: 36,
    lectureId: 8,
    question: "ما الاسم والترتيب الصحيح للمراحل والخطوات الشبكية الأربع لبروتوكول الـ DHCP والمعروفة ببروتوكول مصافحة الـ DORA؟",
    options: [
      "Discovery -> Offer -> Request -> Acknowledgment",
      "Domain -> Option -> Router -> Authority",
      "Database -> Override -> Resource -> Association",
      "Deny -> Option -> Reservation -> Active"
    ],
    correctAnswerIndex: 0,
    explanation: "تتكون عملية المصافحة الشبكية لتوزيع الآي بي ديناميكياً من 4 مراحل متكاملة بالترتيب والتوالي وهي: الاستكشاف (Discover) من جهاز العميل، العرض (Offer) من السيرفر، الطلب (Request) من العميل لتاكيد حجز العنوان، والتأكيد (Acknowledge) من السيرفر وإطلاق رخصة التأجير."
  },
  {
    id: 37,
    lectureId: 8,
    question: "عند وصول العميل لمنتصف مدة عقد تأجير الـ IP الخاصة به بنسبة 50% (ما يعرف بمؤقت T1)، كيف يتصرف العميل لتفادي انقطاع الاتصال؟",
    options: [
      "يقوم بالإطفاء والتشغيل لكرت الشبكة ويخلق لنفسه آي بي فئة الـ APIPA",
      "يرسل باقة اتصال فردية موجهة (Unicast) إلى خادم الـ DHCP الأصيل الذي منحه العقد لطلب التمديد والتجديد",
      "يقوم بالدخول لقائمة الفلترة Allow ويمسح الماك الخاص به تفادياً للحظر",
      "يرسل بثاً عاماً صاخباً (Broadcast) يراسل فيه كافة خوادم الدومين بشكل عشوائي دون استثناء"
    ],
    correctAnswerIndex: 1,
    explanation: "عند حلول منتصف مدة الإيجار (عند 50% أو T1 وهي 4 أيام بالمدة الافتراضية للويندوز)، يرسل العميل وبصمت تام اتصالاً فردياً Unicast للسيرفر الذي أجّره العنوان الأصيل لاستبيان بقائه وصلاحيته ومطالبة تمديد رخصة إيجاره."
  },
  {
    id: 38,
    lectureId: 8,
    question: "لماذا تضع مايكروسوفت قيداً أمنياً صارماً على سيرفر الـ DHCP داخل بيئات الدومين يلزمه بالتفويض (Authorization) من مشرف الأكتيف دايركتوري؟",
    options: [
      "لمنع الخوادم غير المصرح بها (Rogue DHCP Servers) من العبث وتوزيع آي بيات خاطئة تسبب دمار شلل الهياكل للشبكات",
      "لربط السيرفر بطابعات الشركة تلقائياً وتلوين فواتيرها",
      "لتسريع استجابة المعالجة للحواسيب وحفظ ذاكرتها من التبدد",
      "لأن تفويض السيرفر هو شرط مالي لشراء كروت الترخيص Core-Based"
    ],
    correctAnswerIndex: 0,
    explanation: "يمنع الـ AD Authorization وجود خوادم عشوائية أو متطفلة (Rogue DHCP Servers) داخل الشركة، حيث يطفئ السيرفر المتطفل خدمته تلقائياً وتفشل لوحة تشغيله في توزيع العناوين إذا قرأ وجود دومين نشط يحظر السيرفرات غير المفوضة بالمركزي."
  },
  {
    id: 39,
    lectureId: 8,
    question: "عند تفعيل نظام تصفية العلوج (MAC Filtering) بالـ DHCP على خيار مسموح به (Allow) مع إغفال وترك القائمة بيضاء وفارغة تماماً دون تسجيل أي ماك، ما الكارثة الشبكية اللحظية المترتبة على ذلك؟",
    options: [
      "يتحول ويندوز سيرفر إلى رخصة Datacenter تلقائياً دون تكاليف",
      "ستفشل كافة أجهزة المحطة بالمعمل بلا استثناء في أخذ آي بي وتسقط جميعاً فوراً لعنوان الـ APIPA (169.254.X.X)",
      "يتدفق الإنترنت بكفاءة ضخمة وضاعف السرعة لجميع الأجهزة النشطة",
      "يعاد تقسيم النطاق للـ 80/20 وتتزامن البيانات بقاعدة الـ Failover بلا تدخل"
    ],
    correctAnswerIndex: 1,
    explanation: "تفعيل قائمة Allow يخبر السيرفر صراحة بأنه لا يحق لأي جهاز بالبسيطة أخذ آي بي إلا الماكات المسجلة حصرياً هنا. فلو تركنا القائمة فارغة ومفوعة، فسيتم حظر وحرمان كافة الأجهزة والشرائح بالمعمل بالكامل ويأخذ الجميع آي بي عشوائي محلي APIPA."
  },
  {
    id: 40,
    lectureId: 8,
    question: "أي من أنماط تشغيل الجاهزية العالية للـ DHCP Failover يُعد الخيار الأمثل للمكاتب والفروع الجغرافية البعيدة (Branch Offices) لضمان السيادة والاستهلاك المتبادل؟",
    options: [
      "نمط توازن الأحمال المتبادلة Load Balance بنسبة 50/50 للطرفين",
      "نمط الاستعداد الساخن Hot Standby (حيث يعمل سيرفر مركزي بنسبة 100% ويستقر الآخر باحتياط طوارئ صامت بنسبة 5%)",
      "نمط تجزئة نطاق التوزيع Split Scope مع تصفية الماكات بنسبة 80/20",
      "نمط الـ APIPA Dynamic Allocation التلقائي الخالي من القواعد"
    ],
    correctAnswerIndex: 1,
    explanation: "الـ Hot Standby (Active/Passive) هو الخيار الذهبي للفروع البعيدة وجسور الاتصالات؛ بحيث يقود المعمل سيرفر الفرع بـ 100% من نشاطه لتفادي مرور كافة البيانات للخط الخارجي، بينما يبقى خادم المركز بنسبة بسيطة (5%) كدرع واقٍ لا يسد الثغرات إلا بالانقطاعات الطارئة."
  }
];

export const essayQuestions: EssayQuestion[] = [
  {
    id: 1,
    lectureId: 1,
    question: "ما الفرق الجوهري بين تراخيص ويندوز سيرفر من نسختي Windows Server Standard و Windows Server Datacenter من حيث البيئات الافتراضية (Virtualization) وكيف تؤثر على اختيار مهندس النظم؟",
    answer: "تكمن الفروقات الجوهرية في عدد خوادم الـ Hyper-V (البيئات الافتراضية OSEs) المسموح بتشغيلها بترخيص مادي واحد. تتيح نسخة Standard تشغيل بيئتين افتراضيتين فقط (2 VMs) لكل ترخيص معالج كامل، بينما تتيح نسخة Datacenter تشغيل عدد غير محدود من البيئات الافتراضية (Unlimited VMs) على نفس العتاد. بالإضافة إلى ذلك، تنفرد نسخة Datacenter بميزات متقدمة جداً مثل الشبكات المعرفة برمجياً (SDN) والتخزين الموزع المباشر (Storage Spaces Direct) ودعم الأجهزة الافتراضية المحمية بالكامل (Shielded VMs).",
    keyPoints: [
      "نسخة Standard تدعم بيئتين وهميتين فقط (2 VMs).",
      "نسخة Datacenter تدعم عدداً غير محدود من الأجهزة الوهمية (Unlimited).",
      "خدمات SDN و Storage Spaces Direct حصرية لإصدار Datacenter."
    ]
  },
  {
    id: 2,
    lectureId: 1,
    question: "ما هي رخص وصول العميل Client Access Licenses (CALs) ومتى يجب على المؤسسة شراء User CALs بدلاً من Device CALs لترشيد التكاليف المالية؟",
    answer: "رخصة وصول العميل (CAL) هي رخصة قانونية (ليست لتنشيط النظام برمجياً) بل لإجازة استخدام وتلقي الخدمات من خادم مرخص. يُنصح بشراء User CAL عندما يكون عدد الموظفين أقل بكثير من عدد الأجهزة المتوفرة لديهم (مثلاً موظف واحد يملك لابتوب وهاتف وكمبيوتر مكتبي في العمل). بينما يُفضل شراء Device CAL عندما يتشارك عدة موظفين في استخدام نفس الجهاز المادي بالتناوب (مثل عمال الورديات بمقدمة استقبال أو المصانع أو المعامل).",
    keyPoints: [
      "User CAL: تلتصق بالموظف/المستخدم وتسمح له بالولوج بأي عدد من الأجهزة.",
      "Device CAL: تلتصق بالكمبيوتر نفسه ويسمح لأي عدد من عمال الورديات باستخدامه."
    ]
  },
  {
    id: 3,
    lectureId: 2,
    question: "ما هي فوائد تثبيت خيار Server Core على الأنظمة الإنتاجية، وكيف يمكن لمدير الشبكة الإعداد والتواصل الفني معه فور انتهاء التثبيت في غياب الواجهة الرسومية (GUI)؟",
    answer: "خيار Server Core يسحب الواجهة وبنية سطح المكتب كلياً، ويقدم فوائد هائلة هي: 1. أمان متفوق (Reduced Attack Surface) نظراً لعدم وجود ملفات النوافذ التي تولد الثغرات. 2. استهلاك أقل للموارد (أقل من 50% من الرام مقارنة بـ GUI). 3. تحديثات أقل للملفات (تخفيف فترات إعادة التشغيل للصيانة). تتم الإدارة الأولية عبر أداة سطر الأوامر التفاعلية Sconfig لضبط الاسم والآي بي وتنشيط الـ Remote Desktop والـ PowerShell، ثم إدارته عن بعد عبر RSAT أو Windows Admin Center.",
    keyPoints: [
      "تقليل الثغرات الأمنية السطحية (Attack Surface).",
      "ترشيد استهلاك المعالج والرام بشكل ملحوظ.",
      "استخدام أداة Sconfig الرائعة للإعداد السريع محلياً.",
      "الإدارة المتقدمة عن بعد عبر PowerShell و Windows Admin Center."
    ],
    codeExample: "sconfig"
  },
  {
    id: 4,
    lectureId: 2,
    question: "لماذا يُعد تعيين عنوان آي بي ثابت (Static IP) وإعداد عنوان الحلقة المغلقة (Loopback Address 127.0.0.1) كـ Preferred DNS أمراً حتمياً على السيرفر الذي سيعمل كمتحكم نطاق (Domain Controller)؟",
    answer: "يجب تعيين Static IP للخادم لضمان ثبات هويته وقدرة الأجهزة على الاتصال به باستمرار دون حدوث تغيرات ديناميكية بمرور الوقت تؤدي لقطع الخدمات. ويجب تفعيل الـ Loopback Address (127.0.0.1) كـ Preferred DNS على خادم متحكم النطاق (DC) لأن هذا الخادم يستضيف قاعدة بيانات خدمة Active Directory ودليل الـ DNS المترابط معه مباشرة؛ فيجب أن يبحث السيرفر عن طلبات ومصادقات الدليل بداخل دليل DNS المحلي المحمل على نفسه أولاً قبل الخروج للبحث خارجياً.",
    keyPoints: [
      "الـ Static IP يمنع تعطل واستقرار وصول المستخدمين للخادم.",
      "الـ Loopback (127.0.0.1) يوجه السيرفر للتحقق الفوري من قواعد بياناته المحلية."
    ]
  },
  {
    id: 5,
    lectureId: 3,
    question: "اشرح مفهوم تفويض التحكم (Delegation of Control) في Active Directory، وما هي الفائدة الأمنية والعملية من تطبيقه على الوحدات التنظيمية (OUs)؟",
    answer: "تفويض التحكم هو آلية تتيح لمسؤول الأنظمة الرئيسي الفائق (Enterprise Admin) منح صلاحيات ومهام إدارية محددة جداً لمستخدمين أو مجموعات الدعم الفني المحلي (مثل إعادة تعيين كلمات مرور مستخدمي فرع معين، أو إضافة أجهزة للمجال) على مستوى وحدة تنظيمية وبنائية (OU) محددة، دون الحاجة لمنحهم رتبة 'Admin' كاملة على مستوى الدومين بالكامل. يحقق هذا المفهوم قاعدة الأمان العالمية 'أقل امتيازات مطلقة لإنهاء المهمة' (Least Privilege).",
    keyPoints: [
      "منح صلاحية إدارة محدودة على مستوى حاوية OU معينة فقط.",
      "تطبيق قاعدة الأمان الذهبية (Principle of Least Privilege).",
      "يمنع تدمير المخدم بكبس زر خاطئ من فني دعم صغير."
    ]
  },
  {
    id: 6,
    lectureId: 3,
    question: "ما هي فائدة استخدام تقنية قالب المستخدم (User Template) في بيئات الشركات الكبيرة لنظام إدارة هويات المستخدمين بالدومين؟",
    answer: "قالب المستخدم هو حساب نموذج يتم إنشاؤه مسبقاً وتخصيصه بعناية بكافة معايير الاستخدام الشائعة للقسم (مثل: العضوية في المجموعات البريدية، المسارات الافتراضية للمجلدات المشتركة، ساعات الدخول المسموحة، سياسات تخزين الملفات)، ويتم إبقاؤه معطلاً (Disabled) لأسباب أمنية. عند انضمام موظف جديد لنفس القسم، يقوم مهندس الخوادم ببساطة بعمل نسخة (Copy) من القالب وتسمية الحساب الجديد باسم الموظف، مما يسرع عملية التزويد ويمنع نسيان الصلاحيات أو حدوث أخطاء إملائية بالصلاحيات.",
    keyPoints: [
      "قالب نموذجي غني بالصلاحيات والمجموعات المعيارية للقسم.",
      "يجب إبقاء القالب معطلاً (Disabled Account) لسلامة وسد الثغرات.",
      "يسرع التثبيت بنسبة 90% ويحد من الأخطاء البشرية."
    ]
  },
  {
    id: 7,
    lectureId: 4,
    question: "قارن بالتفصيل بين عملية الانضمام المتصل العادي (Online Domain Join) والانضمام غير المتصل (Offline Domain Join) بإستخدام djoin.exe في بيئات Windows Server وخادم المجال.",
    answer: "الانضمام المتصل (Online Join) يتطلب اتصالا مباشرا وحيا مع الـ Domain Controller والـ DNS بالشبكة أثناء كتابة الأمر وإعادة التشغيل. بينما الانضمام غير المتصل (Offline Join) يسمح بتهيئة وضم جهاز للمجال دون وجود أي اتصال مادي أو لاسلكي مع الـ Domain Controller لحظة البناء. يتم ذلك عبر خطوتين رئيسيتين:\n1. على متحكم النطاق: يولد المسؤول ملف تعيين وبناء مشفر باستخدام أداة دوجوين djoin.exe وحجزه مسبقاً.\n2. على جهة العميل: يُنقل الملف للجهاز المستهدف محلياً (باستخدام فلاشة أو شبكة معزولة) ويتم حقنه بالأوامر وتوجيهه لمجلد النظام (%SystemRoot%). وبمجرد توفر الشبكة لاحقاً، يتعرف الجهاز تلقائياً على هويته للدومين.",
    keyPoints: [
      "Online Join: يحتم وجود كبل حي وتواصل لحظي مع متحكم النطاق.",
      "Offline Join: وسيلة ممتازة لربط الحواسيب بالفروع البعيدة بشكل مسبق.",
      "استخدام ملف تهيئة خارجي وسيط (Metadata File) وحقنه بأمر djoin."
    ],
    codeExample: ":: على متحكم النطاق لتوليد الحجز مسبقاً:\ndjoin /provision /domain netlab.local /machine ClientPC01 /savefile C:\\provision.txt\n\n:: على جهاز العميل البعيد لحقن الملف دون اتصال:\ndjoin /requestodj /loadfile C:\\provision.txt /windowspath %SystemRoot% /localos"
  },
  {
    id: 8,
    lectureId: 5,
    question: "اشرح ترتيب تطبيق سياسات المجموعة (LSDOU Processing Order) في نظام ويندوز لتعديل وتحقيق الأمان، وماذا يحدث لو تعارضت سياسة مطبقة على مستوى الدومين مع سياسة أخرى على مستوى الوحدة التنظيمية (OU)؟",
    answer: "يتم تطبيق سياسات المجموعة بترتيب تدرجي دقيق هو: 1. المحلية (Local GPO)، 2. الموقع (Site GPOs)، 3. المجال أو الدومين (Domain GPOs)، 4. الوحدة التنظيمية (OU GPOs) من الكبرى إلى الفرعية الصغرى. تكمن سيادة القوانين في أن 'الكاتب المتأخر يمسح الأصلي' (Last Writer Wins)، أي أن السياسة التي يُطبق أخيراً هي التي تسود وتطمس أي تضارب مسبق. بناءً على ذلك، لو تم تفعيل سياسة على مستوى الدومين (مثل منع الخلفيات الحمراء) وتفعيل العكس على مستوى حاوية الـ OU (السماح بالخلفية الحمراء)، فإن سياسة الـ OU ستفوز وتُعطى الأولوية وتتسيد لأنها تطبق بالخاتمة.",
    keyPoints: [
      "الترتيب التصاعدي الأساسي: Local ثم Site ثم Domain ثم OU.",
      "القاعدة الحاكمة هي (الكاتب المتأخر يتفوق على الأسبق).",
      "يمكن كسر هذه الوراثة باستخدام ميزة فرض السياسة (Enforced) لحماية قرارات الإدارة العليا."
    ],
    codeExample: "gpupdate /force"
  },
  {
    id: 9,
    lectureId: 7,
    question: "ما هي خطوات ترخيص خادم DHCP في الدومين (DHCP Authorization)، ولماذا يُعد ذلك ميزة أمنية بالغة الحرج لحماية شبكة مختبر إدارة النظم؟",
    answer: "عملية الترخيص (Authorization) هي خطوة إلزامية في خوادم ويندوز سيرفر تتم في الـ Active Directory تمنح الخادم الإذن بالعمل وتوزيع عناوين الآي بي بالشبكة. تكمن أهمية هذه الخطوة في حظر ومنع ظهور 'خوادم DHCP المتطفلة أو العشوائية' (Rogue DHCP Servers)، وهي أجهزة يربطها موظفون أو مخترقون بالشبكة (مثل راوترات منزلية) تقوم بتوزيع عناوين عشوائية وبوابات مرور وهمية تسبب شلل حزم البيانات أو اعتراض تصفح الموظفين وجرهم لانهيار الاتصال. بمجرد إقلاع أي ويندوز سيرفر DHCP غير مرخص، يقوم بفحص المجال، فإن وجد نفسه غير مسجل بالدليل النشط يوقف خدماته ذاتياً فوراً لمنع حدوث التضارب.",
    keyPoints: [
      "خطوة تسجيل الخادم في بنية الـ Active Directory لإعطائه الصلاحية.",
      "مكافحة ظهور خوادم DHCP Rogue العشوائية والمخربة.",
      "السيرفر غير المرخص يغلق نفسه بنفسه تلقائياً فور اكتشاف عدم توثيقه."
    ]
  },
  {
    id: 10,
    lectureId: 7,
    question: "قارن بين بروتوكول SLAAC وعنونة Stateful DHCPv6 في بروتوكول الإنترنت الإصدار السادس IPv6 من حيث الحوكمة وتتبع السيرفرات.",
    answer: "تقنية SLAAC (Stateless Address Autoconfiguration) تتيح للعميل تكوين عنوان IPv6 الخاص به ذاتياً كلياً باستخدام إرشادات الراوتر الموجه المحلي ودمجها مع الماك أدرس الخاص به دون وجود خادم DHCP طرفي، مما يتيح له الاتصال بلحظات لكن دون أي حوكمة إدارية مركزية. أما وضع Stateful DHCPv6 فيحاكي عمل الـ DHCP القديم، حيث لا يحق للعميل تخمين أي قيمة، بل يتواصل إجبارياً مع خادم DHCPv6 ليسحب منه تفاصيل العنوان والـ DNS كاملة ويتم توثيقه والإبقاء على كشوفات الحيازة مركزياً مما يناسب الرقابة والمصارف والمنشآت الأمنية الحيوية.",
    keyPoints: [
      "SLAAC: بناء تلقائي حر وسريع بدون خادم، مثالي لإنترنت الأشياء (IoT).",
      "Stateful DHCPv6: حكم مركزي شامل وتأجير دقيق وتسجيل تام للعملاء بالخادم."
    ]
  },
  {
    id: 11,
    lectureId: 8,
    question: "عند تشغيل العميل لخلفيات DORA Handshake بالتواصل مع الـ DHCP، اشرح بالتفصيل ما يحدث بالخطوة الثالثة Request والخطوة الرابعة Acknowledge وما أهميتها في تجنب صراعات تحديد العناوين بالشبكة؟",
    answer: "في الخطوة الثالثة Request، يقوم العميل بعد استقبال عروض متعددة ببث رسالة بث عام (Broadcast Request) يخبر فيها الشبكة بأنه اختار عرض سيرفر محدد، ويشكر السيرفرات الأخرى على عروضها لتطلق حجز العناوين التي وفروها له. في الخطوة الرابعة Acknowledge (ACK)، يرسل السيرفر الفائز المصادقة الفنية النهائية محتوية فترة العقد وتلميحات البوابة وخلفيات الترجمة، ويقوم بتوثيق عقد الإيجار داخل قاعدة بياناته، ليقوم العميل بعدها بإطلاق فحص ARP للتأكد من خلو محيطه من وجود تضارب عتادي قبل تعيين الآي بي للبطاقة.",
    keyPoints: [
      "الـ Request يُرسل كبث عام (Broadcast) لإعلام جميع الموزعين بالقرار النهائي بصمت.",
      "الـ ACK هو عقد التوثيق الختامي والتسجيل بقواعد بيانات الخادم.",
      "يقوم الكارت بعد الاستلام بإشهار ARP للتصدي النهائي للتداخل بالبسيطة."
    ]
  },
  {
    id: 12,
    lectureId: 8,
    question: "كيف تعمل ميزة استمرارية الخدمة والجاهزية العالية للنطاق (DHCP Failover) في Windows Server وما الفرق الفني بين نمطي Hot Standby و Load Balance؟",
    answer: "ميزة DHCP Failover تضمن استمرار عمل الخدمات وتوزيع العناوين في حلول انقطاع أو تدمير أحد السيرفرات عن طريق ربط خادمي DHCP معاً ومزامنة بيانات عقود الإيجار والعملاء بشكل متواصل بلحظي.\nفي نمط Load Balance (توازن الأحمال): يعمل السيرفران معاً بآن واحد لتوزيع وإدارة العناوين في نفس الوقت بنسبة توافقية مرنة (افتراضياً 50% لكل منهما) لتخفيف ضغط الاستدعاء بالمعامل والشبكات الكبيرة.\nفي نمط Hot Standby (الاستعداد الساخن): يعمل سيرفر واحد بنشاط كامل 100% بينما يستقر الخادم الشريك في وضع خامل ومراقب (Active/Passive)، بحيث لا يتدخل الشريك إلا إذا سقط السيرفر المضيف بالكامل بعد فقدان الاتصال، ويحتفظ بنسبة أمان بسيطة من العناوين (غالباً 5%) تسمى MCLT لتمشية الطوارئ.",
    keyPoints: [
      "مزامنة فورية حية لقاعدة البيانات دون الاعتماد على مجموعات تخزين معقدة.",
      "Load Balance: كلا السيرفرين active ويتقاسمان توزيع العناوين لتخفيف العبء.",
      "Hot Standby: سيرفر رئيسي نشط، وسيرفر احتياطي صامت يثور فور انهيار الأول."
    ]
  }
];

