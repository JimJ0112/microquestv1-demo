var selectedCategory = sessionStorage.getItem("selectedCategory");
var loc = sessionStorage.getItem("municipality");

function setSelectedCategory(){

    var selected = document.getElementById("selectedCategory");
    selected.innerText = selectedCategory;
    loc = sessionStorage.getItem("municipality");
    document.getElementById('myLocation').innerText = loc;

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
           // positions(dataArray);
            var number = dataArray.length;
            createServiceElements(number);
            dataArray = positions(dataArray);
            setData(dataArray);

            console.log(positions(dataArray));

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function








// get suggested resopnders

// gets data from php 
function getsuggestedResponders(productName){
    //var productName = productName;
    var municipality = sessionStorage.getItem('municipality');
    var productName = sessionStorage.getItem('selectedProductName');
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "productName=" + productName + "&municipality=" + municipality;
    console.log(query)

    xmlhttp.open("POST", "Backend/Get_productsResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

           
            // refresh the div to avoid duplication in appending
             var suggestedResponders = document.getElementById("productSuggestedResponders");
             suggestedResponders.innerHTML ="";
             suggestedResponders.style.display="grid";

             var pasabuyResponders = document.getElementById('pasabuyResponders');
             pasabuyResponders.style.display="grid";

             var myLocation = document.getElementById('myLocation');
             myLocation.value = municipality;
             

            var dataArray = this.response;

            if(dataArray === "No responders near you for this service"){

                suggestedResponders.innerText = dataArray;
            } else{
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                // document.write(this.response);
                var number = dataArray.length
                createSuggestedRespondersElements(number);
                setResponderData(dataArray);
            }

     
            getallResponders(productName);
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function





// create elements for responders to be appended 
function createSuggestedRespondersElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("productSuggestedResponders");
    
   
    
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
    rate.setAttribute('class','deliveryRate');
    selectButton.setAttribute('class','selectButton');
    suggestedResponderProfilePic.setAttribute('class','suggestedResponderPic');
    


    // append elements to the row
    card.appendChild(ID);
  
    card.appendChild(suggestedResponderProfilePic);
  
    card.appendChild(name);
   
    card.appendChild(municipality);
   
    card.appendChild(rate);
    
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
    var suggestedResponderPic = document.getElementsByClassName('suggestedResponderPic');
    var ID= document.getElementsByClassName('responderID');
    var name= document.getElementsByClassName('responderName');
    var municipality= document.getElementsByClassName('responderMunicipality');
    var deliveryRate= document.getElementsByClassName('deliveryRate');
   // var selectButton.innerText = "Select";
   var viewProfile = document.getElementsByClassName('viewProfile');
   var selectButton = document.getElementsByClassName('selectButton');

    for(var i = 0; i<number;i++){
        //serviceCard[i].innerText = dataArray[i];
        //serviceCard[i].setAttribute("onclick","getsuggestedResponders('" + dataArray[i] + "')");

        ID[i].innerHTML = dataArray[i]['userID'];
        name[i].innerHTML = "<b> Username: </b>"+dataArray[i]['userName'];
        municipality[i].innerHTML = "<b> Municipality: </b>"+dataArray[i]['municipality'];
        deliveryRate[i].innerHTML ="<b> Delivery rate: </b>"+ dataArray[i]['deliveryRate'];
        viewProfile[i].href = "Public_Profile.php?userID=" +  dataArray[i]['userID'] + "&userType=Responder";
        selectButton[i].setAttribute("onclick","setResponderForm("+ dataArray[i]['userID']+","+dataArray[i]['deliveryRate']+")");
        

        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','suggestedUserPhoto');
        suggestedResponderPic[i].appendChild(image);
    }

}


// ---------------------------------------- Unique to pasabuy --------------------------------------

// gets products data from php 
function getProducts(){
    
    
    var xmlhttp = new XMLHttpRequest();
  

    xmlhttp.open("POST", "Backend/Get_products.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
        
            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

           var number = dataArray.length;


           createProductElements(number);
           setProductData(dataArray);
           
     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// create elements for product to be appended 
function createProductElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("products");
    
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');


    var productID = document.createElement('p');
    var productImage = document.createElement('p');
    var productName = document.createElement('p');
    var productBrand = document.createElement('p');
    var productPrice = document.createElement('p');
    var moreInfoButton = document.createElement('button');
    var textqty = document.createElement('p');
    var quantity = document.createElement('input');
    var select = document.createElement('button');
    var selectResponder = document.createElement('button');

    br= document.createElement('br');



    // set attributes
    card.setAttribute('class','productCard');
    
    productID.setAttribute('class','productID');
    productID.style.display = "none";
    productImage.setAttribute('class','productImage');
    productName.setAttribute('class','productName');
    productBrand.setAttribute('class','productBrand');
    productPrice.setAttribute('class','productPrice');
    moreInfoButton.setAttribute('class','moreInfoButton');
    quantity.setAttribute('class','quantity');
    quantity.setAttribute('min',0);
    quantity.setAttribute('type','number');
    selectResponder.setAttribute('class','selectResponderButton');
    select.setAttribute('class','selectButton');
    textqty.innerHTML = "Qty";
    selectResponder.innerText="Select Responder";
    


    // append elements to the row
    card.appendChild(productID);
 
    card.appendChild(productImage);

    card.appendChild(productName);
   
    card.appendChild(productBrand);
    
    card.appendChild(productPrice);
    
    
    card.appendChild(textqty);
    card.appendChild(quantity);

   // card.appendChild(moreInfoButton);
   // card.appendChild(selectResponder);
    card.appendChild(select);


    div.append(card);

    } 
    
    
} // end of function


// set data for product elements created
function setProductData(array){

    var dataArray = array;
    var number = dataArray.length;


    var productCard = document.getElementsByClassName("productCard");

    productID = document.getElementsByClassName('productID');
    productImage= document.getElementsByClassName('productImage');
    productName= document.getElementsByClassName('productName');
    productBrand= document.getElementsByClassName('productBrand');
    productPrice= document.getElementsByClassName('productPrice');
   // moreInfoButton= document.getElementsByClassName('moreInfoButton');
    quantity= document.getElementsByClassName('quantity');
    select = document.getElementsByClassName('selectButton');
   // selectResponderButton = document.getElementsByClassName('selectResponderButton');

    for(var i = 0; i<number;i++){

     //   selectResponderButton[i].setAttribute("onclick","getsuggestedResponders('" +dataArray[i]['productName'] + "')");
        //sessionStorage.setItem('selectedProductName');
        productCard[i].setAttribute('onclick',"setProductNameSessionStorage('"+dataArray[i]['productName']+"')");
        //productCard[i].setAttribute("onclick","getsuggestedResponders('" +dataArray[i]['productName'] + "')");
        productID[i].innerText = dataArray[i]['productID'];
        
        productName[i].innerText = dataArray[i]['productName'];
        productBrand[i].innerText = "Brand name: "+dataArray[i]['productBrand'];
        productPrice[i].innerText = "Price: "+dataArray[i]['productPrice'];
        //  moreInfoButton[i].innerText = "More Info"

        //category,id,price,qtyNumber)
        select[i].setAttribute("onclick","setProductForm('"+dataArray[i]['productCategory']+"',"+ dataArray[i]['productID']+","+ dataArray[i]['productPrice']+","+ i + ")");
        //quantity[i].setAttribute('ID','product');
        select[i].innerText  = "Select"
    
        var productPic = new Image();
        productPic.src = dataArray[i]['productImage'];

        productImage[i].appendChild(productPic);

        productPic.setAttribute('class','productphoto');
        

    }

}// end of function


/* For product categories */

// create elements for product categories to be appended 
function createProductCategoryElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("productCategories");
    
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');
    var categoryName= document.createElement('p');

    // set attributes
    card.setAttribute('class','productCategory');
    categoryName.setAttribute('class','productCategoryName');

    // append elements to the row
    card.appendChild(categoryName);

    div.append(card);

    } 
    
    
} // end of function

// set data for product catgory elements created
function setProductCategoryData(array){

    var dataArray = array;
    var number = dataArray.length;




    var productCategory = document.getElementsByClassName('productCategory');
    var productCategoryName= document.getElementsByClassName('productCategoryName');


    for(var i = 0; i<number;i++){


        productCategoryName[i].innerText = dataArray[i]['productCategory'];


    }

}// end of function


// to get product categories from php

// gets products data from php 
function getProductCategories(){
    
    
    var xmlhttp = new XMLHttpRequest();
  

    xmlhttp.open("POST", "Backend/Get_productCategories.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
        
            var dataArray = this.response;
            dataArray = JSON.parse(dataArray);
            console.log(dataArray);

           var number = dataArray.length;

           createProductCategoryElements(number);
           setProductCategoryData(dataArray);

           getProducts();
     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


/*-------------------------GET OTHER RESPONDERS-------------------------------------------------- */

// gets data from php 
function getallResponders(productName){
    var productName = productName;

    var municipality = sessionStorage.getItem('municipality');
    
    var xmlhttp = new XMLHttpRequest();
    
    query = "productName=" + productName + "&municipality=" + municipality;
    console.log(query)

    xmlhttp.open("POST", "Backend/Get_allProductsResponders.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            // refresh the div to avoid duplication in appending
            var allResponders =document.getElementById("productAllResponders");

            allResponders.innerHTML ="";
            allResponders.style.display ="grid";



            var dataArray = this.response;

            if(dataArray === "No responders near you for this service"){

                allResponders.innerText = "No other active responders";
            } else{
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
               
                var number = dataArray.length
                createAllRespondersElements(number);
                setAllResponderData(dataArray);
            }


     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function


// create elements for all other responders to be appended 
function createAllRespondersElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("productAllResponders");
    
   
    
    for(var i = 0;i<DataNumber;i++){
    
    // create elements for rows
    var card = document.createElement('div');


    var ID = document.createElement('p');
    var allRespondersProfilePic= document.createElement('div');
    var name = document.createElement('p');
    var municipality = document.createElement('p');
    var deliveryRate = document.createElement('p');

    var selectButton = document.createElement('p');
    var viewProfile = document.createElement('a');
    



    // set attributes
    selectButton.innerText = "Select";
    viewProfile.innerText = "View Profile";
    card.setAttribute('class','allResponderCard');
    ID.setAttribute('class','allResponderID');
    name.setAttribute('class','allResponderName');
    municipality.setAttribute('class','allResponderMunicipality');
    deliveryRate.setAttribute('class','allDeliveryRate');
    viewProfile.setAttribute('class','allViewProfile');
    selectButton.setAttribute('class','availableSelectButton');
    allRespondersProfilePic.setAttribute('class','allRespondersProfilePic');


    // append elements to the row
    card.appendChild(ID);
    card.appendChild(allRespondersProfilePic);
    card.appendChild(name);
    card.appendChild(municipality);
    card.appendChild(deliveryRate);
    card.appendChild(viewProfile);
    card.appendChild(selectButton);
    


    div.append(card);

    } 
    
    
} // end of function


// set suggested responders data 
function setAllResponderData(array){

    var dataArray = array;
    var number = dataArray.length;

    var responderCard = document.getElementsByClassName("allResponderCard");
    var allRespondersProfilePic = document.getElementsByClassName("allRespondersProfilePic");

    var ID= document.getElementsByClassName('allResponderID');
    var name= document.getElementsByClassName('allResponderName');
    var municipality= document.getElementsByClassName('allResponderMunicipality');
    var deliveryRate= document.getElementsByClassName('allDeliveryRate');
    var viewProfile = document.getElementsByClassName('allViewProfile');
    var selectButton = document.getElementsByClassName('availableSelectButton');
   //var selectButton.innerText = "Select";
   //var viewProfile.innerText = "View Profile";

    for(var i = 0; i<number;i++){
        //serviceCard[i].innerText = dataArray[i];
        //serviceCard[i].setAttribute("onclick","getsuggestedResponders('" + dataArray[i] + "')");

        ID[i].innerText = dataArray[i]['userID'];
        name[i].innerHTML ="<b>Username: </b>"+ dataArray[i]['userName'];
        municipality[i].innerHTML ="<b>Municipality: </b>"+  dataArray[i]['municipality'];
        deliveryRate[i].innerHTML ="<b>Delivery rate: </b>"+  dataArray[i]['deliveryRate'];
        viewProfile[i].href = "Public_Profile.php?userID=" +  dataArray[i]['userID'] + "&userType=Responder";
        selectButton[i].setAttribute('onclick','setResponderForm('+dataArray[i]['userID']+","+dataArray[i]['deliveryRate']+")");
        

        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','availableUserPhoto');
        allRespondersProfilePic[i].appendChild(image);
    }

}



// for closing the forms

function closeForms(){
    var pasabuyResponders = document.getElementById("pasabuyResponders");
    pasabuyResponders.style.display = "none";

    //AvailServiceForm = document.getElementById("transactionForm");
    //AvailServiceForm.reset();

}



// setting order form 



responderID = document.getElementById("responderID");
deliveryPrice = document.getElementById("deliveryPrice"); 


function setProductForm(category,id,price,qtyNumber){

var category = category;
var pID = id;
var price = price;
var qtyNumber = qtyNumber;


productCategory = document.getElementById("productCategory");
productID = document.getElementById("productID");
productPrice = document.getElementById("productPrice"); 
pasabuyFormContainer = document.getElementById("pasabuyFormContainer");

pasabuyFormContainer.style.display = "Block";

productCategory.value = category;
productID.value = id;
productPrice.value = price;


orderQuantity = document.getElementById("orderQuantity");
divQuantity = document.getElementsByClassName("quantity")[qtyNumber];

    if(divQuantity.value <= 0){

        orderQuantity.value = 1;
    }else{
        orderQuantity.value = divQuantity.value;
    }

}

function setResponderForm(id,deliveryPrice){
  var  responderID = id;
  var deliveryPrice = deliveryPrice;

  divResponderID = document.getElementById("responderID");
  divDeliveryPrice = document.getElementById("deliveryPrice"); 

  divResponderID.value = responderID;
  divDeliveryPrice.value = deliveryPrice;
  closeForms();

}


// set product name in session storage
function setProductNameSessionStorage(productName){

    var productName = productName;

    sessionStorage.setItem('selectedProductName',productName);
}


//closing confirmation form
function closeConfirmationForm(){
    pasabuyFormContainer = document.getElementById("pasabuyFormContainer");
    pasabuyFormContainer.style.display = "none";
    //console.log("hey");
    AvailServiceForm = document.getElementById("transactionForm");
    AvailServiceForm.reset();
}