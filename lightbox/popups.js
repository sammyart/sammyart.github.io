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
  $('#Starbucks').magnificPopup({
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
  $('#City_of_Tempe').magnificPopup({
    items: [
      { src: 'img/Tiger/Tiger_main 1920x1080.jpg' },
      { src: 'img/Tiger/black-tiger-t.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Einstein_Bros_Bagels').magnificPopup({
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
  $('#Samamama').magnificPopup({
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
  $('#Wish-Bone').magnificPopup({
    items: [
      { src: 'img/Wish-Bone/italian bottle frame_1920.jpg' },
      { src: 'img/Wish-Bone/WB couple_1920.jpg' },
      { src: "img/Wish-Bone/worlds color frame_1920.jpg" },
      { src: 'https://www.youtube.com/watch?v=uFXYwTafVqc?rel=0', type: 'iframe' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Eat_On_Campus').magnificPopup({
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
  $('#Meetro').magnificPopup({
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
  $('#infographics').magnificPopup({
    items: [
      { src: 'img/infographics/Infographic Main_1920.jpg' },
      { src: 'img/infographics/Journey info_web1920.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Logo').magnificPopup({
    items: [
      { src: 'img/logo/Amped slide.jpg' },
      { src: 'img/logo/Bowl n Roll_Slide_1920.jpg' },
      { src: 'img/logo/CCYA logo slide.jpg' },
      { src: 'img/logo/Corban dining_logo slide.jpg' },
      { src: 'img/logo/Koji slide.jpg' },
      { src: 'img/logo/MarketPlace SideBySide_1920.jpg' },
      { src: 'img/logo/Michellies logo slide.jpg' },
      { src: 'img/logo/SAM logo slide.jpg' },
      { src: 'img/logo/The Grove_logo slide.jpg' },
      { src: 'img/logo/UNLV logo slide.jpg' },
      { src: 'img/logo/Michellies pink logo slide.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Tropito').magnificPopup({
    items: [
      { src: 'img/Farm2Fork/Farm 2 Fork Menu_menu.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Brand').magnificPopup({
    items: [
      { src: 'img/brand/JC main_1920x1080.jpg' },
      { src: 'img/brand/Meetro spread_1920x1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#Signage').magnificPopup({
    items: [
      { src: 'img/signage/JC main_1920x1080.jpg' },
      { src: 'img/signage/Meetro spread_1920x1080.jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
});
