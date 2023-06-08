const hamburgerMenu = document.querySelector('.ham-container');

hamburgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
});
