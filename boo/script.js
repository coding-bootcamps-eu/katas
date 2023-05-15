function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const time = getRandomNumber(2000, 4000);

setTimeout(() => {
  document.querySelector("h1").hidden = false;
  const time = getRandomNumber(2000, 4000);

  setTimeout(() => {
    document.querySelector("h1").hidden = true;
  }, time);
}, time);
