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
            document.getElementById("MobileNavImageContainer").innerHTML = "";
            var imageContainer = document.getElementById("NavImageContainer");
            var MobileNavImageContainer = document.getElementById("MobileNavImageContainer");
            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
           // console.log(dataArray);

            
            var image = new Image();
            image.src = dataArray[0]["userPhoto"];
            image.setAttribute("class","navUserPhoto");
            imageContainer.appendChild(image);

            var image1 = new Image();
            image1.src = dataArray[0]["userPhoto"];
            image1.setAttribute("class","navUserPhoto");
            MobileNavImageContainer.appendChild(image1);


     
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

    //console.log("newMessageQuery: " + query);
    
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
            
            var redDotOnNotification = document.getElementById("redDotOnNotification");
            var redDotOnNotificationMobile = document.getElementById("redDotOnNotificationMobile");
            var dataArray = this.response;

            if(dataArray === "true"){
                redDotOnNotification.style.display = "inline";
                redDotOnNotificationMobile.style.display = "block";
            }else{
                redDotOnNotification.style.display = "none";
                redDotOnNotificationMobile.style.display = "none";
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

    getNewMessages(myID);
    getNotifications(myID);
    //noMessageSelected();
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
   
    getNewMessages(myID);
    getNotifications(myID);
    //console.log("myID:" + myID);
    //noMessageSelected();
    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}
init();



function getNotifications(id){
    var id = id;
    var xmlhttp = new XMLHttpRequest();

    var query = "userID=" + id;

    //console.log("newMessageQuery: " + query);
    
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
            
            //var redDotOnNotification = document.getElementById("redDotOnNotification");
            document.getElementById("navNotifs").innerHTML = "";
            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                dataArray = JSON.parse(dataArray);
                //console.log(dataArray);
                var number = dataArray.length;
                createNotifElements(number);
                setNotifData(dataArray);
            } else {
                //console.log(dataArray);
            }



        }else{
 
            console.log("loading...")
        }      
    };

    xmlhttp.open("POST", "Backend/Get_notifications.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}

function createNotifElements(number){
    var number = number;
    var navNotifs = document.getElementById("navNotifs");

    for(var i = 0; i < number; i++){

        div = document.createElement("table");
        tr = document.createElement("tr");
        td = document.createElement("td");
        td1 = document.createElement("td");



        logoContainer = document.createElement("div");
        ul = document.createElement("ul");
        notificationDate = document.createElement("li");
        notificationDescription = document.createElement("li");
        notificationStatus = document.createElement("li");
        hr = document.createElement("hr");


        div.setAttribute("class","notifContent");
        logoContainer.setAttribute("class","logoContainer");
        ul.setAttribute("class","notifUL");
        notificationDate.setAttribute("class","notificationDate");
        notificationDescription.setAttribute("class","notificationDescription");
        notificationStatus.setAttribute("class","notificationStatus");

        td.appendChild(logoContainer);
       
        ul.appendChild(notificationDate);
        ul.appendChild(notificationDescription);
        ul.appendChild(notificationStatus);

        td1.appendChild(ul);

        div.appendChild(td);
        div.appendChild(td1);

        navNotifs.appendChild(div);
        navNotifs.appendChild(hr);



    }
}


function setNotifData(dataArray){
    var number = dataArray.length;
    var navNotifs = document.getElementById("navNotifs");
    notifContent = document.getElementsByClassName("notifContent");
    logoContainer= document.getElementsByClassName("logoContainer");
  
    notificationDate= document.getElementsByClassName("notificationDate");
    notificationDescription= document.getElementsByClassName("notificationDescription");
    notificationStatus = document.getElementsByClassName("notificationStatus");

    var redDotOnBellNotification = document.getElementById("redDotOnBellNotification");


    for(var i = 0; i < number; i++){
        notificationDate[i].innerText = dataArray[i]['notificationDate'];
        notificationDescription[i].innerText = dataArray[i]['notificationDescription'];

        if(dataArray[i]['notificationStatus'] === "Sent"){
            notificationStatus[i].innerText = "mark as read";
            redDotOnBellNotification.style.display = "inline";
            notifContent[i].style.backgroundColor = "rgba(116, 114, 114, 0.25)";
            notificationStatus[i].setAttribute("onclick","markAsRead(" + dataArray[i]['notificationID'] + ")");
        }else{
            notificationStatus[i].innerText="";
            redDotOnBellNotification.style.display = "none";
            notifContent[i].style.backgroundColor = "white";

        }
        
        
        if(dataArray[i]['notificationType'] === "Warning"){
            var image = new Image();
            image.src = "img/warning.png";
            image.setAttribute("class","notificationTypeSymbolImage");
            logoContainer[i].appendChild(image);
        } else if(dataArray[i]['notificationType'] === "Message"){
            var image = new Image();
            image.src = "img/message.png";
            image.setAttribute("class","notificationTypeSymbolImage");
            logoContainer[i].appendChild(image);
        } else{
            var image = new Image();
            image.src = "img/notification.png";
            image.setAttribute("class","notificationTypeSymbolImage");
            logoContainer[i].appendChild(image);
        }


    }
}


function markAsRead(id){
    var id = id;
    var xmlhttp = new XMLHttpRequest();

    var query = "notifID=" + id;

    //console.log("newMessageQuery: " + query);
    
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
            
            var dataArray = this.response;
 


        }else{
 
            console.log("loading...")
        }      
    };

    xmlhttp.open("POST", "Backend/ReadNotification.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}


function showMobileNavMenu(r){
    var r = r;
    var x = document.getElementById("MobileMenu");
    if (x.style.display === "grid") {
      x.style.display = "none";
      r.classList.toggle("change");
    } else {
      x.style.display = "grid";
      r.classList.toggle("change");

    }

}



function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
      // set the button to shown or hidden, depending on what the user answers
      permission.style.display =
        Notification.permission === 'granted' ? 'none' : 'block';
    }
  
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log("This browser does not support notifications.");
    } else if (checkNotificationPromise()) {
      Notification.requestPermission().then((permission) => {
        handlePermission(permission);
      });
    } else {
      Notification.requestPermission((permission) => {
        handlePermission(permission);
      });
    }
  }


  function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }
  
    return true;
  }

  askNotificationPermission()