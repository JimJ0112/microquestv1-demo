function openNavMenu(){
    var navMenu = document.getElementById("navMenu");
    var caret = document.getElementById("caret");
    
    var navMenuDisplay = navMenu.style.display;
    if(navMenuDisplay === "none"){
        navMenu.style.display = "block";
        caret.innerText = "▲";
        
    } else{
        navMenu.style.display = "none";
        caret.innerText = "▼";

    }
}


function getUserImage(){
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           


            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);


     
        }else{
            //console.log(err);
            console.log("loading...")
        }      
    };
    xmlhttp.open("POST", "Backend/Get_products.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}