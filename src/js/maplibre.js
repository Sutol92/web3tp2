import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "map",
  style:
    "https://api.maptiler.com/maps/toner-v2/style.json?key=Pu8dXq6in5HzfGo2BGOd",
  center: [-71.0646195, 42.3652333], // Boston by default
  zoom: 12,
});

// Resize on load
carte.on("load", () => {
  carte.resize();
});

// Expose simple function to recenter the map from chart buttons
export function goToState(coords) {
  carte.flyTo({
    center: coords,
    zoom: 9,
    speed: 0.8
  });
}