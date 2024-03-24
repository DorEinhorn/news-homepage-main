const menuClose = document.getElementById('menu-close');
const menuButton = document.getElementById('menu-button');
const navbar = document.querySelector('nav');

menuButton.addEventListener('click', () =>{
    navbar.classList.add("open");
})

menuClose.addEventListener('click', () =>{
    navbar.classList.remove("open");
})