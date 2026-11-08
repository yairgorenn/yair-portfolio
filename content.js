// Edit the English and Hebrew copy side by side. Paths are relative to index.html.
const portfolio = {
  profileImage: './assets/profile.jpg',
  email: 'yairgorenn@gmail.com',
  github: 'https://github.com/yairgorenn',
  copy: {
    skip: ['Skip to content', 'דילוג לתוכן'],
    navigation: ['Main navigation', 'ניווט ראשי'],
    language: ['Language', 'שפה'],
    name: ['Yair Goren', 'יאיר גורן'],
    portfolio: ['Personal portfolio', 'אתר אישי'],
    discipline: ['Industrial Automation - Control Systems - Software Development', 'אוטומציה תעשייתית - מערכות בקרה - פיתוח תוכנה'],
    lede: ['Combining industrial automation, engineering and software to develop practical solutions for real-world challenges.', 'אני משלב אוטומציה תעשייתית, הנדסה ותוכנה כדי לפתח פתרונות מעשיים לאתגרים בשטח.'],
    explore: ['Explore project areas', 'לתחומי הפרויקטים'],
    aboutNav: ['About', 'אודות'],
    about: ['About Me', 'עליי'],
    bio: ["I work in industrial automation and control, with hands-on experience in PLC programming, motion control, machine vision, industrial communication, and machine integration.","אני עוסק באוטומציה ובבקרה תעשייתית, עם ניסיון מעשי בתכנות PLC, בבקרת תנועה, בראייה ממוחשבת, בתקשורת תעשייתית ובשילוב מערכות במכונות."],
    systems: ["I look at each machine as a complete system: mechanics, electrical hardware, controls, and software. I learn new technologies independently and develop practical solutions from the initial idea through to a working system.","אני מסתכל על כל מכונה כמערכת שלמה הכוללת מכניקה, חשמל, בקרה ותוכנה. אני לומד טכנולוגיות חדשות באופן עצמאי ומפתח פתרונות מעשיים משלב הרעיון ועד למערכת עובדת."],
    software: ["I develop software in Python, C#, Java, and VB.NET. I also use modern AI tools to support software development and help solve technical problems.","אני מפתח תוכנה ב־Python, ב־C#, ב־Java וב־VB.NET, ומשתמש גם בכלי בינה מלאכותית עדכניים כדי לסייע בפיתוח תוכנה ובפתרון בעיות טכניות."],
    philosophy: ["My Philosophy","הגישה שלי"],
    sharing: ["I believe that sharing knowledge, discoveries, and practical solutions strengthens our own understanding and helps others move forward.","אני מאמין ששיתוף ידע, תגליות ופתרונות מעשיים מעמיק את ההבנה שלנו ועוזר לאחרים להתקדם."],
    motto: ["There is no need to reinvent the wheel when we can learn from one another and build something better.","אין צורך להמציא את הגלגל מחדש כשאפשר ללמוד זה מזה ולבנות משהו טוב יותר."],
    expertiseNav: ['Expertise', 'תחומי ידע'],
    expertise: ['Technical Expertise', 'תחומי ידע טכניים'],
    projectsNav: ['Projects', 'פרויקטים'],
    projects: ['Selected Projects', 'פרויקטים נבחרים'],
    projectIntro: ['Selected engineering projects and other areas of work.', 'פרויקטים הנדסיים נבחרים ותחומי עיסוק נוספים.'],
    category: ['Project area', 'תחום פרויקט'],
    project: ['Personal project', 'פרויקט אישי'],
    projectOverview: ['Project Overview', 'סקירת הפרויקט'],
    projectChallenge: ['The Challenge', 'האתגר'],
    projectFeatures: ['Key Features', 'יכולות מרכזיות'],
    projectApproach: ['Engineering Approach', 'תהליך הפיתוח'],
    projectArchitecture: ['System Architecture', 'ארכיטקטורת המערכת'],
    projectOutputs: ['Processing outputs', 'תוצרי העיבוד'],
    projectResults: ['Results', 'תוצאות'],
    projectSnapshot: ['Dashboard snapshot', 'נתוני צילום מצב מהדשבורד'],
    projectTechnologies: ['Technologies', 'טכנולוגיות'],
    projectRole: ['My Role', 'התפקיד שלי'],
    projectFullImage: ['Open full-size image', 'פתיחת התמונה בגודל מלא'],
    projectDetails: ['Project details', 'פרטי הפרויקט'],
    projectProblem: ['Engineering problem', 'הבעיה ההנדסית'],
    projectSolution: ['The Solution', 'הפתרון'],
    projectEquipment: ['Technologies & equipment', 'טכנולוגיות וציוד'],
    playVideo: ['Play demo video', 'הפעלת סרטון הדגמה'],
    stack: ['Toolbox', 'ארגז כלים'],
    technologies: ['Technologies', 'טכנולוגיות'],
    contact: ['Contact', 'יצירת קשר'],
    email: ['Email', 'דוא״ל'],
    emailLater: ['Email will be added later.', 'כתובת דוא״ל תתווסף בהמשך.'],
    top: ['Back to top', 'חזרה לראש העמוד']
  },
  expertise: [
    {
      title: ["Industrial Automation","אוטומציה תעשייתית"],
      items: [
        ["PLC & Control Systems","בקרי PLC ומערכות בקרה"],
        ["Motion & Servo Systems","בקרת תנועה ומערכות סרוו"],
        ["Machine Vision","ראייה ממוחשבת"],
        ["Robotics & Machine Integration","רובוטיקה ושילוב מערכות במכונות"],
        ["Industrial Communication","תקשורת תעשייתית"]
      ]
    },
    {
      title: ["Software & Integration","תוכנה ואינטגרציה"],
      items: [
        ["Python & Software Development","Python ופיתוח תוכנה"],
        ["Hardware & Software Integration","שילוב חומרה ותוכנה"],
        ["Data Processing & Automation","עיבוד נתונים ואוטומציה"]
      ]
    },
    {
      title: ["Engineering","הנדסה"],
      items: [
        ["Troubleshooting & Diagnostics","איתור תקלות ואבחון"],
        ["System Design & Problem Solving","תכנון מערכות ופתרון בעיות"]
      ]
    }
  ],
  projects: [
    {
      type: 'project',
      featured: true,
      title: ['AI-Powered Purchase Order Automation', 'אוטומציה של הזמנות רכש בעזרת בינה מלאכותית'],
      description: [
        'An end-to-end system that turns incoming industrial purchase orders into validated Excel files for Priority ERP and a supplier portal.',
        'מערכת מקצה לקצה שהופכת הזמנות רכש נכנסות לקובצי Excel מאומתים עבור Priority ERP ופורטל ספקים.'
      ],
      overview: [
        'I developed the system to automate purchase order intake in an industrial setting. Orders arrive through an Email Worker or are uploaded manually in the web interface.',
        'פיתחתי את המערכת כדי להפוך את קליטת הזמנות הרכש בסביבה תעשייתית לתהליך אוטומטי. ההזמנות מגיעות דרך Email Worker או מועלות ידנית בממשק האינטרנט.'
      ],
      problem: [
        'Orders arrive as PDF or Excel files in different formats. A document can contain several orders, and part numbers with leading zeros, quantities, and unrelated content all need to be handled correctly before import.',
        'הזמנות מגיעות כקובצי PDF או Excel בפורמטים שונים. מסמך אחד עשוי להכיל כמה הזמנות, ולפני הייבוא צריך לטפל נכון במק״טים עם אפסים מובילים ובכמויות, ולסנן תוכן שאינו שייך להזמנה.'
      ],
      solution: [
        'Python prepares the documents for extraction with the OpenAI API. It then checks the extracted items and quantities independently against a PostgreSQL catalog of about 50,000 products, splits documents containing multiple orders, and flags exceptions for review. The system generates Excel files for Priority ERP and the supplier portal, sends email replies and alerts, and records statistics. A configuration variable selects the AI model without changes to the core processing logic.',
        'Python מכין את המסמכים לחילוץ פריטים וכמויות באמצעות OpenAI API. לאחר מכן המערכת מאמתת את הנתונים בנפרד מול קטלוג PostgreSQL של כ־50,000 פריטים, מפצלת מסמכים שמכילים כמה הזמנות ומסמנת חריגות לבדיקה. היא מפיקה קובצי Excel עבור Priority ERP ופורטל הספקים, שולחת תשובות והתראות בדוא״ל ומתעדת נתונים לדשבורד. את מודל ה־AI אפשר להחליף דרך משתנה תצורה, בלי לשנות את לוגיקת העיבוד המרכזית.'
      ],
      features: [
        ['Email and web intake for PDF and Excel orders, including documents with multiple orders.', 'קליטת הזמנות PDF ו־Excel דרך דוא״ל או העלאה באתר, כולל מסמכים עם כמה הזמנות.'],
        ['Catalog validation for item identifiers and quantities, with exceptions flagged for review.', 'אימות מק״טים וכמויות מול הקטלוג, עם סימון חריגות לבדיקה.'],
        ['Excel export for Priority ERP and the supplier portal, plus email replies, alerts, and dashboard statistics.', 'ייצוא ל־Excel עבור Priority ERP ופורטל הספקים, לצד תשובות בדוא״ל, התראות ונתוני דשבורד.']
      ],
      architecture: {
        steps: [
          ['Email / Web Upload', 'דוא״ל / העלאה דרך האתר'],
          ['Python Document Processing', 'עיבוד מסמכים ב־Python'],
          ['OpenAI API', 'OpenAI API'],
          ['Python Validation + PostgreSQL Product Catalog', 'אימות ב־Python מול קטלוג פריטים ב־PostgreSQL']
        ],
        outputs: [
          ['Excel for Priority ERP / Supplier Portal', 'קובצי Excel ל־Priority ERP ולפורטל הספקים'],
          ['Statistics Dashboard', 'דשבורד סטטיסטיקה'],
          ['Email Replies & Alerts', 'תשובות בדוא״ל והתראות']
        ]
      },
      results: [
        { value: '347', label: ['Orders processed', 'הזמנות שעובדו'] },
        { value: '5,730', label: ['Rows handled', 'שורות שטופלו'] },
        { value: '6.7', label: ['Seconds average processing time', 'שניות בממוצע לעיבוד'] },
        { value: '63.7', label: ['Estimated work hours saved', 'שעות עבודה שנחסכו לפי הערכה'] }
      ],
      equipment: ['Python', 'OpenAI API', 'PostgreSQL', 'Email Worker', 'Excel', 'Priority ERP', 'Railway', 'GitHub'],
      role: [
        'I designed the architecture, developed the software and the AI and database integrations, and handled testing, cloud deployment on Railway, and ongoing operation. I managed version control in GitHub.',
        'תכננתי את הארכיטקטורה, פיתחתי את התוכנה וחיברתי אותה למסד הנתונים ול־OpenAI API. הייתי אחראי גם לבדיקות, לפריסה בענן ב־Railway ולתפעול השוטף. ניהלתי את גרסאות הקוד ב־GitHub.'
      ],
      images: []
    },
    {
      type: 'project',
      featured: true,
      id: 'product-catalog',
      title: ['Product Catalog & Order Preparation', 'קטלוג מוצרים והכנת הזמנות'],
      subtitle: [
        'Python Desktop Application for Industrial Product Search and Order Preparation',
        'יישום שולחני ב־Python לחיפוש מוצרים תעשייתיים ולהכנת הזמנות'
      ],
      description: [
        'A standalone Windows application that brings catalog search, pricing, and order document preparation into one workflow.',
        'יישום עצמאי ל־Windows שמרכז חיפוש בקטלוג, חישובי מחיר והכנת מסמכי הזמנה בתהליך עבודה אחד.'
      ],
      overview: [
        'I identified recurring obstacles in an ERP-based order preparation workflow and built a desktop application around the users’ needs. It combines a local product database, search, a graphical interface, and document generation.',
        'זיהיתי קשיים שחזרו בתהליך הכנת הזמנות במערכת ERP ופיתחתי יישום שולחני לפי צורכי המשתמשים. היישום משלב מסד נתונים מקומי של מוצרים, חיפוש, ממשק גרפי והפקת מסמכים.'
      ],
      problem: [
        'Finding products meant navigating several screens with limited search options. Product images were hard to access alongside catalog records. The goal was to simplify those frequent tasks while keeping the ERP in its existing role.',
        'איתור מוצר דרש מעבר בין כמה מסכים, עם אפשרויות חיפוש מוגבלות וגישה לא נוחה לתמונות לצד נתוני הקטלוג. המטרה הייתה לפשט את הפעולות השכיחות האלה במסגרת תהליך העבודה הקיים עם ה־ERP.'
      ],
      solution: [
        'I built a standalone Windows application with Python, Tkinter, and SQLite. Users can search the catalog locally, compare product records and images, select items and quantities, and prepare documents or Outlook drafts from the same interface.',
        'פיתחתי יישום עצמאי ל־Windows באמצעות Python, Tkinter ו־SQLite. מאותו ממשק אפשר לחפש בקטלוג המקומי, לעיין בנתוני המוצרים ובתמונותיהם, לבחור פריטים וכמויות ולהכין מסמכים או טיוטות ב־Outlook.'
      ],
      features: [
        ['Search by internal SKU, manufacturer part number, or description, with regular expressions for processing search patterns.', 'חיפוש לפי מק״ט פנימי, מק״ט יצרן או תיאור, עם ביטויים רגולריים לעיבוד תבניות חיפוש.'],
        ['Product images alongside results and catalog search without a server connection.', 'הצגת תמונות מוצרים לצד תוצאות החיפוש וחיפוש בקטלוג ללא חיבור לשרת.'],
        ['Item and quantity selection, pricing, two levels of discounts, and automatic line and order totals.', 'בחירת פריטים וכמויות, תמחור, שתי רמות הנחה וחישוב אוטומטי של סכומי שורה והזמנה.'],
        ['Customer information management, multi-page PDF generation, and Excel export.', 'ניהול פרטי לקוח, הפקת מסמכי PDF מרובי עמודים וייצוא ל־Excel.'],
        ['Outlook integration to prepare outgoing messages with attachments.', 'שילוב עם Outlook להכנת הודעות יוצאות עם קבצים מצורפים.']
      ],
      approach: [
        ['Identify the workflow problem and clarify users’ needs.', 'זיהוי הבעיה בתהליך הקיים והבנת צורכי המשתמשים.'],
        ['Design the standalone desktop architecture and build the graphical interface.', 'תכנון ארכיטקטורה ליישום שולחני עצמאי ובניית הממשק הגרפי.'],
        ['Implement local searches, pricing rules, and order calculations.', 'מימוש חיפוש מקומי, כללי תמחור וחישובי הזמנה.'],
        ['Integrate document generation and Outlook, test the application, and package it as a Windows executable.', 'שילוב הפקת המסמכים ו־Outlook, בדיקת היישום ואריזתו כקובץ הפעלה ל־Windows.']
      ],
      equipment: ['Python', 'Tkinter', 'SQLite', 'Regular Expressions', 'ReportLab', 'openpyxl', 'Outlook COM', 'PyInstaller'],
      role: [
        'I independently designed and developed the application, from identifying the problem and defining the architecture through interface design, Python and database development, business logic, document generation, integrations, testing, and Windows packaging.',
        'תכננתי ופיתחתי את היישום באופן עצמאי, מזיהוי הבעיה ותכנון הארכיטקטורה ועד לעיצוב הממשק, פיתוח ב־Python והקמת מסד הנתונים, מימוש הלוגיקה העסקית, הפקת מסמכים, אינטגרציה, בדיקות ואריזה ל־Windows.'
      ],
      images: [
        {
          src: './assets/product-catalog-redacted.jpg',
          alt: [
            'Hebrew Windows application showing catalog search, selected order items, and PDF, Excel, and email controls. Product details are obscured.',
            'ממשק היישום בעברית המציג חיפוש בקטלוג, פריטים שנבחרו להזמנה וכפתורי PDF, Excel ודוא״ל. פרטי המוצרים מוסתרים.'
          ]
        }
      ]
    },
    {
      type: 'category',
      title: ['Industrial PLC & Machine Control', 'בקרי PLC ובקרת מכונות'],
      description: ['Development, troubleshooting and integration of industrial control systems.', 'פיתוח, איתור תקלות ושילוב של מערכות בקרה תעשייתיות.']
    },
    {
      type: 'category',
      title: ['Machine Vision Applications', 'יישומי ראייה ממוחשבת'],
      description: ['Vision-based inspection, measurement and quality control in industrial environments.', 'בדיקה, מדידה ובקרת איכות בסביבות תעשייתיות בעזרת מערכות ראייה.']
    },
    {
      type: 'category',
      title: ['Python Automation & Data Processing', 'אוטומציה ועיבוד נתונים ב־Python'],
      description: ['Software tools for automating engineering and business processes.', 'כלי תוכנה לאוטומציה של תהליכים הנדסיים ועסקיים.']
    },
    {
      type: 'category',
      title: ['PLC, Software & Device Integration', 'שילוב בקרי PLC, תוכנה והתקנים'],
      description: ['Connecting industrial controllers, software applications and external devices.', 'חיבור בין בקרים תעשייתיים, יישומי תוכנה והתקנים חיצוניים.']
    }
  ],
  technologies: [
    {
      title: ["Industrial Control","בקרה תעשייתית"],
      items: [
        "OMRON",
        "PLC",
        "HMI",
        "PLCopen",
        "Machine Vision",
        "Motion Control"
      ]
    },
    {
      title: ["Software","תוכנה"],
      items: [
        "Python",
        "C#",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Railway"
      ]
    },
    {
      title: ["Communication","תקשורת"],
      items: [
        "EtherCAT",
        "Modbus TCP",
        "EtherNet/IP",
        "REST APIs"
      ]
    }
  ]
};
