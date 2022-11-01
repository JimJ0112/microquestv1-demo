// create elements for data
function createElements(number){
    var number = number;

    var div = document.getElementById('myServicesContent');

    for(var i=0; i<number; i++){
        var myServiceCard = document.createElement('table');
        var serviceCategory = document.createElement('p');
        var servicePosition = document.createElement('p');
        var serviceID = document.createElement('p');
        var serviceRate = document.createElement('p');
        var serviceCertification = document.createElement('p');
        var serviceCertificateFile = document.createElement('a');
        var serviceStatus = document.createElement('p');
        var delist = document.createElement('button');
        var update = document.createElement('button');
        var br = document.createElement('br');
        var informationCol = document.createElement('td');
        var CertificateCol = document.createElement('td');

         myServiceCard.setAttribute('class','myServiceCard');
         serviceCategory.setAttribute('class','serviceCategory');
         servicePosition.setAttribute('class','servicePosition');
         serviceID.setAttribute('class','serviceID');
         serviceRate.setAttribute('class','serviceRate');
         serviceCertification.setAttribute('class','serviceCertification');
         serviceCertificateFile.setAttribute('class','serviceCertificateFile');
         serviceStatus.setAttribute('class','serviceStatus');
     
         update.innerText = "Update";

         delist.setAttribute('class','delist');
         update.setAttribute('class','update');

         informationCol.appendChild(serviceID);
         informationCol.append(br);
         informationCol.appendChild(serviceCategory);
         informationCol.appendChild(br);
         informationCol.appendChild(servicePosition);
         informationCol.appendChild(br);
         informationCol.appendChild(serviceRate);
         informationCol .appendChild(br);
         informationCol.appendChild(serviceStatus);
         informationCol.appendChild(br);
         CertificateCol.appendChild(serviceCertification);
         CertificateCol.appendChild(br);
         CertificateCol.appendChild(serviceCertificateFile);
         CertificateCol.appendChild(br);


         myServiceCard.appendChild(informationCol);
         myServiceCard.appendChild(CertificateCol);

         myServiceCard.appendChild(delist);
         myServiceCard.appendChild(br);
         myServiceCard.appendChild(update);

         div.appendChild(myServiceCard);






    }

}

// set positions data 
function setData(array){

var dataArray = array;
var number = dataArray.length;


myServiceCard = document.getElementsByClassName('myServiceCard');
serviceCategory = document.getElementsByClassName( 'serviceCategory');
servicePosition = document.getElementsByClassName('servicePosition');
serviceID = document.getElementsByClassName('serviceID');
serviceRate = document.getElementsByClassName('serviceRate');
serviceCertification = document.getElementsByClassName('serviceCertification');
serviceCertificateFile = document.getElementsByClassName('serviceCertificateFile');
serviceStatus = document.getElementsByClassName('serviceStatus');

delist= document.getElementsByClassName('delist');
update= document.getElementsByClassName('update');


for(var i = 0; i< number; i++){
    serviceCategory[i].innerHTML = "<b> Category: </b>"+dataArray[i]['serviceCategory'];
    servicePosition[i].innerHTML  = "<b> Position: </b> "+dataArray[i]['servicePosition'];
    serviceID[i].innerHTML  = "<b> Service ID: </b>"+dataArray[i]['serviceID'];
    serviceRate[i].innerHTML  = "<b> Rate: </b> Php "+ dataArray[i]['rate'];
    serviceCertification [i].innerHTML=  " <b>Certification:</b> "+ dataArray[i]['certification'];
    
    update[i].setAttribute('onclick','updateForm(' + dataArray[i]['serviceID'] +')');

    if(dataArray[i]['serviceStatus'] === "Active"){
    serviceStatus[i].innerHTML = "<b> Status:</b>  <span style='color:green; font-weight:bolder;'> "+ dataArray[i]['serviceStatus'] +"</span>";

    } else{
        serviceStatus[i].innerHTML = "<b> Status:</b>  <span style='color:red;font-weight:bolder;'> "+ dataArray[i]['serviceStatus'] +"</span>";
    }

    if(dataArray[i]['serviceStatus'] === "Active"){
        delist[i].setAttribute('onclick','showActivateDelist('+dataArray[i]['serviceID'] +",'Delist'"+')');
        delist[i].innerText = "Delist";
        delist[i].style.backgroundColor = "red";

    } else if(dataArray[i]['serviceStatus'] === "" || dataArray[i]['serviceStatus'] === " "){
        delist[i].setAttribute('onclick','showActivateDelist('+dataArray[i]['serviceID'] +",'Active'"+')');
        delist[i].innerText = "Activate";
        delist[i].style.backgroundColor = "Green";

    } else if(dataArray[i]['serviceStatus'] === "Delisted" ){
        delist[i].setAttribute('onclick','showActivateDelist('+dataArray[i]['serviceID']+",'Active'"+')');
        delist[i].innerText = "Activate";
        delist[i].style.backgroundColor = "limegreen";
    }
  
    
    var image = new Image();
    image.src = dataArray[i]['certificateFile'];
    image.setAttribute('class','certificateImage');
    image.setAttribute('onerror',"this.src='Images/PreviewNotAvailable.png'");
    image.setAttribute('onclick',"showImage('"+dataArray[i]['certificateFile'] +"')");
    serviceCertificateFile[i].appendChild(image);
    
 

}

}

function getMyServices(userID){
    var userID = userID;
    var query = "userID=" + userID;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_myServices.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var div = document.getElementById('myServicesContent');
            div.innerHTML = "";
            var dataArray = this.response;

            if(dataArray === "failed to fetch"){
                var content = document.getElementById("requestInfoContent");
                var h2 = document.createElement('h2');
                h2.innerHTML = "<center> No Services </center>";
                div.innerHTML = "";
                div.style.textAlign = "center";
                div.appendChild(h2);


            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                number = dataArray.length;
                createElements(number)
                setData(dataArray);    
            }

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// set update form
function updateForm(serviceID){
    var serviceID = serviceID;
    document.getElementById('serviceID').value = serviceID;
    openForms();

}





// close and open forms
function closeForms(){
    var updateFormBackground = document.getElementById("updateFormBackground");
    document.getElementById('serviceID').value ="";


    updateFormBackground.style.display = "none";

}

function openForms(){
    var updateFormBackground = document.getElementById("updateFormBackground");



    updateFormBackground.style.display = "block";

}


// update status
function delistService(serviceID){
    var serviceID = serviceID;
    var query = "serviceID=" + serviceID +"&status=Delisted";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
        
            var dataArray = this.response;
            console.log(dataArray);

            
            var userID = sessionStorage.getItem('myID');
            getMyServices(userID)
            hideActivateDelist();

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


function activeService(serviceID){
    var serviceID = serviceID;
    var query = "serviceID=" + serviceID +"&status=Active";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/UpdateServiceStatus.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
        
            var dataArray = this.response;
            console.log(dataArray);

            var userID = sessionStorage.getItem('myID');
            getMyServices(userID)
            hideActivateDelist();

        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


function showActivateDelist(id,delistActive){

    var id = id;
    var delistActive = delistActive;

    var activateDelistYes = document.getElementById('activateDelistYes');
    var activateDelistFormBackground = document.getElementById('activateDelistFormBackground');

    if(activateDelistFormBackground.style.display === "block"){
        activateDelistFormBackground.style.display = "none";
    } else {
        activateDelistFormBackground.style.display = "block";
    }

    if(delistActive ==="Delist"){
        activateDelistYes.setAttribute('onclick','delistService(' + id + ')');
    } else if(delistActive === "Active"){
        activateDelistYes.setAttribute('onclick','activeService(' + id + ')');
    }
    

}

function hideActivateDelist(){
    var activateDelistFormBackground = document.getElementById('activateDelistFormBackground');
    activateDelistFormBackground.style.display = "none";
}


function showImage(image){
    var certificateViewBackground = document.getElementById('certificateViewBackground');

    var certificateView = document.getElementById('certificateView');
    certificateViewBackground.style.display="block";
    certificateView.src = image;
    certificateView.setAttribute('onerror',"this.src='Images/PreviewNotAvailable.png'");
}

function hideImageView(){
    var certificateViewBackground = document.getElementById('certificateViewBackground');
    certificateViewBackground.style.display="none";
}