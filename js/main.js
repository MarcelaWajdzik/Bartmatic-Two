$(document).ready(function () {

    var btn = $('#top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });


    //nav 
    $('  a').on('click', function () {
        const goToSection = "#" + $(this).attr('class');
        $('body,html').animate({
            scrollTop: $(goToSection).offset().top
        }, 1000)
    })
})