
var responder = document.getElementById("Responder");
var requestor = document.getElementById("Requestor");

var RequestorCheck = document.getElementById("RequestorCheck");
var ResponderCheck = document.getElementById("ResponderCheck");

var RequestorCheckMark = document.getElementById("RequestorCheckMark");
var ResponderCheckMark = document.getElementById("ResponderCheckMark");

var NextButton = document.getElementById("Next");



RequestorCheck.addEventListener("click",function(){
    console.log(RequestorCheck.checked);
    if(RequestorCheck.checked){
        requestor.style.filter = "grayscale(0%)";
        responder.style.filter = "grayscale(100%)";
        NextButton.disabled = false;
        
        RequestorCheckMark.style.opacity = "100%";
        ResponderCheckMark.style.opacity = "0";  
        sessionStorage.setItem("ChooseAccountType","Requestor");
    }else{
         responder.style.filter = "grayscale(100%)";
         requestor.style.filter = "grayscale(100%)";
         NextButton.disabled = true;
    }
    
})


ResponderCheck.addEventListener("click",function(){
    console.log(RequestorCheck.checked);

    if(ResponderCheck.checked){
        responder.style.filter = "grayscale(0%)";
        requestor.style.filter = "grayscale(100%)";
        NextButton.disabled = false;

        RequestorCheckMark.style.opacity = "0";
        ResponderCheckMark.style.opacity = "100%";  
        sessionStorage.setItem("ChooseAccountType","Responder");
    }else{
        responder.style.filter = "grayscale(100%)";
        requestor.style.filter = "grayscale(100%)";
        NextButton.disabled = true;
    }
    
})



NextButton.addEventListener("click",function(){

    var ChooseAccountType = sessionStorage.getItem("ChooseAccountType");
    if(ChooseAccountType === "Responder"){
       window.location.href="ResponderRegistration.php";
    } else{
       window.location.href="RequestorRegistration.php";

    }
})
