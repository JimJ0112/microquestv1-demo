


// set positions data 
function setData(array){

var dataArray = array;

profilepic = document.getElementById("profilePic");

fullName=document.getElementById("fullName");
userName=document.getElementById("userName");
userEmail=document.getElementById("userEmail") ;
userType =document.getElementById("userType");


recieverUserName = document.getElementById("recieverUserName");
recieverUserName.value = dataArray[0]['userName'];


birthDate =document.getElementById("Birth date");
Address=document.getElementById("Address");
Education=document.getElementById("Education") ;


userGovID=document.getElementById("userGovID");
userGovIDFile=document.getElementById("userGovIDFile");
userGovIDNumber=document.getElementById("userGovIDNumber");

userServicesDetails=document.getElementById("userServicesDetails");


userName.innerText = dataArray[0]['userName'];
userEmail.innerText = dataArray[0]['userEmail'];
userType.innerText = dataArray[0]['userType'];


fullName.innerText = dataArray[0]['firstName'] + " " + dataArray[0]['lastName'] ;
birthDate.innerText  = dataArray[0]['birthDate'];
//Address.innerText = dataArray[0]['houseNo'] + " "+dataArray[0]['street'] + " "+ dataArray[0]['baranggay'] + " "+ dataArray[0]['municipality'];
Address.innerText = dataArray[0]['street'] + " "+ dataArray[0]['baranggay'] + " "+ dataArray[0]['municipality'];
Education.innerText = dataArray[0]['education'];


userGovID.innerText = dataArray[0]['idType'];
userGovIDNumber.innerText = dataArray[0]['idNumber'];

userGovIDFile

// for displaying profile pic 
var profileimage = new Image();
profileimage.src = dataArray[0]['userPhoto'];
profileimage.setAttribute("Id",'profileimage');
profilepic.appendChild(profileimage);


}


// for getting products for pasabuy
function getUser(ID,userType){
   
    var userID = ID;
    var userType = userType;
    var query = "userID=" + userID +"&userType=" + userType;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("publicProfileContent");
                var h2 = document.createElement('h2');
                h2.innerText = "User does not exist";
                content.innerHTML = "";
                content.style.textAlign = "center";
                content.appendChild(h2);


            } else {
                


                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setData(dataArray);    
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// for displaying feedbacks
function getUserFeedbacks(userID){
   
    
    var userID = userID;
    var query = "userID=" + userID;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_userFeedBacks.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var viewFeedBacks = document.getElementById('viewFeedBacks');
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);

                 viewFeedBacks.innerText = "No feedbacks for this user yet";
            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                //setData(dataArray);  
                var number = dataArray.length;
                createFeedbackElements(number);  
                setFeedBackElements(dataArray);
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

function createFeedbackElements(number){

    var number = number;
    var viewFeedBacks = document.getElementById('viewFeedBacks');

    for(var i=0; i<number;i++){
        feedbackCard = document.createElement('tr');
        feedback = document.createElement('td');
        feedbackDate  = document.createElement('p');
        reviewerUserName  = document.createElement('p');
        reviewerUserPhoto  = document.createElement('td');
        
        // set attributes
        feedback.setAttribute('class','feedback');
        feedbackDate.setAttribute('class','feedbackDate');
        reviewerUserName.setAttribute('class','reviewerUserName');
        reviewerUserPhoto.setAttribute('class','reviewerUserPhoto');
        feedbackCard.setAttribute('class','feedbackCard');

        //append
        feedbackCard.appendChild(reviewerUserName);
        feedbackCard.appendChild(feedbackDate);
        feedbackCard.appendChild(reviewerUserPhoto);
        feedbackCard.appendChild(feedback);

        viewFeedBacks.appendChild(feedbackCard);
       
    }



}


function setFeedBackElements(array){
    var dataArray = array;
    var number = dataArray.length;

    feedback = document.getElementsByClassName('feedback');
    feedbackDate= document.getElementsByClassName('feedbackDate');
    reviewerUserName= document.getElementsByClassName('reviewerUserName');
    reviewerUserPhoto= document.getElementsByClassName('reviewerUserPhoto');
    feedbackCard= document.getElementsByClassName('feedbackCard');

    for(var i = 0; i<number; i++){

        
        feedback[i].innerText = dataArray[i]['feedback'];
       
        feedbackDate[i].innerText = dataArray[i]['feedbackDate'];
        reviewerUserName[i].innerText = dataArray[i]['reviewerUserName'];

        
        var image = new Image();
        image.src = dataArray[i]['reviewerUserPhoto'];
        image.setAttribute('class','userPhotoPic');
        reviewerUserPhoto[i].appendChild(image);
    
    }







}