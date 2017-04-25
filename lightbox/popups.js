$(document).ready(function () {
  $('.magnific').magnificPopup({
    type: "image",
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 1000,
      easing: 'ease-in-out'
    }
  });
  $('#eoc-popup').magnificPopup({
    items: [
      { src: 'img/EOC/Campus Eats_main 1080x1375.jpg' },
      { src: 'img/EOC/EOC Tree_1080.jpg' },
      { src: 'img/EOC/explore_web_1080.jpg' },
      { src: 'img/EOC/Happy Place_1080.jpg' },
      { src: 'img/EOC/funky flag_web 1080x1375.jpg' },
      { src: 'img/EOC/Think Outside_1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#samamama-popup').magnificPopup({
    items: [
      { src: 'img/Samamama/Samamama_web_main1920.jpg' },
      { src: 'img/Samamama/sama collections screen_1920x1080.jpg' },
      { src: 'img/Samamama/Samamama package_1920x1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#tiger-popup').magnificPopup({
    items: [
      { src: 'img/Tiger/Tiger_main 1920x1080.jpg' },
      { src: 'img/Tiger/black-tiger-t.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#ebb-popup').magnificPopup({
    items: [
      { src: 'img/EBB/EBB Tiramisu mob_1080.jpg' },
      { src: 'img/EBB/EBB Tiramisu_venice_1080.jpg' },
      { src: 'img/EBB/EBB Irish Cream_1080.jpg' },
      { src: 'img/EBB/EBB Italian Soda_1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#starbucks-popup').magnificPopup({
    items: [
      { src: 'img/Starbucks/WPS_Holiday Duo_slide_1080x1375.jpg' },
      { src: 'img/Starbucks/blender wps_1080.jpg' },
      { src: 'img/Starbucks/Frappy Hour_1080x1375.jpg' },
      { src: 'img/Starbucks/Caramel Macchiato_WPSslide_1080x1375.jpg' },
      { src: 'img/Starbucks/Mango Iced Tea_WPSslide_1080x1375.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#farm2fork-popup').magnificPopup({
    items: [
      { src: '' },
      { src: 'img/Farm2Fork/Farm 2 Fork Menu_menu.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#juicecore-popup').magnificPopup({
    items: [
      { src: 'img/JuiceCore/JC main_1920x1080.jpg' },
      { src: 'img/JuiceCore/Meetro spread_1920x1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#wish-bone-popup').magnificPopup({
    items: [
      { src: 'img/Wish-Bone/italian bottle frame_1920.jpg' },
      { src: 'img/Wish-Bone/WB couple_1920.jpg' },
      { src: "img/Wish-Bone/worlds color frame_1920.jpg" },
      { src: 'https://www.youtube.com/watch?v=uFXYwTafVqc?rel=0',
        type: 'iframe' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#meetro-popup').magnificPopup({
    items: [
      { src: 'img/Meetro/Meetro spread_1920x1080.jpg' },
      { src: 'img/Meetro/Peppermint Mocha_Meetro_main1080x1375.jpg' },
      { src: 'img/Meetro/Meetro White Chocolate_slide_1080.jpg' },
      { src: 'img/Meetro/London Fog_Illustration_slide_1080.jpg' },
      { src: 'img/Meetro/Vanilla Latte Swirly web.jpg' },
      { src: 'img/Meetro/Meetro Pumpkin Latte_1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
});
