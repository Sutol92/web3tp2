import { animate, } from "animejs";

animate(".chargement", {
  x: [200, -200, 100, -200],
  scale: [0.2, 0.5, 0.1, 1],
  loop: true,
  alternate: true,
});

animate(".battement", {
  scale: [1, 2, 1],
  duration: 1500,
  easing: "easeInOutSine",
  loop: true,
});


animate(".boule", {
  x: [0, 300],
  duration: 1800,
  direction: "alternate",
  easing: "easeInOutQuad",
  loop: true,
});


animate(".glisse", {
  opacity: [0, 1, 0],
  x: [-150],
  y: [-200],
  duration: 2000,
  easing: "easeInOutCubic",
  loop: true,
  });