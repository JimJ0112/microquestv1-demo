var x;
var y;
var z;
var i;

function post() {
    x = document.getElementById("postContainer");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      i.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function about() {
    y = document.getElementById("aboutContainer");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        i.style.display = "none";
    } else {
      y.style.display = "none";
    }
  }
  function reviews() {
    z = document.getElementById("reviewContainer");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        i.style.display = "none";
    } else {
      z.style.display = "none";
    }
  }
  function more() {
    i = document.getElementById("moreContainer");
    if (i.style.display === "none") {
      i.style.display = "block";
      z.style.display = "none";
      x.style.display = "none";
      y.style.display = "none";
    } else {
      i.style.display = "none";
    }
  }