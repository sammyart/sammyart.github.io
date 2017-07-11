$(document).ready(function () {
	var markup =
				'<div class="mfp-figure">\n'+
					'<button title="Close" type="button" class="mfp-close">Close</button>\n'+
					'<figure class="inline-popup">\n'+
						'<img class="mfp-src mfp-img">\n'+
						'<figcaption class="mfp-bottom-bar">\n'+
							'<h1 class="mfp-title"></h1>\n'+
							'<dl class="dl-horizontal">\n'+
								'<dt>Contribution</dt><dd class="mfp-contr"></dd>\n'+
								'<dt>Usage</dt><dd class="mfp-usage"></dd>\n'+
								'<dt>Client</dt><dd class="mfp-client"></dd>\n'+
							'</dl>\n'+
							'<h2>&copy; <span class="mfp-copy"></span></h2>\n'+
						'</figcaption>\n'+
					'</figure>\n'+
				'</div>\n';

  $("body").swipe({
    swipeRight: function(event, direction, distance, duration, fingerCount) {
        $(".mfp-arrow-left").magnificPopup("prev");
    },
    swipeLeft: function() {
        $(".mfp-arrow-right").magnificPopup("next");
    },
    threshold: 50
  });
  
  if ( window.matchMedia("(orientation: landscape)").matches ) {
    $('#branding').magnificPopup({
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
    $('#collateral').magnificPopup({
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
    $('#infographics').magnificPopup({
      items: [
        { src: 'img/infographics/01 infographics (UCI).jpg' },
        { src: 'img/infographics/02 infographics (UCI).jpg' },
        { src: 'img/infographics/03 infographics (Journey).jpg' },
        { src: 'img/infographics/04 infographics (Carbon Icons).jpg' },
        { src: 'img/infographics/05 infographics (Carbon Footprint).jpg' },
        { src: 'img/infographics/07 infographics (HOPE).jpg' },
        { src: 'img/infographics/08 infographics (Evergreen vendor map).jpg' },
        { src: 'img/infographics/09 infographics (JJ was there).jpg' },
        { src: 'img/infographics/10 infographics (UCI vendor map).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('#logo_design').magnificPopup({
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
    $('#online').magnificPopup({
      items: [
        { src: 'img/online/01 online (SAM - spider queen).jpg' },
        { src: 'img/online/02 online (Transmacro).jpg' },
        { src: 'img/online/03 online (Santa Fe - spirits).jpg' },
        { src: 'img/online/04 online (Schuld - love story).jpg' },
        { src: 'img/online/05 online (Meetro).jpg' }
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
    $('#packaging').magnificPopup({
      items: [
        { src: 'img/packaging/01 packaging (Tropito).jpg' },
        { src: 'img/packaging/02 packaging (javacity).jpg' },
        { src: 'img/packaging/03 packaging (Junmai Ginjo Sake).jpg' },
        { src: 'img/packaging/04 packaging (Juice Core).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('#public_works').magnificPopup({
      items: [
        { src: 'img/public works/01 public works (Tempe bike month).jpg' },
        { src: 'img/public works/02p public works (tiger black t-shirt).jpg' },
        { src: 'img/public works/03 public works (spice trail).jpg' },
        { src: 'img/public works/04p public works (art attack).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
  }
  else {
    $('#online').magnificPopup({
      items: [
        { src: '<article class="inline-popup"><button title="Close" type="button" class="mfp-close">Close</button><img src="img/online/01p online (SAM - spider queen).jpg"></article>'
        },
        { src: '<article class="inline-popup"><button title="Close" type="button" class="mfp-close">Close</button><img src="img/online/02p online (Transmacro).jpg"></article>'
        },
        { src: '<article class="inline-popup"><button title="Close" type="button" class="mfp-close">Close</button><img src="img/online/03p online (Santa Fe - spirits).jpg"></article>'
        },
        { src: '<article class="inline-popup"><button title="Close" type="button" class="mfp-close">Close</button><img src="img/online/04p online (Schuld - love story).jpg"></article>'
        },
        { src: '<article class="inline-popup"><button title="Close" type="button" class="mfp-close">Close</button><img src="img/online/05p online (Meetro).jpg"></article>'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'inline',
      callbacks: {
        open: function() {
          $('#work').css({
            position: 'fixed'
          });
        },
        afterClose: function() {
          $('#work').css({
            position: ''
          });
        }
      }
    });
    $('#infographics').magnificPopup({
      items: [
        { src: '#infographics1' },
        { src: '#infographics2' },
        { src: '#infographics3' },
        { src: '#infographics4' },
        { src: '#infographics5' },
        { src: '#infographics8' }
      ],
      gallery: {
        enabled: true
      },
      type: 'inline',
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function() {
          $('html').addClass('mfp-helper');
        },
        open: function() {
          $('body').css({
            position: 'fixed'
          });
        },
        close: function() {
          $('html').removeClass('mfp-helper');
        },
        afterClose: function() {
          $('body').css({
            position: ''
          });
        }
      }
    });
    $('#branding').magnificPopup({
      items: [
        { src: '#branding1' },
        { src: '#branding2' },
        { src: '#branding3' },
        { src: '#branding4' }
      ],
      gallery: {
        enabled: true
      },
      type: 'inline',
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function() {
          $('html').addClass('mfp-helper');
        },
        open: function() {
          $('body').css({
            position: 'fixed'
          });
        },
        close: function() {
          $('html').removeClass('mfp-helper');
        },
        afterClose: function() {
          $('body').css({
            position: ''
          });
        }
      }
    });
    $('#Samamama').magnificPopup({
      items: [
        { src: '#Samamama1' },
        { src: '#Samamama2' }
      ],
      gallery: {
        enabled: true
      },
      type: 'inline',
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function() {
          $('html').addClass('mfp-helper');
        },
        open: function() {
          $('body').css({
            position: 'fixed'
          });
        },
        close: function() {
          $('html').removeClass('mfp-helper');
        },
        afterClose: function() {
          $('body').css({
            position: ''
          });
        }
      }
    });
    $('#collateral').magnificPopup({
      items: [
        { src: 'img/collateral/01p collateral (farm2fork).jpg' },
        { src: 'img/collateral/02p collateral (art attack).jpg' },
        { src: 'img/collateral/03p collateral (ABP).jpg' },
        { src: 'img/collateral/04p collateral (biz cards).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('#logo_design').magnificPopup({
      items: [
        { src: 'img/logo/01p logo design (Bowl n Roll).jpg' },
        { src: 'img/logo/02p logo design (Marketplace).jpg' },
        { src: 'img/logo/03p logo design (CCYA).jpg' },
        { src: 'img/logo/04p logo design (Corban Dining).jpg' },
        { src: 'img/logo/05p logo design (Amped).jpg' },
        { src: 'img/logo/06p logo design (The Grove).jpg' },
        { src: 'img/logo/07p logo design (Michellies).jpg' },
        { src: 'img/logo/08p logo design (Koji).jpg' },
        { src: 'img/logo/09p logo design (SAM).jpg' },
        { src: 'img/logo/10p logo design (UNLV).jpg' },
        { src: 'img/logo/12p logo design (v store).jpg' },
        { src: 'img/logo/13p logo design (meetro).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('#packaging').magnificPopup({
      items: [
        { src: 'img/packaging/01p packaging (Tropito).jpg' },
        { src: 'img/packaging/02p packaging (javacity).jpg' },
        { src: 'img/packaging/03p packaging (Junmai Ginjo Sake).jpg' },
        { src: 'img/packaging/04p packaging (Juice Core).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
    $('#public_works').magnificPopup({
      items: [
        { src: 'img/public works/01p public works (Tempe bike month).jpg' },
        { src: 'img/public works/02p public works (tiger black t-shirt).jpg' },
        { src: 'img/public works/03 public works (spice trail).jpg' },
        { src: 'img/public works/04p public works (art attack).jpg' }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
  };
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
      { src_img:	'img/posters/01 posters (EOS - full plate).jpg',
				title: 		'Your Plate Is Full',
				contr:		'Art Direction, Illustration, Design and Calligraphy',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2016' },
      { src_img: 	'img/posters/02 posters (EOS - campus eats).jpg',
				title: 		'EAT',
				contr:		'Art Direction and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2016' },
      { src_img:	'img/posters/03 posters (EOS - tree).jpg',
				title: 		'Pick Your Favorite',
				contr:		'Art Direction and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2016' },
      { src_img: 	'img/posters/04 posters (EOS - bob breakfast).jpg',
				title: 		'Good Days',
				contr:		'Art Direction, Illustration and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2014' },
      { src_img: 	'img/posters/05 posters (EOS - explore).jpg',
				title: 		'Explore Your Universe',
				contr:		'Art Direction and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2014' },
      { src_img: 	'img/posters/06 posters (EOS - happy place).jpg',
				title: 		'Happy Place',
				contr:		'Art Direction, Illustration, Design and Calligraphy',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2016' },
      { src_img: 	'img/posters/07 posters (EOS - funky flag).jpg',
				title: 		'What’s For Lunch?',
				contr:		'Art Direction, Illustration and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2012, 2016' },
      { src_img: 	'img/posters/08 posters (EOS - think outside).jpg',
				title: 		'Think Outside',
				contr:		'Art Direction and Design',
				usage:		'Print',
				client:		'Eat On Campus',
				copy: 		'2016' },
      { src_img: 	'img/posters/09 posters (Meetro - Peppermint Mocha).jpg',
				title: 		'Peppermint Mocha Latte',
				contr:		'Logo, Illustration and Design',
				usage:		'POP Signage and Social Media',
				client:		'Portland State University',
				copy: 		'2016' },
      { src_img: 	'img/posters/10 posters (Meetro - White Chocolate).jpg',
				title: 		'White Chocolate Mocha Latte',
				contr:		'Logo, Illustration and Design',
				usage:		'POP Signage and Social Media',
				client:		'Portland State University',
				copy: 		'2015' },
      { src_img: 	'img/posters/11 posters (Meetro - London Fog).jpg',
				title: 		'London Fog Latte',
				contr:		'Logo, Illustration and Design',
				usage:		'POP Signage and Social Media',
				client:		'Portland State University',
				copy: 		'2016' },
      { src_img: 	'img/posters/12 posters (Meetro - Vanilla Latte Swirly).jpg',
				title: 		'Vanilla Latte',
				contr:		'Logo, Illustration and Design',
				usage:		'POP Signage and Social Media',
				client:		'Portland State University',
				copy: 		'2016' },
      { src_img: 	'img/posters/13 posters (Meetro - Pumpkin Latte).jpg',
				title: 		'Pumpkin Spice Latte',
				contr:		'Logo, Illustration and Design',
				usage:		'POP Signage and Social Media',
				client:		'Portland State University',
				copy: 		'2015' }],
		inline: {
			markup: markup
		},
    gallery: {
      enabled: true
    }
  });
});
