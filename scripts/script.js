/*********************

CONTENT: 
00 - HAMBURGER MENU
01 - FADE IN ON SCROLL
02 - FADE OUT ON SCROLL
03 - SHOW/HIDE NAV

***********/




/****************
HAMBURGER MENU 
************/

/* collect all queryselectors */
const hamMenu = document.querySelector('header button');
const subNav = document.querySelector('header nav:nth-of-type(2)');
const overlayMenu = document.querySelector('.overlay');


/* simple addeventlistener with function to activate style and classlist properties */
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('open_hamMenu');
    subNav.classList.toggle('open_subNav');
    overlayMenu.classList.toggle('open_overlay');
});



/****************
FADE IN ON SCROLL 
************/

/* fade in elements function, loop through all queryselectors, 
show class when elements are in users view, hide class when user is out of view */

const fadeElements = () => {

    const fadedElements = document.querySelectorAll(".fade-element");

    for (let i = 0; i < fadedElements.length; i++) {
        const elem = fadedElements[i]
        const distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeElements();

/* simple window addeventlistener on scroll */
window.addEventListener('scroll', fadeElements);




/****************
FADE OUT ON SCROLL 
************/


/* fade out elements function, loop through all queryselectors, 
drop opacity when items are out of users view, if not then show full opacity */
const fadeOut = () => {
    let curScrollPos = window.pageYOffset;
    let fadeOutElements = document.querySelectorAll('.outView');

    for (let i = 0; i < fadeOutElements.length; i++) {
        if (curScrollPos > 100) {
            fadeOutElements[i].style.opacity = -curScrollPos / 100 + 2;
        } else {
            fadeOutElements[i].style.opacity = 1;
        }

    }
}
/* simple window addeventlistener on scroll */
window.addEventListener('scroll', fadeOut);




/****************
SHOW/HIDE NAV 
************/

/* if scroll y axis is smaller then scrollposition show header, if not then hide header */
let scrollPosition = 0;
const header = document.querySelector('header');

const checkPos = () => {

    let windowY = window.scrollY;


    if (windowY < scrollPosition) {
        header.classList.add('visible');
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
        header.classList.remove('visible');
    }
    scrollPosition = windowY;
}
/* simple window addeventlistener on scroll */
window.addEventListener('scroll', checkPos);


/* EASTER EGG AUDIO */

const playGhostTown = (e) => {
    const audioGhostTown = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audioGhostTown) return; //stop the function from running all together
    audioGhostTown.currentTime = 0; // rewind to the start
    audioGhostTown.play();
}

const keys = document.querySelector('.key');

window.addEventListener('keydown', playGhostTown);