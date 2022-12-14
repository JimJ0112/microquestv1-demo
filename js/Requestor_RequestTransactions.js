//global variables



// for requests

function requestClickedItem(number,userID){

    var number = number;
    var userID = userID;
    sessionStorage.setItem('transactionsUserId',userID);


    var TransactionsNavItem1 = document.getElementById("TransactionsNavItem1");
    var TransactionsNavItem2 = document.getElementById("TransactionsNavItem2");
    var TransactionsNavItem3 = document.getElementById("TransactionsNavItem3");
    var TransactionsNavItem4 = document.getElementById("TransactionsNavItem4");
    var TransactionsNavItem5 = document.getElementById("TransactionsNavItem5");
    var TransactionsNavItem6 = document.getElementById("TransactionsNavItem6");
    var TransactionsNavItems = document.getElementsByClassName("TransactionsNavItems");

    TransactionsNavItem1.style = "background-Color:white; color:black; ";
    TransactionsNavItem2.style = "background-Color:white; color:black; ";
    TransactionsNavItem3.style = "background-Color:white; color:black; ";
    TransactionsNavItem4.style = "background-Color:white; color:black; ";
    TransactionsNavItem5.style = "background-Color:white; color:black; ";
    TransactionsNavItem6.style = "background-Color:white; color:black; ";

    TransactionsNavItems[number].style = "background-Color:orangered; color:white; ";
    if(number === 0){
        getRequestApplications(userID);
    }else if(number === 1){
        getAcceptedRequests(userID);
    }else if(number === 2){
        getDeliveredRequests(userID);
    }else if(number === 3){
        getPaidRequests(userID);
    }else if(number === 4){
        getFinishedRequests(userID);
    }else if(number === 5){
        getCancelledRequests(userID);
    }


}




/* --------------------------------------------------------------------------------------- */

function createRequestElements(number){

    var Body = document.getElementById("TransactionsContainerBody");
    var DataNumber = number;


    for(var i = 0;i<DataNumber;i++){

  


        div = document.createElement('div');
       
       
        
        // parent
        grid_header = document.createElement('div');

        //children
        transactionID = document.createElement('div');
        requestInfo = document.createElement('div');
        requestStatus = document.createElement('div');


        // parent
        item2 = document.createElement('div');

        //children
        responderImageDiv = document.createElement('div');
        responderNameDiv = document.createElement('div');
        responderEmailDiv = document.createElement('div');

        //parent
        item3 = document.createElement('div');
        //children
        Description = document.createElement('p');


        //parent
        item4 = document.createElement('div');

        //children
        Price = document.createElement('div');
        Contract = document.createElement('div');


        //parent
        grid_footer = document.createElement('div');

        //inner parent
        transactionDates = document.createElement('div');
        //children
        datePosted = document.createElement('p');
        dateAccomplished = document.createElement('p');

    

        //inner parent
        sendMessageDiv = document.createElement('div');

        //inner parent
        actionsDiv = document.createElement('div');



        // set attributes 

        div.setAttribute('class','transaction-item');
        grid_header.setAttribute('class','grid-header');
        transactionID.setAttribute('class','requestID');

        requestInfo.setAttribute('class','requestTitle');
        requestStatus.setAttribute('class','requestStatus');

        item2.setAttribute('class','item2');
        responderImageDiv.setAttribute('class','responderImageDiv');
        responderNameDiv.setAttribute('class','responderNameDiv');
        responderEmailDiv.setAttribute('class','responderEmailDiv');

        item3.setAttribute('class','item3');
        Description.setAttribute('class','Description');

        item4.setAttribute('class','item4');
        Price.setAttribute('class','servicePrice');
        Contract.setAttribute('class','serviceContract');
        
        grid_footer.setAttribute('class','grid-footer');
        transactionDates.setAttribute('class','transactionDates');
        datePosted.setAttribute('class','datePosted');
        dateAccomplished.setAttribute('class','dateAccomplished');
        sendMessageDiv.setAttribute('class','sendMessageDiv');
        actionsDiv.setAttribute('class','actionsDiv');


 
        // append

        // parent
        grid_header.appendChild(transactionID);
        grid_header.appendChild(requestInfo);
        grid_header.appendChild(requestStatus);



        // parent
  
        item2.appendChild(responderImageDiv);
        item2.appendChild(responderNameDiv);
        item2.appendChild(responderEmailDiv);


        //parent
        item3.appendChild(Description);
 


        //parent
        item4.appendChild(Price);
        item4.appendChild(Contract);




        //inner parent
        transactionDates.appendChild(datePosted);
        transactionDates.appendChild(dateAccomplished);
        

        //parent
        grid_footer.appendChild(transactionDates);
        grid_footer.appendChild(sendMessageDiv);
        grid_footer.appendChild(actionsDiv);

        
 
        div.appendChild(grid_header);
        div.appendChild(item2);
        div.appendChild(item3);
        div.appendChild(item4);
        div.appendChild(grid_footer);
       

        
        Body.appendChild(div);
       
    

    }


}






/*Set Data */

function SetRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;

    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');


    for(var i = 0;i<number;i++){



        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }

        //controlsTd[i].innerText = dataArray[i]['dueDate'];
        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";
 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);


    }

}







/*------------------------------------------------------------------------------------------------ */


// get pending request applications

function getRequestApplications(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 
                var number = dataArray.length;
                createRequestElements(number);
                SetAppliedRequestsData(dataArray);

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };
    xmlhttp.open("POST", "Backend/Get_myTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function 


// get on going jobs

function  getAcceptedRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray); 
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";

                

            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

                var number = dataArray.length;
                createRequestElements(number);
                SetAcceptedRequestsData(dataArray);

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_acceptedTransactions.php", true); 
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function

// get Finished Jobs

function  getDeliveredRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

                var number = dataArray.length;
                createRequestElements(number);
                SetDeliveredRequestsData(dataArray);

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };

    xmlhttp.open("POST", "Backend/Get_deliveredTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function

//get paid jobs

function getPaidRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

                var number = dataArray.length;
                //createRequestElements(number);
                createRequestElements(number);
                SetPaidRequestsData(dataArray)

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_paidTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function

// get Finished Jobs

function getFinishedRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

                var number = dataArray.length;
                //createRequestElements(number);
                createRequestElements(number);
                SetFinishedRequestsData(dataArray);

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_completedTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function

// get cancelled jobs


function getCancelledRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            document.getElementById('TransactionsContainerBody').innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
                div.innerHTML = "<center>  <p> No Transactions  </p> </center>";

            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

                var number = dataArray.length;
                createRequestElements(number);
                SetRequestsData(dataArray);
            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_cancelledTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function


/* Set data for requests  */

function SetAppliedRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');



    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }


        var button = document.createElement('button');
        button.setAttribute('class','Button ');
        button.innerText = "Accept";
        button.setAttribute('onclick',"acceptRequestApplication(" +dataArray[i]['transactionID'] + ",'accepted')" );

        actionsDiv[i].appendChild(button);

        

        var button1 = document.createElement('button');
        button1.setAttribute('class','Button red');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        actionsDiv[i].appendChild(button1);

        


    }

}



function SetFinishedRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');



    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }


        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "View Payment File";
        button.setAttribute('onclick',"showPhoto('" +dataArray[i]['paymentFile'] + "')");
        actionsDiv[i].appendChild(button);

        
        requestStatus[i].style.color = "blue";

        generateFeedbackButton(dataArray[i]['transactionID'],i,dataArray[i]['responderID'],dataArray[i]['requestID']);

        

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";
 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}




function SetAcceptedRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;




    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');




    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }

        


        

    
    
        var button1 = document.createElement('button');
        button1.setAttribute('class','Button red');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        actionsDiv[i].appendChild(button1);


        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";

        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


function SetDeliveredRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;


    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');





    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }

        
        requestStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "Save Payment";

 
        button.setAttribute("onclick","setPaymentForm(" +dataArray[i]['transactionID'] + ")" );
        actionsDiv[i].appendChild(button);
        

    

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";

 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}







function SetPaidRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    Description= document.getElementsByClassName('Description');

    Price= document.getElementsByClassName('servicePrice');
    Contract= document.getElementsByClassName('serviceContract');
  
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');

    for(var i = 0;i<number;i++){
        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'];
        requestStatus[i].innerText = dataArray[i]['transactionStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['ResponderName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['ResponderUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['responderID'] + "&userType=Responder')");
       
        // set data
        Description[i].innerText = dataArray[i]['requestDescription'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");


        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Posted: " + dataArray[i]['transactionStartDate'];
        dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          requestTitle[i].className += " header-item";
          requestStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          requestTitle[i].setAttribute("id","requestTitle");
          requestStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            requestStatus[i].style.color = "red";

        }else if(dataArray[i]['transactionStatus'] === "completed"){
            requestStatus[i].style.color = "green";

        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            requestStatus[i].style.color = "blue";
            
        }

        
        requestStatus[i].style.color = "blue";

        /*
        var button1 = document.createElement('button');
        button1.setAttribute('class','Button');
        button1.innerText = "Give a Feedback";
        button1.setAttribute('onclick',"setFeedbackForm(" + dataArray[i]['transactionID'] + ")");
        actionsDiv[i].appendChild(button1);
        */
        generateFeedbackButton(dataArray[i]['transactionID'],i,dataArray[i]['responderID'],dataArray[i]['requestID']);




        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "View Payment File";
        button.setAttribute('onclick',"showPhoto('" +dataArray[i]['paymentFile'] + "')");
        actionsDiv[i].appendChild(button);

       
        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";

 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);



    }

}



/* update Requests  */
/*
function confirmPaymentRequest(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Payment Confirmed");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getPaidRequests(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function
*/


function setPaymentForm(transactionID){
    transactionID = transactionID;
    document.getElementById("TransactionIDInput").value = transactionID;
    document.getElementById("paymentPopUpBack").style.display = "grid";

}


function closePaymentForm(){

    document.getElementById("paymentPopUpBack").style.display = "none";

}


/*
function setFeedbackForm(transactionID){
    transactionID = transactionID;
    document.getElementById("giveFeedBackPopUpBack").style.display = "grid";
    document.getElementById("giveFeedBackPopUp").style.display = "grid";

}


function closeFeedbackForm(){

    document.getElementById("giveFeedBackPopUpBack").style.display = "none";
    document.getElementById("giveFeedBackPopUp").style.display = "none";


}
*/




/*
function cancelRequestApplication(transactionID,update){
    if (confirm("Cancel?")) {
        var transactionID = transactionID;
        var update = update;
        var query = "transactionID=" + transactionID+"&update="+update;
        console.log(query);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
           
                var dataArray = this.response;
                console.log(dataArray);

                transactionsUserId = sessionStorage.getItem("transactionsUserId");
                alert("Request Application Cancelled");
                getCancelledRequests(transactionsUserId);
 
            

            }else{
                console.log(err);
            }      
        };
    
        xmlhttp.send(query);
    }else{

    }
 
    
}// end of function
*/

/*
function deliverRequestApplication(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Request Delivered");

            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getDeliveredRequests(transactionsUserId);

 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function

*/

// show payment proof output file

function showPaymentProofFile(event){
    var imageContainer = document.getElementById("paymentFileOutput");
    imageContainer.src =  URL.createObjectURL(event.target.files[0]);

}




function checkRequestReports(myID,reportedID,serviceID,requestID,transactionType,rowNum,dataArray){
    var myID = myID;
    var reportedID =reportedID;
    var serviceID =serviceID;
    var requestID =requestID;
    var transactionType =transactionType;
    var dataArray = dataArray;

    var controlsTd= document.getElementsByClassName('actionsDiv');


    

        var query = "reporterID="+myID+"&reportedID="+reportedID+"&serviceID="+serviceID+"&requestID="+requestID+"&transactionType="+transactionType;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "Backend/CheckReport.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded",true);

        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
           
                var result= this.response;

                console.log(result);

                 if(result  === "true"){

                    var button1 = document.createElement('button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Reported";
                    button1.disabled = true;
                    button1.style.backgroundColor = "gray";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["requestID"]+",'request','responder')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Report";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["requestID"]+",'request','responder')");
                    controlsTd[rowNum].appendChild(button1);
                   
                }

                    

            
            }else{
                console.log(err);
            
            }      
        
       
        };
     
    

        xmlhttp.send(query);
    
  

}






/* update Requests  */

/*
function confirmPaymentRequest(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Payment Confirmed");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getPaidRequests(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    
}// end of function
*/



function setPaymentForm(transactionID){
    transactionID = transactionID;
    document.getElementById("TransactionIDInput").value = transactionID;
    document.getElementById("paymentPopUpBack").style.display = "grid";

}


function closePaymentForm(){

    document.getElementById("paymentPopUpBack").style.display = "none";

}



function setFeedbackForm(transactionID,responderID,serviceID){
   var transactionID1 = transactionID;
   var serviceRevieweeID1 = responderID;
   var serviceID1 = serviceID;


   var transactionIDInput = document.getElementById("TransactionFeedbackID");
   var serviceRevieweeIDInput= document.getElementById("serviceRevieweeFeedbackID");
   var serviceIDInput= document.getElementById("serviceFeedbackID");


   document.getElementById("giveFeedBackPopUpBack").style.display = "grid";
   document.getElementById("giveFeedBackPopUp").style.display = "grid";

    
   document.getElementById("TransactionFeedbackID").value = transactionID1 
   document.getElementById("serviceRevieweeFeedbackID").value = serviceRevieweeID1
   document.getElementById("serviceFeedbackID").value = serviceID1




}


function closeFeedbackForm(){

    document.getElementById("giveFeedBackPopUpBack").style.display = "none";
    document.getElementById("giveFeedBackPopUp").style.display = "none";


}





function cancelRequestApplication(transactionID,update){

    if (confirm("Cancel? ")) {
            var transactionID = transactionID;
            var update = update;
            var query = "transactionID=" + transactionID+"&update="+update;
            console.log(query);

            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.onload = function() {
                if (this.readyState === 4 || this.status === 200){ 
                
                    var dataArray = this.response;
                    console.log(dataArray);
                    
                
                
                    transactionsUserId = sessionStorage.getItem("transactionsUserId");
                    getCancelledRequests(transactionsUserId);
                

                
                }else{
                    console.log(err);
                }      
            };
    
            xmlhttp.send(query);
            alert("Request Application Canceled");
    } else{

    }

    
}// end of function

/*
function deliverRequestApplication(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Request Application Delivered");

            

            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getDeliveredRequests(transactionsUserId);

 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function
*/


// show payment proof output file

function showPaymentProofFile(event){
    var imageContainer = document.getElementById("paymentFileOutput");
    imageContainer.src =  URL.createObjectURL(event.target.files[0]);

}




// check if report already exists 


 function checkReports(myID,reportedID,serviceID,requestID,transactionType,rowNum,dataArray){
    var myID = myID;
    var reportedID =reportedID;
    var serviceID =serviceID;
    var requestID =requestID;
    var transactionType =transactionType;
    var dataArray = dataArray;

  
    var controlsTd= document.getElementsByClassName('actionsDiv');
    


    

        var query = "reporterID="+myID+"&reportedID="+reportedID+"&serviceID="+serviceID+"&requestID="+requestID+"&transactionType="+transactionType;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "Backend/CheckReport.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded",true);

        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
           
                
                var result= this.response;

                console.log(result);

                 if(result  === "true"){

                    
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Reported";
                    button1.disabled = true;
                    button1.style.backgroundColor = "gray";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('Button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Report";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder')");
                    controlsTd[rowNum].appendChild(button1);
                   
                }

                    

            
            }else{
                console.log(err);
            
            }      
        
       
        };
     
    

        xmlhttp.send(query);
    
  

}



function generateFeedbackButton(transactionID,number,responderID,serviceID){
    var transactionID = transactionID;
    var number = number;
    var query = "transactionID=" + transactionID;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/CheckFeedBackExists.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;
            console.log(dataArray);
            console.log(query);

            controlsTd= document.getElementsByClassName('actionsDiv');

            if(dataArray === "true"){

                var button1 = document.createElement('button');
                button1.setAttribute('class','Button');
                button1.innerText = "Feedback Given";
                button1.disabled = true;
                button1.style.backgroundColor = "gray";
                button1.setAttribute('onclick',"setFeedbackForm(" + transactionID +","+responderID+","+serviceID+")" );
                controlsTd[number].appendChild(button1);
 
            }else{

                var button1 = document.createElement('button');
                button1.setAttribute('class','Button');
                button1.innerText = "Give Feedback";
                button1.setAttribute('onclick',"setFeedbackForm(" + transactionID +","+responderID+","+serviceID+")" );
                controlsTd[number].appendChild(button1);

            }
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    
}// end of function



function closePhotoViewer(){
    var PhotoViewerBackground = document.getElementById('PhotoViewerBackground');
    PhotoViewerBackground.style.display = "none";

}

function showPhoto(dataurl){
    var dataurl = dataurl;
    var photoViewerImage = document.getElementById("photoViewerImage");
    var PhotoViewerBackground = document.getElementById('PhotoViewerBackground');

    photoViewerImage.src = dataurl;
    PhotoViewerBackground.style.display = "grid";
}


function closeTextViewer(){
    var TextViewerBackground = document.getElementById('TextViewerBackground');
    TextViewerBackground.style.display = "none";

}

function setTextViewer(text){
    /*
    var text = text;
    var textContainer = document.getElementById("textContainer");
    var TextViewerBackground = document.getElementById('TextViewerBackground');

    textContainer.innerText= text;
    TextViewerBackground.style.display = "grid";
    */
}

function redirect(url){
    var url = url;
    window.location.replace(url);
}



/* Update Services Status  */

function acceptRequestApplication(transactionID,update){


    if (confirm("Accept Responder?")) {
        var transactionID = transactionID;
        var update = update;
        var query = "transactionID=" + transactionID+"&update="+update;
        console.log(query);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
            
                var dataArray = this.response;
                console.log(dataArray);
           


                transactionsUserId = sessionStorage.getItem("transactionsUserId");
                requestClickedItem(0,transactionsUserId);
            


            }else{
                console.log(err);
             }      
        };


        xmlhttp.send(query);
        alert("Accepted");
    }else{

    }
    
    
}// end of function