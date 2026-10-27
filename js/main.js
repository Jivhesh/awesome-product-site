/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.navbar__links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
  });
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    navbar.style.borderBottomColor = 'var(--clr-border)';
  } else {
    navbar.style.borderBottomColor = 'transparent';
  }

  lastScrollY = currentScrollY;
});

/* ============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */
const animateElements = () => {
  // Add .animate-on-scroll to elements we want to animate
  const selectors = [
    '.feature-card',
    '.testimonial-card',
    '.hero__badge',
    '.hero__title',
    '.hero__subtitle',
    '.hero__actions',
    '.hero__visual',
    '.cta__inner',
    '.section__label',
    '.section__title',
    '.section__subtitle'
  ];

  document.querySelectorAll(selectors.join(', ')).forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    el.style.transitionDelay = `${(i % 6) * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

animateElements();

/* ============================================
   CTA FORM HANDLER
   ============================================ */
const ctaForm = document.getElementById('cta-form');
if (ctaForm) {
  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = ctaForm.querySelector('.cta__input').value;
    
    // Replace this with your actual form handler
    alert(`Thanks for signing up with ${email}! 🎉`);
    ctaForm.reset();
  });
}

/* ============================================
   SMOOTH REVEAL ON PAGE LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
