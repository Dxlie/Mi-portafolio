document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');
  
  if (cursor && cursorRing) {
    document.addEventListener('mousemove', event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursorRing.style.left = `${event.clientX}px`;
      cursorRing.style.top = `${event.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('cursor--active');
      cursorRing.classList.add('cursor-ring--active');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('cursor--active');
      cursorRing.classList.remove('cursor-ring--active');
    });

    document.querySelectorAll('a, button, .btn').forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        cursorRing.classList.add('cursor-ring--hover');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        cursorRing.classList.remove('cursor-ring--hover');
      });
    });
  }

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      hamburger.classList.toggle('open');
    });

    // Cerrar menú al hacer click en un link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        hamburger.classList.remove('open');
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal
  const revealSections = () => {
    const windowHeight = window.innerHeight;
    document.querySelectorAll('.reveal').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  };

  revealSections();
  window.addEventListener('scroll', revealSections);
});
