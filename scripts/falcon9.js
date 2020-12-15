/*********************

CONTENT: 
01 - VIDEO MODAL

***********/
/* VIDEO MODAL */

const videoModal = document.querySelector('.video-modal');
const videoPlayBtn = document.querySelector('.play-btn');
const videoSection = document.querySelector('.video');
const changeHeader = document.querySelector('header');
const closeModalBtn = document.querySelector('.close-modal');


videoPlayBtn.addEventListener('click', function () {

    videoModal.classList.add('slideinup');
    videoModal.classList.remove('slideoutdown');

    videoSection.classList.add('slideawayup');
    videoSection.classList.remove('slideawaydown');

    videoModal.style.zIndex = "9999";
    videoModal.style.visibility = "visible";

    closeModalBtn.style.display = "block";

    changeHeader.style.zIndex = "-1";
});
closeModalBtn.addEventListener('click', function () {

    videoModal.classList.add('slideoutdown');
    videoModal.classList.remove('slideinup');

    videoSection.classList.remove('slideawayup');
    videoSection.classList.add('slideawaydown');

    changeHeader.style.zIndex = "";

    closeModalBtn.style.display = "none";
});