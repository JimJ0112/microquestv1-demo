
/*show and hide forms */

function showUpdateRequest(){
    var UpdateRequests_Container = document.getElementById("UpdateRequests-Container");
    UpdateRequests_Container.style.display = "block";
}

function hideUpdateRequest(){
    var UpdateRequests_Container = document.getElementById("UpdateRequests-Container");
    UpdateRequests_Container.style.display = "none";
}

function showViewRequest(){
    var ViewRequests_Container = document.getElementById("ViewRequests-Container");
    ViewRequests_Container.style.display = "block";
}

function hideViewRequest(){
    var ViewRequests_Container = document.getElementById("ViewRequests-Container");
    ViewRequests_Container.style.display = "none";
}



/* Fetching data and appending data elements */
// create elements for data
function createElements(number){
    var number = number;

    var div = document.getElementById('RequestsContainer-Content');



    
    for(var i=0; i<number; i++){

        var requestCard = document.createElement('div');
        var RequestInfoList = document.createElement('ul');
        var datePosted = document.createElement('li');
        var dueDate= document.createElement('li');
        var isNegotiable= document.createElement('li');
        var requestCategory= document.createElement('li');
        var requestDescription= document.createElement('li');
        var requestExpectedPrice= document.createElement('li');
        var requestID= document.createElement('li');
        var requestStatus= document.createElement('li');
        var requestTitle= document.createElement('li');
      
        
        var requestcardfooter = document.createElement('footer');
        var ReviewButton = document.createElement('button');
        var UpdateButton = document.createElement('button');
        var br = document.createElement('br');

        requestCard.setAttribute('class','requestCard');
        RequestInfoList.setAttribute('class','RequestInfoList');



         datePosted.setAttribute('class','datePosted');
         dueDate.setAttribute('class','dueDate');
         isNegotiable.setAttribute('class','isNegotiable');
         requestCategory.setAttribute('class','requestCategory');
         requestDescription.setAttribute('class','requestDescription');
         requestExpectedPrice.setAttribute('class','requestExpectedPrice');
         requestID.setAttribute('class','requestID');
         requestStatus.setAttribute('class','requestStatus');
         requestTitle.setAttribute('class','requestTitle');
         requestcardfooter.setAttribute('class','requestcard-footer')
        
        
         ReviewButton.setAttribute('class','ReviewButton');
         UpdateButton.setAttribute('class','UpdateButton');

         ReviewButton.innerText="View";
         UpdateButton.innerText="Update";

         requestcardfooter.appendChild(ReviewButton);
         requestcardfooter.appendChild(UpdateButton);

         RequestInfoList.appendChild(requestID);
         RequestInfoList.appendChild(requestTitle);
         RequestInfoList.appendChild(requestDescription);
         RequestInfoList.appendChild(requestCategory);
         RequestInfoList.appendChild(requestExpectedPrice);
         RequestInfoList.appendChild(isNegotiable);
         RequestInfoList.appendChild(datePosted);
         RequestInfoList.appendChild(dueDate);
        
         RequestInfoList.appendChild(requestStatus);
         

         requestCard.appendChild(RequestInfoList);
         requestCard.appendChild(requestcardfooter);


         div.appendChild(requestCard);


    }

}

// set positions data 
function setData(array){

var dataArray = array;
var number = dataArray.length;


myRequestCard = document.getElementsByClassName('requestCard');


datePosted= document.getElementsByClassName('datePosted');
dueDate= document.getElementsByClassName('dueDate');
isNegotiable= document.getElementsByClassName('isNegotiable');
requestCategory= document.getElementsByClassName('requestCategory');
requestDescription= document.getElementsByClassName('requestDescription');
requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
requestID= document.getElementsByClassName('requestID');
requestStatus= document.getElementsByClassName('requestStatus');
requestTitle= document.getElementsByClassName('requestTitle');


ReviewButton= document.getElementsByClassName('ReviewButton');
UpdateButton= document.getElementsByClassName('UpdateButton');


    for(var i = 0; i< number; i++){


        datePosted[i].innerHTML = "<b> Date Posted: </b>"+dataArray[i]['datePosted'];
        dueDate[i].innerHTML = "<b> Due Date: </b>"+dataArray[i]['dueDate'];
        isNegotiable[i].innerHTML = "<b> Negotiable: </b>"+dataArray[i]['isNegotiable'];
        requestCategory[i].innerHTML ="<b> Category: </b>"+ dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "<b> Description: </b>"+ dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = "<b> Expected Price: </b> Php "+ dataArray[i]['requestExpectedPrice'];
        requestID[i].innerHTML = "<b> Request ID: </b>"+dataArray[i]['requestID'];
        requestStatus[i].innerHTML = dataArray[i]['requestStatus'];
        requestTitle[i].innerHTML = "<b>Title: </b> "+dataArray[i]['requestTitle'];

        UpdateButton[i].setAttribute('onclick',"updateForm("+dataArray[i]['requestID']+",'"+dataArray[i]['requestTitle']+"','"+ dataArray[i]['dueDate'] + "','" + dataArray[i]['requestExpectedPrice']+"','"+ dataArray[i]['isNegotiable']+"','"+dataArray[i]['requestDescription']+"')");
        ReviewButton[i].setAttribute('onclick',"viewForm("+dataArray[i]['requestID']+",'"+dataArray[i]['requestTitle']+"','"+ dataArray[i]['dueDate'] + "','" + dataArray[i]['requestExpectedPrice']+"','"+ dataArray[i]['isNegotiable']+"','"+dataArray[i]['requestDescription']+"','"+dataArray[i]['requestStatus']+"')");

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
                h2.innerText = "Request does not exist, entered link might be broken";
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
function updateForm(requestID,title,dueDate,price,isNegotiable,Description){
    var requestID = requestID;
    var title = title;
    var dueDate = dueDate;
    var price = price;
    var isNegotiable = isNegotiable;
    var Description = Description;

    document.getElementById('UpdateFormRequestID').value = requestID;
    document.getElementById("updateTitle").value = title;
    document.getElementById("updateDueDate").value = dueDate;
    document.getElementById("updatePrice").value = price;
    document.getElementById("updateNegotiable").value = isNegotiable;
    document.getElementById("updateDescription").value = Description;

    //openForms();
    showUpdateRequest();

}


function viewForm(requestID,title,dueDate,price,isNegotiable,Description,requestStatus){
    var requestID = requestID;
    var title = title;
    var dueDate = dueDate;
    var price = price;
    var isNegotiable = isNegotiable;
    var Description = Description;
    var requestStatus = requestStatus;

    document.getElementById('UpdateFormRequestID').innerText = requestID;
    document.getElementById("viewTitle").innerText = title;
    document.getElementById("viewDueDate").innerText = dueDate;
    document.getElementById("viewPrice").innerText= price;
    document.getElementById("viewNegotiable").innerText = isNegotiable;
    document.getElementById("viewDescription").innerText = Description;


    document.getElementById("delistButton").setAttribute("onclick","delistRequest('" +requestID+"')") 
    
    if(requestStatus === "Active"){
        document.getElementById("delistButton").setAttribute("onclick","delistRequest('" +requestID+"')") 
        document.getElementById("delistButton").innerText = "Delist";

    } else if(requestStatus === "" || requestStatus === " "){
        document.getElementById("delistButton").setAttribute("onclick","activeRequest('" +requestID+"')") 
        document.getElementById("delistButton").innerText = "Activate";

    } else if(requestStatus === "Delisted" ){
        document.getElementById("delistButton").setAttribute("onclick","activeRequest('" +requestID+"')") 
        document.getElementById("delistButton").innerText = "Activate";
    }
    
    //openForms();
    showViewRequest();

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