// variable 
const humbargerMenu = document.querySelector('.humbarger');
const navLink = document.querySelector('.nav-link');

// calling function 
humbargerMenu.addEventListener("click", () => {
     humbargerMenu.classList.toggle('active');
     navLink.classList.toggle('active');
});