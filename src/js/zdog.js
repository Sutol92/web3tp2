import Zdog from "https://esm.sh/zdog";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true,
  dragRotate: true // 👈
});

new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 50,
  depth: 80,
  stroke: false,
  color: '#27F5EE', // default face color
  leftFace: '#14E7FF',
  rightFace: '#27DAF5',
  topFace: '#14E7FF',
  bottomFace: '#27DDF5',

});

// 👇
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();