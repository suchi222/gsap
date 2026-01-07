// gsap.to("#box", {
//   duration: 2,
//   delay: 1,
//   x: 1200,
//   rotate: 360,
//   borderRadius: "50%",
//   repeat:1,
//   yoyo:true
// });
// gsap.to("h1", {
//   opacity:0,
//   duration: 2,
//   delay: 1,
//   y: 30,
//   stagger:-1,
// });

// const { startTransition } = require("react");

// const { startTransition } = require("react");

//for website
// var tl = gsap.timeline();

// tl.to("h1", {
//   duration: 2,
//   y: -20,
//   delay: 1,
//   opacity: 1,
// });

// tl.to("li", {
//   duration: 2,
//   y: -20,
//   delay: 1,
//   opacity: 1,
//   stagger: {
//     from: "center",
//     each: 0.1,
//   },
// });
// tl.from("h3", {
//   duration: 2,
//   opactity: 1,
//   scale: 0.4,
//   delay: 1,
// })
// for the boxes
// gsap.to("#boxes div", {
//   duration: 0.4,
//   scale: 0.1,
//   ease: "power1.inOut",
//   y: 100,
//   delay: 1,
//   stagger: {
//     amount: 0.5,
//     from: "center",
//     grid: "auto",
//     axis: "x",
//     yoyo: true,
//     repeat: -1,
//   },
// });
// gsap.to("#page2 h1", {
//   transform:"translateX(-150%)",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     scrub: 2,
//     markers: true,
//     pin: true,
//     start: "top top",
//     end: "bottom top",
//   },
// });

// gsap.to(".box",{
//     scrollTrigger:{
//         trigger:".box",
//         toggleActions:"restart pause reverse pause"
//     }
// ,
// x:400,
// rotation:360,
// duration:3
// })

// var initialPath = `M 10 100 Q 500 100 990 100`;
// var finalPath = `M 10 100 Q 500 100 990 100`;
// var string = document.querySelector("#string");

// string.addEventListener("mouseenter", function (dets) {
//   (path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`),
//     gsap.to("svg path", {
//       attr: { d: path },
//       duration: 0.3,
//       ease: "power3.out",
//     });
// });
// string.addEventListener("mouseleave", function (dets) {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: "elastic.out(1,0.2)",
//   });
// });
// timeline animation
// var menu = document.querySelector("#nav i");
// var close = document.querySelector("#full i");
// var tl = gsap.timeline();

// tl.to("#full", {
//   right: 0,
//   duration: 0.8,
// });
// tl.from("#full h4", {
//   x: 150,
//   duration: 0.7,
//   stagger: 0.28,
//   opacity: 0,
// });
// tl.from("#full i", {
//   opacity: 0,
// });

// tl.pause()

// menu.addEventListener("click", function () {
//   tl.play();
// });
// close.addEventListener("click", function () {
//   tl.reverse();
// });
// function breakTheText() {
//   var item = document.querySelector("h1")
//   var item1 = item.textContent
//   var splittedText = item1.split("");
//   var clutter = "";
//   splittedText.forEach(function (elem) {
//     clutter += `<span>${elem}</span>`;
//   })
//   item.innerHTML = clutter
// }
// breakTheText();

// gsap.from("h1 span",{
//     y:70,
//     opacity:0,
//     duration:1,
//     delay:0.5,
//     stagger:{
//         each:0.3,
//         from:"center",
//     }
// })

// window.addEventListener("wheel", function (dets) {
//   if (dets.deltaY > 0) {
//     gsap.to(".masque", {
//       transform: "translateX(-200%)",
//       duration: 2,
//       repeat: -1,
//       ease: "none",
//     });
//     gsap.to(".masque img", {
//       rotate: 180,
//     });
//   } else {
//     gsap.to(".masque", {
//       transform: "translateX(0%)",
//       duration: 2,
//       repeat: -1,
//       ease: "none",
//     });
//     gsap.to(".masque img", {
//       rotate: 0,
//     });
//   }
// }
function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1,nav h4 , nav button ", {
    y: -30,
    opacity: 0,
    delay: 0.15,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
  });
}
page1Animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});
tl2.from(".services", {
  y: 30,
  opacity: 0,
  duration:0.5
});

tl2.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:1,
},"anim")
tl2.from (".elem.line1.right",{
  x:300,
  opacity:0,
  duration:1
},"anim")
tl2.from(".elem.line2.left", {
  x: -300,
  opacity: 0,
  duration: 1,
},"anim1");
tl2.from(".elem.line2.right", {
  x: 300,
  opacity: 0,
  duration: 1,
},"anim1");