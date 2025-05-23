let circle = document.querySelector("#circle");
let frames = document.querySelectorAll(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function (event) {
  // circle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  gsap.to(circle, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.3,
    ease: "power1.out",
  });
});

frames.forEach((frame) => {
  frame.addEventListener("mousemove", function (event) {
    let dims = frame.getBoundingClientRect();
    let xstart = dims.x;
    let xend = dims.x + dims.width;

    const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);

    gsap.to(circle, {
      scale: 8,
    });

    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.3,
      y: "-5vw",
    });

    gsap.to(frame.children, {
      x: lerp(-75, 75, zeroone),
      duration: 0.3,
      ease: "power1.out",
    });
  });

  frame.addEventListener("mouseleave", function (event) {
    gsap.to(circle, {
      scale: 1,
    });

    gsap.to(frame.children, {
      color: "#000",
      duration: 0.3,
      y: "0vw",
    });

    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  });
});
