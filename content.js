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
    projectIntro: ['These cards describe project areas. Individual projects and technical details will be added over time.', 'הכרטיסיות מציגות תחומי פרויקט כלליים. בהמשך יתווספו פרויקטים אישיים ופרטים טכניים.'],
    category: ['Project area', 'תחום פרויקט'],
    project: ['Personal project', 'פרויקט אישי'],
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
