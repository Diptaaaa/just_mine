/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: 'fade',
});
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');

  // Toggle music on click
  document.body.addEventListener('click', function() {
      if (music.paused) {
          music.play();
      } else {
          music.pause();
      }
  });
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});

swiperThumbs.controller.control = swiperCards;