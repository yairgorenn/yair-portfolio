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

function renderGroups(container, groups, translated, technology = false) {
  container.replaceChildren(...groups.map(group => {
    const panel = element('div', '', 'group-panel');
    const list = element('ul', '', technology ? 'chips' : 'expert-items');
    list.replaceChildren(...group.items.map(value => {
      const item = element('li', technology ? value : translated(value));
      if (technology) {
        item.dir = 'ltr';
        item.lang = 'en';
      }
      return item;
    }));
    panel.append(element('h3', translated(group.title)), list);
    return panel;
  }));
}


const languageKey = 'yair-portfolio.language';

function initialLanguage() {
  try {
    const saved = localStorage.getItem(languageKey);
    if (saved === 'en' || saved === 'he') return saved;
  } catch {
    // Storage can be blocked. The language switch still works for this visit.
  }

  const preferred = navigator.languages?.[0] || navigator.language || '';
  return /^(he|iw)(-|$)/i.test(preferred) ? 'he' : 'en';
}

function youtubeId(value) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;

    const [, path, segment] = url.pathname.split('/');
    let id;
    if (url.hostname === 'youtu.be') {
      id = path;
    } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
      if (path === 'watch') id = url.searchParams.get('v');
      if (['embed', 'shorts', 'live'].includes(path)) id = segment;
    }
    return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function projectImage({ src, alt }, translated) {
  const image = element('img');
  image.loading = 'lazy';
  image.alt = alt ? translated(alt) : '';
  image.src = src;
  return image;
}

function videoPreview(id, poster, title, translated) {
  const video = element('div', '', 'project-video');
  const play = element('button', '', 'video-preview');
  play.type = 'button';
  const label = translated(copy.playVideo);
  play.setAttribute('aria-label', label + ': ' + title);
  if (poster) play.append(projectImage({ src: poster }, translated));
  play.append(element('span', '▶ ' + label, 'video-caption'));

  play.addEventListener('click', () => {
    const player = element('iframe');
    player.title = label + ': ' + title;
    player.allow = 'autoplay; encrypted-media; picture-in-picture';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
    video.replaceChildren(player);
    player.focus();
  }, { once: true });

  video.append(play);
  return video;
}

function projectCard(project, translated) {
  const card = element('article', '', 'project');
  const label = project.type === 'category' ? copy.category : copy.project;
  const title = translated(project.title);
  card.append(
    element('span', translated(label), 'card-index'),
    element('h3', title),
    element('p', translated(project.description))
  );

  // Keep the original single-image field usable alongside the new gallery.
  if (project.image) card.append(projectImage({ src: project.image, alt: project.imageAlt }, translated));

  const { problem, solution, equipment, images, video } = project;
  const id = youtubeId(video?.url);
  if (!problem && !solution && !equipment?.length && !images?.length && !id) return card;

  const details = element('details', '', 'project-details');
  details.append(element('summary', translated(copy.projectDetails)));
  for (const [heading, body] of [[copy.projectProblem, problem], [copy.projectSolution, solution]]) {
    if (!body) continue;
    details.append(element('h4', translated(heading)), element('p', translated(body)));
  }
  if (equipment?.length) {
    const list = element('ul', '', 'chips');
    list.append(...equipment.map(name => {
      const item = element('li', name);
      item.dir = 'auto';
      return item;
    }));
    details.append(element('h4', translated(copy.projectEquipment)), list);
  }
  if (images?.length) {
    const gallery = element('div', '', 'project-gallery');
    gallery.append(...images.map(image => projectImage(image, translated)));
    details.append(gallery);
  }
  if (id) details.append(videoPreview(id, video.poster || images?.[0]?.src || project.image, title, translated));
  card.append(details);
  return card;
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

  renderGroups(document.querySelector('#skills'), expertise, translated);

  document.querySelector('#project-list').replaceChildren(...projects.map(project => projectCard(project, translated)));

  renderGroups(document.querySelector('#tech-list'), technologies, translated, true);
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
  button.addEventListener('click', () => {
    const language = button.dataset.lang;
    try {
      localStorage.setItem(languageKey, language);
    } catch {
      // The current page can still switch languages without storage.
    }
    render(language);
  });
}
render(initialLanguage());
