/* Efectos visuales: red de partículas, escritura en el terminal, reveal al scroll,
   menú móvil, sección activa y brillo que sigue al ratón. Respeta prefers-reduced-motion. */
(() => {
  'use strict';

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const D = window.PORTFOLIO;

  /* ---------- 1. Fondo: red de nodos ---------- */
  const canvas = document.getElementById('bg');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const LINK = 130;
    let w = 0, h = 0, pts = [], raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(80, Math.floor((w * h) / 22000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        mkt: Math.random() < 0.25, // 1 de cada 4 nodos en magenta (el lado "marketing")
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(124,107,255,${(1 - d / LINK) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = a.mkt ? 'rgba(255,63,216,.75)' : 'rgba(34,230,255,.75)';
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(() => { cancelAnimationFrame(raf); resize(); draw(); }, 150);
    });
    document.addEventListener('visibilitychange', () => {
      if (reduce) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else { cancelAnimationFrame(raf); draw(); }
    });
  }

  /* ---------- 2. Terminal: frases que se escriben solas ---------- */
  const typedEl = document.getElementById('typed');
  const phrases = D && D.profile && D.profile.typed;
  if (typedEl && phrases && phrases.length) {
    if (reduce) {
      typedEl.textContent = phrases[0];
    } else {
      let i = 0, j = 0, deleting = false;
      const tick = () => {
        const full = phrases[i];
        j += deleting ? -1 : 1;
        typedEl.textContent = full.slice(0, j);
        let delay = deleting ? 24 : 52;
        if (!deleting && j === full.length) { deleting = true; delay = 1800; }
        else if (deleting && j === 0) { deleting = false; i = (i + 1) % phrases.length; delay = 350; }
        setTimeout(tick, delay);
      };
      tick();
    }
  }

  /* ---------- 3. Reveal al hacer scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- 4. Enlace activo del menú ---------- */
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  // Se observa también la portada (#inicio) para limpiar el resaltado al volver arriba
  const sections = [
    document.getElementById('inicio'),
    ...links.map((a) => document.querySelector(a.getAttribute('href'))),
  ].filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) =>
          a.toggleAttribute('aria-current', a.getAttribute('href') === `#${e.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- 5. Menú móvil ---------- */
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- 6. Cabecera con fondo al hacer scroll ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 7. Brillo que sigue al ratón en las tarjetas ---------- */
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
})();
