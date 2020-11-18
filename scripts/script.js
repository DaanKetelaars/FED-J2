/*********************

CONTENT: 
01 - HAMBURGER MENU
02 - BACKGROUND IMAGES (HOMEPAGE)

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

// var imageBgs = document.querySelectorAll('[data-bg]');
// var screenWidth = window.innerWidth;

// for(var i=0; i<imageBgs.length; i++) {
//     if( screenWidth < 768 ){
//         // Load mobile image
//         imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-mobile')+')';
//     } else if( screenWidth >= 768 && screenWidth <= 1024 ) {
//         // Ipad
//         imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-tablet')+')';
//     } else {
//         // desktop image
//         imageBgs[i].style.backgroundImage = 'url('+imageBgs[i].getAttribute('data-bg-img-desktop')+')';
//     }
// }