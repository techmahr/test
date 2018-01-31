/*
Template Name: Cedex
Author: Mahroof Mahr
Version: 1.0
*/

jQuery(function ($) {

    'use strict';

    /* ======= Preloader ======= */
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    /* ======= Recent Project Carousel ======= */
    (function () {

      var owl = $(".recent-project-carousel");
     
      owl.owlCarousel({
          items : 5, //5 items above 1000px browser width
          itemsDesktop : [1024,4], //4 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 480
          itemsMobile : [479,1], //1 item between 480 and 0
          pagination : false // Show pagination
      });


      // Custom Navigation Events
      $(".btn-next").on('click', function(){
        owl.trigger('owl.next');
      })
      $(".btn-prev").on('click', function(){
        owl.trigger('owl.prev');
      })


    }());


    /* ======= Partner Carousel ======= */
    (function () {

      var owl = $(".partner-carousel");
     
      owl.owlCarousel({
          items : 4, //5 items above 1000px browser width
          itemsDesktop : [1024,4], //4 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 480
          itemsMobile : [479,1], //1 item between 480 and 0
          pagination : false // Show pagination
      });

    }());

});




