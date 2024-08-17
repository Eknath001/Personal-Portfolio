$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        $('.navbar').toggleClass("sticky", scrollTop > 20);
        $('.scroll-up-btn').toggleClass("show", scrollTop > 500);
    });

    // Slide-up on scroll-up button click
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
            $('html').css("scrollBehavior", "smooth");
        });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar menu on small screens
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["Full Stack Java Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // EmailJS initialization
    emailjs.init("your_public_key_here");

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const form = event.target;

        emailjs.sendForm("your_service_id_here", "your_template_id_here", form)
            .then(function(response) {
                document.getElementById("responseMessage").innerHTML = "<p class='text-success'>Message sent successfully!</p>";
                form.reset();
            }, function(error) {
                document.getElementById("responseMessage").innerHTML = "<p class='text-danger'>Oops! Something went wrong. Please try again.</p>";
                console.error('EmailJS Error:', error);
            });
    });

    // Toggle share buttons container visibility based on scroll direction
    let lastScrollTop = 0;
    const shareButtonsContainer = $('#share-buttons-container');

    $(window).scroll(function() {
        let currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {
            shareButtonsContainer.addClass('visible').removeClass('hidden');
        } else {
            shareButtonsContainer.addClass('hidden').removeClass('visible');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
});
