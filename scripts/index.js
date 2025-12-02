const headerNav = document.querySelector('.js-header__nav');
const toggleIcon = document.querySelector('.js-menu-icon');

toggleIcon.addEventListener('click', () => {
  headerNav.classList.toggle('toggled');
});