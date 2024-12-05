new Swiper('.swiper-card', {
    spaceBetween:40,
    loop: true,
  
    //pagination bullet
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakspoints:{
        0:{
            slidesperview:1
        },
        768:{
            slidesperview:2
        },
        1024:{
            slidesperview:3
        },
    }
  });