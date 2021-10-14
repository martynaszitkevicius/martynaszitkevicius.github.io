/*jquery*/


// closing navbar

$(document).click(function () {
    $('.navbar-collapse').collapse('hide');
});


$('.navbar-collapse a').click(function () {
    $('.navbar-collapse').collapse('hide');
    $('.animated-icon1').toggleClass('open');
});


$('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
});


$(document).ready(function () {

    // This will fire when document is ready:
    $(window).resize(function () {
        // This will fire each time the window is resized:
        if ($(window).width() > 575) {
            // if larger or equal
            $(document).on('click', 'a', function () {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 75,
                }, 500);
            });
        } else {
            // if smaller
            $(document).on('click', 'a', function () {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 48,
                }, 500);
            });
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});



