
/*show and hide forms */

function showUpdateRequest(){
    var popUpBack = document.getElementById("popUpBack");
    var UpdateRequests_Container = document.getElementById("UpdateForm");
    UpdateRequests_Container.style.display = "block";
    popUpBack.style.display="grid";

}

function hideUpdateRequest(){
    var UpdateRequests_Container = document.getElementById("UpdateForm");
    UpdateRequests_Container.style.display = "none";
    showViewRequest();

}


function showViewRequest(){
    var popUpBack = document.getElementById("popUpBack");
    var ViewRequests_Container = document.getElementById("ViewRequest-Form");
    ViewRequests_Container.style.display = "block";
    popUpBack.style.display="grid";
}

function hideViewRequest(){
    var ViewRequests_Container = document.getElementById("ViewRequest-Form");
    ViewRequests_Container.style.display = "none";
}


function createElements(number){
    var number = number;

    var div = document.getElementById('RequestsContainer-Content');



    
    for(var i=0; i<number; i++){

        
        var requestTitle= document.createElement('div');
        var requestCategory= document.createElement('div');
        var requestDescription= document.createElement('div');
        var requestExpectedPrice= document.createElement('div');
        var isNegotiable= document.createElement('div');
        var dueDateValue= document.createElement('div');
        var request_card__image= document.createElement('div');
        var one_third= document.createElement('div');
        var no_border= document.createElement('div');
        var dueDateValue= document.createElement('div');
        var request_card__unit_stats= document.createElement('div');
        var request_card= document.createElement('div');
        var wrapper= document.createElement('div');
        var dueDate= document.createElement('div');

         
         requestTitle.setAttribute('class','requestTitle');
         requestCategory.setAttribute('class','requestCategory');
         requestDescription.setAttribute('class','requestDescription');
         requestExpectedPrice.setAttribute('class','requestExpectedPrice');
         isNegotiable.setAttribute('class','isNegotiable');
         dueDateValue.setAttribute('class','dueDateValue');
         dueDate.setAttribute('class','dueDate');
         request_card__image.setAttribute('class','request-card__image');
         one_third.setAttribute('class','one-third');
         no_border.setAttribute('class','no-border');
         request_card__unit_stats.setAttribute('class','request-card__unit-stats' );
         request_card.setAttribute('class','request-card');
         wrapper.setAttribute('class','wrapper');
        

         request_card__image.appendChild(requestTitle);
         request_card__image.appendChild(requestCategory);

         one_third.appendChild(requestExpectedPrice);
         one_third.appendChild(isNegotiable);
         no_border.appendChild(dueDateValue);
         no_border.appendChild(dueDate);

         request_card__unit_stats.appendChild(one_third);
         request_card__unit_stats.appendChild(no_border);

         request_card.appendChild(request_card__image);
         request_card.appendChild(requestDescription);
         request_card.appendChild(request_card__unit_stats);

         wrapper.appendChild(request_card);
         
        div.appendChild(wrapper);

        

    }

}


function setData(array){

    var dataArray = array;
    var number = dataArray.length;
    var today = sessionStorage.getItem('today');
    today = new Date(today);

    
    
    wrapper = document.getElementsByClassName('wrapper');
    myRequestCard = document.getElementsByClassName('request-card');
    
    requestTitle = document.getElementsByClassName('requestTitle');
    requestCategory = document.getElementsByClassName('requestCategory');
    requestDescription = document.getElementsByClassName('requestDescription');
    requestExpectedPrice = document.getElementsByClassName('requestExpectedPrice');
    isNegotiable = document.getElementsByClassName('isNegotiable');
    dueDateValue = document.getElementsByClassName('dueDateValue');
    dueDate = document.getElementsByClassName('dueDate');
    
        for(var i = 0; i< number; i++){
    
            requestTitle[i].innerText= dataArray[i]['requestTitle'];
            requestCategory[i].innerText= dataArray[i]['requestCategory'];
            requestDescription[i].innerText= dataArray[i]['requestDescription'];
            requestExpectedPrice[i].innerText= '₱' + dataArray[i]['requestExpectedPrice'];
            isNegotiable[i].innerText= dataArray[i]['isNegotiable'];
            dueDateValue[i].innerText= dataArray[i]['dueDate'];
            dueDate[i].innerText='due date';
            myRequestCard[i].setAttribute("onclick","viewRequest("+dataArray[i]['requestID']+")");

            if(dataArray[i]['requestStatus'] === "Delisted"){
                requestCategory[i].innerHTML = "<b>"+requestCategory[i].innerText+" </b> <br/> <span style='font-size:small; color:darkred;'> " + dataArray[i]['requestStatus'] + "</span>";

            }else if(dataArray[i]['requestStatus'] === "Completed"){
                requestCategory[i].innerHTML = "<b>"+requestCategory[i].innerText+" </b> <br/> <span style='font-size:small;  color:Yellow;'> " + dataArray[i]['requestStatus'] + "</span>";

            }else{
                requestCategory[i].innerHTML = "<b>"+requestCategory[i].innerText+" </b> <br/> <span style='font-size:small'> " + dataArray[i]['requestStatus'] + "</span>";
            }
            var arrayDueDate = new Date(dataArray[i]['dueDate']);

            if(arrayDueDate < today){
                // is in the past
                dueDateValue[i].style.color="#8B0000";
            }else{
                // present-future
                //dueDateValue[i].style.color="#808000";

            }

        }
    
    }



function getMyRequests(userID){
    var userID = userID;
    var query = "userID=" + userID;
    var xmlhttp = new XMLHttpRequest();

    console.log(query);

    xmlhttp.open("POST", "Backend/Get_myRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('RequestsContainer-Content');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerText = "No Requests Created yet";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createElements(number)
                setData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// set update form


function viewRequest(requestID){
    var requestID = requestID;
    var query = "requestID=" + requestID;
    var xmlhttp = new XMLHttpRequest();

    console.log(query);

    xmlhttp.open("POST", "Backend/Get_requestInfo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);
                alert("This Request has already been cancelled or completed");

            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setViewData(dataArray);
 
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

}


function setViewData(dataArray){
    var dataArray = dataArray;


 
    document.getElementById('UpdateFormRequestID').innerText = dataArray[0]['requestID'];
    document.getElementById("viewTitle").innerText = dataArray[0]['requestTitle'];
    document.getElementById("viewDueDate").innerText = dataArray[0]['dueDate'];
    document.getElementById("viewPrice").innerText= dataArray[0]['requestExpectedPrice'];
    document.getElementById("viewNegotiable").innerText = dataArray[0]['isNegotiable'];
    document.getElementById("viewDescription").innerText = dataArray[0]['requestDescription'];
    document.getElementById("viewControlsEditButton").setAttribute("onclick","updateForm(" + dataArray[0]['requestID'] +")");


    //openForms();
    showViewRequest();
    //console.log(requestID,title,dueDate,price,isNegotiable,Description,requestStatus);

   

}




// get data from backend based on id
function updateForm(requestID){
    var requestID = requestID;
    var query = "requestID=" + requestID;
    var xmlhttp = new XMLHttpRequest();

    console.log(query);

    xmlhttp.open("POST", "Backend/Get_requestInfo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);

            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setUpdateData(dataArray);
 
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);

}


function setUpdateData(dataArray){
    var dataArray = dataArray;

    document.getElementById('UpdateFormRequestID').value = dataArray[0]['requestID'];
    document.getElementById("updateTitle").value = dataArray[0]['requestTitle'];
    document.getElementById("updateDueDate").value = dataArray[0]['dueDate'];
    document.getElementById("updatePrice").value = dataArray[0]['requestExpectedPrice'];
    document.getElementById("updateNegotiable").value = dataArray[0]['isNegotiable'];
    document.getElementById("updateDescription").value = dataArray[0]['requestDescription'];
    
    showUpdateRequest();
    hideViewRequest();
}


function closeForms(){
    popUpBack = document.getElementById('popUpBack');
    popUpBack.style.display="none";
}






// update status
function delistRequest(requestID){
    var requestID = requestID;
    var query = "requestID=" + requestID +"&status=Delisted";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
        
            var dataArray = this.response;
            console.log(dataArray);

            
            var userID = sessionStorage.getItem('myID');
            getMyServices(userID)
            

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


function activeRequest(requestID){
    var requestID = requestID;
    var query = "requestID=" + requestID +"&status=Active";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
        
            var dataArray = this.response;
            console.log(dataArray);

            var userID = sessionStorage.getItem('myID');
            getMyServices(userID)

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function