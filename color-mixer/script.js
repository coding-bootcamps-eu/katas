const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");

function setBackgroundColor() {
  const red = numberToHex(Number.parseInt(redSlider.value));
  const green = numberToHex(Number.parseInt(greenSlider.value));
  const blue = numberToHex(Number.parseInt(blueSlider.value));

  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;
}

function numberToHex(n) {
  return ("0" + n.toString(16)).substr(-2);
}

document.body.addEventListener("input", setBackgroundColor);

setBackgroundColor();
