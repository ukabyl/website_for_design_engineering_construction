$(function() {

	// *********************************** Sidebar
  $( "#sidebar" ).simplerSidebar( {
      align: 'left',
      init: 'closed',
      selectors: {
          trigger: ".hamburger",
          quitter: ".close-sidebar"
      }
  });
  // *********************************** Sidebar

	$('.main-slider').slick({
	  infinite: true,
	  arrows: false,
	  speed: 1000,
	  fade: true,
	  autoplay: true,
	  cssEase: 'linear'
	});


	$.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
      new BeerSlider(this, options);
    });
  };
  $('.beer-slider').BeerSlider({start: 25});

  $('.comparison-slider').slick({
  	centerMode: true,
	  centerPadding: '250px',
	  slidesToShow: 1,
	  draggable: false,
	  swipe: false,
	  touchMove: false,
	  prevArrow: '<button class="arrow arrow-prev"><img src="../img/arrow-left-min.png" alt="Назад" /></button>',
	  nextArrow: '<button class="arrow arrow-next"><img src="../img/arrow-right-min.png" alt="Вперёд" /></button>',
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        centerPadding: '40px',
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        centerPadding: '0px',
	      }
	    }
	  ]
  });

  // *********************************** Accordion
  $(".faq-accordion").accordionjs({
  	activeIndex : false
  });
 	// *********************************** Accordion
	
	// *********************************** Founder MB SLIDER
 	$('.founder-block_mb').slick({
 		arrows: false,
 		autoplay: 1000
 	});
 	// *********************************** Founder MB SLIDER

 	// ********** Comment slider
    let coworker = $('.comment-cards');
    let coworkerSettings = {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        autoplay: 2000,
    };
    $(window).on('resize load', function(){
        if($(window).width() > 992){
            if(coworker.hasClass('slick-initialized')){
                coworker.slick('unslick')
            }
            return 0;
        }
        if(!coworker.hasClass('slick-initialized')){
            return coworker.slick(coworkerSettings)
        }
    });
  // ********** Comment slider

  // ***************************************** Manager & Helper
	$('.manager').click(function() {
		$('.helper').toggleClass('active');
	})
	$('.helper__close').click(function() {
		$('.helper').removeClass('active');
	})
	// ***************************************** Manager & Helper

	// *****************************************Anchor & Close mmenu
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    // *****************************************Anchor & Close mmenu

    // *****************************************Mask input
      $('.tel-mask').mask("+7(999) 999-9999");
    // *****************************************Mask input
		
		// *****************************************Fancybox settings
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.animationEffect = "fade";
    $.fancybox.defaults.animationDuration = 1000;
    // *****************************************Fancybox settings

});
