function revealtoSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);
    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}

function startAnimation() {
  var tl = gsap.timeline();
  tl.from(".child span", {
        x: 100,
        staggere: 0.2,
        duration: 2,
        ease: Power3.easeInOut,
    })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Expo.easeInOut,
    })
    .to("#elem", {
      height: "100%",
      duration: 2,
      delay: -2,
      ease: Expo.easeInOut,
    })
    .to("#white", {
      height: "100%",
      duration: 2,
      delay: -1.8,
      ease: Expo.easeInOut,
    });
}

function animateSvg() {
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    let character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });

  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    delay: 2,
    ease: Expo.easeInOut,
  })
}

startAnimation();
revealtoSpan();
animateSvg();