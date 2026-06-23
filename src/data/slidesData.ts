import { lecture1Slides } from "./lectures/lecture1";
import { lecture2Slides } from "./lectures/lecture2";
import { lecture3Slides } from "./lectures/lecture3";
import { lecture4Slides } from "./lectures/lecture4";
import { lecture5Slides } from "./lectures/lecture5";
import { lecture7Slides } from "./lectures/lecture7";
import { lecture8Slides } from "./lectures/lecture8";

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
  ...lecture1Slides,
  ...lecture2Slides,
  ...lecture3Slides,
  ...lecture4Slides,
  ...lecture5Slides,
  ...lecture7Slides,
  ...lecture8Slides
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

