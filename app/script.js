// ** MOBILE MENU FUNCTIONS

let navMainList = document.getElementsByClassName("top-nav__main-list");

let hamburgerMenu = document.querySelector(".hamburger-menu");

let hamburgerMenuImg = document.getElementById("hamburger-img");

let mobileMenu = document.querySelector(".mobile-menu");

// HAMBURGER-MENU TOGGLE

hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("mobile-menu--active");

    if (mobileMenu.classList.contains("mobile-menu--active")) {
        hamburgerMenuImg.src = "images/icon-close.svg";
    } else {
        hamburgerMenuImg.src = "images/icon-hamburger.svg";
    }
});

// HAMBURGER-MENU LIST ITENS TOGGLE

for (let index = 0; index < navMainList.length; index++) {
    navMainList[index].addEventListener("click", function () {
        this.classList.toggle("top-nav__main-list--active");
    })
}


// ** DESKTOP MENU FUNCTIONS

let desktopMenu = document.getElementsByClassName("desktop-menu-main");

let desktopMenuSub = document.querySelector(".desktop-menu__sub-list");

for (let index = 0; index < desktopMenu.length; index++) {
    desktopMenu[index].addEventListener("click", function() {
        this.classList.toggle("desktop-menu-active");
    })
}