console.log("Dash script loaded");
var x = sessionStorage.getItem("currentUsr");
document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("intro").innerHTML = "Hello " + x;
});
