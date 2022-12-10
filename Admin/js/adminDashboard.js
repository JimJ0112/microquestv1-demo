// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
         
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createUserElements(number);
                setData(dataArray);

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
            document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading";
            
            
            //console.log(err);
        }      
    };


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
    
        }else{
            document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading";

        }      
    };
    
    xmlhttp.open("POST", "backend/Get_Responders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


// gets Requestors
function getRequestors(){
    var xmlhttp = new XMLHttpRequest();

   
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 


            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
         


            //hideNavMenu();
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                var number = dataArray.length;
                createUserElements(number);
                setData(dataArray);


        


     
        }else{
            document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading..";
           
            //console.log(err);
        }      
    };


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
    
        }else{
            document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading";

        }      
    };

    xmlhttp.open("POST", "backend/Get_Requestors.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


/*
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
*/


// create elements to be appended 

function createUserElements(Number){
 
    DataNumber = Number;
    table = document.getElementById("DashBoardContent_TableBody");
    table.innerHtml = "";
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var tr = document.createElement('tr');


    var generalInfo = document.createElement('td');
    var locationTD = document.createElement('td');
    var accountInfo = document.createElement('td');
    var userIDInfo = document.createElement('td');



    userControls = document.createElement('td');
    acceptButton = document.createElement('button');
    cancelButton = document.createElement('button');



   


   



   // set attributes

   userIDInfo.setAttribute("class","userIDInfo");
   locationTD.setAttribute("class","location");
   generalInfo.setAttribute("class","generalInfo");
   accountInfo.setAttribute("class","accountInfo");

   userControls.setAttribute("class","userControls");
   acceptButton.setAttribute("class","acceptButton");
   cancelButton.setAttribute("class","cancelButton");
   acceptButton.innerText = "Accept";
   cancelButton.innerText = "Cancel";


   // append elements to the row
   userControls.appendChild(acceptButton);
   userControls.appendChild(cancelButton);
   tr.appendChild(userControls);
   tr.appendChild(accountInfo);
   tr.appendChild(locationTD);
   tr.appendChild(generalInfo);
   tr.appendChild(userIDInfo);




   


    table.append(tr);

    } 
    
    
} // end of function




function setData(array){

    var dataArray = array;
    var number = dataArray.length;

   // set attributes
   
   userIDInfo= document.getElementsByClassName("userIDInfo");
   locationTD= document.getElementsByClassName("location");
   generalInfo= document.getElementsByClassName("generalInfo");
   accountInfo= document.getElementsByClassName("accountInfo");

   

   acceptButton= document.getElementsByClassName("acceptButton");
   cancelButton= document.getElementsByClassName("cancelButton");



    for(var i = 0; i<number;i++){
        
      

        var image = new Image();
        image.src = dataArray[i]['userPhoto'];

        image.setAttribute('class','userPhotoImage');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        accountInfo[i].appendChild(image);
    

        var idFileImage = new Image();
        idFileImage.src = dataArray[i]["idFile"];
        idFileImage.setAttribute('class','idFileImage');
        image.setAttribute('onerror',"this.src='img/laundry_servics.jpg'");
        userIDInfo[i].appendChild(idFileImage);
    

 
   
        


        locationTD[i].innerText=  dataArray[i]['houseNo'] +" "+  dataArray[i]['street']+" "+ dataArray[i]['baranggay'] +" "+ dataArray[i]['municipality'];
       
      
     
        generalInfo[i].innerHTML = " <b> Name: <b/>"+ dataArray[i]['firstName'] +" "+  dataArray[i]['lastName']; + "<br/> <b> Birth Date: <b/>" + dataArray[i]['birthDate'] + "<br/> <b> Education: <b/>" + dataArray[i]['education'] + " <b> Gender:  <b/>" + dataArray[i]['userGender'];
       
     
       
       userIDInfo[i].innerHTML = userIDInfo[i].innerHTML + "<br/> <b> ID #: </b>"+ dataArray[i]['idNumber'] + "<br/> <b> ID Type: </b>"+dataArray[i]['idType'] + "<br/> <b> ID Expiration Date: </b>" +  dataArray[i]['idExpiration'];
      
     

        

        accountInfo[i].innerHTML = accountInfo[i].innerHTML + "<br/> <b> User ID: </b> " +  dataArray[i]['userID'] +" <br/>" + dataArray[i]['userName'] + " <br/>" + dataArray[i]['userEmail'] + " <br/>" + dataArray[i]['userType'] + " <br/><b> Specialization: </b>" + dataArray[i]['specialization'];
       
        if(dataArray[i]['userType'] === "Responder"){
            acceptButton[i].setAttribute("onclick","acceptResponder(" + dataArray[i]['userID'] +")");
            cancelButton[i].setAttribute("onclick","cancelResponder(" + dataArray[i]['userID'] +")");

        }else{
            acceptButton[i].setAttribute("onclick","acceptRequestor(" + dataArray[i]['userID'] +")");
            cancelButton[i].setAttribute("onclick","cancelRequestor(" + dataArray[i]['userID'] +")");

        }

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
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            document.getElementById("loadingImage").style.display = "none";
           
           // hideNavMenu();
            

                var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createReportElements(number);
                setReportData(dataArray);
                CreateReportHeaders();
        


        

     
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
   
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var tr = document.createElement('tr');

    Actions = document.createElement('td');
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
  Actions.setAttribute("classs","ActionsTD");
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
 
  

  var button = document.createElement('button');
  button.setAttribute("class","reportSeeMore");
  button.innerText = "View Summary";


  var button1 = document.createElement('button');
  button1.setAttribute("class","sendNotification");
  button1.innerText = "Send Notification";

  var button2 = document.createElement('button');
  button2.setAttribute("class","Suspend");
  button2.innerText = "Restrict";

   // append elements to the row
   Actions.appendChild(button);
   Actions.appendChild(button1);
   Actions.appendChild(button2);

   tr.appendChild(Actions);
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

   var ActionsTD= document.getElementsByClassName("ActionsTD");
   var Suspend= document.getElementsByClassName("Suspend");
   var sendNotification= document.getElementsByClassName("sendNotification") 
   var reportSeeMore = document.getElementsByClassName("reportSeeMore");
   
   var reportCategory = document.getElementsByClassName("reportCategory");
   var reportDate= document.getElementsByClassName("reportDate");
   var reportDescription= document.getElementsByClassName("reportDescription");
   var reportEvidenceContainer= document.getElementsByClassName("reportEvidenceContainer");
   var reportID= document.getElementsByClassName("reportID");
   var reportStatus= document.getElementsByClassName("reportStatus");
   var reportedAccountID= document.getElementsByClassName("reportedAccountID");
   var reportedRequestID= document.getElementsByClassName("reportedRequestID");
   var reportedServiceID= document.getElementsByClassName("reportedServiceID");
   var reporterAccountID= document.getElementsByClassName("reporterAccountID");
   


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
        reportedAccountID[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID="+ dataArray[i]['reportedAccountID']+"')");

        reportedRequestID[i].innerText = dataArray[i]["reportedRequestID"];

        reportedServiceID[i].innerText = dataArray[i]["reportedServiceID"];

        reporterAccountID[i].innerText = dataArray[i]["reporterAccountID"];
        

        reportSeeMore[i].setAttribute("onclick","reportSeeMore(" + dataArray[i]['reportID'] + ")");
        reportedAccountID[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID="+dataArray[i]["reportedAccountID"]+"&reportID="+ dataArray[i]["reportID"] +"&userType=Responder')");
        reporterAccountID[i].setAttribute("onclick","redirect('ViewUserProfile.php?userID="+dataArray[i]["reporterAccountID"]+"&reportID="+ dataArray[i]["reportID"] +"userType=Responder')");

        sendNotification[i].setAttribute("onclick","notifUserForm(" + dataArray[i]['reportedAccountID'] + ")");
        Suspend[i].setAttribute("onclick","restrictUserForm(" +dataArray[i]['reportID']+ ")" );

        


    }

}


function redirect(url){
    var url  = url;
    location.href = url;

};


function CreateReportHeaders(){
    var DashBoardContent_TableHead = document.getElementById("DashBoardContent_TableHead");
    DashBoardContent_TableHead.innerHTML = "";

    var tr = document.createElement('tr');

    ActionsContainerHead = document.createElement('td');
    reportID = document.createElement('td');
    reportedAccountID= document.createElement('td');
    reporterAccountID= document.createElement('td');
    reportedRequestID= document.createElement('td');
    reportedServiceID= document.createElement('td');
    reportCategory= document.createElement('td');
    reportDate= document.createElement('td');
    reportDescription= document.createElement('td');
    reportEvidenceContainer= document.createElement('td');
    reportStatus= document.createElement('td');

    ActionsContainerHead.innerText = "Actions";
    reportID.innerText = "Report ID";
    reportedAccountID.innerText = "Reported Account";
    reporterAccountID.innerText = "Reporter Account";
    reportedRequestID.innerText = "Reported Request";
    reportedServiceID.innerText = "Reported Service";
    reportCategory.innerText = "Category";
    reportDate.innerText = "Date";
    reportDescription.innerText = "Description";
    reportEvidenceContainer.innerText = "Evidence";
    reportStatus.innerText = "Status";

    tr.appendChild(ActionsContainerHead);
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


    DashBoardContent_TableHead.appendChild(tr);


    
}


/* report actions  */
/* admin Controls forms */
function closeForms(){
    restrictFormBack = document.getElementById("restrictFormBack");
    BanFormBack= document.getElementById("BanFormBack");
    sendNotificationFormBack= document.getElementById("sendNotificationFormBack");
  
    sendNotificationFormBack.style.display = "none";
    BanFormBack.style.display = "none";
    restrictFormBack.style.display = "none";
    
  }
  
  function banUserForm(reportID){
  
    var reportID= reportID;
    var reportedUserIDBan = document.getElementById("reportedUserIDBan");
    BanFormBack= document.getElementById("BanFormBack");
    BanFormBack.style.display = "grid";
    reportedUserIDBan.value=reportID;



  }
  
  
function restrictUserForm(reportID){
  
    var reportID = reportID;
 
    var reportIDRestrict = document.getElementById("reportIDRestrict");
    restrictFormBack = document.getElementById("restrictFormBack");
    restrictFormBack.style.display = "grid";
    reportIDRestrict.value = reportID;


}
  
function notifUserForm(reportID){
  
    var reportID = reportID;
    sendNotificationFormBack= document.getElementById("sendNotificationFormBack");
    reportIDNotif = document.getElementById("reportIDNotif");
    sendNotificationFormBack.style.display = "grid";
    reportIDNotif.value = reportID;

}


function reportSeeMore(reportID){
    var reportID = reportID;
    location.href="ReportSummary.php?reportID="+reportID;

}


function acceptResponder(userID){
    var userID = userID;
    var status = "verified";
    var query = "userID="+userID+"&status="+status;

    if (confirm('Are you sure you want to accept this user?')) {
    
        var xmlhttp = new XMLHttpRequest();
    



        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 


     
            

                var dataArray = this.response;

                console.log(dataArray);
                if(dataArray = 1){
                    alert("success");
                    location.href="approveResponders.php";
                } else{
                    alert("failed");
                    location.href="approveResponders.php";

                }



     
            }else{
         
      
            }      
        };
    
        xmlhttp.open("POST", "backend/UpdateUserStatus.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(query);
    }else{

    }
    
}// end of function

function cancelResponder(userID){
    var userID = userID;
    var status = "Declined";
    var query = "userID="+userID+"&status="+status;
    
    if (confirm('Are you sure you want to decline this user?')) {

        var xmlhttp = new XMLHttpRequest();
    



        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 


     
            

                var dataArray = this.response;

                console.log(dataArray);
                if(dataArray = 1){
                    alert("success");
                    location.href="approveResponders.php";
                } else{
                    alert("failed");
                    location.href="approveResponders.php";

                }



     
            }else{
         
      
            }      
        };
    
        xmlhttp.open("POST", "backend/UpdateUserStatus.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(query);
    }else{

    }
    
}// end of function

function acceptRequestor(userID){
    var userID = userID;
    var status = "verified";
    var query = "userID="+userID+"&status="+status;
    
    if (confirm('Are you sure you want to accept this user?')) {
        var xmlhttp = new XMLHttpRequest();
    



        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 


     
            

                var dataArray = this.response;

                console.log(dataArray);
                if(dataArray =1){
                    alert("success");
                    location.href="approveRequestors.php";
                } else{
                    alert("failed");
                    location.href="approveRequestors.php";

                }



     
            }else{
         
      
            }      
        };
    
        xmlhttp.open("POST", "backend/UpdateUserStatus.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(query);
    }else{

    }
    
}// end of function

function cancelRequestor(userID){
    var userID = userID;
    var status = "Declined";
    var query = "userID="+userID+"&status="+status;
    
    if (confirm('Are you sure you want to decline this user?')) {

    var xmlhttp = new XMLHttpRequest();
    



        xmlhttp.onload = function() {
                if (this.readyState === 4 || this.status === 200){ 


     
            

                var dataArray = this.response;

                console.log(dataArray);
                if(dataArray = 1){
                    alert("success");
                    location.href="approveResponders.php";
                } else{
                    alert("failed");
                    location.href="approveResponders.php";

                }



     
            }else{
         
      
            }      
        };
    
    xmlhttp.open("POST", "backend/UpdateUserStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    }else{

    }
}// end of function