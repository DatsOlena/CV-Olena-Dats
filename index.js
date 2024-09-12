window.onload = function() {
  scrollFunction();
};

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let scrollToTop = document.getElementById("scrollToTop");

  if (
    document.body.scrollTop > document.body.scrollHeight / 2 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight / 2
  ) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

const imageBox = document.querySelectorAll(".box-img-project");

imageBox.forEach(box => {
  // Create the div element
  const overlayDiv = document.createElement("div");
  overlayDiv.classList.add("box-overlay");

  // Create the i element for the FontAwesome icon
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-magnifying-glass");

  // Append the icon to the overlayDiv
  overlayDiv.appendChild(icon);

  // Append the overlayDiv to the box
  box.appendChild(overlayDiv);

  // Find the image inside the current box
  const image = box.querySelector(".img-project");
  const overlay = box.querySelector(".box-overlay");

  // Add click event to the icon to zoom the specific image in the box
  icon.addEventListener("click", () => {
    image.classList.add("zoomIn");
    overlay.classList.remove("box-overlay");
  });

  image.addEventListener("click", () => {
    image.classList.remove("zoomIn");
    overlay.classList.add("box-overlay");
  });
});
