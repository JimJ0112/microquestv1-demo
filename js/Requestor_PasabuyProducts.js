function submitEditChanges(){
    serviceViewForm = document.getElementById("serviceViewForm");
    serviceViewForm.submit();
}





// create elements to be appended 
function createServiceElements(Number){
 
    DataNumber = Number;
    div = document.getElementById("AvailableServicesContainer_Content");
   
    
    for(var i = 0;i<DataNumber;i++){
    
   // create elements for rows
    var card = document.createElement('div');
    var ProductImageDiv = document.createElement('div');
    //var ProductImage = document.createElement('img');
    var ProductInfo = document.createElement('div');
    var productName = document.createElement('p');
    var productBrand  = document.createElement('p');
    var productPrice  = document.createElement('p');
    var deliveryRate  = document.createElement('p');
    var itemStatus = document.createElement('p');
    var ProductCardButtons = document.createElement('div');
    var BuyButton = document.createElement('button');
    var addToCartButton = document.createElement('button');
    


    card.setAttribute("class","productCard");
    ProductImageDiv.setAttribute("class","ProductImageDiv");
   // ProductImage.setAttribute("class","ProductImage");

    ProductInfo.setAttribute("class","ProductInfo");
    productName.setAttribute("class","productName");
    productBrand.setAttribute("class","productBrand");
    productPrice.setAttribute("class","productPrice");
    deliveryRate.setAttribute("class","deliveryRate");
    itemStatus.setAttribute("class","itemStatus");

    ProductCardButtons.setAttribute("class","ProductCardButtons");
    BuyButton.setAttribute("class","BuyButton");
    addToCartButton.setAttribute("class","addToCartButton");
    BuyButton.innerText = "Buy";
    addToCartButton.innerText = "Add to Cart";
    


    
   // ProductImageDiv.appendChild(ProductImage);
    ProductCardButtons.appendChild(BuyButton);
    ProductCardButtons.appendChild(addToCartButton);



    ProductInfo.appendChild(productName);
    ProductInfo.appendChild(productBrand);
    ProductInfo.appendChild(productPrice);
    ProductInfo.appendChild(deliveryRate);
    ProductInfo.appendChild(itemStatus);

    card.appendChild(ProductImageDiv);
    card.appendChild(ProductInfo);
    card.appendChild(ProductCardButtons);



    div.append(card);

    } 
    
    
} // end of function


// set positions data 
function setData(array){

    var dataArray = array;
    var number = dataArray.length;

    var card = document.getElementsByClassName("productCard");
    var ProductImageDiv=document.getElementsByClassName("ProductImageDiv");
    //var ProductImage=document.getElementsByClassName("ProductImage");

    var ProductInfo=document.getElementsByClassName("ProductInfo");
    var productName=document.getElementsByClassName("productName");
    var productBrand=document.getElementsByClassName("productBrand");
    var productPrice=document.getElementsByClassName("productPrice");
    var deliveryRate=document.getElementsByClassName("deliveryRate");
    var itemStatus=document.getElementsByClassName("itemStatus");

    var ProductCardButtons=document.getElementsByClassName("ProductCardButtons");
    var EditButton=document.getElementsByClassName("EditButton");



    for(var i = 0; i<number;i++){
        

        card[i];
 
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImage');
        ProductImageDiv[i].appendChild(image);

        productName[i].innerText =  dataArray[i]['productName'];
        productBrand[i].innerText = "Brand: " + dataArray[i]['productBrand']
        productPrice[i].innerText = "Price: Php"+ dataArray[i]['productPrice']
        deliveryRate[i].innerText = "Delivery price: "+ dataArray[i]['deliveryRate']
        itemStatus[i].innerText = "Status: "+ dataArray[i]['itemStatus']
    
        // /EditButton[i].setAttribute();
    
    }

}





// for getting products for pasabuy
function getProducts(){
   var myID = myID
    
    var xmlhttp = new XMLHttpRequest();
    

    xmlhttp.open("POST", "Backend/Get_products.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
   

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);

            } else{
                dataArray = JSON.parse(dataArray);
                var number = dataArray.length;
                createServiceElements(number);
                console.log(dataArray);
                setData(dataArray);
    
            }



        

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


// getting product categories
// for filtering
function productCategory(array){
    var dataArray = array;
    var number = dataArray.length;
    var newData = [];


  
    for(var i = 0; i<number; i++){
        newData[i] = dataArray[i]['productCategory']
        //document.write(dataArray[i]['servicePosition']);
        
    }

    newData.sort();

    return newData;

}




function closeServiceView(){
    myServiceViewBack = document.getElementById("myServiceViewBack");
    myServiceViewBack.style.display = "none";
}


function showServiceView(serviceID,serviceCategory,servicePosition,rate,certification,certificateFile,serviceStatus){

    serviceIDViewContainer  = document.getElementById("serviceIDViewContainer");
    serviceCategoryViewContainer = document.getElementById("serviceCategoryViewContainer");
    servicePositionViewContainer = document.getElementById("servicePositionViewContainer");
    rateViewContainer = document.getElementById("rateViewContainer");
    certificationViewContainer = document.getElementById("certificationViewContainer");
    certificateFileViewContainer = document.getElementById("certificateFileViewContainer");
    serviceStatusViewContainer = document.getElementById("serviceStatusViewContainer");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");
    serviceIDHidden = document.getElementById("serviceIDHidden");


    myServiceViewBack = document.getElementById("myServiceViewBack");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewTable = document.getElementById("myServiceViewTable");


    
    ServiceFormID = document.getElementById("ServiceFormID");
    ServiceFormCategory = document.getElementById("ServiceFormCategory");
    ServiceFormPosition = document.getElementById("ServiceFormPosition");
    ServiceFormRate = document.getElementById("ServiceFormRate");
    //ServiceFormCertification = document.getElementById("ServiceFormCertification");
    ServiceFormStatus = document.getElementById("ServiceFormStatus");

    ServiceFormCategory.value = serviceCategory
    ServiceFormPosition.value = servicePosition;
    ServiceFormRate.value = rate;
    //ServiceFormCertification.value = certification;
    ServiceFormStatus.value = serviceStatus;
    ServiceFormID.innerText = serviceID;
    serviceIDHidden.value = serviceID;

    
    serviceIDViewContainer.innerText  =  serviceID
    serviceCategoryViewContainer.innerText =  serviceCategory
    servicePositionViewContainer.innerText = servicePosition
    rateViewContainer.innerText = rate
    certificationViewContainer.innerText = certification
    certificateFileViewContainer.innerText = certificateFile
    serviceStatusViewContainer.innerText = serviceStatus

    myServiceViewBack.style.display = "grid";
    myServiceViewTable.style.display = "block";
    myServiceViewForm.style.display = "none";
    myServiceViewEditButton.innerText = "Edit";



    
}

function editMyService(){
    myServiceViewTable = document.getElementById("myServiceViewTable");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");

    myServiceViewTable.style.display = "none";
    myServiceViewForm.style.display = "block";
    myServiceViewEditButton.innerText = "Cancel";
    myServiceViewEditButton.style.backgroundColor="red";
    myServiceViewEditButton.style.color="white";
    myServiceViewEditButton.setAttribute("onclick","closeEditMyService()");


}

function closeEditMyService(){
    myServiceViewTable = document.getElementById("myServiceViewTable");
    myServiceViewForm = document.getElementById("myServiceViewForm");
    myServiceViewEditButton = document.getElementById("myServiceViewEditButton");

    myServiceViewTable.style.display = "block";
    myServiceViewForm.style.display = "none";
    myServiceViewEditButton.innerText = "Edit";
    myServiceViewEditButton.setAttribute("onclick","editMyService()");
    myServiceViewEditButton.style.backgroundColor="white";
    myServiceViewEditButton.style.color="black";
}



