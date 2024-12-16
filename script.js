document.addEventListener("DOMContentLoaded", function() {
 const links = document.querySelectorAll(".link");
 links.forEach(function(link) {
 link.addEventListener("mouseover", function() {
 link.style.transform = "scale(1.1)";
 });
 link.addEventListener("mouseout", function() {
 link.style.transform = "scale(1)";
 });
 });
});