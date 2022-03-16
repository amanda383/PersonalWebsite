var script = document.createElement('script');
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


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
})