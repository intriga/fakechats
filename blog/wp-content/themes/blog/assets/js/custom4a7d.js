jQuery(document).ready(function($) {
    $(".header-search-btn").click(function(){
        $(".search-overlay").addClass('search-box-open');
    });
    $(".search-close-btn").click(function(){
        $(".search-overlay").removeClass('search-box-open');
    });     


    jQuery('.main-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        dots: false,
        arrows:true,  
        autoplay:true,
        autoplaySpeed:10000,    
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: false,                      
                arrows: false  
            }
        }]
    });

    jQuery(window).scroll(function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 100) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });

    // jQuery('#read-more').click(function() {
    //     jQuery('.excerpt-content').css({ 'max-height': 'unset'});
    //     jQuery(this).hide();
    // });

    

    jQuery("#main-menu .menu-item a").click(function() {   
        jQuery("#site-navigation").removeClass("toggled");
    });

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scrollToTop').fadeIn();
        } else {
            jQuery('#scrollToTop').fadeOut();
        }
    });

    jQuery('#scrollToTop').click(function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
;