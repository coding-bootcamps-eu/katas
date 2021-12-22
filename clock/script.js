function updateTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // digi clock
  document.querySelector(".digi-clock__hours").innerText =
    formatNumberString(hours);
  document.querySelector(".digi-clock__minutes").innerText =
    formatNumberString(minutes);
  document.querySelector(".digi-clock__seconds").innerText =
    formatNumberString(seconds);

  // classic clock
  const hoursEl = document.querySelector(".clock__hours");
  hoursEl.style.setProperty("--hours", hours * 30 + "deg");

  const minutesEl = document.querySelector(".clock__minutes");
  minutesEl.style.setProperty("--minutes", minutes * 6 + "deg");

  const secondsEl = document.querySelector(".clock__seconds");
  secondsEl.style.setProperty("--seconds", seconds * 6 + "deg");

  document
    .querySelectorAll(".digi-clock__dots")
    .forEach((e) => e.classList.toggle("digi-clock__dots--hidden"));
}

function formatNumberString(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

updateTime();
setInterval(updateTime, 1000);
