const menuToggle = document.getElementById("menuToggle");
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    body.classList.toggle("showMenu");
})