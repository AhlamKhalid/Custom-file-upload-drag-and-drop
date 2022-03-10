// elements
const outerCard = document.getElementById("outer-card");
const check = document.getElementById("check");
const fileInput = document.getElementById("file-input");
const fileNameContainer = document.getElementById("file-name-container");
const fileName = document.getElementById("file-name");

// functions
const onSelectFile = (fileNameParam) => {
  fileNameContainer.classList.remove("hidden");
  fileName.innerHTML = fileNameParam;
  check.classList.remove("hidden");
  check.classList.add("animation");
};

fileInput.addEventListener("change", () => {
  onSelectFile(fileInput.files[0].name);
});

outerCard.addEventListener("dragover", (event) => {
  event.preventDefault();
  outerCard.classList.add("on-drag-over");
});

outerCard.addEventListener("dragleave", () => {
  outerCard.classList.remove("on-drag-over");
});

outerCard.addEventListener("drop", (event) => {
  event.preventDefault();
  outerCard.classList.remove("on-drag-over");
  onSelectFile(event.dataTransfer.files[0].name);
});
