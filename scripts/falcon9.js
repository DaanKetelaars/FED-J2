/*********************

CONTENT: 
00 - VIDEO MODAL

***********/
/* VIDEO MODAL */

/* collect all queryselectors */
const videoModal = document.querySelector(".video-modal");
const videoPlayBtn = document.querySelector(".play-btn");
const videoSection = document.querySelector(".video_section");
const changeHeader = document.querySelector("header");
const closeModalBtn = document.querySelector(".close-modal");

/* simple addeventlistener with function to activate style and classlist properties */
videoPlayBtn.addEventListener("click", () => {
    videoModal.classList.add("slideinup");
    videoModal.classList.remove("slideoutdown");

    videoSection.classList.add("slideawayup");
    videoSection.classList.remove("slideawaydown");

    videoModal.style.zIndex = "9999";
    videoModal.style.visibility = "visible";
    videoModal.style.opacity = "1";

    closeModalBtn.style.display = "block";

    changeHeader.style.zIndex = "-1";
});

/* simple addeventlistener with function to activate style and classlist properties */
closeModalBtn.addEventListener("click", () => {
    videoModal.classList.add("slideoutdown");
    videoModal.classList.remove("slideinup");

    videoSection.classList.remove("slideawayup");
    videoSection.classList.add("slideawaydown");

    changeHeader.style.zIndex = "";

    closeModalBtn.style.display = "none";
});

/* GSAP IMAGE CHANGE ON SCROLL */


/* Register GSAP ScrollTrigger Plugin */
gsap.registerPlugin(ScrollTrigger);


/* function to add the right z-index to the bg images */
// more info: https://greensock.com/forums/topic/25163-understanding-gsapset-method/ 
// or: https://greensock.com/forums/topic/26670-create-pinned-parallax-with-fading-background-images/
gsap.set(".bg", {
    zIndex: (i, target, targets) => targets.length - i
});

/* Pauses animation */
// https://greensock.com/docs/v3/GSAP/Timeline/paused()
const imageChange = gsap.timeline({
    paused: false
});

/* set duration and other animation effects to fade in and out */
imageChange
    .to("body", {
        duration: 5.0
    }, 0)
    .to(".bg.one", {
        duration: 3.0,
        autoAlpha: 0
    }, 3.0)
    .to(".bg.two", {
        duration: 3.0,
        autoAlpha: 1
    }, 3.0);

/* create the scrolltrigger, pin the items to stay fixed and add the start + end point of the animation. */
ScrollTrigger.create({
    trigger: ".rocket_change_section",
    start: "top top",
    end: "+=200%",
    pin: ".bg-wrap",
    animation: imageChange,
    scrub: true,
});