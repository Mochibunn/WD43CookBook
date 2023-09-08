let links = [];
links[0] = "./recipes.html";
links[1] = "./recipe1.html";
function openLink() {
  var i = ~~(Math.random() * links.length);
  window.location.href = links[i];
  return false;
}