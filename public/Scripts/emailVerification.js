// for getting products for pasabuy
function verifyEmail(){
   var userEmail = document.getElementById('userEmail').value;
   var code = Math.floor(Math.random()*90000) + 10000;
   sessionStorage.setItem('vercode',code);
   var query  = "userEmail="+userEmail+"&code="+code;
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/sendEmailVerification.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           


            var dataArray = this.response;

            console.log(dataArray);

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

function checkTextboxes(){
    var userEmail = document.getElementById('userEmail');
    var userName= document.getElementsByName("userName") 
    var userPassword = document.getElementsByName("userPassword");
    var confirmPassword  = document.getElementById("confirmPassword");
    var firstName = document.getElementsByName("firstName");
    var lastName  = document.getElementsByName("lastName");
    var userGender = document.getElementsByName("userGender");
    var education  = document.getElementsByName("education");
    var birthDate  = document.getElementsByName("birthDate");
    var houseNumber = document.getElementsByName("houseNumber");
    var street= document.getElementsByName("street");
    var baranggay = document.getElementsByName("baranggay"); 
    var municipality  = document.getElementsByName("municipality");
    var idType  = document.getElementsByName("idType");
    var idFile = document.getElementsByName("idFile");
    var idNumber = document.getElementsByName("idNumber");
    var idExpiration  = document.getElementsByName("idExpiration");
    var userPhoto = document.getElementsByName("userPhoto");

    var RegisterButton = document.getElementById("RegisterButton");

    console.log(confirmPassword.value);
    console.log(userPassword[0].value)
    if(confirmPassword.value === userPassword[0].value){
            if(
                userEmail.value != "" &&
                userName[0].value != "" &&
                userPassword[0].value != "" &&
                confirmPassword.value != "" &&
                firstName[0].value != "" &&
                lastName[0].value != "" &&
                userGender[0].value != "" &&
                education[0].value != "" &&
                birthDate[0].value != "" &&
                houseNumber[0].value != "" &&
                street[0].value != "" &&
                baranggay[0] .value != "" &&
                municipality[0] .value != "" &&
                idType[0].value != "" &&
                idFile[0].value != "" &&
                idNumber[0].value != "" &&
                idExpiration[0].value != "" &&
                userPhoto[0].value != "" 
            ){
                RegisterButton.disabled = true;
                verifyEmail();
                openForms();
            } else{
                alert("please fill out all input boxes");
            } // end of inner if

    } else{
        alert("password not the same");
    }


}// end of function


 
// opening forms
function openForms(){
    var modal = document.getElementById("modalBackground");
    modal.style.display = "block";


}



// for closing the forms
function closeForms(){
    var modal = document.getElementById("modalBackground");
   modal.style.display = "none";
   var RegisterButton = document.getElementById("RegisterButton");
   RegisterButton.disabled = false;
   //sessionStorage.setItem('vercode','');


}

function confirmCode(){
    var emailCode = document.getElementById('emailCode');
    var registerForm =document.getElementById('registerForm');
    var code = sessionStorage.getItem('vercode');
    var codeErrorMessage = document.getElementById('codeErrorMessage');
    var modal = document.getElementById("modalBackground");

    if(emailCode.value === code){
        registerForm.submit();
        codeErrorMessage.innerText = "";
        emailCode.value = "";  
        modal.style.display = "none";

    } else {
        codeErrorMessage.innerText = "code you entered dont match with the code we sent to your email"; 
        emailCode.value = "";  
    }
}



