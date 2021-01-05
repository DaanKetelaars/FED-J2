/*********************

CONTENT: 
00 - VIDEO MODAL

***********/
/* VIDEO MODAL */



/* collect all queryselectors */
const videoModal = document.querySelector('.video-modal');
const videoPlayBtn = document.querySelector('.play-btn');
const videoSection = document.querySelector('.video_section');
const changeHeader = document.querySelector('header');
const closeModalBtn = document.querySelector('.close-modal');

/* simple addeventlistener with function to activate style and classlist properties */
videoPlayBtn.addEventListener('click', () => {

    videoModal.classList.add('slideinup');
    videoModal.classList.remove('slideoutdown');

    videoSection.classList.add('slideawayup');
    videoSection.classList.remove('slideawaydown');

    videoModal.style.zIndex = "9999";
    videoModal.style.visibility = "visible";
    videoModal.style.opacity = "1";

    closeModalBtn.style.display = "block";

    changeHeader.style.zIndex = "-1";
});

/* simple addeventlistener with function to activate style and classlist properties */
closeModalBtn.addEventListener('click', () => {

    videoModal.classList.add('slideoutdown');
    videoModal.classList.remove('slideinup');

    videoSection.classList.remove('slideawayup');
    videoSection.classList.add('slideawaydown');

    changeHeader.style.zIndex = "";

    closeModalBtn.style.display = "none";
});