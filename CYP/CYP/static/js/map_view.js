document.getElementById('WA').onclick = function(e) {
  _openState(e.currentTarget);
};



function _openState(e) {
  var t = e,
    n = document.getElementById(t.dataset.mapId),
    s = document.querySelectorAll("div .map");
  [].forEach.call(s, function(e) {e.classList.remove("active")});
  n.classList.add("active");
}
