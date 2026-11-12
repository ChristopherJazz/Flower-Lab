
function initializeNavigation() {
  // Select HTML elements
  const menuToggle = document.querySelector('#menu-toggle');
  const mainNav = document.querySelector('#main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  // Open and close mobile menu
  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', isOpen);

    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  }

  // Close mobile menu
  function closeMenu() {
    mainNav.classList.remove('is-open');

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // Listen for hamburger button clicks
  menuToggle.addEventListener('click', toggleMenu);

  // Handle navigation link clicks
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {

      // Remove active class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      // Activate clicked link
      link.classList.add('active');

      // Close mobile menu
      closeMenu();
    });
  });

  // Close menu when Escape is pressed
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });
}

export { initializeNavigation };
