
// create elements to be appended 
/*
function createRequestElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("RequestsContainer-Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');


    var dueDate= document.createElement('li');
    var isNegotiable= document.createElement('li');
    var requestCategory= document.createElement('li');
    var requestDescription= document.createElement('li');
    var requestExpectedPrice= document.createElement('li');
    var requestID= document.createElement('li');
    var requestTitle= document.createElement('li');
    var requestorID = document.createElement('li');
    var requestorUserName = document.createElement('a');
    var requestorLocation = document.createElement('span');
    var viewRequest = document.createElement('a');
    var MessageButton = document.createElement('a');
    var userPhotoDiv = document.createElement('div');
   // var requestBannerDiv = document.createElement('div');

    var RequestorProfileDiv = document.createElement('table');
    var userprofileTR = document.createElement('tr');
    var userprofilePicSide = document.createElement('td');
    var userinfoSide = document.createElement('td');

    var RequestInfoList = document.createElement('ul');




    // set attributes
    card.setAttribute('class','requestCard');


    
    dueDate.setAttribute('class','dueDate');
    isNegotiable.setAttribute('class','isNegotiable');
    requestCategory.setAttribute('class','requestCategory');
    requestDescription.setAttribute('class','requestDescription');
    requestExpectedPrice.setAttribute('class','requestExpectedPrice');
    requestID.setAttribute('class','requestID');
    requestTitle.setAttribute('class','requestTitle');
    requestorID.setAttribute('class','requestorID');
    requestorUserName.setAttribute('class','requestorUserName');
    requestorLocation.setAttribute('class','requestorLocation');
    viewRequest.setAttribute('class','viewRequest');
    viewRequest.innerText = "View More";
    MessageButton.innerText = "Message";
    userPhotoDiv.setAttribute('class','userPhotoDiv');
   // requestBannerDiv.setAttribute('class','requestBannerDiv');
    RequestorProfileDiv.setAttribute('class','RequestorProfileDiv');
    MessageButton.setAttribute('class','MessageButton');
    RequestInfoList.setAttribute('class','RequestInfoList');


    // append elements to the row
    card.appendChild(RequestorProfileDiv);

  
    RequestInfoList.appendChild(requestID);
    //card.appendChild(requestBannerDiv);
    RequestInfoList.appendChild(requestCategory);
    RequestInfoList.appendChild(requestTitle);
    RequestInfoList.appendChild(requestDescription);
    RequestInfoList.appendChild(requestExpectedPrice);
    RequestInfoList.appendChild(isNegotiable);
    RequestInfoList.appendChild(dueDate);
    RequestInfoList.appendChild(requestorID);
    card.appendChild(RequestInfoList);
    card.appendChild(viewRequest)
    card.appendChild(MessageButton)

    userprofileTR.appendChild(userprofilePicSide);
    userprofileTR.appendChild(userinfoSide);

    RequestorProfileDiv.appendChild(userprofileTR);


    userprofilePicSide.appendChild(userPhotoDiv);
    userinfoSide.appendChild(requestorUserName);
    userinfoSide.appendChild(requestorLocation);


    div.append(card);

    } 
    
    
} // end of function
*/

// create elements to be appended 
function createRequestElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("RequestsContainer-Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var wrapper = document.createElement('div'); 
    var card = document.createElement('div');
    var request_card__image = document.createElement('div');
    var requestorLocation = document.createElement('div');
    var requestorUserName = document.createElement('div');
    var requestDescription = document.createElement('div');
    var dueDate = document.createElement('div');
    var request_card__unit_stats = document.createElement('div');
    var one_third = document.createElement('div');
    var requestCategory = document.createElement('div');
    var requestTitle = document.createElement('div');
    var no_border = document.createElement('div');
    var requestExpectedPrice = document.createElement('div');
    var isNegotiable = document.createElement('div');



    // set attributes
     wrapper.setAttribute("class","wrapper"); 
     card.setAttribute("class","request-card"); 
     request_card__image.setAttribute("class","request-card__image"); 
     requestorLocation.setAttribute("class","requestorLocation"); 
     requestorUserName.setAttribute("class","requestorUserName"); 
     requestDescription.setAttribute("class","requestDescription"); 
     dueDate.setAttribute("class","dueDate"); 
     request_card__unit_stats.setAttribute("class","request-card__unit-stats"); 
     one_third.setAttribute("class","one-third"); 
     requestCategory.setAttribute("class","requestCategory"); 
     requestTitle.setAttribute("class","requestTitle"); 
     no_border.setAttribute("class","no_border"); 
     requestExpectedPrice.setAttribute("class","requestExpectedPrice"); 
     isNegotiable.setAttribute("class","isNegotiable"); 


    // append elements to the row

    one_third.appendChild(requestCategory);
    one_third.appendChild(requestTitle);
    no_border.appendChild(requestExpectedPrice);
    no_border.appendChild(isNegotiable);


    request_card__unit_stats.appendChild(one_third);
    request_card__unit_stats.appendChild(no_border);

    

    card.appendChild(request_card__image);
    
    card.appendChild(requestorUserName);
    card.appendChild(requestorLocation);
    card.appendChild(requestDescription);
    card.appendChild(dueDate);
    card.appendChild(request_card__unit_stats);


    wrapper.appendChild(card);


    div.append(wrapper);

    } 
    
    
} // end of function


// set positions data 
function setData(array){

    var dataArray = array;
    var number = dataArray.length;

    wrapper = document.getElementsByClassName("wrapper"); 
    card= document.getElementsByClassName("request-card"); 
    request_card__image= document.getElementsByClassName("request-card__image"); 
    requestorLocation= document.getElementsByClassName("requestorLocation"); 
    requestorUserName= document.getElementsByClassName("requestorUserName"); 
    requestDescription= document.getElementsByClassName("requestDescription"); 
    dueDate= document.getElementsByClassName("dueDate"); 
    request_card__unit_stats= document.getElementsByClassName("request-card__unit-stats"); 
    one_third= document.getElementsByClassName("one-third"); 
    requestCategory= document.getElementsByClassName("requestCategory"); 
    requestTitle= document.getElementsByClassName("requestTitle"); 
    no_border= document.getElementsByClassName("no_border"); 
    requestExpectedPrice= document.getElementsByClassName("requestExpectedPrice"); 
    isNegotiable= document.getElementsByClassName("isNegotiable"); 




    for(var i = 0; i<number;i++){
        
        dueDate[i].innerHTML= dataArray[i]['dueDate'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        requestCategory[i].innerHTML = dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = dataArray[i]['requestDescription'];
        requestExpectedPrice[i].innerHTML = dataArray[i]['requestExpectedPrice'];
      
        requestTitle[i].innerHTML = dataArray[i]['requestTitle'];
        //[i].innerHTML = "<b>Requestor ID: </b>"+dataArray[i]['requestorID'];
        requestorUserName[i].innerHTML = dataArray[i]['userName'] +"</b> <br/>";
        requestorLocation[i].innerHTML = "<b>"+dataArray[i]['requestorMunicipality'] +"</b>";
        requestorUserName[i].innerHTML = "<a href = 'ViewUserProfile.php?userID="+dataArray[i]['requestorID']+"&userType=Requestor'>" + dataArray[i]['userName'] +"</a>";

        //requestorUserName[i].innerHTML = "<a href = 'Responder_RequestInfo.php?requestID=" + dataArray[i]['requestID'] + "'> "+ dataArray[i]['userName']+"</a>";
        
        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','userPhotoPic');
        request_card__image[i].appendChild(image);


    }


}


// for getting products for pasabuy
function getRequests(){
   
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_requests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var RequestsContainer = document.getElementById('RequestsContainer-Content');
            RequestsContainer.innerHTML = "";

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createRequestElements(number);
            setData(dataArray);

            } else{
                RequestsContainer.innerText = "No Requests";
            }

            getCategories();
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function



function getOtherRequests(){
   
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_otherRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var RequestsContainer = document.getElementById('RequestsContainer');
            RequestsContainer.innerHTML = "";

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createServiceElements(number);
            setData(dataArray);
            } else{
                RequestsContainer.innerText = "No Requests";
            }

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// getting requests based on category selected

function setCategory(category){
    var selectedCategory = category;
    var query = "category=" + selectedCategory;

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_categorizedRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {

        if (this.readyState === 4 || this.status === 200){ 
           

            var RequestsContainer = document.getElementById('RequestsContainer-Content');
            RequestsContainer.innerHTML = "";

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                dataArray = JSON.parse(dataArray);
                
                console.log(dataArray);

                var number = dataArray.length;
                createRequestElements(number);
                setData(dataArray);

                
            }

            

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
}

// get nearest requests

function getNearestRequest(municipality){
    var municipality = municipality;
    var category = document.getElementById('RequestCategory').value;
    var query = "municipality=" + municipality + "&category=" + category;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_nearestRequest.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {

        if (this.readyState === 4 || this.status === 200){ 
           

            var RequestsContainer = document.getElementById('RequestsContainer-Content');
            RequestsContainer.innerHTML = "";

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createRequestElements(number);
            setData(dataArray);

            } else{
                RequestsContainer.innerText = "No Requests";
            }

           

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
}



function getPasabuyRequests(){
   
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_pasabuyRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var RequestsContainer = document.getElementById('RequestsContainer');
            RequestsContainer.innerHTML = "";

            var dataArray = this.response;

            if(dataArray != "failed to fetch"){
                
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createPasabuyElements(number);
            setPasabuyData(dataArray);

            } else{
                RequestsContainer.innerText = "No Requests";
            }

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
}


function createPasabuyElements(number){
    var number = number;
    var RequestsContainer = document.getElementById('RequestsContainer-Content');

    for(var i = 0; i<number; i++){

        var pasabuyCard = document.createElement('div');
        var datePosted = document.createElement('p');
        var expectedPrice = document.createElement('p');
        var municipality = document.createElement('p');
        var negotiable = document.createElement('p');
        var pasabuyrequestID = document.createElement('p');
        var productBrand = document.createElement('p');
        var productImageDIV = document.createElement('div');
        var productName = document.createElement('p');
        var requestDescription = document.createElement('p');
        var requestDueDate = document.createElement('p');
        var requestStatus = document.createElement('p');
        var requestorID = document.createElement('p');
        var userName = document.createElement('p');
        var userPhotoDIV = document.createElement('div');
        var viewMore = document.createElement('a');

         pasabuyCard.setAttribute('class','requestCard');
         datePosted.setAttribute('class','datePosted');
         expectedPrice.setAttribute('class','expectedPrice'); 
         municipality.setAttribute('class','municipality'); 
         negotiable.setAttribute('class','negotiable'); 
         pasabuyrequestID.setAttribute('class','pasabuyrequestID'); 
         productBrand.setAttribute('class','productBrand'); 
         productImageDIV.setAttribute('class','productImageDIV'); 
         productName.setAttribute('class','productName'); 
         requestDescription.setAttribute('class','requestDescription'); 
         requestDueDate.setAttribute('class','requestDueDate'); 
         requestStatus.setAttribute('class','requestStatus'); 
         requestorID.setAttribute('class','requestorID'); 
         userName.setAttribute('class','userName'); 
         userPhotoDIV.setAttribute('class','userPhotoDIV'); 
         viewMore.setAttribute('class','viewMore'); 


         pasabuyCard.appendChild(pasabuyrequestID);
         pasabuyCard.appendChild(productImageDIV);
         pasabuyCard.appendChild(productName);
         pasabuyCard.appendChild(productBrand);
         pasabuyCard.appendChild(requestDescription);
         pasabuyCard.appendChild(expectedPrice);
         pasabuyCard.appendChild(negotiable);
         pasabuyCard.appendChild(datePosted);
         pasabuyCard.appendChild(requestDueDate);
         pasabuyCard.appendChild(requestStatus);
         pasabuyCard.appendChild(userPhotoDIV);
         pasabuyCard.appendChild(requestorID);
         pasabuyCard.appendChild(userName);
         pasabuyCard.appendChild(municipality);
         pasabuyCard.appendChild(viewMore);
        

         RequestsContainer.appendChild(pasabuyCard);

    }

}


function setPasabuyData(array){

    var dataArray = array;
    var number = dataArray.length;

    pasabuyCard= document.getElementsByClassName('requestCard');
    datePosted= document.getElementsByClassName('datePosted');
    expectedPrice= document.getElementsByClassName('expectedPrice'); 
    municipality= document.getElementsByClassName('municipality'); 
    negotiable= document.getElementsByClassName('negotiable'); 
    pasabuyrequestID= document.getElementsByClassName('pasabuyrequestID'); 
    productBrand= document.getElementsByClassName('productBrand'); 
    productImageDIV= document.getElementsByClassName('productImageDIV'); 
    productName= document.getElementsByClassName('productName'); 
    requestDescription= document.getElementsByClassName('requestDescription'); 
    requestDueDate= document.getElementsByClassName('requestDueDate'); 
    requestStatus= document.getElementsByClassName('requestStatus'); 
    requestorID= document.getElementsByClassName('requestorID'); 
    userName= document.getElementsByClassName('userName'); 
    userPhotoDIV= document.getElementsByClassName('userPhotoDIV'); 
    viewMore= document.getElementsByClassName('viewMore'); 




    for(var i = 0; i<number;i++){
        
        datePosted[i].innerHTML= "<b>Date Posted: </b>"+dataArray[i]['datePosted'];
        expectedPrice[i].innerHTML= "<b>Expected Price: </b>"+dataArray[i]['expectedPrice'];
        municipality[i].innerHTML= "<b>Location: </b>"+dataArray[i]['municipality'];
        negotiable[i].innerHTML= "<b>Negotiable: </b>"+dataArray[i]['negotiable'];
        pasabuyrequestID[i].innerHTML= "Pasabuy Request ID: "+dataArray[i]['pasabuyrequestID'];
        productBrand[i].innerHTML= "<b>Brand: </b>"+dataArray[i]['productBrand'];
        productName[i].innerHTML= "<b>Product: </b>"+dataArray[i]['productName'];
        requestDescription[i].innerHTML= "<b>Description: </b>"+dataArray[i]['requestDescription'];
        requestDueDate[i].innerHTML= "<b>Due date: </b>"+dataArray[i]['requestDueDate'];
        requestStatus[i].innerHTML= "<b>Status: </b>"+dataArray[i]['requestStatus'];
        userName[i].innerHTML= "<b>Username: </b>"+dataArray[i]['userName'];
 
        viewMore[i].innerText= "View More";
      

        viewMore[i].href = "Responder_RequestInfo.php?requestID=" + dataArray[i]['pasabuyrequestID'];

        //productImageDIV[i].innerHTML= "<b>Due date: </b>"+dataArray[i]['productImageDIV'];
        //userPhotoDIV[i]
        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','userPhotoPic');
        userPhotoDIV[i].appendChild(image);

        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','bannerimage');
        productImageDIV[i].appendChild(image);
       


        


    }

}

/*Get request categories */
function getCategories(){


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_requestCategories.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {

        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;


            if(dataArray != "failed to fetch"){
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                addCategories(dataArray)
               


            } else{
                console.log("failed to fetch");
            }

     
        }else{
            console.log(err);
        }      
        
    };
    
    xmlhttp.send();
}



// add categories to the dropdown
function addCategories(data){
    var number = data.length;
    var data = data;
    var select = document.getElementById("RequestCategory");


    select.innerHTML = "";
    var option = document.createElement('option');
    option.text = "All Requests";
    option.value= "All Requests";
    select.add(option);

    for(var i =0; i<number;i++){
        var option = document.createElement('option');
        option.text = data[i]['requestCategory'];
        option.value= data[i]['requestCategory'];
        select.add(option);
    }
    
   // setSpecialization();

}


// for setting category
var select = document.getElementById("RequestCategory");
    select.addEventListener("change",function(){
        var select = document.getElementById("RequestCategory").value;
        var nearestRequestSlider = document.getElementById('nearestRequestSlider');

        if(nearestRequestSlider.checked){
            var municipality = sessionStorage.getItem('municipality');
            getNearestRequest(municipality);
        } else{
        
            if(select != "All Requests"){
                setCategory(select);
                
        
            } else{ 
                getRequests();
            }

        }



});

// nearest request slider trigger
var nearestRequestSlider = document.getElementById('nearestRequestSlider');
nearestRequestSlider.addEventListener("change",function(){

    if(this.checked){
        var select = document.getElementById("RequestCategory").value;
        var municipality = sessionStorage.getItem('municipality');
        getNearestRequest(municipality);
    } else{
        getRequests();
    }

});


// for setting specialization on load
function setSpecialization(){

    var select = document.getElementById("RequestCategory");
    var specialization = sessionStorage.getItem('specialization');

    //select.value = specialization;

    for(var i =0; i<select.length;i++){

        selval = select.options[i].value;

        if(selval === specialization){
            //select.selectedIndex = select.options[i].value;
            console.log(select.options[i].value)
            select.selectedIndex = i;
        } else{
            console.log(selval);
        }
        
       //console.log(select.options[i].value);
    }

}



/*Initialization of the page*/
function init(){
    getCategories();
    //setSpecialization();
    var select = document.getElementById("RequestCategory");
    var specialization = sessionStorage.getItem('specialization');
    select.value = specialization;

    var timeout = setTimeout(function(){
        setSpecialization();
        console.log("1");
    }, 1000)
}