// firstviewのスライドショーを実装するために、Swiper.jsを使用

//  let wd = 1 + (window.innerWidth - 1200) / 1200; // 表示する枚数計算
//         console.log(wd);
//         const swiper = new Swiper('.swiper', {
//             // Optional parameters
//             loop: true,
//             centeredSlides: true,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },

//             slidesPerView: 1, // 一度に表示する枚数
//             centeredSlides: true,

//             speed: 1000, // スライドのスピード

//             // If we need pagination
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },

//             // Navigation arrows
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },

//             // And if we need scrollbar
//             scrollbar: {
//                 el: '.swiper-scrollbar',
//             },

//             breakpoints: {
//                 // when window width is >= 640px
//                 640: {
//                     slidesPerView: wd,
//                 }
//             }
//         });






const swiper = new Swiper('.firstview.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,

  },
  effect: 'fade', // フェード効果を追加
  speed: 1500,
});

const swiper2 = new Swiper('.gallery-slider.swiper', {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 3000,
  slidesPerView: 3,
  spaceBetween: 30,
});

// ==============================
// ハンバーガーメニュー開閉
// ==============================
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav');

if (hamburger && headerNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    headerNav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}
