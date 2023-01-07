// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("LoadingScreen").style.display = "none";

         
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createUserElements(number);
                setData(dataArray);

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
            document.getElementById("LoadingScreen").style.display = "grid";

            
            
            //console.log(err);
        }      
    };


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
    
        }else{

            document.getElementById("LoadingScreen").style.display = "grid";

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


            //document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            document.getElementById("LoadingScreen").style.display = "none";
         


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
           // document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading";
           document.getElementById("LoadingScreen").style.display = "grid";


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
        image.setAttribute('onclick','viewImage("' + dataArray[i]['userPhoto'] + '")');
        accountInfo[i].appendChild(image);
    

        var idFileImage = new Image();
        idFileImage.src = dataArray[i]["idFile"];
        idFileImage.setAttribute('class','idFileImage');
        idFileImage.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        idFileImage.setAttribute('onclick','viewImage("' + dataArray[i]['idFile'] + '")');
        userIDInfo[i].appendChild(idFileImage);
    

 
   
        


        locationTD[i].innerText=  dataArray[i]['houseNo'] +" "+  dataArray[i]['street']+" "+ dataArray[i]['baranggay'] +" "+ dataArray[i]['municipality'];
       
      
     
        generalInfo[i].innerHTML =  dataArray[i]['firstName'] +" "+  dataArray[i]['lastName']; + "<br/> <b> Birth Date: <b/>" + dataArray[i]['birthDate'] + "<br/> <b> Education: <b/>" + dataArray[i]['education'] + " <b> Gender:  <b/>" + dataArray[i]['userGender'];
       
     
       
       userIDInfo[i].innerHTML = userIDInfo[i].innerHTML + "<br/> <b> ID #: </b>"+ dataArray[i]['idNumber'] + "<br/> <b> ID Type: </b>"+dataArray[i]['idType'] + "<br/> <b> ID Expiration Date: </b>" +  dataArray[i]['idExpiration'];
      
     

        

        //accountInfo[i].innerHTML = accountInfo[i].innerHTML + "<br/> <b> User ID: </b> " +  dataArray[i]['userID'] +" <br/>" + dataArray[i]['userName'] + " <br/>" + dataArray[i]['userEmail'] + " <br/>" + dataArray[i]['userType'] + " <br/><b> Specialization: </b>" + dataArray[i]['specialization'];
       
        if(dataArray[i]['userType'] === "Responder"){
            accountInfo[i].innerHTML = accountInfo[i].innerHTML + "<br/> <b> User ID: </b> " +  dataArray[i]['userID'] +" <br/>" + dataArray[i]['userName'] + " <br/>" + dataArray[i]['userEmail'] + " <br/>" + dataArray[i]['userType'] + " <br/><b> Specialization: </b>" + dataArray[i]['specialization'];

            acceptButton[i].setAttribute("onclick","acceptResponder(" + dataArray[i]['userID'] +")");
            cancelButton[i].setAttribute("onclick","cancelResponder(" + dataArray[i]['userID'] +")");

        }else{
            accountInfo[i].innerHTML = accountInfo[i].innerHTML + "<br/> <b> User ID: </b> " +  dataArray[i]['userID'] +" <br/>" + dataArray[i]['userName'] + " <br/>" + dataArray[i]['userEmail'] + " <br/>" + dataArray[i]['userType'];
            acceptButton[i].setAttribute("onclick","acceptRequestor(" + dataArray[i]['userID'] +")");
            cancelButton[i].setAttribute("onclick","cancelRequestor(" + dataArray[i]['userID'] +")");

        }

        acceptButton[i].className += " buttonGreen";
        cancelButton[i].className += " buttonRed";



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

            
           //document.getElementById("DashBoardContent_TableBody").innerHTML = "";
            //document.getElementById("loadingImage").style.display = "none";
           document.getElementById("LoadingScreen").style.display = "none";

           
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

    xmlhttp.onreadystatechange = function(){
        document.getElementById("LoadingScreen").style.display = "grid";

    }
    
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
  button2.innerText = "Restrict Reported Account";

  

  
  var button3 = document.createElement('button');
  button3.setAttribute("class","Decline");
  button3.innerText = "Decline";

  var button4 = document.createElement('button');
  button4.setAttribute("class","BanButton");
  button4.innerText = "Ban Reported Account";

   // append elements to the row
   Actions.appendChild(button);
   Actions.appendChild(button1);
   Actions.appendChild(button2);
   Actions.appendChild(button4);
   Actions.appendChild(button3);
   

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
   var Decline = document.getElementsByClassName("Decline");
   var BanButton = document.getElementsByClassName("BanButton");
   
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
        image.setAttribute('onclick','viewImage("' + dataArray[i]['reportEvidence'] + '")');

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

        Decline[i].setAttribute("onclick","declineReport(" +dataArray[i]['reportID'] + ")" );
        BanButton[i].setAttribute("onclick","banUserForm("+dataArray[i]['reportID'] + ")");

        reportSeeMore[i].className += " buttonOrange";
        sendNotification[i].className += " buttonGreen";
        Suspend[i].className += " buttonBlue";
        BanButton[i].className += " buttonRed";
        Decline[i].className += " buttonRed";

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
   // var reportedUserIDBan = document.getElementById("reportedUserIDBan");
   var reportedUserIDBan = document.getElementById("reportID");
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
               document.getElementById("ProcessingScreen").style.display = "none";


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
    

        xmlhttp.onreadystatechange = function() {
        
               var acceptButton = document.getElementsByClassName("acceptButton");

               

                    for(var i=0;i<acceptButton.length;i++){

                        acceptButton[i].disabled = true;
                        acceptButton[i].backgroundColor="white";
                        acceptButton.innerText = "Loading...";
                    }
              
                    
                    document.getElementById("ProcessingScreen").style.display = "grid";

                
         
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


                document.getElementById("ProcessingScreen").style.display = "none";
     
            

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

        xmlhttp.onreadystatechange = function() {
        
            var acceptButton = document.getElementsByClassName("acceptButton");

            

                 for(var i=0;i<acceptButton.length;i++){

                     acceptButton[i].disabled = true;
                     acceptButton[i].backgroundColor="white";
                     acceptButton.innerText = "Loading...";
                 }
           
                 
                 document.getElementById("ProcessingScreen").style.display = "grid";

             
      
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


     
                document.getElementById("ProcessingScreen").style.display = "none";
            

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

        xmlhttp.onreadystatechange = function() {
        
            var acceptButton = document.getElementsByClassName("acceptButton");

            

                 for(var i=0;i<acceptButton.length;i++){

                     acceptButton[i].disabled = true;
                     acceptButton[i].backgroundColor="white";
                     acceptButton.innerText = "Loading...";
                 }
           
                 
                 document.getElementById("ProcessingScreen").style.display = "grid";

             
      
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


     
            
                document.getElementById("ProcessingScreen").style.display = "none";

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


        xmlhttp.onreadystatechange = function() {
        
            var acceptButton = document.getElementsByClassName("acceptButton");

            

                 for(var i=0;i<acceptButton.length;i++){

                     acceptButton[i].disabled = true;
                     acceptButton[i].backgroundColor="white";
                     acceptButton.innerText = "Loading...";
                 }
           
                 
                 document.getElementById("ProcessingScreen").style.display = "grid";

             
      
        };
    
    xmlhttp.open("POST", "backend/UpdateUserStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

    }else{

    }
}// end of function



function declineReport(reportID){
    var reportID = reportID;
    var status = "Declined";
    var query = "reportID="+reportID+"&status="+status;
    
    if (confirm('Are you sure you want to decline this report?')) {

    var xmlhttp = new XMLHttpRequest();
    



        xmlhttp.onload = function() {
                if (this.readyState === 4 || this.status === 200){ 


     
            
                document.getElementById("ProcessingScreen").style.display = "none";

                var dataArray = this.response;

                console.log(dataArray);
                if(dataArray = 1){
                    alert("success");
                    location.href="pendingReports.php";
                } else{
                    alert("failed");
                    location.href="pendingReports.php";

                }



     
            }else{
         
      
            }      
        };


        xmlhttp.onreadystatechange = function() {
        
            var acceptButton = document.getElementsByClassName("acceptButton");

            

                 for(var i=0;i<acceptButton.length;i++){

                     acceptButton[i].disabled = true;
                     acceptButton[i].backgroundColor="white";
                     acceptButton.innerText = "Loading...";
                 }
           
                 
                 document.getElementById("ProcessingScreen").style.display = "grid";

             
      
        };
    
    xmlhttp.open("POST", "backend/UpdateReportStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    }else{

    }

}


function viewImage(image){
    var image = image;
    var viewImageBack = document.getElementById("viewImageBack");
    var viewImage = document.getElementById("viewImage");
    viewImage.src = image;
    viewImageBack.style.display = "grid";

}

function closeImage(){
    var viewImageBack = document.getElementById("viewImageBack");
    viewImageBack.style.display = "none";

}



/*get banned users */
function Get_AllBannedUsersData(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
     
           document.getElementById("LoadingScreen").style.display = "none";

           

            

                var dataArray = this.response;
           
                if(dataArray === "failed to fetch"){
                    document.getElementById("DashBoardContent_TableBody").innerText = "No Banned Accounts ";

                } else{
                    dataArray = JSON.parse(dataArray);
                    console.log(dataArray);

                    var number = dataArray.length;
                    createBannedUsersElements(number)
                    setBannedData(dataArray);

                }
  
        


        

     
        }else{
         
            document.getElementById("loadingImage").style.display = "block";
            
           
        }      
    };

    xmlhttp.onreadystatechange = function(){
        document.getElementById("LoadingScreen").style.display = "grid";

    }
    
    xmlhttp.open("POST", "backend/Get_AllBannedUsersData.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


function createBannedUsersElements(number){
    var number = number;
    var DashBoardContent_TableBody = document.getElementById("DashBoardContent_TableBody");
    var DashBoardContent_TableHead = document.getElementById("DashBoardContent_TableHead");

    document.getElementById("DashBoardContent_TableBody").innerHTML = "";
    document.getElementById("DashBoardContent_TableHead").innerHTML = "";

    var tr = document.createElement("tr");
    var Actions = document.createElement("td");
    var UserInfo = document.createElement("td");
    var UserPic = document.createElement("td");
    var ReportInfo = document.createElement("td");
    var ReportPic = document.createElement("td");
    var Status = document.createElement("td");

     Actions.innerText = "Actions";
     UserInfo.innerText = "User Info";
     UserPic.innerText = "";
     ReportInfo.innerText = "Report Info";
     ReportPic.innerText = "";
     Status.innerText ="Status";

     tr.appendChild(Actions);
     tr.appendChild(UserInfo);
     tr.appendChild(UserPic);
     tr.appendChild(ReportInfo);
     tr.appendChild(ReportPic);
     tr.appendChild(Status);


     DashBoardContent_TableHead.appendChild(tr);



    for(var i =0; i<number;i++){
        var tr = document.createElement("tr");
        var userInfoDiv = document.createElement('td');
        var userProfileDiv = document.createElement('td');


        var reportinfoDiv = document.createElement('td');
        var reportEvidenceDiv = document.createElement('td');
        var reportStatus = document.createElement('td');

        var buttonsDiv = document.createElement('td');
        var unbanButton = document.createElement('button');
        


        userInfoDiv.setAttribute("class","userInfoDiv");
        userProfileDiv.setAttribute("class","userProfileDiv");


        reportinfoDiv.setAttribute("class","reportinfoDiv");
        reportEvidenceDiv.setAttribute("class","reportEvidenceDiv"); 
        reportStatus.setAttribute("class","reportStatus");

        buttonsDiv.setAttribute("class","buttonsDiv");
        unbanButton.setAttribute("class","unbanButton");
        unbanButton.innerText = "Unban";

        buttonsDiv.appendChild(unbanButton);

        tr.appendChild(buttonsDiv);
        tr.appendChild(userInfoDiv);
        tr.appendChild(userProfileDiv);
        tr.appendChild(reportinfoDiv);
        tr.appendChild(reportEvidenceDiv);
        tr.appendChild(reportStatus);

        
        DashBoardContent_TableBody.appendChild(tr);
        
    }

}


function setBannedData(dataArray){
    var dataArray = dataArray;
    var num = dataArray.length;

    
    userInfoDiv= document.getElementsByClassName("userInfoDiv");
    userProfileDiv= document.getElementsByClassName("userProfileDiv");


    reportinfoDiv= document.getElementsByClassName("reportinfoDiv");
    reportEvidenceDiv= document.getElementsByClassName("reportEvidenceDiv"); 
    reportStatus= document.getElementsByClassName("reportStatus");

  
    unbanButton= document.getElementsByClassName("unbanButton");

    for(var i=0; i<num; i++){

        var image = new Image();
        image.src = dataArray[i]["userPhoto"];
        image.setAttribute("class","userPhotoImage");
        image.setAttribute("onclick","viewImage('" + dataArray[i]["userPhoto"] + "')");


        var image1 = new Image();
        image1.src = dataArray[i]["reportEvidence"];
        image1.setAttribute("class","reportEvidence");
        image1.setAttribute("onclick","viewImage('" + dataArray[i]["reportEvidence"]+ "')");


        userProfileDiv[i].appendChild(image);
        reportEvidenceDiv[i].appendChild(image1);

        var userInfo =  "<b> User ID: </b>"+dataArray[i]["userID"]+"<br/>  <b> Username: </b> " + dataArray[i]["userName"] +"<br/> <b> Email: </b> "+ dataArray[i]["userEmail"];

        var reportInfo = "<b> Report Category: </b>" + dataArray[i]["reportCategory"] + "<br/> <b> Description: </b> " + dataArray[i]["reportDescription"] + "<br/> <b> Date: </b>" + dataArray[i]["reportActionDate"];
        
        userInfoDiv[i].innerHTML = userInfo;
        reportinfoDiv[i].innerHTML = reportInfo;
        reportStatus[i].innerText = dataArray[i]["reportStatus"];

        unbanButton[i].setAttribute("onclick","unbanUser("+dataArray[i]["reportedAccountID"] +")");
        unbanButton[i].className += " buttonRed";



    }



}



// Restricted Users
/*get restricted users */
function Get_AllRestrictedUsersData(){
    
    
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
     
           document.getElementById("LoadingScreen").style.display = "none";

           

            

                var dataArray = this.response;
           

                if(dataArray === "failed to fetch"){
                    document.getElementById("DashBoardContent_TableBody").innerText = "No Restricted Accounts ";

                } else{
                    dataArray = JSON.parse(dataArray);
                    console.log(dataArray);
    
      
                    var number = dataArray.length;
                    createRestrictedUsersElements(number)
                    setRestrictedData(dataArray);

                }

        


        

     
        }else{
         
            document.getElementById("loadingImage").style.display = "block";
            
           
        }      
    };

    xmlhttp.onreadystatechange = function(){
        document.getElementById("LoadingScreen").style.display = "grid";

    }
    
    xmlhttp.open("POST", "backend/Get_AllRestrictedUsersData.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function



function createRestrictedUsersElements(number){
    var number = number;
    var DashBoardContent_TableBody = document.getElementById("DashBoardContent_TableBody");
    var DashBoardContent_TableHead = document.getElementById("DashBoardContent_TableHead");

    var tr = document.createElement("tr");
    var Actions = document.createElement("td");
    var UserInfo = document.createElement("td");
    var UserPic = document.createElement("td");
    var ReportInfo = document.createElement("td");
    var ReportPic = document.createElement("td");
    var Status = document.createElement("td");

     Actions.innerText = "Actions";
     UserInfo.innerText = "User Info";
     UserPic.innerText = "";
     ReportInfo.innerText = "Report Info";
     ReportPic.innerText = "";
     Status.innerText ="Status";

     tr.appendChild(Actions);
     tr.appendChild(UserInfo);
     tr.appendChild(UserPic);
     tr.appendChild(ReportInfo);
     tr.appendChild(ReportPic);
     tr.appendChild(Status);


     DashBoardContent_TableHead.appendChild(tr);



    for(var i =0; i<number;i++){
        var tr = document.createElement("tr");
        var userInfoDiv = document.createElement('td');
        var userProfileDiv = document.createElement('td');


        var reportinfoDiv = document.createElement('td');
        var reportEvidenceDiv = document.createElement('td');
        var reportStatus = document.createElement('td');

        var buttonsDiv = document.createElement('td');
        var unbanButton = document.createElement('button');
        


        userInfoDiv.setAttribute("class","userInfoDiv");
        userProfileDiv.setAttribute("class","userProfileDiv");


        reportinfoDiv.setAttribute("class","reportinfoDiv");
        reportEvidenceDiv.setAttribute("class","reportEvidenceDiv"); 
        reportStatus.setAttribute("class","reportStatus");

        buttonsDiv.setAttribute("class","buttonsDiv");
        unbanButton.setAttribute("class","unbanButton");
        unbanButton.innerText = "Unrestrict";

        buttonsDiv.appendChild(unbanButton);

        tr.appendChild(buttonsDiv);
        tr.appendChild(userInfoDiv);
        tr.appendChild(userProfileDiv);
        tr.appendChild(reportinfoDiv);
        tr.appendChild(reportEvidenceDiv);
        tr.appendChild(reportStatus);

        
        DashBoardContent_TableBody.appendChild(tr);
        
    }

}


function setRestrictedData(dataArray){
    var dataArray = dataArray;
    var num = dataArray.length;

    
    userInfoDiv= document.getElementsByClassName("userInfoDiv");
    userProfileDiv= document.getElementsByClassName("userProfileDiv");


    reportinfoDiv= document.getElementsByClassName("reportinfoDiv");
    reportEvidenceDiv= document.getElementsByClassName("reportEvidenceDiv"); 
    reportStatus= document.getElementsByClassName("reportStatus");

  
    unbanButton= document.getElementsByClassName("unbanButton");

    for(var i=0; i<num; i++){

        var image = new Image();
        image.src = dataArray[i]["userPhoto"];
        image.setAttribute("class","userPhotoImage");
        image.setAttribute("onclick","viewImage('" + dataArray[i]["userPhoto"] + "')");


        var image1 = new Image();
        image1.src = dataArray[i]["reportEvidence"];
        image1.setAttribute("class","reportEvidence");
        image1.setAttribute("onclick","viewImage('" + dataArray[i]["reportEvidence"]+ "')");


        userProfileDiv[i].appendChild(image);
        reportEvidenceDiv[i].appendChild(image1);

        var userInfo =  "<b> User ID: </b>"+dataArray[i]["userID"]+"<br/>  <b> Username: </b> " + dataArray[i]["userName"] +"<br/> <b> Email: </b> "+ dataArray[i]["userEmail"];

        var reportInfo = "<b> Report Category: </b>" + dataArray[i]["reportCategory"] + "<br/> <b> Description: </b> " + dataArray[i]["reportDescription"] + "<br/> <b> Date: </b>" + dataArray[i]["reportActionDate"] +" <br/> <b> Duration: </b> " + dataArray[i]["restrictDuration"];
        
        userInfoDiv[i].innerHTML = userInfo;
        reportinfoDiv[i].innerHTML = reportInfo;
        reportStatus[i].innerText = dataArray[i]["reportStatus"];

        unbanButton[i].setAttribute("onclick","unrestrictUser("+dataArray[i]["reportedAccountID"] +")");
        unbanButton[i].className += " buttonRed";



    }



}


/* unban user  */

function unbanUser(userID){
    
    
    if (confirm('Are you sure you want to unban this user?')) {

        var userID = userID;
        var query = "reportedUserID="+userID;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 

 
            document.getElementById("ProcessingScreen").style.display = "none";

  
                var dataArray = this.response;

                console.log(dataArray);
                location.href="BannedUsers.php";

                

            }else{

            }      
        };

        xmlhttp.onreadystatechange = function(){
            document.getElementById("ProcessingScreen").style.display = "grid";

        }
    
        xmlhttp.open("POST", "backend/UnbanUser.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(query);
 
    }else{

    }
}// end of function




/* unban user  */

function unrestrictUser(userID){
    
    
    if (confirm('Are you sure you want to unrestrict this user?')) {

        var userID = userID;
        var query = "reportedUserID="+userID;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onload = function() {
            if (this.readyState === 4 || this.status === 200){ 

 
            document.getElementById("ProcessingScreen").style.display = "none";

  
                var dataArray = this.response;

                console.log(dataArray);
                location.href="RestrictedUsers.php";

                

            }else{

            }      
        };

        xmlhttp.onreadystatechange = function(){
            document.getElementById("ProcessingScreen").style.display = "grid";

        }
    
        xmlhttp.open("POST", "backend/UnrestrictUser.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(query);
 
    }else{

    }
}// end of function