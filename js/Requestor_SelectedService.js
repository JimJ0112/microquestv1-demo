var selectedCategory = sessionStorage.getItem("selectedCategory");
var loc = sessionStorage.getItem("municipality");
function setSelectedCategory(){

var selectedCategory = sessionStorage.getItem("selectedCategory");

    var selected = document.getElementById("selectedCategory");
    selected.innerText = selectedCategory;
    document.getElementById('myLocation').innerText=loc;

    getPositions(selectedCategory);
}



// gets data from php 
function getPositions(name){
    var data = name;
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "condition=" + data;
    console.log(query)

    xmlhttp.open("POST", "Backend/Get_services.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            document.getElementById("AvailServiceContent").innerHTML = "";
            
            
            selectedCategory = document.getElementById("selectedCategory");
            AvailServiceFormCategory = document.getElementById("Category");
            selectedCategory.innerText = data + " Services";
            AvailServiceFormCategory.value = data;


            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

            var number = dataArray.length;
            createServiceElements(number);

            //dataArray = positions(dataArray);
            setData(dataArray);
            //setImage(dataArray)

            //console.log(positions(dataArray));

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// for filtering
function positions(array){
    var dataArray = array;
    var number = dataArray.length;
    var newData = [];
    var seenTwice = [];
    var filtered = [];
  
    for(var i = 0; i<number; i++){
        newData[i] = dataArray[i]['servicePosition']
      
        
    }

    newData.sort();

    var j;

    for(var i = 0; i<number; i++){

        j = i +1;

        if(newData[i] === newData[j]){
            seenTwice[i] = newData[i];
        }
    }
    
    for(var i = 0; i<number; i++){

        j = i +1;
        if(newData[i] != seenTwice[i]){
            filtered[i] = newData[i];
        }
    }

    return newData;

}


// create elements to be appended 
function createServiceElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("AvailServiceContent");
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');
    var BannerContainer = document.createElement('div');
    var br = document.createElement('br');
    


    var serviceTitleBackground = document.createElement('div');
    var data = document.createElement('span');



    // set attributes
    serviceTitleBackground.setAttribute('class','serviceTitleBackground');
    card.setAttribute('class','serviceCard');
    BannerContainer.setAttribute('class','BannerContainer');
    data.setAttribute('class','serviceTitle');


    // append elements to the row
    card.appendChild(BannerContainer);
    //card.appendChild(br);
    //card.appendChild(br);
    serviceTitleBackground.appendChild(data);
    card.appendChild(serviceTitleBackground);


    div.append(card);

    } 
    
    
} // end of function


// set positions data 
function setData(array){

    var dataArray = array;
    var number = dataArray.length;

    var selectedCategory = sessionStorage.getItem("selectedCategory");
    var BannerContainer = document.getElementsByClassName('BannerContainer');
    var serviceTitle = document.getElementsByClassName('serviceTitle');
    var serviceCard = document.getElementsByClassName("serviceCard");

    for(var i = 0; i<number;i++){
        
        serviceTitle[i].innerHTML =  dataArray[i]['servicePosition'];
        //serviceCard[i].setAttribute("onclick","getAvailableResponders('" + dataArray[i]['servicePosition'] +"')");
        //selectResponders(
        serviceCard[i].setAttribute("onclick","selectResponders('" + dataArray[i]['servicePosition'] +"')");
        
        var image = new Image();
        image.src = dataArray[i]['bannerImage'];
        image.setAttribute('class','bannerImage');
        image.setAttribute('onerror',"this.src='img/laundry-services.jpg'");
        BannerContainer[i].appendChild(image);

    }

}

function setImage(array){

    var dataArray = array;
    var number = dataArray.length;

    var serviceCard = document.getElementsByClassName("serviceCard");

    for(var i = 0; i<number;i++){
        

        
        var image = new Image();
        image.src = dataArray[i]['bannerImage'];
        image.setAttribute('alt','Images/RequestBanners/others.jpg');
        image.setAttribute('class','bannerImage');
        serviceCard[i].appendChild(image);

    }

}

// get suggested resopnders

// gets data from php 
function getsuggestedResponders(position){
    var position = position;
    var category =  sessionStorage.getItem("selectedCategory");
    var municipality = sessionStorage.getItem('municipality');

    var divCategory= document.getElementById("Category"); 
    var divPosition=document.getElementById("Position");

    divCategory.value = sessionStorage.getItem("selectedCategory");
    divPosition.value= position;



    var xmlhttp = new XMLHttpRequest();
    
    query = "position=" + position + "&municipality=" + municipality +"&category=" + category;
    console.log(query)

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           
            // refresh the div to avoid duplication in appending
             var suggestedResponders = document.getElementById("SuggestedResponders");
             document.getElementById("SuggestedResponders").innerHTML = "";
             document.getElementById("RespondersBack").style.display="grid";

            var dataArray = this.response;

            if(dataArray === "No responders near you for this service"){

                suggestedResponders.innerText = dataArray;
            } else{
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                
                var number = dataArray.length
                createSuggestedRespondersElements(number);
                setResponderData(dataArray);
            }

     
            //getAvailableResponders(position);
        }else{
            //console.log(err);
            document.getElementById("SuggestedResponders").innerHTML = "Loading...";

        }      
    };
    
    xmlhttp.open("POST", "Backend/SuggestResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);


    
    
}// end of function







// create elements for responders to be appended 
function createSuggestedRespondersElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("SuggestedResponders");
    
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');


    var ID = document.createElement('p');
    var suggestedResponderProfilePic = document.createElement('div');
    var name = document.createElement('p');
    var municipality = document.createElement('p');
    var rate = document.createElement('p');
    var selectButton = document.createElement('p');
    var viewProfile = document.createElement('a');
    var br = document.createElement('br');
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td1 = document.createElement('td');
    var responderInfoDiv = document.createElement('div');
    



    // set attributes
    responderInfoDiv.setAttribute('class','responderInfoDiv');
    table.setAttribute('class','responderCardTable');
    selectButton.innerText = "Select";
    viewProfile.innerText = "View Profile";
    viewProfile.setAttribute('class','viewProfile');
    card.setAttribute('class','responderCard');
    ID.setAttribute('class','responderID');
    name.setAttribute('class','responderName');
    municipality.setAttribute('class','responderMunicipality');
    rate.setAttribute('class','responderRate');
    selectButton.setAttribute('class','selectButton');
    suggestedResponderProfilePic.setAttribute('class','suggestedResponderPic');
    
    
    td.appendChild(viewProfile);
    td1.appendChild(selectButton);
    tr.appendChild(td);
    tr.appendChild(td1);
    table.appendChild(tr);

    responderInfoDiv.appendChild(ID);
    responderInfoDiv.appendChild(name);

    responderInfoDiv.appendChild(municipality);

    responderInfoDiv.appendChild(rate);


    //append elements to the row
    //card.appendChild(ID);
    //card.appendChild(br);
    //card.appendChild(suggestedResponderProfilePic);
    //card.appendChild(br);
    //card.appendChild(name);
    //card.appendChild(br);
    //card.appendChild(municipality);
    //card.appendChild(br);
    //card.appendChild(rate);

    card.appendChild(suggestedResponderProfilePic)
    card.appendChild(responderInfoDiv);
    card.appendChild(table);
  
    
    


    div.append(card);

    } 
    
    
} // end of function


// set suggested responders data 
function setResponderData(array){

    var dataArray = array;
    var number = dataArray.length;

    var responderCard = document.getElementsByClassName("responderCard");

    var ID= document.getElementsByClassName('responderID');
    var name= document.getElementsByClassName('responderName');
    var municipality= document.getElementsByClassName('responderMunicipality');
    var rate= document.getElementsByClassName('responderRate');
    var selectButton = document.getElementsByClassName('selectButton');
    var viewProfile = document.getElementsByClassName('viewProfile');

    var suggestedResponderPic = document.getElementsByClassName('suggestedResponderPic');

    for(var i = 0; i<number;i++){


        
        ID[i].innerHTML = dataArray[i]['responderID'];
        name[i].innerHTML  = "<b> Username: </b>"+dataArray[i]['userName'];
        municipality[i].innerHTML  = "<b> Municipality: </b>"+dataArray[i]['municipality'];
        rate[i].innerHTML  = "<b> Rate: </b> Php "+dataArray[i]['rate'];
        viewProfile[i].href= "ViewUserProfile.php?userID=" +  dataArray[i]['responderID'] + "&userType=Responder";
        selectButton[i].setAttribute('onclick','selectResponder('+ dataArray[i]['serviceID']+','+ dataArray[i]['responderID']+','+dataArray[i]['rate']+')');
        


        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','suggestedUserPhoto');
        suggestedResponderPic[i].appendChild(image);
    }

}


//----------------------------------------------------Available responders -------------------------------------------------------


// For available responders not on the location
function getAvailableResponders(position){
    var position = position;
    sessionStorage.setItem("selectedPosition", position);
    var category =  sessionStorage.getItem("selectedCategory");
    var municipality = sessionStorage.getItem('municipality');

    
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "position=" + position + "&municipality=" + municipality + "&category=" + category;
    console.log(query)


    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           
            // refresh the div to avoid duplication in appending
            var suggestedResponders = document.getElementById("SuggestedResponders");
            document.getElementById("SuggestedResponders").innerHTML = "";

            document.getElementById("RespondersBack").style.display="grid";

            var dataArray = this.response;
            console.log(dataArray);

            if(dataArray === "Unable to load other available responders"){

                suggestedResponders.innerText = "No other available responders";
                
            } else{

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
 
                var number = dataArray.length
                /*
                createAvailableRespondersElements(number);
                setAvailableResponderData(dataArray);
                */
                createSuggestedRespondersElements(number);
                setResponderData(dataArray);
            }

     
        }else{
            //console.log(err);
            document.getElementById("SuggestedResponders").innerHTML = "Loading...";
        }      
    };

    xmlhttp.open("POST", "Backend/AvailableResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function





/* Avail Service form */
function selectResponder(serviceID,responderID,rate){
    var serviceID = serviceID;
    var responderID = responderID;
    var rate = rate;

    
    var selectedCategory = document.getElementById("selectedCategory");
    var Category = document.getElementById("Category");

    
    divResponderID =document.getElementById("responderID");
    divServicePrice =document.getElementById("servicePrice");
    divServiceID = document.getElementById('formServiceID');

    getUser(responderID);
    var myID = sessionStorage.getItem('myID');
    getMyInfo(myID);

    divResponderID.value = responderID;
    divServicePrice.value = rate;
    divServiceID.value = serviceID;
    Category.value = selectedCategory.innerText;

    availableTimeSlots();
    var form = document.getElementById('AvailServiceFormContainer'); 
    form.style.display = "grid";

    generateContract();
    //console.log(responderInfoArray);


}


// closing form 
// for closing the forms
function closeForms(){
    
var modal = document.getElementById("AvailServiceFormContainer");
   modal.style.display = "none";

   //sessionStorage.setItem('vercode','');


}

//-------------------------------------check timeslots-------------------------------------------------------

function availableTimeSlots(){
    var responderID = document.getElementById('responderID').value;
    var date = document.getElementById("dueDate").value;
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "responderID=" + responderID + "&date=" + date;
    console.log(query);

    xmlhttp.open("POST", "Backend/Get_serviceTimeSlots.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           


            var dataArray = this.response;
            

            if(dataArray === "failed to fetch"){

                console.log(dataArray);
                var select = document.getElementsByClassName('timeSlot');
                select[0].disabled = false;
                select[1].disabled = false;
                select[2].disabled = false;
                select[3].disabled = false;
                select[4].disabled = false;
                select[5].disabled = false;
                select[6].disabled = false;
                select[7].disabled = false;
                select[8].disabled = false;

            } else{

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                var select = document.getElementsByClassName('timeSlot');
                select[0].disabled = false;
                select[1].disabled = false;
                select[2].disabled = false;
                select[3].disabled = false;
                select[4].disabled = false;
                select[5].disabled = false;
                select[6].disabled = false;
                select[7].disabled = false;
                select[8].disabled = false;
                disableExistingTimeslots(dataArray);
 
 
            }

     
            generateContract();
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

// disable existing timeslots
function disableExistingTimeslots(array){
    
var dataArray = array;
var number = dataArray.length;
var select = document.getElementsByClassName('timeSlot');



for(var i = 0; i<8; i++){


    
        if(select[0].value === dataArray[i]['timeSlot']){
            select[0].disabled = true;
            console.log('matched');
        } else if(select[1].value === dataArray[i]['timeSlot']){
            select[1].disabled = true;
            console.log('matched');

        } else if(select[2].value === dataArray[i]['timeSlot']){
            select[2].disabled = true;
            console.log('matched');
        } else if(select[3].value === dataArray[i]['timeSlot']){
            select[3].disabled = true;
            console.log('matched');
        } else if(select[4].value === dataArray[i]['timeSlot']){
            select[4].disabled = true;
            console.log('matched');
        } else if(select[5].value === dataArray[i]['timeSlot']){
            select[5].disabled = true;
            console.log('matched');
        } else if(select[6].value === dataArray[i]['timeSlot']){
            select[6].disabled = true;
            console.log('matched');
        } else if(select[7].value === dataArray[i]['timeSlot']){
            select[7].disabled = true;
            console.log('matched');
        } else if(select[8].value === dataArray[i]['timeSlot']){
            select[8].disabled = true;
            console.log('matched');
        } else{


        }

    
  
    /*
        for(var j = 0; j<number; j++){
            if(select[i].value === dataArray[j]['timeSlot']){
                select[i].disabled = true;
            } else{
                select[i].disabled = false;
            }
        }
    */ 

    

}


}

function generateContract(){


    formServiceID = document.getElementById('formServiceID').value;
    formRequestorID= document.getElementById('formRequestorID').value;
    Category= document.getElementById('Category').value;
    Position= document.getElementById('Position').value;
    responderID= document.getElementById('responderID').value;
    servicePrice= document.getElementById('servicePrice').value;
    dueDate= document.getElementById('dueDate').value;
    responderTimeSlots= document.getElementById('responderTimeSlots').value;
    additionalNotes= document.getElementById('additionalNotes').value;
    contractInput = document.getElementById('contractInput');

    responderInfoArray = sessionStorage.getItem('responderInfoArray'); 
    responderInfoArray = JSON.parse(responderInfoArray);
    console.log(responderInfoArray);

    myInfoArray = sessionStorage.getItem('myInfoArray'); 
    myInfoArray = JSON.parse(myInfoArray);
    
    console.log(responderInfoArray);

    //var contract = "I,"+ myInfoArray[0]['lastName'] + ","+ myInfoArray[0]['firstName']+" "
    var contract = "This Freelance Contract, is entered into by and between: \n" + myInfoArray[0]['lastName']+" "+ myInfoArray[0]['firstName']+
    " from "+myInfoArray[0]['street']+" , "+myInfoArray[0]['baranggay']+" , "+ myInfoArray[0]['municipality']+ ", Bataan and "+ responderInfoArray[0]['lastName']+" "+ responderInfoArray[0]['firstName']+
    " from "+responderInfoArray[0]['street']+" , "+myInfoArray[0]['baranggay']+" , "+ responderInfoArray[0]['municipality']+ ", Bataan \n" + "WHEREAS, "+myInfoArray[0]['firstName']+" has a need for "+ Category + ", "+ Position + "."
    + "\n NOW THEREFORE, the parties hereby agree as follows: \n Service Price: Php "+servicePrice+" \n Deadline: "+ dueDate + " \n Time: "+ responderTimeSlots+ " \n Additional Notes: " + additionalNotes; 

    contractInput.value = contract;

    console.log(contract);
    document.getElementById('contractDiv').innerText = contract;


}

function showContract(){
    contractBackGround = document.getElementById('contractBackGround');
    contractBackGround.style.display = "grid";
    contractDiv = document.getElementById('contractDiv');
    contractDiv.style.display = "block";
}

function hideContract(){
    contractBackGround = document.getElementById('contractBackGround');
    contractBackGround.style.display = "none";
    contractDiv = document.getElementById('contractDiv');
    contractDiv.style.display = "none";
}


// for getting user info
function getUser(ID,userType){
   
    var userID = ID;
    var userType = userType;
    var query = "userID=" + userID +"&userType=" + userType;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var dataArray = this.response;



                //dataArray = JSON.parse(dataArray);
               // console.log(dataArray);
                sessionStorage.setItem('responderInfoArray',dataArray);


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// for getting user info
function getMyInfo(ID,userType){
   
    var userID = ID;
    var userType = userType;
    var query = "userID=" + userID +"&userType=" + userType;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_publicProfile.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  

            var dataArray = this.response;



                //dataArray = JSON.parse(dataArray);
               // console.log(dataArray);
                sessionStorage.setItem('myInfoArray',dataArray);


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function

//------------------------------------------------------------------------------------------------------------------

function getServices(category){

    var position = position;
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "&condition=" + category;
    console.log(query)

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

            var dataArray = this.response;
            console.log(dataArray);
            document.getElementById("AvailServiceContent").innerHTML="";

            if(dataArray === "failed to fetch"){
                console.log(dataArray);
            } else{

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                var number = dataArray.length;

                createServiceElements(number);
                setData(dataArray)
            }

     
        }else{
            //console.log(err);
            document.getElementById("AvailServiceContent").innerText = "Loading...";
        }      
    };
    
    
    xmlhttp.open("POST", "Backend/Get_positions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
}// end of function


// for close button

function closeResponders(){
    document.getElementById("RespondersBack").style.display = "none";
}


//nearest responders
function setNearestResponders(){
    var nearestResponderSlider = document.getElementById("nearestResponderSlider");
    var  position = sessionStorage.getItem("selectedPosition");

    if(nearestResponderSlider.checked === true){
       
       getsuggestedResponders(position);
       console.log("true");

    } else {
        getAvailableResponders(position);
       console.log("false");

    }
}


function selectResponders(position){
    var position = position;
    sessionStorage.setItem("selectedPosition",position);

    myLocation = document.getElementById("myLocation");
    userLocation = sessionStorage.getItem("municipality");
    myLocation.innerText = userLocation;

    var nearestResponderSlider = document.getElementById("nearestResponderSlider");

    document.getElementById("RespondersBack").style.display="grid";

    var PositionTB = document.getElementById("Position");
    PositionTB.value = position;


    if(nearestResponderSlider.checked === true){
       
        getsuggestedResponders(position);
        console.log("true");
 
     } else {
         getAvailableResponders(position);
        console.log("false");
 
     }


}