// create elements for data
function createElements(number){
    var number = number;

    var div = document.getElementById('myRequestsContent');



    
    for(var i=0; i<number; i++){
        var myRequestCard = document.createElement('tr');
        var datePosted = document.createElement('td');
        var dueDate= document.createElement('td');
        var isNegotiable= document.createElement('td');
        var requestCategory= document.createElement('td');
        var requestDescription= document.createElement('td');
        var requestExpectedPrice= document.createElement('td');
        var requestID= document.createElement('td');
        var requestStatus= document.createElement('td');
        var requestTitle= document.createElement('td');
      
        
        var buttonsCol = document.createElement('td');
        var delist = document.createElement('button');
        var update = document.createElement('button');
        var br = document.createElement('br');

        myRequestCard.setAttribute('class','myRequestCard');
        



         datePosted.setAttribute('class','datePosted');
         dueDate.setAttribute('class','dueDate');
         isNegotiable.setAttribute('class','isNegotiable');
         requestCategory.setAttribute('class','requestCategory');
         requestDescription.setAttribute('class','requestDescription');
         requestExpectedPrice.setAttribute('class','requestExpectedPrice');
         requestID.setAttribute('class','requestID');
         requestStatus.setAttribute('class','requestStatus');
         requestTitle.setAttribute('class','requestTitle');
        
        
         delist.setAttribute('class','delist');
         update.setAttribute('class','update');

         delist.innerText="Delist";
         update.innerText="Update";

         buttonsCol.appendChild(update);
         buttonsCol.appendChild(br);
         buttonsCol.appendChild(delist);

         myRequestCard.appendChild(requestID);
         myRequestCard.appendChild(requestCategory);
         myRequestCard.appendChild(requestTitle);
         myRequestCard.appendChild(requestExpectedPrice);
         myRequestCard.appendChild(isNegotiable);
         myRequestCard.appendChild(datePosted);
         myRequestCard.appendChild(dueDate);
         myRequestCard.appendChild(requestDescription);
         myRequestCard.appendChild(requestStatus);
         myRequestCard.appendChild(buttonsCol);



         div.appendChild(myRequestCard);






    }

}

// set positions data 
function setData(array){

var dataArray = array;
var number = dataArray.length;


myRequestCard = document.getElementsByClassName('myRequestCard');


datePosted= document.getElementsByClassName('datePosted');
dueDate= document.getElementsByClassName('dueDate');
isNegotiable= document.getElementsByClassName('isNegotiable');
requestCategory= document.getElementsByClassName('requestCategory');
requestDescription= document.getElementsByClassName('requestDescription');
requestExpectedPrice= document.getElementsByClassName('requestExpectedPrice');
requestID= document.getElementsByClassName('requestID');
requestStatus= document.getElementsByClassName('requestStatus');
requestTitle= document.getElementsByClassName('requestTitle');


delist= document.getElementsByClassName('delist');
update= document.getElementsByClassName('update');


for(var i = 0; i< number; i++){


    datePosted[i].innerText = dataArray[i]['datePosted'];
    dueDate[i].innerText = dataArray[i]['dueDate'];
    isNegotiable[i].innerText = dataArray[i]['isNegotiable'];
    requestCategory[i].innerText = dataArray[i]['requestCategory'];
    requestDescription[i].innerText = dataArray[i]['requestDescription'];
    requestExpectedPrice[i].innerText = dataArray[i]['requestExpectedPrice'];
    requestID[i].innerText = dataArray[i]['requestID'];
    requestStatus[i].innerText = dataArray[i]['requestStatus'];
    requestTitle[i].innerText = dataArray[i]['requestTitle'];

    update[i].setAttribute('onclick',"updateForm("+dataArray[i]['requestID']+",'"+dataArray[i]['requestTitle']+"','"+ dataArray[i]['dueDate'] + "','" + dataArray[i]['requestExpectedPrice']+"','"+ dataArray[i]['isNegotiable']+"','"+dataArray[i]['requestDescription']+"')");


//requestID,title,dueDate,price,isNegotiable,Description

    if(dataArray[i]['requestStatus'] === "Active"){
        delist[i].setAttribute('onclick','delistRequest('+dataArray[i]['requestID'] +')');
        delist[i].innerText = "Delist";

    } else if(dataArray[i]['requestStatus'] === "" || dataArray[i]['requestStatus'] === " "){
        delist[i].setAttribute('onclick','activeRequest('+dataArray[i]['requestID'] +')');
        delist[i].innerText = "Activate";

    } else if(dataArray[i]['requestStatus'] === "Delisted" ){
        delist[i].setAttribute('onclick','activeRequest('+dataArray[i]['requestID'] +')');
        delist[i].innerText = "Activate";
    }
  


}

}

function getMyServices(userID){
    var userID = userID;
    var query = "userID=" + userID;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_myRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('myRequestsContent');
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

    document.getElementById('requestID').value = requestID;
    document.getElementById("updateTitle").value = title;
    document.getElementById("updateDueDate").value = dueDate;
    document.getElementById("updatePrice").value = price;
    document.getElementById("updateNegotiable").value = isNegotiable;
    document.getElementById("updateDescription").value = Description;

    openForms();

}





// close and open forms
function closeForms(){
    var updateFormBackground = document.getElementById("updateFormBackground");
    document.getElementById('requestID').value ="";


    updateFormBackground.style.display = "none";

}

function openForms(){
    var updateFormBackground = document.getElementById("updateFormBackground");



    updateFormBackground.style.display = "block";

}


// update status
function delistRequest(requestID){
    var requestID = requestID;
    var query = "requestID=" + requestID +"&status=Delisted";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateRequestStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
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
    xmlhttp.onload = function() {
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