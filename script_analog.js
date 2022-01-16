const hours = document.querySelector("#hour");
const mins = document.querySelector("#minute");
const secs = document.querySelector("#second");

setInterval(() => {
  dateCurr = new Date();
  hrTime = dateCurr.getHours();
  minTime = dateCurr.getMinutes();
  secTime = dateCurr.getSeconds();
  hrRotation = 30 * hrTime + minTime / 2;
  minRotation = 6 * minTime;
  secRotation = 6 * secTime;

  hours.style.transform = `rotate(${hrRotation}deg)`;
  mins.style.transform = `rotate(${minRotation}deg)`;
  secs.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
