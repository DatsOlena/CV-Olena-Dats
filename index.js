window.onscroll = function() {
    scrollFunction();
};


function scrollFunction() {
    let scrollToTop = document.getElementById("scrollToTop");
      // If the page is scrolled more than halfway, show the button
  if (document.body.scrollTop > document.body.scrollHeight / 2 || document.documentElement.scrollTop > document.documentElement.scrollHeight / 2) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
}
}