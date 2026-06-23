import { Slide } from "../slidesData";

export const lecture3Slides: Slide[] = [
  {
    id: 31,
    lectureId: 3,
    titleEn: "Lecture 3: AD Users and Computers",
    titleAr: "المحاضرة الثالثة: مستخدمو وأجهزة الدليل النشط (AD Users and Computers)",
    contentEn: [
      "Network Administration",
      "LECTURE 3: AD USERS AND COMPUTERS",
      "DONE BY: ENG. GAWHAR GAMAL"
    ],
    contentAr: [
      "إدارة الشبكات",
      "المحاضرة الثالثة: مستخدمو وأجهزة الدليل النشط",
      "إعداد المهندس: جوهر جمال"
    ],
    explanation: "هذه المحاضرة تغطي الجوانب العملية والنظرية لإدارة حسابات مستخدمي وأجهزة الدليل النشط (Active Directory Users and Computers)، وتصميم الوحدات التنظيمية (OUs)، بالإضافة إلى تفويض التحكم الإداري (Delegation of Control)، واستخدام قوالب المستخدمين لتسريع العمل اليومي لمسؤولي الأنظمة.",
    keyConcepts: ["Active Directory", "Identity Management", "Security Principals"],
    technicalTips: [
      "أداة Active Directory Users and Computers (ADUC) هي الأداة الأساسية لإدارة الهويات والموارد داخل بيئات ويندوز سيرفر."
    ]
  },
  {
    id: 32,
    lectureId: 3,
    titleEn: "Active Directory Overview",
    titleAr: "نظرة عامة على الدليل النشط",
    contentEn: [
      "One of the fundamental design goals for Active Directory is to define a single, centralized repository of users and information resources.",
      "Each domain acts as a logical boundary, and members of the domain share information about the objects within them.",
      "The information stored within Active Directory determines which resources are accessible to which users.",
      "Through the use of permissions that are assigned to Active Directory objects, you can control all aspects of network security."
    ],
    contentAr: [
      "أحد أهداف التصميم الأساسية للدليل النشط (Active Directory) هو تحديد مستودع مركزي واحد وموحد للمستخدمين وموارد المعلومات.",
      "يعمل كل مجال (Domain) كحدود منطقية، ويتشارك أعضاء المجال المعلومات حول الكائنات الموجودة بداخلهم.",
      "المعلومات المخزنة داخل الدليل النشط تحدد الموارد التي يمكن للمستخدمين الوصول إليها.",
      "من خلال استخدام الأذونات المخصصة لكائنات الدليل النشط، يمكنك التحكم في جميع جوانب أمان الشبكة."
    ],
    explanation: "يهدف الدليل النشط إلى إدارة مركزية لجميع موارد الشبكة من مستخدمين وأجهزة ومجلدات مشتركة، مع فرض سياسات أمان موحدة وأذونات دقيقة للتحكم بالوصول.",
    keyConcepts: ["Centralized Repository", "Logical Boundary", "Permissions"],
    technicalTips: [
      "تخزين البيانات بشكل مركزي يسهل من عمليات النسخ الاحتياطي وإدارة الصلاحيات من شاشة واحدة."
    ]
  },
  {
    id: 33,
    lectureId: 3,
    titleEn: "Understanding Security Principals",
    titleAr: "فهم كائنات الأمان (Security Principals)",
    contentEn: [
      "Security principals are Active Directory objects that are assigned security identifiers (SIDs).",
      "An SID is a unique identifier that is used to manage any object to which permissions can be assigned.",
      "Each security principal is automatically assigned a SID when it's created.",
      "Security principals are assigned permissions to perform certain actions and access certain network resources."
    ],
    contentAr: [
      "كائنات الأمان (Security Principals) هي كائنات في الدليل النشط يتم تعيين معرفات أمان (SIDs) لها.",
      "المعرف الأمني (SID) هو معرف فريد يُسحب ويُستخدم لإدارة أي كائن يمكن تعيين أذونات له.",
      "يتم تعيين معرف أمني (SID) تلقائياً لكل كائن أمان عند إنشائه.",
      "يتم تعيين أذونات لكائنات الأمان لتنفيذ إجراءات معينة والوصول إلى موارد شبكة معينة."
    ],
    explanation: "كائن الأمان هو أي عنصر داخل الدومين يمتلك معرف أمني (SID) فريد ويتعامل معه خادم الأمان لمنحه الصلاحيات أو حظره من الوصول.",
    keyConcepts: ["Security Principals", "SIDs", "Access Permissions"],
    technicalTips: [
      "المعرف الأمني (SID) لا يتكرر أبداً داخل النطاق، وهو ما يجعل الأنظمة تميز الكائنات حتى لو تماثلت أسماؤها."
    ]
  },
  {
    id: 34,
    lectureId: 3,
    titleEn: "Understanding Security Principals (cont.)",
    titleAr: "فهم كائنات الأمان: حسابات المستخدمين والمجموعات والأجهزة",
    contentEn: [
      "The following basic types of Active Directory objects serve as security principals:",
      "User Accounts: User accounts identify individual users on your network by including information such as the user’s name and their password.",
      "Groups: There are two main types of groups: security groups and distribution groups. Both types can contain user accounts. System administrators use security groups to ease the management of security permissions. They use distribution groups, on the other hand, solely to send email. Distribution groups are not security principals.",
      "Computer Accounts: Computer accounts identify which client computers are members of particular domains. They use computer accounts to determine whether a computer can join a domain and for authentication purposes.",
      "Note that other objects—such as OUs—do not function as security principals."
    ],
    contentAr: [
      "تعمل الأنواع الأساسية التالية من كائنات الدليل النشط ككائنات أمان:",
      "حسابات المستخدمين (User Accounts): تحدد هوية المستخدمين الأفراد على شبكتك من خلال تضمين معلومات مثل اسم المستخدم وكلمة المرور الخاصة به.",
      "المجموعات (Groups): هناك نوعان رئيسيان للمجموعات: مجموعات الأمان ومجموعات التوزيع. يمكن لكلا النوعين احتواء حسابات مستخدمين. يستخدم مسؤولو النظام مجموعات الأمان لتسهيل إدارة أذونات الأمان، بينما يستخدمون مجموعات التوزيع فقط لإرسال البريد الإلكتروني. مجموعات التوزيع ليست كائنات أمان.",
      "حسابات الكمبيوتر (Computer Accounts): تحدد أجهزة الكمبيوتر العميلة التي تعد أعضاء في مجالات معينة. ويتم استخدامها لتحديد ما إذا كان الكمبيوتر يمكنه الانضمام إلى مجال ولأغراض المصادقة.",
      "ملاحظة: الكائنات الأخرى — مثل الوحدات التنظيمية (OUs) — لا تعمل ككائنات أمان."
    ],
    explanation: "هذا السلايد يقسم كائنات الأمان إلى حسابات مستخدمين، ومجموعات، وحسابات كمبيوتر. وينبه على نقطة مهمة للغاية: الوحدات التنظيمية (OUs) ومجموعات التوزيع لا تعتبر كائنات أمان ولا يمكن منحها أذونات بشكل مباشر.",
    keyConcepts: ["User Accounts", "Groups Classification", "Computer Accounts"],
    technicalTips: [
      "مجموعات التوزيع (Distribution Groups) لا تملك SID وتستخدم فقط للبريد الإلكتروني المجمع مثل Exchange، ولا يجب استخدامها لمنح صلاحيات على الملفات."
    ]
  },
  {
    id: 35,
    lectureId: 3,
    titleEn: "Understanding Security Principals (cont.)",
    titleAr: "فهم كائنات الأمان: إدارة الحقوق والتحكم بالأمان",
    contentEn: [
      "You can manage security by performing the following actions with security principals:",
      "You can assign them permissions to access various network resources.",
      "You can give them user rights.",
      "You can track their actions through auditing.",
      "The major types of security principals—user accounts, groups, and computer accounts—form the basis of the Active Directory security architecture.",
      "As a system administrator, you will likely spend a portion of your time managing permissions for these objects."
    ],
    contentAr: [
      "يمكنك إدارة الأمان عن طريق إجراء العمليات التالية باستخدام كائنات الأمان:",
      "يمكنك تعيين أذونات لها للوصول إلى موارد الشبكة المختلفة.",
      "يمكنك منحها حقوق المستخدم (User Rights).",
      "يمكنك تتبع ومراقبة إجراءاتها من خلال التدقيق والرقابة (Auditing).",
      "تشكل الأنواع الرئيسية لكائنات الأمان — حسابات المستخدمين، والمجموعات، وحسابات الكمبيوتر — أساس بنية أمان الدليل النشط.",
      "بصفتك مسؤول نظام، فستقضي على الأرجح جزءاً من وقتك في إدارة الأذونات لهذه الكائنات."
    ],
    explanation: "يتيح ويندوز سيرفر إدارة كائنات الأمان عبر ثلاثة محاور: الأذونات (Permissions) للوصول إلى المجلدات والملفات، الحقوق (User Rights) لإجراء مهام على النظام مثل الإقلاع أو النسخ الاحتياطي، والتدقيق (Auditing) لتتبع نشاط الكائنات.",
    keyConcepts: ["Permissions vs User Rights", "Auditing", "Security Foundations"],
    technicalTips: [
      "مراقبة الأحداث الأمنية (Auditing) تمكنك من معرفة متى ومن قام بتغيير إعداد أو الوصول لملف حساس بنجاح أو فشل."
    ]
  },
  {
    id: 36,
    lectureId: 3,
    titleEn: "An Overview Of OUs",
    titleAr: "نظرة عامة على الوحدات التنظيمية (OUs)",
    contentEn: [
      "An organizational unit (OU) is a logical group of Active Directory objects.",
      "They are used solely to create organization within a domain.",
      "An organization’s business structure can be mirrored within Active Directory through the use of organizational units for ease of use.",
      "The purpose of OUs is to organize other Active Directory objects logically based on business needs, add a needed level of control for security, and create an easier way to delegate."
    ],
    contentAr: [
      "الوحدة التنظيمية (OU) هي مجموعة منطقية من كائنات الدليل النشط (Active Directory).",
      "تُستخدم فقط لإنشاء تنظيم وترتيب داخل المجال (Domain).",
      "يمكن عكس الهيكل التنظيمي والوظيفي للمؤسسة داخل الدليل النشط من خلال استخدام الوحدات التنظيمية لسهولة الاستخدام والوصول.",
      "الغرض من الوحدات التنظيمية (OUs) هو تنظيم كائنات الدليل النشط الأخرى منطقياً بناءً على احتياجات العمل، وإضافة مستوى تحكم أمني مطلوب، وابتكار طريقة أسهل للتفويض."
    ],
    explanation: "الوحدة التنظيمية (OU) هي حاوية تنظيمية لتجميع الكائنات مثل المستخدمين والأجهزة داخل الدومين بهدف تسهيل الترتيب، تفويض المهام، وتطبيق سياسات المجموعة (GPOs).",
    keyConcepts: ["Organizational Unit", "Business Structure", "Logical Container"],
    technicalTips: [
      "الوحدات التنظيمية هي أصغر كائن يمكن ربط سياسات المجموعة (GPO) وتفويض الصلاحيات الإدارية (Delegation) عليه."
    ]
  },
  {
    id: 37,
    lectureId: 3,
    titleEn: "An Overview Of OUs (cont.)",
    titleAr: "مكونات الوحدات التنظيمية وسياسات المجموعة",
    contentEn: [
      "OUs can contain the following types of Active Directory objects:",
      "Users, Groups, Computers, Shared Folder objects, Contacts, Printers, and Other OUs.",
      "Another advantage of OUs is that each can have its own set of policies.",
      "Administrators can create individual and unique Group Policy objects (GPOs) for each OU.",
      "GPOs are rules or policies that can apply to all of the objects within the OU."
    ],
    contentAr: [
      "يمكن للوحدات التنظيمية (OUs) احتواء الأنواع التالية من كائنات الدليل النشط:",
      "المستخدمون، المجموعات، أجهزة الكمبيوتر، كائنات المجلدات المشتركة، جهات الاتصال، الطابعات، والوحدات التنظيمية الأخرى (Sub-OUs).",
      "ميزة أخرى للوحدات التنظيمية هي أنه يمكن أن يكون لكل منها مجموعة السياسات الخاصة بها.",
      "يمكن للمسؤولين إنشاء كائنات سياسة مجموعة (GPOs) فردية وفريدة لكل وحدة تنظيمية (OU).",
      "سياسات المجموعة (GPOs) هي قواعد أو سياسات يمكن تطبيقها على جميع الكائنات الموجودة داخل الوحدة التنظيمية."
    ],
    explanation: "تتميز الوحدات التنظيمية بمرونتها؛ فهي تحوي بداخلها كائنات متنوعة بما في ذلك وحدات تنظيمية فرعية (Sub-OUs)، ويمكن تخصيص سياسة مجموعة (GPO) مستقلة لكل منها لفرض قواعد عمل فريدة.",
    keyConcepts: ["Container Objects", "Group Policy Objects (GPOs)", "OU Policies"],
    technicalTips: [
      "تطبيق سياسة GPO على مستوى OU يضمن تأثر كافة الكائنات المتواجدة داخل هذه الـ OU بتلك السياسة تلقائياً."
    ]
  },
  {
    id: 38,
    lectureId: 3,
    titleEn: "The Purpose Of OUs",
    titleAr: "الغرض من الوحدات التنظيمية وتوريث الأذونات",
    contentEn: [
      "OUs are mainly used to organize the objects within Active Directory.",
      "OUs are simply containers that you can use to group various objects logically.",
      "They are not groups in the classical sense. That is, they are not used for assigning security permissions.",
      "A good general practice is to assign users to groups and then place the groups within OUs.",
      "By default, OUs inherit the permissions of their parent container."
    ],
    contentAr: [
      "تُستخدم الوحدات التنظيمية (OUs) بشكل أساسي لتنظيم الكائنات داخل الدليل النشط.",
      "الوحدات التنظيمية هي مجرد حاويات (Containers) يمكنك استخدامها لتجميع الكائنات المختلفة منطقياً.",
      "هي ليست مجموعات بالمعنى التقليدي، أي أنها لا تستخدم لتعيين الأذونات الأمنية وصلاحيات الملفات مباشرة.",
      "من الممارسات الجيدة عموماً تعيين المستخدمين في مجموعات أولاً ثم وضع هذه المجموعات داخل الوحدات التنظيمية المناسبة.",
      "بشكل افتراضي، ترث الوحدات التنظيمية (OUs) الأذونات المطبقة على الحاوية الأب (Parent Container)."
    ],
    explanation: "هذا السلايد يركز على الفارق الجوهري بين الوحدات التنظيمية (OUs) والمجموعات (Groups). الوحدات التنظيمية لتنظيم الهيكل الجغرافي والإداري للأجهزة والمستخدمين وتطبيق سياسات GPO وتفويض الإدارة، بينما المجموعات تستخدم لمنح الصلاحيات الأمنية.",
    keyConcepts: ["Logical Containers", "OUs vs Groups", "Permission Inheritance"],
    technicalTips: [
      "تذكر دائماً: المجموعات (Groups) تُمنح صلاحيات ملفات، والوحدات التنظيمية (OUs) تُربط بسياسات (GPOs) وتُفوض إدارياً."
    ]
  },
  {
    id: 39,
    lectureId: 3,
    titleEn: "Creating OUs",
    titleAr: "خطوات إنشاء الوحدات التنظيمية وتأمينها",
    contentEn: [
      "1. Open Active Directory Users and Computers by clicking Tools -> Active Directory Users And Computers.",
      "2. Right-click the name of the local domain and choose New -> Organizational Unit.",
      "3. Type University for the name of the first OU. Uncheck the box Protect Container From Accidental Deletion and click OK to create this object."
    ],
    contentAr: [
      "1. افتح أداة (Active Directory Users and Computers) بالنقر فوق أدوات (Tools) ثم اختيار الأداة.",
      "2. انقر بزر الفأرة الأيمن فوق اسم المجال المحلي (Domain) واختر جديد (New) ثم وحدة تنظيمية (Organizational Unit).",
      "3. اكتب 'University' اسماً للوحدة التنظيمية الأولى. قم بإلغاء تحديد المربع 'Protect Container From Accidental Deletion' (حماية الحاوية من الحذف غير المقصود) وانقر فوق موافق (OK) لإنشاء الكائن."
    ],
    explanation: "يوضح هذا السلايد الخطوات العملية لإنشاء وحدة تنظيمية بالمعمل مع التنويه لمربع الحماية ضد الحذف غير المقصود.",
    keyConcepts: ["OU Creation Steps", "ADUC Tool", "Accidental Deletion Protection"],
    technicalTips: [
      "في بيئات العمل، تفعيل الحماية ضد الحذف يحمي المجلدات التنظيمية الحيوية من الضياع بخطأ بشري غير مقصود."
    ]
  },
  {
    id: 40,
    lectureId: 3,
    titleEn: "Build The Following OUs",
    titleAr: "الهيكل التنظيمي المطلوب بناؤه للمجال",
    contentEn: [
      "Build and design the nested OU hierarchy under domain: ust.local",
      "Level 1: Create 'Engineering' and 'Medical' OUs at domain root.",
      "Level 2 (Under Engineering): Create 'IT' and 'CNDs' OUs.",
      "Level 2 (Under Medical): Create 'Pharmacy' and 'Laboratory' OUs."
    ],
    contentAr: [
      "بناء وتصميم الهيكل الهرمي المتداخل للوحدات التنظيمية تحت المجال: ust.local",
      "المستوى الأول: إنشاء وحدة 'Engineering' ووحدة 'Medical' تحت جذر المجال مباشرة.",
      "المستوى الثاني (تحت Engineering): إنشاء وحدة 'IT' ووحدة 'CNDs'.",
      "المستوى الثاني (تحت Medical): إنشاء وحدة 'Pharmacy' ووحدة 'Laboratory'."
    ],
    explanation: "هذا هو الهيكل الهرمي للوحدات التنظيمية المطلوب من الطلاب تنفيذه بالمعمل لتنظيم الكليات والتخصصات بالجامعة.",
    keyConcepts: ["Nested OU Structure", "Branch Planning", "Logical Layout"],
    technicalTips: [
      "تخطيط هيكل OUs مناسب منذ البداية يسهل بشكل هائل من تطبيق سياسات المجموعة وإدارة الموارد لاحقاً."
    ]
  },
  {
    id: 41,
    lectureId: 3,
    titleEn: "Administering Properties Of OUs",
    titleAr: "تعديل وإدارة خصائص الوحدات التنظيمية",
    contentEn: [
      "Although OUs are primarily created for organizational purposes within the Active Directory environment, they have several settings that you can modify.",
      "To modify the properties of an OU using the Active Directory Users and Computers administrative tool, right-click the name of any OU and select Properties.",
      "In any organization, it helps to know who is responsible for managing an OU. You can set this information on the Managed By tab.",
      "The information specified on this tab is convenient because it is automatically pulled from the contact information on a user record."
    ],
    contentAr: [
      "على الرغم من أن الوحدات التنظيمية تُنشأ أساساً لأغراض تنظيمية داخل بيئة الدليل النشط، إلا أن لها إعدادات متعددة يمكنك تعديلها.",
      "لتعديل خصائص وحدة تنظيمية باستخدام أداة Active Directory، انقر بزر الفأرة الأيمن فوق اسم الوحدة التنظيمية واختر خصائص (Properties).",
      "في أي مؤسسة، من المفيد معرفة المسؤول عن إدارة الوحدة التنظيمية. يمكنك إدخال هذه المعلومات في تبويب 'المدار بواسطة' (Managed By).",
      "المعلومات المحددة في هذا التبويب مريحة للغاية لأنها تُسحب تلقائياً من معلومات الاتصال المسجلة في حساب المستخدم المشرف."
    ],
    explanation: "يتيح تبويب Managed By تحديد المسؤول عن الوحدة التنظيمية، مما يحقق الشفافية والتنظيم داخل الدومين وسرعة معرفة جهة الاتصال بكل قسم.",
    keyConcepts: ["OU Settings", "Managed By Tab", "Automated User Lookup"],
    technicalTips: [
      "عند تحديد مسؤول للوحدة، تظهر معلومات الاتصال الخاصة به تلقائياً في خصائص الوحدة لتسهيل الدعم والوصول."
    ]
  },
  {
    id: 42,
    lectureId: 3,
    titleEn: "OU Properties: Engineering Properties Case Study",
    titleAr: "دراسة حالة: تهيئة خصائص قسم الهندسة (Engineering Properties)",
    contentEn: [
      "General Tab Configuration for 'Engineering' OU:",
      " - Description: Faculty of Engineering",
      " - Street: Al-musala st | City: Taiz | State/province: Alqahirah",
      " - Zip/Postal Code: 1111 | Country/region: Yemen",
      "Managed By Tab Configuration:",
      " - Manager Account Name: Aljanad.edu/Users/The_Legend",
      " - Office details: Street: Almasbah | City: Taiz | State: Alqahirah | Country: Yemen",
      " - Telephone number: 775069901"
    ],
    contentAr: [
      "تهيئة التبويب العام (General Tab) لوحدة قسم الهندسة (Engineering OU):",
      " - الوصف: Faculty of Engineering (كلية الهندسة)",
      " - الشارع: Al-musala st | المدينة: Taiz | الولاية: Alqahirah | الرمز البريدي: 1111 | الدولة: Yemen",
      "تهيئة تبويب المدار بواسطة (Managed By Tab):",
      " - اسم حساب المدير المسؤول: Aljanad.edu/Users/The_Legend",
      " - تفاصيل المكتب: الشارع: Almasbah | المدينة: Taiz | الولاية: Alqahirah | الدولة: Yemen",
      " - رقم الهاتف المسحوب تلقائياً: 775069901"
    ],
    explanation: "دراسة حالة عملية ومثال للبيانات المطلوبة لتعبئة التبويب العام وتبويب (Managed By) لوحدة Engineering التنظيمية.",
    keyConcepts: ["OU Attributes", "Managed By Metadata", "Corporate Information"],
    technicalTips: [
      "استخدم حسابات حقيقية للمديرين وتعبئة بياناتهم في ADUC يجعل من السهل إنشاء دليل عناوين مركزي ودقيق للمؤسسة."
    ]
  },
  {
    id: 43,
    lectureId: 3,
    titleEn: "Delegating Administrative Control",
    titleAr: "تفويض الصلاحيات والتحكم الإداري (Delegation of Control)",
    contentEn: [
      "Delegation occurs when a higher security authority assigns permissions to a lesser security authority.",
      "In the world of Active Directory, you delegate to define responsibilities for OU administrators.",
      "You can delegate control only at the OU level and not at the object level within the OU.",
      "Parent-Child Relationships: Understand how permissions flow down the tree."
    ],
    contentAr: [
      "يحدث التفويض (Delegation) عندما تقوم سلطة أمنية عليا بتعيين أذونات وصلاحيات لسلطة أمنية أدنى.",
      "في عالم الدليل النشط، تقوم بالتفويض لتحديد وتوزيع المسؤوليات لمسؤولي فروع الوحدات التنظيمية (OUs).",
      "يمكنك تفويض التحكم فقط على مستوى الوحدة التنظيمية (OU Level) وليس على مستوى كائن فردي داخل الوحدة التنظيمية.",
      "علاقات الأب والابن (Parent-Child): تدفق الأذونات وتوارثها لأسفل الهيكل الشجري للمجال."
    ],
    explanation: "تفويض الصلاحيات (Delegation) هي ميزة تتيح لمسؤول الشبكة تفويض مهام إدارية محددة لموظفي الدعم الفني بالفروع دون ترفيعهم لمجموعة الـ Domain Admins.",
    keyConcepts: ["Delegation Definition", "Administrative Boundaries", "Parent-Child Inheritance"],
    technicalTips: [
      "مبدأ الصلاحيات الأقل (Least Privilege) يستوجب تفويض المهام بدلاً من منح رتبة Domain Admin الكاملة لحماية الدومين."
    ]
  },
  {
    id: 44,
    lectureId: 3,
    titleEn: "Using The Delegation Of Control Wizard",
    titleAr: "استخدام معالج تفويض التحكم (الخطوات العملية)",
    contentEn: [
      "1. Open Active Directory Users and Computers.",
      "2. Right-click the 'IT' OU within the 'Engineering' OU and select 'Delegate Control...'. This starts the Delegation of Control Wizard. Click Next to begin configuring security settings.",
      "3. In the 'Users Or Groups' page, click the 'Add...' button. In the 'Enter the object names to select' field, enter 'Account Operators' and click the 'Check Names' button. Click OK. Click Next to continue."
    ],
    contentAr: [
      "1. افتح أداة Active Directory Users and Computers.",
      "2. انقر بزر الفأرة الأيمن فوق وحدة 'IT' التنظيمية الموجودة داخل وحدة 'Engineering' واختر تفويض التحكم (Delegate Control). يبدأ هذا معالج تفويض التحكم. انقر فوق التالي (Next) للبدء.",
      "3. في صفحة المستخدمين أو المجموعات (Users Or Groups)، انقر فوق زر إضافة (Add). في حقل كتابة الأسماء، اكتب 'Account Operators' ثم انقر فوق التحقق من الأسماء (Check Names). انقر فوق موافق (OK)، ثم التالي (Next) للمتابعة."
    ],
    explanation: "هذا السلايد يوضح بدء معالج تفويض التحكم وإضافة فئة Account Operators لتفويضها على مستوى فرع IT.",
    keyConcepts: ["Delegation Wizard", "Account Operators Group", "Select Users or Groups"],
    technicalTips: [
      "دائماً استخدم زر (Check Names) للتأكد من كتابة اسم الكائن بشكل صحيح والتحقق من صحته داخل قاعدة بيانات الدومين."
    ]
  },
  {
    id: 45,
    lectureId: 3,
    titleEn: "Using The Delegation Of Control Wizard (cont.)",
    titleAr: "معالج تفويض التحكم: تحديد المهام الشائعة والإتمام",
    contentEn: [
      "4. In the 'Tasks To Delegate' page, select 'Delegate the following common tasks' and place a check mark next to the following items:",
      " - Create, Delete, And Manage User Accounts.",
      " - Reset User Passwords And Force Password Change At Next Logon.",
      " - Read All User Information.",
      " - Create, Delete, And Manage Groups.",
      " - Modify The Membership Of A Group.",
      "5. Click Next to continue.",
      "6. The 'Completing the Delegation of Control Wizard' page then provides a summary of the operations you have selected. To implement the changes, click Finish."
    ],
    contentAr: [
      "4. في صفحة المهام المراد تفويضها (Tasks To Delegate)، اختر تفويض المهام الشائعة التالية (Delegate the following common tasks) وضع علامة صح بجوار العناصر التالية:",
      " - إنشاء وحذف وإدارة حسابات المستخدمين (Create, Delete, And Manage User Accounts).",
      " - إعادة تعيين كلمات مرور المستخدمين وفرض تغيير كلمة المرور عند تسجيل الدخول التالي.",
      " - قراءة كافة معلومات المستخدمين (Read All User Information).",
      " - إنشاء وحذف وإدارة المجموعات (Create, Delete, And Manage Groups).",
      " - تعديل وتحديث عضوية المجموعة (Modify The Membership Of A Group).",
      "5. انقر فوق التالي (Next) للمتابعة.",
      "6. تعرض صفحة إتمام معالج تفويض التحكم ملخصاً كاملاً للعمليات والخيارات التي اخترتها. لتنفيذ وتطبيق التغييرات، انقر فوق إنهاء (Finish)."
    ],
    explanation: "يوضح هذا السلايد المهام الإدارية الشائعة التي يمكن تفويضها مثل إنشاء الحسابات وتصفير كلمات المرور وإدارة المجموعات، وكيفية إتمام المعالج بنجاح.",
    keyConcepts: ["Common Tasks", "Password Reset Delegate", "Wizard Completion"],
    technicalTips: [
      "تفويض مهام مثل Reset Passwords لفرع الدعم الفني المحلي يوفر الكثير من الجهد والوقت لإدارة تكنولوجيا المعلومات المركزية."
    ]
  },
  {
    id: 46,
    lectureId: 3,
    titleEn: "Delegating Custom Tasks",
    titleAr: "تفويض المهام المخصصة (Custom Tasks)",
    contentEn: [
      "1. Open Active Directory Users and Computers.",
      "2. Right-click the 'IT' OU within the 'Engineering' OU and select 'Delegate Control...'. Click Next to begin making security settings.",
      "3. In the 'Users Or Groups' page, click the 'Add...' button. Enter 'Server Operators' and click the 'Check Names' button. Click OK and then click Next to continue.",
      "4. In the 'Tasks To Delegate' page, select the 'Create a custom task to delegate' radio button and click Next to continue."
    ],
    contentAr: [
      "1. افتح أداة Active Directory Users and Computers.",
      "2. انقر بزر الفأرة الأيمن فوق وحدة 'IT' التنظيمية داخل وحدة 'Engineering' واختر تفويض التحكم (Delegate Control). انقر فوق التالي للبدء.",
      "3. في صفحة المستخدمين أو المجموعات، انقر فوق زر إضافة (Add). اكتب 'Server Operators' ثم انقر فوق التحقق من الأسماء (Check Names). انقر فوق موافق، ثم انقر فوق التالي للمتابعة.",
      "4. في صفحة المهام المراد تفويضها، حدد زر الاختيار 'إنشاء مهمة مخصصة لتفويضها' (Create a custom task to delegate) وانقر فوق التالي للمتابعة."
    ],
    explanation: "هنا نبدأ بالتعرف على كيفية تفويض مهام دقيقة ومخصصة خارج المهام الشائعة، باستخدام خيار (Create a custom task to delegate) وتطبيقه على Server Operators.",
    keyConcepts: ["Custom Task Delegation", "Server Operators", "Granular Control"],
    technicalTips: [
      "المهام المخصصة تمنحك تحكماً فائق الدقة لاستهداف كائنات معينة وحظر غيرها داخل الدومين."
    ]
  },
  {
    id: 47,
    lectureId: 3,
    titleEn: "Delegating Custom Tasks: Active Directory Object Type",
    titleAr: "تفويض المهام المخصصة: تحديد أنواع كائنات الدليل النشط",
    contentEn: [
      "5. In the 'Active Directory Object Type' page, choose 'Only the following objects in the folder' and place a check mark next to the following items (scroll down to see them all):",
      " - User Objects",
      " - Computer Objects",
      " - Contact Objects",
      " - Group Objects",
      " - Organizational Unit Objects",
      " - Printer Objects",
      "6. Click Next to continue."
    ],
    contentAr: [
      "5. في صفحة نوع كائن الدليل النشط (Active Directory Object Type)، حدد خيار 'فقط الكائنات التالية في المجلد' (Only the following objects in the folder) وضع علامة صح بجوار الكائنات التالية (قد تحتاج للتمرير لأسفل لرؤيتها بالكامل):",
      " - كائنات المستخدمين (User Objects)",
      " - كائنات أجهزة الكمبيوتر (Computer Objects)",
      " - كائنات جهات الاتصال (Contact Objects)",
      " - كائنات المجموعات (Group Objects)",
      " - كائنات الوحدات التنظيمية (Organizational Unit Objects)",
      " - كائنات الطابعات (Printer Objects)",
      "6. انقر فوق التالي (Next) للمتابعة."
    ],
    explanation: "تحديد أنواع الكائنات التي سيتأثر بها التفويض فقط، مثل كائنات المستخدمين والأجهزة والمجموعات والوحدات التنظيمية لضمان عدم امتداد التفويض لغيرها.",
    keyConcepts: ["Object Types Filtering", "Targeted Security", "Child Objects"],
    technicalTips: [
      "تصفية الكائنات تضمن ألا يقوم المشرف المفوض بالتلاعب في كائنات أخرى لا تعنيه، كحسابات الخدمة أو الطابعات."
    ]
  },
  {
    id: 48,
    lectureId: 3,
    titleEn: "Delegating Custom Tasks: Permissions Assignment",
    titleAr: "تفويض المهام المخصصة: تعيين الأذونات وصلاحيات التحكم",
    contentEn: [
      "7. In the 'Permissions' page, place a check mark next to the 'General' option and make sure other options are unchecked. Place a check mark next to the following items:",
      " - Create All Child Objects",
      " - Read All Properties",
      " - Write All Properties",
      "8. Click Next to continue.",
      "9. The 'Completing the Delegation of Control Wizard' page provides a summary of the operations you have selected. To implement the changes, click Finish."
    ],
    contentAr: [
      "7. في صفحة الأذونات (Permissions)، ضع علامة صح بجوار خيار عام (General) وتأكد من عدم تحديد الخيارات الأخرى. ثم حدد العناصر التالية:",
      " - إنشاء جميع الكائنات الفرعية (Create All Child Objects)",
      " - قراءة جميع الخصائص (Read All Properties)",
      " - كتابة جميع الخصائص (Write All Properties)",
      "8. انقر فوق التالي (Next) للمتابعة.",
      "9. تعرض صفحة إتمام معالج تفويض التحكم ملخصاً كاملاً للعمليات التي اخترتها. لتنفيذ الأوامر وتطبيقها، انقر فوق إنهاء (Finish)."
    ],
    explanation: "هذه هي الخطوة النهائية لتحديد الصلاحيات الفعلية الممنوحة (إنشاء الكائنات وقراءة وكتابة كافة الخصائص) على الكائنات المحددة سابقاً.",
    keyConcepts: ["Permissions Matrix", "Create Child Objects", "Read/Write Properties"],
    technicalTips: [
      "بالموافقة على (Write All Properties) يستطيع المشرف تعديل أي سمة للمستخدمين المفوض عليهم مثل المسمى الوظيفي أو كلمة المرور."
    ]
  },
  {
    id: 49,
    lectureId: 3,
    titleEn: "Active Directory Organization: Standard Containers",
    titleAr: "تنظيم الدليل النشط: الحاويات القياسية الافتراضية",
    contentEn: [
      "Built-In: The Built-In container includes all of the standard groups that are installed by default when you promote a domain controller.",
      "Computers: By default, the Computers container contains a list of the workstations in your domain. From here, you can manage all of the computers in your domain.",
      "Domain Controllers: The Domain Controllers OU includes a list of all the domain controllers for the domain.",
      "Foreign Security Principals: Foreign security principals containers are any objects to which security can be assigned and that are not part of the current domain."
    ],
    contentAr: [
      "الحاوية المدمجة (Built-In): تشمل جميع المجموعات القياسية والافتراضية التي يتم تثبيتها تلقائياً عند ترقية وتثبيت متحكم المجال (Domain Controller).",
      "أجهزة الكمبيوتر (Computers): بشكل افتراضي، تحتوي حاوية Computers على قائمة بمحطات العمل والأجهزة المنضمة لمجالك. ومن هنا يمكنك إدارة جميع أجهزة الكمبيوتر بالدومين.",
      "متحكمات المجال (Domain Controllers): هذه وحدة تنظيمية (OU) تشمل قائمة بجميع خوادم متحكمات المجال للنطاق.",
      "كائنات الأمان الخارجية (Foreign Security Principals): هي حاويات مخصصة للكائنات التي يمكن تعيين أمان لها ولكنها لا تنتمي للمجال الحالي."
    ],
    explanation: "يتناول هذا السلايد الهيكل الأساسي الذي يقوم الويندوز ببنائه تلقائياً عند إعداد الـ AD، موضحاً أهمية الحاويات الافتراضية مثل Computers و Built-In.",
    keyConcepts: ["Built-In Container", "Computers Container", "Domain Controllers OU"],
    technicalTips: [
      "حاوية Computers الافتراضية ليست OU، وبالتالي لا يمكنك ربط سياسة مجموعة (GPO) بها مباشرة. احرص على نقل الأجهزة إلى OUs حقيقية."
    ]
  },
  {
    id: 50,
    lectureId: 3,
    titleEn: "Active Directory Organization: Accounts & Security",
    titleAr: "تنظيم الدليل النشط: الحسابات وحماية المسؤول",
    contentEn: [
      "Managed Service Accounts: Service accounts are accounts created to run specific services such as Exchange and SQLServer.",
      "Users: The Users container includes all the security accounts that are part of the domain.",
      "Crucial Security Rule: You want to be sure to protect the administrator account."
    ],
    contentAr: [
      "حسابات الخدمة المدارة (Managed Service Accounts): هي حسابات خاصة يتم إنشاؤها لتشغيل خدمات وتطبيقات محددة بالخادم مثل خادم البريد Exchange وخادم قواعد البيانات SQLServer.",
      "المستخدمون (Users): تشمل حاوية Users الافتراضية جميع حسابات ومجموعات الأمان التي تعد جزءاً أساسياً من المجال.",
      "قاعدة أمنية حاسمة: يجب عليك التأكد تماماً من حماية حساب المسؤول الرئيسي (Administrator) للشبكة ضد الاختراقات والعبث."
    ],
    explanation: "هذا السلايد يركز على أهمية حسابات الخدمات المدارة (MSAs) لحفظ تشغيل السيرفرات بسلام، ويوصي بضرورة تأمين حساب المدير الرئيسي (Administrator) كأعلى رتبة أمان.",
    keyConcepts: ["Service Accounts", "Users Container", "Administrator Account Protection"],
    technicalTips: [
      "تأمين حساب الـ Administrator يتضمن تغيير اسمه الافتراضي (Rename) ووضع كلمة مرور شديدة الصعوبة وتفعيل المراقبة لعمليات الدخول الخاصة به."
    ]
  },
  {
    id: 51,
    lectureId: 3,
    titleEn: "Create User Accounts",
    titleAr: "خطوات إنشاء حسابات المستخدمين (شاشات المعالج)",
    contentEn: [
      "1. Right-click the 'IT' OU and choose New -> User.",
      "2. In the 'New Object - User' Wizard dialog box, in the First name text box, type 'YourName'. In the Last name text box, type 'YourLastName'.",
      "3. In the User logon name text box, type 'YourName.YourLastName@ust.local'.",
      "4. In the user logon name (pre-Windows 2000) text box, type 'ust\\FLast'.",
      "5. Click Next.",
      "6. In the Password text box and the Confirm password text box, type 'P@ssw0rd'.",
      "7. Click Next, then click Finish."
    ],
    contentAr: [
      "1. انقر بزر الفأرة الأيمن فوق وحدة 'IT' التنظيمية واختر جديد (New) ثم مستخدم (User).",
      "2. في مربع حوار معالج مستخدم جديد، اكتب اسمك الشخصي في خانة الاسم الأول (First name)، واكتب اسم العائلة في خانة الاسم الأخير (Last name).",
      "3. في خانة اسم تسجيل دخول المستخدم (User logon name)، اكتب الاسم بالصيغة: 'YourName.YourLastName@ust.local'.",
      "4. في خانة اسم الدخول القديم (pre-Windows 2000)، اكتب اسم الدخول بالصيغة: 'ust\\FLast'.",
      "5. انقر فوق التالي (Next).",
      "6. في خانة كلمة المرور وتأكيد كلمة المرور، اكتب كلمة سر قوية مطابقة للمختبر: 'P@ssw0rd'.",
      "7. انقر فوق التالي (Next) ثم انقر فوق إنهاء (Finish) لإتمام إنشاء الحساب."
    ],
    explanation: "الخطوات الفنية المعتمدة لإنشاء حساب مستخدم جديد داخل وحدة IT التنظيمية بالاسم وصيغة الدخول المحددة.",
    keyConcepts: ["New User Wizard", "UPN (User Principal Name)", "Logon Name Syntax"],
    technicalTips: [
      "اسم الدخول يمثل هويتك للشبكة ويتبع النطاق (ust.local) ويستخدم لربط الحاسوب بالصلاحيات الشخصية للموظف."
    ]
  },
  {
    id: 52,
    lectureId: 3,
    titleEn: "Create User Accounts: Properties",
    titleAr: "خطوات إنشاء حسابات المستخدمين: تهيئة تفاصيل وصفات الحساب",
    contentEn: [
      "8. Right-click the created user account and choose Properties.",
      "9. On the General tab, in the Telephone number text box, type 'numberPhone'.",
      "10. Click the Address tab and enter your information.",
      "11. Click the Organization tab and enter your information."
    ],
    contentAr: [
      "8. انقر بزر الفأرة الأيمن فوق حساب المستخدم الذي تم إنشاؤه واختر خصائص (Properties).",
      "9. في التبويب العام (General)، في حقل رقم الهاتف (Telephone number)، اكتب رقم الهاتف الخاص بك.",
      "10. انقر فوق تبويب العنوان (Address) وأدخل تفاصيل العنوان وبيانات السكن الخاصة بك.",
      "11. انقر فوق تبويب المؤسسة (Organization) وأدخل معلومات الوظيفة والشركة والمشرف الخاص بك."
    ],
    explanation: "هذه الخطوات تخدم مكملات حساب الموظف، حيث يستوجب النظام تزويده ببيانات العنوان ورقم الاتصال والتصنيف الإداري له.",
    keyConcepts: ["User Properties", "Address details", "Organization Metadata"],
    technicalTips: [
      "تعبئة تبويب (Organization) بالدليل يبني هيكلية تسلسلية للمديرين والمرؤوسين تستفيد منها بقية البرامج المتصلة كـ Exchange."
    ]
  },
  {
    id: 53,
    lectureId: 3,
    titleEn: "Using User Templates",
    titleAr: "استخدام قوالب حسابات المستخدمين (User Templates)",
    contentEn: [
      "User templates allow an Active Directory administrator to create a default account (for example, template_sales) and use that account to create all of the other users who match it (all the salespeople).",
      "When you copy a template, some of the information does not get copied over. This is because it is user-specific information.",
      "Here are some of the fields that do not get copied over from a template:",
      " - Name, Logon Name, Password, Email, Phone Numbers, Description, Office, and Web Page.",
      "Many of the important fields such as Member Of (groups to which the user belongs), Profile Path, Department, and Company all get copied over.",
      "There is one important item that needs to be done when creating a template: the template account needs to be disabled after creation."
    ],
    contentAr: [
      "تتيح قوالب المستخدمين (User Templates) لمسؤول الدليل النشط إنشاء حساب افتراضي نموذجي (مثال: template_sales) واستخدام هذا الحساب لنسخ وإنشاء بقية الموظفين المتشابهين في الصلاحيات (مثل موظفي المبيعات).",
      "عند نسخ قالب مستخدم، لا يتم نسخ بعض البيانات المحددة والخاصة بكل فرد نظراً لكونها معلومات شخصية فريدة.",
      "إليك أبرز الحقول والمعلومات التي لا يتم نسخها من حساب القالب:",
      " - الاسم الأول والأخير، اسم الدخول (Logon Name)، كلمة المرور، البريد، الهاتف، الوصف، المكتب، وصفحة الويب.",
      "بينما يتم نسخ الحقول الهامة المشتركة مثل: عضوية المجموعات (Member Of)، مسار ملف التعريف (Profile Path)، الإدارة (Department)، واسم الشركة (Company).",
      "ملاحظة هامة جداً: يجب دائماً تعطيل حساب القالب (Disabled) فور إنشائه لضمان عدم استخدامه في تسجيل الدخول."
    ],
    explanation: "مفهوم قوالب المستخدمين لتسريع إنشاء الموظفين بالنسخ المتتابع مع فهم الخصائص المشتركة التي تُنسخ والشخصية التي لا تُنسخ.",
    keyConcepts: ["User Templates", "Account Duplication", "Copied Attributes"],
    technicalTips: [
      "تعطيل حساب القالب هو إجراء أمان قياسي لمنع أي دخول غير مصرح به باستخدام الحساب الافتراضي التكوين."
    ]
  },
  {
    id: 54,
    lectureId: 3,
    titleEn: "Creating A User Template",
    titleAr: "تأسيس وإنشاء قالب حساب مستخدم (الخطوات العملية)",
    contentEn: [
      "1. Open Active Directory Users and Computers.",
      "2. Expand the current domain to list the objects contained within it. For this exercise, you will use the IT OU. Right-click the IT OU and choose New User.",
      "3. Use the following properties:",
      " - First Name: IT",
      " - Last Name: Template",
      " - Username: it_template",
      " - Password: P@ssw0rd",
      "4. Click Next and then click Finish."
    ],
    contentAr: [
      "1. افتح أداة Active Directory Users and Computers.",
      "2. قم بتوسيع المجال لرؤية محتوياته وكائناته. في هذا التمرين، سنستخدم وحدة 'IT' التنظيمية. انقر بزر الفأرة الأيمن فوق وحدة IT التنظيمية واختر جديد ثم مستخدم.",
      "3. استخدم الخصائص والمعلومات التالية للحساب الجديد:",
      " - الاسم الأول (First Name): IT",
      " - الاسم الأخير (Last Name): Template",
      " - اسم تسجيل الدخول (Username): it_template",
      " - كلمة المرور (Password): P@ssw0rd",
      "4. انقر فوق التالي (Next) ثم انقر فوق إنهاء (Finish)."
    ],
    explanation: "الخطوات العملية لإنشاء حساب القالب بالاسم (IT Template) وكلمة المرور المطلوبة ليكون مرجعاً للنسخ بقسم تكنولوجيا المعلومات.",
    keyConcepts: ["Template Account Initialization", "ADUC Customization", "Naming Template"],
    technicalTips: [
      "يستحسن تسمية القوالب بطرق مميزة مثل وضع رمز شرطة سفلية في البداية (مثل _IT_Template) لتظهر في أعلى قائمة الحسابات."
    ]
  },
  {
    id: 55,
    lectureId: 3,
    titleEn: "Creating A User Template (cont.)",
    titleAr: "قالب حساب المستخدم: إعدادات العناوين وعضوية المجموعة",
    contentEn: [
      "5. In the right window, double-click the 'IT Template' user to open the properties.",
      "6. On the 'General' tab, complete the following items:",
      " - Description: Template Account",
      " - Office: Corporate",
      " - Telephone: 999-999-9999",
      " - Email: it@abc.com",
      " - Web: www.abc.com",
      "7. On the 'Members Of' tab, click the 'Add...' button. At the 'Enter the object name to select' box, type 'Administrator' and click the 'Check Names' button."
    ],
    contentAr: [
      "5. في النافذة اليمنى للأداة، انقر نقراً مزدوجاً فوق حساب المستخدم 'IT Template' لفتح شاشة الخصائص (Properties).",
      "6. في التبويب العام (General Tab), قم بملء الحقول والعناصر التالية:",
      " - الوصف (Description): Template Account",
      " - المكتب (Office): Corporate",
      " - الهاتف (Telephone): 999-999-9999",
      " - البريد الإلكتروني (Email): it@abc.com",
      " - الموقع الإلكتروني (Web): www.abc.com",
      "7. في تبويب العضوية (Members Of)، انقر فوق زر إضافة (Add). في مربع البحث واختيار الكائنات، اكتب 'Administrator' ثم انقر فوق زر تحقق من الأسماء (Check Names)."
    ],
    explanation: "هذه الخطوات لملء الحقول العامة المشتركة وتخصيص عضوية المجموعات (مثل مجموعة Administrator) التي ستورث تلقائياً لكافة الحسابات المنسوخة من هذا القالب.",
    keyConcepts: ["General Settings", "Department Info", "Inheritable Group Memberships"],
    technicalTips: [
      "أي مجموعة تضيف حساب القالب كعضو فيها ستورث وتضاف تلقائياً لأي حساب منسوخ مستقبلاً، مما يختصر خطوة إضافة الموظفين للمجموعات يدوياً."
    ]
  },
  {
    id: 56,
    lectureId: 3,
    titleEn: "Creating A User Template: Disabling and Copying",
    titleAr: "قالب حساب المستخدم: تعطيل الحساب وبدء النسخ الفعلي",
    contentEn: [
      "8. Click the 'Account' tab. Scroll down in the 'Account options' box and check the 'Account is disabled' check box.",
      "9. Click OK in the user’s Properties window to go back to the IT OU.",
      "10. Right-click the IT Template account and choose 'Copy...'",
      "11. Enter the required information for the new user."
    ],
    contentAr: [
      "8. انقر فوق تبويب الحساب (Account Tab). قم بالتمرير لأسفل داخل قائمة خيارات الحساب (Account options) وضع علامة صح بجوار خيار 'الحساب معطل' (Account is disabled).",
      "9. انقر فوق موافق (OK) في نافذة خصائص المستخدم لحفظ الإعدادات والرجوع إلى وحدة 'IT' التنظيمية.",
      "10. انقر بزر الفأرة الأيمن فوق حساب 'IT Template' واختر خيار نسخ (Copy).",
      "11. أدخل المعلومات المطلوبة والخاصة بالمستخدم الجديد الذي تود إنشائه من هذا القالب."
    ],
    explanation: "المرحلة الحاسمة لتعطيل حساب القالب لمنع استغلاله، والبدء في نسخ الحسابات لإنشاء الموظفين بسلام وأمان.",
    keyConcepts: ["Account Disabling", "Template Copy Action", "New User Deployment"],
    technicalTips: [
      "تأكد من إلغاء تحديد خيار (Account is disabled) في شاشة نسخ الحساب للموظف الجديد ليكون حسابه مفعلاً وقابلاً للاستخدام مباشرة عند إنشائه."
    ]
  }
];
