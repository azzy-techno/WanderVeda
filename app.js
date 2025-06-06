// import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.nav-bar');
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from current button
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        // Get new video source from data attribute
        let src = btn.getAttribute('data-src');

        // Update the video source and reload it
        let video = document.querySelector('#video-slider');
        video.src = src;
        video.load();      // Force the video to reload
        video.play();      // Start playing the new video
    });
});


window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',()=>{
    
    loginForm.classList.add('active');
});
formClose.addEventListener('click',()=>{
    
    loginForm.classList.remove('active');
});
menu.addEventListener('click',()=>{
    
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;

    });

});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
    
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        },
    },
    
});
