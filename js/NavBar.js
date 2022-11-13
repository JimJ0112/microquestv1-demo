function openNavMenu(){
    var navMenu = document.getElementById("navMenu");
    var caret = document.getElementById("caret");
    
    var navMenuDisplay = navMenu.style.display;
    if(navMenuDisplay === "none"){
        navMenu.style.display = "block";
        caret.innerText = "▲";
        
    } else{
        navMenu.style.display = "none";
        caret.innerText = "▼";

    }
}


function getUserImage(id){
    var id = id;
    var xmlhttp = new XMLHttpRequest();

    var query = "userID=" + id;

    
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
            document.getElementById("NavImageContainer").innerHTML = "";
            var imageContainer = document.getElementById("NavImageContainer");
            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
           // console.log(dataArray);

            
            var image = new Image();
            image.src = dataArray[0]["userPhoto"];
            image.setAttribute("class","navUserPhoto");
            imageContainer.appendChild(image);


     
        }else{
            //console.log(err);
            console.log("loading...")
        }      
    };
    xmlhttp.open("POST", "Backend/Get_ProfilePic.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
}


function showNotifs(){
    bellIcon = document.getElementById("bellIcon");
    navNotifs = document.getElementById("navNotifs");
    navNotifsDisplay = document.getElementById("navNotifs").style.display;

    
    if(navNotifsDisplay === "none"){
        navNotifs.style.display = "block";
        bellIcon.style.borderBottom = "3px solid yellow";

    }else{
        navNotifs.style.display = "none";
        bellIcon.style.borderBottom = "none";

        
    }
}



function getNewMessages(id){
    var id = id;
    var xmlhttp = new XMLHttpRequest();

    var query = "userID=" + id;

    console.log("newMessageQuery: " + query);
    
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
            
            var redDotOnNotification = document.getElementById("redDotOnNotification");
            var dataArray = this.response;

            if(dataArray === "true"){
                redDotOnNotification.style.display = "inline";
            }else{
                redDotOnNotification.style.display = "none";
            }


     
        }else{
            //console.log(err);
            console.log("loading...")
        }      
    };
    xmlhttp.open("POST", "Backend/Get_userNewMessages.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}



function init(){ 
    // This is the function the browser first runs when it's loaded.
   
    var myID = sessionStorage.getItem("myID");
    getNewMessages(myID)
    //noMessageSelected();
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
   
    getNewMessages(myID)
    //console.log("myID:" + myID);
    //noMessageSelected();
    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}
init();