// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    


    xmlhttp.open("POST", "backend/Get_Responders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        

            //console.log(positions(dataArray));

            console.log(categories(dataArray))
     
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
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        

            //console.log(positions(dataArray));

            console.log(categories(dataArray))
     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function