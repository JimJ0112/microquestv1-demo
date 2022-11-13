// this file targets the process of displaying the message contacts




// create elements to be appended 
function createSenderElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("conversationsList");
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('table');
    var td = document.createElement('td');
    var tr = document.createElement('tr');
    var br = document.createElement('br');


    var userName = document.createElement('span');
    var profilePic = document.createElement('div');
    var userInfoDiv = document.createElement('td');
    var lastMessageDiv = document.createElement('td');
    var lastMessageP = document.createElement('span');
    var hr = document.createElement('hr');
    var setConversation = document.createElement('a');



    // set attributes

    card.setAttribute('class','inboxCard');
    userName.setAttribute('class','inboxUserName');
    profilePic.setAttribute('class','messageProfilePic');
    userInfoDiv.setAttribute('class','userInfoDiv');
    lastMessageDiv.setAttribute('class','lastMessageDiv');
    lastMessageP.setAttribute('class','lastMessageP');
    setConversation.setAttribute('class','setConversation');

    // append elements to the row
    userInfoDiv.appendChild(profilePic);
    
    lastMessageDiv.appendChild(userName);
    lastMessageDiv.appendChild(br);

    lastMessageDiv.appendChild(lastMessageP);
    


    tr.appendChild(userInfoDiv);
    tr.appendChild(lastMessageDiv);

    //card.appendChild(userInfoDiv);
    //card.appendChild(lastMessageDiv);

    card.appendChild(tr);
    setConversation.appendChild(card);
    


    div.append(setConversation);
    div.append(hr);

    } 
    
    
} // end of function


// set positions data 
function setUsersData(array){

    var myID = sessionStorage.getItem('myID');
    var dataArray = array;
    var number = dataArray.length;
    dataArray.sort();


    var inboxCard = document.getElementsByClassName("inboxCard");
    var inboxUserName = document.getElementsByClassName("inboxUserName");
    var messageProfilePic = document.getElementsByClassName('messageProfilePic');
    var lastMessageDiv = document.getElementsByClassName('lastMessageDiv');
    var lastMessageP = document.getElementsByClassName('lastMessageP');
    var setConversation = document.getElementsByClassName('setConversation');

    for(var i = 0; i<number;i++){

        if (myID === dataArray[i]['senderID']){
           // inboxCard[i].innerText = dataArray[i]['messageReciever'];
            
            inboxUserName[i].innerText = dataArray[i]['recieverUserName'];
           // inboxCard[i].setAttribute("onclick","seenMessage()");

            lastMessageP[i].innerText = dataArray[i]['latestMessage'];
            var image = new Image();
            image.src = dataArray[i]['recieverUserPhoto'];
            image.setAttribute('class','messageUserPhoto');
            messageProfilePic[i].appendChild(image);

            //setConversation[i].href= "MessagesV2.php?selectedConversationID="+dataArray[i]['recieverID']+"&selectedConversationUsername="+dataArray[i]['recieverUserName'];
            setConversation[i].setAttribute("onclick","selectConversation(" + dataArray[i]['recieverID'] +", '"+ dataArray[i]['recieverUserName'] +"','"+dataArray[i]['recieverUserPhoto']+"')");
        
            

        } else if(myID === dataArray[i]['recieverID']){


            inboxUserName[i].innerText = dataArray[i]['senderUserName'];
            
            inboxCard[i].setAttribute("onclick","seenMessage()");


            lastMessageP[i].innerText = dataArray[i]['latestMessage'];
            var image = new Image();
            image.src = dataArray[i]['senderUserPhoto'];
            image.setAttribute('class','messageUserPhoto');
            messageProfilePic[i].appendChild(image);

            //setConversation[i].href= "MessagesV2.php?selectedConversationID="+dataArray[i]['senderID']+"&selectedConversationUsername="+dataArray[i]['senderUserName'];
            //setConversation[i].setAttribute("onclick","selectConversation(" + dataArray[i]['senderID'] +", '"+ dataArray[i]['senderUserName'] +"')");
            setConversation[i].setAttribute("onclick","selectConversation(" + dataArray[i]['senderID'] +", '"+ dataArray[i]['senderUserName'] +"','"+dataArray[i]['senderUserPhoto']+"')");

            

            if(dataArray[i]['conversationStatus'] === "New Message"){
                var newMessageTag = document.createElement('p');
                newMessageTag.innerText = "New Message";
                newMessageTag.setAttribute('class','newMessageTag');
                lastMessageDiv[i].appendChild(newMessageTag);

                var messageNotification = document.getElementById('messageNotification');
                //messageNotification.play();
            }
        
        }


 
        //inboxCard[i].innerText = dataArray[i]['messageSender'];
        //inboxCard[i].setAttribute("onclick","selectConversation('" + dataArray[i]['messageSender'] + "')");

    }

}


// for getting messages 
function getMessages(){
  
    userID = sessionStorage.getItem('myID');
    var query = "userID="+ userID;     
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_userMessages.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload= function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

            if(dataArray != "failed to fetch"){

            inbox = document.getElementById('conversationsList');
            inbox.innerHTML = "";

            dataArray = JSON.parse(dataArray);
            console.log(dataArray);
            var number = dataArray.length
            createSenderElements(number);
            setUsersData(dataArray);

            } else {
                console.log(dataArray);
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// for targeting a conversation
function selectConversation(id,username){

    userID = id;
    userName = username;
    headerID = document.getElementById('conversationUserID');
    headerUserName = document.getElementById('conversationUserName');

    headerID.innerText = userID;
    headerUserName.innerText = userName;
    sessionStorage.setItem("selectedConversation",userID);

    sessionStorage.setItem("selectedUserName",username);

    // refreshing this session variable to be used in auto scrolling 
    sessionStorage.setItem("bottomMessage",0);

    setConversation();
    

}  


function initMessages() { 
    // This is the function the browser first runs when it's loaded.
    getMessages();
    //setConversation();
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
    getMessages();
    //setConversation();
    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}



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

            getMessages();
     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    

}

/* set currently clicked conversation id to session storage */

function selectConversation(id,username,userPic){

    console.log(id);
    var username = username;
    var id = id;
    var userPic = userPic;
    var recieverID = document.getElementById("recieverID");

    var conversationImage = document.getElementById("conversationImage");
    conversationImage.src = userPic;
    console.log(userPic);
    sessionStorage.setItem("selectedConversation",id);
    sessionStorage.setItem("selectedUserName",username);
    recieverID.value = id;

}