function changeForm(){

    var categories = document.getElementById("categoryPicker");
    var regularServices = document.getElementById("regularServicesForm");
    var pasabuy = document.getElementById("pasabuyForm");
    var otherServices = document.getElementById("otherCategoriesForm");
    var serviceCategoryRegular = document.getElementById("serviceCategoryRegular");

    if(categories.value === "Pasabuy"){
        pasabuy.style.display="inline";
        regularServices.style.display = "none";
        otherServices.style.display = "none";
    } else if(categories.value === "Other"){
        pasabuy.style.display="none";
        regularServices.style.display = "none";
        otherServices.style.display = "inline";
    } else{
        pasabuy.style.display="none";
        regularServices.style.display = "inline";
        otherServices.style.display = "none";
        serviceCategoryRegular.value = categories.value;
    } 

  

}


// gets data from php 
function getCategories(){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("POST", "Backend/Get_categories.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            addOptions(dataArray);
     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


function addOptions(array){

    var dataArray = array;
    

    var number = dataArray.length;
    var select = document.getElementById("categoryPicker");
    var positions = document.getElementById("servicePositionDropDown");
    var j;

    for(var i = 0; i<= number; i++){
        j = i + 1;

  

      

        var option = document.createElement("option");
        var positionOption = document.createElement("option");

        option.text = dataArray[i]['serviceCategory'];
        option.value = dataArray[i]['serviceCategory'];

        positionOption.text = dataArray[i]['servicePosition'];
        positionOption.value = dataArray[i]['servicePosition'];



        select.add(option);
        positions.add(positionOption);
      
    }



}


function array_unique($a) {
    var dataArray = $a;
    dataArray = dataArray.sort();

    return dataArray;
}