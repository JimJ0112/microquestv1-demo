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

var postContainer = document.getElementById("postContainer");
var aboutContainer = document.getElementById("aboutContainer");
var reviewContainer = document.getElementById("reviewContainer");
var moreContainer  = document.getElementById("moreContainer");


var userPost = document.getElementsByClassName("userPost")[0];
var userAbout = document.getElementsByClassName("userAbout")[0];
var userReviews = document.getElementsByClassName("userReviews")[0];
var userMore = document.getElementsByClassName("userMore")[0];


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

              var number = dataArray.length;
              createServiceElements(number);
              setServiceData(dataArray);
             

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

  var SpecializationTD = document.getElementById('SpecializationTD');


  // class

  userEmail = document.getElementsByClassName("userEmail")[0];
  userFullName= document.getElementsByClassName("userFullName")[0];
  userAge= document.getElementsByClassName("userAge")[0];
  userDob= document.getElementsByClassName("userDob")[0];
  userSpecialization= document.getElementsByClassName("userSpecialization")[0];
  //userLocation= document.getElementsByClassName("userLocation")[0];
  userLocation = document.getElementsByClassName('userLocation')[0];


  userEmail.innerText = dataArray[0]["userEmail"];
  userFullName.innerText = dataArray[0]["firstName"] + " " +dataArray[0]["lastName"]  ;
  userAge.innerText = dataArray[0]["userName"];
  userDob.innerText = dataArray[0]["birthDate"];

  if(dataArray[0]["specialization"] === "" || dataArray[0]["specialization"] === " "||dataArray[0]["specialization"] === null){
    userSpecialization.style.display = "none";
    SpecializationTD.style.display = "none";
  }else{
    userSpecialization.innerText = dataArray[0]["specialization"];
  }

  //userLocation.innerText = dataArray[0]["municipality"];
  userLocation.innerText = dataArray[0]['baranggay'] +" , "+dataArray[0]['municipality'];

  setMessagesData(dataArray[0]['userID'],dataArray[0]['userName']);


}


function setMessagesData(id,userName){
  document.getElementById('recieverID').value = id;
  document.getElementById('recieverUserName').value = userName;

  console.log(id);
}


/* get user reviews */

function getUserReviews(userID){
  var userID = userID;
  var query = "userID=" + userID;
  var xmlhttp = new XMLHttpRequest();


  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         


          var dataArray = this.response;

          if(dataArray === "failed to fetch"){
              console.log(dataArray); 
           

          } else {
              
              dataArray = JSON.parse(dataArray);
              console.log(dataArray);

              var number = dataArray.length;

              createReviewsElements(number);
              setReviewDatas(dataArray);

             

          }

      }else{

         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "Backend/Get_ratingsandFeedbacks.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function createReviewsElements(number){
  var number = number;
  var reviewContainer = document.getElementById('reviewContainer');

  for(var i = 0; i< number; i++){

    reviewContainer_Content = document.createElement("div");
    reviewCard = document.createElement("div");
    reviewInfoList = document.createElement("ul");
    reviewerName= document.createElement("li");
    jobTitle= document.createElement("li");
    reviewRating= document.createElement("li");
    reviewDescription= document.createElement("li");


    reviewContainer_Content.setAttribute("class","reviewContainer-Content");
    reviewCard.setAttribute("class","reviewCard");
    reviewInfoList.setAttribute("class","reviewInfoList");
    reviewerName.setAttribute("class","reviewerName");
    jobTitle.setAttribute("class","jobTitle");
    reviewRating.setAttribute("class","reviewRating");
    reviewDescription.setAttribute("class","reviewDescription");

    reviewInfoList.appendChild(reviewerName)
    reviewInfoList.appendChild(jobTitle)
    reviewInfoList.appendChild(reviewRating)
    reviewInfoList.appendChild(reviewDescription)

    reviewCard.appendChild(reviewInfoList);
    reviewContainer_Content.appendChild(reviewCard);

    reviewContainer.appendChild(reviewContainer_Content)




    

  }

}


function setReviewDatas(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;

  reviewerName = document.getElementsByClassName("reviewerName");
  jobTitle= document.getElementsByClassName("jobTitle");
  reviewRating= document.getElementsByClassName("reviewRating");
  reviewDescription= document.getElementsByClassName("reviewDescription");


  for(var i = 0; i<number; i++){
    reviewerName[i].innerText = "Username: "+dataArray[i]['ReviewerUserName'];
    jobTitle[i].innerText = "Service: " + dataArray[i]['servicePosition'];
    

    if(dataArray[i]['rating1star'] === "1"){
      reviewRating[i].innerText = "Ratings: 1⭐";
    }else if(dataArray[i]['rating2star'] === "1"){
      reviewRating[i].innerText = "Ratings: 2⭐";
    }else if(dataArray[i]['rating3star'] === "1"){
      reviewRating[i].innerText = "Ratings: 3⭐";
    }else if(dataArray[i]['rating4star'] === "1"){
      reviewRating[i].innerText = "Ratings: 4⭐";
    }else if(dataArray[i]['rating5star'] === "1"){
      reviewRating[i].innerText = "Ratings: 5⭐";
    }

    reviewDescription[i].innerText = "Feedback: "+dataArray[i]['feedback'];

  }


}


function setMessagesData(id,userName){
  document.getElementById('recieverID').value = id;
  document.getElementById('recieverUserName').value = userName;

  console.log(id);
}

// services

// create elements to be appended 
function createServiceElements(Number){
 
  DataNumber = Number;
  div = document.getElementById("postContainer-Content");
  div.innerHtml="";
  
  
  
 
  
  for(var i = 1;i<DataNumber;i++){
  
 // create elements for rows
  var card = document.createElement('div');
  var ServiceTitleBackground = document.createElement('div');
  var serviceTitle = document.createElement('span');
  var BannerContainer = document.createElement('div');
  var br = document.createElement('br');
  var servicePosition = document.createElement('p');
  var serviceStatus= document.createElement('p');
  var rate= document.createElement('p');
  var ratings= document.createElement('p');
  var infoDiv = document.createElement('div');
 

 // set attributes
  card.setAttribute('class','AvailableService_Card');
  ServiceTitleBackground.setAttribute('class','ServiceTitleBackground');
  serviceTitle.setAttribute('class','serviceTitle');
  BannerContainer.setAttribute('class','BannerContainer');
  servicePosition.setAttribute('class','servicePosition');
  serviceStatus.setAttribute('class','serviceStatus');
  rate.setAttribute('class','rate');
  ratings.setAttribute('class','ratings');
  infoDiv.setAttribute('class','infoDiv');


 // append elements to the row
  ServiceTitleBackground.appendChild(serviceTitle);
  card.appendChild(ServiceTitleBackground);
  card.appendChild(BannerContainer);

  infoDiv.appendChild(servicePosition);
  infoDiv.appendChild(rate);
  infoDiv.appendChild(ratings);
  infoDiv.appendChild(serviceStatus);
  card.appendChild(infoDiv);

 


  div.append(card);

  } 
  
  
} // end of function


function setServiceData(array){
  
  var dataArray = array;
  var number = dataArray.length;
  var BannerContainer = document.getElementsByClassName('BannerContainer');
  var serviceTitle = document.getElementsByClassName('serviceTitle');
  var serviceCard = document.getElementsByClassName("AvailableService_Card");

  var servicePosition = document.getElementsByClassName('servicePosition');
  var serviceStatus = document.getElementsByClassName('serviceStatus');
  var rate = document.getElementsByClassName('rate');
  var ratings = document.getElementsByClassName('ratings');

  var j = 0
  for(var i = 1; i<number;i++){
      
      serviceTitle[j].innerHTML = " <b>"+ dataArray[i]['serviceCategory'] +"</b>";
      //serviceCard[i].setAttribute("onclick","selectCategory('" + dataArray[i]['serviceCategory'] + "')");

      serviceCard[j].setAttribute("onclick","redirect('Requestor_ServiceInfo.php?serviceID=" + dataArray[i]['serviceID'] +"')");
      servicePosition[j].innerHTML = " <b> Service: </b> "+ dataArray[i]['servicePosition'];
      serviceStatus[j].innerHTML = " <b>Status: </b> "+ dataArray[i]['serviceStatus'];
      rate[j].innerHTML = " <b> Rate: Php</b>"+ dataArray[i]['rate'];
    
      

      var image = new Image();
      image.src = dataArray[i]['bannerImage'];

      image.setAttribute('class','ServiceBanner');
      image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
      BannerContainer[j].appendChild(image);


      //"showServiceView(serviceID,serviceCategory,servicePosition,rate,certification,certificateFile,serviceStatus)
      //serviceCard[i].setAttribute("onclick","showServiceView("+dataArray[i]["serviceID"]+",'"+dataArray[i]["serviceCategory"]+"','"+dataArray[i]["servicePosition"]+"',"+dataArray[i]["rate"]+",'"+dataArray[i]["certification"]+"','"+dataArray[i]["certificationFile"]+"','"+dataArray[i]["serviceStatus"]+"')");
      getAvailableResponderRatings(dataArray[i]["serviceID"],j);
 
      j++;
    }

}

// responder ratings
function getAvailableResponderRatings(serviceID,number){
  var serviceID = serviceID;
  var number = number;
  var ratings = document.getElementsByClassName("ratings");
  
  
  var xmlhttp = new XMLHttpRequest();
  
  query = "serviceID=" + serviceID;



  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         

         
          // refresh the div to avoid duplication in appending

          var dataArray = this.response;
          //console.log("ratings:"+dataArray);

          if(dataArray === "Unable to load other available responders"){

              //suggestedResponders.innerText = "No other available responders";
              
          } else{
              dataArray = JSON.parse(dataArray);
              console.log(dataArray);

              ratings[number].innerText = "Ratings: " + dataArray[0]['total ratings'].toFixed(2) + "⭐";

          }

   
      }else{
          console.log('error');
         
      }      
  };

  xmlhttp.open("POST", "Backend/AverageStars.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function redirect(url){
  var url = url;

  location.href=url;

}