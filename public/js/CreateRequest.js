// gets all services 
function getServices(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_otherServices.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
           
        
  

            
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){


            } else{

            dataArray = JSON.parse(dataArray);
            console.log(dataArray);


            var number = dataArray.length;
          
            //dataArray = categories(dataArray);
            setOptions(dataArray);
     
            }
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// set options to dropdown  
function setOptions(array){

    var dataArray = array;
    var number = dataArray.length;

    var serviceDropDown = document.getElementById("DropDownRequestCategory");
    for(var i = 0; i<number;i++){
        
        
        var option = new Option;
        option.innerText = dataArray[i]["serviceCategory"];
        option.value = dataArray[i]["serviceCategory"];
        serviceDropDown.add(option);

    }

    var option = new Option;
    option.innerText = "Other";
    option.value = "Other";
    serviceDropDown.add(option);

    
}

function setCategory(){
    var serviceDropDown = document.getElementById("DropDownRequestCategory");
    var regularRequestForm = document.getElementById("regularRequestForm");
    var pasabuyRequestForm = document.getElementById("pasabuyRequestForm");
    var otherCategoriesRequestForm = document.getElementById("otherCategoriesRequestForm");
    var requestCategory = document.getElementById("requestCategory");
    var DisplayCategory = document.getElementById("DisplayCategory");

    serviceDropDownValue = serviceDropDown.value;

    if(serviceDropDownValue === "Other"){
        DisplayCategory.innerText = serviceDropDownValue;
        regularRequestForm.style.display = 'none';
        otherCategoriesRequestForm.style.display = 'grid';
        pasabuyRequestForm.style.display = 'none';

    } else if(serviceDropDownValue === "Pasabuy"){

        regularRequestForm.style.display = 'none';
        otherCategoriesRequestForm.style.display = 'none';
        pasabuyRequestForm.style.display = 'grid';

    } else{
        regularRequestForm.style.display = 'grid';
        otherCategoriesRequestForm.style.display = 'none';
        pasabuyRequestForm.style.display = 'none';
        DisplayCategory.innerText = serviceDropDownValue;
        requestCategory.value = serviceDropDownValue;
    }
    
}