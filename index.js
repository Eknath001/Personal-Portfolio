 
 $(document).ready(function() {
  $(window).scroll(function() {
      // Sticky navbar on scroll
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }
      
      // Scroll-up button show/hide
      if (this.scrollY > 500) {
          $('.scroll-up-btn').addClass("show");
      } else {
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // Slide-up on scroll-up button click
  $('.scroll-up-btn').click(function() {
      $('html').animate({ scrollTop: 0 }, 'slow');
      $('html').css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu item click
  $('.navbar .menu li a').click(function() {
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
});

// Whatsapp Chat Widget Functionality
$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up on scroll-up button click
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function() {
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
});

// EmailJS initialization
(function() {
    emailjs.init("your_public_key_here"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const form = event.target; // Get the form element

    emailjs.sendForm("your_service_id_here", "your_template_id_here", form) // Replace with your service and template IDs
        .then(function(response) {
            document.getElementById("responseMessage").innerHTML = "<p class='text-success'>Message sent successfully!</p>";
            form.reset(); // Reset the form fields
        }, function(error) {
            document.getElementById("responseMessage").innerHTML = "<p class='text-danger'>Oops! Something went wrong. Please try again.</p>";
            console.error('EmailJS Error:', error); // Log the error for debugging
        });
});

// Toggle share buttons container visibility based on scroll direction
$(document).ready(function() {
    // Sticky navbar and scroll-up button
    $(window).on('scroll', function() {
        // Sticky navbar
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click
    $('.scroll-up-btn').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').on('click', function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar menu on small screens
    $('.menu-btn').on('click', function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
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
    emailjs.init("your_public_key_here"); // Replace with your EmailJS public key

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const form = event.target; // Get the form element

        emailjs.sendForm("your_service_id_here", "your_template_id_here", form) // Replace with your service and template IDs
            .then(function(response) {
                document.getElementById("responseMessage").innerHTML = "<p class='text-success'>Message sent successfully!</p>";
                form.reset(); // Reset the form fields
            }, function(error) {
                document.getElementById("responseMessage").innerHTML = "<p class='text-danger'>Oops! Something went wrong. Please try again.</p>";
                console.error('EmailJS Error:', error); // Log the error for debugging
            });
    });

    // Share buttons visibility
    let lastScrollTop = 0;
    const shareButtonsContainer = document.getElementById('share-buttons-container');

    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            shareButtonsContainer.classList.add('visible');
            shareButtonsContainer.classList.remove('hidden');
        } else {
            // Scrolling up
            shareButtonsContainer.classList.add('hidden');
            shareButtonsContainer.classList.remove('visible');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
});






