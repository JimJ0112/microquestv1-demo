function submitForm(){
    RegistrationForm = document.getElementById("RegistrationForm");
    RegistrationForm.submit();
}


/* Dropdown menus */



function nextForm(){

    var ResponderInfoForm = document.getElementById("ResponderInfoForm");
    var GeneralInfoForm = document.getElementById("GeneralInfoForm");
    var AccountInfoForm = document.getElementById("AccountInfoForm");
    

    var RegistrationBackButton = document.getElementById("RegistrationBackButton");
    var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");
    var EmailVerificationForm = document.getElementById("EmailVerificationForm");

    var GeneralInfoFormDisplay = window.getComputedStyle(GeneralInfoForm).display;
    var AccountInfoFormDisplay = window.getComputedStyle(AccountInfoForm).display;
    var EmailVerificationFormDisplay = window.getComputedStyle(EmailVerificationForm).display;
    var ResponderInfoFormDisplay = window.getComputedStyle(ResponderInfoForm);

    console.log(AccountInfoFormDisplay);

    if(AccountInfoFormDisplay != "none" && EmailVerificationFormDisplay  === "none"){
        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "block";
        GeneralInfoForm.style.display = "none";
        ResponderInfoForm.style.display = "none";
        RegistrationNextButton.style.display = "block";
        RegistrationBackButton.style.display = "none";
        RegistrationRegisterButton.style.display = "none";

        checkInputs_AccountInfo();
        emailVerification();
        sessionStorage.setItem("EmailConfirmationAttempt", 3);

        var RegistrationNextButton = document.getElementById("RegistrationNextButton");
        RegistrationNextButton.disabled = true;

    } else if(AccountInfoFormDisplay === "none" && EmailVerificationFormDisplay  === "block"){

        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "none";
        GeneralInfoForm.style.display = "block";
        ResponderInfoForm.style.display = "none";
        RegistrationNextButton.style.display = "block";
        RegistrationBackButton.style.display = "block";
        RegistrationRegisterButton.style.display = "none";
        RegistrationNextButton.disabled = true;
        //checkInputs_GeneralInfo();



    }  else if(EmailVerificationFormDisplay === "none" && GeneralInfoFormDisplay  === "block"){

        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "none";
        GeneralInfoForm.style.display = "none";
        ResponderInfoForm.style.display = "block";
        RegistrationNextButton.style.display = "none";
        RegistrationBackButton.style.display = "block";
        RegistrationRegisterButton.style.display = "block";
        RegistrationNextButton.disabled = true;
        checkInputs_GeneralInfo();
        checkInputs_ResponderInfo();


    }  else if(GeneralInfoFormDisplay  === "none" && ResponderInfoFormDisplay   === "block"){

        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "none";
        GeneralInfoForm.style.display = "none";
        ResponderInfoForm.style.display = "block";
        RegistrationNextButton.style.display = "none";
        RegistrationBackButton.style.display = "block";
        RegistrationRegisterButton.style.display = "block";
        RegistrationNextButton.disabled = true;
        checkInputs_ResponderInfo();


    }else {

        /*
        GeneralInfoForm.style.display = "block";
        ResponderInfoForm.style.display = "none";
        RegistrationBackButton.style.display = "none";
        checkInputs_AccountInfo();
        */
    }

}

function backForm(){

    var ResponderInfoForm = document.getElementById("ResponderInfoForm");
    var GeneralInfoForm = document.getElementById("GeneralInfoForm");
    var AccountInfoForm = document.getElementById("AccountInfoForm");

    var RegistrationBackButton = document.getElementById("RegistrationBackButton");
    var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");


    var ResponderInfoFormDisplay = window.getComputedStyle(ResponderInfoForm).display;
    var GeneralInfoFormDisplay = window.getComputedStyle(GeneralInfoForm).display;
    var AccountInfoFormDisplay = window.getComputedStyle(AccountInfoForm).display;



    if(ResponderInfoFormDisplay === "block" && GeneralInfoFormDisplay ==="none"){

        GeneralInfoForm.style.display = "block";
        ResponderInfoForm.style.display = "none";
        AccountInfoForm.style.display = "none";
        RegistrationBackButton.style.display = "block";
        RegistrationRegisterButton.style.display = "none";
        RegistrationNextButton.style.display = "block";


    } else if(GeneralInfoFormDisplay === "block" && AccountInfoFormDisplay === "none"){

        GeneralInfoForm.style.display = "none";
        ResponderInfoForm.style.display = "none";
        AccountInfoForm.style.display = "grid";
        RegistrationBackButton.style.display = "none";
        RegistrationRegisterButton.style.display = "none";
        RegistrationNextButton.style.display = "block";
       

    } else {
        GeneralInfoForm.style.display = "none";
        ResponderInfoForm.style.display = "block";
        RegistrationBackButton.style.display = "none";
    }

}



function checkInputs_ConfirmPassword(){

    var RegistrationNextButton = document.getElementById("RegistrationNextButton");

    Username = document.getElementById("Username");
    Email= document.getElementById("Email");
    Password= document.getElementById("Password");
    ConfirmPassword= document.getElementById("ConfirmPassword");
    passwordmatch = document.getElementById("passwordmatch");

    var checkedUserNameResult = sessionStorage.getItem("userNameExists");
    var checkedEmailResult = sessionStorage.getItem("EmailExists");


        
        if(Password.value !="" && 
            ConfirmPassword.value !="" && 
            Password.value === ConfirmPassword.value
  
        ){
            RegistrationNextButton.disabled = false;
            passwordmatch.innerText = "Password match";
            passwordmatch.style.color = "limegreen";

        } else {
            RegistrationNextButton.disabled = true;
            passwordmatch.innerText = "Password doesn't match";
            passwordmatch.style.color = "darkred";
            ConfirmPassword.focus();
        }
        //checkInputs_GeneralInfo();

}


function checkInputs_AccountInfo(){
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");

    Username = document.getElementById("Username");
    Email= document.getElementById("Email");
    Password= document.getElementById("Password");
    ConfirmPassword= document.getElementById("ConfirmPassword");
    var checkedUserNameResult = sessionStorage.getItem("userNameExists");
    var checkedEmailResult = sessionStorage.getItem("EmailExists");
    

    if(Username.value != "" &&
       Email.value != ""&&
       Password.value != ""&&
       ConfirmPassword.value !=""&&
       checkedUserNameResult === "false" &&
       checkedEmailResult === "false"
    ){
        RegistrationNextButton.disabled = false;
    } else{
        RegistrationNextButton.disabled = true;
    }

}


function checkInputs_GeneralInfo(){

    var RegistrationNextButton = document.getElementById("RegistrationNextButton");

    FirstName = document.getElementById("FirstName");
    MiddleName= document.getElementById("MiddleName");
    LastName= document.getElementById("LastName");
    Municipality= document.getElementById("Municipality");
    Address= document.getElementById("Address");
    Birthdate = document.getElementById("Birthdate");
    Male= document.getElementById("Male");
    Female = document.getElementById("Female");


   console.log("checkInputs_GeneralInfo")
    
    if( FirstName.value !="" &&
        MiddleName.value !="" &&
        LastName.value  !="" &&
        Municipality.value!="" &&
        Address.value !="" &&
        Birthdate.value != "" &&
        Male.checked == true ||
        Female.checked == true
    ){
        //console.log("type");
        RegistrationNextButton.disabled = false;
    } else{
       //console.log("not type");
        RegistrationNextButton.disabled = true;
    }

    


}


function checkInputs_ResponderInfo(){

    var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");



    Education= document.getElementById("Education");
    IDType= document.getElementById("IDType");
    IDFile= document.getElementById("IDFile");
    IDNumber= document.getElementById("IDNumber");
    IDExpirationDate= document.getElementById("IDExpirationDate");
    Specialization= document.getElementById("specialization");
    ProfilePicture = document.getElementById("ProfilePicture ");

    if( 
        Education.value !="" &&
        IDType.value !="" &&
       // IDFile.files.size  != 0 &&
        IDNumber.value!="" &&
        IDExpirationDate.value !="" &&
        Specialization.value != ""
        //Specialization.value != "" &&
        //ProfilePicture.files.size != 0
    ){
        console.log("type");
        RegistrationRegisterButton.disabled = false;
    } else{
        console.log("not type");
        RegistrationRegisterButton.disabled = true;
    }

}



function init() { 
    // This is the function the browser first runs when it's loaded.
    //checkInputs_AccountInfo();
    //checkInputs_GeneralInfo();  
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {
   // getMessages();
   // setConversation();
   //checkInputs_AccountInfo();
   //checkInputs_AccountInfo();
   //checkInputs_GeneralInfo();  

    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}



/* Email verification part */
function emailVerification(){

   var userEmail = document.getElementById('Email').value;

   var code = Math.floor(Math.random()*90000) + 10000;
   //var code = 1;
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

}

function checkEmailVerificationCode(){
    code = sessionStorage.getItem("vercode");
    var emailConfirmationInput = document.getElementById("emailConfirmationInput").value;
    var ConfirmEmailButton = document.getElementById("ConfirmEmailButton");
    var ConfirmEmailAttempts = document.getElementById("ConfirmEmailAttempts");
    var ConfirmEmailResult = document.getElementById("ConfirmEmailResult");
    var ResumeInText = document.getElementById("ResumeInText");
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");


    RegistrationNextButton.disabled = true;
    var Attempts= sessionStorage.getItem("EmailConfirmationAttempt");

    if(code != emailConfirmationInput){
        //emailVerificationWrongCode();
        Attempts = Attempts - 1;
        sessionStorage.setItem("EmailConfirmationAttempt",Attempts);
        ConfirmEmailAttempts.innerText = "Attempts Left: "+Attempts;

        ConfirmEmailResult.innerText = "Code Incorrect!";
        ConfirmEmailResult.style.color = "red";

        //alert(Attempts);

        if(Attempts === 0){
            localStorage.setItem("AttemptTimer-Minute",3);
            localStorage.setItem("AttemptTimer-Seconds",60);
            ResumeInText.style.display = "block";
            attemptTimer();
            ConfirmEmailButton.disabled = true;

        }
    } else if(code === emailConfirmationInput){
        RegistrationNextButton.disabled = false;
        var ResponderInfoForm = document.getElementById("ResponderInfoForm");
        var GeneralInfoForm = document.getElementById("GeneralInfoForm");
        var AccountInfoForm = document.getElementById("AccountInfoForm");
        
    
        var RegistrationBackButton = document.getElementById("RegistrationBackButton");
        var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
        var RegistrationNextButton = document.getElementById("RegistrationNextButton");
        var EmailVerificationForm = document.getElementById("EmailVerificationForm");
    
        var GeneralInfoFormDisplay = window.getComputedStyle(GeneralInfoForm).display;
        var AccountInfoFormDisplay = window.getComputedStyle(AccountInfoForm).display;
        var EmailVerificationFormDisplay = window.getComputedStyle(EmailVerificationForm).display;
        var ResponderInfoFormDisplay = window.getComputedStyle(ResponderInfoForm);


        if(AccountInfoFormDisplay === "none" && EmailVerificationFormDisplay  === "block"){

            AccountInfoForm.style.display = "none";
            EmailVerificationForm.style.display = "none";
            GeneralInfoForm.style.display = "block";
            ResponderInfoForm.style.display = "none";
            RegistrationNextButton.style.display = "block";
            RegistrationBackButton.style.display = "block";
            RegistrationRegisterButton.style.display = "none";
            RegistrationNextButton.disabled = true;
            checkInputs_GeneralInfo();
    
    
    
        }
        
    }

    
}



function attemptTimer(){
    var timerMinutes = localStorage.getItem("AttemptTimer-Minute");
    var timerSeconds = localStorage.getItem("AttemptTimer-Seconds");
    var ConfirmEmailButton = document.getElementById("ConfirmEmailButton");
    var ConfirmEmailAttempts = document.getElementById("ConfirmEmailAttempts");
    var ConfirmEmailResult = document.getElementById("ConfirmEmailResult");
    var ResumeInText = document.getElementById("ResumeInText");
    

    var emailTimerMinutes = document.getElementById("emailTimerMinutes");
    var emailTimerSeconds = document.getElementById("emailTimerSeconds");



    var timer = setInterval(function(){
        timerSeconds = timerSeconds - 1;

        if(timerSeconds === 0 ){
            timerMinutes = timerMinutes - 1;
            timerSeconds = 60;
        }


        localStorage.setItem("currentMinutes",timerMinutes);
        localStorage.setItem("currentSeconds",timerSeconds)

        currentMinutes = localStorage.getItem("currentMinutes");
        currentSeconds = localStorage.getItem("currentSeconds");

        console.log("timer minutes:"+timerMinutes);
        console.log("timer Seconds:"+timerSeconds);

        emailTimerMinutes.innerText = currentMinutes;
        emailTimerSeconds.innerText = currentSeconds;

        if(currentMinutes <= 0){

            clearInterval(timer);
            //alert('Minutes = ' + currentMinutes);
            sessionStorage.setItem("EmailConfirmationAttempt",3);
            ConfirmEmailAttempts.innerText = "";
            emailTimerMinutes.innerText = "3";
            emailTimerSeconds.innerText = "00";
            ConfirmEmailButton.disabled = false;

            ConfirmEmailResult.innerText = " ";
            ConfirmEmailResult.style.color = "red";
            ResumeInText.style.display = "none";

            
            
        }

    },1000);



}



/*Set data to specialization drop down */

// gets all services 
function getServices(){
    
    
    var xmlhttp = new XMLHttpRequest();
    
  
    

    xmlhttp.open("POST", "Backend/Get_Specializations.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
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

window.onload = function() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    //Add a zero if one Digit (eg: 05,09)
    if (dd < 10) {
      dd = "0" + dd;
    }

    //Add a zero if one Digit (eg: 05,09)
    if (mm < 10) {
      mm = "0" + mm;
    }

    
    maxYear = yyyy - 18; //Calculate Maximum Age (>18)


    var max = maxYear + "-" + mm + "-" + dd;

    
    document.getElementById("Birthdate").setAttribute("max", max);

    getServices();
  };


  function showProfilePicOutput(event){
    var imageOutputContainer = document.getElementById("userProfilePicOutput");
    var ProfilePicture = document.getElementById("ProfilePicture");

   
    var fileSize = event.target.files[0].size;
    var fileType = event.target.files[0].type;
    var isSmallEnough;
    var isImage;
    console.log(fileSize);
    console.log(fileType);

        if(fileSize < 9000000){
            isSmallEnough = true;
        }else{
            isSmallEnough = false;
            window.alert('File too large');
            ProfilePicture.value = "";
        }

        if(fileType === 'image/jpg' ||fileType === 'image/png'||fileType === 'image/jpeg' ){
            isImage = true;
        }else{
            isImage = false;
            window.alert('Filetype not compatible');
            ProfilePicture.value = "";
        }



        if(isSmallEnough === true && isImage === true){
            imageOutputContainer.src =  URL.createObjectURL(event.target.files[0]);
        }else{
            window.alert('File could not be uploaded');
            ProfilePicture.value = "";
        }

  }

  function showIDPicOutput(event){
    var imageOutputContainer = document.getElementById("userIDPicOutput");
    var IDFile = document.getElementById("IDFile");

   
    var fileSize = event.target.files[0].size;
    var fileType = event.target.files[0].type;
    var isSmallEnough;
    var isImage;
    console.log(fileSize);
    console.log(fileType);


        if(fileSize <= 9000000){
            isSmallEnough = true;
        }else{
            isSmallEnough = false;
            window.alert('File too large');
            IDFile.value = "";
        }

        if(fileType === 'image/jpg' ||fileType === 'image/png'||fileType === 'image/jpeg' ){
            isImage = true;
        }else{
            isImage = false;
            window.alert('Filetype not compatible');
            IDFile.value = "";
        }



        if(isSmallEnough === true && isImage === true){
            imageOutputContainer.src =  URL.createObjectURL(event.target.files[0]);
        }else{
            window.alert('File could not be uploaded');
            IDFile.value = "";
        }

  }





function checkUserName(){
    
    var xmlhttp = new XMLHttpRequest();
    var username = document.getElementById("Username").value;
    var userNameChecker = document.getElementById("userNameChecker");
    var query = "userName="+username;
    
  
    if(!username.replace(/\s/g, '').length){
        userNameChecker.innerText ="";
    } else{

        xmlhttp.open("POST", "Backend/CheckUserName.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 
               
               
                var dataArray = this.response;
                console.log(dataArray);
                
                if(dataArray === "true"){
                    userNameChecker.innerText = "UserName already exists!";
                    userNameChecker.style.color = "red";
                    sessionStorage.setItem("userNameExists",true);
                    checkInputs_AccountInfo();
                
                } else{
                    userNameChecker.innerText = username + " is available";
                    userNameChecker.style.color = "green";
                    sessionStorage.setItem("userNameExists",false);
                    checkInputs_AccountInfo()

                }
    
    
         
            }else{
                console.log(err);
            
            }      
        };
        
        xmlhttp.send(query);
       
    }
    


}


function checkEmail(){
    
    var xmlhttp = new XMLHttpRequest();
    var Email = document.getElementById("Email").value;
    var emailChecker = document.getElementById("emailChecker");
    


    var query = "Email="+Email;
    
    var regexCheck  = validateEmail(Email);
  
  
    if(regexCheck){

        xmlhttp.open("POST", "Backend/CheckEmail.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 || this.status === 200){ 
               
               
                var dataArray = this.response;
                console.log(dataArray);
                
                if(dataArray === "true"){
                    emailChecker.innerText = "Email already exists!";
                    emailChecker.style.color = "red";
                    sessionStorage.setItem("EmailExists",true);
                    checkInputs_AccountInfo();
                } else{
                    emailChecker.innerText = Email + " is available";
                    emailChecker.style.color = "green";
                    sessionStorage.setItem("EmailExists",false);
                    checkInputs_AccountInfo();

                }
    
    
         
            }else{
                console.log(err);
            
            }      
        };
        
        xmlhttp.send(query);
        checkInputs_AccountInfo();

    } else{

        if(Email != ""){
        emailChecker.innerText = "Please Enter a valid email address";
        emailChecker.style.color = "red";
        } else{
            emailChecker.innerText = "";
        }

    }
    
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
    
  }