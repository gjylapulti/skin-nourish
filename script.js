const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});
const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});

document
  .querySelector(".services-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const facialsSection = document.querySelector(".facials");
    facialsSection.scrollIntoView({ behavior: "smooth" });
    gsap.to(".links", { x: "100%", duration: 0.05 }); // Animation duration set to 0.5 seconds

    gsap.set("body", { overflow: "auto" }); // Allow scrolling in other sections

    gsap.set("body", { overflowX: "hidden" }); // Allow scrolling in other sections
  });
