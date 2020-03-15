$(document).ready(function () {

    // Initialize and add the map
    function initMap() {
        // The location of 
        var Skowronia = {
            lat: 50.025050,
            lng: 19.966956
        };
        // The map
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 15,
                center: Skowronia
            });

        var marker = new google.maps.Marker({
            position: Skowronia,
            map: map
        });
    }
    initMap()

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