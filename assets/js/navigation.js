

let btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".navigation-right");

btn.addEventListener('click', () => {
    nav.classList.toggle("display-navigation");
    btn.classList.toggle("active-toggle");
});
