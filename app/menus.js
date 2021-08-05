// ** DESKTOP AND HAMBURGER MENU FUNCTIONS

let hamburgerMenu = document.querySelector(".hamburger-menu");

let mobileMenu = document.querySelector(".mobile-menu");

let mobileMenuButton = document.getElementsByClassName("mobile-menu__list-button");


// Reset menus according to screen

function resetMenus() {
    
    if (window.innerWidth > 1024) {

        mobileMenu.classList.remove("mobile-menu--active");
        hamburgerMenu.classList.remove("hamburger-menu--active");

    } else if (window.innerWidth < 1025) {

        let desktopMenuButton = document.getElementsByClassName("desktop-menu__list-button");
        
        for (let index = 0; index < desktopMenuButton.length; index++) {
            desktopMenuButton[index].classList.remove("desktop-menu__list-button--active");
        }
        
    }
}

window.addEventListener("resize", resetMenus);


// Hamburger menu toggle

hamburgerMenu.addEventListener("click", function() {

    hamburgerMenu.classList.toggle("hamburger-menu--active");
    
    mobileMenu.classList.toggle("mobile-menu--active");

    if (hamburgerMenu.classList !== hamburgerMenu.classList.contains("hamburger-menu--active")) {
        
        let thisClass = document.querySelectorAll(".mobile-menu__list-button--active");

        for (let index = 0; index < thisClass.length; index++) {
            thisClass[index].classList.remove("mobile-menu__list-button--active");
        }
    } 
})


// Mobile menu toggle

for (let index = 0; index < mobileMenuButton.length; index++) {

    mobileMenuButton[index].addEventListener("click", function() {
        
        this.classList.toggle("mobile-menu__list-button--active");
        
        var clicked = mobileMenuButton[index];

        for (let index = 0; index < mobileMenuButton.length; index++) {
            
            let checkClick = mobileMenuButton[index];

            if (checkClick !== clicked) {
                mobileMenuButton[index].classList.remove("mobile-menu__list-button--active");
            }
        }
    })
    
}


// DESKTOP MENU TOGGLE

let desktopMenuButton = document.getElementsByClassName("desktop-menu__list-button");

for (let index = 0; index < desktopMenuButton.length; index++) {

    desktopMenuButton[index].addEventListener("click", function() {
        
        this.classList.toggle("desktop-menu__list-button--active");
        
        var clicked = desktopMenuButton[index];

        for (let index = 0; index < desktopMenuButton.length; index++) {
            
            let checkClick = desktopMenuButton[index];

            if (checkClick !== clicked) {
                desktopMenuButton[index].classList.remove("desktop-menu__list-button--active");
            }
        }
    })
    
}