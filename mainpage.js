//page items

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//toggle
const toggle = document.getElementById('sun')
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-moon-fill')
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = 'white';
  }else{
    navbar.style.background = 'grey;'
    body.style.background = '#333136b6';
    body.style.transition = '2s';
  }
})