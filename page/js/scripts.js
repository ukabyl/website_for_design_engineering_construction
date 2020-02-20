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
	  prevArrow: '<button class="arrow arrow-prev"><img src="img/arrow-left-min.png" alt="Назад" /></button>',
	  nextArrow: '<button class="arrow arrow-next"><img src="img/arrow-right-min.png" alt="Вперёд" /></button>',
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
	
	// // *********************************** Founder MB SLIDER
 // 	$('.founder-block_mb').slick({
 // 		arrows: false,
 // 		autoplay: 1000
 // 	});
 // 	// *********************************** Founder MB SLIDER

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

  $('.helper__button').click(function() {
    $('.helper').removeClass('active');
  });
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


const vm = new Vue({
  el: '#test',
  data: {
    step: 1,
    object: {
      name: '',
      img: ''
    },
    objectOther: '',
    objectAndObjectOtherSwitcher: false,
    style: {
      name: '',
      img: ''
    },
    styleOther: '',
    styleAndObjectOtherSwitcher: false,
    square: '',
    what: '',
    additional: [],
    deadline: '',
    contactWith: '',
    name: '',
    phone: '',
    email: ''
  },
  methods: {
    nextStep: function() {

      var vm = this;

      switch(vm.step) {
        case 1:
          if ( vm.object.name !== '' || vm.objectOther !== '' ) {
            vm.step = 2;
          } else {
            vm.errorMessage();
          }
          break;
        case 2:
          if ( vm.square !== '' ) {
            vm.step = 3;
          } else {
            vm.errorMessage();
          }
          break;
        case 3:
          if ( vm.style.name !== '' || vm.styleOther !== '' ) {
            vm.step = 4;
          } else {
            vm.errorMessage();
          }
          break;
        case 4:
          if ( vm.what !== '' ) {
            vm.step = 5;
          } else {
            vm.errorMessage();
          }
          break;
        case 5:
          if ( vm.additional.length !== 0 ) {
            vm.step = 6;
          } else {
            vm.errorMessage();
          }
          break;
        case 6:
        if ( vm.deadline !== '' ) {
          vm.step = 7;
        } else {
          vm.errorMessage();
        }
        break;
        case 7:
          if ( vm.contactWith !== '' ) {
            vm.step = 8;
          } else {
            vm.errorMessage();
          }
          break;
        case 8:
          if ( vm.name !== '' && vm.phone !== '' ) {

            var templ = this.object.name;
            
            let $data = 'name=' + this.name + '&site_type=3&' + '&email=' + this.email + '&phone=' + this.phone + '&message=';
            $data += `<table class="table table-bordered 
            table-striped">
              <tr><td>Объект</td><td>${this.objectOther == '' ? templ : this.objectOther}</td></tr></tr>
              <tr><td>Стиль дизайна</td><td>${this.styleOther == '' ? templ : this.styleOther}</td></tr>
              <tr><td>Что необходимо</td><td>${this.what}</td></tr>
              <tr><td>Дополнительные функции</td><td>${this.additional}</td></tr>
              <tr><td>Когда нужен готовый дизайн проект</td><td>${this.deadline}</td></tr>
              <tr><td>Как Вам будет удобно получить информацию от нас?</td><td>${this.contactWith}</td></tr>
            </table>`;

            console.log($data);

            $.fancybox.close();
          } else {
            vm.errorMessage();
          }
          break;
      }

    },
    errorMessage: function() {
      var vm = this;
      vm.$refs.errorMessage.classList.add('active');
      setTimeout(function() {
        vm.$refs.errorMessage.classList.remove('active');
      }, 2000)
    }
  },
  watch: {
    objectAndObjectOtherSwitcher: function(val) {
      if ( val === false ) {
        this.object.name = '';
        this.object.img = '';
      }
    },
    objectOther: function(val) {
      if ( val !== '' ) {
        this.objectAndObjectOtherSwitcher = false;
      }
    },
    'object': {
      handler: function(val, oldVal) {
        if ( val.name !== '' ) {
          this.objectAndObjectOtherSwitcher = true;
          this.objectOther = '';
        }
      },
      deep: true
    },
    styleAndObjectOtherSwitcher: function(val) {
      if ( val === false ) {
        this.style.name = '';
        this.style.img = '';
      }
    },
    styleOther: function(val) {
      if ( val !== '' ) {
        this.style.AndObjectOtherSwitcher = false;
      }
    },
    'style': {
      handler: function(val, oldVal) {
        if ( val.name !== '' ) {
          this.styleAndObjectOtherSwitcher = true;
          this.styleOther = '';
        }
      },
      deep: true
    }
  },
  mounted() {
    var vm = this;

    $('.tel-maskvue').mask("+7(999) 999-9999", {
      completed: function() {
        vm.phone = $( this ).val();
      }
    });
  }
})