const hamburgerMenu = document.querySelector('.ham-container');
const linkContainer = document.querySelector('.link-container');

hamburgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  linkContainer.classList.toggle('visible');
  
  if (!this.classList.contains('active')) {
    linkContainer.classList.remove('visible');
  }
});