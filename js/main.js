$(document).ready(function () {

    // ================= Navbar Scroll Effect =================
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.partner-navbar').addClass('scrolled');
        } else {
            $('.partner-navbar').removeClass('scrolled');
        }
    });

    // ================= FAQ Accordion =================
    $('.faq-question').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    if ($.fn.owlCarousel && $(".owl-carousel").length) {

        // ================= Testimonials Carousel =================
        $(".testimonial-grid").owlCarousel({
            loop: true,
            center: true,
            margin: 30,
            nav: true,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 700,
            navText: [
                "<i class='fa-solid fa-chevron-left'></i>",
                "<i class='fa-solid fa-chevron-right'></i>"
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            },
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        // ================= Integrations Carousel =================
        $(".integrations-logos-grid").owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            slideTransition: 'linear',
            responsive: {
                0: { items: 2 },
                480: { items: 3 },
                768: { items: 4 },
                1024: { items: 6 }
            }
        });
    }

    // ================= Mobile Menu Toggle =================
    $('.menu-toggle').on('click', function () {
        $('.nav-links').toggleClass('active');

        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    // ================= Mobile Dropdown Toggle =================
    $('.nav-item-dropdown .dropdown-trigger').on('click', function (e) {
        if ($(window).width() <= 992) {
            e.preventDefault();

            const currentDropdown = $(this).closest('.nav-item-dropdown');

            $('.nav-item-dropdown').not(currentDropdown).removeClass('active');

            currentDropdown.toggleClass('active');
        }
    });

    // ================= Nav Tabs =================
    $('.tab-btn').on('click', function () {
        const tabId = $(this).data('tab');

        $('.tab-content').removeClass('active');
        $('.tab-btn').removeClass('active');

        $('#' + tabId).addClass('active');
        $(this).addClass('active');
    });


    // ================= Scroll To Top Button =================
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    });

});