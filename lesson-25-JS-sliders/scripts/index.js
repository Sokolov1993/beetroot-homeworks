const swiperElSectionFirst = document.querySelector('#swiper-1');

const swiperOne = new Swiper(swiperElSectionFirst, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: swiperElSectionFirst.querySelector('#swiper-pagination-first'),
    clickable: true,
  },
});

const swiperElSectionSecond = document.querySelector('#swiper-2');

const swiperTwo = new Swiper(swiperElSectionSecond, {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: false,
  navigation: {
    nextEl: document.querySelector('#swiper-buttonNext-section-2'),
    prevEl: document.querySelector('#swiper-buttonPrev-section-2'),
  },
});

const swiperElSectionThird = document.querySelector('#swiper-3');

const swiperThree = new Swiper(swiperElSectionThird, {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: document.querySelector('#swiper-buttonNext-section-3'),
    prevEl: document.querySelector('#swiper-buttonPrev-section-3'),
  },
});
