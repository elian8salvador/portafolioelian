/* Pinta el contenido de data/data.js en el HTML.
   No uses innerHTML con datos: todo se construye con nodos DOM (texto seguro). */
(() => {
  'use strict';

  const D = window.PORTFOLIO;
  if (!D) {
    console.error('No se encontró window.PORTFOLIO. ¿Está data/data.js cargado antes que render.js?');
    return;
  }

  /* ---------- utilidades ---------- */
  const h = (tag, props = {}, ...kids) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false || v === '') continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v);
    }
    for (const kid of kids.flat()) {
      if (kid != null && kid !== false) node.append(kid);
    }
    return node;
  };

  // Solo enlaces http(s), mailto, tel, anclas o rutas relativas
  const safeUrl = (u = '') =>
    /^(https?:|mailto:|tel:|#|\.{0,2}\/|[\w-]+\/)/i.test(u) ? u : '#';

  const mount = (id, ...nodes) => {
    const el = document.getElementById(id);
    if (el) el.replaceChildren(...nodes.flat().filter(Boolean));
    return el;
  };

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
    return el;
  };

  const reveal = (node, i = 0) => {
    node.classList.add('reveal');
    node.style.setProperty('--d', `${Math.min(i, 8) * 70}ms`);
    return node;
  };

  const chips = (list = []) =>
    h('ul', { class: 'chips mono' }, list.map((t) => h('li', { text: t })));

  const btn = (label, href, variant = 'ghost', external = false) =>
    h('a', {
      class: `btn btn-${variant}`,
      href: safeUrl(href),
      text: label,
      target: external ? '_blank' : null,
      rel: external ? 'noopener noreferrer' : null,
    });

  /* ---------- cabecera / portada ---------- */
  const P = D.profile;
  document.title = `${P.name} · ${P.role}`;
  setText('brand-name', P.name.toLowerCase().replace(/\s+/g, '.'));
  setText('hero-status', P.status);
  setText('hero-name', P.name);
  setText('hero-role', P.role);
  setText('hero-tagline', P.tagline);

  const cta = (extra = true) => {
    const nodes = [
      btn('Ver proyectos', '#proyectos', 'primary'),
      btn('Contactar', '#contacto', 'ghost'),
    ];
    if (extra && P.cv) nodes.push(btn('Descargar CV', P.cv, 'ghost', true));
    return nodes;
  };
  mount('hero-cta', cta());

  // Terminal: líneas fijas + línea que se escribe sola (effects.js)
  mount(
    'terminal-body',
    (P.terminal || []).map((l) =>
      h('div', { class: 'tline' },
        h('p', {}, h('span', { class: 'prompt', text: '$' }), ` ${l.cmd}`),
        h('p', { class: 'out', text: l.out }))),
    h('div', { class: 'tline' },
      h('p', {},
        h('span', { class: 'prompt', text: '$' }), ' ',
        h('span', { id: 'typed' }),
        h('span', { class: 'caret', 'aria-hidden': 'true' })))
  );

  /* ---------- sobre mí ---------- */
  const A = D.about;
  mount('about-text', A.paragraphs.map((t) => h('p', { text: t })));

  mount('about-facts', A.facts.map((f) =>
    h('div', { class: 'fact' }, h('dt', { class: 'mono', text: f.label }), h('dd', { text: f.value }))));

  mount('about-dual', A.dual.map((d, i) =>
    reveal(h('article', { class: 'card dual', 'data-domain': d.domain },
      h('p', { class: 'kicker mono', text: d.kicker }),
      h('h3', { text: d.title }),
      h('ul', { class: 'points' }, d.points.map((p) => h('li', { text: p })))), i)));

  mount('about-bridge',
    h('h3', { text: A.bridge.title }),
    h('ul', { class: 'bridge-list' }, A.bridge.items.map((t) => h('li', { text: t }))));

  mount('aspirations', D.aspirations.map((a, i) =>
    reveal(h('article', { class: 'card aspiration' },
      h('span', { class: 'num mono', text: String(i + 1).padStart(2, '0') }),
      h('h4', { text: a.title }),
      h('p', { text: a.text })), i)));

  /* ---------- experiencia y formación ---------- */
  mount('experience', D.experience.map((e, i) =>
    reveal(h('article', { class: 'tl-item card', 'data-type': e.type },
      h('p', { class: 'period mono', text: e.period }),
      h('h4', { text: e.role }),
      h('p', { class: 'org', text: e.org }),
      h('ul', { class: 'points' }, e.bullets.map((b) => h('li', { text: b })))), i)));

  mount('education', D.education.map((e, i) =>
    reveal(h('article', { class: 'tl-item card', 'data-type': e.type },
      h('p', { class: 'period mono', text: e.period }),
      h('h4', { text: e.title }),
      h('p', { class: 'org', text: e.org })), i)));

  /* ---------- áreas del curso + filtro ---------- */
  const cats = ['Todo', ...new Set(D.areas.map((a) => a.category))];
  const cards = D.areas.map((a, i) =>
    reveal(h('article', { class: 'card area', 'data-category': a.category },
      h('p', { class: 'kicker mono', text: a.category }),
      h('h4', { text: a.title }),
      h('p', { text: a.text }),
      chips(a.tools),
      a.link ? h('a', { class: 'more mono', href: safeUrl(a.link), target: '_blank', rel: 'noopener noreferrer', text: 'ver evidencia →' }) : null), i % 6));
  mount('areas', cards);

  const filterBtns = cats.map((c, i) =>
    h('button', { type: 'button', class: 'filter mono', 'aria-pressed': String(i === 0), 'data-cat': c, text: c }));
  mount('area-filters', filterBtns);

  document.getElementById('area-filters')?.addEventListener('click', (ev) => {
    const b = ev.target.closest('.filter');
    if (!b) return;
    filterBtns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const cat = b.dataset.cat;
    cards.forEach((c) => {
      const show = cat === 'Todo' || c.dataset.category === cat;
      c.hidden = !show;
      if (show) c.classList.add('in'); // evita que reaparezca invisible
    });
  });

  /* ---------- proyectos ---------- */
  mount('projects', D.projects.map((p, i) =>
    reveal(h('article', { class: 'card project', 'data-type': p.type },
      h('div', { class: 'project-top' },
        h('span', { class: 'badge mono', text: p.status }),
        h('span', { class: 'dot', 'aria-hidden': 'true' })),
      h('h3', { text: p.title }),
      h('p', { text: p.text }),
      chips(p.stack),
      p.links && p.links.length
        ? h('div', { class: 'project-links' }, p.links.map((l) => btn(l.label, l.url, 'ghost', true)))
        : null), i)));

  /* ---------- contacto ---------- */
  setText('contact-title', D.contact.title);
  setText('contact-text', D.contact.text);
  const contactBtns = [btn('Enviar email', `mailto:${P.email}`, 'primary')];
  if (P.linkedin) contactBtns.push(btn('LinkedIn', P.linkedin, 'ghost', true));
  if (P.github) contactBtns.push(btn('GitHub', P.github, 'ghost', true));
  mount('contact-cta', contactBtns);

  setText('year', String(new Date().getFullYear()));

  /* ---------- aviso de huecos sin rellenar ---------- */
  const pending = (JSON.stringify(D).match(/\[EDITAR/g) || []).length;
  if (pending) {
    console.warn(`[portfolio] Te quedan ${pending} hueco(s) [EDITAR] por rellenar en data/data.js antes de publicar.`);
  }
})();
