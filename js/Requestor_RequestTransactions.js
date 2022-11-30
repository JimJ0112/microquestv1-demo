//global variables




function setTransactionType(){
    TransactionTypeDropDown = document.getElementById('TransactionTypeDropDown');
    var userID = sessionStorage.getItem("userID");

    

    var TransactionsNavItem1 = document.getElementById("TransactionsNavItem1");
    var TransactionsNavItem2 = document.getElementById("TransactionsNavItem2");
    var TransactionsNavItem3 = document.getElementById("TransactionsNavItem3");
    var TransactionsNavItem4 = document.getElementById("TransactionsNavItem4");
    var TransactionsNavItem5 = document.getElementById("TransactionsNavItem5");
    var TransactionsNavItem6 = document.getElementById("TransactionsNavItem6");
    var ServiceIDHeader = document.getElementById("ServiceIDHeader");
    var ServicePositionHeader = document.getElementById("ServicePositionHeader");
    var ServiceTimeSlotHeader = document.getElementById("ServiceTimeSlotHeader");

    var TransactionsContainerBody = document.getElementById("TransactionsContainerBody");
    


    // set the container
    TransactionsContainerBody.innerHTML = "";
    TransactionsNavItem1.style.border = "none";
    TransactionsNavItem2.style.border = "none";
    TransactionsNavItem3.style.border = "none";
    TransactionsNavItem4.style.border = "none";
    TransactionsNavItem5.style.border = "none";
    TransactionsNavItem6.style.border = "none";

    if(TransactionTypeDropDown.value === "Requests"){

        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";

        requestClickedItem(1,userID);

         TransactionsNavItem1.setAttribute("onclick","requestClickedItem(0," +userID +")" );
         TransactionsNavItem2.setAttribute("onclick","requestClickedItem(1," +userID +")" );
         TransactionsNavItem3.setAttribute("onclick","requestClickedItem(2," +userID +")" );
         TransactionsNavItem4.setAttribute("onclick","requestClickedItem(3," +userID +")" );
         TransactionsNavItem5.setAttribute("onclick","requestClickedItem(4," +userID +")" );
         TransactionsNavItem6.setAttribute("onclick","requestClickedItem(5," +userID +")" );


         TransactionsNavItem1.innerText = "Request Applications";
         TransactionsNavItem2.innerText = "Accepted Requests Applications";
         TransactionsNavItem3.innerText = " Delivered ";
         TransactionsNavItem4.innerText = " Paid";
         TransactionsNavItem5.innerText = " Finished";
         TransactionsNavItem6.innerText = " Cancelled";
         ServiceIDHeader.innerText = "Request ID";
         ServicePositionHeader.innerText = "Request Title";
         ServiceTimeSlotHeader.style.display = "none";

         requestClickedItem(1,userID);
        


    } else if(TransactionTypeDropDown.value === "Services"){
        TransactionsNavItem1.setAttribute("onclick","clickedNavItem(0," +userID +")" );
        TransactionsNavItem2.setAttribute("onclick","clickedNavItem(1," +userID +")" );
        TransactionsNavItem3.setAttribute("onclick","clickedNavItem(2," +userID +")" );
        TransactionsNavItem4.setAttribute("onclick","clickedNavItem(3," +userID +")" );
        TransactionsNavItem5.setAttribute("onclick","clickedNavItem(4," +userID +")" );
        TransactionsNavItem6.setAttribute("onclick","clickedNavItem(5," +userID +")" );

        
        TransactionsNavItem1.innerText = "Orders";
        TransactionsNavItem2.innerText = "On Going Orders";
        TransactionsNavItem3.innerText = " Delivered ";
        TransactionsNavItem4.innerText = " Paid";
        TransactionsNavItem5.innerText = " Finished";
        TransactionsNavItem6.innerText = " Cancelled";
        ServiceIDHeader.innerText = "Service ID";
        ServicePositionHeader.innerText = "Service";
        ServiceTimeSlotHeader.style.display = "block";


        getOrders(userID);
        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";
        
        

    }else if(TransactionTypeDropDown.value === "Pasabuy"){
        TransactionsNavItem1.setAttribute("onclick","pasabuyNavItem(0," +userID +")" );
        TransactionsNavItem2.setAttribute("onclick","pasabuyNavItem(1," +userID +")" );
        TransactionsNavItem3.setAttribute("onclick","pasabuyNavItem(2," +userID +")" );
        TransactionsNavItem4.setAttribute("onclick","pasabuyNavItem(3," +userID +")" );
        TransactionsNavItem5.setAttribute("onclick","pasabuyNavItem(4," +userID +")" );
        TransactionsNavItem6.setAttribute("onclick","pasabuyNavItem(5," +userID +")" );

        
        TransactionsNavItem1.innerText = "Orders";
        TransactionsNavItem2.innerText = "On Going Orders";
        TransactionsNavItem3.innerText = " Delivered ";
        TransactionsNavItem4.innerText = " Paid";
        TransactionsNavItem5.innerText = " Finished";
        TransactionsNavItem6.innerText = " Cancelled";
        ServiceIDHeader.innerText = "Service ID";
        ServicePositionHeader.innerText = "Service";
        ServiceTimeSlotHeader.style.display = "block";

        getPasabuyOrders(userID);
        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";

    }
}



// for pasabuy

function pasabuyNavItem (number,userID){
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

    TransactionsNavItem1.style.border = "none";
    TransactionsNavItem2.style.border = "none";
    TransactionsNavItem3.style.border = "none";
    TransactionsNavItem4.style.border = "none";
    TransactionsNavItem5.style.border = "none";
    TransactionsNavItem6.style.border = "none";

    TransactionsNavItems[number].style.borderBottom = "4px solid rgb(48, 30, 8)";
    if(number === 0){
        //getOrders(userID);
        getPasabuyOrders(userID)
    }else if(number === 1){
        //getAcceptedOrders(userID);
    }else if(number === 2){
       // getDeliveredService(userID);
    }else if(number === 3){
       // getPaidOrders(userID);
    }else if(number === 4){
       // getFinishedService(userID);
    }else if(number === 5){
       // getCancelledOrders(userID);
    }


}

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

    TransactionsNavItem1.style.border = "none";
    TransactionsNavItem2.style.border = "none";
    TransactionsNavItem3.style.border = "none";
    TransactionsNavItem4.style.border = "none";
    TransactionsNavItem5.style.border = "none";
    TransactionsNavItem6.style.border = "none";

    TransactionsNavItems[number].style.borderBottom = "4px solid rgb(48, 30, 8)";
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

    var table = document.getElementById("TransactionsContainerBody");
    var DataNumber = number;

    var TransactionsContainerThead = document.getElementById('TransactionsContainerThead');
    TransactionsContainerThead.innerHTML = "";

    var thead = document.createElement('tr');
    var TransactionID  = document.createElement('td')
   
    var ServiceInfo  = document.createElement('td')
    var AdditionalNotesInfo  = document.createElement('td')

    var Contract  = document.createElement('td')
    var Responder = document.createElement('td')
    var TotalPrice = document.createElement('td')
    var Status = document.createElement('td')
    var Action = document.createElement('td')



     TransactionID.innerText = "Transaction ID ";

     ServiceInfo.innerText = "Request";
     AdditionalNotesInfo.innerText = "Description";
     Contract.innerText = "Contract";
     Responder.innerText = "Responder";
     TotalPrice.innerText = "Total Price";
     Status.innerText = "Status";
     Action.innerText = "Actions";

    thead.appendChild(TransactionID)

    thead.appendChild(ServiceInfo)
    thead.appendChild(AdditionalNotesInfo);

    thead.appendChild(Contract);

    thead.appendChild(Responder)

    thead.appendChild(TotalPrice)

    thead.appendChild(Status)
    thead.appendChild(Action);

    TransactionsContainerThead.appendChild(thead);







    for(var i = 0;i<DataNumber;i++){

  


        tr = document.createElement('tr');
        
       
        transactionID = document.createElement('td');
        requestInfo = document.createElement('td');
        contractAgreement = document.createElement('td');
        additionalNotes = document.createElement('td');
        requestorInfo = document.createElement('td');
        transactionInfo = document.createElement('td');
        transactionStatus = document.createElement('td');
        controlsTd = document.createElement('td');
      
   
        transactionID.setAttribute('class','transactionID');
        requestInfo.setAttribute('class','requestInfo');
        contractAgreement.setAttribute('class','contractAgreement');
        additionalNotes.setAttribute('class','additionalNotes');
        requestorInfo.setAttribute('class','requestorInfo');
        transactionInfo.setAttribute('class','transactionInfo');
        transactionStatus.setAttribute('class','transactionStatus');
        controlsTd.setAttribute('class','controlsTd');
        

        tr.appendChild(transactionID);
        tr.appendChild(requestInfo);
        tr.appendChild(additionalNotes);
        tr.appendChild(contractAgreement);
        tr.appendChild(requestorInfo);
        tr.appendChild(transactionInfo);
        tr.appendChild(transactionStatus);
        tr.appendChild(controlsTd);

       
        table.appendChild(tr);
    
    

    }


}



/*Set Data */

function SetRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');

    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];
        

        if(dataArray[i]['transactionStatus'] === "cancelled"){
            transactionStatus[i].style.color = "red";
        }else if(dataArray[i]['transactionStatus'] === "completed"){
            transactionStatus[i].style.color = "green";
        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            transactionStatus[i].style.color = "blue";
        }
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

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
                createRequestElements(number);
                SetPaidRequestsData(dataArray)

            }

        }else{
            //console.log(err);
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
                createRequestElements(number);
                SetFinishedRequestsData(dataArray);

            }

        }else{
            //console.log(err);
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
    
    xmlhttp.open("POST", "Backend/Get_cancelledTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function


/* Set data for requests  */

function SetAppliedRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');

    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];

        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Accept";

        button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
        controlsTd[i].appendChild(button);
        

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);


    }

}



function SetFinishedRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');

    for(var i = 0;i<number;i++){

       var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];


        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Give a Feedback";

       // button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
       button.setAttribute('onclick',"setFeedbackForm(" + dataArray[i]['transactionID'] + ")");
       controlsTd[i].appendChild(button);
        

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




    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');


    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];


        

    
    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);


        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";

 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


function SetDeliveredRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');


    for(var i = 0;i<number;i++){

       var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];
        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Save Payment";

        //button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'paid')" );
        button.setAttribute("onclick","setPaymentForm(" +dataArray[i]['transactionID'] + ")" );
        controlsTd[i].appendChild(button);
        

    

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = null;
        requestID = dataArray[i]['requestID'];
        transactionType = "request";

 
        // check if report to the service exists and generate button for reporting
        checkRequestReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}



function SetRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



 
    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');


    for(var i = 0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];


        if(dataArray[i]['transactionStatus'] === "cancelled"){
            transactionStatus[i].style.color = "red";
        }else if(dataArray[i]['transactionStatus'] === "completed"){
            transactionStatus[i].style.color = "green";
        }else if(dataArray[i]['transactionStatus'] === "delivered"){
            transactionStatus[i].style.color = "blue";
        }
        
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



 
    transactionID=document.getElementsByClassName('transactionID');
    requestInfo=document.getElementsByClassName('requestInfo');
    contractAgreement=document.getElementsByClassName('contractAgreement');
    additionalNotes=document.getElementsByClassName('additionalNotes');
    requestorInfo=document.getElementsByClassName('requestorInfo');
    transactionInfo=document.getElementsByClassName('transactionInfo');
    transactionStatus=document.getElementsByClassName('transactionStatus');
    controlsTd=document.getElementsByClassName('controlsTd');

    for(var i = 0;i<number;i++){

      var image = new Image();
        image.src = dataArray[i]['ResponderPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        transactionID[i].innerHTML = dataArray[i]['transactionID'];
        requestInfo[i].innerHTML = "<b>" + dataArray[i]['requestCategory'] + "</b> :" + dataArray[i]['requestTitle'] +"<br/> Price: Php "+ dataArray[i]['price'] +"<br/>" + dataArray[i]['isNegotiable'];
        contractAgreement[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
        additionalNotes[i].innerHTML = dataArray[i]['requestDescription'];
        
        requestorInfo[i].appendChild(image);
      
        requestorInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>" +requestorInfo[i].innerHTML + "<br/><br/> " + dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderUserEmail'] +"</a>";
        
        transactionInfo[i].innerHTML = "Price: Php "+ dataArray[i]['price'] + "<br/> Date Availed: " + dataArray[i]['transactionStartDate'] + "<br/> Due Date: " + dataArray[i]['dueDate'] + "<br/> Time Slot: " + dataArray[i]['timeSlot'];
        transactionStatus[i].innerHTML = dataArray[i]['transactionStatus'];
       
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





function cancelRequestApplication(transactionID,update){
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
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


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

    var controlsTd= document.getElementsByClassName('controlsTd');


    

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
                    button1.setAttribute('class','CancelButton');
                    button1.innerText = "Reported";
                    button1.disabled = true;
                    button1.style.backgroundColor = "gray";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["requestID"]+",'request','responder')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','CancelButton');
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




