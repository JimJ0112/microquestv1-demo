function submitEditChanges(){
    serviceViewForm = document.getElementById("serviceViewForm");
    serviceViewForm.submit();
}



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
    div = document.getElementById("AvailableServicesContainer_Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var card = document.createElement('div');
    var ServiceTitleBackground = document.createElement('div');
    var serviceTitle = document.createElement('span');
    var BannerContainer = document.createElement('div');
    var br = document.createElement('br');
    var servicePosition = document.createElement('p');
    var serviceStatus= document.createElement('p');
    var rate= document.createElement('p');
    var ratings= document.createElement('p');
    var infoDiv = document.createElement('div');
   

   // set attributes
    card.setAttribute('class','AvailableService_Card');
    ServiceTitleBackground.setAttribute('class','ServiceTitleBackground');
    serviceTitle.setAttribute('class','serviceTitle');
    BannerContainer.setAttribute('class','BannerContainer');
    servicePosition.setAttribute('class','servicePosition');
    serviceStatus.setAttribute('class','serviceStatus');
    rate.setAttribute('class','rate');
    ratings.setAttribute('class','ratings');
    infoDiv.setAttribute('class','infoDiv');


   // append elements to the row
    ServiceTitleBackground.appendChild(serviceTitle);
    card.appendChild(ServiceTitleBackground);
    card.appendChild(BannerContainer);

    infoDiv.appendChild(servicePosition);
    infoDiv.appendChild(rate);
    infoDiv.appendChild(ratings);
    infoDiv.appendChild(serviceStatus);
    card.appendChild(infoDiv);

   


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
    var serviceCard = document.getElementsByClassName("AvailableService_Card");

    var servicePosition = document.getElementsByClassName('servicePosition');
    var serviceStatus = document.getElementsByClassName('serviceStatus');
    var rate = document.getElementsByClassName('rate');
    var ratings = document.getElementsByClassName('ratings');

    for(var i = 0; i<number;i++){
        
        serviceTitle[i].innerHTML = " <b>"+ dataArray[i]['serviceCategory'] +"</b>";
        //serviceCard[i].setAttribute("onclick","selectCategory('" + dataArray[i]['serviceCategory'] + "')");

        servicePosition[i].innerHTML = " <b> Position: </b> "+ dataArray[i]['servicePosition'];
        serviceStatus[i].innerHTML = " <b>Status: </b> "+ dataArray[i]['serviceStatus'];
        rate[i].innerHTML = " <b> Rate: Php </b>"+ dataArray[i]['rate'] + ".00";
        ratings[i].innerHTML = " <b> Ratings: </b> 5.0 ⭐";
        

        var image = new Image();
        image.src = dataArray[i]['bannerImage'];

        image.setAttribute('class','ServiceBanner');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        BannerContainer[i].appendChild(image);


        //"showServiceView(serviceID,serviceCategory,servicePosition,rate,certification,certificateFile,serviceStatus)
        serviceCard[i].setAttribute("onclick","showServiceView("+dataArray[i]["serviceID"]+",'"+dataArray[i]["serviceCategory"]+"','"+dataArray[i]["servicePosition"]+"',"+dataArray[i]["rate"]+",'"+dataArray[i]["certification"]+"','"+dataArray[i]["certificationFile"]+"','"+dataArray[i]["serviceStatus"]+"')");
        getAvailableResponderRatings(dataArray[i]["serviceID"],i);
    
    }

}




// responder ratings
function getAvailableResponderRatings(serviceID,number){
    var serviceID = serviceID;
    var number = number;
    var ratings = document.getElementsByClassName("ratings");
    
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "serviceID=" + serviceID;
  
  
  
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  
           
            // refresh the div to avoid duplication in appending
  
            var dataArray = this.response;
            //console.log("ratings:"+dataArray);
  
            if(dataArray === "Unable to load other available responders"){
  
                //suggestedResponders.innerText = "No other available responders";
                
            } else{
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
  
                ratings[number].innerText = "Ratings: " + dataArray[0]['total ratings'].toFixed(2) + "⭐";
  
            }
  
     
        }else{
            console.log('error');
           
        }      
    };
  
    xmlhttp.open("POST", "Backend/AverageStars.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
  }// end of function


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
function getMyServices(userID){
    
    var userID = userID;
    var query = "userID="+userID;
    
    var xmlhttp = new XMLHttpRequest();
    
  

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("AvailableServicesContainer_Content").innerHTML = "";
            
            //selectedCategory = document.getElementById("selectedCategory");
  

            var dataArray = this.response;
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                // positions(dataArray);
                var number = dataArray.length;
                createServiceElements(number);
                setData(dataArray);

            //console.log(positions(dataArray));

           
     
        }else{
            document.getElementById("AvailableServicesContainer_Content").innerHTML = "Loading..";

        }      
    };
    
    
    xmlhttp.open("POST", "Backend/Get_myServices.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function


// for when a category has been selected
function selectCategory(string){

    var category = string;
    sessionStorage.setItem("selectedCategory",category);

    if(category != "Pasabuy"){
        location.href= "Requestor_SelectedService.php?category=" + category;
    } else {
        location.href= "PasabuyService.php?category=" + category;
    }

}

function closeServiceView(){
    myServiceViewBack = document.getElementById("myServiceViewBack");
    myServiceViewBack.style.display = "none";
}


function showServiceView(serviceID,serviceCategory,servicePosition,rate,certification,certificateFile,serviceStatus){

    serviceIDViewContainer  = document.getElementById("serviceIDViewContainer");
    serviceCategoryViewContainer = document.getElementById("serviceCategoryViewContainer");
    servicePositionViewContainer = document.getElementById("servicePositionViewContainer");
    rateViewContainer = document.getElementById("rateViewContainer");
    certificationViewContainer = document.getElementById("certificationViewContainer");
    certificateFileViewContainer = document.getElementById("certificateFileViewContainer");
    serviceStatusViewContainer = document.getElementById("serviceStatusViewContainer");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");
    serviceIDHidden = document.getElementById("serviceIDHidden");


    myServiceViewBack = document.getElementById("myServiceViewBack");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewTable = document.getElementById("myServiceViewTable");


    
    ServiceFormID = document.getElementById("ServiceFormID");
    ServiceFormCategory = document.getElementById("ServiceFormCategory");
    ServiceFormPosition = document.getElementById("ServiceFormPosition");
    ServiceFormRate = document.getElementById("ServiceFormRate");
    //ServiceFormCertification = document.getElementById("ServiceFormCertification");
    ServiceFormStatus = document.getElementById("ServiceFormStatus");

    ServiceFormCategory.value = serviceCategory
    ServiceFormPosition.value = servicePosition;
    ServiceFormRate.value = rate;
    //ServiceFormCertification.value = certification;
    ServiceFormStatus.value = serviceStatus;
    ServiceFormID.innerText = serviceID;
    serviceIDHidden.value = serviceID;

    
    serviceIDViewContainer.innerText  =  serviceID
    serviceCategoryViewContainer.innerText =  serviceCategory
    servicePositionViewContainer.innerText = servicePosition
    rateViewContainer.innerText = rate
    certificationViewContainer.innerText = certification
    certificateFileViewContainer.innerText = certificateFile
    serviceStatusViewContainer.innerText = serviceStatus

    myServiceViewBack.style.display = "grid";
    myServiceViewTable.style.display = "block";
    myServiceViewForm.style.display = "none";
    myServiceViewEditButton.innerText = "Edit";



        


    
}

function editMyService(){
    myServiceViewTable = document.getElementById("myServiceViewTable");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");

    myServiceViewTable.style.display = "none";
    myServiceViewForm.style.display = "block";
    myServiceViewEditButton.innerText = "Cancel";
    myServiceViewEditButton.style.backgroundColor="red";
    myServiceViewEditButton.style.color="white";
    myServiceViewEditButton.setAttribute("onclick","closeEditMyService()");


}

function closeEditMyService(){
    myServiceViewTable = document.getElementById("myServiceViewTable");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");

    myServiceViewTable.style.display = "block";
    myServiceViewForm.style.display = "none";
    myServiceViewEditButton.innerText = "Edit";
    myServiceViewEditButton.setAttribute("onclick","editMyService()");
    myServiceViewEditButton.style.backgroundColor="white";
    myServiceViewEditButton.style.color="black";
}



