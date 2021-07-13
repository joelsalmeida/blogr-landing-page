// ** MOBILE MENU FUNCTIONS

let navMainList = document.getElementsByClassName("top-nav__main-list");

let hamburgerMenu = document.querySelector(".hamburger-menu");

let hamburgerMenuImg = document.getElementById("hamburger-img");

let mobileMenu = document.querySelector(".mobile-menu");

// HAMBURGER-MENU TOGGLE

hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("mobile-menu--active");
});

// HAMBURGER-MENU LIST ITENS TOGGLE

for (let index = 0; index < navMainList.length; index++) {
    navMainList[index].addEventListener("click", function () {
        this.classList.toggle("top-nav__main-list--active");
    })
}