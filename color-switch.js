const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let stopper;

const switchColor = () => {
  stopper = setInterval(() => {
    body.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 300);
  start.disabled = true;
};

const stopSwitchColor = () => {
  console.log("stopSwitchColor");
  clearInterval(stopper);
  start.disabled = false;
};

start.addEventListener("click", switchColor);

stop.addEventListener("click", stopSwitchColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
