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

function projectArchitecture({ steps, outputs }, translated) {
  const flow = element('ol', '', 'architecture-flow');
  for (const step of steps) {
    const stage = element('li');
    stage.append(element('span', translated(step), 'architecture-node'));
    flow.append(stage);
  }

  const branches = element('ul', '', 'architecture-outputs');
  branches.setAttribute('aria-label', translated(copy.projectOutputs));
  for (const output of outputs) {
    const branch = element('li');
    branch.append(element('span', translated(output), 'architecture-node'));
    branches.append(branch);
  }
  flow.lastElementChild.append(branches);
  return flow;
}

function projectResults(results, translated) {
  const stats = element('dl', '', 'project-stats');
  for (const { value, label } of results) {
    const metric = element('div');
    const number = element('dd', value);
    number.dir = 'ltr';
    metric.append(element('dt', translated(label)), number);
    stats.append(metric);
  }
  return stats;
}

function projectGallery(images, translated) {
  const gallery = element('div', '', 'project-gallery');
  for (const image of images) {
    const link = element('a');
    link.href = image.src;
    link.target = '_blank';
    link.rel = 'noopener';
    link.append(projectImage(image, translated), element('span', translated(copy.projectFullImage)));
    gallery.append(link);
  }
  return gallery;
}

function projectCard(project, translated, expanded) {
  const card = element('article', '', project.featured ? 'project project-featured' : 'project');
  if (project.id) card.id = project.id;
  const label = project.type === 'category' ? copy.category : copy.project;
  const title = translated(project.title);
  card.append(
    element('span', translated(label), 'card-index'),
    element('h3', title)
  );
  if (project.subtitle) card.append(element('p', translated(project.subtitle), 'project-subtitle'));
  card.append(element('p', translated(project.description)));

  // Keep the original single-image field usable alongside the new gallery.
  if (project.image) card.append(projectImage({ src: project.image, alt: project.imageAlt }, translated));

  const { overview, problem, solution, features, approach, architecture, results, equipment, role, images, video } = project;
  const id = youtubeId(video?.url);
  if (!overview && !problem && !solution && !architecture && !results?.length &&
      !features?.length && !approach?.length && !equipment?.length && !role && !images?.length && !id) return card;

  const details = element('details', '', 'project-details');
  details.open = expanded;
  details.append(element('summary', translated(copy.projectDetails)));

  if (project.featured && images?.length) details.append(projectGallery(images, translated));

  const sections = [
    [copy.projectOverview, overview],
    [project.featured ? copy.projectChallenge : copy.projectProblem, problem],
    [copy.projectSolution, solution]
  ];
  for (const [heading, body] of sections) {
    if (!body) continue;
    details.append(element('h4', translated(heading)), element('p', translated(body)));
  }

  for (const [heading, items, tag] of [
    [copy.projectFeatures, features, 'ul'],
    [copy.projectApproach, approach, 'ol']
  ]) {
    if (!items?.length) continue;
    const list = element(tag, '', 'project-detail-list');
    list.append(...items.map(item => element('li', translated(item))));
    details.append(element('h4', translated(heading)), list);
  }

  if (architecture) {
    details.append(element('h4', translated(copy.projectArchitecture)), projectArchitecture(architecture, translated));
  }
  if (results?.length) {
    details.append(
      element('h4', translated(copy.projectResults)),
      element('p', translated(copy.projectSnapshot)),
      projectResults(results, translated)
    );
  }
  if (equipment?.length) {
    const list = element('ul', '', 'chips');
    list.append(...equipment.map(name => {
      const item = element('li', name);
      item.dir = 'auto';
      return item;
    }));
    details.append(element('h4', translated(project.featured ? copy.projectTechnologies : copy.projectEquipment)), list);
  }
  if (role) details.append(element('h4', translated(copy.projectRole)), element('p', translated(role)));
  if (!project.featured && images?.length) details.append(projectGallery(images, translated));
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

  const projectList = document.querySelector('#project-list');
  const expanded = [...projectList.children].map(card => card.querySelector('details')?.open ?? false);
  projectList.replaceChildren(...projects.map((project, i) => projectCard(project, translated, expanded[i] ?? false)));

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
