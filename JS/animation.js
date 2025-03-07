document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("soloSvg");
  const letters = svg.querySelectorAll(".m");

  function animateLetters() {
    let currentIndex = 0;
    function animate() {
      letters[currentIndex].style.opacity = "0";
      currentIndex = (currentIndex + 1) % letters.length;
      setTimeout(() => {
        letters[currentIndex].style.opacity = "1";
      }, 500);
    }
    setInterval(animate, 1000);
  }
  animateLetters();
});
