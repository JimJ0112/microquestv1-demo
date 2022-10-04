
function getServiceOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_myTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "No availed services yet";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createServiceOrderElements(number)
                setServiceOrdersData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function



function getRequestApplications(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_myTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "No request applications yet";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createAppliedRequestsElements(number)
                setRequestsApplicationData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// create service order elements to append ------------------------------------------------------------------------

function createServiceOrderElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        var serviceOrderRow = document.createElement('tr');
        var serviceInfoRow = document.createElement('tr');
        var serviceOrderContainer = document.createElement('div')

        // about the transactions 
        transactionID= document.createElement('p');
        responderID= document.createElement('p');
        responderName = document.createElement('p');
        price= document.createElement('p');
        rate= document.createElement('p');
        additionalNotes = document.createElement('p');
        transactionInfoCol = document.createElement('td');

        // about the service 
        serviceID= document.createElement('p');
        serviceCategory= document.createElement('p');
        servicePosition= document.createElement('p');
        serviceStatus = document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionEndDate= document.createElement('p');
        transactionStatus= document.createElement('p');
        viewService = document.createElement('button');

        buttonsCol = document.createElement('td');
        cancelButton = document.createElement('button');
        AcceptButton = document.createElement('button');
        br = document.createElement('br');


        // set attributes 
        serviceOrderRow.setAttribute('class','serviceOrderRow');
        serviceInfoRow.setAttribute('class','serviceInfoRow');
        serviceOrderContainer.setAttribute('class','serviceOrderContainer');
        serviceStatus.setAttribute('class','serviceStatus');
        transactionInfoCol.setAttribute('class','transactionInfoCol');

        // about the transactions 
        transactionID.setAttribute('class','transactionID');
        responderID.setAttribute('class','responderID');
        responderName.setAttribute('class','responderName');
        price.setAttribute('class','price');
        rate.setAttribute('class','rate');
        additionalNotes.setAttribute('class','additionalNotes');

        // about the service 
        serviceID.setAttribute('class','serviceID');
        serviceCategory.setAttribute('class','serviceCategory');
        servicePosition.setAttribute('class','servicePosition');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionEndDate.setAttribute('class','transactionEndDate');
        transactionStatus.setAttribute('class','transactionStatus');
        viewService.setAttribute('class','viewService');
        viewService.innerText = "View Service";


        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        AcceptButton.setAttribute('class','AcceptButton');
        AcceptButton.innerText = "Accept";
        cancelButton.innerText = "Cancel";

        // append them
        transactionInfoCol.appendChild(transactionID);
        transactionInfoCol.appendChild(serviceCategory);
        transactionInfoCol.appendChild(servicePosition);

        transactionInfoCol.appendChild(responderID);
        transactionInfoCol.appendChild(responderName);
        transactionInfoCol.appendChild(price);
        transactionInfoCol.appendChild(rate);

        transactionInfoCol.appendChild(transactionStartDate);
        transactionInfoCol.appendChild(transactionEndDate);
        transactionInfoCol.appendChild(transactionStatus);
        transactionInfoCol.appendChild(rate);
        transactionInfoCol.appendChild(additionalNotes);
        transactionInfoCol.appendChild(viewService);

      
        buttonsCol.appendChild(br);
        buttonsCol.appendChild(br);
        buttonsCol.appendChild(cancelButton);


        serviceInfoRow.appendChild(serviceCategory);
        serviceInfoRow.appendChild(servicePosition);
        serviceInfoRow.appendChild(serviceID);
        serviceInfoRow.appendChild(rate);
        serviceInfoRow.appendChild(serviceStatus);

        serviceOrderRow.appendChild(transactionInfoCol);
        serviceOrderRow.appendChild(buttonsCol);
        
        serviceOrderContainer.appendChild(serviceOrderRow);
        serviceOrderContainer.appendChild(serviceInfoRow);
        
        div.appendChild(serviceOrderContainer);



        


    }
} // end of function


// set data for service orders ----------------------------------------------------------------------------------

function setServiceOrdersData(array){
    var dataArray = array;
    var number = dataArray.length;

            
    
            // about the transactions 
            transactionID= document.getElementsByClassName('transactionID');
            responderID= document.getElementsByClassName('responderID');
            responderName= document.getElementsByClassName('responderName');
            price= document.getElementsByClassName('price');
            rate= document.getElementsByClassName('rate');

            transactionStartDate= document.getElementsByClassName('transactionStartDate');
            transactionEndDate= document.getElementsByClassName('transactionEndDate');
            transactionStatus= document.getElementsByClassName('transactionStatus');
            additionalNotes = document.getElementsByClassName('additionalNotes');
    
            buttonsCol= document.getElementsByClassName('buttonsCol');
            cancelButton= document.getElementsByClassName('cancelButton');
           // AcceptButton= document.getElementsByClassName('AcceptButton');
            viewService = document.getElementsByClassName('viewService');

    
            // about the service 
            serviceID= document.getElementsByClassName('serviceID');
            serviceCategory= document.getElementsByClassName('serviceCategory');
            servicePosition= document.getElementsByClassName('servicePosition');
            serviceStatus = document.getElementsByClassName('serviceStatus');

            for(var i=0; i<number;i++){
                transactionID[i].innerHTML = "<b>Transaction ID: </b>"+ dataArray[i]['transactionID'];
                responderID[i].innerHTML = "<b>Responder ID: </b>"+ dataArray[i]['responderID'];
                responderName[i].innerHTML = "<b>Responder Name: </b>"+ dataArray[i]['ResponderName'];
                price[i].innerHTML = "<b>Price: </b> Php "+ dataArray[i]['price'];
                rate[i].innerHTML = "<b>Responder Rate: </b> Php "+ dataArray[i]['rate'];
    
                transactionStartDate[i].innerHTML = "<b>Order Date: </b>"+ dataArray[i]['transactionStartDate'];
                transactionEndDate[i].innerHTML = "<b>Order Due Date: </b>"+ dataArray[i]['dueDate'];
                transactionStatus[i].innerHTML = "<b>Order Status: </b>"+ dataArray[i]['transactionStatus'];
        
                viewService[i].setAttribute('onclick','callService('+i+')');
                //cancelButton[i].innerText = dataArray[i][''];
                //AcceptButton[i].innerText = dataArray[i][''];
                additionalNotes[i].innerHTML = "<b>Additional Notes: </b>"+dataArray[i]['additionalNotes'];
    
        
                // about the service 
                serviceID[i].innerHTML = "<b> Service ID: </b>"+ dataArray[i]['serviceID'];
                serviceCategory[i].innerHTML = "<b> Service Category: </b>"+ dataArray[i]['serviceCategory'];
                servicePosition[i].innerHTML = "<b> Service Type: </b>"+ dataArray[i]['servicePosition'];
                serviceStatus[i].innerHTML = "<b> Service Status: </b>"+ dataArray[i]['serviceStatus'];
                cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");

            }
    

}

// to show and hide service class

function callService(number){
    var number = number;
    serviceInfoRow = document.getElementsByClassName('serviceInfoRow')[number];
    var style = window.getComputedStyle(serviceInfoRow,null).display;
      
    if(style === "none"){
        serviceInfoRow.style.display = "block";
      

    }  else if( style == "block"){
        serviceInfoRow.style.display = "none";
      
    }
    

};


//------Applied Requests---------------------------------------------------------------------------------------
function createAppliedRequestsElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        // create elements
        var requestRow = document.createElement('tr');
        var requestContainer = document.createElement('div');


        responderName = document.createElement('p');
        requestTitle = document.createElement('p');
        requestCategory = document.createElement('p');
        requestDescription= document.createElement('p');
        requestExpectedPrice= document.createElement('p');
        isNegotiable= document.createElement('p');
        datePosted= document.createElement('p');
        dueDate= document.createElement('p');
        requestStatus= document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionStatus= document.createElement('p');
        transactionPrice = document.createElement('p');

        var infoCol = document.createElement('td');
        var buttonsCol = document.createElement('td');
        
        var cancelButton = document.createElement('button');
        var acceptButton = document.createElement('button');

        // set element attributes
        requestRow.setAttribute('class','requestRow');
        requestContainer.setAttribute('class','requestContainer');


        responderName.setAttribute('class','responderName');
        requestTitle.setAttribute('class','requestTitle');
        requestCategory.setAttribute('class','requestCategory');
        requestDescription.setAttribute('class','requestDescription');
        requestExpectedPrice.setAttribute('class','requestExpectedPrice');
        isNegotiable.setAttribute('class','isNegotiable');
        datePosted.setAttribute('class','datePosted');
        dueDate.setAttribute('class','dueDate');
        requestStatus.setAttribute('class','requestStatus');
        transactionPrice.setAttribute('class','transactionPrice');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');

        infoCol.setAttribute('class','infoCol');
        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        acceptButton.setAttribute('class','acceptButton');
        cancelButton.innerText = "Cancel";
        acceptButton.innerText = "Accept";

        // append elements
        infoCol.appendChild(responderName);
        infoCol.appendChild(requestTitle);
        infoCol.appendChild(requestCategory);
        infoCol.appendChild(requestExpectedPrice);
        infoCol.appendChild(isNegotiable);
        infoCol.appendChild(transactionPrice);
        infoCol.appendChild(datePosted);
        infoCol.appendChild(dueDate);
        infoCol.appendChild(requestStatus);
        infoCol.appendChild(requestDescription);
        infoCol.appendChild(transactionStartDate);
        infoCol.appendChild(transactionStatus);

        buttonsCol.appendChild(acceptButton);
        buttonsCol.appendChild(cancelButton);
        

        requestRow.appendChild(infoCol);
        requestRow.appendChild(buttonsCol);

        requestContainer.appendChild(requestRow);
        


        
        div.appendChild(requestContainer);



        


    }
} // end of function


// set requests data
function setRequestsApplicationData(array){
    var dataArray = array;
    var number = dataArray.length;

    responderName = document.getElementsByClassName('responderName');
    requestTitle= document.getElementsByClassName('requestTitle');
    requestCategory= document.getElementsByClassName('requestCategory');
    requestDescription= document.getElementsByClassName('requestDescription');
    requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
    transactionPrice = document.getElementsByClassName('transactionPrice');
    isNegotiable= document.getElementsByClassName('isNegotiable');
    datePosted= document.getElementsByClassName('datePosted');
    dueDate= document.getElementsByClassName('dueDate');
    requestStatus= document.getElementsByClassName('requestStatus');

    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');

    infoCol= document.getElementsByClassName('infoCol');
    buttonsCol= document.getElementsByClassName('buttonsCol');
    acceptButton = document.getElementsByClassName('acceptButton');
    cancelButton = document.getElementsByClassName('cancelButton');
    


    for(var i=0; i<number;i++){

        responderName[i].innerHTML = "<b> Responder Name: </b>"+dataArray[i]['ResponderName'];
        requestTitle[i].innerHTML = "<b> Title: </b>"+dataArray[i]['requestTitle'];
        requestCategory[i].innerHTML = "<b> Category:  </b>"+dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "<b> Description: </b>"+dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = "<b> Expected Price:  </b> Php "+dataArray[i]['requestExpectedPrice'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        datePosted[i].innerHTML = "<b> Date Posted: </b>"+dataArray[i]['datePosted'];
        dueDate[i].innerHTML = "<b> Due Date: </b>"+dataArray[i]['dueDate'];
        requestStatus[i].innerHTML = "<b> Request Status:  </b>"+dataArray[i]['requestStatus'];
    
        transactionStartDate[i].innerHTML = "<b>Application Date: </b>"+dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerHTML = "<b>Application Status: </b>"+dataArray[i]['transactionStatus'];
        acceptButton[i].setAttribute('onclick','acceptRequestApplication('+dataArray[i]['transactionID']+",'accepted',"+dataArray[i]['requestID']+")");
        cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");

        transactionPrice[i].innerHTML="<b> Transaction price: </b> Php "+ dataArray[i]['price'];

        // create update transaction price button
        if(dataArray[i]['isNegotiable'] === "Negotiable"){
            var updatePriceButton = document.createElement('button');
            updatePriceButton.setAttribute('onclick','negotiatePrice('+dataArray[i]['transactionID']+')');
            updatePriceButton.innerText ="Update Price";
            buttonsCol[i].appendChild(updatePriceButton);
            isNegotiable[i].style.color="green";
            isNegotiable[i].style.fontWeight = "bolder";
        } else{
            isNegotiable[i].style.color="red";
            isNegotiable[i].style.fontWeight = "bolder";
        }

    }
    

}

// accept requests 
function updateRequestApplication(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            
            userID = sessionStorage.getItem('myID');
            getRequestApplications(userID);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// accept requests 
function acceptRequestApplication(transactionID,update,requestID){
    var transactionID = transactionID;
    var update = update;
    var requestID  = requestID ;
    var query = "transactionID=" + transactionID+"&update="+update+"&requestID="+requestID;
    console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
 
            userID = sessionStorage.getItem('myID');
            getRequestApplications(userID);
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function



// --------------------- For cancelled transactions --------------------------------------------------------------
function getCancelledRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_cancelledTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "You currently have no cancelled request";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);
                console.log(dataArray);
                

            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createNoButtonAppliedRequestsElements(number)
                setNoButtonRequestsApplicationData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


function getCancelledServices(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_cancelledTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "You currently have no cancelled service orders";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createNoButtonServiceOrderElements(number)
                setNoButtonServiceOrdersData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

//--------------accepted requests -------------------------------------------------------------------------------

function getAcceptedRequestApplications(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_acceptedTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "You currently have no accepted Request";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createAcceptedRequestsElements(number)
                setAcceptedApplicationData(dataArray);  
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

/*----Completed------------------------------------------------------------------------------------------ */

//--------------accepted requests -------------------------------------------------------------------------------

function getCompletedRequests(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Request&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_completedTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "You currently have no completed requests";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createCompletedAppliedRequestsElements(number)
                setCompletedRequestsApplicationData(dataArray);  
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


function getCompletedService(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=requestorID";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_completedTransactions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('requestsOrdersContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "You currently have no completed service orders";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);



            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createCompletedServiceOrderElements(number)
                setCompletedServiceOrdersData(dataArray);  
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function



/* ------------------------------------- create elements with no buttons------------------------------------ */

// create service order elements to append ------------------------------------------------------------------------

function createNoButtonServiceOrderElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        var serviceOrderRow = document.createElement('tr');
        var serviceInfoRow = document.createElement('tr');
        var serviceOrderContainer = document.createElement('div')

        // about the transactions 
        transactionID= document.createElement('p');
        responderID= document.createElement('p');
        ResponderName = document.createElement('p');
        price= document.createElement('p');
        rate= document.createElement('p');
        transactionInfoCol = document.createElement('td');
        additionalNotes = document.createElement('p');

        // about the service 
        serviceID= document.createElement('p');
        serviceCategory= document.createElement('p');
        servicePosition= document.createElement('p');
        serviceStatus = document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionEndDate= document.createElement('p');
        transactionStatus= document.createElement('p');
        viewService = document.createElement('button');

        buttonsCol = document.createElement('td');
        cancelButton = document.createElement('button');
        AcceptButton = document.createElement('button');
        br = document.createElement('br');


        // set attributes 
        serviceOrderRow.setAttribute('class','serviceOrderRow');
        serviceInfoRow.setAttribute('class','serviceInfoRow');
        serviceOrderContainer.setAttribute('class','serviceOrderContainer');
        serviceStatus.setAttribute('class','serviceStatus');
        transactionInfoCol.setAttribute('class','transactionInfoCol');

        // about the transactions 
        transactionID.setAttribute('class','transactionID');
        responderID.setAttribute('class','responderID');
        ResponderName.setAttribute('class','ResponderName');
        price.setAttribute('class','price');
        rate.setAttribute('class','rate');
        additionalNotes.setAttribute('class','additionalNotes');

        // about the service 
        serviceID.setAttribute('class','serviceID');
        serviceCategory.setAttribute('class','serviceCategory');
        servicePosition.setAttribute('class','servicePosition');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionEndDate.setAttribute('class','transactionEndDate');
        transactionStatus.setAttribute('class','transactionStatus');
        viewService.setAttribute('class','viewService');
        viewService.innerText = "View Service";


        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        AcceptButton.setAttribute('class','AcceptButton');
        AcceptButton.innerText = "Accept";
        cancelButton.innerText = "Cancel";

        // append them
        transactionInfoCol.appendChild(transactionID);
        transactionInfoCol.appendChild(serviceCategory);
        transactionInfoCol.appendChild(servicePosition);

        transactionInfoCol.appendChild(responderID);
        transactionInfoCol.appendChild(ResponderName);
        transactionInfoCol.appendChild(price);
        transactionInfoCol.appendChild(rate);

        transactionInfoCol.appendChild(transactionStartDate);
        transactionInfoCol.appendChild(transactionEndDate);
        transactionInfoCol.appendChild(transactionStatus);
        transactionInfoCol.appendChild(rate);
        transactionInfoCol.appendChild(additionalNotes);
        transactionInfoCol.appendChild(viewService);

        //buttonsCol.appendChild(AcceptButton);
       // buttonsCol.appendChild(br);
       // buttonsCol.appendChild(br);
       // buttonsCol.appendChild(cancelButton);


        serviceInfoRow.appendChild(serviceCategory);
        serviceInfoRow.appendChild(servicePosition);
        serviceInfoRow.appendChild(serviceID);
        serviceInfoRow.appendChild(rate);
        serviceInfoRow.appendChild(serviceStatus);

        serviceOrderRow.appendChild(transactionInfoCol);
        serviceOrderRow.appendChild(buttonsCol);
        
        serviceOrderContainer.appendChild(serviceOrderRow);
        serviceOrderContainer.appendChild(serviceInfoRow);
        
        div.appendChild(serviceOrderContainer);



        


    }
} // end of function


function createCompletedServiceOrderElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        var serviceOrderRow = document.createElement('tr');
        var serviceInfoRow = document.createElement('tr');
        var serviceOrderContainer = document.createElement('div')

        // about the transactions 
        transactionID= document.createElement('p');
        responderID= document.createElement('p');
        ResponderName = document.createElement('p');
        price= document.createElement('p');
        rate= document.createElement('p');
        additionalNotes = document.createElement('p');
        transactionInfoCol = document.createElement('td');

        // about the service 
        serviceID= document.createElement('p');
        serviceCategory= document.createElement('p');
        servicePosition= document.createElement('p');
        serviceStatus = document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionEndDate= document.createElement('p');
        transactionStatus= document.createElement('p');
        viewService = document.createElement('button');

        buttonsCol = document.createElement('td');
        cancelButton = document.createElement('button');
        paymentbutton = document.createElement('button');
        br = document.createElement('br');


        // set attributes 
        serviceOrderRow.setAttribute('class','serviceOrderRow');
        serviceInfoRow.setAttribute('class','serviceInfoRow');
        serviceOrderContainer.setAttribute('class','serviceOrderContainer');
        serviceStatus.setAttribute('class','serviceStatus');
        additionalNotes.setAttribute('class','additionalNotes');
        transactionInfoCol.setAttribute('class','transactionInfoCol');

        // about the transactions 
        transactionID.setAttribute('class','transactionID');
        responderID.setAttribute('class','responderID');
        ResponderName.setAttribute('class','ResponderName');
        price.setAttribute('class','price');
        rate.setAttribute('class','rate');

        // about the service 
        serviceID.setAttribute('class','serviceID');
        serviceCategory.setAttribute('class','serviceCategory');
        servicePosition.setAttribute('class','servicePosition');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionEndDate.setAttribute('class','transactionEndDate');
        transactionStatus.setAttribute('class','transactionStatus');
        viewService.setAttribute('class','viewService');
        viewService.innerText = "View Service";


        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        paymentbutton.setAttribute('class','paybutton');
        cancelButton.innerText = "Cancel";

        // append them
        transactionInfoCol.appendChild(transactionID);
        transactionInfoCol.appendChild(serviceCategory);
        transactionInfoCol.appendChild(servicePosition);

        transactionInfoCol.appendChild(responderID);
        transactionInfoCol.appendChild(ResponderName);
        transactionInfoCol.appendChild(price);
        transactionInfoCol.appendChild(rate);

        transactionInfoCol.appendChild(transactionStartDate);
        transactionInfoCol.appendChild(transactionEndDate);
        transactionInfoCol.appendChild(transactionStatus);
        transactionInfoCol.appendChild(additionalNotes);
        transactionInfoCol.appendChild(rate);
        transactionInfoCol.appendChild(viewService);
       

        buttonsCol.appendChild(paymentbutton);
       // buttonsCol.appendChild(br);
       // buttonsCol.appendChild(br);
       // buttonsCol.appendChild(cancelButton);


        serviceInfoRow.appendChild(serviceCategory);
        serviceInfoRow.appendChild(servicePosition);
        serviceInfoRow.appendChild(serviceID);
        serviceInfoRow.appendChild(rate);
        serviceInfoRow.appendChild(serviceStatus);

        serviceOrderRow.appendChild(transactionInfoCol);
        serviceOrderRow.appendChild(buttonsCol);
        
        serviceOrderContainer.appendChild(serviceOrderRow);
        serviceOrderContainer.appendChild(serviceInfoRow);
        
        div.appendChild(serviceOrderContainer);



        


    }
} // end of function

//-----------for requests-------------------------------------

function createNoButtonAppliedRequestsElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        // create elements
        var requestRow = document.createElement('tr');
        var requestContainer = document.createElement('div');


        RequestorName = document.createElement('p');
        requestTitle = document.createElement('p');
        requestCategory = document.createElement('p');
        requestDescription= document.createElement('p');
        requestExpectedPrice= document.createElement('p');
        isNegotiable= document.createElement('p');
        datePosted= document.createElement('p');
        dueDate= document.createElement('p');
        requestStatus= document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionStatus= document.createElement('p');

        var infoCol = document.createElement('td');
        var buttonsCol = document.createElement('td');
        
        var cancelButton = document.createElement('button');

        // set element attributes
        requestRow.setAttribute('class','requestRow');
        requestContainer.setAttribute('class','requestContainer');


        RequestorName.setAttribute('class','RequestorName');
        requestTitle.setAttribute('class','requestTitle');
        requestCategory.setAttribute('class','requestCategory');
        requestDescription.setAttribute('class','requestDescription');
        requestExpectedPrice.setAttribute('class','requestExpectedPrice');
        isNegotiable.setAttribute('class','isNegotiable');
        datePosted.setAttribute('class','datePosted');
        dueDate.setAttribute('class','dueDate');
        requestStatus.setAttribute('class','requestStatus');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');

        infoCol.setAttribute('class','infoCol');
        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.innerText = "Cancel";

        // append elements
        infoCol.appendChild(RequestorName);
        infoCol.appendChild(requestTitle);
        infoCol.appendChild(requestCategory);
        infoCol.appendChild(requestExpectedPrice);
        infoCol.appendChild(isNegotiable);
        infoCol.appendChild(datePosted);
        infoCol.appendChild(dueDate);
        infoCol.appendChild(requestStatus);
        infoCol.appendChild(requestDescription);
        infoCol.appendChild(transactionStartDate);
        infoCol.appendChild(transactionStatus);

        //buttonsCol.appendChild(cancelButton);

        requestRow.appendChild(infoCol);
        requestRow.appendChild(buttonsCol);

        requestContainer.appendChild(requestRow);
        


        
        div.appendChild(requestContainer);



        


    }
} // end of function


function createCompletedAppliedRequestsElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        // create elements
        var requestRow = document.createElement('tr');
        var requestContainer = document.createElement('div');


        RequestorName = document.createElement('p');
        requestTitle = document.createElement('p');
        requestCategory = document.createElement('p');
        requestDescription= document.createElement('p');
        requestExpectedPrice= document.createElement('p');
        isNegotiable= document.createElement('p');
        datePosted= document.createElement('p');
        dueDate= document.createElement('p');
        requestStatus= document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionStatus= document.createElement('p');

        var infoCol = document.createElement('td');
        var buttonsCol = document.createElement('td');
        
        var cancelButton = document.createElement('button');
        var paybutton = document.createElement('button');
        // set element attributes
        requestRow.setAttribute('class','requestRow');
        requestContainer.setAttribute('class','requestContainer');


        RequestorName.setAttribute('class','RequestorName');
        requestTitle.setAttribute('class','requestTitle');
        requestCategory.setAttribute('class','requestCategory');
        requestDescription.setAttribute('class','requestDescription');
        requestExpectedPrice.setAttribute('class','requestExpectedPrice');
        isNegotiable.setAttribute('class','isNegotiable');
        datePosted.setAttribute('class','datePosted');
        dueDate.setAttribute('class','dueDate');
        requestStatus.setAttribute('class','requestStatus');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');

        infoCol.setAttribute('class','infoCol');
        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.innerText = "Cancel";
        paybutton.setAttribute('class','paybutton');

        // append elements
        infoCol.appendChild(RequestorName);
        infoCol.appendChild(requestTitle);
        infoCol.appendChild(requestCategory);
        infoCol.appendChild(requestExpectedPrice);
        infoCol.appendChild(isNegotiable);
        infoCol.appendChild(datePosted);
        infoCol.appendChild(dueDate);
        infoCol.appendChild(requestStatus);
        infoCol.appendChild(requestDescription);
        infoCol.appendChild(transactionStartDate);
        infoCol.appendChild(transactionStatus);

        buttonsCol.appendChild(paybutton);

        requestRow.appendChild(infoCol);
        requestRow.appendChild(buttonsCol);

        requestContainer.appendChild(requestRow);
        


        
        div.appendChild(requestContainer);



        


    }
} // end of function

// set data for no buttons

function setNoButtonServiceOrdersData(array){
    var dataArray = array;
    var number = dataArray.length;

            
    
            // about the transactions 
            transactionID= document.getElementsByClassName('transactionID');
            responderID= document.getElementsByClassName('responderID');
            ResponderName= document.getElementsByClassName('ResponderName');
            price= document.getElementsByClassName('price');
            rate= document.getElementsByClassName('rate');

            transactionStartDate= document.getElementsByClassName('transactionStartDate');
            transactionEndDate= document.getElementsByClassName('transactionEndDate');
            transactionStatus= document.getElementsByClassName('transactionStatus');
    
            buttonsCol= document.getElementsByClassName('buttonsCol');
            //cancelButton= document.getElementsByClassName('cancelButton');
            //AcceptButton= document.getElementsByClassName('AcceptButton');
            viewService = document.getElementsByClassName('viewService');
            additionalNotes = document.getElementsByClassName('additionalNotes');

    
            // about the service 
            serviceID= document.getElementsByClassName('serviceID');
            serviceCategory= document.getElementsByClassName('serviceCategory');
            servicePosition= document.getElementsByClassName('servicePosition');
            serviceStatus = document.getElementsByClassName('serviceStatus');

            for(var i=0; i<number;i++){
                transactionID[i].innerHTML = "<b>Transaction ID: </b>"+ dataArray[i]['transactionID'];
                responderID[i].innerHTML = "<b>Responder ID: </b>"+ dataArray[i]['responderID'];
                ResponderName[i].innerHTML = "<b>Responder Name: </b>"+ dataArray[i]['ResponderName'];
                price[i].innerHTML = "<b>Price: </b> Php "+ dataArray[i]['price'];
                rate[i].innerHTML = "<b>Responder Rate: </b> Php "+ dataArray[i]['rate'];
    
                transactionStartDate[i].innerHTML = "<b>Order Date: </b>"+ dataArray[i]['transactionStartDate'];
                transactionEndDate[i].innerHTML = "<b>Order Due Date: </b>"+ dataArray[i]['transactionEndDate'];
                transactionStatus[i].innerHTML = "<b>Order Status: </b>"+ dataArray[i]['transactionStatus'];
        
                viewService[i].setAttribute('onclick','callService('+i+')');
                //cancelButton[i].innerText = dataArray[i][''];
                //AcceptButton[i].innerText = dataArray[i][''];
                additionalNotes[i].innerHTML = "<b>Additional Notes: </b>"+dataArray[i]['additionalNotes'];
    
        
                // about the service 
                serviceID[i].innerHTML = "<b> Service ID: </b>"+ dataArray[i]['serviceID'];
                serviceCategory[i].innerHTML = "<b> Service Category: </b>"+ dataArray[i]['serviceCategory'];
                servicePosition[i].innerHTML = "<b> Service Type: </b>"+ dataArray[i]['servicePosition'];
                //AcceptButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'accepted')");
                serviceStatus[i].innerHTML = "<b> Service Status: </b>"+ dataArray[i]['serviceStatus'];

                //cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");
            }
    

}





// set requests data
function setNoButtonRequestsApplicationData(array){
    var dataArray = array;
    var number = dataArray.length;

    RequestorName = document.getElementsByClassName('RequestorName');
    requestTitle= document.getElementsByClassName('requestTitle');
    requestCategory= document.getElementsByClassName('requestCategory');
    requestDescription= document.getElementsByClassName('requestDescription');
    requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
    isNegotiable= document.getElementsByClassName('isNegotiable');
    datePosted= document.getElementsByClassName('datePosted');
    dueDate= document.getElementsByClassName('dueDate');
    requestStatus= document.getElementsByClassName('requestStatus');

    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');

    infoCol= document.getElementsByClassName('infoCol');
    buttonsCol= document.getElementsByClassName('buttonsCol');
    //cancelButton = document.getElementsByClassName('cancelButton');
    
    


    for(var i=0; i<number;i++){

        RequestorName[i].innerHTML = "<b> Responder Name: </b>"+dataArray[i]['ResponderName'];
        requestTitle[i].innerHTML = "<b> Title: </b>"+dataArray[i]['requestTitle'];
        requestCategory[i].innerHTML = "<b> Category:  </b>"+dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "<b> Description: </b>"+dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = "<b> Expected Price:  </b> Php "+dataArray[i]['requestExpectedPrice'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        datePosted[i].innerHTML = "<b> Date Posted: </b>"+dataArray[i]['datePosted'];
        dueDate[i].innerHTML = "<b> Due Date: </b>"+dataArray[i]['dueDate'];
        requestStatus[i].innerHTML = "<b> Request Status:  </b>"+dataArray[i]['requestStatus'];
    
        transactionStartDate[i].innerHTML = "<b>Application Date: </b>"+dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerHTML = "<b>Application Status: </b>"+dataArray[i]['transactionStatus'];
       // cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");
    
    }
    

}

// set requests data
function setCompletedRequestsApplicationData(array){
    var dataArray = array;
    var number = dataArray.length;

    RequestorName = document.getElementsByClassName('RequestorName');
    requestTitle= document.getElementsByClassName('requestTitle');
    requestCategory= document.getElementsByClassName('requestCategory');
    requestDescription= document.getElementsByClassName('requestDescription');
    requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
    isNegotiable= document.getElementsByClassName('isNegotiable');
    datePosted= document.getElementsByClassName('datePosted');
    dueDate= document.getElementsByClassName('dueDate');
    requestStatus= document.getElementsByClassName('requestStatus');

    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');

    infoCol= document.getElementsByClassName('infoCol');
    buttonsCol= document.getElementsByClassName('buttonsCol');
    paybutton = document.getElementsByClassName('paybutton');
    //cancelButton = document.getElementsByClassName('cancelButton');
    
    


    for(var i=0; i<number;i++){

        RequestorName[i].innerHTML = "<b> Responder Name: </b>"+dataArray[i]['ResponderName'];
        requestTitle[i].innerHTML = "<b> Title: </b>"+dataArray[i]['requestTitle'];
        requestCategory[i].innerHTML = "<b> Category:  </b>"+dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "<b> Description: </b>"+dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = "<b> Expected Price:  </b> Php "+dataArray[i]['requestExpectedPrice'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        datePosted[i].innerHTML = "<b> Date Posted: </b>"+dataArray[i]['datePosted'];
        dueDate[i].innerHTML = "<b> Due Date: </b>"+dataArray[i]['dueDate'];
        requestStatus[i].innerHTML = "<b> Request Status:  </b>"+dataArray[i]['requestStatus'];
    
        transactionStartDate[i].innerHTML = "<b>Application Date: </b>"+dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerHTML = "<b>Application Status: </b>"+dataArray[i]['transactionStatus'];
       // cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");
       if(dataArray[i]['transactionStatus'] === 'completed'){
        paybutton[i].innerText = "Pay";
        paybutton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'paid')");
       } else if (dataArray[i]['transactionStatus'] === 'paid'){
        paybutton[i].innerText = "waiting for payment confirmation";
        paybutton[i].style.display = "none";
        var text = document.createElement('b');
        text.innerText = "waiting for payment confirmation";
        buttonsCol[i].appendChild(text);
       }else if(dataArray[i]['transactionStatus'] === "payment confirmed" || dataArray[i]['transactionStatus'] === "responder feedback"){
        paybutton[i].innerText = "Give Feedback";
        paybutton[i].setAttribute('onclick','showFeedbackForm('+dataArray[i]['requestID']+','+dataArray[i]['responderID']+','+dataArray[i]['transactionID']+')');
       }else{
        paybutton[i].style.display = "none";

       }
    }
    

}




function setCompletedServiceOrdersData(array){
    var dataArray = array;
    var number = dataArray.length;

            
    
            // about the transactions 
            transactionID= document.getElementsByClassName('transactionID');
            responderID= document.getElementsByClassName('responderID');
            ResponderName= document.getElementsByClassName('ResponderName');
            price= document.getElementsByClassName('price');
            rate= document.getElementsByClassName('rate');
            

            transactionStartDate= document.getElementsByClassName('transactionStartDate');
            transactionEndDate= document.getElementsByClassName('transactionEndDate');
            transactionStatus= document.getElementsByClassName('transactionStatus');
            additionalNotes = document.getElementsByClassName('additionalNotes');
    
            buttonsCol= document.getElementsByClassName('buttonsCol');
            //cancelButton= document.getElementsByClassName('cancelButton');
            paybutton= document.getElementsByClassName('paybutton');
            viewService = document.getElementsByClassName('viewService');

    
            // about the service 
            serviceID= document.getElementsByClassName('serviceID');
            serviceCategory= document.getElementsByClassName('serviceCategory');
            servicePosition= document.getElementsByClassName('servicePosition');
            serviceStatus = document.getElementsByClassName('serviceStatus');

            for(var i=0; i<number;i++){
                transactionID[i].innerHTML = "<b>Transaction ID: </b>"+ dataArray[i]['transactionID'];
                responderID[i].innerHTML = "<b>Responder ID: </b>"+ dataArray[i]['responderID'];
                ResponderName[i].innerHTML = "<b>Responder Name: </b>"+ dataArray[i]['ResponderName'];
                price[i].innerHTML = "<b>Price: </b> Php "+ dataArray[i]['price'];
                rate[i].innerHTML = "<b>Responder Rate: </b> Php "+ dataArray[i]['rate'];
    
                transactionStartDate[i].innerHTML = "<b>Order Date: </b>"+ dataArray[i]['transactionStartDate'];
                transactionEndDate[i].innerHTML = "<b>Order Due Date: </b>"+ dataArray[i]['transactionEndDate'];
                transactionStatus[i].innerHTML = "<b>Order Status: </b>"+ dataArray[i]['transactionStatus'];
        
                viewService[i].setAttribute('onclick','callService('+i+')');
                //cancelButton[i].innerText = dataArray[i][''];
                //AcceptButton[i].innerText = dataArray[i][''];
    
                additionalNotes[i].innerHTML = "<b> Additional Notes: </b>"+dataArray[i]['additionalNotes']
        
                // about the service 
                serviceID[i].innerHTML = "<b> Service ID: </b>"+ dataArray[i]['serviceID'];
                serviceCategory[i].innerHTML = "<b> Service Category: </b>"+ dataArray[i]['serviceCategory'];
                servicePosition[i].innerHTML = "<b> Service Type: </b>"+ dataArray[i]['servicePosition'];
                //AcceptButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'accepted')");
                serviceStatus[i].innerHTML = "<b> Service Status: </b>"+ dataArray[i]['serviceStatus'];

                //cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");
                if(dataArray[i]['transactionStatus'] === "completed"){
                    paybutton[i].innerText = "Pay";
                    paybutton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'paid')");

                } else if(dataArray[i]['transactionStatus'] === "paid"){
                    paybutton[i].innerText = "Waiting for payment confirmation";
                    paybutton[i].style.display = "none";
                    var text = document.createElement('b');
                    text.innerHTML = "Waiting for payment confirmation";
                    buttonsCol[i].appendChild(text);

                } else if(dataArray[i]['transactionStatus'] === "payment confirmed" || dataArray[i]['transactionStatus'] === "responder feedback"){
                    paybutton[i].innerText = "Give Feedback";
                    paybutton[i].setAttribute('onclick','showServiceFeedbackForm('+dataArray[i]['serviceID']+','+dataArray[i]['responderID']+','+dataArray[i]['transactionID']+')');
                }else{
                    paybutton[i].style.display = "none";
            
                }
            
            }
    

}
//--- create elements without buttons --------------------------------------------------------------------------------

function createNoAcceptAppliedRequestsElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        // create elements
        var requestRow = document.createElement('tr');
        var requestContainer = document.createElement('div');


        RequestorName = document.createElement('p');
        requestTitle = document.createElement('p');
        requestCategory = document.createElement('p');
        requestDescription= document.createElement('p');
        requestExpectedPrice= document.createElement('p');
        isNegotiable= document.createElement('p');
        datePosted= document.createElement('p');
        dueDate= document.createElement('p');
        requestStatus= document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionStatus= document.createElement('p');

        var infoCol = document.createElement('td');
        var buttonsCol = document.createElement('td');
        
        var cancelButton = document.createElement('button');

        // set element attributes
        requestRow.setAttribute('class','requestRow');
        requestContainer.setAttribute('class','requestContainer');


        RequestorName.setAttribute('class','RequestorName');
        requestTitle.setAttribute('class','requestTitle');
        requestCategory.setAttribute('class','requestCategory');
        requestDescription.setAttribute('class','requestDescription');
        requestExpectedPrice.setAttribute('class','requestExpectedPrice');
        isNegotiable.setAttribute('class','isNegotiable');
        datePosted.setAttribute('class','datePosted');
        dueDate.setAttribute('class','dueDate');
        requestStatus.setAttribute('class','requestStatus');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');

        infoCol.setAttribute('class','infoCol');
        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.innerText = "Cancel";

        // append elements
        infoCol.appendChild(RequestorName);
        infoCol.appendChild(requestTitle);
        infoCol.appendChild(requestCategory);
        infoCol.appendChild(requestExpectedPrice);
        infoCol.appendChild(isNegotiable);
        infoCol.appendChild(datePosted);
        infoCol.appendChild(dueDate);
        infoCol.appendChild(requestStatus);
        infoCol.appendChild(requestDescription);
        infoCol.appendChild(transactionStartDate);
        infoCol.appendChild(transactionStatus);

        //buttonsCol.appendChild(cancelButton);

        requestRow.appendChild(infoCol);
        requestRow.appendChild(buttonsCol);

        requestContainer.appendChild(requestRow);
        


        
        div.appendChild(requestContainer);



        


    }
} // end of function


// create elements for accepted request applications
function createAcceptedRequestsElements(number){

    var number = number;
    var div = document.getElementById('requestsOrdersContent');

    for(var i = 0; i<number; i++){
        // create elements
        var requestRow = document.createElement('tr');
        var requestContainer = document.createElement('div');


        RequestorName = document.createElement('p');
        requestTitle = document.createElement('p');
        requestCategory = document.createElement('p');
        requestDescription= document.createElement('p');
        requestExpectedPrice= document.createElement('p');
        isNegotiable= document.createElement('p');
        datePosted= document.createElement('p');
        dueDate= document.createElement('p');
        requestStatus= document.createElement('p');

        transactionStartDate= document.createElement('p');
        transactionStatus= document.createElement('p');

        var infoCol = document.createElement('td');
        var buttonsCol = document.createElement('td');
        
        var cancelButton = document.createElement('button');

        // set element attributes
        requestRow.setAttribute('class','requestRow');
        requestContainer.setAttribute('class','requestContainer');


        RequestorName.setAttribute('class','RequestorName');
        requestTitle.setAttribute('class','requestTitle');
        requestCategory.setAttribute('class','requestCategory');
        requestDescription.setAttribute('class','requestDescription');
        requestExpectedPrice.setAttribute('class','requestExpectedPrice');
        isNegotiable.setAttribute('class','isNegotiable');
        datePosted.setAttribute('class','datePosted');
        dueDate.setAttribute('class','dueDate');
        requestStatus.setAttribute('class','requestStatus');

        transactionStartDate.setAttribute('class','transactionStartDate');
        transactionStatus.setAttribute('class','transactionStatus');

        infoCol.setAttribute('class','infoCol');
        buttonsCol.setAttribute('class','buttonsCol');
        cancelButton.setAttribute('class','cancelButton');
        cancelButton.innerText = "Cancel";

        // append elements
        infoCol.appendChild(RequestorName);
        infoCol.appendChild(requestTitle);
        infoCol.appendChild(requestCategory);
        infoCol.appendChild(requestExpectedPrice);
        infoCol.appendChild(isNegotiable);
        infoCol.appendChild(datePosted);
        infoCol.appendChild(dueDate);
        infoCol.appendChild(requestStatus);
        infoCol.appendChild(requestDescription);
        infoCol.appendChild(transactionStartDate);
        infoCol.appendChild(transactionStatus);

        buttonsCol.appendChild(cancelButton);

        requestRow.appendChild(infoCol);
        requestRow.appendChild(buttonsCol);

        requestContainer.appendChild(requestRow);
        


        
        div.appendChild(requestContainer);



        


    }
} // end of function

// set request application data
// set requests data
function setAcceptedApplicationData(array){
    var dataArray = array;
    var number = dataArray.length;

    RequestorName = document.getElementsByClassName('RequestorName');
    requestTitle= document.getElementsByClassName('requestTitle');
    requestCategory= document.getElementsByClassName('requestCategory');
    requestDescription= document.getElementsByClassName('requestDescription');
    requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
    isNegotiable= document.getElementsByClassName('isNegotiable');
    datePosted= document.getElementsByClassName('datePosted');
    dueDate= document.getElementsByClassName('dueDate');
    requestStatus= document.getElementsByClassName('requestStatus');

    transactionStartDate= document.getElementsByClassName('transactionStartDate');
    transactionStatus= document.getElementsByClassName('transactionStatus');

    infoCol= document.getElementsByClassName('infoCol');
    buttonsCol= document.getElementsByClassName('buttonsCol');
    cancelButton = document.getElementsByClassName('cancelButton');
    
    


    for(var i=0; i<number;i++){

        RequestorName[i].innerHTML = "<b> Responder Name: </b>"+dataArray[i]['ResponderName'];
        requestTitle[i].innerHTML = "<b> Title: </b>"+dataArray[i]['requestTitle'];
        requestCategory[i].innerHTML = "<b> Category:  </b>"+dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "<b> Description: </b>"+dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = "<b> Expected Price:  </b> Php "+dataArray[i]['requestExpectedPrice'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        datePosted[i].innerHTML = "<b> Date Posted: </b>"+dataArray[i]['datePosted'];
        dueDate[i].innerHTML = "<b> Due Date: </b>"+dataArray[i]['dueDate'];
        requestStatus[i].innerHTML = "<b> Request Status:  </b>"+dataArray[i]['requestStatus'];
    
        transactionStartDate[i].innerHTML = "<b>Application Date: </b>"+dataArray[i]['transactionStartDate'];
        transactionStatus[i].innerHTML = "<b>Application Status: </b>"+dataArray[i]['transactionStatus'];
        cancelButton[i].setAttribute('onclick','updateRequestApplication('+dataArray[i]['transactionID']+",'cancelled')");
    
    }
    

}

//create completed service elements


// for giving feedbacks ----------------------------------------------------------------------------------------
function showFeedbackForm(requestID,userID,transactionID){
    var requestID = requestID;
    var userID = userID;
    var transactionID = transactionID;

    document.getElementById('requestFeedBackFormBackground').style.display="block";
    var revieweeID = document.getElementById('revieweeID');
    var requestIDInput= document.getElementById('requestID');
    var transaction= document.getElementById('transactionID');

    revieweeID.value= userID; 
    requestIDInput.value = requestID;
    transaction.value = transactionID;

}


function showServiceFeedbackForm(serviceID,userID,transactionID){
    var serviceID = serviceID;
    var userID = userID;
    var transactionID = transactionID;

    document.getElementById('serviceFeedBackFormBackground').style.display="block";
    var revieweeID = document.getElementById('serviceRevieweeID');
    var serviceIDInput= document.getElementById('serviceID');
    var transaction= document.getElementById('serviceTransactionID');

    revieweeID.value= userID; 
    serviceIDInput.value = serviceID;
    transaction.value = transactionID;

}

function closeFeedbackForm(){
    document.getElementById('requestFeedBackFormBackground').style.display="none";
    document.getElementById('serviceFeedBackFormBackground').style.display="none";
    document.getElementById('updatePriceFormBackground').style.display = "none";
}

// show update price for negotiations

function negotiatePrice(transactionID){
    transactionID = transactionID;
    var transactionIDInput = document.getElementById('transactionIDInput');
    transactionIDInput.value = transactionID;

    var updatePriceFormBackground= document.getElementById('updatePriceFormBackground');
    updatePriceFormBackground.style.display="block";
}

// update price 
function savePrice(){
    var transactionID = document.getElementById('transactionIDInput').value;
    var updatePrice = document.getElementById('updatePrice').value;
    var query = "transactionID=" + transactionID+"&updatePrice="+updatePrice;
    console.log(query);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateTransactionPrice.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            closeFeedbackForm();
            
            userID = sessionStorage.getItem('myID');
            getRequestApplications(userID);

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function