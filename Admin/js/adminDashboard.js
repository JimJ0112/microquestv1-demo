// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            document.getElementById("loadingImage").style.display = "none";
           
            hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                console.log(number);
                createUserElements(number);
                setData(dataArray);

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
            document.getElementById("loadingImage").style.display = "block";
            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_Responders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


// gets Requestors
function getRequestors(){
    var xmlhttp = new XMLHttpRequest();

   
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 


            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            document.getElementById("loadingImage").style.display = "none";


            hideNavMenu();
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                var number = dataArray.length;
                createUserElements(number);
                setData(dataArray);


        


     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading..";
            document.getElementById("loadingImage").style.display = "block";
            //console.log(err);
        }      
    };

    xmlhttp.open("POST", "backend/Get_Requestors.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function



// create elements to be appended 
function createUserElements(Number){
 
    DataNumber = Number;
    table = document.getElementById("DashBoardContent_TableBody");
    table.innerHtml = "";
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var tr = document.createElement('tr');

    baranggay = document.createElement('td');
    birthDate = document.createElement('td');
    education = document.createElement('td');
    firstName= document.createElement('td');
    houseNo= document.createElement('td');
    idExpiration= document.createElement('td');
    idFile= document.createElement('td');
    idFileType= document.createElement('td');
    idNumber= document.createElement('td');
    idType= document.createElement('td');
    lastName= document.createElement('td');
    municipality= document.createElement('td');
    otherIDFile= document.createElement('td');
    otherIDNumber= document.createElement('td');
    otherIDType= document.createElement('td');
    otheridExpiration= document.createElement('td');
    specialization= document.createElement('td');
    street= document.createElement('td');
    userEmail= document.createElement('td');
    userGender= document.createElement('td');
    userID= document.createElement('td');
    userName= document.createElement('td');
    userPhoto= document.createElement('td');
    userStatus= document.createElement('td');
    userType= document.createElement('td');
    userControls = document.createElement('td');
    acceptButton = document.createElement('button');
    cancelButton = document.createElement('button');



   


   



   // set attributes
   baranggay.setAttribute("class","baranggay");
   birthDate.setAttribute("class","birthDate");
   education.setAttribute("class","education");
   firstName.setAttribute("class","firstName");
   houseNo.setAttribute("class","houseNo");
   idExpiration.setAttribute("class","idExpiration");
   idFile.setAttribute("class","idFile");
   //idFileType.setAttribute("class","idFileType");
   idNumber.setAttribute("class","idNumber");
   idType.setAttribute("class","idType");
   lastName.setAttribute("class","lastName");
   municipality.setAttribute("class","municipality");
   otherIDFile.setAttribute("class","otherIDFile");
   otherIDNumber.setAttribute("class","otherIDNumber");
   otherIDType.setAttribute("class","otherIDType");
   otheridExpiration.setAttribute("class","otheridExpiration");
   specialization.setAttribute("class","specialization");
   street.setAttribute("class","street");
   userEmail.setAttribute("class","userEmail");
   userGender.setAttribute("class","userGender");
   userID.setAttribute("class","userID");
   userName.setAttribute("class","userName");
   userPhoto.setAttribute("class","userPhoto");
   //userStatus.setAttribute("class","userStatus");
   userType.setAttribute("class","userType");
   userControls.setAttribute("class","userControls");
   acceptButton.setAttribute("class","acceptButton");
   cancelButton.setAttribute("class","cancelButton");
   acceptButton.innerText = "Accept";
   cancelButton.innerText = "Cancel";


   // append elements to the row
   userControls.appendChild(acceptButton);
   userControls.appendChild(cancelButton);
   tr.appendChild(userControls);
   tr.appendChild(userID);
   tr.appendChild(userPhoto);
   tr.appendChild(userName);
   tr.appendChild(userEmail);
   tr.appendChild(userType);
   tr.appendChild(specialization);
   tr.appendChild(firstName);
   tr.appendChild(lastName);
   tr.appendChild(userGender);
   tr.appendChild(birthDate);
   tr.appendChild(education);
   tr.appendChild(houseNo);
   tr.appendChild(baranggay);
   tr.appendChild(street);
   tr.appendChild(municipality);
   tr.appendChild(idType);
   tr.appendChild(idFile);
   tr.appendChild(idNumber);
   tr.appendChild(idExpiration);
   tr.appendChild(otherIDType);
   tr.appendChild(otherIDFile);
   tr.appendChild(otherIDNumber);
   tr.appendChild(otheridExpiration);
  
   //tr.appendChild(userPhoto);
   //tr.appendChild(userPhoto);
   //tr.appendChild(userPhoto);
   //tr.appendChild(userPhoto);
   //tr.appendChild(userPhoto);

   


    table.append(tr);

    } 
    
    
} // end of function


// set positions data 
function setData(array){

    var dataArray = array;
    var number = dataArray.length;

   // set attributes
   baranggay= document.getElementsByClassName("baranggay");
   birthDate= document.getElementsByClassName("birthDate");
   education= document.getElementsByClassName("education");
   firstName= document.getElementsByClassName("firstName");
   houseNo= document.getElementsByClassName("houseNo");
   idExpiration= document.getElementsByClassName("idExpiration");
   idFile= document.getElementsByClassName("idFile");
 
   idNumber= document.getElementsByClassName("idNumber");
   idType= document.getElementsByClassName("idType");
   lastName= document.getElementsByClassName("lastName");
   municipality= document.getElementsByClassName("municipality");
   otherIDFile= document.getElementsByClassName("otherIDFile");
   otherIDNumber= document.getElementsByClassName("otherIDNumber");
   otherIDType= document.getElementsByClassName("otherIDType");
   otheridExpiration= document.getElementsByClassName("otheridExpiration");
   specialization= document.getElementsByClassName("specialization");
   street= document.getElementsByClassName("street");
   userEmail= document.getElementsByClassName("userEmail");
   userGender= document.getElementsByClassName("userGender");
   userID= document.getElementsByClassName("userID");
   userName= document.getElementsByClassName("userName");
   userPhoto= document.getElementsByClassName("userPhoto");
   userType= document.getElementsByClassName("userType");
   acceptButton= document.getElementsByClassName("acceptButton");
   cancelButton= document.getElementsByClassName("cancelButton");



    for(var i = 0; i<number;i++){
        
        

        var image = new Image();
        image.src = dataArray[i]['userPhoto'];

        image.setAttribute('class','userPhotoImage');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        userPhoto[i].appendChild(image);

        var idFileImage = new Image();
        idFileImage.src = dataArray[i]["idFile"];
        idFileImage.setAttribute('class','idFileImage');
        image.setAttribute('onerror',"this.src='img/laundry_servics.jpg'");
        idFile[i].appendChild(idFileImage);

        var otherIDFileImage = new Image();
        otherIDFileImage.src = dataArray[i]["otherIDFile"];
        otherIDFileImage.setAttribute('class','otherIDFileImage');
        otherIDFileImage.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        otherIDFile[i].appendChild(otherIDFileImage);
        


        baranggay[i].innerText= dataArray[i]['baranggay']
        birthDate[i].innerText= dataArray[i]['birthDate']
        education[i].innerText= dataArray[i]['education']
        firstName[i].innerText= dataArray[i]['firstName']
        houseNo[i].innerText= dataArray[i]['houseNo']
        idExpiration[i].innerText= dataArray[i]['idExpiration']
        //idFile[i].innerText= dataArray[i]['userPhoto']
      
        idNumber[i].innerText= dataArray[i]['idNumber']
        idType[i].innerText=dataArray[i]['idType']
        lastName[i].innerText= dataArray[i]['lastName']
        municipality[i].innerText= dataArray[i]['municipality']
        //otherIDFile[i].innerText=dataArray[i]['userPhoto']
        otherIDNumber[i].innerText= dataArray[i]['otherIDNumber']
        otherIDType[i].innerText= dataArray[i]['otherIDType']
        otheridExpiration[i].innerText= dataArray[i]['otheridExpiration']
        specialization[i].innerText= dataArray[i]['specialization']
        street[i].innerText= dataArray[i]['street']
        userEmail[i].innerText= dataArray[i]['userEmail']
        userGender[i].innerText= dataArray[i]['userGender']
        userID[i].innerText= dataArray[i]['userID']
        userName[i].innerText= dataArray[i]['userName']
        //userPhoto[i].innerText= dataArray[i]['userPhoto']
        userType[i].innerText= dataArray[i]['userType']
        //acceptButton[i].innerText= dataArray[i]['acceptButton']
        //cancelButton[i].innerText= dataArray[i]['userPhoto']
    }

}



function hideNavMenu(){
    navmenu = document.getElementById("NavMenu");
     //if(navmenu.style.display === "block"){
       // navmenu.style.display = "none";
   // }
   navmenu.style.animation="slideback 2s";
   navmenu.style.left  = "-600px";
   console.log(navmenu.style.animation);


}


// for reports

function getAllReports(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            document.getElementById("loadingImage").style.display = "none";
           
            hideNavMenu();
            

            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createReportElements(number);
                setReportData(dataArray);


        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
            document.getElementById("loadingImage").style.display = "block";
            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_Reports.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function



// create Report elements
// create elements to be appended 
function createReportElements(Number){
 
    DataNumber = Number;
    table = document.getElementById("DashBoardContent_TableBody");
    table.innerHtml = "";
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var tr = document.createElement('tr');

    reportCategory = document.createElement('td');
    reportDate = document.createElement('td');
    reportDescription = document.createElement('td');
    reportEvidenceContainer = document.createElement('td');
    reportID = document.createElement('td');
    reportStatus = document.createElement('td');
    reportedAccountID = document.createElement('td');
    reportedRequestID = document.createElement('td');
    reportedServiceID = document.createElement('td');
    reporterAccountID = document.createElement('td');
   



   // set attributes
  reportCategory.setAttribute("class","reportCategory");
  reportDate.setAttribute("class","reportDate");
  reportDescription.setAttribute("class","reportDescription");
  reportEvidenceContainer.setAttribute("class","reportEvidenceContainer");
  reportID.setAttribute("class","reportID");
  reportStatus.setAttribute("class","reportStatus");
  reportedAccountID.setAttribute("class","reportedAccountID");
  reportedRequestID.setAttribute("class","reportedRequestID");
  reportedServiceID.setAttribute("class","reportedServiceID");
  reporterAccountID.setAttribute("class","reporterAccountID");


   // append elements to the row
   tr.appendChild(reportID);
   tr.appendChild(reportedAccountID);
   tr.appendChild(reporterAccountID);
   tr.appendChild(reportedRequestID);
   tr.appendChild(reportedServiceID);
   tr.appendChild(reportCategory);
   tr.appendChild(reportDate);
   tr.appendChild(reportDescription);
   tr.appendChild(reportEvidenceContainer);
   tr.appendChild(reportStatus);

 
  

   


    table.append(tr);

    } 
    
    
} // end of function


// set Report data

// set positions data 
function setReportData(array){

    var dataArray = array;
    var number = dataArray.length;

   // set attributes

   reportCategory = document.getElementsByClassName("reportCategory");
   reportDate= document.getElementsByClassName("reportDate");
   reportDescription= document.getElementsByClassName("reportDescription");
   reportEvidenceContainer= document.getElementsByClassName("reportEvidenceContainer");
   reportID= document.getElementsByClassName("reportID");
   reportStatus= document.getElementsByClassName("reportStatus");
   reportedAccountID= document.getElementsByClassName("reportedAccountID");
   reportedRequestID= document.getElementsByClassName("reportedRequestID");
   reportedServiceID= document.getElementsByClassName("reportedServiceID");
   reporterAccountID= document.getElementsByClassName("reporterAccountID");


    for(var i = 0; i<number;i++){
        


        var image = new Image();
        image.src = dataArray[i]['reportEvidence'];

        image.setAttribute('class','reportEvidence');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        reportEvidenceContainer[i].appendChild(image);

        reportCategory[i].innerText = dataArray[i]["reportCategory"];
        reportDate[i].innerText = dataArray[i]["reportDate"];
        reportDescription[i].innerText = dataArray[i]["reportDescription"];
        reportID[i].innerText = dataArray[i]["reportID"];
        reportStatus[i].innerText = dataArray[i]["reportStatus"];
        reportedAccountID[i].innerText = dataArray[i]["reportedAccountID"];
        reportedRequestID[i].innerText = dataArray[i]["reportedRequestID"];
        reportedServiceID[i].innerText = dataArray[i]["reportedServiceID"];
        reporterAccountID[i].innerText = dataArray[i]["reporterAccountID"];
        


    }

}