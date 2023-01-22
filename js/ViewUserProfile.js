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
         
        document.getElementById("LoadingScreen").style.display = "none";


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

  xmlhttp.onreadystatechange = function() {

    if (this.readyState != 4 || this.status != 200){ 
      document.getElementById("LoadingScreen").style.display = "grid";
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
  userDescriptionTextArea = document.getElementById("userDescriptionTextArea");

  userName.innerText = dataArray[0]["userName"];
  userType.innerText = dataArray[0]["userType"];

  var image = new Image();
  image.src = dataArray[0]["userPhoto"];
  image.setAttribute("class","userProfileUserPhoto");
  userImageContainer.appendChild(image);

  var SpecializationTD = document.getElementById('SpecializationTD');


  // class

 // userEmail = document.getElementsByClassName("userEmail")[0];
  userFullName= document.getElementsByClassName("userFullName")[0];
  //userAge= document.getElementsByClassName("userAge")[0];
  //userDob= document.getElementsByClassName("userDob")[0];
  userSpecialization= document.getElementsByClassName("userSpecialization")[0];
  //userLocation= document.getElementsByClassName("userLocation")[0];
  userLocation = document.getElementsByClassName('userLocation')[0];

 
 var middleName = dataArray[0]["middleName"];
  middleName = Array.from(middleName);
 var  middleInitial = middleName[0];
  console.log(middleInitial);

 // userEmail.innerText = dataArray[0]["userEmail"];
  userFullName.innerText = dataArray[0]["firstName"] + " " + middleInitial +". " +dataArray[0]["lastName"]  ;
 // userAge.innerText = dataArray[0]["userName"];
  //userDob.innerText = dataArray[0]["birthDate"];

  if(dataArray[0]["specialization"] === "" || dataArray[0]["specialization"] === " "||dataArray[0]["specialization"] === null){
    userSpecialization.style.display = "none";
    SpecializationTD.style.display = "none";
  }else{
    userSpecialization.innerText = dataArray[0]["specialization"];
  }

  //userLocation.innerText = dataArray[0]["municipality"];
  userLocation.innerText = dataArray[0]['baranggay'] +" , "+dataArray[0]['municipality'];


  if(dataArray[0]['userDescription'] === "" || dataArray[0]['userDescription'] === null ){
    userDescriptionTextArea.placeholder ="Please Write a description about yourself...";
    userDescriptionTextArea.innerText = "No Description";
  } else{
    userDescriptionTextArea.value = dataArray[0]['userDescription'];
    userDescriptionTextArea.innerText = dataArray[0]['userDescription'];
  }
  
  

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
  
  xmlhttp.open("POST", "Backend/Get_requestRatingsandFeedbacks.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function createReviewsElements(number){
  var number = number;
  var reviewContainer = document.getElementById('reviewContainer');

  for(var i = 0; i< number; i++){

    reviewContainer_Content = document.createElement("div");
    reviewerInfo = document.createElement('div');
    reviewerPhotoDiv = document.createElement('div');
    reviewerName= document.createElement("p");
    reviewerEmail= document.createElement("p");


    reviewCard = document.createElement("div");

    reviewInfoList = document.createElement("div");
    RequestInfo= document.createElement("p");
    reviewRating= document.createElement("p");
    reviewDescription= document.createElement("p");


    reviewContainer_Content.setAttribute("class","reviewContainer-Content");

    reviewCard.setAttribute("class","reviewCard");

    reviewerInfo.setAttribute("class","reviewerInfo");
    reviewerPhotoDiv.setAttribute("class","reviewerPhotoDiv");
    reviewerName.setAttribute("class","reviewerName");
    reviewerEmail.setAttribute("class","reviewerEmail");

    reviewInfoList.setAttribute("class","reviewInfoList");
    RequestInfo.setAttribute("class"," RequestInfo");
    reviewRating.setAttribute("class","reviewRating");
    reviewDescription.setAttribute("class","reviewDescription");

    reviewerInfo.appendChild(reviewerPhotoDiv)
    reviewerInfo.appendChild(reviewerName)
    reviewerInfo.appendChild(reviewerEmail)


    reviewInfoList.appendChild(RequestInfo)
    reviewInfoList.appendChild(reviewRating);
    reviewInfoList.appendChild(reviewDescription)


    reviewCard.appendChild(reviewerInfo);
    reviewCard.appendChild(reviewInfoList);

    reviewContainer_Content.appendChild(reviewCard);

    reviewContainer.appendChild(reviewContainer_Content)

    

  }

}


function setReviewDatas(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;

  reviewerName = document.getElementsByClassName("reviewerName");
  RequestInfo= document.getElementsByClassName("RequestInfo");
  reviewRating= document.getElementsByClassName("reviewRating");
  reviewDescription= document.getElementsByClassName("reviewDescription");

  reviewerPhotoDiv= document.getElementsByClassName("reviewerPhotoDiv");
  
  reviewerEmail= document.getElementsByClassName("reviewerEmail");
  reviewerInfo = document.getElementsByClassName("reviewerInfo");


  for(var i = 0; i<number; i++){


    var image = new Image();
    image.src = dataArray[i]["requestorUserPhoto"];
    image.setAttribute("class","requestorUserPhoto");
    reviewerPhotoDiv[i].append(image);

    reviewerName[i].innerText = dataArray[i]['ReviewerUserName'];
    reviewerEmail[i].innerText = dataArray[i]['requestorUserEmail'];
    RequestInfo[i].innerText =  dataArray[i]['requestCategory'] + " : " + dataArray[i]['requestTitle'];
    
    reviewerInfo[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID="+ dataArray[i]['ratingReviewerID'] + "&userType=Requestor')");

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


function getMyReviews(userID){
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
              setMyReviewDatas(dataArray);

             

          }

      }else{

         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "Backend/Get_requestorRequestReviews.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function setMyReviewDatas(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;

  reviewerName = document.getElementsByClassName("reviewerName");
  RequestInfo= document.getElementsByClassName("RequestInfo");
  reviewRating= document.getElementsByClassName("reviewRating");
  reviewDescription= document.getElementsByClassName("reviewDescription");

  reviewerPhotoDiv= document.getElementsByClassName("reviewerPhotoDiv");
  
  reviewerEmail= document.getElementsByClassName("reviewerEmail");
  reviewerInfo = document.getElementsByClassName("reviewerInfo");


  for(var i = 0; i<number; i++){


    var image = new Image();
    image.src = dataArray[i]["responderUserPhoto"];
    image.setAttribute("class","requestorUserPhoto");
    reviewerPhotoDiv[i].append(image);

    reviewerName[i].innerText = dataArray[i]['RevieweeUserName'];
    reviewerEmail[i].innerText = dataArray[i]['responderUserEmail'];
    RequestInfo[i].innerText =  dataArray[i]['requestCategory'] + " : " + dataArray[i]['requestTitle'];
    
    reviewerInfo[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID="+ dataArray[i]['ratingRevieweeID'] + "&userType=Responder')");

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


// get users certificates

function getUserCertificates(userID){
  var userID = userID;
  var query = "responderID=" + userID;
  var xmlhttp = new XMLHttpRequest();
  
  

  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         


          var dataArray = this.response;

          if(dataArray === "failed to fetch"){
           

          } else {
              
              dataArray = JSON.parse(dataArray);
              console.log(dataArray); 
              
      

              var number = dataArray.length;
              createUserCertificateElements(number)
              setUserCertificateData(dataArray);
              //createServiceElements(number);
              //setServiceData(dataArray);
             

          }

      }else{

         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "Backend/Get_Certificates.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function createUserCertificateElements(number){

  var DataNumber = number;
  var certificatesContainer = document.getElementById("certificatesContainer");


  for(var i = 0;i<DataNumber;i++){

    var certificateCard = document.createElement("div");
    var certificateImageContainer = document.createElement("div");
    var specialization = document.createElement("p");
    var certificateTitle = document.createElement("p");

  


    certificateCard.setAttribute("class","certificateCard");
    certificateImageContainer.setAttribute("class","certificateImageContainer");
    certificateTitle.setAttribute("class","certificateTitle");
    specialization.setAttribute("class","certificateSpecialization");
    


    certificateCard.appendChild(certificateImageContainer);
    certificateCard.appendChild(specialization);
    certificateCard.appendChild(certificateTitle);
 

    certificatesContainer.append(certificateCard);

  }
  
}


function setUserCertificateData(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;


  var certificateImageContainer= document.getElementsByClassName("certificateImageContainer");
  var certificateTitle= document.getElementsByClassName("certificateTitle");
  var certificateSpecialization = document.getElementsByClassName("certificateSpecialization");



  for(var i = 0; i< number;i++){

    var image = new Image();
    image.src = dataArray[i]['certificateFile'];
    image.setAttribute("class","certificateFileImage");
    image.setAttribute("onclick","showImage('" + dataArray[i]['certificateFile'] + "')");

    certificateImageContainer[i].appendChild(image);
    certificateTitle[i].innerText = dataArray[i]['certificateType'];

    certificateSpecialization[i].innerHTML = "<b>" + dataArray[i]['specialization'] + "</b>";

  }

}




// get my certificates 

function getMyCertificates(userID){
  var userID = userID;
  var query = "responderID=" + userID;
  var xmlhttp = new XMLHttpRequest();
  
  

  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         


          var dataArray = this.response;

          if(dataArray === "failed to fetch"){
           

          } else {
              
              dataArray = JSON.parse(dataArray);
              console.log(dataArray); 
              
      

              var number = dataArray.length;
              createCertificateElements(number)
              setCertificateData(dataArray);
              //createServiceElements(number);
              //setServiceData(dataArray);
             

          }

      }else{

         console.log("Loading...");

      }      
  };
  
  xmlhttp.open("POST", "Backend/Get_myCertificates.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(query);
  
}// end of function


function createCertificateElements(number){

  var DataNumber = number;
  var certificatesContainer = document.getElementById("certificatesContainer");


  for(var i = 0;i<DataNumber;i++){

    var certificateCard = document.createElement("div");
    var certificateImageContainer = document.createElement("div");
    var specialization = document.createElement("p");
    var certificateTitle = document.createElement("p");
    var certificateStatus = document.createElement("p");
    var updateButton = document.createElement("button");


    certificateCard.setAttribute("class","certificateCard");
    certificateImageContainer.setAttribute("class","certificateImageContainer");
    certificateStatus.setAttribute("class","certificateStatus");
    certificateTitle.setAttribute("class","certificateTitle");
    updateButton.setAttribute("class","updateButton");
    updateButton.innerText="Update";
    specialization.setAttribute("class","certificateSpecialization");


    certificateCard.appendChild(certificateImageContainer);
    certificateCard.appendChild(specialization);
    certificateCard.appendChild(certificateTitle);
    certificateCard.appendChild(certificateStatus);
    certificateCard.appendChild(updateButton);

    certificatesContainer.append(certificateCard);

  }
  
}


function setCertificateData(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;


  var certificateImageContainer= document.getElementsByClassName("certificateImageContainer");
  var certificateTitle= document.getElementsByClassName("certificateTitle");
  var updateButton= document.getElementsByClassName("updateButton");
  var certificateStatus = document.getElementsByClassName("certificateStatus");
  var certificateSpecialization = document.getElementsByClassName("certificateSpecialization");


  for(var i = 0; i< number;i++){

    var image = new Image();
    image.src = dataArray[i]['certificateFile'];
    image.setAttribute("class","certificateFileImage");
    image.setAttribute("onclick","showImage('" + dataArray[i]['certificateFile'] + "')");

    certificateImageContainer[i].appendChild(image);

    certificateTitle[i].innerText = dataArray[i]['certificateType'];
    certificateStatus[i].innerText = dataArray[i]['certificateStatus'];
    certificateSpecialization[i].innerHTML = "<b>"+dataArray[i]["specialization"] + "</b>";

      if(dataArray[i]['certificateStatus'] === "Active"){
        certificateStatus[i].style.color="green";
        
      } else if(dataArray[i]['certificateStatus'] === "Delisted"){
        certificateStatus[i].style.color="red";
       
      } else{
        certificateStatus[i].style.color="black";
        serviceStatusRadio[0].checked = true;

      }


      


    updateButton[i].setAttribute('onclick',"updateCertificate(" + dataArray[i]['CertificateID'] +",'" + dataArray[i]['certificateType'] +"','"+dataArray[i]['certificateStatus'] +"')");
    updateButton[i].className += " buttonGreen";


  }

}


function closeForms(){
  var otherCategoriesFormBack = document.getElementById("otherCategoriesFormBack");
  var showImageBack = document.getElementById("showImageBack");
  var updateCertBack = document.getElementById("updateCertBack");
  var AddSpecializationBack = document.getElementById("AddSpecializationBack");


  otherCategoriesFormBack.style.display = "none";
  showImageBack.style.display = "none";
  updateCertBack.style.display = "none";
  AddSpecializationBack.style.display = "none";

}

function closeUserForms(){

  var showImageBack = document.getElementById("showImageBack");
 



  showImageBack.style.display = "none";


}


function showImage(imageData){
  var imageData = imageData;
  var showImage = document.getElementById("showImage");
  var showImageBack = document.getElementById("showImageBack");




  showImage.src = imageData;
  showImageBack.style.display = "block";

}


function updateCertificate(id,title,status){

  var title = title;
  var id = id;
  var status = status;
  var updateCertificateTitle = document.getElementById("updateCertificateTitle");
  var updateCertBack = document.getElementById("updateCertBack");
  var certificateID = document.getElementById("certificateID");

  var certificateStatusRadio = document.getElementsByClassName("certificateStatusRadio");


  updateCertificateTitle.value = title;
  certificateID.value = id;
  updateCertBack.style.display = "block";

  if(status === "Active"){
    certificateStatusRadio[0].checked = true;
  }else{
    certificateStatusRadio[1].checked = true;

  }

}

function showNewCertificateForm(){
  otherCategoriesFormBack = document.getElementById("otherCategoriesFormBack");
  otherCategoriesFormBack.style.display = "block";
}


/* for specializations */

function showAddSpecializationForm(){
  document.getElementById("AddSpecializationBack").style.display = "grid";
}


function specializationAlreadyOffered(userID){
  var userID = userID;
  var Specialization = document.getElementById("specializationsDropDown").value;

  var query = "userID=" + userID + "&Specialization="+Specialization;
  console.log("Specializations: " + query);
  var xmlhttp = new XMLHttpRequest();



  xmlhttp.open("POST", "Backend/CheckSpecializationExists.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         
   
          var dataArray = this.response;
          console.log(dataArray);

          if(dataArray === "true"){
            document.getElementById("submitSpecialization").disabled = true;
          }else{
            document.getElementById("submitSpecialization").disabled = false;
            
          }


      }else{
          console.log(err);
      }      
  };
  
  xmlhttp.send(query);
}


function getMySpecializations(userID){

  var userID = userID;
  var query = "userID=" + userID;
  var xmlhttp = new XMLHttpRequest();



  xmlhttp.open("POST", "Backend/Get_mySpecializations.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         
   
          var dataArray = this.response;

          if(dataArray === "failed to fetch"){

          }else{

            dataArray = JSON.parse(dataArray);
            var number = dataArray.length;
            createSpecializationElements(number);
            setSpecializationData(dataArray);
            setMySpecializations(dataArray);

          }




      }else{
          console.log(err);
      }      
  };
  
  xmlhttp.send(query);

}

function createSpecializationElements(number){
  var number = number;
  var SpecializationsTableBody = document.getElementById("SpecializationsTableBody");


  for(var i =0; i<number; i++){

    specializationContainer = document.createElement("div");
    specializationContainer.setAttribute("class","specializationContainer");
  

    SpecializationsTableBody.appendChild(specializationContainer);
    






  }
}


function setSpecializationData(dataArray){
  var dataArray = dataArray;
  var number = dataArray.length;
  var specializationContainer = document.getElementsByClassName("specializationContainer");


  for(var i =0; i<number; i++){

    specializationContainer[i].innerText = dataArray[i]["specialization"];
    






  }
}


function getServices(){

  var xmlhttp = new XMLHttpRequest();

  var serviceCard = document.getElementById("specializationsDropDown").innerHTML="";

  xmlhttp.open("POST", "Backend/Get_requestsGrouped.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         
   
          var dataArray = this.responseText;

          if(dataArray === "failed to fetch"){


          } else{

          dataArray = JSON.parse(dataArray);
          console.log("Specializations");
          console.log(dataArray);

         

          setOptions(dataArray);

   
          }
      }else{
          console.log(err);
      }      
  };
  
  xmlhttp.send();
  
}// end of function



// set options to dropdown  
function setOptions(array){

  var dataArray = array;
 

  console.log(Object.values(dataArray));
  var dataArray = Object.values(dataArray);
  console.log(dataArray);

  var number = dataArray.length;
  

  var serviceCard = document.getElementById("specializationsDropDown");

  var option = new Option;
  option.innerText = "Select Specialization";
  option.setAttribute("disabled",true);
  option.setAttribute("selected",true);
  serviceCard.add(option);

  for(var i = 0; i<number;i++){
      
    console.log(dataArray[i]);

      var option = new Option;
      option.innerText = dataArray[i];
      option.value = dataArray[i];
      serviceCard.add(option);

  }




  
}



// set options to dropdown  
function setMySpecializations(array){

  var dataArray = array;
  var number = dataArray.length;

  document.getElementById("mySpecializationsDropDown").innerHTML = "";
  var serviceCard = document.getElementById("mySpecializationsDropDown");



  for(var i = 0; i<number;i++){
      

      var option = new Option;
      option.innerText = dataArray[i]['specialization'];
      option.value = dataArray[i]['specialization'];
      serviceCard.add(option);

  }


}



function getMyRequests(userID){
  var query = "userID=" + userID;

  var xmlhttp = new XMLHttpRequest();

  

  xmlhttp.open("POST", "Backend/Get_myRequests.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onload = function() {
      if (this.readyState === 4 || this.status === 200){ 
         
   
          var dataArray = this.responseText;

          if(dataArray === "failed to fetch"){


          } else{

          dataArray = JSON.parse(dataArray);
          var Number = dataArray.length;
          createRequestElements(Number);
          setRequestsData(dataArray);


          console.log(dataArray);

         
   
          }
      }else{
          console.log(err);
      }      
  };
  
  xmlhttp.send(query);
  
}// end of function


function createRequestElements(Number){
 
  DataNumber = Number;
  div = document.getElementById("postContainer-Content");
 
  
  for(var i = 0;i<DataNumber;i++){
  
  // create elements for rows
  var wrapper = document.createElement('div'); 
  var card = document.createElement('div');
  var request_card__image = document.createElement('div');
  var requestorLocation = document.createElement('div');
  var requestorUserName = document.createElement('div');
  var requestDescription = document.createElement('div');
  var dueDate = document.createElement('div');
  var request_card__unit_stats = document.createElement('div');
  var one_third = document.createElement('div');
  var requestCategory = document.createElement('div');
  var requestTitle = document.createElement('div');
  var requestExpectedPrice = document.createElement('div');
  var isNegotiable = document.createElement('div');
  var nameLoc = document.createElement('div');
  var footer = document.createElement('div');
  var price = document.createElement('div');
  var grid_head= document.createElement('grid-head');

  // set attributes
   wrapper.setAttribute("class","wrapper"); 
      card.setAttribute("class","request-card"); 
          grid_head.setAttribute("class", "grid-head");
              request_card__image.setAttribute("class","request-card__image"); 
              nameLoc.setAttribute("class", "nameLoc");
                 requestorUserName.setAttribute("class","requestorUserName"); 
                 requestorLocation.setAttribute("class","requestorLocation"); 

          request_card__unit_stats.setAttribute("class","request-card__unit-stats"); 
             one_third.setAttribute("class","one-third"); 
                 requestCategory.setAttribute("class","requestCategory"); 
                 requestTitle.setAttribute("class","requestTitle"); 

          requestDescription.setAttribute("class","requestDescription"); 

          footer.setAttribute("class", "footer");
             price.setAttribute("class", "price");
                 requestExpectedPrice.setAttribute("class","requestExpectedPrice"); 
                 isNegotiable.setAttribute("class","isNegotiable"); 


              dueDate.setAttribute("class","dueDate"); 


  // append elements to the row

  price.appendChild(requestExpectedPrice);
  price.appendChild(isNegotiable);

  footer.appendChild(price);
  footer.appendChild(dueDate); 

  one_third.appendChild(requestCategory);
  one_third.appendChild(requestTitle);
   
  request_card__unit_stats.appendChild(one_third);

  
  nameLoc.appendChild(requestorUserName);
  nameLoc.appendChild(requestorLocation);

  grid_head.appendChild(request_card__image);
  grid_head.appendChild(nameLoc);

  card.appendChild(grid_head);
  card.appendChild(request_card__unit_stats);
  card.appendChild(requestDescription);
  card.appendChild(footer);

  wrapper.appendChild(card);


  div.append(wrapper);

  } 
  
  
} // end of function


// set positions data 
function setRequestsData(array){

  var dataArray = array;
  var number = dataArray.length;

  wrapper = document.getElementsByClassName("wrapper"); 
  card= document.getElementsByClassName("request-card"); 
  request_card__image= document.getElementsByClassName("request-card__image"); 
  requestorLocation= document.getElementsByClassName("requestorLocation"); 
  requestorUserName= document.getElementsByClassName("requestorUserName"); 
  requestDescription= document.getElementsByClassName("requestDescription"); 
  dueDate= document.getElementsByClassName("dueDate"); 
  request_card__unit_stats= document.getElementsByClassName("request-card__unit-stats"); 
  one_third= document.getElementsByClassName("one-third"); 
  requestCategory= document.getElementsByClassName("requestCategory"); 
  requestTitle= document.getElementsByClassName("requestTitle"); 
  requestExpectedPrice= document.getElementsByClassName("requestExpectedPrice"); 
  isNegotiable= document.getElementsByClassName("isNegotiable"); 
  footer= document.getElementsByClassName("footer"); 
  price= document.getElementsByClassName("price"); 
  grid_head= document.getElementsByClassName("grid-head"); 


  for(var i = 0; i<number;i++){
      
      dueDate[i].innerHTML= "due date: &nbsp" + dataArray[i]['dueDate'];
      isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
      requestCategory[i].innerHTML = dataArray[i]['requestCategory'];
      requestDescription[i].innerHTML = "</br>" + dataArray[i]['requestDescription'];
      requestExpectedPrice[i].innerHTML = "Php "+dataArray[i]['requestExpectedPrice'] +".00";
    
      requestTitle[i].innerHTML = dataArray[i]['requestTitle'];
 
  }


}




/*edit user description*/
/* get user reviews */

function editUserDescription(){
  if (confirm("Are you sure you want to save these changes?") == true) {
    
  

    var userID = document.getElementById("userDescriptionUserID").value;
    var userDescription = document.getElementById("userDescriptionTextArea").value;
    var query = "userID=" + userID+"&userDescription=" + userDescription;
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
         


            var dataArray = this.response;
            alert("Description Updated!");
            location.reload();




        }else{

           console.log("Loading...");

        }      
    };
  
    xmlhttp.open("POST", "Backend/UpdateUserDescription.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}
  
}// end of function