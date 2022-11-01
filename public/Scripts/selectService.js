var selectedCategory = sessionStorage.getItem("selectedCategory");
var loc = sessionStorage.getItem("municipality");
function setSelectedCategory(){

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
    


    var data = document.createElement('p');



    // set attributes
    card.setAttribute('class','serviceCard');
    BannerContainer.setAttribute('class','BannerContainer');
    data.setAttribute('class','serviceTitle');


    // append elements to the row
    card.appendChild(BannerContainer);
    card.appendChild(br);
    card.appendChild(br);
    card.appendChild(data);


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
        
        serviceTitle[i].innerHTML = "<center> <h2>"+ dataArray[i]['servicePosition'] +"</h2> </center>";
        serviceCard[i].setAttribute("onclick","getsuggestedResponders('" + dataArray[i]['servicePosition'] +"')");

        var image = new Image();
        image.src = dataArray[i]['bannerImage'];
        image.setAttribute('class','bannerImage');
        image.setAttribute('onerror',"this.src='Images/RequestBanners/others.jpg'");
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

    console.log(divCategory.value);


    var xmlhttp = new XMLHttpRequest();
    
    query = "position=" + position + "&municipality=" + municipality +"&category=" + category;
    console.log(query)

    xmlhttp.open("POST", "Backend/SuggestResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           
            // refresh the div to avoid duplication in appending
             var suggestedResponders = document.getElementById("SuggestedResponders");
             suggestedResponders.innerHTML ="";
             document.getElementById("Responders").style.display="block";

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

     
            getAvailableResponders(position);
        }else{
            console.log(err);
        }      
    };
    
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
    



    // set attributes
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
    
    


    // append elements to the row
    card.appendChild(ID);
    card.appendChild(br);
    card.appendChild(suggestedResponderProfilePic);
    card.appendChild(br);
    card.appendChild(name);
    card.appendChild(br);
    card.appendChild(municipality);
    card.appendChild(br);
    card.appendChild(rate);
    card.appendChild(br);
    card.appendChild(viewProfile);
    card.appendChild(selectButton);
    
    


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
        rate[i].innerHTML  = "<b> Rate: </b>"+dataArray[i]['rate'];
        viewProfile[i].href= "Public_Profile.php?userID=" +  dataArray[i]['responderID'] + "&userType=Responder";
        selectButton[i].setAttribute('onclick','selectResponder('+ dataArray[i]['serviceID']+','+ dataArray[i]['responderID']+','+dataArray[i]['rate']+')');
        


        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','suggestedUserPhoto');
        suggestedResponderPic[i].appendChild(image);
    }

}


//----------------------------------------------------Available responders -------------------------------------------------------
// set suggested responders data 
function setAvailableResponderData(array){

    var dataArray = array;
    var number = dataArray.length;


    var responderCard = document.getElementsByClassName("availableResponderCard");

    var availableViewProfile = document.getElementsByClassName('availableViewProfile');
    var availableSelectButton = document.getElementsByClassName('availableSelectButton');

    var ID= document.getElementsByClassName('availableResponderID');
    var name= document.getElementsByClassName('availableResponderName');
    var municipality= document.getElementsByClassName('availableResponderMunicipality');
    var rate= document.getElementsByClassName('availableResponderRate');
    var availableResponderProfilePic = document.getElementsByClassName('availableResponderProfilePic');
   // var selectButton.innerText = "Select";
   //var viewProfile.innerText = "View Profile";

    for(var i = 0; i<number;i++){


        ID[i].innerHTML = dataArray[i]['responderID'];
        name[i].innerHTML = "<b> Username: </b>"+dataArray[i]['userName'];
        municipality[i].innerHTML = "<b> Municipality: </b>"+dataArray[i]['municipality'];
        rate[i].innerHTML = "<b> Rate: </b>"+ dataArray[i]['rate'];

        availableViewProfile[i].href= "Public_Profile.php?userID=" +  dataArray[i]['responderID'] + "&userType=Responder";
        availableSelectButton[i].setAttribute('onclick','selectResponder('+dataArray[i]['serviceID'] +','+ dataArray[i]['responderID']+','+dataArray[i]['rate']+')');
        
        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','availableUserPhoto');
        availableResponderProfilePic[i].appendChild(image);

    }

}



// 31-05-2022: has issues in displaying - fixed
// For available responders not on the location
function getAvailableResponders(position,category){
    var position = position;
    var category =  sessionStorage.getItem("selectedCategory");
    var municipality = sessionStorage.getItem('municipality');
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "position=" + position + "&municipality=" + municipality + "&category=" + category;
    console.log(query)

    xmlhttp.open("POST", "Backend/AvailableResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           
            // refresh the div to avoid duplication in appending
             AllResponders = document.getElementById("AllResponders");
             AllResponders.innerHTML = "";
             document.getElementById("Responders").style.display="block";

            var dataArray = this.response;
            console.log(dataArray);
            if(dataArray === "Unable to load other available responders"){

                AllResponders.innerText = "No other available responders";
                
            } else{

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
 
                var number = dataArray.length
                createAvailableRespondersElements(number);
                setAvailableResponderData(dataArray);
            }

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// create elements for responders to be appended 
function createAvailableRespondersElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("AllResponders");
    
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');
    var availableResponderProfilePic = document.createElement('div');

    var ID = document.createElement('p');
    var name = document.createElement('p');
    var municipality = document.createElement('p');
    var rate = document.createElement('p');
    var selectButton = document.createElement('p');
    var viewProfile = document.createElement('a');
    



    // set attributes
    selectButton.innerText = "Select";
    viewProfile.innerText = "View Profile";
    selectButton.setAttribute('class','availableSelectButton');
    viewProfile.setAttribute('class','availableViewProfile');
    card.setAttribute('class','availableResponderCard');
    ID.setAttribute('class','availableResponderID');
    name.setAttribute('class','availableResponderName');
    municipality.setAttribute('class','availableResponderMunicipality');
    rate.setAttribute('class','availableResponderRate');
    availableResponderProfilePic.setAttribute('class','availableResponderProfilePic');


    // append elements to the row
    card.appendChild(ID);
    card.appendChild(availableResponderProfilePic);
    card.appendChild(name);
    card.appendChild(municipality);
    card.appendChild(rate);
    card.appendChild(viewProfile);
    card.appendChild(selectButton);


    div.append(card);

    } 
    
    
} // end of function



/* Avail Service form */
function selectResponder(serviceID,responderID,rate){
    var serviceID = serviceID;
    var responderID = responderID;
    var rate = rate;

    divResponderID =document.getElementById("responderID");
    divServicePrice =document.getElementById("servicePrice");
    divServiceID = document.getElementById('formServiceID');

    getUser(responderID);
    var myID = sessionStorage.getItem('myID');
    getMyInfo(myID);

    divResponderID.value = responderID;
    divServicePrice.value = rate;
    divServiceID.value = serviceID;

    availableTimeSlots();
    var form = document.getElementById('AvailServiceFormContainer'); 
    form.style.display = "block";

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

//-------------------------------------chech timeslots-------------------------------------------------------

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
    contractBackGround.style.display = "block";
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