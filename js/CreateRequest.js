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

    var serviceCard = document.getElementById("RequestCategory");
    for(var i = 0; i<number;i++){
        
        
        var option = new Option;
        option.innerText = dataArray[i]["serviceCategory"];
        option.value = dataArray[i]["serviceCategory"];
        serviceCard.add(option);

    }

    var option = new Option;
    option.innerText = "Other";
    option.value = "Other";
    serviceCard.add(option);

    
}