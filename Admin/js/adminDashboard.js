// gets Requestors
function getResponders(){
    
    
    var xmlhttp = new XMLHttpRequest();
    


    xmlhttp.open("POST", "backend/Get_Responders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        

     
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
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

        


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function



// create elements to be appended 
function createUserElements(Number){
 
    DataNumber = Number;
    table = document.getElementById("DashBoardContent_Table");
   
    
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
   idFileType.setAttribute("class","idFileType");
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
   /userEmail.setAttribute("class","userEmail");
   userGender.setAttribute("class","userGender");
   userID.setAttribute("class","userID");
   /userName.setAttribute("class","userName");
   /userPhoto.setAttribute("class","userPhoto");
   userStatus.setAttribute("class","userStatus");
   /userType.setAttribute("class","userType");
   userControls.setAttribute("class","userControls");
   acceptButton.setAttribute("class","acceptButton");
   cancelButton.setAttribute("class","cancelButton");
   acceptButton.innerText = "Accept";
   cancelButton.innerText = "Cancel";


   // append elements to the row
   tr.appendChild(userPhoto);
   tr.appendChild(userName);
   tr.appendChild(userEmail);
   tr.appendChild(userType);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   tr.appendChild(userPhoto);
   


    table.append(tr);

    } 
    
    
} // end of function