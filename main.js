particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  var swiper = new Swiper(".testimonialSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate:0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
