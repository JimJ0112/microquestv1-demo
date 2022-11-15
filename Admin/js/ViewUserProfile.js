var postContainer = document.getElementById("postContainer");
var aboutContainer = document.getElementById("aboutContainer");
var reviewContainer = document.getElementById("reviewContainer");
var moreContainer  = document.getElementById("moreContainer");


var userPost = document.getElementsByClassName("userPost")[0];
var userAbout = document.getElementsByClassName("userAbout")[0];
var userReviews = document.getElementsByClassName("userReviews")[0];
var userMore = document.getElementsByClassName("userMore")[0];

function post() {


    userPost.style.borderBottom = "5px solid rgb(22, 8, 2)";

    userAbout.style.borderBottom = "none";
   
    userReviews.style.borderBottom = "none";
    
    userMore.style.borderBottom = "none";
    
    
      postContainer.style.display = "block";
      aboutContainer.style.display = "none";
      reviewContainer.style.display = "none";
      moreContainer.style.display = "none";

  }


function about() {


    userPost.style.borderBottom = "none";

    userAbout.style.borderBottom = "5px solid rgb(22, 8, 2)";
   
    userReviews.style.borderBottom = "none";
    
    userMore.style.borderBottom = "none";
  
      aboutContainer.style.display = "block";
      postContainer.style.display = "none";
      reviewContainer.style.display = "none";
      moreContainer.style.display = "none";

  }


function reviews() {


    userPost.style.borderBottom = "none";

    userAbout.style.borderBottom = "none";
   
    userReviews.style.borderBottom = "5px solid rgb(22, 8, 2)";
    
    userMore.style.borderBottom = "none";
  
      reviewContainer.style.display = "block";
      postContainer.style.display = "none";
      aboutContainer.style.display = "none";
      moreContainer.style.display = "none";

}

function more() {

    
    userPost.style.borderBottom = "none";

    userAbout.style.borderBottom = "none";
   
    userReviews.style.borderBottom = "none";
    
    userMore.style.borderBottom = "5px solid rgb(22, 8, 2)";

      moreContainer.style.display = "block";
      postContainer.style.display = "none";
      aboutContainer.style.display = "none";
      reviewContainer.style.display = "none";

}

about();

// get Finished Jobs

function getUserInfo(userID,userType){
  var userID = userID;
  var userType = userType;
  var query = "userID=" + userID +"&userType=" + userType;
  var xmlhttp = new XMLHttpRequest();


  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         


          var dataArray = this.response;

          if(dataArray === "failed to fetch"){
           

          } else {
              
              dataArray = JSON.parse(dataArray);
              console.log(dataArray); 
              setData(dataArray);
             

          }

      }else{
          //console.log(err);
         //document.getElementById('TransactionsContainerBody').innerText = "Loading...";
         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "backend/Get_publicProfile.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function setData(dataArray){
  dataArray = dataArray;

  //id

  userName = document.getElementById("userName");
  userType= document.getElementById("userType");

  RestrictButton = document.getElementById("RestrictButton");
  BanButton= document.getElementById("BanButton");
  SendNotifButton= document.getElementById("SendNotifButton");


  userName.innerText = dataArray[0]["userName"];
  userType.innerText = dataArray[0]["userType"];

  RestrictButton.setAttribute("onclick","restrictUserForm(" + dataArray[0]['userID']+")");
  BanButton.setAttribute("onclick","banUserForm("+ dataArray[0]['userID']+")");
  SendNotifButton.setAttribute("onclick","notifUserForm("+ dataArray[0]['userID']+")");
  

  var image = new Image();
  image.src = dataArray[0]["userPhoto"];
  image.setAttribute("class","userProfileUserPhoto");
  userImageContainer.appendChild(image);




  // class

  userEmail = document.getElementsByClassName("userEmail")[0];
  userFullName= document.getElementsByClassName("userFullName")[0];
  userAge= document.getElementsByClassName("userAge")[0];
  userDob= document.getElementsByClassName("userDob")[0];
  userSpecialization= document.getElementsByClassName("userSpecialization")[0];
  //userLocation= document.getElementsByClassName("userLocation")[0];


  userEmail.innerText = dataArray[0]["userEmail"];
  userFullName.innerText = dataArray[0]["firstName"] + " " +dataArray[0]["lastName"]  ;
  userAge.innerText = dataArray[0]["userName"];
  userDob.innerText = dataArray[0]["birthDate"];
  userSpecialization.innerText = dataArray[0]["specialization"];
  //userLocation.innerText = dataArray[0]["municipality"];

  setMessagesData(dataArray[0]['userID'],dataArray[0]['userName']);


}


function setMessagesData(id,userName){
  document.getElementById('recieverID').value = id;
  document.getElementById('recieverUserName').value = userName;

  console.log(id);
}



/* admin Controls forms */
function closeForms(){
  restrictFormBack = document.getElementById("restrictFormBack");
  BanFormBack= document.getElementById("BanFormBack");
  sendNotificationFormBack= document.getElementById("sendNotificationFormBack");

  sendNotificationFormBack.style.display = "none";
  BanFormBack.style.display = "none";
  restrictFormBack.style.display = "none";
  
}

function banUserForm(userID){

  var userID = userID;
  BanFormBack= document.getElementById("BanFormBack");
  BanFormBack.style.display = "grid";
}


function restrictUserForm(userID){

  var userID = userID;

  restrictFormBack = document.getElementById("restrictFormBack");
  restrictFormBack.style.display = "grid";
}

function notifUserForm(userID){

  var userID = userID;
  sendNotificationFormBack= document.getElementById("sendNotificationFormBack");
  sendNotificationFormBack.style.display = "grid";
}