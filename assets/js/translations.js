// Hi Tech (هاي تك) Comprehensive Bilingual Dictionary (Arabic & English)

const translations = {
  ar: {
    // Top Announcement Bar
    top_badge: "خصومات الفصل الدراسي",
    top_discount: "خصم خاص لمجموعات مشاريع التخرج والأنشطة والتدريس الجامعي!",
    top_hours: "متاحون 24/7 لخدمتكم",
    top_support: "دعم فوري",

    // Header & Navigation
    brand_name: "هاي تك",
    brand_sub: "HI TECH • خدمات جامعية وتدريس ومشاريع",
    nav_home: "الرئيسية",
    nav_services: "خدماتنا",
    nav_projects: "مشاريع التخرج",
    nav_features: "لماذا نحن؟",
    nav_workflow: "آلية العمل",
    nav_faq: "الأسئلة الشائعة",
    nav_order_btn: "اطلب خدمتك الآن",
    lang_toggle_text: "English",
    theme_toggle_title: "تبديل المظهر (داكن / فاتح)",

    // Hero Section
    hero_badge: "الوجهة الأولى والأشمل لجميع طلاب الجامعات والمعاهد",
    hero_title_prefix: "شريكك الأكاديمي والتقني",
    hero_title_highlight: "من أول محاضرة حتى يوم التخرج",
    hero_desc: "في مركز هاي تك نقدم منظومة جامعية متكاملة: تدريس أكاديمي وشروحات مبسطة، إعداد وبرمجة وتوثيق مشاريع التخرج، حلول الأنشطة والتكاليف بدقة وأمانة علمية، وإعداد البحوث الرصينة لضمان أعلى الدرجات.",
    hero_btn_order: "طلب خدمة سريعة",
    hero_btn_wa: "محادثة واتساب مباشرة",
    hero_stat_projects_num: "+500",
    hero_stat_projects_label: "مشروع تخرج مكتمل",
    hero_stat_trust_num: "100%",
    hero_stat_trust_label: "أمانة علمية وتعديلات",
    hero_stat_students_num: "+1500",
    hero_stat_students_label: "طالب وطالبة مستفيد",
    hero_identity_title: "هوية هاي تك",
    hero_verified_badge: "معتمد أكاديمياً",
    hero_caption: "هاي تك • ريادة في التعليم والحلول التقنية",
    hero_switch_logo_btn: "تبديل الشعار",
    hero_card_code: "برمجة ومشاريع",
    hero_card_code_sub: "كود نظيف + شرح تفصيلي",
    hero_card_tutoring: "تدريس وشروحات",
    hero_card_tutoring_sub: "شرح متخصص + مراجعات",

    // Features Strip
    feat_trust_title: "أمانة وسرية تامة",
    feat_trust_desc: "خصوصية بياناتك الأكاديمية وأبحاثك محمية تماماً ولا يُعاد استخدامها أبداً.",
    feat_time_title: "تسليم دقيق في الموعد",
    feat_time_desc: "نحترم مواعيد تقديم التكاليف وديدلاين الجامعات لضمان سلامة تقديمك.",
    feat_rev_title: "تعديلات ومتابعة مستمرة",
    feat_rev_desc: "نظل معك خطوة بخطوة لتنفيذ أي ملاحظات من دكتور المادة أو لجنة المناقشة.",
    feat_price_title: "أسعار مناسبة للطلاب",
    feat_price_desc: "باقات أسعار خاصة تراعي ميزانية الطالب مع خطط دفع مرنة لمشاريع التخرج.",

    // Services Section
    serv_tag: "خدماتنا الشاملة",
    serv_title: "كل ما يحتاجه مسارك الجامعي في مكان واحد",
    serv_desc: "نلبي كافة المتطلبات الدراسية والتقنية بدقة عالية وبإشراف نخبة من المتخصصين الأكاديميين.",

    // Service 1: Graduation Projects
    serv_proj_title: "مشاريع التخرج المتكاملة",
    serv_proj_desc: "من الفكرة حتى يوم المناقشة: اقتراح أفكار حصرية، بناء وتطوير الأنظمة والتطبيقات والمواقع، كتابة وتوثيق الكتاب كاملاً، وتصميم السلايدات.",
    serv_proj_item1: "مشاريع برمجية وتقنية (Web, Mobile, AI, IoT)",
    serv_proj_item2: "مشاريع هندسية وإدارية ونظرية متكاملة",
    serv_proj_item3: "جلسات تدريب ومحاكاة لمناقشة المشروع مع الدكتور",

    // Service 2: Tutoring & Teaching
    serv_tut_title: "التدريس والشروحات الجامعية",
    serv_tut_desc: "شرح وافٍ للمواد الصعبة والتخصصية (برمجة، رياضيات، إحصاء، شبكات، قواعد بيانات، مواد عامة) بأسلوب مبسط وتطبيقات عملية.",
    serv_tut_item1: "مراجعات نهائية مكثفة قبل الاختبارات",
    serv_tut_item2: "حصص فردية ومجموعات طلابية مخصصة",
    serv_tut_item3: "شروحات أونلاين وحضور مباشر حسب رغبتك",

    // Service 3: Assignments & Tasks
    serv_task_title: "حلول الأنشطة والتكاليف",
    serv_task_desc: "حلول نموذجية لكافة الواجبات والتمارين الجامعية مع شرح خطوة بخطوة لطريقة الحل ليفهمها الطالب ويضمن العلامة الكاملة.",
    serv_task_item1: "حلول فريدة ومخصصة تمنع التشابه بين الزملاء",
    serv_task_item2: "تكاليف برمجية وهندسية ونظرية",
    serv_task_item3: "التزام تام بمواعيد التسليم المحددة (Deadlines)",

    // Service 4: Academic Research & Reports
    serv_res_title: "إعداد البحوث والأوراق العلمية",
    serv_res_desc: "كتابة أبحاث رصينة موثقة بالمراجع الأكاديمية الحديثة وفق أنظمة التوثيق العالمية (APA, IEEE, Harvard)، مع تدقيق وفحص الاستلال.",
    serv_res_item1: "تقرير رسمي لفحص نسبة الاستلال (Plagiarism Check)",
    serv_res_item2: "تدقيق لغوي ونحوي وإملائي محترف",
    serv_res_item3: "تنسيق متوافق مع دليل كتابة الرسائل بجامعتك",

    // Service 5: Presentations
    serv_pres_title: "العروض التقديمية (PowerPoint)",
    serv_pres_desc: "تصميم سلايدات احترافية ملفتة للانتباه تلائم لجان المناقشة، مع تلخيص الأفكار بطريقة مرئية جذابة ومدعومة بالإنفوجرافيك.",
    serv_pres_item1: "تصاميم مخصصة وهوية بصرية أنيقة",
    serv_pres_item2: "مخططات بيانية وإنفوجرافيك توضيحي",
    serv_pres_item3: "تجهيز بطاقات ونقاط مساعدة للمتحدث",

    // Service 6: Academic Consulting & Proofreading
    serv_consult_title: "الاستشارات الأكاديمية والتدقيق",
    serv_consult_desc: "توجيه علمي متخصص لاختيار مسار البحث أو فكرة المشروع، ومراجعة المحتوى والتدقيق اللغوي الأكاديمي لضمان الجودة والتميز.",
    serv_consult_item1: "مساعدة في اختيار وصياغة عناوين المشاريع",
    serv_consult_item2: "مراجعة شاملة للأوراق العلمية والتقارير",
    serv_consult_item3: "استشارات وإرشاد أكاديمي مستمر",

    // How It Works
    how_tag: "خطوات بسيطة وسلسة",
    how_title: "كيف نعمل معك لضمان تفوقك؟",
    step1_title: "إرسال الطلب",
    step1_desc: "تواصل معنا وأرسل ملفات المادة أو فكرة مشروعك أو تفاصيل التكليف.",
    step2_title: "الدراسة والاتفاق",
    step2_desc: "نحدد معك الوقت المناسب، ونرسم خطة التنفيذ خطوة بخطوة مع تحديد السعر الأنسب.",
    step3_title: "التنفيذ والمتابعة",
    step3_desc: "نطلعك على التقدم أولاً بأول، مع تقديم شروحات لأي جزئية تحتاج فهماً أعمق.",
    step4_title: "التسليم والضمان",
    step4_desc: "تسليم العمل في الموعد المحدد مع ضمان التعديلات المجانية حتى ترضى تماماً.",

    // Order Form
    order_tag: "خدمة مباشرة وسريعة",
    order_title: "اطلب خدمتك أو استشارتك الأكاديمية الآن",
    order_desc: "املأ البيانات بالأسفل وسيقوم النظام بتجهيز رسالة واتساب مفصلة لإرسالها مباشرة إلى رقم هاي تك.",
    label_name: "اسمك الكريم أو الكنية",
    placeholder_name: "مثال: أحمد محمد",
    label_uni: "الجامعة أو الكلية",
    placeholder_uni: "مثال: جامعة صنعاء / كلية الحاسوب",
    label_service: "نوع الخدمة المطلوبة",
    opt_service_project: "مشروع تخرج (برمجة أو توثيق كامل)",
    opt_service_tutoring: "تدريس وشرح مواد جامعية",
    opt_service_tasks: "حل أنشطة وواجبات وتكاليف",
    opt_service_research: "إعداد بحث أو ورقة علمية",
    opt_service_presentation: "تصميم عرض تقديمي (سلايدات)",
    opt_service_consulting: "استشارة أكاديمية وتدقيق لغوي",
    label_deadline: "الموعد النهائي للتسليم (الديدلاين)",
    placeholder_deadline: "مثال: خلال يومين / الأسبوع القادم",
    label_details: "تفاصيل الطلب والمتطلبات",
    placeholder_details: "اكتب تفاصيل المادة، عنوان المشروع، أو أي متطلبات خاصة...",
    btn_submit_order: "إرسال الطلب عبر الواتساب فوراً",

    // FAQ Section
    faq_tag: "إجابات واضحة",
    faq_title: "الأسئلة الشائعة من الطلاب",
    faq1_q: "هل تساعدون الطالب في اختيار فكرة مشروع التخرج وصياغة الخطة؟",
    faq1_a: "نعم بالتأكيد! نقترح عليك مجموعة من الأفكار الحديثة والمبتكرة والمقبولة لدى جامعتك، ونساعدك في صياغة مقترح المشروع (Proposal) وتحديد المتطلبات بدقة.",
    faq2_q: "هل يتضمن مشروع التخرج شرحاً وتدريباً على الكود والمناقشة؟",
    faq2_a: "نعم بالتأكيد! نحن لا نسلمك المشروع كملف مغلق فحسب، بل نعقد معك جلسات مخصصة لشرح الكود والتوثيق خطوة بخطوة، مع محاكاة أسئلة المناقشة المتوقعة لتدخل أمام اللجنة بكامل الثقة.",
    faq3_q: "ماذا لو طلب دكتور المادة أو المشرف تعديلات بعد التسليم؟",
    faq3_a: "التعديلات المتعلقة بصلب المتطلبات المتفق عليها مجانية بالكامل ومستمرة معك حتى تقييم العمل واعتماده رسمياً.",
    faq4_q: "كيف تضمنون عدم تشابه حلول الأنشطة بين الزملاء؟",
    faq4_a: "كل تكليف يُحل بطريقة وصياغة برمجية أو لغوية مستقلة، ونحرص دائماً على عدم تكرار نماذج الحل بين الطلاب لتجنب أي ملاحظات من الأساتذة.",

    // Footer
    footer_about_title: "مركز هاي تك | Hi Tech",
    footer_about_desc: "المركز الرائد لتقديم الخدمات الطلابية والجامعية: التدريس الأكاديمي، تطوير وتوثيق مشاريع التخرج، وحلول الأنشطة والواجبات بدقة واحترافية.",
    footer_quick_links: "روابط سريعة",
    footer_contact_title: "تواصل معنا",
    footer_location: "بالقرب من البوابات الجامعية الرئيسية",
    footer_hours: "خدمة العملاء: متوفرة 24/7",
    footer_whatsapp: "واتساب: +972 59-838-3944",
    footer_copyright: "© 2026 هاي تك (Hi Tech). جميع الحقوق محفوظة.",
    footer_made_with: "صُمم وطُوّر بحب لخدمة طلابنا الأعزاء 🎓",

    // Floating Button Title
    float_wa_title: "تواصل مباشر عبر الواتساب"
  },

  en: {
    // Top Announcement Bar
    top_badge: "Semester Discounts",
    top_discount: "Special discounts for graduation teams, tutoring & student assignments!",
    top_hours: "Available 24/7",
    top_support: "Instant Support",

    // Header & Navigation
    brand_name: "Hi Tech",
    brand_sub: "HI TECH • University Services, Projects & Tutoring",
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Graduation Projects",
    nav_features: "Why Us?",
    nav_workflow: "Workflow",
    nav_faq: "FAQ",
    nav_order_btn: "Order Service",
    lang_toggle_text: "العربية",
    theme_toggle_title: "Toggle Theme (Dark / Light)",

    // Hero Section
    hero_badge: "The Premier Academic Hub for University & College Students",
    hero_title_prefix: "Your Academic & Tech Partner",
    hero_title_highlight: "From Your First Lecture to Graduation Day",
    hero_desc: "At Hi Tech Center, we offer an all-in-one university ecosystem: academic tutoring, graduation project engineering & documentation, precise assignment solutions, and rigorous research papers to secure top grades.",
    hero_btn_order: "Quick Service Request",
    hero_btn_wa: "Direct WhatsApp Chat",
    hero_stat_projects_num: "+500",
    hero_stat_projects_label: "Completed Projects",
    hero_stat_trust_num: "100%",
    hero_stat_trust_label: "Academic Integrity",
    hero_stat_students_num: "+1500",
    hero_stat_students_label: "Satisfied Students",
    hero_identity_title: "Hi Tech Brand Identity",
    hero_verified_badge: "Academically Verified",
    hero_caption: "Hi Tech • Excellence in Education & Tech Solutions",
    hero_switch_logo_btn: "Switch Logo",
    hero_card_code: "Coding & Projects",
    hero_card_code_sub: "Clean Code + Walkthrough",
    hero_card_tutoring: "Tutoring & Coaching",
    hero_card_tutoring_sub: "Specialized Courses + Review",

    // Features Strip
    feat_trust_title: "Full Privacy & Integrity",
    feat_trust_desc: "Your academic data, identity, and research are strictly confidential and never reused.",
    feat_time_title: "Strict On-Time Delivery",
    feat_time_desc: "We rigorously respect deadlines and submission schedules to guarantee peace of mind.",
    feat_rev_title: "Continuous Revisions",
    feat_rev_desc: "We stay with you step-by-step to incorporate any notes from professors or defense committees.",
    feat_price_title: "Student-Friendly Pricing",
    feat_price_desc: "Tailored affordable pricing packages with flexible installment plans for graduation projects.",

    // Services Section
    serv_tag: "Our Comprehensive Services",
    serv_title: "Everything Your Academic Path Requires in One Place",
    serv_desc: "We fulfill all academic and technological requirements with high accuracy under specialized academic supervision.",

    // Service 1: Graduation Projects
    serv_proj_title: "Complete Graduation Projects",
    serv_proj_desc: "From initial concept to defense day: exclusive project ideas, web/mobile/AI software engineering, comprehensive documentation, and slide design.",
    serv_proj_item1: "Software & tech projects (Web, Mobile, AI, IoT)",
    serv_proj_item2: "Engineering, business, and theoretical graduation projects",
    serv_proj_item3: "Mock defense sessions & coaching on presenting to professors",

    // Service 2: Tutoring & Teaching
    serv_tut_title: "Academic Tutoring & Courses",
    serv_tut_desc: "Clear, simplified walkthroughs for tough university subjects (programming, calculus, statistics, networks, databases) with practical exercises.",
    serv_tut_item1: "Intensive exam prep and final revision bootcamps",
    serv_tut_item2: "One-on-one private sessions and small student study groups",
    serv_tut_item3: "Online via Zoom/Teams or in-person at the center",

    // Service 3: Assignments & Tasks
    serv_task_title: "Assignment & Homework Solutions",
    serv_task_desc: "Accurate step-by-step solutions for assignments and coursework, helping students grasp concepts thoroughly and secure top marks.",
    serv_task_item1: "100% original customized solutions preventing plagiarism issues",
    serv_task_item2: "Coding, mathematical, engineering, and theoretical tasks",
    serv_task_item3: "Strict adherence to strict university submission deadlines",

    // Service 4: Academic Research & Reports
    serv_res_title: "Academic Research & Papers",
    serv_res_desc: "Rigorous scholarly writing backed by peer-reviewed citations formatted to APA, IEEE, or Harvard standards, complete with originality reports.",
    serv_res_item1: "Official similarity / plagiarism check reports",
    serv_res_item2: "Professional language proofreading and editing",
    serv_res_item3: "Strict compliance with your university's thesis guidelines",

    // Service 5: Presentations
    serv_pres_title: "Slide Presentations (PowerPoint)",
    serv_pres_desc: "Compelling, interactive presentation decks tailored for jury panels, condensing extensive material into clear infographics and visual points.",
    serv_pres_item1: "Custom visual identity and modern typography",
    serv_pres_item2: "Infographics, system flowcharts, and architecture diagrams",
    serv_pres_item3: "Speaker note cards and key talking points prepared for you",

    // Service 6: Academic Consulting & Proofreading
    serv_consult_title: "Academic Consulting & Proofreading",
    serv_consult_desc: "Expert academic guidance for thesis proposal selection, literature review drafting, language revision, and editorial refinement.",
    serv_consult_item1: "Assistance in project proposal and topic selection",
    serv_consult_item2: "Comprehensive review for research papers and drafts",
    serv_consult_item3: "Continuous academic mentorship and advisory",

    // How It Works
    how_tag: "Simple & Seamless Process",
    how_title: "How We Work With You for Academic Success",
    step1_title: "Submit Your Request",
    step1_desc: "Reach out and send your coursework files, project ideas, or assignment requirements.",
    step2_title: "Study & Plan",
    step2_desc: "We analyze requirements, establish milestones, set deadlines, and offer the best student price.",
    step3_title: "Execution & Progress",
    step3_desc: "We build and write while keeping you updated, explaining complex points step-by-step.",
    step4_title: "Delivery & Guarantee",
    step4_desc: "Timely delivery with 100% free revisions until full academic approval and satisfaction.",

    // Order Form
    order_tag: "Fast & Direct Service",
    order_title: "Request Your Service or Academic Consultation Now",
    order_desc: "Fill in the details below and the system will prepare a formatted WhatsApp message to send directly to Hi Tech.",
    label_name: "Your Full Name or Nickname",
    placeholder_name: "e.g., Ali Mohammed",
    label_uni: "University / Faculty",
    placeholder_uni: "e.g., Faculty of Computer Science",
    label_service: "Select Service Type",
    opt_service_project: "Graduation Project (Coding / Documentation)",
    opt_service_tutoring: "Academic Tutoring & Subject Coaching",
    opt_service_tasks: "Assignments & Homework Solutions",
    opt_service_research: "Academic Research & Reports",
    opt_service_presentation: "Presentation Design (PowerPoint)",
    opt_service_consulting: "Academic Consultation & Proofreading",
    label_deadline: "Submission Deadline",
    placeholder_deadline: "e.g., In 2 days / Next week",
    label_details: "Request Details & Notes",
    placeholder_details: "Describe your subject, project title, or special requirements...",
    btn_submit_order: "Send Request via WhatsApp Now",

    // FAQ Section
    faq_tag: "Clear Answers",
    faq_title: "Frequently Asked Questions",
    faq1_q: "Do you help students select graduation project ideas & write proposals?",
    faq1_a: "Yes, absolutely! We propose modern, innovative, and university-approved project topics, and assist you in crafting comprehensive proposals (Proposals) with clear scope and milestones.",
    faq2_q: "Do graduation projects include code explanation and defense coaching?",
    faq2_a: "Yes! We do not just hand over project files; we conduct dedicated walkthrough sessions explaining code and architecture, and coach you through expected jury questions.",
    faq3_q: "What happens if my professor or advisor requests revisions?",
    faq3_a: "All revisions within the agreed scope are completely free and ongoing until your project is formally graded and approved.",
    faq4_q: "How do you guarantee that assignment solutions are not duplicated?",
    faq4_a: "Every assignment is solved independently with customized code styling and wording to guarantee zero collision among classmates.",

    // Footer
    footer_about_title: "Hi Tech Center",
    footer_about_desc: "The leading student hub for higher education services: academic tutoring, graduation projects, coursework solutions, and scholarly research.",
    footer_quick_links: "Quick Links",
    footer_contact_title: "Contact Us",
    footer_location: "Near Main University Campus Gates",
    footer_hours: "Customer Service: Available 24/7",
    footer_whatsapp: "WhatsApp: +972 59-838-3944",
    footer_copyright: "© 2026 Hi Tech. All rights reserved.",
    footer_made_with: "Crafted with passion to empower university students 🎓",

    // Floating Button Title
    float_wa_title: "Direct WhatsApp Chat"
  }
};
