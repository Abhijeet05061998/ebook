$(document).ready(function() {
  $(".js--popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  /* Animations on scroll */

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeInLeft");
    },
    {
      offset: "35%"
    }
  );

  // Promo date
  // var d = new Date();
  // var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // var month = d.getMonth();
  // var year = d.getFullYear();

  // $('.month').html(months[month]);
  // $('.year').html(year);
  // $('.day').html(daysInMonth[month]);

  $(".js--scroll-to-price").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".section-cta").offset().top - 60
      },
      800
    );
  });

  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          if ($("nav").hasClass("sticky")) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 90
              },
              1500
            );
          } else {
            $("html,body").animate(
              {
                scrollTop: target.offset().top // - 100
              },
              1500
            );
          }

          return false;
        }
      }
    });
  });

  /* Scroll on buttons */
  /*
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    */

  /* Animations on scroll */
  /*
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    */
});
