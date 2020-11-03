var logoWrapper = document.querySelector(".loader-text");
logoWrapper.innerHTML = logoWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(window).on("load", function () {
  // PAGE IS FULLY LOADED
  // FADE OUT YOUR OVERLAYING
  // console.log("Loaded");
  // $(".loader").hide();
});

const lineDrawing = anime.timeline({
  // direction:"alternate",
  // loop: true
});

lineDrawing.add({
  targets: ".logo-home",
  translateX: "calc(50vw - 50%)",
  translateY: "calc(50vh - 50%)",
  duration: 1,
});
lineDrawing.add(
  {
    targets: ".loader-text",
    color: "#ffffff",
    duration: 1000,
  },
  "-=2000"
);
lineDrawing.add({
  targets: "path.m",
  strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 4000 },
  fill: { value: "#ffffff", duration: 1000, delay: 3800 },
  easing: "easeInOutCubic",

  begin: function (anim) {
    document.querySelector("path.m").setAttribute("stroke", "#000000");
    document.querySelector("path.m").setAttribute("fill", "none");
  },
});

lineDrawing.add(
  {
    targets: "path.a",
    strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 3000 },
    fill: { value: "#1804d1", duration: 1000, delay: 2800 },
    easing: "easeInOutCubic",
    begin: function (anim) {
      document.querySelector("path.a").setAttribute("stroke", "#000000");
      document.querySelector("path.a").setAttribute("fill", "none");
    },
  },
  "-=3000"
);
lineDrawing.add(
  {
    targets: ".loader-text .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 900,
    delay: (el, i) => 50 * i,
  },
  700
);
lineDrawing.add(
  {
    targets: ".loader-text .letter",
    opacity: 0,
    duration: 1000,
  },
  "-=2000"
);

lineDrawing.add(
  {
    targets: ".logo-home",
    translateX: "calc(0vw - 40px)",
    translateY: "calc(0vh - 20px)",
    scale: 0.6,
    duration: 4000,
    complete: function (anim) {
      $(".loader").fadeOut();
    },
  },
  "+=1000"
);

const ldoo = anime.timeline({
  direction: "alternate",
  loop: true,
});

ldoo.add({
  targets: "path.ma",
  strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 4000 },
  fill: { value: "#ffffff", duration: 1000, delay: 3800 },
  easing: "easeInOutCubic",

  begin: function (anim) {
    document.querySelector("path.m").setAttribute("stroke", "#000000");
    document.querySelector("path.m").setAttribute("fill", "none");
  },
});

ldoo.add(
  {
    targets: "path.aa",
    strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 3000 },
    fill: { value: "#1804d1", duration: 1000, delay: 2800 },
    easing: "easeInOutCubic",
    begin: function (anim) {
      document.querySelector("path.a").setAttribute("stroke", "#000000");
      document.querySelector("path.a").setAttribute("fill", "none");
    },
  },
  "-=3000"
);

const loo = anime.timeline({
  direction: "alternate",
  loop: false,
  delay: 10000
});

loo.add({
  targets: "path.mb",
  strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 3000 },
  fill: { value: "#ffffff", duration: 1000, delay: 3800 },
  easing: "easeInOutCubic",

  begin: function (anim) {
    document.querySelector("path.m").setAttribute("stroke", "#000000");
    document.querySelector("path.m").setAttribute("fill", "none");
  },
});

loo.add(
  {
    targets: "path.ab",
    strokeDashoffset: { value: [anime.setDashoffset, 0], duration: 3000 },
    fill: { value: "#ffff00", duration: 1000, delay: 2800 },
    easing: "easeInOutCubic",
    begin: function (anim) {
      document.querySelector("path.a").setAttribute("stroke", "#000000");
      document.querySelector("path.a").setAttribute("fill", "none");
    },
  },
  "-=3000"
);

// window.addEventListener("click", () => lineDrawing.restart());

var frontendWrapper = document.querySelector(".frontend");
var textWrapper = document.querySelector(".marvellous");
var aigbeWrapper = document.querySelector(".aigbe");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
aigbeWrapper.innerHTML = aigbeWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
frontendWrapper.innerHTML = frontendWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

(function () {
  var tl = anime.timeline({
    easing: "linear",
    delay: "3000"
  });

  tl.add({
    targets: ".home-bg",
    translateX: "-50%",
    loop: 1,
    duration: 1,
  });
  tl.add({
    targets: ".home-bg",
    translateX: "-50%",
    loop: 1,
    duration: 1,
  });
  tl.add({
    targets: ".bullseye",
    scale: 1.4,
    duration: 1300,
    delay: 2000,
  });
  tl.add(
    {
      targets: ".bullseye",
      scale: 1,
      duration: 3000,
      loop: 5,
    },
    "+=1000"
  );

  tl.add(
    {
      targets: ".frontend .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1500,
      delay: (el, i) => 150 * (i + 1),
    },
    "-=2500"
  );

  tl.add({
    targets: ".marvellous .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 700,
    delay: (el, i) => 150 * (i + 1),
  });

  tl.add({
    targets: ".aigbe .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 900,
    delay: (el, i) => 150 * (i + 1),
  });
  tl.add({
    targets: ".blue-circle, .blue-circle-big",
    scale: 1.2,
    opacity: 0,
    stagger: 350,
    duration: 2000,
  }, "-=3400");

  tl.add({
    targets: ".white-line, .green-x, .pink-circle, .semi",
    opacity: 1,
    duration: 2000,
  }, "-=4000");
  tl.add(
    {
      targets: ".blue-circle, .blue-circle-big",
      scale: 1.0,
      opacity: 1,
      stagger: 350,
      duration: 2000,
    },
    "-=1100"
  );
  tl.add(
    {
      targets: ".green-x",
      rotate: "6turn",
      easing: "easeInQuad",
      duration: 600,
    },
    "-=1000"
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
    // CLear Previous Hover On Mobile
    mobile < 1025 &&
      array.map((elem) => elem.classList.toggle("hovered", false));
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

function naAnim(ModalWrapper) {
  console.log("ss", ModalWrapper);
  na_animation = anime.timeline({
    easing: "easeInSine",
  });

  na_animation.add(
    {
      targets: ModalWrapper,
      translateX: 1000,
      opacity: [1, 0.2],
      easing: "easeOutQuad",
      duration: 100,
    },
    0
  );
}

var container = document.getElementById("exp-container");
var projects = [
  {
    name: "filma",
    stack: "React| Firebase",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consectetur! ",
    role:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus maxime autem itaque dolor molestias, ",
    site: "google.com",
    next: "stud",
    slide1: "/img/Frame 3.png",
    slide1: "/img/project1.png",
    slide1: "/img/project2.png",
    code: "google.com",
  },
  {
    name: "stud",
    stack: "React| Firebase",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consectetur! ",
    role:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus maxime autem itaque dolor molestias, ",
    site: "google.com",
    next: "stud",
    slide1: "/img/Frame 3.png",
    slide2: "/img/project1.png",
    slide3: "/img/project2.png",
    code: "google.com",
  },

  {
    name: "test",
    stack: "SS | Firebase",
    desc:
      "veniam tempora repellat ea quae fugit ratione saepe consectetur officiis neque expedita placeat corrupti eum iusto?",
    role:
      "veniam tempora repellat ea quae fugit ratione saepe consectetur officiis neque expedita placeat corrupti eum iusto?",
    site: "google.com",
  },
];

const changeContent = (Modal, data) => {
  const ModalWrapper = Modal.find(".modal-wrapper");
  function x() {
    ModalWrapper.animate({ opacity: 0 }, 500, y);
  }
  function y() {
    ModalWrapper.animate({ opacity: 1 }, 500);
  }
  x();
  Modal.find(".title").text(projects[data].name);
  Modal.find(".stack").text(projects[data].stack);
  Modal.find(".desc").text(projects[data].desc);
  Modal.find(".role").text(projects[data].role);
  Modal.find(".slide-1").attr("src", projects[data].slide1);
  Modal.find(".slide-2").attr("src", projects[data].slide2);
  Modal.find(".slide-3").attr("src", projects[data].slide3);
  Modal.find(".code").attr("href", projects[data].code);
  Modal.find(".site").attr("href", projects[data].site);

  Modal.find(".next-text").text(
    projects[data + 1] ? projects[data + 1].name : projects[0].name
  );
  Modal.find(".prev-text").text(
    projects[data - 1]
      ? projects[data - 1].name
      : projects[projects.length - 1].name
  );
  Modal.find(".next-btn").click(() => {
    changeContent(Modal, projects[data + 1] ? data + 1 : 0);
  });
  Modal.find(".prev-btn").click(() => {
    changeContent(Modal, projects[data - 1] ? data - 1 : projects.length - 1);
  });
};

$("#exampleModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var title = button.data("title");
  var foundIndex = projects.findIndex((data) => data.name === title);
  var modal = $(this);
  changeContent(modal, foundIndex);
});
