// gets all services 
function getServices(){
    
    
    var xmlhttp = new XMLHttpRequest();
    
  
    

    xmlhttp.open("POST", "Backend/Get_Specializations.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
           
  

            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
          
            dataArray = categories(dataArray);

            console.log(dataArray);
            setData(dataArray);

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


//  extracting categories
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

// set data to dropdown

function setData(array){
    var dataArray = array;
    var number = dataArray.length;
    var specializations = document.getElementById('specialization');
    for(var i=0; i<number;i++){
        var option = document.createElement('option');
        option.innerText = dataArray[i];
        option.value = dataArray[i];
        specializations.add(option);
    }
}
