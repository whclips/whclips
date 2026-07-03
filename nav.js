// Mobile menu toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if (!menuBtn || !mainNav) return;

  const iconMenu = menuBtn.querySelector('.icon-menu');
  const iconClose = menuBtn.querySelector('.icon-close');

  function closeMenu() {
    mainNav.classList.remove('mobile-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    if (iconMenu) iconMenu.hidden = false;
    if (iconClose) iconClose.hidden = true;
  }

  function openMenu() {
    mainNav.classList.add('mobile-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    if (iconMenu) iconMenu.hidden = true;
    if (iconClose) iconClose.hidden = false;
  }

  menuBtn.addEventListener('click', function () {
    const isOpen = mainNav.classList.contains('mobile-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close the menu if someone taps a link inside it
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close the menu if the viewport grows past mobile size
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });
});
