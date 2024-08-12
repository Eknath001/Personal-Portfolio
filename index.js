

$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Java Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Uncomment if you want to use this as well
    /*
    var typed2 = new Typed(".typing-2", {
        strings: ["FullStack Java Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    */

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Corrected the timeout spelling
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

/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });
  ////
  var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');


function lbs_click() { window.open(`https://www.linkedin.com/in/eknath-changade-full-stack-java-developer?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
function whs_click() { window.open(`https://web.whatsapp.com/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
function gms_click() { window.open(`https://mail.google.com/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }


  let lastScrollTop = 0; // Keep track of the last scroll position

  window.addEventListener('scroll', function() {
    const container = document.querySelector('.share-buttons-container');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      container.style.opacity = '1'; // Show container
    } else {
      // Scrolling up
      container.style.opacity = '0'; // Hide container
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  });

