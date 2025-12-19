document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const swapImages = header.querySelectorAll('img[data-light][data-dark]');
  const SCROLL_THRESHOLD = 10;

  function setScrolled(isScrolled) {
    if (isScrolled) {
      header.classList.add('scrolled');
      swapImages.forEach(img => img.src = img.dataset.dark);
    } else {
      header.classList.remove('scrolled');
      swapImages.forEach(img => img.src = img.dataset.light);
    }
  }


  setScrolled(window.scrollY > SCROLL_THRESHOLD);

  
  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  });
});
