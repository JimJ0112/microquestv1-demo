//global variables
var checkReportResult;



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

    TransactionsNavItem1.style = "background-Color:white; color:black; ";
    TransactionsNavItem2.style = "background-Color:white; color:black; ";
    TransactionsNavItem3.style = "background-Color:white; color:black; ";
    TransactionsNavItem4.style = "background-Color:white; color:black; ";
    TransactionsNavItem5.style = "background-Color:white; color:black; ";
    TransactionsNavItem6.style = "background-Color:white; color:black; ";

    TransactionsNavItems[number].style = "background-Color:#176c5c; color:white; ";
    if(number === 0){
      
        getPasabuyOrders(userID)
    }else if(number === 1){
       
        getPasabuyAcceptedOrders(userID)
    }else if(number === 2){
     
       getPasabuyDeliveredOrders(userID)
       
    }else if(number === 3){
       
       getPasabuyPaidOrders(userID)

    }else if(number === 4){
     
       getPasabuyFinishedOrders(userID)

    }else if(number === 5){
      
       getPasabuyCancelledOrders(userID)

    }


}


//------------------------------------------fetch data---------------------------------------------------------


// get pending orders 

function getPasabuyOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&status=pending&column=responderID";
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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var query = "userID=" + userID +"&status=Accepted&column=responderID";
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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var query = "userID=" + userID +"&status=Delivered&column=responderID";
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
    

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var query = "userID=" + userID +"&status=Paid&column=responderID";
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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var query = "userID=" + userID +"&status=Finished&column=responderID";
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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var query = "userID=" + userID +"&status=Cancelled&column=responderID";
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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
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
    var Body = document.getElementById('TransactionsContainerBody');


    for(var i = 0; i<number; i++){
    
 
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
        productImageDiv = document.createElement('div');
        Description = document.createElement('div');



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
        productImageDiv.setAttribute('class','productImageDiv');
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
        item3.appendChild(productImageDiv);
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


//--------------------------------------------------Set data-----------------------------------------

function setPasabuyOrderItem(array){
    var dataArray = array;
    var number = dataArray.length;

    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    requestTitle = document.getElementsByClassName('requestTitle');
    requestStatus= document.getElementsByClassName('requestStatus');
 
    responderImageDiv= document.getElementsByClassName('responderImageDiv');
    responderNameDiv= document.getElementsByClassName('responderNameDiv');
    responderEmailDiv= document.getElementsByClassName('responderEmailDiv');
 
    productImageDiv = document.getElementsByClassName('productImageDiv');
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

    for(var i=0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];



        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('class','Button red');
        cancelButton.setAttribute('onclick','cancelPasabuyTransaction(' + dataArray[i]['pasabuyTransactionID']+")")
        cancelButton.innerText = "Cancel";

        var AcceptButton = document.createElement('button');
        AcceptButton.setAttribute('class','Button');
        AcceptButton.innerText = "Accept";
        AcceptButton.setAttribute('onclick',"acceptPasabuyOrder(" +dataArray[i]['pasabuyTransactionID'] + ")" );
    


        actionsDiv[i].appendChild(AcceptButton);
        actionsDiv[i].appendChild(cancelButton);
        





    }

}

function setPasabuyAcceptedItem(array){
    var dataArray = array;
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
  
    productImageDiv = document.getElementsByClassName('productImageDiv');
    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');

    for(var i=0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];



        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('class','Button red');
        cancelButton.setAttribute('onclick','cancelPasabuyTransaction(' + dataArray[i]['pasabuyTransactionID']+")")
        cancelButton.innerText = "Cancel";


        var deliverButton = document.createElement('button');
        deliverButton.setAttribute('class','Button');
        deliverButton.innerText = "Deliver";
        deliverButton.setAttribute('onclick',"deliverPasabuyOrder(" +dataArray[i]['pasabuyTransactionID'] + ")" );
        
        // check if report to the service exists and generate button for reporting
        actionsDiv[i].appendChild(deliverButton);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";

        checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}

function setPasabuyDeliveredItem(array){
    var dataArray = array;
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
  
    productImageDiv = document.getElementsByClassName('productImageDiv');

    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');


    for(var i=0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";

   
        // check if report to the service exists and generate button for reporting

        checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


function setPasabuyPaidItem(array){
    var dataArray = array;
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

    productImageDiv = document.getElementsByClassName('productImageDiv');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');


    for(var i=0;i<number;i++){


        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];

        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "View Payment File";
        button.setAttribute('onclick',"showPhoto('" +dataArray[i]['paymentFile'] + "')");
        actionsDiv[i].appendChild(button);


        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);
       
    }

}


function setPasabuyFinishedItem(array){
    var dataArray = array;
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
    productImageDiv = document.getElementsByClassName('productImageDiv');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');


    for(var i=0;i<number;i++){


        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];

        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "View Payment File";
        button.setAttribute('onclick',"showPhoto('" +dataArray[i]['paymentFile'] + "')");
        actionsDiv[i].appendChild(button);


        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);
       
    }

}

function setPasabuyCancelledItem(array){
    var dataArray = array;
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
  
    productImageDiv = document.getElementsByClassName('productImageDiv');

    transactionDates = document.getElementsByClassName('transactionDates');
    datePosted= document.getElementsByClassName('datePosted');

    dateAccomplished= document.getElementsByClassName('dateAccomplished');

    sendMessageDiv= document.getElementsByClassName('sendMessageDiv');

    sendMessageDiv = document.getElementsByClassName('sendMessageDiv');
    actionsDiv= document.getElementsByClassName('actionsDiv');

    item2 = document.getElementsByClassName('item2');
    item3 = document.getElementsByClassName('item3');
    item4 = document.getElementsByClassName('item4');

    for(var i=0;i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['requestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['pasabuyTransactionID'];
        requestTitle[i].innerHTML = "<b>" + dataArray[i]['productBrand'] + "</b> :" + dataArray[i]['productName'];
        requestStatus[i].innerText = dataArray[i]['orderStatus'];


        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorEmail'];


    
        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        var itemImage = new Image();
        itemImage.src = dataArray[i]['productImage'];
        itemImage.setAttribute('class','productImageTransactions');

        productImageDiv[i].appendChild(itemImage);

        Description[i].innerHTML =  dataArray[i]['productBrand'] + " : " + dataArray[i]['productName'] + "<br/>" + dataArray[i]['productDescription'];
        

        var total = (parseFloat(dataArray[i]['price']) * parseFloat(dataArray[i]['quantity'])) + parseFloat(dataArray[i]['deliveryRate'])
       


        // set data
        Price[i].innerHTML = "<span style='font-size:small; text-align:left;'> x "+ dataArray[i]['quantity']+ " <br/> Price: Php " +dataArray[i]['price'] +" <br/> " +"Delivery Fee: Php" + dataArray[i]['deliveryRate'] +" </span>  <span style='font-size:medium;'> <br/>  Total Price: Php " + total + "</span>" ;
        Contract[i].innerHTML = "";
     
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "Date Availed: " + dataArray[i]['orderDate'];
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

        
        requestStatus[i].innerText = dataArray[i]['orderStatus'];
               
       myID = sessionStorage.getItem("userID");
       reportedID = dataArray[i]["requestorID"];
       serviceIDParam = dataArray[i]["serviceID"];
       requestID = null;
       transactionType = "service";

       // check if report to the service exists and generate button for reporting
       checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


//-----------------------check and generation of feedback and report buttons---------------------------------
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
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["requestorID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Report";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["requestorID"] +","+dataArray[rowNum]["serviceID"]+",'service','responder')");
                    controlsTd[rowNum].appendChild(button1);
                   
                }

                    

            
            }else{
                console.log(err);
            
            }      
        
       
        };
     
    

        xmlhttp.send(query);
    
  

}





//---------------------------------------button functions/actions-------------------------------------------
function cancelPasabuyTransaction(transactionID){
    if (confirm("Cancel Order?")) {
        var transactionID = transactionID;
        var query = "transactionID=" + transactionID+"&update=Cancelled&userType=Responder";
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
    }else{

    }
    
}// end of function


//acceptPasabuyOrder

function acceptPasabuyOrder(transactionID){

    if (confirm("Accept Order?")) {
            var transactionID = transactionID;
            var query = "transactionID=" + transactionID+"&update=Accepted&userType=Responder";
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
                  pasabuyNavItem (1,transactionsUserId);
 
            

                }else{
                   console.log(err);
                }      
            };
    
            xmlhttp.send(query);
            alert("Order Accepted");

    }else{

    }
}// end of function



//deliverPasabuyOrder
function deliverPasabuyOrder(transactionID){

    if (confirm("Deliver Order?")) {
        var transactionID = transactionID;
        var query = "transactionID=" + transactionID+"&update=Delivered&userType=Responder";
        console.log(query);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("POST", "Backend/UpdatePasabuyTransaction.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
           
                var dataArray = this.response;
                console.log(dataArray);
    

                var transactionsUserId = sessionStorage.getItem("transactionsUserId");
                pasabuyNavItem (2,transactionsUserId);
 
            

            }else{
                console.log(err);
             }      
        };
    
        xmlhttp.send(query);
        alert("Order Delivered");
    }else{

    }
}// end of function

//confirmPasabuyPayment

function confirmPasabuyPayment(transactionID){

    if (confirm("Confirm Payment?")){
        var transactionID = transactionID;
        var query = "transactionID=" + transactionID+"&update=Finished&userType=Responder";
        console.log(query);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("POST", "Backend/UpdatePasabuyTransaction.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
           
                var dataArray = this.response;
                console.log(dataArray);
        


                var transactionsUserId = sessionStorage.getItem("transactionsUserId");
        
                pasabuyNavItem (4,transactionsUserId);
 
            

            }else{
                console.log(err);
            }      
        };

    
        xmlhttp.send(query);
        alert("Payment Confirmed");
    }else{

    }

    
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

function sideButton(){
    TransactionsNav = document.getElementById('TransactionsNav');
    TransactionsNav.style.marginLeft="0px"
    
    sideMenu = document.getElementById('sideMenu');
    sideMenu.style.marginLeft="-50px"

   
}

function hideButton(){
    TransactionsNav = document.getElementById('TransactionsNav');
    TransactionsNav.style.marginLeft="-270px";

    sideMenu = document.getElementById('sideMenu');
    sideMenu.style.marginLeft="-6"
}