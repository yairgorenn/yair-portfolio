'use strict';

const page = document.documentElement;
const buttons = document.querySelectorAll('[data-lang]');
const { copy, expertise, projects, technologies } = portfolio;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function render(language) {
  const index = language === 'he' ? 1 : 0;
  const translated = pair => pair[index];
  page.lang = language;
  page.dir = index ? 'rtl' : 'ltr';
  for (const node of document.querySelectorAll('[data-copy]')) {
    node.textContent = translated(copy[node.dataset.copy]);
  }
  for (const node of document.querySelectorAll('[data-label]')) {
    node.setAttribute('aria-label', translated(copy[node.dataset.label]));
  }
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  }

  document.querySelector('#skills').replaceChildren(...expertise.map((title, i) => {
    const card = element('div', '', 'expert');
    const number = element('span', String(i + 1).padStart(2, '0'), 'card-index');
    number.setAttribute('aria-hidden', 'true');
    card.append(number, element('h3', translated(title)));
    return card;
  }));

  document.querySelector('#project-list').replaceChildren(...projects.map(project => {
    const card = element('article', '', 'project');
    const label = project.type === 'category' ? copy.category : copy.project;
    card.append(
      element('span', translated(label), 'card-index'),
      element('h3', translated(project.title)),
      element('p', translated(project.description))
    );
    if (project.image) {
      const image = element('img');
      image.loading = 'lazy';
      image.alt = project.imageAlt ? translated(project.imageAlt) : '';
      image.src = project.image;
      card.append(image);
    }
    return card;
  }));

  document.querySelector('#tech-list').replaceChildren(...technologies.map(name => {
    const item = element('li', name);
    item.dir = 'ltr';
    if (index) item.lang = 'en';
    return item;
  }));
}

const email = document.querySelector('#email');
if (portfolio.email) {
  email.href = 'mailto:' + portfolio.email;
  email.hidden = false;
  document.querySelector('#email-note').hidden = true;
}
document.querySelector('#github').href = portfolio.github;

if (portfolio.profileImage) {
  const portrait = document.querySelector('#portrait');
  portrait.addEventListener('load', () => { portrait.hidden = false; }, { once: true });
  portrait.src = portfolio.profileImage;
}

for (const button of buttons) {
  button.addEventListener('click', () => render(button.dataset.lang));
}
render('en');
