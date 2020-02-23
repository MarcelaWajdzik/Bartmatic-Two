$(document).ready(function () {

    var btn = $('#top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on("click", function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    })



    //nav 
    $('nav a').on('click', function () {
        const goToSection = "#" + $(this).attr('class');
        $("html, body").animate({
            scrollTop: $(goToSection).offset().top
        }, 800)
    })
})