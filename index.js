// 1. GET hamburger, cross
let hamburger = document.querySelector(".mobile_navigation_hamburger");
let cross = document.querySelector(".mobile_navigation_panel_cross");
let links = document.querySelectorAll(".mobile_navigation_panel_link");

// when we click the hamburger -> animate in the panel
hamburger.addEventListener("click", function () {
  gsap.to(".mobile_navigation_panel", {
    xPercent: 100,
    duration: 1,
    ease: "expo.out",
  });

  gsap.fromTo(
    links,
    {
      opacity: 0,
      yPercent: -100,
      rotate: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
      rotate: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out",
      delay: 1,
    }
  );
});

// when we click the cross -> animate out the panel
cross.addEventListener("click", function () {
  gsap.to(".mobile_navigation_panel", {
    xPercent: 0,
    duration: 1,
    ease: "expo.out",
  });
});
