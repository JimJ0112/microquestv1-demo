


// set positions data 
function setData(array){

var dataArray = array;


/*message me portion */
requestorImageContainer = document.getElementById("requestorImageContainer");
requestorName= document.getElementById("requestorName");
recieverID = document.getElementById("recieverID");
recieverUserName= document.getElementById("recieverUserName");
 
/*request info portion */
requestTitle= document.getElementById("requestTitle");

category= document.getElementById("category");


requestorLocation= document.getElementById( "requestorLocation");
datePosted = document.getElementById("datePosted");
dueDate =document.getElementById("dueDate");
expectedPrice =document.getElementById("expectedPrice");
isNegotiable=document.getElementById("isNegotiable");



requestNotes =document.getElementById("requestNotes");


requestorID = document.getElementById("requestorID");
price =document.getElementById("price");
requestDueDate = document.getElementById('requestDueDate');








// set data to elements
/*message me portion */
getUserFeedbacks(dataArray[0]['requestorID']);
requestorName.innerText= dataArray[0]['userName'];
requestorName.href="Public_Profile.php?userID=" +  dataArray[0]['requestorID'] + "&userType=Requestor";
recieverID.value = dataArray[0]['requestorID'];
recieverUserName.value= dataArray[0]['userName'];

/*request info portion */
requestTitle.innerText= dataArray[0]['requestTitle'];

category.innerText= dataArray[0]['requestCategory'];


requestorLocation.innerText= dataArray[0]['requestorMunicipality'];
datePosted.innerText = dataArray[0]['datePosted'];
dueDate.innerText = dataArray[0]['dueDate'];
expectedPrice.innerText = dataArray[0]['requestExpectedPrice'];
isNegotiable.innerText = dataArray[0]['isNegotiable'];



requestNotes.innerText = dataArray[0]['requestDescription'];


// for displaying profile pic 
var profileimage = new Image();
profileimage.src = dataArray[0]['userPhoto'];
profileimage.setAttribute("Id",'requestorProfile');
requestorImageContainer.appendChild(profileimage);


// apply form portion
requestorID.value = dataArray[0]['requestorID'];
price.value =  dataArray[0]['requestExpectedPrice'];
requestDueDate.value  = dataArray[0]['dueDate'];

sessionStorage.setItem('requestorID',dataArray[0]['requestorID']);

}


// for getting products for pasabuy
function getRequest(requestID){
   
    
    var requestID = requestID;
    var query = "requestID=" + requestID;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_requestInfo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "Request does not exist, entered link might be broken";
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

function checkText(){
    send = document.getElementById('send');
    messageBody = document.getElementById('requestInfoMessageBody');

    if(messageBody.value === "" || messageBody.value <= "   "){
        send.disabled = true;
    } else{
        send.disabled = false;
    }
}


// show modal
function showApplyForm(){
    document.getElementById('formBackground').style.display = "block";
}


// set yes or no modal
function cancelApplyForm(){
document.getElementById('formBackground').style.display = "none";
}

// set yes or no modal
function acceptApplyForm(){
    document.getElementById('formBackground').style.display = "none";
    document.getElementById('requestApplicationForm').submit();
    
}


// check if already has transaction 
function checkTransactionExists(){
   
    
    var requestID = sessionStorage.getItem('requestID');
    var responderID = sessionStorage.getItem('myID');
    var requestorID = sessionStorage.getItem('requestorID');
    var query = "requestID=" + requestID +"&responderID=" + responderID + "&requestorID="+requestorID;

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Check_TransactionsExist.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var dataArray = this.response;
            console.log(dataArray);
            if(dataArray === "true"){
            document.getElementById('applyButton').disabled = true;
            }
   


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

//------------------get feedbacks
// for getting products for pasabuy
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