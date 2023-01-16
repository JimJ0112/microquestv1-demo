
function submitForm(){
    RegistrationForm = document.getElementById("RegistrationForm");
    RegistrationForm.submit();
}

/* Dropdown menus */


/*
function nextForm(){

   // var ResponderInfoForm = document.getElementById("ResponderInfoForm");
    var GeneralInfoForm = document.getElementById("GeneralInfoForm");
    var AccountInfoForm = document.getElementById("AccountInfoForm");
    

    var RegistrationBackButton = document.getElementById("RegistrationBackButton");
    var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");
    var EmailVerificationForm = document.getElementById("EmailVerificationForm");

    var GeneralInfoFormDisplay = window.getComputedStyle(GeneralInfoForm).display;
    var AccountInfoFormDisplay = window.getComputedStyle(AccountInfoForm).display;
    var EmailVerificationFormDisplay = window.getComputedStyle(EmailVerificationForm).display;
   // var ResponderInfoFormDisplay = window.getComputedStyle(ResponderInfoForm);

    console.log(AccountInfoFormDisplay);

    if(AccountInfoFormDisplay != "none" && EmailVerificationFormDisplay  === "none"){
        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "block";
        GeneralInfoForm.style.display = "none";
        //ResponderInfoForm.style.display = "none";
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
        //ResponderInfoForm.style.display = "none";
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


    }

}
*/


function nextForm(){
    var GeneralInfoForm = document.getElementById("GeneralInfoForm");
    var AccountInfoForm = document.getElementById("AccountInfoForm");
    

    
    checkUserName();
    checkEmail();
    var RegistrationBackButton = document.getElementById("RegistrationBackButton");
    var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");
    var EmailVerificationForm = document.getElementById("EmailVerificationForm");

    checkInputs_AccountInfo();
    emailVerification();
    sessionStorage.setItem("EmailConfirmationAttempt", 3);

    var RegistrationNextButton = document.getElementById("RegistrationNextButton");
    RegistrationNextButton.disabled = true;



    AccountInfoForm.style.display = "none";
    EmailVerificationForm.style.display = "block";


}




function checkInputs_ConfirmPassword(){

    var RegistrationNextButton = document.getElementById("RegistrationNextButton");

    Username = document.getElementById("Username");
    Email= document.getElementById("Email");
    Password= document.getElementById("Password");
    ConfirmPassword= document.getElementById("ConfirmPassword");
    passwordmatch = document.getElementById("passwordmatch");


        
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
            //ConfirmPassword.focus();
        }
        //checkInputs_GeneralInfo();
        //checkUserName();
        //checkEmail();

}


function checkInputs_AccountInfo(){
    var RegistrationNextButton = document.getElementById("RegistrationNextButton");

    Username = document.getElementById("Username");
    Email= document.getElementById("Email");
    Password= document.getElementById("Password");
    ConfirmPassword= document.getElementById("ConfirmPassword");
    //checkUserName();
    //checkEmail();

    var checkedUserNameResult = sessionStorage.getItem("userNameExists");
    var checkedEmailResult = sessionStorage.getItem("EmailExists");
    var EmailValid = sessionStorage.getItem("EmailValid");
    

    if(Username.value != "" &&
       Email.value != ""&&
       Password.value != ""&&
       ConfirmPassword.value !=""&&
       checkedUserNameResult === "false" &&
       checkedEmailResult === "false" &&
       EmailValid === "true"
    ){
        //RegistrationNextButton.disabled = false;

        emailVerification();
        sessionStorage.setItem("EmailConfirmationAttempt", 3);
    
        //var RegistrationNextButton = document.getElementById("RegistrationNextButton");
        //RegistrationNextButton.disabled = true;
    
    
    
        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "block";

    } else if (checkedUserNameResult === "true"){
        //RegistrationNextButton.disabled = true;
        alert("username already exists");
    }else if(checkedEmailResult === "true"){
        alert("email already exists");

    }else if(EmailValid  === "false"){
        alert("email not valid");
    }else{
        Username.focus();
    }

}









function init(){ 
    // This is the function the browser first runs when it's loaded.
    //checkInputs_AccountInfo();
    
    
    // Then runs the refresh function for the first time.
    var int = self.setInterval(function () {

   //checkInputs_AccountInfo();
  // checkUserName();
  // checkEmail();

    }, 2000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}



/* Email verification part */
function emailVerification(){

   var userEmail = document.getElementById('Email').value;

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

}


function checkEmailVerificationCode(){
    code = sessionStorage.getItem("vercode");
    var emailConfirmationInput = document.getElementById("emailConfirmationInput").value;
    var ConfirmEmailButton = document.getElementById("ConfirmEmailButton");
    var ConfirmEmailAttempts = document.getElementById("ConfirmEmailAttempts");
    var ConfirmEmailResult = document.getElementById("ConfirmEmailResult");
    var ResumeInText = document.getElementById("ResumeInText");
    var RegistrationNextButton1 = document.getElementById("RegistrationNextButton1");
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
   
        var GeneralInfoForm = document.getElementById("GeneralInfoForm");
        var AccountInfoForm = document.getElementById("AccountInfoForm");
        var hidden = document.getElementById('hidden');
        
    
        var RegistrationBackButton = document.getElementById("RegistrationBackButton");
        var RegistrationRegisterButton = document.getElementById("RegistrationRegisterButton");
        var RegistrationNextButton1 = document.getElementById("RegistrationNextButton1");
        var nextBtn = document.getElementsByClassName('nextBtn');
        var RegistrationNextButton = document.getElementById("RegistrationNextButton");
        var EmailVerificationForm = document.getElementById("EmailVerificationForm");
    
        
        AccountInfoForm.style.display = "none";
        EmailVerificationForm.style.display = "none";
        hidden.style.display = "unset";
       
        RegistrationNextButton1.style.display = "unset";
        nextBtn[0].style.display = "unset";



      
        //checkInputs_GeneralInfo();
    
    
    
     
        
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
    var RegistrationNextButton = document.getElementById('RegistrationNextButton');
    
  
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
                    
                  // RegistrationNextButton.disabled = true;
                    //checkInputs_AccountInfo();
                    

                
                } else{
                    userNameChecker.innerText = username + " is available";
                    userNameChecker.style.color = "green";
                    sessionStorage.setItem("userNameExists",false);
                   // checkInputs_AccountInfo()

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
    var RegistrationNextButton = document.getElementById('RegistrationNextButton');
    


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
                    
                   // RegistrationNextButton.disabled = true;
                    //checkInputs_AccountInfo();
                } else{
                    emailChecker.innerText = Email + " is available";
                    emailChecker.style.color = "green";
                    sessionStorage.setItem("EmailExists",false);
                    sessionStorage.setItem("EmailValid",true);

                    //checkInputs_AccountInfo();

                }
    
    
         
            }else{
                console.log(err);
            
            }      
        };
        
        xmlhttp.send(query);
       // checkInputs_AccountInfo();

    } else{

        if(Email != ""){

            emailChecker.innerText = "Please Enter a valid email address";
            emailChecker.style.color = "red";
            sessionStorage.setItem("EmailValid",false);

        } else{

            emailChecker.innerText = "";
            sessionStorage.setItem("EmailValid",true);


        }

    }
    
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}





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

function listBaranggay(){

   

    baranggay = document.getElementById('baranggay');
    Municipality = document.getElementById('Municipality');
    console.log(Municipality.value);

    if(Municipality.value === "Abucay"){

        var barangaysList = [
            "Bangkal", 
            "Calaylayan", 
            "Capitangan",
            "Gabon", 
            "Laon",
            "Mabatang", 
            "Omboy", 
            "Salian",
            "Wawa" ];

            addBarangays(barangaysList);
            console.log(Municipality.value);

    } else if (Municipality.value === "Bagac"){
        var barangaysList  = [
            "Atilano L. Ricardo", 
            "Bagumbayan", 
            "Banawang", 
            "Binuangan", 
            "Binukawan", 
            "Ibaba", 
            "Ibis", 
            "Pag-asa", 
            "Parang", 
            "Paysawan", 
            "Quinawan", 
            "San Antonio", 
            "Saysain", 
            "Tabing-Ilog" ];
            addBarangays(barangaysList);
        console.log(Municipality.value);

    }else if (Municipality.value === "Balanga"){
        var barangaysList  = [
            "Bagong Silang", 
            "Bagumbayan", 
            "Cabog-Cabog", 
            "Camacho", 
            "Cataning", 
            "Central", 
            "Cupang North", 
            "Cupang Proper", 
            "Cupang West", 
            "Dangcol", 
            "Doña Francisca", 
            "Ibayo", 
            "Lote", 
            "Malabia", 
            "Munting Batangas", 
            "Poblacion", 
            "Pto. Rivas Ibaba", 
            "Pto. Rivas Itaas", 
            "San Jose", 
            "Sibacan", 
            "Talisay", 
            "Tanato", 
            "Tenejero", 
            "Tortugas", 
            "Tuyo" ];
            addBarangays(barangaysList);
    }else if (Municipality.value === "Dinalupihan"){

        var barangaysList  = [
            "Daang Bago", 
            "Dalao",
            "Del Pilar", 
            "Gen. Luna",
            "Gomez", 
            "Happy Valley", 
            "Jose C. Payumo, Jr.", 
            "Kataasan",
            "Layac", 
            "Luacan", 
            "Mabini Ext.", 
            "Mabini Proper", 
            "Magsaysay", 
            "Maligaya", 
            "Naparing", 
            "New San Jose", 
            "Old San Jose", 
            "Padre Dandan", 
            "Pag-asa", 
            "Pagalanggang", 
            "Payangan", 
            "Pentor", 
            "Pinulot", 
            "Pita", 
            "Rizal", 
            "Roosevelt", 
            "Roxas", 
            "Saguing", 
            "San Benito", 
            "San Isidro", 
            "San Pablo", 
            "San Ramon", 
            "San Simon", 
            "Santa Isabel",
            "Santo Niño", 
            "Sapang Balas", 
            "Torres Bugauen", 
            "Tubo-tubo", 
            "Tucop", 
            "Zamora" ];
            addBarangays(barangaysList);
    }else if (Municipality.value === "Hermosa"){

        var barangaysList  = [
           "A. Rivera",
           "Almacen", 
           "Bacong", 
           "Balsic", 
           "Bamban", 
           "Burgos-Soliman", 
           "Cataning", 
           "Culis", 
           "Daungan", 
           "Judge Roman Cruz Sr.", 
           "Mabiga", 
           "Mabuco", 
           "Maite", 
           "Mambog-Mandama", 
           "Palihan", 
           "Pandatung", 
           "Pulo", 
           "Saba", 
           "Sacrifice Valley", 
           "San Pedro", 
           "Santo Cristo", 
           "Sumalo", 
           "Tipo" ];
           addBarangays(barangaysList);
    }else if (Municipality.value === "Limay"){
        var barangaysList  = [
            "Alangan", 
            "Duale", 
            "Kitang 2 & Luz", 
            "Kitang I", 
            "Lamao", 
            "Landing", 
            "Poblacion", 
            "Reformista", 
            "Saint Francis II", 
            "San Francisco de Asis", 
            "Townsite", 
            "Wawa"];
            addBarangays(barangaysList);
    }else if (Municipality.value === "Mariveles"){
        var barangaysList  = [
            "Alas-asin", 
            "Alion", 
            "Balon-Anito",
            "Baseco Country", 
            "Batangas II", 
            "Biaan", 
            "Cabcaben", 
            "Camaya", 
            "Ipag", 
            "Lucanin", 
            "Malaya", 
            "Maligaya", 
            "Mt. View", 
            "Poblacion",
            "San Carlos",
            "San Isidro",
            "Sisiman",
            "Townsite"];
            addBarangays(barangaysList);
    }else if (Municipality.value === "Morong"){

        var barangaysList  = [
            "Binaritan", 
            "Mabayo", 
            "Nagbalayong",
            "Poblacion", 
            "Sabang"];
            addBarangays(barangaysList);

    }else if (Municipality.value === "Orani"){
        var barangaysList  = [
            "Apollo",
            "Bagong Paraiso", 
            "Balut", 
            "Bayan", 
            "Calero", 
            "Centro I", 
            "Centro II", 
            "Dona", 
            "Kabalutan", 
            "Kaparangan", 
            "Maria Fe", 
            "Masantol", 
            "Mulawin", 
            "Pag-asa", 
            "Paking-Carbonero", 
            "Palihan", 
            "Pantalan Bago", 
            "Pantalan Luma", 
            "Parang Parang", 
            "Puksuan", 
            "Sibul", 
            "Silahis", 
            "Tagumpay", 
            "Tala", 
            "Talimundoc", 
            "Tapulao", 
            "Tenejero", 
            "Tugatog", 
            "Wawa"
            ];
            addBarangays(barangaysList);
    }else if (Municipality.value === "Orion"){
        var barangaysList  = [
            "Arellano",
            "Bagumbayan", 
            "Balagtas", 
            "Balut", 
            "Bantan", 
            "Bilolo", 
            "Calungusan", 
            "Camachile", 
            "Daang Bago", 
            "Daang Bilolo", 
            "Daang Pare", 
            "General Lim", 
            "Kapunitan", 
            "Lati", 
            "Lusungan", 
            "Puting Buhangin", 
            "Sabatan", 
            "San Vicente", 
            "Santa Elena", 
            "Santo Domingo", 
            "Villa Angeles", 
            "Wakas", 
            "Wawa"
            ];
            addBarangays(barangaysList);

    }else if (Municipality.value === "Pilar"){

        var barangaysList  = [
            "Ala-uli", 
            "Bagumbayan", 
            "Balut I", 
            "Balut II", 
            "Bantan Munti", 
            "Burgos", 
            "Del Rosario", 
            "Diwa", 
            "Landing", 
            "Liyang", 
            "Nagwaling", 
            "Panilao", 
            "Pantingan", 
            "Poblacion", 
            "Rizal", 
            "Santa Rosa", 
            "Wakas North", 
            "Wakas South",
            "Wawa" 
            ];
            addBarangays(barangaysList);

    }else if (Municipality.value === "Samal"){
        var barangaysList  = [
            "East Calaguiman",
            "East Daang Bago", 
            "Gugo", 
            "Ibaba",
            "Imelda", 
            "Lalawigan", 
            "Palili", 
            "San Juan", 
            "San Roque",
            "Santa Lucia", 
            "Sapa",
            "Tabing Ilog",
            "West Calaguiman",
            "West Daang Bago"
            ];

            addBarangays(barangaysList);

    } else{

        var option = new Option;
        option.innerText = "Please select a municipality Before selecting a barangay";
        option.disabled = true;
        baranggay.add(option);
    }

}


// set options to dropdown  
function addBarangays(array){

    var dataArray = array;
    var number = dataArray.length;

    document.getElementById('baranggay').innerHTML = "";
    baranggay = document.getElementById('baranggay');

    for(var i = 0; i<number;i++){
        
        //serviceCard[i].innerText = dataArray[i];
        //serviceCard[i].setAttribute("onclick","setCategory('" + dataArray[i] + "')");
        var option = new Option;
        option.innerText = dataArray[i];
        option.value = dataArray[i];
        baranggay.add(option);

    }



    
}