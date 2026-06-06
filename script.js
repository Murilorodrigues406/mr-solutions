// ===== ANO ATUAL NO FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== MENU MOBILE =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ===== HEADER COM SOMBRA AO ROLAR =====
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== ANIMAÇÃO AO SCROLL (IntersectionObserver) =====
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // pequeno stagger para elementos próximos
        setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}
