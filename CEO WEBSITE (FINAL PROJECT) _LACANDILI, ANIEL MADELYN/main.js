window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"; // Show the menu
    closeBtn.style.display = "inline-block"; // Show the close button
    menuBtn.style.display = "none"; // Hide the menu button (this was likely the intention)
});

// close nav menu

const closeNav = () => {
    menu.style.display = "none"; // Hide the menu
    closeBtn.style.display = "none"; // Hide the close button
    menuBtn.style.display = "inline-block"; // Show the menu button again
};

closeBtn.addEventListener('click', closeNav); 