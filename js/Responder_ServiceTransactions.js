
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

    TransactionsNavItem1.style = "background-Color:white; color:black; ";
    TransactionsNavItem2.style = "background-Color:white; color:black; ";
    TransactionsNavItem3.style = "background-Color:white; color:black; ";
    TransactionsNavItem4.style = "background-Color:white; color:black; ";
    TransactionsNavItem5.style = "background-Color:white; color:black; ";
    TransactionsNavItem6.style = "background-Color:white; color:black; ";

    TransactionsNavItems[number].style = "background-Color:orangered; color:white; ";

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






// get pending orders 

function getOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
                div.innerText = " No Transaction ";


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

function  getAcceptedOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray); 
                div.innerText = " No Transaction ";

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

function  getDeliveredService(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);
                div.innerText = " No Transaction ";


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

function getPaidOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                div.innerText = " No Transaction ";

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

function getFinishedService(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray);
                div.innerText = " No Transaction ";


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


function getCancelledOrders(userID){
    var userID = userID;
    var query = "userID=" + userID +"&TransactionType=Service&column=responderID";
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('TransactionsContainerBody');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                console.log(dataArray); 
                div.innerText = " No Transaction ";

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



/* --------------------------------------------------------------------------------------- */

function createElements(number){

    var Body = document.getElementById("TransactionsContainerBody");
    var DataNumber = number;


    for(var i = 0;i<DataNumber;i++){

  


        div = document.createElement('div');
       
       
        
        

        // parent
        grid_header = document.createElement('div');

        //children
        transactionID = document.createElement('div');
        serviceInfo = document.createElement('div');
        serviceStatus = document.createElement('div');


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
        serviceInfo.setAttribute('class','serviceTitle');
        serviceStatus.setAttribute('class','serviceStatus');
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
        grid_header.appendChild(serviceInfo);
        grid_header.appendChild(serviceStatus);



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

function SetData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



  
    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    serviceInfo= document.getElementsByClassName('serviceTitle');
    serviceStatus= document.getElementsByClassName('serviceStatus');
 
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
        image.src = dataArray[i]['RequestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        serviceInfo[i].innerHTML = "<b>" + dataArray[i]['serviceCategory'] + "</b> :" + dataArray[i]['servicePosition'];
        serviceStatus[i].innerText = dataArray[i]['transactionStatus'];




        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        Description[i].innerText = dataArray[i]['additionalNotes'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");





        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "";
        //dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];
        dateAccomplished[i].innerHTML = "Due date: "+dataArray[i]['dueDate'] + "<br/> Schedule: " + dataArray[i]['timeSlot'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          serviceInfo[i].className += " header-item";
          serviceStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          serviceInfo[i].setAttribute("id","requestTitle");
          serviceStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");

        //controlsTd[i].innerText = dataArray[i]['dueDate'];

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
        serviceIDParam = dataArray[i]["serviceID"];
        requestID = null;
        transactionType = "service";
 
        // check if report to the service exists and generate button for reporting
        checkReports(myID,reportedID,serviceIDParam,requestID,transactionType,i,dataArray);

    }

}


// for finished services
function SetFinishedData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;



  
    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    serviceInfo= document.getElementsByClassName('serviceTitle');
    serviceStatus= document.getElementsByClassName('serviceStatus');
 
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
        image.src = dataArray[i]['RequestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        serviceInfo[i].innerHTML = "<b>" + dataArray[i]['serviceCategory'] + "</b> :" + dataArray[i]['servicePosition'];
        serviceStatus[i].innerText = dataArray[i]['transactionStatus'];




        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        Description[i].innerText = dataArray[i]['additionalNotes'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");





        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "";
        //dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];
        dateAccomplished[i].innerHTML = "Due date: "+dataArray[i]['dueDate'] + "<br/> Schedule: " + dataArray[i]['timeSlot'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          serviceInfo[i].className += " header-item";
          serviceStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          serviceInfo[i].setAttribute("id","requestTitle");
          serviceStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");

        //controlsTd[i].innerText = dataArray[i]['dueDate'];

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

function SetOrdersData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;




    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    serviceInfo= document.getElementsByClassName('serviceTitle');
    serviceStatus= document.getElementsByClassName('serviceStatus');
 
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
        image.src = dataArray[i]['RequestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        serviceInfo[i].innerHTML = "<b>" + dataArray[i]['serviceCategory'] + "</b> :" + dataArray[i]['servicePosition'];
        serviceStatus[i].innerText = dataArray[i]['transactionStatus'];




        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        Description[i].innerText = dataArray[i]['additionalNotes'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");





        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "";
        //dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];
        dateAccomplished[i].innerHTML = "Due date: "+dataArray[i]['dueDate'] + "<br/> Schedule: " + dataArray[i]['timeSlot'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          serviceInfo[i].className += " header-item";
          serviceStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          serviceInfo[i].setAttribute("id","requestTitle");
          serviceStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");



        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "Accept";

        button.setAttribute('onclick',"acceptServiceOrder(" +dataArray[i]['transactionID'] + ",'accepted')" );
        actionsDiv[i].appendChild(button);


    
        var button1 = document.createElement('button');
        button1.setAttribute('class','Button red');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );

        actionsDiv[i].appendChild(button1);



    }

}


function SetAcceptedData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;





    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    serviceInfo= document.getElementsByClassName('serviceTitle');
    serviceStatus= document.getElementsByClassName('serviceStatus');
 
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
        image.src = dataArray[i]['RequestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        serviceInfo[i].innerHTML = "<b>" + dataArray[i]['serviceCategory'] + "</b> :" + dataArray[i]['servicePosition'];
        serviceStatus[i].innerText = dataArray[i]['transactionStatus'];




        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        Description[i].innerText = dataArray[i]['additionalNotes'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");





        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "";
        //dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];
        dateAccomplished[i].innerHTML = "Due date: "+dataArray[i]['dueDate'] + "<br/> Schedule: " + dataArray[i]['timeSlot'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          serviceInfo[i].className += " header-item";
          serviceStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          serviceInfo[i].setAttribute("id","requestTitle");
          serviceStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");


        //deliverServiceOrder

        var button = document.createElement('button');
        button.setAttribute('class','Button');
        button.innerText = "Deliver";

        button.setAttribute('onclick',"deliverServiceOrder(" +dataArray[i]['transactionID'] + ",'delivered')" );
        actionsDiv[i].appendChild(button);
    

        var button1 = document.createElement('button');
        button1.setAttribute('class','Button red');
        button1.innerText = "Cancel";
        button1.setAttribute('onclick',"cancelServiceOrder(" +dataArray[i]['transactionID'] + ",'cancelled')" );
        actionsDiv[i].appendChild(button1);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
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



    transaction_item = document.getElementsByClassName('transaction-item');
    transactionID= document.getElementsByClassName('requestID');
    serviceInfo= document.getElementsByClassName('serviceTitle');
    serviceStatus= document.getElementsByClassName('serviceStatus');
 
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
        image.src = dataArray[i]['RequestorPhoto'];
        image.setAttribute('class','responderProfileTransaction');

        // set data
        transactionID[i].innerText = dataArray[i]['transactionID'];
        serviceInfo[i].innerHTML = "<b>" + dataArray[i]['serviceCategory'] + "</b> :" + dataArray[i]['servicePosition'];
        serviceStatus[i].innerText = dataArray[i]['transactionStatus'];




        //set data
        responderImageDiv[i].appendChild(image);
        responderNameDiv[i].innerHTML = dataArray[i]['RequestorName'];
        responderEmailDiv[i].innerHTML = dataArray[i]['RequestorUserEmail'];


        //item2[i].innerHTML = "<a href='ViewUserProfile.php?userID=" +dataArray[i]['responderID']+"&userType=Responder'>"+ item2[i].innerHTML +"</a>";


        item2[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID=" +dataArray[i]['requestorID'] + "&userType=Requestor')");
       
        // set data
        Description[i].innerText = dataArray[i]['additionalNotes'];
        Description[i].setAttribute('onclick',"setTextViewer('" + dataArray[i]['additionalNotes'] + "')");





        // set data
        Price[i].innerText = "Php " + dataArray[i]['price'];
        Contract[i].innerHTML = "<a href='TransactionContract.php?ID=" + dataArray[i]['transactionID'] +"'/> Contract </a>";
     

        //set data
        
        // datePosted[i].innerHTML = dataArray[i]['transactionStartDate'] +" <br/>TimeSlot: " + dataArray[i]['timeSlot'];
        datePosted[i].innerText = "";
        //dateAccomplished[i].innerText = "Due date: "+dataArray[i]['dueDate'];
        dateAccomplished[i].innerHTML = "Due date: "+dataArray[i]['dueDate'] + "<br/> Schedule: " + dataArray[i]['timeSlot'];


        
          //add style class
          transaction_item[i].className += " grid-container2";
          transactionID[i].className += " header-item";
          serviceInfo[i].className += " header-item";
          serviceStatus[i].className += " header-item";
  
          //add style class
          transactionDates[i].className += " footer-item";
          sendMessageDiv[i].className += " footer-item";
          actionsDiv[i].className += " footer-item";

          //add style id

          transactionID[i].setAttribute("id","requestID");
          serviceInfo[i].setAttribute("id","requestTitle");
          serviceStatus[i].setAttribute("id","requestStatus");

          responderImageDiv[i].setAttribute("id","imgContainer")
          responderNameDiv[i].setAttribute("id","responderName");
          responderEmailDiv[i].setAttribute("id","responderEmail");

          item3[i].setAttribute("id","requestDescription")
          item4[i].setAttribute("id","requestPrice")

          transactionDates[i].setAttribute("id","requestDate");
          sendMessageDiv[i].setAttribute("id","sendMessageButton");
          actionsDiv[i].setAttribute("id","actionButton");


         var button = document.createElement('button');
          button.setAttribute('class','Button');
          button.innerText = "View Payment File";
          button.setAttribute('onclick',"showPhoto('" +dataArray[i]['paymentFile'] + "')");
          
          actionsDiv[i].appendChild(button);

        var button1 = document.createElement('button');
        button1.setAttribute('class','Button');
        button1.innerText = "Confirm Payment";
        //confirmPaymentServiceOrder
        button1.setAttribute('onclick',"confirmPaymentServiceOrder(" +dataArray[i]['transactionID'] + ",'completed')" );

        actionsDiv[i].appendChild(button1);

        myID = sessionStorage.getItem("userID");
        reportedID = dataArray[i]["requestorID"];
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
    alert("Order Accepted");


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
    alert("Order Accepted");
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


function cancelServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);
    alert("Order Canceled");
    

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
    alert("Order Canceled");

    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function



function deliverServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);
    alert("Order Delivered");


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            //alert("Order Delivered");


            transactionsUserId = sessionStorage.getItem("transactionsUserId");
            getAcceptedOrders(transactionsUserId);
 
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    alert("Order Delivered");
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


function confirmPaymentServiceOrder(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);
    alert("Payment Confirmed");


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
    
    alert("Payment Confirmed");
    xmlhttp.send(query);
    
    //var myID = sessionStorage.getItem('myID');
    //getRequestApplications(myID);
    
}// end of function


/* update Requests  */

function confirmPaymentRequest(transactionID,update){
    var transactionID = transactionID;
    var update = update;
    var query = "transactionID=" + transactionID+"&update="+update;
    console.log(query);
    alert("Payment Confirmed");


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestTransaction.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            console.log(dataArray);
            //alert("Payment Confirmed");

            

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
                    button1.setAttribute('class','Button');
                    button1.innerText = "Reported";
                    button1.disabled = true;
                    button1.style.backgroundColor = "gray";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["requestorID"] +","+dataArray[rowNum]["serviceID"]+",'service','requestor')");
                    controlsTd[rowNum].appendChild(button1);
                    
        
                } else{
        
                    var button1 = document.createElement('button');
                    button1.setAttribute('class','Button red');
                    button1.innerText = "Report";
                    button1.setAttribute("onclick","showReportForm(" +dataArray[rowNum]["requestorID"] +","+dataArray[rowNum]["serviceID"]+",'service','requestor')");
                    controlsTd[rowNum].appendChild(button1);
                   
                }

                    

            
            }else{
                console.log(err);
            
            }      
        
       
        };
     
    

        xmlhttp.send(query);
    
  

}



// functions 


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
    var text = text;
    var textContainer = document.getElementById("textContainer");
    var TextViewerBackground = document.getElementById('TextViewerBackground');

    textContainer.innerText= text;
    TextViewerBackground.style.display = "grid";
}

function redirect(url){
    var url = url;
    window.location.replace(url);
}