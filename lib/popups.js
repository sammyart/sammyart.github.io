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
  $('#promotions').magnificPopup({
    items: [
      { src: 'img/promotions/01 promotions (starbucks - squirrels).jpg' },
      { src: 'img/promotions/02 promotions (starbucks - holiday duo).jpg' },
      { src: 'img/promotions/03 promotions (starbucks - blender).jpg' },
      { src: 'img/promotions/04 promotions (starbucks - frappy hour).jpg' },
      { src: 'img/promotions/05 promotions (starbucks - caramel macchiato).jpg' },
      { src: 'img/promotions/06 promotions (starbucks - mango iced tea).jpg' },
      { src: 'img/promotions/07 promotions (starbucks - December).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#public_works').magnificPopup({
    items: [
      { src: 'img/public works/01 public works (Tempe bike month).jpg' },
      { src: 'img/public works/02 public works (tiger black t-shirt).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#campaigns').magnificPopup({
    items: [
      { src: 'img/campaigns/01 campaigns (EBB - tiramisu mob).jpg' },
      { src: 'img/campaigns/02 campaigns (EBB - tiramisu venice).jpg' },
      { src: 'img/campaigns/03 campaigns (EBB - irish cream).jpg' },
      { src: 'img/campaigns/04 campaigns (EBB - italian soda).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Samamama').magnificPopup({
    items: [
      { src: 'img/Samamama/01 Samamama (faces).jpg' },
      { src: 'img/Samamama/02 Samamama (web site).jpg' },
      { src: 'img/Samamama/03 Samamama (collateral).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Wish-Bone').magnificPopup({
    items: [
      { src: 'img/Wish-Bone/01 Wish-Bone (italian bottle).jpg' },
      { src: 'img/Wish-Bone/02 Wish-Bone (couple).jpg' },
      { src: 'img/Wish-Bone/03 Wish-Bone (worlds color).jpg' },
      { src: 'https://www.youtube.com/watch?v=uFXYwTafVqc?rel=0', type: 'iframe' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#posters').magnificPopup({
    items: [
      { src: 'img/posters/01 posters (full plate).jpg' },
      { src: 'img/posters/02 posters (campus eats).jpg' },
      { src: 'img/posters/03 posters (tree).jpg' },
      { src: 'img/posters/04 posters (bob breakfast).jpg' },
      { src: 'img/posters/05 posters (explore).jpg' },
      { src: 'img/posters/06 posters (happy place).jpg' },
      { src: 'img/posters/07 posters (funky flag).jpg' },
      { src: 'img/posters/08 posters (think outside).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#identity').magnificPopup({
    items: [
      { src: 'img/identity/01 identity (Peppermint Mocha).jpg' },
      { src: 'img/identity/02 identity (White Chocolate).jpg' },
      { src: 'img/identity/03 identity (London Fog).jpg' },
      { src: 'img/identity/04 identity (Vanilla Latte Swirly).jpg' },
      { src: 'img/identity/05 identity (Pumpkin Latte).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Infographics').magnificPopup({
    items: [
      { src: 'img/infographics/01 infographics (UCI).jpg' },
      { src: 'img/infographics/02 infographics (UCI).jpg' },
      { src: 'img/infographics/03 infographics (Journey).jpg' },
      { src: 'img/infographics/04 infographics (Carbon Icons).jpg' },
      { src: 'img/infographics/05 infographics (Carbon Footprint).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Logo_Design').magnificPopup({
    items: [
      { src: 'img/logo/01 logo design (Bowl n Roll).jpg' },
      { src: 'img/logo/02 logo design (Marketplace).jpg' },
      { src: 'img/logo/03 logo design (CCYA).jpg' },
      { src: 'img/logo/04 logo design (Corban Dining).jpg' },
      { src: 'img/logo/05 logo design (Amped).jpg' },
      { src: 'img/logo/06 logo design (The Grove).jpg' },
      { src: 'img/logo/07 logo design (Michellies).jpg' },
      { src: 'img/logo/08 logo design (Koji).jpg' },
      { src: 'img/logo/09 logo design (SAM).jpg' },
      { src: 'img/logo/10 logo design (UNLV).jpg' },
      { src: 'img/logo/11 logo design (Feverish).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Packaging').magnificPopup({
    items: [
      { src: 'img/packaging/01 packaging (Tropito).jpg' },
      { src: 'img/packaging/02 packaging (Junmai Ginjo Sake).jpg' },
      { src: 'img/packaging/03 packaging (Juice Core).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Branding').magnificPopup({
    items: [
      { src: 'img/branding/01 branding (Juice Core).jpg' },
      { src: 'img/branding/02 branding (CCYA).jpg' },
      { src: 'img/branding/03 branding (Grove).jpg' },
      { src: 'img/branding/04 branding (Meetro).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  $('#Collateral').magnificPopup({
    items: [
      { src: 'img/collateral/01 collateral (farm2fork).jpg' },
      { src: 'img/collateral/02 collateral (art attack).jpg' },
      { src: 'img/collateral/03 collateral (ABP).jpg' },
      { src: 'img/collateral/04 collateral (biz cards).jpg' }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
});
