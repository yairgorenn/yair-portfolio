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
    projectIntro: ['A featured engineering project, followed by other areas of work.', 'פרויקט הנדסי נבחר, ואחריו תחומי עיסוק נוספים.'],
    category: ['Project area', 'תחום פרויקט'],
    project: ['Personal project', 'פרויקט אישי'],
    projectOverview: ['Project Overview', 'סקירת הפרויקט'],
    projectChallenge: ['The Challenge', 'האתגר'],
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
