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
  //  var ServiceIDHeader = document.getElementById("ServiceIDHeader");
  //  var ServicePositionHeader = document.getElementById("ServicePositionHeader");
   // var ServiceTimeSlotHeader = document.getElementById("ServiceTimeSlotHeader");
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
        // ServiceIDHeader.innerText = "Request ID";
        // ServicePositionHeader.innerText = "Request Title";
        // ServiceTimeSlotHeader.style.display = "none";

        
        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";
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
      //  ServiceIDHeader.innerText = "Service ID";
       // ServicePositionHeader.innerText = "Service";
       // ServiceTimeSlotHeader.style.display = "block";

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

      //  ServiceIDHeader.innerText = "Service ID";
      //  ServicePositionHeader.innerText = "Service";
      //  ServiceTimeSlotHeader.style.display = "block";

        getPasabuyOrders(userID);
        TransactionsNavItem1.style.borderBottom = "4px solid rgb(48, 30, 8)";
        //var TransactionsContainerThead = document.getElementById('TransactionsContainerThead').innerHTML = "";
        //var TransactionsContainerTheadPasabuy = document.getElementById('TransactionsContainerTheadPasabuy').style.display = "inline";
        
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
        getPasabuyOrders(userID)
    }else if(number === 1){
        //getAcceptedOrders(userID);
        getPasabuyAcceptedOrders(userID)
    }else if(number === 2){
       // getDeliveredService(userID);
       getPasabuyDeliveredOrders(userID)
       
    }else if(number === 3){
       // getPaidOrders(userID);
       getPasabuyPaidOrders(userID)

    }else if(number === 4){
       // getFinishedService(userID);
       getPasabuyFinishedOrders(userID)

    }else if(number === 5){
       // getCancelledOrders(userID);
       getPasabuyCancelledOrders(userID)

    }


}


//------------------------------------------fetch data---------------------------------------------------------


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
                var number = dataArray.length;
               // createElements(number);
               //SetOrdersData(dataArray);

               createPasabuyTransactionElements(number);
               setPasabuyOrderItem(dataArray)

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



// get Accepted orders 

function getPasabuyAcceptedOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=Accepted&column=requestorID";
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
               createPasabuyTransactionElements(number);
               setPasabuyAcceptedItem(dataArray)

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

// get Accepted orders 

function getPasabuyDeliveredOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=Delivered&column=requestorID";
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
               createPasabuyTransactionElements(number);
               setPasabuyDeliveredItem(dataArray)

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


// get Accepted orders 

function getPasabuyPaidOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=Paid&column=requestorID";
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
               createPasabuyTransactionElements(number);
               setPasabuyPaidItem(dataArray)

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

// get Accepted orders 

function getPasabuyFinishedOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=Finished&column=requestorID";
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
               createPasabuyTransactionElements(number);
               setPasabuyFinishedItem(dataArray)

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

// get Accepted orders 

function getPasabuyCancelledOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=Cancelled&column=requestorID";
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
               createPasabuyTransactionElements(number);
               setPasabuyCancelledItem(dataArray)

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

//------------------------------------------ create elements ------------------------------------------

function createPasabuyTransactionElements(number){
    var number = number;
    var TransactionsContainerBody = document.getElementById('TransactionsContainerBody');
    var TransactionsContainerThead = document.getElementById('TransactionsContainerThead');


    TransactionsContainerThead.innerHTML = "";
    var thead = document.createElement('tr');
    var TransactionID  = document.createElement('td')
    var  Product = document.createElement('td')
    var td = document.createElement('td');
    var ServiceInfo  = document.createElement('td')
    var Responder = document.createElement('td')
    var TotalPrice = document.createElement('td')
    var Status = document.createElement('td')
    var Action = document.createElement('td')



     TransactionID.innerText = "Transaction ID ";
     Product.innerText= "Product";
     td.innerText= "";
     ServiceInfo.innerText = "Service";
     Responder.innerText = "Responder";
     TotalPrice.innerText = "Total Price";
     Status.innerText = "Status";
     Action.innerText = "Actions";

    thead.appendChild(TransactionID)
    thead.appendChild(Product)

    thead.appendChild(td)

    thead.appendChild(ServiceInfo)

    thead.appendChild(Responder)

    thead.appendChild(TotalPrice)

    thead.appendChild(Status)
    thead.appendChild(Action);

    TransactionsContainerThead.appendChild(thead);

    for(var i = 0; i<number; i++){
    
        tr = document.createElement('tr');
        transactionID = document.createElement('td');
        productImageTD = document.createElement('td');
        productInfo = document.createElement('td');
        serviceInfo = document.createElement('td');
        responderImageTD = document.createElement('td');
        totalPrice = document.createElement('td');
        transactionStatus = document.createElement('td');

        ActionsTR = document.createElement('tr');
        ActionsTd = document.createElement('td');

      
        

        tr.setAttribute('class','pasabuyTransactionRow');
        transactionID.setAttribute('class','transactionID');
        productImageTD.setAttribute('class','productImageTD');
        productInfo.setAttribute('class','productInfo');
        serviceInfo.setAttribute('class','serviceInfo');
        responderImageTD.setAttribute('class','responderImageTD')
        totalPrice.setAttribute('class','totalPrice');
        transactionStatus.setAttribute('class','transactionStatus');

    
        ActionsTd.setAttribute('class','ActionsTd');


        tr.appendChild(transactionID);
        tr.appendChild(productImageTD);
        tr.appendChild(productInfo);
        tr.appendChild(serviceInfo);
        tr.appendChild(responderImageTD);
        tr.appendChild(totalPrice);
        tr.appendChild(transactionStatus);


        tr.appendChild(ActionsTd);
        //tr.appendChild(ActionsTd);



        TransactionsContainerBody.appendChild(tr);
        //TransactionsContainerBody.appendChild(ActionsTR)
 

    }






}


//--------------------------------------------------Set data-----------------------------------------

function setPasabuyOrderItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.setAttribute('onclick','cancelPasabuyTransaction(' + dataArray[i]['pasabuyTransactionID']+")")
        cancelButton.innerText = "Cancel";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""
        responderImageTD[i].appendChild(userImage);
      
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        ActionsTd[i].appendChild(cancelButton);

    }

}

function setPasabuyAcceptedItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.setAttribute('onclick','cancelPasabuyTransaction(' + dataArray[i]['pasabuyTransactionID']+")")
        cancelButton.innerText = "Cancel";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""

        responderImageTD[i].appendChild(userImage);
        //responderInfo[i].innerHTML = dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        //ActionsTd[i].appendChild(cancelButton);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkPasabuyReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);


    }

}

function setPasabuyDeliveredItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var SavePaymentButton = document.createElement('button');
        SavePaymentButton .setAttribute('class','SavePaymentButton');
        SavePaymentButton .setAttribute('onclick','setPasabuyPaymentForm(' + dataArray[i]['pasabuyTransactionID']+")")
        SavePaymentButton .innerText = "Save Payment";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""

        responderImageTD[i].appendChild(userImage);
        //responderInfo[i].innerHTML = dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        ActionsTd[i].appendChild(SavePaymentButton);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";

   
        // check if report to the service exists and generate button for reporting
        checkPasabuyReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);


    }

}


function setPasabuyPaidItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var SavePaymentButton = document.createElement('button');
        SavePaymentButton .setAttribute('class','SavePaymentButton');
        SavePaymentButton .setAttribute('onclick','setPasabuyPaymentForm(' + dataArray[i]['pasabuyTransactionID']+")")
        SavePaymentButton .innerText = "Save Payment";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""

        responderImageTD[i].appendChild(userImage);
        //responderInfo[i].innerHTML = dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        //ActionsTd[i].appendChild(cancelButton);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkPasabuyReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

        generatePasabuyFeedbackButton(dataArray[i]['pasabuyTransactionID'],i,dataArray[i]['responderID'],dataArray[i]['serviceID']);

    }

}


function setPasabuyFinishedItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var SavePaymentButton = document.createElement('button');
        SavePaymentButton .setAttribute('class','SavePaymentButton');
        SavePaymentButton .setAttribute('onclick','setPasabuyPaymentForm(' + dataArray[i]['pasabuyTransactionID']+")")
        SavePaymentButton .innerText = "Save Payment";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""

        responderImageTD[i].appendChild(userImage);
        //responderInfo[i].innerHTML = dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        //ActionsTd[i].appendChild(cancelButton);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["responderID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkPasabuyReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

        generatePasabuyFeedbackButton(dataArray[i]['pasabuyTransactionID'],i,dataArray[i]['responderID'],dataArray[i]['serviceID']);

    }

}

function setPasabuyCancelledItem(array){
    var dataArray = array;
    var number = dataArray.length;

    tr = document.getElementsByClassName('pasabuyTransactionRow');
    transactionID= document.getElementsByClassName('transactionID');
    productImageTD= document.getElementsByClassName('productImageTD');
    productInfo= document.getElementsByClassName('productInfo');
    serviceInfo= document.getElementsByClassName('serviceInfo');
    responderImageTD = document.getElementsByClassName('responderImageTD');
    totalPrice= document.getElementsByClassName('totalPrice');
    transactionStatus= document.getElementsByClassName('transactionStatus');
    ActionsTd= document.getElementsByClassName('ActionsTd');

    for(var i=0;i<number;i++){

        //tr[i]
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImageTransactions');


        var userImage = new Image();
        userImage.src = dataArray[i]['responderPhoto'];
        userImage.setAttribute('class','responderImagePic');

        var SavePaymentButton = document.createElement('button');
        SavePaymentButton .setAttribute('class','SavePaymentButton');
        SavePaymentButton .setAttribute('onclick','setPasabuyPaymentForm(' + dataArray[i]['pasabuyTransactionID']+")")
        SavePaymentButton .innerText = "Save Payment";



        transactionID[i].innerHTML = dataArray[i]['pasabuyTransactionID'];
        productImageTD[i].appendChild(image);
        productInfo[i].innerHTML = dataArray[i]['productBrand']+": "+dataArray[i]['productName']+" <br/> -"+ dataArray[i]['productDescription']+"<br/> Price: Php " + dataArray[i]['price'] +"<br/> Qty: " + dataArray[i]['quantity'];
        serviceInfo[i].innerHTML = " <b> Delivery Date: </b>"+ dataArray[i]['dueDate'] +"<br/>" +" <b> Delivery Price: </b> Php " + dataArray[i]['deliveryRate'] + ""

        responderImageTD[i].appendChild(userImage);
        //responderInfo[i].innerHTML = dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];
        responderImageTD[i].innerHTML = responderImageTD[i].innerHTML +"<br/> <br/>"+ dataArray[i]['ResponderName'] + "<br/>" + dataArray[i]['ResponderEmail'];

        var total =(parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
        totalPrice[i].innerHTML = "Php " + total;

        transactionStatus[i].innerText = dataArray[i]['orderStatus'];
        //ActionsTd[i].appendChild(cancelButton);

               
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["responderID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkPasabuyReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


//-----------------------check and generation of feedback and report buttons---------------------------------
// check if report already exists 
function  checkPasabuyReports(myID,reportedID,serviceID,requestID,transactionType,rowNum,dataArray,pasabuyTransactionID){
    var myID = myID;
    var reportedID =reportedID;
    var serviceID =serviceID;
    var requestID =requestID;
    var transactionType =transactionType;
    var dataArray = dataArray;
    var rowNum = rowNum;
    var pasabuyTransactionID = pasabuyTransactionID;

    var controlsTd= document.getElementsByClassName('ActionsTd');


    

        var query = "reporterID="+myID+"&reportedID="+reportedID+"&serviceID="+serviceID+"&requestID="+requestID+"&transactionType="+transactionType+"&pasabuyTransactionID=" + pasabuyTransactionID;
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
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder','Pasabuy',"+ pasabuyTransactionID +")");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','CancelButton');
                    button1.innerText = "Report";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["responderID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder','Pasabuy',"+ pasabuyTransactionID +")");
                    controlsTd[rowNum].appendChild(button1);
                   
                }

                    

            
            }else{
                console.log(err);
            
            }      
        
       
        };
     
    

        xmlhttp.send(query);
    
  

}



function generatePasabuyFeedbackButton(transactionID,number,responderID,serviceID){
    var transactionID = transactionID;
    var number = number;
    var query = "transactionID=" + transactionID;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/CheckPasabuyFeedBackExists.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;
            console.log(dataArray);
            console.log(query);

            controlsTd= document.getElementsByClassName('ActionsTd');

            if(dataArray === "true"){

                var button1 = document.createElement('button');
                button1.setAttribute('class','AcceptButton');
                button1.innerText = "Feedback Given";
                button1.disabled = true;
                button1.style.backgroundColor = "gray";
                button1.setAttribute('onclick',"setPasabuyFeedbackForm(" + transactionID +","+responderID+","+serviceID+")" );
                controlsTd[number].appendChild(button1);
 
            }else{

                var button1 = document.createElement('button');
                button1.setAttribute('class','AcceptButton');
                button1.innerText = "Give Feedback";
                button1.setAttribute('onclick',"setPasabuyFeedbackForm(" + transactionID +","+responderID+","+serviceID+")" );
                controlsTd[number].appendChild(button1);

            }
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

    
}// end of function

//---------------------------------------button functions/actions-------------------------------------------
function cancelPasabuyTransaction(transactionID){
    var transactionID = transactionID;
    var query = "transactionID=" + transactionID+"&update=Cancelled&userType=Requestor";
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdatePasabuyTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
        


           var transactionsUserId = sessionStorage.getItem("transactionsUserId");
           // getCancelledRequests(transactionsUserId);
           pasabuyNavItem (5,transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    alert("Transaction Cancelled");
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


//-----------------------------------set forms--------------------------------------------------------
function setPasabuyPaymentForm(transactionID){
    transactionID = transactionID;
    document.getElementById("pasabuyTransactionIDInput").value = transactionID;
    document.getElementById("pasabuyPaymentPopUpBack").style.display = "grid";
    document.getElementById("paymentPopUpBack").style.display = "none";


}

function showPasabuyPaymentProofFile(event){
    var imageContainer = document.getElementById("pasabuyPaymentFileOutput");
    imageContainer.src =  URL.createObjectURL(event.target.files[0]);

}


function closePasabuyPaymentForm(){

    document.getElementById("pasabuyPaymentPopUpBack").style.display = "none";

}


function setPasabuyFeedbackForm(transactionID,responderID,serviceID){
    var transactionID1 = transactionID;
    var serviceRevieweeID1 = responderID;
    var serviceID1 = serviceID;
 
 


    document.getElementById("pasabuyGiveFeedBackPopUpBack").style.display = "grid";
    document.getElementById("pasabuyGiveFeedBackPopUp").style.display = "grid";
 
     
    document.getElementById("pasabuyTransactionFeedbackID").value = transactionID1 
    document.getElementById("pasabuyServiceRevieweeFeedbackID").value = serviceRevieweeID1
    document.getElementById("pasabuyServiceFeedbackID").value = serviceID1
 
  
 
 
 }

 function closePasabuyFeedbackForm(){

    document.getElementById("pasabuyGiveFeedBackPopUpBack").style.display = "none";
    document.getElementById("pasabuyGiveFeedBackPopUp").style.display = "none";


}