function setTransactionType(){
    TransactionTypeDropDown = document.getElementById('TransactionTypeDropDown');

    var userID = sessionStorage.getItem("userID");

    var TransactionsNavItem1 = document.getElementById("TransactionsNavItem1");
    var TransactionsNavItem2 = document.getElementById("TransactionsNavItem2");
    var TransactionsNavItem3 = document.getElementById("TransactionsNavItem3");
    var TransactionsNavItem4 = document.getElementById("TransactionsNavItem4");
    var TransactionsNavItem5 = document.getElementById("TransactionsNavItem5");
    var TransactionsNavItem6 = document.getElementById("TransactionsNavItem6");

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
    }
}



// for services

function clickedNavItem (number,userID){
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
        getOrders(userID);
    }else if(number === 1){
        getAcceptedOrders(userID);
    }else if(number === 2){
        getDeliveredService(userID);
    }else if(number === 3){
        getPaidOrders(userID);
    }else if(number === 4){
        getFinishedService(userID);
    }else if(number === 5){
        getCancelledOrders(userID);
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

// get pending orders 

function getOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
                createElements(number);
                SetOrdersData(dataArray);

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

function  getAcceptedOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){


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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);

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
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
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

        var button1 = document.createElement('button');
        button1.setAttribute('class','AcceptButton');
        button1.innerText = "Give Feedback";
       // button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );
        controlsTd[i].appendChild(button1);



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
        button.innerText = "Pay";
        //confirmPaymentServiceOrder
        button.setAttribute('onclick',"confirmPaymentServiceOrder(" +dataArray[i]['transactionID'] + ",'paid')" );

        controlsTd[i].appendChild(button);

        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Report";
        controlsTd[i].appendChild(button1);



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
                createElements(number);
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
                createElements(number);
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
                createElements(number);
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
                createElements(number);
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
                createElements(number);
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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];


        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Give a Feedback";

       // button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
        controlsTd[i].appendChild(button);
        

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Report";
       // button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);



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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];


        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','DeliverButton');
        button.innerText = "Deliver";

        button.setAttribute('onclick',"deliverRequestApplication(" +dataArray[i]['transactionID'] + ",'delivered')" );
        controlsTd[i].appendChild(button);
        

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);



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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','AcceptButton');
        button.innerText = "Pay";

        button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'paid')" );
        controlsTd[i].appendChild(button);
        

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Report";
        button1.setAttribute('onclick',"cancelRequestApplication(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        controlsTd[i].appendChild(button1);



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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
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
        
        /*
        transactionStatus[i].style.color = "blue";
        var button = document.createElement('button');
        button.setAttribute('class','DeliverButton');
        button.innerText = "Deliver";

        button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
        controlsTd[i].appendChild(button);
        

    
        var button1 = document.createElement('button');
        button1.setAttribute('class','CancelButton');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );
        
        controlsTd[i].appendChild(button1);
        */



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
        serviceID[i].innerText = dataArray[i]['requestID'];
        servicePosition[i].innerText = dataArray[i]['servicePosition'];
        timeSlot[i].innerText = dataArray[i]['timeSlot'];
        transactionID[i].innerText = dataArray[i]['transactionID'];
        transactionStartDate[i].innerText = dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerText = dataArray[i]['transactionStatus'];
        //controlsTd[i].innerText = dataArray[i]['dueDate'];



        /*
        if(dataArray[i]['transactionStatus'] === "paid"){
            transactionStatus[i].style.color = "blue";
            var button = document.createElement('button');
            button.setAttribute('class','ConfirmPaymentButton');
            button.innerText = "Confirm Payment";
    
            button.setAttribute('onclick',"confirmPaymentRequest(" +dataArray[i]['transactionID'] + ",'completed')" );
            controlsTd[i].appendChild(button);

        } else {

        }
        
        */
        

    

        //controlsTd[i].appendChild(button1);



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