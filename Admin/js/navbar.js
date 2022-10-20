//navmenu = document.getElementById("NavMenu");
//navmenu.style.left  = "-600px";

function showNavMenu(){
    navmenu = document.getElementById("NavMenu");
    //if(navmenu.style.display === "none"){
       // navmenu.style.display = "block";
    //} 

    navmenu.style.animation="slide 2s";
    navmenu.style.left  = "0px";
    console.log(navmenu.style.animation);

    
}

function hideNavMenu(){
    navmenu = document.getElementById("NavMenu");
     //if(navmenu.style.display === "block"){
       // navmenu.style.display = "none";
   // }
   navmenu.style.animation="slideback 2s";
   navmenu.style.left  = "-600px";
   console.log(navmenu.style.animation);


}


function showProfileDropDown(){
    var profileDropdown = document.getElementById("profileDropdown");

    profileDropdownDisplay = profileDropdown.style.display;
    if(profileDropdownDisplay === "none"){
        profileDropdown.style.display = "block";
    } else{
        profileDropdown.style.display = "none";
    }
}