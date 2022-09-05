$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 80) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});
 // slide-up script
 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
//typed
var typed = new Typed(".typing", {
    strings: ["Web Developer", "App Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
}); 
$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 80) {
            $('fixed-bottom').addClass("sticky");
        }
        else {
            $('fixed-bottom').removeClass("sticky");
        }
    });
});

