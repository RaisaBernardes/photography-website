$(document).ready(function() {
    $(".nav-button").on("click", function(){
        $(".nav-button").toggleClass("change");
    });

    $(window).scroll(function(){ /*indent a little the navbar when the user scrolls*/
        let position = $(this).scrollTop();
        if(position >= 200) {
            $('.nav-menu').addClass('custom-navbar')
        } else {
            $('.nav-menu').removeClass('custom-navbar')
        }
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });
});