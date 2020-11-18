/*********************

CONTENT: 
01 - HAMBURGER MENU
02 - BACKGROUND IMAGES (HOMEPAGE)
03 - FADEIN ON SCROLL

***********/





/* HAMBURGER MENU */
const hamMenu = document.querySelector('.btn_menu');
const subNav = document.querySelector('.sub_nav');
const overlayMenu = document.querySelector('.overlay');


hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('open_hamMenu');
    subNav.classList.toggle('open_subNav');
    overlayMenu.classList.toggle('open_overlay');
});



/* BACKGROUND IMAGES (HOMEPAGE) */

const bgImg = document.querySelectorAll('[data-bg');
const screenWidth = window.innerWidth;

for (let index = 0; index < bgImg.length; index++) {

    if (screenWidth < 768) {

        bgImg[index].style.backgroundImage = 'url(' + bgImg[index].getAttribute('data-bg-mobile') + ')';
        bgImg[index].style.backgroundRepeat = "no-repeat";
        bgImg[index].style.backgroundSize = "cover";
        bgImg[index].style.backgroundPosition = "bottom center";




    } else {
        bgImg[index].style.backgroundImage = 'url(' + bgImg[index].getAttribute('data-bg-desktop') + ')';
        bgImg[index].style.backgroundRepeat = "no-repeat";
        bgImg[index].style.backgroundSize = "cover";
        bgImg[index].style.backgroundPosition = "bottom center";
    }
}

/* FADEIN ON SCROLL */

let fadeInElements = document.querySelectorAll(".fade-element");
window.addEventListener('scroll', fadeIn);

function fadeIn() {
    for (let i = 0; i < fadeInElements.length; i++) {
        const elem = fadeInElements[i]
        const distInView = elem.getBoundingClientRect().top - window.innerHeight - 50;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();