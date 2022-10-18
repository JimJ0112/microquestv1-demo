// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    


    xmlhttp.open("POST", "backend/Get_Responders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// gets Requestors
function getRequestors(){
    
    
    var xmlhttp = new XMLHttpRequest();
    


    xmlhttp.open("POST", "backend/Get_Requestors.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function



// create elements to be appended 
function createServiceElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("AvailableServicesContainer-Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var card = document.createElement('div');
    var ServiceTitleBackground = document.createElement('div');
    var serviceTitle = document.createElement('span');
    var BannerContainer = document.createElement('div');
    var br = document.createElement('br');
   


   



   // set attributes
    card.setAttribute('class','AvailableService-Card');
    ServiceTitleBackground.setAttribute('class','ServiceTitleBackground');
    serviceTitle.setAttribute('class','serviceTitle');
    BannerContainer.setAttribute('class','BannerContainer');
    


   // append elements to the row
    ServiceTitleBackground.appendChild(serviceTitle);
    card.appendChild(ServiceTitleBackground);
    card.appendChild(BannerContainer);
   


    div.append(card);

    } 
    
    
} // end of function