$(function () {

  $('.navbar .nav-item').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    $('html, body').animate({

      scrollTop: $($(this).data('scroll')).offset().top

    }, 1000);

  })

  var winH = $(window).height(),
      upperH = $(".upper-bar").innerHeight(),
      navH = $('.navbar').innerHeight();

  $(".slider, .slider .carousel-item").height(winH - (upperH + navH));

  $(window).resize(function () {

    var winH = $(window).height(),
      upperH = $(".upper-bar").innerHeight(),
      navH = $('.navbar').innerHeight();

    $(".slider, .slider .carousel-item").height(winH - (upperH + navH));

  });

  $('.featured-work ul li').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).data('filter') === 'all') {

      $('.featured-work .shuffle-imgs .col-md').css('opacity', '1.0');

    } else {

      $('.featured-work .shuffle-imgs .col-md').css('opacity', '0.2');

      $($(this).data('filter')).parent().css('opacity', '1.0');

    }

  });

  $(window).scroll(function () {

    if ($(window).scrollTop() >= '400') {

      $('.scroll-top').fadeIn(500);

  } else {

    $('.scroll-top').fadeOut(500);

  }

  })

  $('.scroll-top').click(function () {

    $('html, body').animate({

      scrollTop: 0

    }, 1000);

  });

});