// Swiper

new Swiper(".team-slider", {
    loop:true,
            autoplay: {
      delay: 3000,
    },
    slidesPerView: 4.2,
    spaceBetween : 15,
    centeredSlides: true,
    slideToClickedSlide:true,
    speed: 600,
    threshold : 30,
  });

  new Swiper(".service-slider",{
    loop:true,
            autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween : 27,
    speed: 600,
  });