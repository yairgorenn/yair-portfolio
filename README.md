# Yair Goren — אתר אישי

פתחו את `index.html` בדפדפן. אין צורך בהתקנה, בבנייה או בשרת.

- **עריכת תוכן:** הקובץ `content.js` מרכז את הטקסט, הטכנולוגיות והקישורים. כל זוג תרגומים מופיע בסדר `[אנגלית, עברית]`.
- **הוספת תמונת פרופיל:** שמרו תמונה ריבועית, למשל `assets/profile.webp`, ועדכנו את `profileImage` לנתיב `./assets/profile.webp` ב־`content.js`. התמונה תיחתך לעיגול; ראשי התיבות ישמשו תחליף כל עוד אין תמונה.
- **הוספת דוא״ל:** מלאו את `email` ב־`content.js` כדי להציג קישור דוא״ל.
- **מטא־נתונים:** הכותרת, התיאור וכתובת האתר לשיתוף נמצאים בראש `index.html`. בעת עריכת הכותרות או טקסט הפתיחה אפשר לעדכן גם את ברירות המחדל באנגלית המופיעות שם.

## הוספת פרויקט

הוסיפו רשומה למערך `projects` ב־`content.js`. `title` ו־`description` הם הטקסט בכרטיס. השדות האחרים אופציונליים ומופיעים בפתיחת הפרטים. כל זוג תרגומים מופיע בסדר אנגלית, עברית.

```js
{
  type: 'project',
  title: ['English title', 'שם בעברית'],
  description: ['Short summary', 'תיאור קצר'],
  problem: ['Engineering problem', 'הבעיה ההנדסית'],
  solution: ['Implemented solution', 'הפתרון שפותח'],
  equipment: ['Technology or equipment'],
  images: [
    { src: './assets/project/image.webp', alt: ['Image description', 'תיאור התמונה'] }
  ],
  video: {
    url: '', // הדביקו כתובת HTTPS של סרטון YouTube
    poster: './assets/project/video-preview.webp'
  }
}
```

את התמונות ואת תמונת התצוגה המקדימה שמרו בתיקיית `assets`. אפשר להשמיט את `poster` כדי להשתמש בתמונה הראשונה בגלריה. אם אין תמונה זמינה, יופיע כפתור הפעלה על רקע האתר. הנגן במצב Privacy Enhanced נוצר רק אחרי לחיצה. לפרויקט ללא סרטון, השמיטו את `video`. אפשר לעדכן את `projectIntro` ולהסיר כרטיסי קטגוריה כשמתחילים להוסיף פרויקטים בפועל.


## GitHub Pages

מקור הפרסום: **Settings → Pages → Deploy from a branch → main → /(root)**. העלו את תוכן התיקייה לשורש המאגר, כולל `.nojekyll`. אחרי הפעלת Pages, עדכונים לענף `main` יפורסמו אוטומטית. הכתובת הצפויה היא https://yairgorenn.github.io/yair-portfolio/.

