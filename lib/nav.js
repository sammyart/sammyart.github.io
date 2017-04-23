function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function showHide(elem) {
  if(elem.selectedIndex != 0) {
    //hide the divs
    for(var i=0; i < divsO.length; i++) {
      divsO[i].style.display = 'none';
    }
    //unhide the selected div
    document.getElementById('div'+elem.value).style.display = 'block';
  }
}