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
    bio: ["I am an Industrial Automation and Control Systems Engineer with extensive hands-on experience in PLC programming, motion control, machine vision, industrial communication, and machine automation.","אני מהנדס אוטומציה תעשייתית ומערכות בקרה, עם ניסיון מעשי רחב בתכנות PLC, בבקרת תנועה, במערכות ראייה ממוחשבת, בתקשורת תעשייתית ובאוטומציה של מכונות."],
    systems: ["My expertise goes beyond programming controllers. I focus on understanding machines as complete systems, combining mechanical processes, electrical hardware, control systems, and software to develop reliable and practical solutions.","העבודה שלי כוללת הרבה מעבר לתכנות בקרים. אני מתמקד בהבנת המכונה כמערכת שלמה, ומשלב תהליכים מכניים, חומרה חשמלית, מערכות בקרה ותוכנה כדי לפתח פתרונות אמינים ומעשיים."],
    equipment: ["Over the years, I have gained experience working with a wide range of industrial technologies, including servo drives, variable frequency drives, sensors, safety systems, temperature controllers, measurement instruments, and industrial communication networks.","עם השנים צברתי ניסיון בעבודה עם מגוון טכנולוגיות תעשייתיות, ובהן דרייברים לסרוו, וסתי תדר, חיישנים, מערכות בטיחות, בקרי טמפרטורה, מכשירי מדידה ורשתות תקשורת תעשייתיות."],
    software: ["Alongside industrial automation, I have a strong interest in software development and computer technologies, with programming experience in Python, C#, Java, and VB.NET. I enjoy combining software with industrial hardware to solve engineering challenges, improve processes, and develop new capabilities.","לצד האוטומציה התעשייתית, אני מתעניין בפיתוח תוכנה ובטכנולוגיות מחשוב, ויש לי ניסיון בתכנות ב־Python, ב־C#, ב־Java וב־VB.NET. אני נהנה לשלב תוכנה עם חומרה תעשייתית כדי לפתור אתגרים הנדסיים, לשפר תהליכים ולפתח יכולות חדשות."],
    curiosity: ["I am naturally curious about technology and enjoy understanding how things work, troubleshooting complex problems, and continuously expanding my knowledge.","יש לי סקרנות טבעית לטכנולוגיה. אני נהנה להבין איך דברים עובדים, לאתר ולפתור תקלות מורכבות ולהמשיך להרחיב את הידע שלי."],
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
    ["PLC Programming & Industrial Control Systems","תכנות PLC ומערכות בקרה תעשייתיות"],
    ["Motion Control & Servo Systems","בקרת תנועה ומערכות סרוו"],
    ["Machine Vision & Industrial Inspection","ראייה ממוחשבת ובדיקות תעשייתיות"],
    ["Machine Automation & System Integration","אוטומציה של מכונות ושילוב מערכות"],
    ["Industrial Communication Networks","רשתות תקשורת תעשייתיות"],
    ["Troubleshooting & Technical Problem Solving","איתור תקלות ופתרון בעיות טכניות"],
    ["Python & Software Development","Python ופיתוח תוכנה"],
    ["Hardware & Software Integration","שילוב חומרה ותוכנה"],
    ["Robotics & Machine Systems","רובוטיקה ומערכות מכונה"],
    ["AI-Driven Automation","אוטומציה בעזרת בינה מלאכותית"]
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
  technologies: ['OMRON', 'PLC', 'HMI', 'EtherCAT', 'Modbus TCP', 'EtherNet/IP', 'PLCopen', 'Machine Vision', 'Motion Control', 'Python', 'C#', 'PostgreSQL', 'Git', 'GitHub', 'Railway', 'REST APIs']
};
