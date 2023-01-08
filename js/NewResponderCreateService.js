
function categories(array){
    var dataArray = array;
    var number = dataArray.length;
    var newData = [];
 


    for(var i = 0; i<number; i++){
  
        newData[i] = dataArray[i]['serviceCategory']
    }
    newData.sort();

    

    
    return newData;

}


function positions(array){
    var dataArray = array;
    var number = dataArray.length;
    var newData = [];
 


    for(var i = 0; i<number; i++){
  
        newData[i] = dataArray[i]['servicePosition']
    }
    newData.sort();

    

    
    return newData;

}





// create elements to be appended 
function createServiceElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("OtherServicesContainer");
   
    
    for(var i = 0;i<DataNumber;i++){
   // create elements for rows
   var card = document.createElement('div');
   var BannerContainer = document.createElement('div');
   //var br = document.createElement('br');
   


   var data = document.createElement('p');



   // set attributes
   card.setAttribute('class','serviceCard');
   BannerContainer.setAttribute('class','BannerContainer');
   data.setAttribute('class','serviceTitle');


   // append elements to the row
   card.appendChild(BannerContainer);
   //card.appendChild(br);
   //card.appendChild(br);
   card.appendChild(data);


    div.append(card);

    } 
    
    
} // end of function


// set positions data 
function setData(array){

    var dataArray = array;
    var number = dataArray.length;

    
    var selectedCategory = sessionStorage.getItem("selectedCategory");
    var BannerContainer = document.getElementsByClassName('BannerContainer');
    var serviceTitle = document.getElementsByClassName('serviceTitle');
    var serviceCard = document.getElementsByClassName("serviceCard");

    for(var i = 0; i<number;i++){
        
        serviceTitle[i].innerHTML = "<center> <b>"+ dataArray[i]['serviceCategory'] +"</b> </center>";

        serviceCard[i].setAttribute("onclick","setCategory('" + dataArray[i]['serviceCategory'] + "')");


        var image = new Image();
        image.src = dataArray[i]['bannerImage'];
        image.setAttribute('class','bannerImage');
        image.setAttribute('onerror',"this.src='Images/RequestBanners/others.jpg'");
        BannerContainer[i].appendChild(image);

    }

}


// for getting products for pasabuy
function getProducts(){
   
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_products.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("AvailServiceContent").innerHTML = "";
            selectedCategory = document.getElementById("selectedCategory");
            selectedCategory.innerText = "Product Categories";

            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createServiceElements(number);
            dataArray = productCategory(dataArray);
            setData(dataArray);

            console.log(positions(dataArray));

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// getting product categories
// for filtering
function productCategory(array){
    var dataArray = array;
    var number = dataArray.length;
    var newData = [];

  
    for(var i = 0; i<number; i++){
        newData[i] = dataArray[i]['productCategory']
        //document.write(dataArray[i]['servicePosition']);
        
    }

    newData.sort();

    return newData;

}


// gets all services 
function getServices(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_otherServices.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("OtherServicesContainer").innerHTML = "";
            //selectedCategory = document.getElementById("selectedCategory");
  

            
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){


            } else{

            dataArray = JSON.parse(dataArray);
            console.log(dataArray);


            var number = dataArray.length;
            createServiceElements(number);
            //dataArray = categories(dataArray);
            setData(dataArray);
     
            }
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// for when a category has been selected
function selectCategory(string){

    var category = string;
    sessionStorage.setItem("selectedCategory",category);

    if(category != "Pasabuy"){
        location.href= "SelectedService.php?category=" + category;
    } else {
        location.href= "PasabuyService.php?category=" + category;
    }

}


// when a category button has been clicked
function setCategory(string){
    var data = string;

    var regularServices = document.getElementById("regularServicesFormBack");
    var pasabuy = document.getElementById("pasabuyFormBack");
    var otherServices = document.getElementById("otherCategoriesFormBack");
    var serviceCategoryRegular = document.getElementById("serviceCategoryRegular");
    getPositions(data);

    if(data === "Pasabuy"){
        pasabuy.style.display="grid";
        regularServices.style.display = "none";
        otherServices.style.display = "none";
    } else if(data === "Other"){
        pasabuy.style.display="none";
        regularServices.style.display = "none";
        otherServices.style.display = "grid";
    } else{
        pasabuy.style.display="none";
        regularServices.style.display = "grid";
        otherServices.style.display = "none";
        serviceCategoryRegular.value = data;
    } 



}


// for closing the forms

function closeForms(){
    var regularServices = document.getElementById("regularServicesFormBack");
    var pasabuy = document.getElementById("pasabuyFormBack");
    var otherServices = document.getElementById("otherCategoriesFormBack");


    regularServices.style.display = "none";
    pasabuy.style.display = "none";
    otherServices.style.display = "none";

}

//Get positions
// id = servicePositionDropDown

// for getting products for pasabuy
function getProducts(){
   
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_products.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("AvailServiceContent").innerHTML = "";
            selectedCategory = document.getElementById("selectedCategory");
            selectedCategory.innerText = "Product Categories";

            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createServiceElements(number);
            dataArray = productCategory(dataArray);
            setData(dataArray);

            console.log(positions(dataArray));

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function



/* for the dropdown in new responder create service */

// gets data from php 
function getPositions(name){
    var data = name;
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "condition=" + data;
    console.log(query)


    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var serviceCard = document.getElementById("newResponderServicePositionDropDown").innerHTML = "";
          
            var dataArray = this.response;
           
            if(dataArray === "failed to fetch"){

                //document.getElementById("newResponderOtherServicePosition").style.display = "block";
                //document.getElementById("newResponderServicePositionDropDown").style.display = "none";


            } else{

                //document.getElementById("newResponderOtherServicePosition").style.display = "none";
                //document.getElementById("newResponderServicePositionDropDown").style.display = "block";

                document.getElementById("LoadingScreen").style.display = "none";

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                
              
                var number = dataArray.length;
                
                dataArray = positions(dataArray);
                setOptions(dataArray);
    
                console.log(positions(dataArray));
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.onreadystatechange = function() {

        if (this.readyState != 4 || this.status != 200){ 
        document.getElementById("LoadingScreen").style.display = "grid";
        }
    };

    xmlhttp.open("POST", "Backend/Get_services.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

}// end of function


// set options to dropdown  
function setOptions(array){

    var dataArray = array;
    var number = dataArray.length;

    var serviceCard = document.getElementById("newResponderServicePositionDropDown");
    for(var i = 0; i<number;i++){
        
        //serviceCard[i].innerText = dataArray[i];
        //serviceCard[i].setAttribute("onclick","setCategory('" + dataArray[i] + "')");
        var option = new Option;
        option.innerText = dataArray[i];
        option.value = dataArray[i];
        serviceCard.add(option);

    }

    var option = new Option;
    option.innerText = "Other";
    option.value = "Other";
    serviceCard.add(option);

    
}


function otherPosition(){
    var dropdownValue = document.getElementById("newResponderServicePositionDropDown");
    var dropdownTR = document.getElementById("newResponderServicePositionDropDownTR");
    var otherServiceTR = document.getElementById("newResponderOtherServicePositionTR");

   var otherServiceTextTD = document.getElementById("otherServiceTextTD");
   var otherServiceTextTD1 = document.getElementById("otherServiceTextTD1");
    
    if(dropdownValue.value==="Other"){
       // otherServiceTextTD.style.display = "inline-block"
       // otherServiceTextTD1.style.display = "inline-block"
    
        otherServiceTR.style.display = "table-row";
    } else {
       otherServiceTR.style.display = "none";
       otherServiceTextTD1.value = "";

       //otherServiceTextTD.style.display = "none"
       //otherServiceTextTD1.style.display = "none"

    
    }
}

