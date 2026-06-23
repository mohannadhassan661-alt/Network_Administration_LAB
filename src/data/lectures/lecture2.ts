import { Slide } from "../slidesData";

export const lecture2Slides: Slide[] = [
  {
    id: 8,
    lectureId: 2,
    titleEn: "Network Administration - Lecture 2: Install Active Directory",
    titleAr: "إدارة الشبكات - المحاضرة الثانية: تثبيت الدليل النشط",
    contentEn: [
      "Network Administration",
      "LECTURE 2: INSTALL ACTIVE DIRECTORY",
      "DONE BY:",
      "ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "إدارة الشبكات",
      "المحاضرة الثانية: تثبيت الدليل النشط (Active Directory)",
      "إعداد وتقديم:",
      "المهندس جوهر جمال"
    ],
    explanation: "هذه هي المحاضرة الثانية من الجانب العملي لمختبر إدارة الشبكات، بقيادة المهندس جوهر جمال. بعد التعرف على المفاهيم المبدئية والتراخيص، ننتقل الآن إلى إحدى أهم ركائز المادة العملية وهي كيفية تثبيت الدليل النشط (Active Directory) بالكامل وتهيئة مخدم الدومين (Domain Controller) في بيئة ويندوز سيرفر.",
    keyConcepts: ["Network Administration", "Active Directory Install", "Lecture 2 Presentation"],
    technicalTips: [
      "تعد هذه المحاضرة حجر الزاوية للمهندس العملي، فجميع الخدمات اللاحقة في هذا المختبر (من إدارة مستخدمين، مشاركة موارد، وتطبيق سياسات GPO) تعتمد على نجاح بناء الدليل النشط وجودة تهيئته."
    ]
  },
  {
    id: 9,
    lectureId: 2,
    titleEn: "Verifying The File System",
    titleAr: "التحقق من نظام الملفات",
    contentEn: [
      "When you’re planning your Active Directory deployment, the file system that the operating system uses is an important concern for two reasons:",
      "1. The file system can provide the ultimate level of security for all the information stored on the server itself.",
      "2. It is responsible for managing and tracking all of this data.",
      "The Windows Server 2019 platform supports three file systems:",
      "1. File Allocation Table 32 (FAT32).",
      "2. Windows NT File System (NTFS).",
      "3. Resilient File System (ReFS).",
      "The Active Directory data store must reside on an NTFS partition."
    ],
    contentAr: [
      "عند التخطيط لتثبيت ونشر الدليل النشط (Active Directory)، فإن نظام الملفات الذي يستخدمه نظام التشغيل يعد أمراً بالغ الأهمية لسببين:",
      "1. يتيح نظام الملفات توفير أعلى وأكمل مستوى من الأمان والحماية لجميع المعلومات المخزنة على الخادم نفسه.",
      "2. نظام الملفات هو المسؤول عن إدارة هذه البيانات وتتبعها بشكل كامل.",
      "يدعم نظام التشغيل ويندوز سيرفر 2019 ثلاثة أنظمة ملفات رئيسية:",
      "1. جدول تخصيص الملفات 32 (FAT32).",
      "2. نظام ملفات ويندوز إن تي (NTFS).",
      "3. نظام الملفات المرن (ReFS).",
      "يجب أن يقع ويُخزن مستودع بيانات الدليل النشط (Active Directory Data Store) على قسم تمت تهيئته بنظام NTFS حصراً."
    ],
    explanation: "يناقش هذا السلايد واحداً من الشروط الإجبارية لتنصيب الدليل النشط وهو اختيار نظام الملفات. لا يسمح نظام التشغيل بتخزين قاعدة بيانات ومكونات الـ Active Directory (المتمثلة في مجلد NTDS ومجلد السياسات SYSVOL) على بارتشنات قديمة تعتمد FAT32 لافتقارها إلى جداول الأمان وسماحيات الولوج (ACLs) وصلاحيات التشفير والتحجيم الضخم.",
    keyConcepts: ["File System Planning", "FAT32 vs NTFS vs ReFS", "Active Directory Data Store Requirements"],
    technicalTips: [
      "يقصد بـ NTFS نظام ملفات التكنولوجيا الجديدة لني ميكروسوفت وهو إجباري لقسم السيرفر. بينما يعتبر ReFS إصداراً أحدث وأكثر مرونة لاستعادة البيانات وتخزين سعات الهارد ديسك الضخمة في مراكز البيانات ولكنه غير كاف لوحده لتخزين ملفات الدليل المباشرة دون تهيئة NTFS مرافقة."
    ]
  },
  {
    id: 10,
    lectureId: 2,
    titleEn: "Viewing The Disk Configurations",
    titleAr: "عرض تكوينات وإعدادات القرص",
    contentEn: [
      "1. Right-click on the Start button and then choose Computer Management.",
      "2. Under Storage, click Disk Management.",
      "3. The Disk Management program shows you the logical and physical disks that are currently configured on your system."
    ],
    contentAr: [
      "1. انقر بزر الماوس الأيمن على زر البداية (Start) ثم اختر إدارة الكمبيوتر (Computer Management).",
      "2. تحت قسم التخزين (Storage)، انقر فوق إدارة الأقراص (Disk Management).",
      "3. يستعرض لك برنامج إدارة الأقراص جميع الأقراص المنطقية والفيزيائية المهيأة والمكوّنة حالياً في نطاق سيرفرك."
    ],
    explanation: "لكي نتأكد من تهيئة ونموذج الأقراص الصلبة لدينا ومطابقتها للشروط الفنية (كتهيئة NTFS ومعاينة السعة وحالة المساحات)، نأخذ خطوة فحص الأقراص عتادياً وبرمجياً عبر لوحة الأقراص المدمجة بنظام إدارته اليدوية.",
    keyConcepts: ["Computer Management", "Disk Management Dashboard", "Logical & Physical Disks"],
    technicalTips: [
      "تعتبر أداة Disk Management المنقذ السريع للمدير لمشاهدة كافة السعة المادية والتأكد من عدم وجود أقراص مجهولة وغير معرّفة (Unallocated Space) متبقية بلا تخصيص ومتابعة الحالة الصحية (Health Status) للأقراص."
    ]
  },
  {
    id: 11,
    lectureId: 2,
    titleEn: "Verifying Network Connectivity",
    titleAr: "التحقق من الاتصال الشبكي",
    contentEn: [
      "Although a Windows Server 2019 computer can be used by itself without connecting to a network, you will not harness much of the potential of the operating system without network connectivity.",
      "Because the fundamental purpose of a network operating system is to provide resources to users, you must verify network connectivity."
    ],
    contentAr: [
      "على الرغم من إمكانية استخدام جهاز خادم Windows Server 2019 بشكل مستقل وبمفرده دون ربطه بالشبكة، إلا أنك لن تتمكن من استثمار واستغلال القدرات والميزات الفائقة لنظام التشغيل هذا بدون توفر اتصال شبكي فعال.",
      "وبما أن الغرض والهدف الأساسي لنظام تشغيل الشبكة (NOS) هو تزويد الموارد للعملاء والمستخدمين وتوفير الوصول الفوري إليها، فإنه يتحتم عليك التحقق التام والمسبق من نوع الروابط والاتصال الشبكي للسيرفر."
    ],
    explanation: "في بيئة الأعمال، الخادم لا يعمل كجزيرة معزولة. إن فائدة السيرفر وخدماته (مثل DHCP, DNS, AD DS) تتأتى فقط من تواصله مع بقية المخدمات وأجهزة الموظفين وتسهيل الولوج للملفات والموارد المشتركة عبر الأسلاك والمفاتيح الشبكية.",
    keyConcepts: ["Network-Operating System (NOS)", "Resource Provisioning", "Connectivity Verification"],
    technicalTips: [
      "أي خلل في الاتصال الشبكي مع بداية تهيئة الدومين يعني حدوث فشل حتمي في الاتصال وحظر تواصل كروت المخدمات الإضافية اللاحقة بالشبكة."
    ]
  },
  {
    id: 12,
    lectureId: 2,
    titleEn: "Verifying Network Connectivity - Basic Connectivity Tests",
    titleAr: "التحقق من الاتصال الشبكي - اختبارات الاتصال الأساسية",
    contentEn: [
      "Network Adapter: At least one network adapter should be installed and properly configured on your server. A quick way to verify that a network adapter is properly installed is to use the Computer Management administrative tool. Under Device Manager, Network Adapters branch, you should have at least one network adapter listed.",
      "TCP/IP: Make sure that TCP/IP is installed, configured, and enabled on any necessary network adapters. The server should also be given a valid IP address and subnet mask.",
      "LAN/Client Access."
    ],
    contentAr: [
      "بطاقة الشبكة (Network Adapter): يجب تثبيت محول شبكة واحد على الأقل وإعداده وضبطه بشكل سليم على الخادم. للتحقق السريع من كون محول الشبكة مثبتاً بشكل صحيح، نستخدم أداة إدارة الكمبيوتر (Computer Management) وتحت فرع إدارة الأجهزة (Device Manager)، يجب إدراج بطاقة شبكة واحدة نشطة كحد أدنى في فرع محولات الشبكة.",
      "بروتوكول TCP/IP: تأكد من تنصيب بروتوكول TCP/IP وضبط إعدادته اللائقة وتفعيله على المحولات اللازمة. كما يجب تعيين وتخصيص عنوان IP صالح وقناع شبكة فرعية (Subnet Mask) متطابق للخادم.",
      "وصول الشبكة المحلية والعملاء (LAN/Client Access)."
    ],
    explanation: "يتناول هذا السلايد المتطلبات العتادية والبرمجية للشبكة قبيل إطلاق السيرفر. نتحقق أولاً عتادياً من وجود كارت شبكة فيزيائي أو افتراضي معرف بالكامل (Device Status OK) وخال من المثلثات الصفراء التحذيرية، ومن ثم برمجياً بتثبيت وتفعيل بروتوكول TCP/IP وإدخال آي بي يدوي عوض السحب العشوائي للأرقام.",
    keyConcepts: ["Device Manager Verification", "TCP/IP Protocol Suite", "IP Address Setup"],
    technicalTips: [
      "تحذر ممارسات مايكروسوفت دائماً من تعيين آي بي ديناميكي (DHCP IP) للسيرفر المضيف للـ Active Directory؛ فالعنوان المتذبذب المتغير قد يعزل السيرفر عن الشبكة حال انتهاء عقد السحب (Lease Time)، وبالتالي يجب تنصيب عنوان ثابت (Static IP)."
    ]
  },
  {
    id: 13,
    lectureId: 2,
    titleEn: "Verifying Network Connectivity - TOOLS AND TECHNIQUES",
    titleAr: "التحقق من الاتصال الشبكي - أدوات وتقنيات فحص الشبكة",
    contentEn: [
      "Using the ipconfig Utility. By typing ipconfig/all at the command prompt, you can view information about the TCP/IP settings of a computer.",
      "Using the Ping Command. The ping command was designed to test connectivity to other computers. You can use the command simply by typing ping and then an IP address or hostname at the command line.",
      "Using the TraceRT Command. The TraceRT command works just like the ping command except that the TraceRT command shows you every hop along the way. So if one router or switch is down, the TraceRT command will show you where the trace stops."
    ],
    contentAr: [
      "استخدام أداة ipconfig: عبر كتابة الأمر 'ipconfig/all' في موجه الأوامر (Command Prompt)، يتاح لك مراجعة وفحص معلومات تفصيلية ودقيقة لكافة إعدادات بروتوكول TCP/IP الجارية والسارية على جهازك.",
      "استخدام أمر الفحص Ping: صُمم أمر الفحص (ping) خصيصاً للقضاء على الشك في وجود تواصل نشط مع الأجهزة الأخرى. يُمكّنك استخدامه بكل بساطة بكتابة كلمة ping متبوعةً بعنوان الآي بي (IP Address) أو اسم المضيف المستهدف.",
      "استخدام أمر تتبع المسار TraceRT: يعمل أمر (TraceRT) بآلية مطابقة لأمر ping، ولكنه يستعرض إضافياً ويُبين لك مسارات ومعلومات كل قفزة (Hop)، راوتر وموزع، يقطعها الطرد بالمسار. فإذا تعطل راوتر أو موزع، سيكشف لك الأمر أين توقف الاتصال بالتحديد."
    ],
    explanation: "يستعرض هذا السلايد الأدوات والمهارات الفنية الأساسية التي يستخدمها مهندس ومسؤول الشبكات لاختبار البنية التحتية والتحقق من صحة الربط التام واستكشاف أخطبوط الاختناقات ومشاكل الانقطاعات عن السيرفر.",
    keyConcepts: ["ipconfig CMD Command", "Ping Utility Diagnostics", "TraceRT Route Analysis"],
    technicalTips: [
      "إذا أظهرت أداة ipconfig عنواناً يبدأ بالرقم 169.254.x.x، فهذا يعني فشل بطاقة الشبكة في الحصول على IP محلي من الدومين أو خدمة DHCP وقامت بما يسمى الإسناد التلقائي (APIPA)، وهو مؤشر خطير لعدم وجود ربط فعلي."
    ]
  },
  {
    id: 14,
    lectureId: 2,
    titleEn: "Roles And Features",
    titleAr: "الأدوار والميزات",
    contentEn: [
      "A role is just what the name implies: the installation of a particular role onto a server defines that server's role in the network.",
      "A role gives a server some purpose in life.",
      "A feature, on the other hand, is more of a subset of functions that you can install onto a server.",
      "Features can complement particular roles or stand on their own.",
    ],
    contentAr: [
      "دور الخادم (Role): هو تماماً كما يوحي به الاسم؛ حيث إن تثبيت دور برمجّي معين على المخدم يحدد وظيفته ومهمته وغاياته وصلاحياته الرئيسية ضمن خارطة الشبكة.",
      "الدور (Role) يمنح السيرفر هدفاً ومقوماً فاعلاً لوجوده الفني في المنشأة لخدمة العملاء.",
      "الميزة (Feature): من ناحية أخرى، هي أقرب لحزم من الوظائف الثانوية أو المساعدة والمكملة التي يمكن تنصيبها وتثبيتها على السيرفر.",
      "تعمل الميزات (Features) كمكونات برمجية متممة ومساندة لأدوار الخوادم، أو يمكنها العمل والنشاط بشكل مستقل تماماً."
    ],
    explanation: "في هذا السيرفر، نفرق بدقة بين الأدوار والمميزات. الدور (যেমন AD DS, DNS Server, DHCP) يحول الخادم بأكمله ليكون مخدم أسماء أو مخدم دليل، أي يحدد البنية الأساسية لنوعه. بينما الميزة (مثل Windows Server Backup أو .NET FrameWork) تقدم ميزات فرعية مساندة للأمن والأداء العام للخادم.",
    keyConcepts: ["Windows Server Roles definition", "Windows Server Features definition", "Sizer Planning"],
    technicalTips: [
      "عجل بفرز وتوزيع الأدوار بدقة على مخدمات متنوعة وعدم دمج عدد كبير من الأدوار الحساسة في آلة واحدة فيزياوية لضمان الأمن وعدم انهيار المخدم بالكامل للـ Single Point of Failure."
    ]
  },
  {
    id: 15,
    lectureId: 2,
    titleEn: "Active Directory",
    titleAr: "الدليل النشط",
    contentEn: [
      "Active Directory (AD) is a directory service that serves as a kind of database, storing and centralizing various types of information about your organization.",
      "User accounts, computer accounts, certificates, policies, and even file replication are all things that you can find hooked into AD.",
      "Domain Controller (DC) is the server that hosting Active Directory. It manages and controls the directory information."
    ],
    contentAr: [
      "الدليل النشط (Active Directory): هو عبارة عن خدمة دليل فائقة تخدم في دمج وتخزين قاعدة بيانات برمجية تنظيمية تسود بحفظ وتنظيم وتجميع وتوحيد شتى أنواع البيانات والأصول والسياسات الخاصة بمؤسستك.",
      "إن حسابات المستخدمين، حسابات الأجهزة والكمبيوترات، الشهادات الرقمية، السياسات الأمنية المركبة، وتوافق وتزامن الملفات تعد جميعها جزءاً لا يتجزأ من المكونات المرتبطة بالدليل النشط.",
      "متحكم النطاق (Domain Controller - DC): هو السيرفر والجهاز الحقيقي والفعال الذي يسود باستضافة وتشغيل خدمات الدليل النشط ويرأس إدارة وضبط معلومات الدومين كاملاً ويربط العمل بالعملاء."
    ],
    explanation: "يشرح هذا السلايد قلب المادة وعملها الفعلي. الدليل النشط (AD) هو الدماغ المركزي للشبكة. بدلاً من إدارة مئات الأجهزة منفردة (Workgroup)، نجمع كل المعلومات في مستودع هرمي مركزي (Forest -> Tree -> Domain -> OUs -> Leaf Nodes) ونتمكن من السيطرة والإدارة المركزية.",
    keyConcepts: ["Directory Services Concepts", "Database Storage of Objects", "Domain Controller Roles"],
    technicalTips: [
      "بمجرد دمج أي مخدم بالدليل وترقيته لـ DC، لن تتوفر فيه صلاحيات الإدارة المحلية للمستخدمين (Local Users and Groups) بل تنصهر جميعها في إدارة مستخدمي الدليل النشط (Active Directory Users and Computers)."
    ]
  },
  {
    id: 16,
    lectureId: 2,
    titleEn: "Prep Your Domain Controller",
    titleAr: "تحضير وتهيئة كارت متحكم النطاق",
    contentEn: [
      "There are three simple things that need to happen on any server that you plan to turn into a domain controller:",
      "1. Set a static IP address.",
      "2. Set a good hostname.",
      "3. Set the DNS server address."
    ],
    contentAr: [
      "هناك ثلاثة إجراءات وخطوات بسيطة ومحورية يجب إعدادها وتطبيقها مسبقاً على أي مخدم ورابط تخطط لترقيته وتحويله إلى كارت متحكم نطاق (Domain Controller):",
      "1. تخصيص وإدخال عنوان IP ثابت (Static IP) يدوي لبطاقة الشبكة وعزلها عن السحب العشوائي.",
      "2. اختيار واسناد اسم مضيف (Computer Name / Hostname) مناسب وجيد ومعبر للكمبيوتر.",
      "3. تعيين وضبط عنوان مخدم أسماء النطاقات (DNS Server Address) بدقة متطابقة لضمان نجاح العقد والضم."
    ],
    explanation: "في خطوة التحضير الفني لمتحكم النطاق، نقوم بتنفيذ الشروط المسبقة الثلاثة: إعداد IP ثابت لضمان أن يجد العملاء خادم الدومين دائماً على نفس العنوان، واختيار اسم واضح ومحدد للسيرفر ليكون هو اسم الجهاز المضيف في السجلات، وإعداد عنوان الـ DNS الذي سيبحث عنه المخدم نفسه للإقلاع أو التسجيل.",
    keyConcepts: ["Static IP Manual configuration", "DNS Resolution Setup", "Server Renaming Rules"],
    technicalTips: [
      "يعتبر الـ DNS رفيقاً وتوأماً للدليل النشط؛ حيث لا يمكن لخدمة الـ Active Directory العمل والنشاط في النطاق كليا دون توفر ركائز فحص وبحث أسماء الـ DNS، لذا يطلب تخصيص عنوانه كخطوة Post-Install إجبارية وعينة أولى."
    ]
  },
  {
    id: 17,
    lectureId: 2,
    titleEn: "Understanding Domain And Forest Functionality",
    titleAr: "فهم المستويات الوظيفية للمجال والغابة",
    contentEn: [
      "Windows Server 2019 Active Directory uses a concept called domain and forest functionality. The functional level that you choose during the Active Directory installation determines which features your domain can use."
    ],
    contentAr: [
      "تستخدم خدمة الدليل النشط في نظام التشغيل Windows Server 2019 نظاماً ومفهوماً تقنياً هاماً يسمى مستويات عمل وظيفية للنطاق والغابة (Domain and Forest Functionality). حيث يحدد المستوى الوظيفي الذي تنتقيه وتختاره خلال معالج التثبيت مجموعة الميزات والقدرات والمستويات الأمنية المدعومة والمسموح للمجال باستعمالها وتطبيقها."
    ],
    explanation: "يتطرق هذا السلايد لمفهوم التوافقية الرجعية للأنظمة (Backward Compatibility). تتيح مستويات عمل النطاق والغابة دمج وتوافق السيرفرات بموديلاتها المتعددة في ذات الغابة، مع تحديد الحد الأدنى والأقصى للأنظمة لتمكين وتشغيل الميزات الأمنية المحدثة.",
    keyConcepts: ["Domain Functional Levels (DFL)", "Forest Functional Levels (FFL)", "Backward Compatibility Matrix"],
    technicalTips: [
      "عندما تختار مستوى وظيفياً قديماً، فإنك تكسب التوافق مع الأنظمة القديمة لكنك تحرم الدليل من استغلال الميزات الأمنية والبرمجية الحديثة جداً مثل حمايات مستودعات الباورشيل وتشفير Kerberos الحديث."
    ]
  },
  {
    id: 18,
    lectureId: 2,
    titleEn: "Understanding Domain And Forest Functionality - About The Domain Functional Level",
    titleAr: "فهم المستويات الوظيفية للمجال والغابة - مستويات وظائف النطاق",
    contentEn: [
      "Windows Server 2019 will support the following domain functional levels:",
      "• Windows Server 2008.",
      "• Windows Server 2008 R2.",
      "• Windows Server 2012.",
      "• Windows Server 2012 R2.",
      "• Windows Server 2516.",
      "Which function level you use depends on the domain controllers you have installed on your network.",
      "You can use any version of Windows Server as long as those servers are member servers only. However, You can only use Domain Controllers as low as your function level."
    ],
    contentAr: [
      "يدعم نظام التشغيل ويندوز سيرفر 2019 المستويات الوظيفية التالية للنطاق والمجال (Domain):",
      "• Windows Server 2008",
      "• Windows Server 2008 R2",
      "• Windows Server 2012",
      "• Windows Server 2012 R2",
      "• Windows Server 2016",
      "يعتمد المستوى الوظيفي وتحديده كلياً على فئات وموديلات مخدمات متحكمات النطاق المشتغلة سابقتها والمنصبة حالياً في شبكتك.",
      "إنك مخوّل قانوناً وتقنياً باستخدام أي إصدار وموديل تحبه من أنظمة ويندوز سيرفر كخوادم أعضاء عادية بالدومين (Member Servers). ولكن القيد هو أنه لا يمكنك تشغيل خوادم متحكم بنطاق (Domain Controllers) بموديلات وإصدارات تقل عمرها وعتبتها عن المستوى الوظيفي النشط المختار بالنطاق."
    ],
    explanation: "معيار عمل ومستوى النطاق (Domain Functional Level) يضبط فقط الميزات الأمنية الخاصة بالدومين المعني. لا يوجد قيود على أنظمة تشغيل أجهزة العملاء (مثل ويندوز 10 أو 11) ولا يوجد قيود على السيرفرات الأعضاء بالدومين (Member Servers) كخوادم قواعد البيانات والملفات، بل القيود حصراً تطوق السيرفرات التي تمت ترقيتها لتكون Domain Controllers في النطاق.",
    keyConcepts: ["DFL List", "Domain Controller Compatibility constraints", "Member Server flexibility Layout"],
    technicalTips: [
      "تعد ترقية المستوى الوظيفي للنطاق عملية باتجاه واحد (One-Way) في معظم النسخ؛ أي بمجرد رفع العمل ونطاقه من مستوى 2008 لمستوى 2016 لن تتمكن من التراجع مجدداً، لذا تأكد من عدم وجود خوادم تفقد القدرة على التطابق."
    ]
  },
  {
    id: 19,
    lectureId: 2,
    titleEn: "Understanding Domain And Forest Functionality - About Forest Functionality",
    titleAr: "فهم المستويات الوظيفية للمجال والغابة - مستويات وظائف الغابة",
    contentEn: [
      "Windows Server 2019 forest functionality applies to all of the domains in a forest.",
      "All domains have to be upgraded to Windows Server 2016 before the forest can be upgraded to Windows Server 2016.",
      "There are five levels of forest functionality:",
      "• Windows Server 2008.",
      "• Windows Server 2008 R2.",
      "• Windows Server 2012.",
      "• Windows Server 2012 R2.",
      "• Windows Server 2016."
    ],
    contentAr: [
      "تؤثر وتسري صلاحيات المستوى الوظيفي للغابة (Forest Functionality) في Windows Server 2019 على جميع المجالات والـ Domains المنحدرة والتابعة للغابة بأكملها.",
      "من القواعد العميقة والإلزامية ترقية كافة شبكات ومجالات الغابة المذكورة لنظام التشغيل Windows Server 2016 كحد أدنى، وتحديث مستواها، قبل السماح بترقية ورفع المستوى العام للغابة إلى Windows Server 2016.",
      "تتوفر خمسة مستويات وظيفية مخصصة للغابة تقنياً في ويندوز سيرفر 2019:",
      "• Windows Server 2008",
      "• Windows Server 2008 R2",
      "• Windows Server 2012",
      "• Windows Server 2012 R2",
      "• Windows Server 2016"
    ],
    explanation: "تتحكم المستويات الوظيفية للغابة (FFL) في الميزات والخدمات الكبرى التي تتم على مستوى الغابة بأكملها (مثل بناء الثقة بين الغابات Forest Trusts، ومزامنة أدلة البيانات). القاعدة العامة هي أن المستوى الوظيفي للغابة لا يمكن أن يكون أعلى من المستوى الوظيفي لأي نطاق بداخلها، ويجب ترقية النطاقات أولاً.",
    keyConcepts: ["FFL List", "Forest wide features", "Upgrade Pre-requisites schema"],
    technicalTips: [
      "دائماً في المعامل، نقوم باختيار أعلى مستوى وظيفي متاح (مثل Windows Server 2016) لأن شبكتنا تتكون من سيرفرات ويندوز 2019 أو أحدث، مما يتيح تفعيل أحدث ميزات الأمان."
    ]
  },
  {
    id: 20,
    lectureId: 2,
    titleEn: "Planning The Domain Structure",
    titleAr: "تخطيط وبناء هيكلية المجال",
    contentEn: [
      "Once you have verified the technical configuration of your server for Active Directory, it’s time to verify the Active Directory configuration for your organization. Since the content of this chapter focuses on installing the first domain in your environment, you really need to know only the following information prior to beginning setup:",
      "• The DNS name of the domain.",
      "• The computer name or the NetBIOS name of the server (which will be used by previous versions of Windows to access server resources).",
      "• In which domain function level the domain will operate."
    ],
    contentAr: [
      "حال انتهائك وتثبتك الكامل من تصفير وإعداد المواصفات التقنية لخادمك المخصص للدليل النشط، يحين التوقيت لمطابقة واختيار أنسب هيكل إعداد وتنسيق للدليل للشركة. وبما أن هذا اللقاء يركز أساساً على بناء الدومين والمجال الأول لك بالكامل، فكل ما يطلب منك كخط أساس التحضير وتحديد المعلومات التالية قبيل نقر معالج التنصيب والتعريف المباشر:",
      "• الاسم النصي المعتمد لمجمع أسماء النطاقات (DNS Name) الخاص بالدومين الجديد.",
      "• اسم الكمبيوتر أو الاسم القصير القديم (NetBIOS Name) للخادم (والذي تسنده الأنظمة السابقة للولوج لمقومات وخيرات السيرفر).",
      "• تحديد ومعرفة المستوى الوظيفي (Domain Function Level) المعتمد للعمل للمجال."
    ],
    explanation: "تخطيط اسم المجال هو الخطوة التي لا تقبل الخطأ. اختيار اسم الدومين الداخلي المناسب (مثل ust.local أو corporate.internal) والتحقق من عدم تداخله مع الأسماء الحقيقية للمواقع الخارجية على الإنترنت يمنع حدوث مشاكل تضارب عناوين المضيفين.",
    keyConcepts: ["DNS Name planning", "NetBIOS Legacy naming", "Infrastructure design decisions"],
    technicalTips: [
      "تجنب استخدام الملحق العائلي العام (مثل .com أو .net) للمجال الداخلي إلا إذا كنت تملك هذا الاسم فعلاً في السجلات العامة، ويفضل استخدام ملحقات مخصصة للتثبيتات المغلقة مثل `.local` أو `.lan`."
    ]
  },
  {
    id: 21,
    lectureId: 2,
    titleEn: "Planning The Domain Structure (cont.)",
    titleAr: "تخطيط وبناء هيكلية المجال - تابع",
    contentEn: [
      "However, if you will be installing additional domain controllers in your environment or will be attaching to an existing Active Directory structure, you should also have the following information:",
      "• If this domain controller will join an existing domain, you should know the name of that domain.",
      "• You should know whether the new domain will join an existing tree and, if so, the name of the tree it will join.",
      "• You should know the name of a forest to which this domain will connect (if applicable)."
    ],
    contentAr: [
      "بالمقابل، إن كان الهدف ومخطط العمل يتضمن تنصيب كروت متحكمات دومين إضافية (Additional DCs) بالشبكة أو الدمج بقوالب دليل نشط سائدة وقائمة مسبقاً، فيجب توفير وتحديد البيانات التالية:",
      "• معرفة اسم المجال الحالي المطلوب ضم هذا السيرفر وإقرانه به ككارت متحكم نطاق إضافي.",
      "• تحديد ما إذا كان المجال الجديد سيدخل ويقترن بشجرة دومينات منشأة مسبقاً (Tree)، ومعرفة الاسم الكامل للشجرة المستهدفة.",
      "• تحديد ومعرفة اسم الغابة (Forest Name) المقصودة لتوجيه وربط هذا المجال وتنسيقه بها."
    ],
    explanation: "يوثق هذا السلايد الحالات الأكثر تعقيداً في مشاريع الشركات؛ فإما أن الخادم يساند نطاقاً منشأ مسبقاً لحمل ضغط المزامنة وتأكيد الهوية والحركيات بالشبكة فيكون (Additional Domain Controller)، أو يتم تخصيصه لشجرة جديدة (New Tree) لتنظيم فروع الشركة المتباعدة بمسمياتها.",
    keyConcepts: ["Additional domain controllers (ADC)", "Active Directory Tree Integration", "Global Forest Trust planning"],
    technicalTips: [
      "لربط ومعاينة أي كارت إضافي أو بناء شجرة تابعة، يجب التأكد أولاً من قدرة الخادم على الوصول لخدمة الـ DNS الخاصة بالنطاق الرئيسي وقراءة سجلات الـ SRV الخاصة بلغة الدومين."
    ]
  },
  {
    id: 22,
    lectureId: 2,
    titleEn: "Installing Active Directory",
    titleAr: "تثبيت الدليل النشط",
    contentEn: [
      "Installing Active Directory is an easy and straightforward process as long as you plan adequately and make the necessary decisions beforehand.",
      "There are many ways that you can install Active Directory.",
      "You can install Active Directory by using the Windows Server 2019 installation disk (Install from Media (IFM)), using Server Manager, or using Windows PowerShell."
    ],
    contentAr: [
      "تعدّ عملية تثبيت الدليل النشط مهمة سهلة ومباشرة للغاية، شريطة التخطيط السليم واتخاذ الخيارات الإدارية والهيكلية الصحيحة مسبقاً.",
      "تتوفر طرق وقنوات برمجية متعددة وتنافسية لتنصيب الدليل النشط.",
      "يمكنك القيام بذلك عبر استخدام حزم الإعداد بالأقراص الأصلية (Install from Media / IFM)، أو من خلال لوحة تحكم مدير المخدم (Server Manager GUI)، أو بالاستعانة بسطر أوامر الـ Windows PowerShell."
    ],
    explanation: "تنوع قنوات التثبيت يخدم أهدافاً متباينة؛ فالـ Server Manager يستهدفه المهندسون ذوو الخبرة البسيطة للتثبيت عبر الواجهة البصرية، بينما يتميز الـ PowerShell بقدرته السريعة على التشغيل والتهيئة عن بعد وبأكواد برمجية مختصرة تناسب إصدار السيرفر كور.",
    keyConcepts: ["Deployment Methods", "Install from Media (IFM)", "PowerShell Automated deployment"],
    technicalTips: [
      "خيار التثبيت بالـ IFM يسمح لك بجلب قاعدة بيانات الدليل النشط من ملف ومسار خارجي مخزن على هارد ديسك مثلاً لتنصيب الخادم في فروع نائية ذات اتصال إنترنت ضعيف جداً دون الحاجة لتحميل وتنزيل سابقتها عبر الاتصال البطيء بالشبكة."
    ]
  },
  {
    id: 23,
    lectureId: 2,
    titleEn: "Read-Only Domain Controllers",
    titleAr: "متحكم النطاق للقراءة فقط (RODC)",
    contentEn: [
      "Windows Server 2019 supports another type of domain controller called the read-only domain controller (RODC).",
      "This is a full copy of the Active Directory database without the ability to write to Active Directory.",
      "The RODC gives an organization the ability to install a domain controller in a location (onsite or offsite) where security is a concern."
    ],
    contentAr: [
      "يدعم نظام التشغيل Windows Server 2019 نمطاً ونوعاً مغايراً وهاماً لمتحكمات النطاق يسمى متحكم المجال للقراءة فقط (Read-Only Domain Controller - RODC).",
      "يمثل الـ RODC نسخة وتطابقاً تاماً لقاعدة بيانات الدليل النشط ولكن ميزات التعديل، الحذف، الإضافة، والكتابة فيها تكون معطلة ومحجوبة تماماً في هذه النسخة ولصالح حماية البيانات.",
      "يمنح الـ RODC المؤسسات والشركات مرونة بالغة ومستوى أمان جبار لتنصيب وتنزيل كارت متحكم للنطاق في فروع نائية أو مواقع متباعدة قد تفتقر لغرف مخدمات آمنة ومحصنة وفيزيائياً مكشوفة."
    ],
    explanation: "يقدم الـ RODC مستوى استثنائياً للوقاية الأمنية بالشبكات. فلو فرضنا أن فرع الشركة النائي أو الورشة تعرضت لاقتحام مادي واستولى المهاجم على السيرفر، فإن وجود قاعدة البيانات بوضع القراءة فقط المحدودة والمنزوعة من صلاحيات الكتابة وإسناد كلمات سر المدراء العامين يمنع تسرب الهويات أو السيطرة على الدومين الرئيسي للشركة.",
    keyConcepts: ["RODC Architecture", "One-way database replication", "Branch office security challenges"],
    technicalTips: [
      "بشكل افتراضي، لا يقوم الـ RODC بتخزين أو حفظ (Cache) كلمات مرور الموظفين في النطاق لمنع استخراجها عتادياً، ويقوم بتمرير وفحص طلبات تسجيل الدخول مرئياً ومباشرة تجاه السيرفر الرئيسي عبر الشبكة الواسعة (WAN)."
    ]
  },
  {
    id: 24,
    lectureId: 2,
    titleEn: "Read-Only Domain Controllers (cont.)",
    titleAr: "متحكم النطاق للقراءة فقط - تابع",
    contentEn: [
      "RODCs need to get their Active Directory database from another domain controller. If there are no domain controllers setup yet for a domain, RODCs will not be available (the option will be greyed out).",
      "Implementing an RODC is the same as adding another domain controller to a domain. The installation is exactly the same except that when you get to the screen to choose Domain Controller options, you check the box for RODC."
    ],
    contentAr: [
      "تعتمد كروت الـ RODCs كلياً على التواصل وجلب قاعدة بيانات الدليل النشط الخاصة بها أولياً من كارت متحكم نطاق رئيسي وقابل للكتابة بالشبكة. فإذا لم يكن هناك أي متحكم نطاق اعتباري منصب مسبقاً في شبكتك للمجال، فستبقى نافذة تنصيب الـ RODC معطلة وباللون الرمادي في معالجات التنصيب.",
      "تطابق خطوات وممارسات تنزيل الـ RODC عملية ضم خادم تحكم إضافي تماماً. فلا تختلف خطوات التنصيب البرمجية البتة سوى في رصد شاشة خصائص وميزات متحكم النطاق (Domain Controller Options)، حيث سنقوم بالإشارة ونقر تفعيل المربع الصغير الحصري الخاص بـ (RODC)."
    ],
    explanation: "يؤكد هذا السلايد على حقيقة الترابط الهيكلية؛ فالـ RODC لا قيمة له بمفرده في النطاق الفارغ ولا يمكن تنصيبه أولاً. يجب دوماً توفر مخفف إسناد وكاتب بيانات (Writeable Domain Controller) يتولى قيادة الدومين ليتمكن الـ RODC من قراءة التحديثات منه ومتابعة مسيرة معالج إعداد النطاقات.",
    keyConcepts: ["Writeable DC dependency", "Deployment constraints for RODC", "Option Selection GUI flow"],
    technicalTips: [
      "خلال تهيئة الـ RODC، سيتطلب و يسألك المعالج تحديد حسابات مستخدمين محددين يُسمح بتخزين كلمات مرورهم في الفرع النائي (Password Replication Policy) لتسهيل تسرب وتأكيد الدخول حال انقطاع الكابل والإنترنت الشبكي المؤقت عن السيرفر المركزي."
    ]
  },
  {
    id: 25,
    lectureId: 2,
    titleEn: "The Installation Process",
    titleAr: "عملية التثبيت: الخطوات والمراحل",
    contentEn: [
      "First, we need to add the Active Directory Domain Services (AD DS) role from the Server Manager.",
      "The second step in installing Active Directory is promoting a Windows Server 2019 computer to a domain controller.",
      "The first domain controller in an environment serves as the starting point for the forest, trees, domains, and the operations master roles."
    ],
    contentAr: [
      "أولاً، يتوجب علينا تثبيت وإضافة دور خدمات الدومين والدليل النشط (Active Directory Domain Services - AD DS) كحزمة برمجية من خلال معالج لوحة تحكم مدير المخدم (Server Manager GUI).",
      "المرحلة والخطوة الثانية من التثبيت تتجلى في ترفيع وترقية (Promoting) مخدم نظام Windows Server 2019 إلى درجة ومسمى كارت متحكم نطاق (Domain Controller).",
      "يبسط أول كارت متحكم نطاق يجري تركيبه في بيئة العمل القواعد واللبنات الأساسية لانطلاق وبناء الهياكل الأكبر للغابات، الأشجار، المجالات، ويتولى تلقائياً إدارة الأدوار الأساسية والعمليات الماستر (Operations Master Roles)."
    ],
    explanation: "بناء متحكم الدومين تتم دائماً على مرحلتين منفصلتين: الأولى هي تنزيل الحزمة البرمجية للأدوار (AD DS Role Deployment) والتي تجعل السيرفر يملك مجلدات وأكواد الدليل النشط دون تفعيل أو بناء النطاق، والمرحلة الثانية الحيوية والمسؤولة عن الربط هي ترقية و ترفيع (Promo) السيرفر للنطاق وبناء الغابة وسجلات أسماء النطاق.",
    keyConcepts: ["AD DS Role installation", "Promotion/Promo wizard", "Initial domain master roles assignment"],
    technicalTips: [
      "انتبه لكون عملية تفعيل الـ Promo تتطلب حقوق إدارية وصلاحيات Administrator محلية على الجهاز وتوفر مساحات تخزين كافية لتهيئة ملفات الـ NTDS.dit الحساسة."
    ]
  },
  {
    id: 26,
    lectureId: 2,
    titleEn: "Promoting A Domain Controller",
    titleAr: "ترقية الخادم إلى متحكم نطاق - الجزء الأول",
    contentEn: [
      "1. Install the Active Directory Domain Services by clicking the Add Roles And Features link in Server Manager’s Dashboard view.",
      "2. At the Before You Begin screen, click Next.",
      "3. The Select Installation Type screen will be next. Make sure that the Role-Based radio button is selected and click Next.",
      "4. At the Select Destination Server screen, choose the local machine. Click Next.",
      "5. At the Select Server Roles screen, click the check box for Active Directory Domain Services."
    ],
    contentAr: [
      "1. ابدأ بتثبيت دور خدمات الدليل النشط بنقر الرابط السريع لإضافة الأدوار والميزات (Add Roles and Features) من نافذة لوحة تحكم مدير المخدم.",
      "2. من شاشة التنبيه والملاحظات الأولى (Before You Begin)، قم بنقر زر المتابعة Next.",
      "3. سينقلك المعالج لشاشة انتقاء نوع التثبيت (Select Installation Type). تأكد من اختيار تفعيل الزر الدائري للتثبيت المستند للأدوار والميزات (Role-Based) ثم انقر Next.",
      "4. من شاشة تحديد وجهة ومنصة السيرفر (Select Destination Server)، قم بانتقاء جهاز خادمك الحالي المحلي من جدول التحديد، ثم انقر Next.",
      "5. عند الوصول لشاشة أدوار السيرفر (Select Server Roles)، انقر لتحديد وصح المربع أمام خيار خدمات الدليل النشط (Active Directory Domain Services)."
    ],
    explanation: "يوضح هذا السلايد الخطوات العملية اليدوية لتدشين معالج تثبيت الأدوار. نسير بدقة متطابقة في الخيارات؛ لنحدد أننا ننصب الميزة على السيرفر المركزي الحالي من بركة الخوادم المتصلة (Server Pool).",
    keyConcepts: ["Add Roles & Features GUI Flow", "Role-Based Installation Selection", "Destination Server Targeting"],
    technicalTips: [
      "تأكد دائماً عند شاشة Destination Server أن عنوان الـ IP المعروض في الجدول هو الآي بي الثابت الخاص ببطاقة شبكتك وليس عنواناً عشوائياً مسحوباً تلقائياً للتأكد من المزامنة الصحيحة."
    ]
  },
  {
    id: 27,
    lectureId: 2,
    titleEn: "Promoting A Domain Controller (cont.)",
    titleAr: "ترقية الخادم إلى متحكم نطاق - الجزء الثاني",
    contentEn: [
      "6. After you check the Active Directory Domain Services box, a pop-up menu will appear asking you to install additional features. Click the Add Features button.",
      "7. Click Next.",
      "8. At the Select Features screen, accept the defaults and click Next.",
      "9. Click Next at the information screen.",
      "10. Click the Install button at the Confirmation Installation screen.",
      "11. The Installation Progress screen will show you how the installation is progressing.",
      "12. After the installation is complete, click the Close button."
    ],
    contentAr: [
      "6. بمجرد اختيار وتحديد خدمات الدليل، ستظهر لك نافذة منبثقة تفيدك بحاجة الميزة لخصائص وثوق وتوابع متممة. انقر فوق زر الموافقة على إضافة الميزات (Add Features).",
      "7. انقر على زر المتابعة Next.",
      "8. في شاشة المميزات (Select Features)، وافق على الحزم المحددة تلقائياً دون أي تعديل وانقر Next.",
      "9. تجاوز شاشة العرض الإرشادية والمعرفية للدليل النشط بنقر Next.",
      "10. انقر فوق زر التثبيت والتأكيد (Install) الظاهر بشاشة (Confirmation Installation) لبدء التنزيل الفعلي لملفات الدور.",
      "11. ستستعرض لك الشاشة شريط تقدم تنزيل وتنصيب الملفات للمخدم (Installation Progress).",
      "12. حال اكتمال تحميل وتنزيل الملفات بالكامل، انقر زر الإغلاق (Close) لإنهاء معالج الأدوار الأول بنجاح."
    ],
    explanation: "في هذه المرحلة، يسألك النظام عن إحلال حزم الدعم الإدارية مثل (AD DS Tools) موازياً لعمل السيرفر. نؤكد الخيار بالكامل وندع معالج التحميل يباشر في نقل الملفات الحيوية للقرص الصلب، ثم نغلق النافذة لنشرع في المهمة الثانية والمتمثلة في ترقية السيرفر للعمل كـ DC فعلي عبر تفعيل Promo.",
    keyConcepts: ["Additional Feature bindings", "Deployment progress tracking", "Module packaging assembly"],
    technicalTips: [
      "بعد نقر زر Close، ستشاهد راية تنبيه صفراء في واجهة الـ Server Manager تومض لتذكيرنا بأن التثبيت الأولي قد اكتمل برمجياً، إلا أن الخادم يحتاج الترقية الفعلية Promotion لتشغيل الخدمات."
    ]
  },
  {
    id: 28,
    lectureId: 2,
    titleEn: "Promoting A Domain Controller (cont.) - Setup & Active Forestry",
    titleAr: "ترقية الخادم إلى متحكم نطاق - تكوين الغابة والنطاق",
    contentEn: [
      "13. On the left side window, click the AD DS link.",
      "14. Click the More link next to Configuration Required for Active Directory Domain Services.",
      "15. Under the Post-Deployment Configuration section, click the Promote This Server To A Domain Controller link.",
      "16. At this point, you will configure this domain controller. You are going to install a new domain controller in a new domain in a new forest. At the Deployment Configuration screen, choose the Add A New Forest radio button. You then need to add a root domain name. In this exercise, we will use ust.local. Click Next."
    ],
    contentAr: [
      "13. من النوافذ الجانبية وقائمة الخيارات لمدير المخدم على اليسار، انقر فوق رابط وحقل أداة (AD DS) المحدثة.",
      "14. انقر فوق كلمة ورابط 'المزيد' (More) المقترنة برسالة وتنبيه بدء التكوينات المطلوبة للدليل النشط.",
      "15. تحت تصنيف وبوابات إعدادات ما بعد التنصيب (Post-Deployment Configuration)، انقر الرابط الفعلي لترفيع الخادم لمتحكم نطاق (Promote This Server To A Domain Controller).",
      "16. تبدأ هنا خطوات الترقية والتهيئة الفعلية للغابة. لكوننا ننشئ مجالاً جديداً تماماً ولأول مرة في غابة مستقلة وبكر، فمن شاشة التكوين (Deployment Configuration) سنختار تفعيل الزر الدائري الخاص بإضافة غابة جديدة (Add A New Forest). سنطلب تحديد اسم مميز وناجح للجذر؛ في تمريننا العملي سنقوم بكتابة الاسم: 'ust.local' ثم انقر Next."
    ],
    explanation: "تعتبر هذه الشاشة بمثابة الشوكة والمفصل الإداري والشبكي الأكبر في الدومين. فالزر الدائري المحدد (Add A New Forest) يقرر بأن هذا السيرفر هو الأساس والأب الروحي لأول دومين في غابة أصلية بالكامل باسم النطاق التمهيدي ust.local.",
    keyConcepts: ["Post-Deployment triggers", "Promotion Link Active trigger", "New Forest Deployment Concept"],
    technicalTips: [
      "الملحق المختار `.local` هو النطاق التقليدي المطبق في الدروس والأنظمة النظرية، فهو يؤكد أن الدومين داخلي تماماً وغير متاح ولا يتداخل مع خوادم الدومينات العالمية في سجلات الإنترنت."
    ]
  },
  {
    id: 29,
    lectureId: 2,
    titleEn: "Promoting A Domain Controller (cont.) - Credentials & Parameters Options",
    titleAr: "ترقية الخادم إلى متحكم نطاق - إعدادات النطاق للتثبيت",
    contentEn: [
      "17. At the Domain Controller Options screen, set the following options:",
      "▪ Function levels: Windows Server 2016 (for both).",
      "▪ Verify that the DNS and Global Catalog check boxes are checked.",
      "▪ Recovery Mode Password: P@ssw0rd.",
      "Then Click Next.",
      "18. At the DNS screen, click Next.",
      "19. At the additional options screen, accept the default NetBIOS domain name and click Next.",
      "20. At the Paths screen, accept the default file locations and click Next."
    ],
    contentAr: [
      "17. في شاشة خيارات متحكم النطاق (Domain Controller Options)، سنقوم بتعبئة وتحديد البارامترات المطلوبة كالآتي:",
      "▪ المستويات الوظيفية (Function Levels): حدد نظام Windows Server 2016 لكلا الخيارين (المجال والغابة).",
      "▪ تأكد من تفعيل وصح تظليل مربعات تفعيل خدمتي الـ DNS ومستودع الفهرس الشامل (Global Catalog).",
      "▪ كلمة مرور استرجاع النظام بوضع الحماية والخدمات (DSRM Recovery Password): اكتب الحساب السري الخاص بنا وهو: `P@ssw0rd`.",
      "ثم انقر Next لمتابعة بقية مراحل المعالج.",
      "18. في شاشة خيارات الـ DNS وتأشيراته الإضافية، تخطاها بنقر Next مباشرة دون إضافة.",
      "19. في نافذة الخيارات الإضافية (Additional Options)، وافق على اسم النطاق القصير المقترح تلقائياً (NetBIOS Name) ليكون UST ثم انقر Next.",
      "20. في مرحلة رصد المسارات وحفظ ملفات الدليل (Paths)، وافق على المسارات الافتراضية لقواعد ومجلدات قاعدة البيانات وسجل العمليات وانقر Next لمتابعة العمل."
    ],
    explanation: "في هذه المرحلة الحقلية، نضبط أربع مستويات من التكوينات: تحديد مستوى العمل المتوافق (2016)، وتأكيد تنصيب الـ DNS مع السيرفر ليتعاونا سوياً، وصح تفعيل الـ Global Catalog اللازم لتوحيد البحث، وإدخال كلمة سر استعادة النظام للـ DSRM التي يتم اللجوء إليها فقط في حالات الانهيار التام لإصلاح الدليل النشط أمنياً.",
    keyConcepts: ["DSRM Password concept", "NetBIOS Legacy mapping", "AD Database Paths spacing (NTDS & SYSVOL)"],
    technicalTips: [
      "إن كلمة المرور السحرية المعتمدة هنا في المعامل Pa$$w0rd تفي بمتطلبات كتابة كلمات مرور معقدة تحتوي حروفاً كبيرة وصغيرة وأرقاماً وعلامات خاصة ليتخطاها معالج الفحص بسلام."
    ]
  },
  {
    id: 30,
    lectureId: 2,
    titleEn: "Promoting A Domain Controller (cont.) - Verification, Install & Reboot",
    titleAr: "ترقية الخادم إلى متحكم نطاق - الفحص الكلي والتشغيل",
    contentEn: [
      "21. At the Review Options screen, verify your settings and click Next. At this screen, there is a View Script button. This button allows you to grab a PowerShell script based on the features you have just set up.",
      "22. At the Prerequisites Check screen, click the Install button (as long as there are no errors). Warnings are OK just as long as there are no errors.",
      "23. After the installation completes, the machine will automatically reboot. Log in as the administrator."
    ],
    contentAr: [
      "21. في شاشة مراجعة الإعدادات وفهرس الخيارات (Review Options)، راجع بدقة كافة القيم والمصطلحات التي اعتمدناها، ثم انقر Next. كما تتيح لك الشاشة نقر زر خاص يسمى (View Script) لمعاينة ونسخ كود السكريبت البرمجي التلقائي لمطابقته وتكراره بلغة الـ PowerShell في أي وقت.",
      "22. في شاشة الفحص الأولي واختبار متطلبات الترقية الأساسية (Prerequisites Check)، انقر فوق زر التنصيب الفعلي (Install) لبدء إشعال وتركيب الدومين، طالما أنه لا توجد أخطاء قاتلة وحرجة (التحذيرات باللون الأصفر مسموح بها ومقبولة).",
      "23. فور انتهاء واكتمال تنصيب الدليل النشط بالكامل، سيعمل المورّد تلقائياً على إعادة تشغيل المخدم بالكامل (Automatic Reboot). عند عودة الجهاز للعمل وتسجيل الدخول كمسؤول (Administrator)، ستجد أن حسابك قد ارتقى ليصبح مدير النطاق بالدومين بالكامل."
    ],
    explanation: "تعد شاشة الـ Prerequisites Check هي حارس البوابة قبل الترقية؛ حيث تقوم بفحص متطلبات النظام والأمان والآي بي والـ DNS. إذا نجحت جميع الفحوصات، يُنير زر Install لنقره، وحال اكتمال العمل، يعاد إقلاع السيرفر وتتحول شاشة تسجيل الدخول من المسمى المحلي إلى شكل النطاق: `UST\\Administrator`.",
    keyConcepts: ["PowerShell Deployment Scripting", "Prerequisites verification algorithms", "Final reboot and Domain Lock transition"],
    technicalTips: [
      "يعتبر التحذير الشهير الخاص بـ (DNS Delegation) طبيعياً جداً ويحدث دائماً في بناء أول دومين في الغابة لأنه لا توجد خوادم DNS رئيسية أعلى لتفويض النطاق ust.local، ويتلاشى هذا القلق بمجرد تأسيس خادم الـ DNS المحلي."
    ]
  }
];
