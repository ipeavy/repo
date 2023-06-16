const hamburgerMenu = document.querySelector('.ham-container');
const linkContainer = document.querySelector('.link-container');
const signupContainer = document.querySelector('.sign-up');

hamburgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  linkContainer.classList.toggle('visible');
  signupContainer.classList.add('black');
  
  if (!this.classList.contains('active')) {
    linkContainer.classList.remove('visible');
    signupContainer.classList.remove('black');
  }
});