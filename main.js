// OBBO — interactions
(function () {
  'use strict';

  // ---- Refresh = retour en haut (hero), toujours ----
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Header : état au scroll ----
  const head = document.querySelector('.site-head');
  const onScroll = () => head.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Menu mobile ----
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu-mobile');

  function setMenu(open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.toggle('open', open));
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) setTimeout(() => { if (!menu.classList.contains('open')) menu.hidden = true; }, 400);
  }

  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
  });

  // ---- Révélations au scroll ----
  // Le hero est chorégraphié par l'intro ; le reste par IntersectionObserver.
  const heroEls = document.querySelectorAll('.hero .reveal, .hero .reveal-img');
  const scrollEls = document.querySelectorAll('.reveal:not(.hero .reveal), .reveal-img:not(.hero .reveal-img)');
  const showHero = () => heroEls.forEach(el => el.classList.add('in'));

  if (prefersReduced || !('IntersectionObserver' in window)) {
    scrollEls.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    scrollEls.forEach(el => io.observe(el));
  }

  // ---- Intro : rideau d'ouverture, à chaque chargement ----
  const intro = document.querySelector('.intro');

  if (!intro || prefersReduced) {
    if (intro) intro.classList.add('gone');
    showHero();
  } else {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      intro.classList.add('done');          // le rideau se lève
      showHero();                           // le hero se compose derrière
      document.body.style.overflow = '';
      setTimeout(() => intro.classList.add('gone'), 900);
    }, 1450);
  }
})();
