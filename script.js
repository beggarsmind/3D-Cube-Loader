window.addEventListener('load', function () {
  setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('fade-out');

    // Wait for transition to complete before hiding the loader
    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    });
  }, 3000); // Simulating a delay
});
