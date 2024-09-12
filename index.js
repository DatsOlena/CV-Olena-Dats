window.onscroll = function() {
    scrollFunction();
};


function scrollFunction() {
    const scrollToTop = document.getElementById("scrollToTop");

  if (document.body.scrollTop > document.body.scrollHeight / 2 || document.documentElement.scrollTop > document.documentElement.scrollHeight / 2) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
}
}