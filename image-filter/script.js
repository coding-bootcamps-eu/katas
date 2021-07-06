const image = document.querySelector("#image");

// sepia filter
const sepiaSlider = document.querySelector("#sepia");
sepiaSlider.addEventListener("input", function (e) {
  image.style.setProperty("--sepia", e.target.value + "%");
});

// grayscale filter
const grayscaleFilter = document.querySelector("#grayscale");
grayscaleFilter.addEventListener("input", function (e) {
  image.style.setProperty("--grayscale", e.target.value + "%");
});

// contrast filter
const contrastFilter = document.querySelector("#contrast");
contrastFilter.addEventListener("input", function (e) {
  image.style.setProperty("--contrast", e.target.value + "%");
});
