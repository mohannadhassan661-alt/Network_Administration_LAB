import { Slide } from "../slidesData";

export const lecture7Slides: Slide[] = [
  {
    id: 82,
    lectureId: 7,
    titleEn: "Network Administration Infrastructure - Lecture 7: DHCP",
    titleAr: "إدارة وبنى الشبكات التحتية - المحاضرة السابعة: بروتوكول التهيئة الديناميكية للمنافذ (DHCP)",
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
    id: 83,
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
    id: 84,
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
    id: 85,
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
    id: 86,
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
      " - موازنة وضبط المدد الزمنية للتأجير: البيئات الديناميكية شديدة الدوران (مثل مقاهي الإنترنت أو المطارات العامة) تحتاج لمهل تأجير قصيرة جداً (بالساعات) لكي لا تنفد العناوين في الخزان ويصاب القادمون الجدد بالشلل. المكاتب والمباني الثابتة (مثل كليات الجامعة والوزارات) تفضل مهلاً طويلة تجنباً لإغراق ومجهود معالجات السيرفر.",
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
    id: 87,
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
    id: 88,
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
    id: 89,
    lectureId: 7,
    titleEn: "IPv6 Architecture, SLAAC & Dynamic Domain Setup",
    titleAr: "بنية الجاهزية للجيل السادس IPv6 وتطبيق النطاقات الفائقة للخدمة بالسيرفر",
    contentEn: [
      "SLAAC vs. DHCPv6 (The Three Allocation Modes):",
      " 1. SLAAC: Client autogenerates temporary global IP based on local routing advertisements and mathematical MAC calculations (APIPA-equivalent in terms of auto-management).",
      " 2. Stateless DHCPv6: Client gets basic network IDs from router advertisements, but contacts DHCPv6 purely for DNS/Suffix metadata.",
      " 3. Stateful DHCPv6: Standard mode. Client fetches all configuration metrics directly from the DHCPv6 server.",
      "Scope and Settings (Preferences & Loopback):",
      " - Precedence Preference: Defines which DHCPv6 server has highest authority to answer clients. Lower numbers possess higher priority! (0 responds faster than 1).",
      " - Loopback Identifier: The self-pointing address in IPv6 is '::1' (equivalent to '127.0.0.1' on IPv4).",
      "Command Diagnostics:",
      " - ipconfig /release & /renew: Survives network adapter refreshes and forces complete renegotiation cycle safely."
    ],
    contentAr: [
      "آلية SLAAC مقابل DHCPv6 (ثلاثة أنماط للتوزيع):",
      " 1. آلية SLAAC: توليد ذاتي مستمر للأجهزة بالاعتماد على راوتر الاتصالات المباشر عبر معادلات كرت الشبكة MAC دون ملامسة سيرفر (شبيهة جداً بالـ APIPA للجيل الرابع).",
      " 2. النظام عديم الحالة (Stateless): يستمد الجهاز الآي بي الرئيسي من راوتر المخرجات، ويتجه لخادم DHCPv6 فقط لسحب عناوين الـ DNS ومقاييس الحزمة.",
      " 3. النظام شامل الحالة والسيطرة (Stateful): المنهج الكلاسيكي الموثوق؛ يتوجه العميل كلياً لخادم الـ DHCPv6 ويستدعي كامل بياناته ليتثبت فيها.",
      "محددات ضبط النطاق والأولويات (Preferences & Loopback):",
      " - معيار الأفضلية (Preference): يحدد الصلاحية الاستجابة بين خوادم الـ DHCPv6 المتعددة. المعيار الذهبي: الرقم الأقل هو الأكثر أولوية! (سيرفر بقيمة 0 يجيب أسرع من سيرفر بقيمة 1).",
      " - عنوان فحص الاتصال الذاتي (Loopback): المقابل لـ 127.0.0.1 في بنى الجيل السادس هو '::1' لفحص سلامة الكارت البنيوي.",
      "التحليلات والموجه الإجرائي CMD:",
      " - أوامر ipconfig /release و ipconfig /renew تجدد وتفصل العقد التلقائي برحلة برمجية آمنة في الخلفية."
    ],
    explanation: "يدمج هذا السلايد بشكل رائع كامل معمارية الـ IPv6 وتقنيات الـ SLAAC والـ Stateful والـ Stateless التوزيعية، بالإضافة لأولويات الـ Preference وطريقة محاكاة الـ Loopback باستخدام الاختصار ::1 بديل 127.0.0.1 الكلاسيكي، ليصبح لدينا بالضبط 8 سلايدات كاملة ومتكاملة للمحاضرة السابعة.",
    keyConcepts: ["IPv6 128-bit structure", "Stateless vs Stateful IPv6", "Preference scaling metric (0 > 1)", "Loopback comparison (::1 vs 127.0.0.1)"],
    technicalTips: [
      "إذا تمت حيازة آي بي به عنوان ::1 فاعلم أنه حلقة الاتصال المحلية التي يمكنك الـ Ping عليها للتأكد من سلامة كبلات وجهاز العيون الرقمي الخاص بك."
    ]
  }
];
