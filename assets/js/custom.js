//About Slider
$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    });

    wow = new WOW();
    wow.init();

});
