//global variables
var checkReportResult;


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



// for services

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





// get pending orders 

function getPasabuyOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=pending&column=requestorID";
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
               // var number = dataArray.length;
               // createElements(number);
               //SetOrdersData(dataArray);

            }

        }else{
            //console.log(err);
           document.getElementById('TransactionsContainerBody').innerText = "Loading...";

        }      
    };
    
    xmlhttp.open("POST", "Backend/Get_myPasabuyTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function 


// get on going jobs

function  getAcceptedOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetAcceptedData(dataArray);

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

function  getDeliveredService(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetDeliveredData(dataArray);

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

function getPaidOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetPaidData(dataArray)

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

function getFinishedService(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetFinishedData(dataArray);

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


function getCancelledOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetData(dataArray);
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



/* --------------------------------------------------------------------------------------- */

function createElements(number){

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
        timeSlot = document.createElement('td');
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
        timeSlot.setAttribute('class','timeSlot');
        transactionID.setAttribute('class','transactionID');
        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');
        //userID.setAttribute('class','userID');
        controlsTd.setAttribute('class','controlsTd');
        isReported.setAttribute('type','hidden');
        isReported.setAttribute('class','isReported');
        additionalNotes.width = "200";

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
        tr.appendChild(timeSlot)
        tr.appendChild(dueDate)
        tr.appendChild(additionalNotes)
        tr.appendChild(contractAgreement)
        tr.appendChild(transactionStatus)
       

        table.appendChild(tr);
        table.appendChild(isReported);



    }


}


/*Set Data */

function SetData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
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

               
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["responderID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);
    }

}


function SetOrdersData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        /*
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Accept";

        button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
        controlsTd[i].appendChild(button);
        */

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);



    }

}


function SetAcceptedData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        transactionStatus[i].style.color = "green";


        //deliverServiceOrder

        /*
        var button = document.createElement('button');
        button.setAttribute('class','DeliverButton');
        button.innerText = "Deliver";

        button.setAttribute('onclick',"deliverServiceOrder(" +dataArray[i]['transactionID'] + ",'delivered')" );
        controlsTd[i].appendChild(button);
        */

        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );
        controlsTd[i].appendChild(button1);



    }

}



function SetFinishedData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        transactionStatus[i].style.color = "green";


        //deliverServiceOrder

        /*
        var button = document.createElement('button');
        button.setAttribute('class','DeliverButton');
        button.innerText = "Deliver";

        button.setAttribute('onclick',"deliverServiceOrder(" +dataArray[i]['transactionID'] + ",'delivered')" );
        controlsTd[i].appendChild(button);
        */

        generateFeedbackButton(dataArray[i]['transactionID'],i,dataArray[i]['responderID'],dataArray[i]['serviceID']);

        /*
        var button1 = document.createElement('button');
        button1.setAttribute('class','AcceptButton');
        button1.innerText = "Give Feedback";
       // button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );
        button1.setAttribute('onclick',"setFeedbackForm(" + dataArray[i]['transactionID'] +","+dataArray[i]['responderID']+","+dataArray[i]['serviceID']+")" );
        controlsTd[i].appendChild(button1);
        */
               
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["responderID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);


    }

}

function SetPaidData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    for(var i = 0;i<number;i++){

        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];
        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];
        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        transactionStatus[i].style.color = "green";

        /*
        var button = document.createElement('button');
        button.setAttribute('class','ConfirmPaymentButton');
        button.innerText = "Confirm Payment";
        //confirmPaymentServiceOrder
        button.setAttribute('onclick',"confirmPaymentServiceOrder(" +dataArray[i]['transactionID'] + ",'completed')" );

        controlsTd[i].appendChild(button);

        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Report";
        controlsTd[i].appendChild(button1);
        */

               
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["responderID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);


    }

}


function SetDeliveredData(dataArray){
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
    timeSlot= document.getElementsByClassName('timeSlot');
    transactionID= document.getElementsByClassName('transactionID');
    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    controlsTd= document.getElementsByClassName('controlsTd');
    isReported = document.getElementsByClassName('isReported');

    for(var i = 0;i<number;i++){


        
        RequestorName[i].innerText = dataArray[i]['ResponderName'];
        additionalNotes[i].innerText = dataArray[i]['additionalNotes'];
        //contractAgreement[i].innerText = dataArray[i]['contractAgreement'];

        contractAgreement[i].innerText = "See more..";
        dueDate[i].innerText = dataArray[i]['dueDate'];
        price[i].innerText = dataArray[i]['price'];
       // rate[i].innerText = dataArray[i][' rate'];

        requestorID[i].innerText = dataArray[i]['responderID'];
        serviceCategory[i].innerText = dataArray[i]['serviceCategory'];
        serviceID[i].innerText = dataArray[i]['serviceID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];
        


        transactionStatus[i].style.color = "green";

        var button = document.createElement('button');
        button.setAttribute('class','ConfirmPaymentButton');
        button.innerText = "Save Payment";
        //confirmPaymentServiceOrder
       // button.setAttribute('onclick',"confirmPaymentServiceOrder(" +dataArray[i]['transactionID'] + ",'paid')" );

       button.setAttribute("onclick","setPaymentForm(" +dataArray[i]['transactionID'] + ")" );

       controlsTd[i].appendChild(button);


       
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["responderID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}



/* Update Services Status  */

function acceptServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Order Accepted");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getOrders(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


function cancelServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Order Cancelled");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getCancelledOrders(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function



function deliverServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Order Delivered");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getAcceptedOrders(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


function confirmPaymentServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            alert("Payment Confirmed");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getPaidOrders(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


/*------------------------------------------------------------------------------------------------ */



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
            alert("Request Application Canceled");


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
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','CancelButton');
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

            controlsTd= document.getElementsByClassName('controlsTd');

            if(dataArray === "true"){

                var button1 = document.createElement('button');
                button1.setAttribute('class','AcceptButton');
                button1.innerText = "Feedback Given";
                button1.disabled = true;
                button1.style.backgroundColor = "gray";
                button1.setAttribute('onclick',"setFeedbackForm(" + transactionID +","+responderID+","+serviceID+")" );
                controlsTd[number].appendChild(button1);
 
            }else{

                var button1 = document.createElement('button');
                button1.setAttribute('class','AcceptButton');
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
