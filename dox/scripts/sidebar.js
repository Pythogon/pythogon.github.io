function sidebar() {
  document.getElementById("sidebar").style.width = "12vw";
  document.getElementById("sidebar").style.paddingLeft = "0.7vw";
  document.getElementById("sidebar-close").style.visibility = "visible";
}
function sidebarClose() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("sidebar").style.paddingLeft = "0";
  document.getElementById("sidebar-close").style.visibility = "hidden";
}
