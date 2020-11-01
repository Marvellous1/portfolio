(function () {
  var tl = anime.timeline({
    easing: "linear",
    loop: true,
  });
  tl.add({
    targets: ".home-bg",
    translateX: "-50%",
    loop: 1,
    duration: 1,
  });
  tl.add(
    {
      targets: ".bullseye",
      scale: 1.3,
      duration: 3000,
    },
    1
  );
  tl.add({
    targets: ".bullseye",
    scale: 1,
    duration: 3000,
  });
  tl.add({
    targets: ".blue-circle, .blue-circle-big",
    scale: 1.2,
    opacity: 0.2,
    stagger: 35,
    duration: 5000,
  });
  tl.add(
    {
      targets: ".blue-circle, .blue-circle-big",
      scale: 1.0,
      opacity: 1,
      stagger: 35,
      duration: 5000,
    },
    "-=1000"
  );
  tl.add(
    {
      targets: ".green-x",
      rotate: "3turn",
      easing: "easeInQuad",
      duration: 700,
    },
    "-=300"
  );
})();

// Nav
var toggled;
var links = document.querySelector(".links");
var single_link = document.querySelectorAll(".single-link");

var nav_trigger = document.querySelector(".nav-control");
var polygon = document.getElementsByClassName("nav-polygon");

var nav_bar = Array.from(document.querySelectorAll(".nav-bar"));

var mobile = window.innerWidth;

var polygonOffset =
  mobile < 380 ? 940 : mobile < 480 && mobile >= 380 ? 950 : 1000;
var linksOffset = mobile < 380 ? 1035 : 1060;

function navAnim() {
  nav_animation = anime.timeline({
    easing: "easeInSine",
  });

  nav_animation
    .add(
      {
        targets: ".nav-polygon-wrapper",
        translateX: toggled ? polygonOffset : -polygonOffset,
        easing: "easeOutQuad",
        duration: 100,
      },
      toggled ? 2200 : 0
    )
    .add(
      {
        targets: ".links",
        translateX: toggled ? linksOffset : -linksOffset,
        easing: "easeOutQuad",
        duration: 100,
      },
      toggled ? 2200 : 0
    )
    .add(
      {
        targets: ".nav-polygon",
        opacity: toggled ? [1, 0] : [0, 1],
        points: toggled
          ? [
              { value: "700,400 564.8,400 480.799,200 564.8,0 700,0" },
              { value: "700,400 564.8,400 564.8,201.801 564.8,0 700,0 " },
              { value: "700,400 564.8,400 700,0 700,0 700,0 " },
            ]
          : [
              { value: "700,400 564.8,400 564.8,201.801 564.8,0 700,0 " },
              { value: "700,400 564.8,400 480.799,200 564.8,0 700,0" },
            ],
        easing: "easeOutQuad",
        duration: toggled ? 1000 : 700,
        loop: false,
        complete: () => {
          links.classList.toggle("changed");
          toggled = links.classList.contains("changed");
        },
      },
      toggled ? 1200 : 100
    )
    .add(
      {
        targets: ".single-link",
        opacity: toggled ? [1, 0] : [0, 1],
        translateX: toggled ? 0 : [50, 0],
        delay: anime.stagger(100),
        easing: "easeOutQuad",
        duration: toggled ? 500 : 400,
      },
      toggled ? 100 : 1500
    )
    .add(
      {
        targets: nav_bar[0],
        width: toggled ? "33px" : "35px",
        rotate: toggled ? 0 : 45,
        translateY: toggled ? 0 : -5,
        translateX: toggled ? 0 : 1,
        duration: 700,
      },
      0
    )
    .add(
      {
        targets: nav_bar[2],
        width: toggled ? "23px" : "35px",
        rotate: toggled ? 0 : -45,
        translateY: toggled ? 0 : 6,
        translateX: toggled ? 0 : 0,
        duration: 700,
      },
      0
    )
    .add(
      {
        targets: nav_bar[1],
        width: toggled ? "28px" : "35px",
        opacity: toggled ? 1 : 0,
        duration: 700,
      },
      0
    );
}

nav_trigger.addEventListener("click", () => {
  navAnim();
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    toggled = links.classList.contains("changed");
    if ((toggled = true)) {
      navAnim();
    }
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".link-text").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".link-text").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

var projectContainer = Array.from(
  document.querySelectorAll(".project-wrapper")
);

projectContainer.map((item, i, array) => {

  const ToogleClass = () => {
        // CLear Previous Hover
        mobile < 1025 &&   array.map((elem) => elem.classList.toggle("hovered", false));
    // Toggle Hover
    item.classList.toggle("hovered");
  };

  if (mobile < 1025) {
    item.addEventListener("click", ToogleClass);
  } else {
    item.addEventListener("mouseenter", ToogleClass);
    item.addEventListener("mouseleave", ToogleClass);
  }
});
