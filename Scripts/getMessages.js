

// for targeting a conversation
function selectConversation(id,username){

    userID = id;
    userName = username;
    //headerID = document.getElementById('conversationUserID');
    //headerUserName = document.getElementById('conversationUserName');

    //headerID.innerText = userID;
    //headerUserName.innerText = userName;
    sessionStorage.setItem("selectedConversation",userID);

    sessionStorage.setItem("selectedUserName",username);

    // refreshing this session variable to be used in auto scrolling 
    sessionStorage.setItem("bottomMessage",0);
    
    setConversation();

}


function init() { 
    // This is the function the browser first runs when it's loaded.
   
    setConversation();
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
   
    setConversation();
    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}


function sendMessage(){
    headerID = document.getElementById('conversationUserID').innerText;
    recieverID = headerID;
    sender = sessionStorage.getItem('myID');
    messageBody = document.getElementById('messageBody').value;
    senderUserName = sessionStorage.getItem('myUserName');
    recieverUserName = sessionStorage.getItem('selectedUserName');

    var query = "recieverID="+ userID + "&senderID=" + sender+"&messageBody=" + messageBody + "&senderUserName="+senderUserName+"&recieverUserName="+recieverUserName ;     
    console.log(query);
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

            } else {
                console.log(dataArray);
            }

            setConversation(sender);
     
        }else{
            console.log(err);
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
    console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_userConversation.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload= function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById('conversation').innerHTML = "";
            

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
            
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);
            var number = dataArray.length;
            createConversationElements(number);
            setMessagesData(dataArray);
           

            } else {
                console.log(dataArray);
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    

}


// create elements to be appended 
function createConversationElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("conversation");
    
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
      //  sender[i].innerText = dataArray[i]['messageSender'];
        message[i].innerText = dataArray[i]['messageBody'];
        //message[i].setAttribute("onclick","selectConversation('" + dataArray[i]['messageBody'] + "')");

        if(dataArray[i]['messageSender'] === myID ){
            
            div[i].setAttribute('style','float:right; background-color:skyblue; border-radius: 20px 20px 0px 20px; ');
            
        } else if(dataArray[i]['messageReciever'] === myID){
            
            div[i].setAttribute('style','float:left; background-color:lightgray; border-radius: 20px 20px 20px 0px; text-align:center;');
            //seenMessage();
        }

        
        
    }

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
    var div = document.getElementById("conversation");
    div.scrollTo(0,div.scrollHeight);
    console.log(elem);
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

    if(messageBody.value === "" ){
        send.disabled = true;
    } else{
        send.disabled = false;
    }


  
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
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    

}
