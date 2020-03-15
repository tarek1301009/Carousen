(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".owl-carousel").owlCarousel({
			loop:true,
            items:3,
            nav: false,
            dots: true,
            margin: 30,
			});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	