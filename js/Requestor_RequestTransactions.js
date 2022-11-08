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

        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";
        getRequestApplications(userID);


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

    for(var i = 0;i<DataNumber;i++){

        tr = document.createElement('tr');
        controlsTd = document.createElement('td');
        RequestorName = document.createElement('td');
        additionalNotes = document.createElement('td');
        contractAgreement = document.createElement('td');
        dueDate = document.createElement('td');
        price = document.createElement('td');
      //  rate = document.createElement('td');
        requestorID = document.createElement('td');
        serviceCategory = document.createElement('td');
        serviceID = document.createElement('td');
        servicePosition = document.createElement('td');
       
        transactionID = document.createElement('td');
        transactionStartDate = document.createElement('td');
        transactionStatus = document.createElement('td');
       // userID = document.createElement('td');
        //isReported = document.createElement('input');
        isReported = document.createElement('span');


        // set element attributes
        RequestorName.setAttribute('class','RequestorName');
        additionalNotes.setAttribute('class','additionalNotes');
        contractAgreement.setAttribute('class','contractAgreement');
        dueDate.setAttribute('class','dueDate');
        price.setAttribute('class','price');
       // rate.setAttribute('class','rate');
        requestorID.setAttribute('class','requestorID');
        serviceCategory.setAttribute('class','serviceCategory');
        serviceID.setAttribute('class','serviceID');
        servicePosition.setAttribute('class','servicePosition');
       
        transactionID.setAttribute('class','transactionID');
        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');
        //userID.setAttribute('class','userID');
        controlsTd.setAttribute('class','controlsTd');
        isReported.setAttribute('type','hidden');
        isReported.setAttribute('class','isReported');

        tr.appendChild(controlsTd)
        tr.appendChild(transactionID)
        tr.appendChild(transactionStartDate)
        tr.appendChild(requestorID)
        tr.appendChild(RequestorName)
        tr.appendChild(serviceID)
        tr.appendChild(serviceCategory)
        tr.appendChild(servicePosition)
        tr.appendChild(price)
       // tr.appendChild(rate)
    
        tr.appendChild(dueDate)
        tr.appendChild(additionalNotes)
        tr.appendChild(contractAgreement)
        tr.appendChild(transactionStatus)
       

        table.appendChild(tr);
        table.appendChild(isReported);



    }


}


/*Set Data */

function SetRequestsData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
   // rate= document.getElementsByClassName('rate');
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
    
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 


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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray); 

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){


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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
   
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        
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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
    
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];


        
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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
  
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];


        

    
    
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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
   
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];
        
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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
   
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];


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



    RequestorName= document.getElementsByClassName('RequestorName');
    additionalNotes= document.getElementsByClassName('additionalNotes');
    contractAgreement= document.getElementsByClassName('contractAgreement');
    dueDate= document.getElementsByClassName('dueDate');
    price= document.getElementsByClassName('price');
  
    requestorID= document.getElementsByClassName('requestorID');
    serviceCategory= document.getElementsByClassName('serviceCategory');
    serviceID= document.getElementsByClassName('serviceID');
    servicePosition= document.getElementsByClassName('servicePosition');
   
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['requestDescription'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['requestCategory'];
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['requestTitle'];
       
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
       
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



function setFeedbackForm(transactionID){
    transactionID = transactionID;
    document.getElementById("giveFeedBackPopUpBack").style.display = "grid";
    document.getElementById("giveFeedBackPopUp").style.display = "grid";

}


function closeFeedbackForm(){

    document.getElementById("giveFeedBackPopUpBack").style.display = "none";
    document.getElementById("giveFeedBackPopUp").style.display = "none";


}





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




