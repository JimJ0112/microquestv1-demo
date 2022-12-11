// this file targets the messaging functions 

// for targeting a conversation
function selectConversation(id,username,userImage){

   var userID = id;
   var userName = username;
   var conversationImage = document.getElementById('conversationImage');
   var messagesContentEmpty = document.getElementById('messagesContentEmpty');
   var messagesContent = document.getElementById("messagesContent");

    //headerID = document.getElementById('conversationUserID');
    //headerUserName = document.getElementById('conversationUserName');

    //headerID.innerText = userID;
    //headerUserName.innerText = userName;
    sessionStorage.setItem("selectedConversation",userID);

    sessionStorage.setItem("selectedUserName",username);

    // refreshing this session variable to be used in auto scrolling 
    sessionStorage.setItem("bottomMessage",0);
    conversationImage.src = userImage;

    messagesContentEmpty.style.display = "none";
    messagesContent.style.display = "grid";
    
    setConversation();

}


function init() { 
    // This is the function the browser first runs when it's loaded.
   
    setConversation();
    //noMessageSelected();
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
   
    setConversation();
    //noMessageSelected();
    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}


function sendMessage(){
   // headerID = document.getElementById('conversationUserID').innerText;
   // recieverID = headerID;
    recieverID = sessionStorage.getItem('selectedConversation');
    sender = sessionStorage.getItem('myID');
    messageBody = document.getElementById('messageBody').value;
    senderUserName = sessionStorage.getItem('myUserName');
    recieverUserName = sessionStorage.getItem('selectedUserName');

    //check if message is empty
    var str = messageBody;
    if(!str.replace(/\s/g, '').length){
        messageBody = "empty message";
        return 0;
    }

    var query = "recieverID="+ recieverID + "&senderID=" + sender+"&messageBody=" + messageBody + "&senderUserName="+senderUserName+"&recieverUserName="+recieverUserName ;     
   // console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/insertMessage.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload= function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
            
            //dataArray = JSON.parse(dataArray);
            //console.log(dataArray);
            //var number = dataArray.length
            //createSenderElements(number);
            //setUsersData(dataArray);
            //console.log(this.responseText);

            } else {
               // console.log(dataArray);
            }

            setConversation(sender);
     
        }else{
            //console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    document.getElementById('messageBody').value = "";

}


function setConversation(){
    userID = sessionStorage.getItem("selectedConversation");
    myID = sessionStorage.getItem('myID');
    //userID = id;
    var query = "userID="+ userID+"&myID="+myID;     
   // console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_userConversation.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload= function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById('messagesConversation').innerHTML = "";
            

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
            
            dataArray = JSON.parse(dataArray);
          //  console.log(dataArray);
            var number = dataArray.length;
            createConversationElements(number);
            setMessagesData(dataArray);
           

            } else {
              //  console.log(dataArray);
            }


     
        }else{
          //  console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    

}


// create elements to be appended 
function createConversationElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("messagesConversation");
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var container = document.createElement('div');
    var card = document.createElement('div');


    var date = document.createElement('td');
    var sender = document.createElement('td');
    var message = document.createElement('td');
    var br= document.createElement('br');
    var profilePic = document.createElement('div');



    // set attributes
    container.setAttribute('class','messageContainer');
    card.setAttribute('class','messageCard');

    date.setAttribute('class','messageDate');
    sender.setAttribute('class','messageSender');
    message.setAttribute('class','message');
    profilePic.setAttribute('class','messagesProfilePic');


    // append elements to the row
    card.appendChild(br);
    card.appendChild(date);
    card.appendChild(br);
    card.appendChild(sender);
    card.appendChild(br);
    card.appendChild(message);
    container.appendChild(card)


    div.append(container);



    } 
    
    
} // end of function


// set messages data
function setMessagesData(array){

    var dataArray = array;
    var number = dataArray.length;
    var myID = sessionStorage.getItem('myID');
    var conversationUserName = document.getElementById('conversationUserName');
    conversationUserName.innerText = sessionStorage.getItem('selectedUserName');
    

    var div = document.getElementsByClassName("messageCard");
    var date = document.getElementsByClassName('messageDate');
    //var sender= document.getElementsByClassName('messageSender');
    var message= document.getElementsByClassName('message');

    
    for(var i = 0; i<number;i++){
        
        date[i].innerText = dataArray[i]['messageDate'];
        //sender[i].innerText = dataArray[i]['messageSender'];
        message[i].innerText = dataArray[i]['messageBody'];
        //message[i].setAttribute("onclick","selectConversation('" + dataArray[i]['messageBody'] + "')");

        if(dataArray[i]['messageSender'] === myID ){
            
            div[i].setAttribute('style','float:right; background-color:skyblue; border-radius: 20px 20px 0px 20px; ');
            

            document.getElementById("sendPhotoRecieverID").value = dataArray[i]['messageReciever'];
            document.getElementById("sendPhotoRecieverUserName").value = dataArray[i]['recieverUserName'];
       
        } else if(dataArray[i]['messageReciever'] === myID){
            
            div[i].setAttribute('style','float:left; background-color:lightgray; border-radius: 20px 20px 20px 0px; text-align:center;');
            

            //seenMessage();
            document.getElementById("sendPhotoRecieverID").value = dataArray[i]['messageSender'];
            document.getElementById("sendPhotoRecieverUserName").value = dataArray[i]['senderUserName'];
       
        }

        base64String = dataArray[i]['messageFile'];

        var stringLength = base64String.length - 'data:image/png;base64,'.length;

        if(stringLength> 1000){
            var image = new Image();
            image.src= dataArray[i]['messageFile'];
            image.setAttribute("class","conversationMessageImage");
            image.setAttribute("onclick","viewImage('" + dataArray[i]['messageFile'] + "')");
            div[i].appendChild(image); 
         
            //console.log(stringLength);

        }

        
    }

    var lastnumber = number - 1;

    //console.log(lastnumber);
    //console.log(dataArray);

    // check if the last message to append was mine and set seen status 
    /*
    if(dataArray[lastnumber]['messageReciever'] === myID){
        
            div[lastnumber].setAttribute('style','float:left; background-color:lightgray; border-radius: 20px 20px 20px 0px; text-align:center;');
        
            seenMessage();
            document.getElementById("sendPhotoRecieverID").value = dataArray[lastnumber]['messageSender'];
            document.getElementById("sendPhotoRecieverUserName").value = dataArray[lastnumber]['senderUserName'];
   
            base64String = dataArray[lastnumber]['messageFile'];

            var stringLength = base64String.length - 'data:image/png;base64,'.length;

                if(stringLength> 1000){
                    var image = new Image();
                    image.src= dataArray[number]['messageFile'];
                    image.setAttribute("class","conversationMessageImage");
                    div[lastnumber].appendChild(image); 
                
                    //console.log(stringLength);
                
                }

    }
    */

    if(dataArray[lastnumber]['messageReciever'] === myID){
        seenMessage();
        console.log("you have seened the message");
    }



    //scrolls to the bottom when there's a new message
    var lastmessagecount = sessionStorage.getItem('bottomMessage');
    if(number > lastmessagecount){

     scrollToBottom();
     sessionStorage.setItem('bottomMessage',number);
     

    }
    

  

}



// scrolling to bottom of the conversation
function scrollToBottom(){

    var number =  sessionStorage.getItem('bottomMessage');
    var elem = document.getElementsByClassName('messageCard')[number-1];
    var div = document.getElementById("messagesConversation");
    div.scrollTo(0,div.scrollHeight);
   // console.log(elem);
}

// for closing the forms

function closeForms(){
    var fileForm = document.getElementById("fileForm");
    fileForm.style.display = "none";
}

// not send message when textbox is empty
function checkText(){
    send = document.getElementById('send');
    messageBody = document.getElementById('messageBody');
    var str = messageBody.value

    if (!str.replace(/\s/g, '').length) {
        console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
        send.disabled = true;
        messageBody.value = ""; 

    } else{
        console.log('string contains texts');
        send.disabled = false;

    }

    /*
    if(messageBody.value === "" ){
        send.disabled = true;
    } else{
        send.disabled = false;
    }
    */


  
}

// check if entered
var messageBody = document.getElementById('messageBody');

messageBody.addEventListener('keypress',function(e){
  
    var code = eval(e.keyCode);

    if(messageBody.value ===""){
        if(code == 32){
            e.preventDefault();
        }

        if(code == 13){
            e.preventDefault();
        }
    }


    if(code === 13){

        if(messageBody.value != "" ){
            sendMessage();
           
        }
    }

   
});


function seenMessage(){
    userID = sessionStorage.getItem("selectedConversation");
    myID = sessionStorage.getItem('myID');
    //userID = id;
    var query = "userID="+ userID+"&myID="+myID;     
    console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/seenMessage.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload= function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  
            

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
            
                console.log(dataArray);


            } else {
                console.log(dataArray);
            }


     
        }else{
            //console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    

}



// show payment proof output file

function showMessageImageFile(event){
    var imageContainer = document.getElementById("imageFileOutput");
    var messageImageFileOutputContainer = document.getElementById("messageImageFileOutputContainer");
    var messageImageFile = document.getElementById("messageImageFile");
    var extension = event.target.files[0].type;
    console.log(extension);
    messageFileErrorMsg = document.getElementById('messageFileErrorMsg');



    if( extension === "image/png" || extension === "image/jpg" || extension === "image/jpeg"){
        messageFileErrorMsg.innerText = "";
        imageContainer.src =  URL.createObjectURL(event.target.files[0]);
        messageImageFileOutputContainer.style.display ="block";
        messageImageFile.style.display = "none";
    } else {
        messageFileErrorMsg.innerText = "File type not supported!";
        messageImageFile.value = ""; 
    }


}

function closeMessageFile(){
    var imageContainer = document.getElementById("imageFileOutput");
    var messageImageFileOutputContainer = document.getElementById("messageImageFileOutputContainer");
    var messageImageFile = document.getElementById("messageImageFile");

 
    messageImageFileOutputContainer.style.display ="none";
    messageImageFile.style.display = "block";
    messageImageFile.value = "";
}

function closeMessageSendPhotoBack(){
    messageSendPhotoBack = document.getElementById('messageSendPhotoBack');
    messageSendPhotoBack.style.display = "none";
}

function openMessageSendPhotoBack(){
    messageSendPhotoBack = document.getElementById('messageSendPhotoBack');
    messageSendPhotoBack.style.display = "grid";
}

/*
function noMessageSelected(){
    var messagesContentEmpty = document.getElementById('messagesContentEmpty');
    messagesContentEmptyDisplay =messagesContentEmpty.style.display;

    if(messagesContentEmptyDisplay === "none"){
        sessionStorage.setItem("selectedConversation",null);
        sessionStorage.setItem("selectedUserName",null);
    }else{

    }
}
*/

function sendForm(){
    
    var messageImageFile = document.getElementById('messageImageFile');
    if(messageImageFile.value === ""){
        alert('You have not selected a photo to send yet');

    }else{
        messageSendPhotoForm = document.getElementById('messageSendPhotoForm');
        messageSendPhotoForm.submit();
        closeMessageSendPhotoBack();
        closeMessageFile();

    }
    

    /*
    closeMessageSendPhotoBack();
    closeMessageFile();
    alert('message sent');
    */
}



function viewImage(image){
    var image = image;
    var viewImageFile = document.getElementById('viewImageFile');


    viewImageFile.src=image;
    document.getElementById('viewImageBack').style.display = "grid";


}

function closeImage(){
    document.getElementById('viewImageBack').style.display = "none";
}