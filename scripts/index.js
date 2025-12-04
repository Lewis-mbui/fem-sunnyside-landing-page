const headerNav = document.querySelector('.js-header__nav');
const toggleIcon = document.querySelector('.js-menu-icon');
const overlayDiv = document.querySelector('.js-overlay');

toggleIcon.addEventListener('click', () => {
  headerNav.classList.toggle('toggled');
});

overlayDiv.addEventListener('click', () => {
  headerNav.classList.toggle('toggled');
});