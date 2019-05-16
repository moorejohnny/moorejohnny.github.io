// Function to remove preload class
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});

$(function () {
  $(".background p").each(function (i, add) {
    var value = Math.random() * (150 - 70) + 70
    $(add).css({
      left: Math.random() * (window.innerWidth - 40),
      top: Math.random() * (window.innerHeight - 50),
      "font-size": (Math.random() * (3 - 0.8) + 0.8) + "em",
      color: 'rgb(' + value + "," + value + "," + value + ")"
    });
  });
});