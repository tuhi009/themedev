$(function () {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });


    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $(function () {
        $(".timeline-Widget").css("backgound", "red");
    });

    $('.testimonial_section').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]

    })


    $('.about_slider').owlCarousel({
        loop: true,
        margin: 10,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        },
        navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]

    });




})

$('.testimonial_slide').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    },
    navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]

});


//<!-- text changer js -->
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 40,
        backSpeed: 10,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
        onComplete: function (self) {
            prettyLog('onComplete ' + self);
        },
        preStringTyped: function (pos, self) {
            prettyLog('preStringTyped ' + pos + ' ' + self);
        },
        onStringTyped: function (pos, self) {
            prettyLog('onStringTyped ' + pos + ' ' + self);
        },
        onLastStringBackspaced: function (self) {
            prettyLog('onLastStringBackspaced ' + self);
        },
        onTypingPaused: function (pos, self) {
            prettyLog('onTypingPaused ' + pos + ' ' + self);
        },
        onTypingResumed: function (pos, self) {
            prettyLog('onTypingResumed ' + pos + ' ' + self);
        },
        onReset: function (self) {
            prettyLog('onReset ' + self);
        },
        onStop: function (pos, self) {
            prettyLog('onStop ' + pos + ' ' + self);
        },
        onStart: function (pos, self) {
            prettyLog('onStart ' + pos + ' ' + self);
        },
        onDestroy: function (self) {
            prettyLog('onDestroy ' + self);
        }
    });
    
});

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
}


//slider