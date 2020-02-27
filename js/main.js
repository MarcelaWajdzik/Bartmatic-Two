$(document).ready(function () {

    var btn = $('#top');
    var navHeight = $('nav').height()

    $(window).scroll(function () {
        if ($(window).scrollTop() > 450) {
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
            scrollTop: $(goToSection).offset().top - navHeight
        }, 800)
    })
})