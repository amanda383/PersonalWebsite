
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });

    // toggle menu/navbar script

    $(".menu-btn").click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    
    $(".nav-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 1000);
    });

    $(".nav-Home").click(function() {
        $('html, body').animate({
            scrollTop: $("#Home").offset().top
        }, 1000);
    });
    $(".nav-experiences").click(function() {
        $('html, body').animate({
            scrollTop: $("#Experiences").offset().top
        }, 1000);
    });

    $(".nav-projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#Projects").offset().top
        }, 1000);
    });

    $('.menu a').click(function(){
        $(".menu").collapse('hide');
    });
})