
function showmenu(){

var hamburgermenu = document.getElementById("hamburger-menu");
var state = hamburgermenu.style.display;
    if(state === "grid"){
        hamburgermenu.style.display = "none";
    } else {
        hamburgermenu.style.display = "grid";
    }

 

 
}
