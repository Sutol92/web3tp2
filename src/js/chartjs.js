import Chart from "https://esm.sh/chart.js/auto";
import { goToState } from "./maplibre.js";

const crimeData = {
  boston: {
    label: "Boston Homocide Rate",
    data: [53, 58, 56, 42, 58, 38, 48, 38, 24],
    coords: [-71.0646, 42.3652],
  },
  new_york: {
    label: "New York Homocide Rate",
    data: [335, 290, 295, 319, 468, 485, 433, 386, 377],
    coords: [-74.006, 40.7128],
  },
  texas: {
    label: "Texas Homocide Rate",
    data: [1500, 2159, 1324, 2159, 1927, 2159, 2159, 1895,],
    coords: [-99.9018, 31.9686],
  },
};

const ctx = document.getElementById("crimeChart");

let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: crimeData.boston.label,
        data: crimeData.boston.data,
        borderColor: "cyan",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

export function updateState(state) {
  const info = crimeData[state];

  document.querySelector(".section-title").innerText =
    "CRIME ANALYTICS IN " + state.toUpperCase();

  chart.data.datasets[0].label = info.label;
  chart.data.datasets[0].data = info.data;
  chart.update();

  goToState(info.coords);
}


document.querySelector("#boston").addEventListener("click", () => {
  updateState("boston");
});

document.querySelector("#new_york").addEventListener("click", () => {
  updateState("new_york");
});

document.querySelector("#texas").addEventListener("click", () => {
  updateState("texas");
});
