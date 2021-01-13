var $status = $('.pagingInfo');
var $slickElement = $('.slider_products');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if(!slick.$dots){
        return;
      }
      
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text('0' + i + '/' + '0' +(slick.$dots[0].children.length));
    });

$slickElement.slick({
  infinite: false,
  slidesToShow: 3,
  autoplay: false,
  dots: true,
 prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
});

/**/
$(document).ready(function() {
  var $slider = $('.slider_products');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    console.log(currentSlide);
    $progressBar
    .css('background-size', calc + '% 100%')
    .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
});

$(document).ready(function() {
	new WOW().init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.icon_backtotop').fadeIn();
    } else {
      $('.icon_backtotop').fadeOut();
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.section_header').addClass('bg_color');
    } else {
      $('.section_header').removeClass('bg_color');
    }
  });
  $('.icon_backtotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  
  $('.video .play_img').click(function(){
    $('.element_video').toggleClass('active');
  })
  $('.element_video .close_video span').click(function(){
    $('.element_video').toggleClass('active');
  })

  $('.section_slider_banner').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: true,
  });

  $('.element_slider_img').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next1.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next2.png' alt=''></button>",
  });

  $('.slider_news').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
  });

  $('.slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider_nav',
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
  });
  $('.slider_nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider_for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_nav').slick('setPosition');
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_for').slick('setPosition');
  });
  $('.slider_partner').slick({
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next5.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next6.png' alt=''></button>",
  });

  /*$('.slider_products').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
  });*/



    
});

