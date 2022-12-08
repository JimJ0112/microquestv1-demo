

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
    var requestExpectedPrice = document.createElement('div');
    var isNegotiable = document.createElement('div');
    var nameLoc = document.createElement('div');
    var footer = document.createElement('div');
    var price = document.createElement('div');
    var grid_head= document.createElement('grid-head');

    // set attributes
     wrapper.setAttribute("class","wrapper"); 
        card.setAttribute("class","request-card"); 
            grid_head.setAttribute("class", "grid-head");
                request_card__image.setAttribute("class","request-card__image"); 
                nameLoc.setAttribute("class", "nameLoc");
                   requestorUserName.setAttribute("class","requestorUserName"); 
                   requestorLocation.setAttribute("class","requestorLocation"); 

            request_card__unit_stats.setAttribute("class","request-card__unit-stats"); 
               one_third.setAttribute("class","one-third"); 
                   requestCategory.setAttribute("class","requestCategory"); 
                   requestTitle.setAttribute("class","requestTitle"); 

            requestDescription.setAttribute("class","requestDescription"); 

            footer.setAttribute("class", "footer");
               price.setAttribute("class", "price");
                   requestExpectedPrice.setAttribute("class","requestExpectedPrice"); 
                   isNegotiable.setAttribute("class","isNegotiable"); 


                dueDate.setAttribute("class","dueDate"); 


    // append elements to the row

    price.appendChild(requestExpectedPrice);
    price.appendChild(isNegotiable);

    footer.appendChild(price);
    footer.appendChild(dueDate); 

    one_third.appendChild(requestCategory);
    one_third.appendChild(requestTitle);
     
    request_card__unit_stats.appendChild(one_third);

    
    nameLoc.appendChild(requestorUserName);
    nameLoc.appendChild(requestorLocation);

    grid_head.appendChild(request_card__image);
    grid_head.appendChild(nameLoc);

    card.appendChild(grid_head);
    card.appendChild(request_card__unit_stats);
    card.appendChild(requestDescription);
    card.appendChild(footer);

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
    requestExpectedPrice= document.getElementsByClassName("requestExpectedPrice"); 
    isNegotiable= document.getElementsByClassName("isNegotiable"); 
    footer= document.getElementsByClassName("footer"); 
    price= document.getElementsByClassName("price"); 
    grid_head= document.getElementsByClassName("grid-head"); 


    for(var i = 0; i<number;i++){
        
        dueDate[i].innerHTML= "due date: &nbsp" + dataArray[i]['dueDate'];
        isNegotiable[i].innerHTML = dataArray[i]['isNegotiable'];
        requestCategory[i].innerHTML = dataArray[i]['requestCategory'];
        requestDescription[i].innerHTML = "</br>" + dataArray[i]['requestDescription'];
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

        card[i].setAttribute("onclick","redirect('Responder_RequestInfo.php?requestID=" + dataArray[i]['requestID'] + "')");

    }


}


function redirect(url){
    var url = url;
    location.href = url;
}


// for getting products for pasabuy
function getRequests(){
   
    var xmlhttp = new XMLHttpRequest();


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

           // getCategories();
        }else{
            console.log(err);
        }      
    };

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('RequestsContainer-Content').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_requests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function



function getOtherRequests(){
   
    var xmlhttp = new XMLHttpRequest();

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

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('RequestsContainer-Content').innerText = "Loading...";

        }
  
    };
    
    xmlhttp.open("POST", "Backend/Get_otherRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


// getting requests based on category selected

function setCategory(category){
    var selectedCategory = category;
    var query = "category=" + selectedCategory;

    var xmlhttp = new XMLHttpRequest();


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

                
            }else{
                RequestsContainer.innerText = "No Requests";

            }

            

     
        }else{
            console.log(err);
        }      
    };


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('RequestsContainer-Content').innerText = "Loading...";

        }
  
    };
    xmlhttp.open("POST", "Backend/Get_categorizedRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
}

// get nearest requests

function getNearestRequest(municipality){
    var municipality = municipality;
    var category = sessionStorage.getItem('requestCategory');
    //var category = document.getElementById('RequestCategory').value;
    var query = "municipality=" + municipality + "&category=" + category;
    console.log(query);

    var xmlhttp = new XMLHttpRequest();


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

    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('RequestsContainer-Content').innerText = "Loading...";

        }
  
    };
    xmlhttp.open("POST", "Backend/Get_nearestRequest.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
}





function getPasabuyRequests(){
   
    
    var xmlhttp = new XMLHttpRequest();


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
    
    xmlhttp.open("POST", "Backend/Get_pasabuyRequests.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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


// nearest request slider trigger
/*
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
*/

function SliderAction(){
    var nearestRequestSlider = document.getElementById('nearestRequestSlider');
    if(nearestRequestSlider.checked){

       // var select = document.getElementById("RequestCategory").value;
       // var municipality = sessionStorage.getItem('municipality');
       // getNearestRequest(municipality);
        chooseNav("All Requests",0)
    } else{
        getRequests();
    }
}





// set options to dropdown  
function setOptions(array){

    var dataArray = array;
    var number = dataArray.length;

    var serviceDropDown = document.getElementById("LeaderBoardCategories");
    


    for(var i = 0; i<number;i++){
        
        if(dataArray[i]["serviceCategory"] === "Pasabuy"){

        } else{
            var option = new Option;
            option.innerText = dataArray[i]["serviceCategory"];
            option.value = dataArray[i]["serviceCategory"];
            serviceDropDown.add(option);
        }


    }



    
}





/*Get request categories */
function getCategories(){


    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onload = function() {

        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;


            if(dataArray != "failed to fetch"){
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createCategoryElements(number);
                setCategoryDatas(dataArray)
                setSpecialization(dataArray);


               


            } else{
                console.log("failed to fetch");
            }

     
        }else{
            console.log(err);
        }      
        
    };
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

        } else {
           document.getElementById('cetegoriesContainer').innerText = "Loading...";

        }
  
    };
    xmlhttp.open("POST", "Backend/Get_requestCategories.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}



function createCategoryElements(number){
    var number = number;
    document.getElementById('cetegoriesContainer').innerHTML = "";
    var cetegoriesContainer = document.getElementById('cetegoriesContainer');

    for(var i=0; i<number; i++){

        var div = document.createElement('div');
        div.setAttribute('class','grid-item');

        cetegoriesContainer.appendChild(div);

    }

}


// set options to dropdown  
function setCategoryDatas(array){

    var dataArray = array;
    var number = dataArray.length;

    //var serviceDropDown = document.getElementById("LeaderBoardCategories");
    var grid_item = document.getElementsByClassName('grid-item');


    for(var i = 1; i<number;i++){
        
        if(dataArray[i]["requestCategory"] === "Pasabuy"){

            grid_item[i].style.display = "none";

        } else{

            grid_item[i].innerText = dataArray[i]["requestCategory"];

            grid_item[i].setAttribute("onclick","chooseNav('" + dataArray[i]['requestCategory'] + "'," + i +")" );
        }


    }

    grid_item[0].innerText = "All";

    grid_item[0].setAttribute("onclick","chooseNav('All Requests'," + 0 +")" );

    //chooseNav(dataArray[0]["requestCategory"],0)
    setSpecialization(dataArray);


    
}


function chooseNav(category,number){
    var category = category;
    var number = number;
    var grid_item = document.getElementsByClassName('grid-item');
    var length = grid_item.length;
    var nearestRequestSlider = document.getElementById('nearestRequestSlider');

    for(var i=0;i<length;i++){

        grid_item[i].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        grid_item[i].style.color = "black";

    }

    grid_item[number].style.backgroundColor = "orangered";
    grid_item[number].style.color = "white";

    sessionStorage.setItem("requestCategory",category);
    

    //getLeaderBoard(category);

    if(category ==="All Requests" && nearestRequestSlider.checked ){
        var municipality = sessionStorage.getItem('municipality');
        getNearestRequest(municipality);

    } else if(category ==="All Requests" && !nearestRequestSlider.checked){
        getRequests();
    }else{
        sessionStorage.setItem("requestCategory",category);
        setCategory(category);
    }



}


function setSpecialization(dataArray){

    var grid_item = document.getElementsByClassName('grid-item');
    var dataArray = dataArray;
    var specialization = sessionStorage.getItem('specialization');

   

    for(var i =0; i<dataArray.length;i++){

        

        if(dataArray[i]['requestCategory'] === specialization){
          

            grid_item[i].style.backgroundColor = "orangered";
            grid_item[i].style.color = "white";

           // chooseNav(dataArray[i]["requestCategory"],i)
            console.log(dataArray[i]['requestCategory']);

        } else{
           // console.log(selval);
           console.log("not working");
        }
        
       //console.log(select.options[i].value);
    }

}

/*

function setSpecialization2(specialization){

    var grid_item = document.getElementsByClassName('grid-item');
    var number = grid_item.length;
   // var specialization = sessionStorage.getItem('specialization');
   var specialization = specialization;

   

    for(var i =0; i<dataArray.length.length;i++){

        

        if(grid_item[i].innerText === specialization){
          

            grid_item[i].style.backgroundColor = "orangered";
            grid_item[i].style.color = "white";

           // chooseNav(dataArray[i]["requestCategory"],i)
            console.log(grid_item[i]);

        } else{
           // console.log(selval);
           console.log("not working");
        }
        
       //console.log(select.options[i].value);
    }

}
*/