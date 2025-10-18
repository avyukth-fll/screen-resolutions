
function updateResolution() {
  var spanWidth = document.getElementById("s_width");
  var spanHeight = document.getElementById("s_height");

  spanWidth.innerText = window.innerWidth;
  spanHeight.innerText = window.innerHeight;
}

window.onresize = updateResolution;

window.onload = function () { updateResolution(); };