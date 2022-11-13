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
              setMessagesData(dataArray[0]['userID'],dataArray[0]['userName'])

          }

      }else{
          //console.log(err);
         //document.getElementById('TransactionsContainerBody').innerText = "Loading...";
         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function setData(dataArray){
  dataArray = dataArray;

  //id

  userName = document.getElementById("userName");
  userType= document.getElementById("userType");

  userName.innerText = dataArray[0]["userName"];
  userType.innerText = dataArray[0]["userType"];

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
  userLocation= document.getElementsByClassName("userLocation")[0];


  userEmail.innerText = dataArray[0]["userEmail"];
  userFullName.innerText = dataArray[0]["firstName"] + " " +dataArray[0]["lastName"]  ;
  userAge.innerText = dataArray[0]["userName"];
  userDob.innerText = dataArray[0]["birthDate"];
  userSpecialization.innerText = dataArray[0]["specialization"];
  userLocation.innerText = dataArray[0]["municipality"];

}

function setMessagesData(id,userName){
  recieverID = document.getElementById('recieverID');
  recieverUserName = document.getElementById('recieverUserName');

  recieverUserName.value = userName;
  recieverID.value = id;

}