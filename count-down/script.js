const button = document.querySelector("button");
const count = document.querySelector("h1");
let counter = 10;

button.addEventListener("click", () => {
  startCountDown();
});

function startCountDown() {
  button.style.display = "none";
  counter = 10;
  count.innerText = counter;
  count.hidden = false;
  const interval = window.setInterval(() => {
    counter--;
    if (counter === 0) {
      window.clearInterval(interval);
      button.style.display = "initial";
      count.hidden = true;
    } else {
      count.innerText = counter;
    }
  }, 1000);
}
