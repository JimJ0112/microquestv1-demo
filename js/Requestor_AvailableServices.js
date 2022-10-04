
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





// create elements to be appended 
function createServiceElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("AvailableServicesContainer-Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var card = document.createElement('div');
    //var ServiceTitleBackground = document.createElement('div');
    var serviceTitle = document.createElement('span');
    var BannerContainer = document.createElement('div');
    var br = document.createElement('br');
   


   



   // set attributes
    card.setAttribute('class','AvailableService-Card');
    //ServiceTitleBackground.setAttribute('class','ServiceTitleBackground');
    serviceTitle.setAttribute('class','serviceTitle');
    BannerContainer.setAttribute('class','BannerContainer');
    


   // append elements to the row
    //ServiceTitleBackground.appendChild(serviceTitle);
    card.appendChild(serviceTitle);
   // card.appendChild(ServiceTitleBackground);
    card.appendChild(BannerContainer);
   


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
    var serviceCard = document.getElementsByClassName("AvailableService-Card");

    for(var i = 0; i<number;i++){
        
        serviceTitle[i].innerHTML = "<center> <b>"+ dataArray[i]['serviceCategory'] +"</b> </center>";
        serviceCard[i].setAttribute("onclick","selectCategory('" + dataArray[i]['serviceCategory'] + "')");

        var image = new Image();
        image.src = dataArray[i]['bannerImage'];

        image.setAttribute('class','ServiceBanner');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
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
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("AvailableServicesContainer-Content").innerHTML = "";
            
            //selectedCategory = document.getElementById("selectedCategory");
  

            var dataArray = this.response;
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                // positions(dataArray);
                var number = dataArray.length;
                createServiceElements(number);
                //dataArray = categories(dataArray);
                setData(dataArray);

            console.log(positions(dataArray));

     
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