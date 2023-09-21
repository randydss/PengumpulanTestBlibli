const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
  footer.classList.toggle('expanded');
});

// JavaScript for scrolling to top
const scrollToTopButton = document.querySelector('.scroll-to-top-button');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
