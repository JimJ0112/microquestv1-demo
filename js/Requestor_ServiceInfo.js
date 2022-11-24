function getServiceInfo(serviceID){
    var serviceID = serviceID;

    var xmlhttp = new XMLHttpRequest();
    
    query = "serviceID=" + serviceID;
    
    xmlhttp.open("POST", "Backend/Get_serviceInfo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
         
            
            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);
            setServicesData(dataArray);


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}


//get service ratings
function getServiceRatings(serviceID){
    var serviceID = serviceID;
    var number = number;
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "serviceID=" + serviceID;
  
  
  
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
  
            var dataArray = this.response;

  
            if(dataArray === "Unable to load other available responders"){

                
            } else{
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setRatingsData(dataArray);
            }
  
     
        }else{
            console.log('error');
           
        }      
    };
  
    xmlhttp.open("POST", "Backend/AverageStars.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function


function getUserInfo(userID){
    var userID = userID;
    var userType = userType;
    var query = "userID=" + userID +"&userType=Requestor";
    var xmlhttp = new XMLHttpRequest();
    
    
  
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  
  
            var dataArray = this.response;
  
            if(dataArray === "failed to fetch"){
             
  
            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 
                setResponderData(dataArray);
   
               
  
            }

        }else{

           console.log("Loading...");
  
        }      
    };
    
    xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
  }// end of function




/** --------------------------------------------set datas----------------------------------------- */
function setServicesData(dataArray){
    var dataArray = dataArray
    serviceCategory = document.getElementById("serviceCategory");
    serviceTitle= document.getElementById("serviceTitle");
    serviceInfo = document.getElementById("serviceInfo");

    serviceCategory.innerText = dataArray[0]['serviceCategory'];
    serviceTitle.innerText = dataArray[0]['servicePosition'];

    getServiceRatings(dataArray[0]['serviceID']);
    getUserInfo(dataArray[0]['responderID'])
    getServiceReviews(dataArray[0]['serviceID']);
    serviceInfo.style.backgroundImage = "url('"+ dataArray[0]['bannerImage']+"'), url('img/laundry-services.jpg')";

}


function setRatingsData(dataArray){
    var dataArray = dataArray;


     totalRatings = document.getElementById("totalRatings");
     ratings5StarsProgress  = document.getElementById("ratings5StarsProgress");
     ratings4StarsProgress = document.getElementById("ratings4StarsProgress");
     ratings3StarsProgress = document.getElementById("ratings3StarsProgress");
     ratings2StarsProgress = document.getElementById("ratings2StarsProgress");
     ratings1StarsProgress = document.getElementById("ratings1StarsProgress");
     totalNumberOfRatings = document.getElementById("totalNumberOfRatings");

     ratings5Star = document.getElementById("ratings5Stars");
     ratings4Star = document.getElementById("ratings4Stars");
     ratings3Star = document.getElementById("ratings3Stars");
     ratings2Star = document.getElementById("ratings2Stars");
     ratings1Star = document.getElementById("ratings1Stars");



     

     ratings5StarsProgress.max = dataArray[0]['all Ratings'];
     ratings4StarsProgress.max = dataArray[0]['all Ratings'];
     ratings3StarsProgress.max = dataArray[0]['all Ratings'];
     ratings2StarsProgress.max = dataArray[0]['all Ratings'];
     ratings1StarsProgress.max = dataArray[0]['all Ratings'];


     ratings5StarsProgress.value = dataArray[0]['5 stars'];
     ratings4StarsProgress.value = dataArray[0]['4 stars'];
     ratings3StarsProgress.value = dataArray[0]['3 stars'];
     ratings2StarsProgress.value = dataArray[0]['2 stars'];
     ratings1StarsProgress.value = dataArray[0]['1 stars'];


     
     ratings5Star.innerText  = dataArray[0]['5 stars'];
     ratings4Star.innerText  = dataArray[0]['4 stars'];
     ratings3Star.innerText  = dataArray[0]['3 stars'];
     ratings2Star.innerText  = dataArray[0]['2 stars'];
     ratings1Star.innerText  = dataArray[0]['1 stars'];

     var totalRatingstofixed = parseFloat(dataArray[0]['totalratings']).toFixed(2);

     totalRatings.innerText=  " ⭐"+ dataArray[0]['total ratings'];
    // totalRatings.innerText=  " ⭐"+ totalRatingstofixed;

     totalNumberOfRatings.innerText= dataArray[0]['all Ratings'];

}


function setResponderData(dataArray){
    var dataArray = dataArray

    userProfileImg = document.getElementById("userProfileImg");
    responderUserName = document.getElementById("responderUserName");
    responderUserEmail = document.getElementById("responderUserEmail");
    responderUserType = document.getElementById("responderUserType");

    userProfileImg.src= dataArray[0]['userPhoto'];
    responderUserName.innerText= dataArray[0]['userName'];
    responderUserEmail.innerText= dataArray[0]['userEmail'];
    responderUserType.innerText= dataArray[0]['userType'];


}



/**Reviews */

/* get user reviews */

function getServiceReviews(serviceID){
    var serviceID = serviceID;
    var query = "serviceID=" + serviceID;
    var xmlhttp = new XMLHttpRequest();
  
    xmlhttp.open("POST", "Backend/Get_serviceRatingsandFeedbacks.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  
  
            var dataArray = this.response;
  
            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
             
  
            } else {
              
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                document.getElementById('serviceFeedbacksDiv').innerHTML = "";
  
                var number = dataArray.length;
  
                createReviewsElements(number);
                setReviewDatas(dataArray);
  
               
  
            }
  
        }else{
  
           console.log("Loading...");
  
        }      
    };
    
    xmlhttp.send(query);
    
  }// end of function
  
  
  function createReviewsElements(number){
    var number = number;
    var reviewContainer = document.getElementById('serviceFeedbacksDiv');
  
    for(var i = 0; i< number; i++){
  
      reviewContainer_Content = document.createElement("div");
      reviewCard = document.createElement("table");
      tr1 = document.createElement('tr');
      reviewInfoList = document.createElement("td");
      reviewerName= document.createElement("p");
      jobTitle= document.createElement("p");
      reviewRating= document.createElement("p");
      reviewDescription= document.createElement("p");
      userProfileTD = document.createElement('td');
  
  
      reviewContainer_Content.setAttribute("class","reviewContainer-Content");
      reviewCard.setAttribute("class","reviewCard");
      reviewInfoList.setAttribute("class","reviewInfoList");
      reviewerName.setAttribute("class","reviewerName");
      jobTitle.setAttribute("class","jobTitle");
      reviewRating.setAttribute("class","reviewRating");
      reviewDescription.setAttribute("class","reviewDescription");
      userProfileTD.setAttribute("class","userProfileTD");
  
      reviewInfoList.appendChild(reviewerName)
      reviewInfoList.appendChild(jobTitle)
      reviewInfoList.appendChild(reviewRating)
      reviewInfoList.appendChild(reviewDescription)

      tr1.appendChild(userProfileTD);
      tr1.appendChild(reviewInfoList);
  
      reviewCard.appendChild(tr1);
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
    userProfileTD = document.getElementsByClassName("userProfileTD");
  
  
    for(var i = 0; i<number; i++){
      reviewerName[i].innerHTML= " <b> Username:</b> "+dataArray[i]['ReviewerUserName'];
      jobTitle[i].innerHTML = " <b> Service: </b> " + dataArray[i]['servicePosition'];
      
  
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
  
      reviewDescription[i].innerHTML = " <b>Feedback: </b>"+dataArray[i]['feedback'];

      var image = new Image();
      image.src = dataArray[i]['userprofileReviewerPhoto'];
      image.setAttribute("class","reviewerImage");
      userProfileTD[i].appendChild(image);
  
    }
  
  
  }
  