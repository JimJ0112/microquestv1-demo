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
    //var responder = document.createElement('p');
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
    //responder.setAttribute("class","responder");

    ProductCardButtons.setAttribute("class","ProductCardButtons");
    BuyButton.setAttribute("class","BuyButton");
    addToCartButton.setAttribute("class","addToCartButton");
    BuyButton.innerText = "Buy";
    addToCartButton.innerText = "Add to Cart";
    


    
   // ProductImageDiv.appendChild(ProductImage);
   // ProductCardButtons.appendChild(BuyButton);
   // ProductCardButtons.appendChild(addToCartButton);



    ProductInfo.appendChild(productName);
    ProductInfo.appendChild(productBrand);
    ProductInfo.appendChild(productPrice);
    ProductInfo.appendChild(deliveryRate);
    ProductInfo.appendChild(itemStatus);
   // ProductInfo.appendChild(responder);

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

   // var addToCartButton = document.getElementsByClassName("addToCartButton");
    //var ProductImage=document.getElementsByClassName("ProductImage");

    var ProductInfo=document.getElementsByClassName("ProductInfo");
    var productName=document.getElementsByClassName("productName");
    var productBrand=document.getElementsByClassName("productBrand");
    var productPrice=document.getElementsByClassName("productPrice");
    var deliveryRate=document.getElementsByClassName("deliveryRate");
    var itemStatus=document.getElementsByClassName("itemStatus");

    var ProductCardButtons=document.getElementsByClassName("ProductCardButtons");
    //var BuyButton = document.getElementsByClassName("BuyButton");

   // var responder = document.getElementsByClassName('responder');



    for(var i = 0; i<number;i++){
        

        card[i];
 
        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute('class','productImage');
        ProductImageDiv[i].appendChild(image);

        productName[i].innerText =  dataArray[i]['productName'];
        productBrand[i].innerText = "Brand: " + dataArray[i]['productBrand'];
        productPrice[i].innerText = "Price: Php "+ dataArray[i]['productPrice'] + ".00";
        deliveryRate[i].innerText = "Delivery price Php : "+ dataArray[i]['deliveryRate']+ ".00";
        itemStatus[i].innerText = "Status: "+ dataArray[i]['itemStatus'];

        //id,name,brand,price,deliveryPrice,status

        card[i].setAttribute("onclick","setEditProduct("  + dataArray[i]['productID'] + ',"' + dataArray[i]['productName'] + '","' + dataArray[i]['productBrand'] + '",' + dataArray[i]['productPrice'] + "," +dataArray[i]['deliveryRate'] + ',"' +dataArray[i]['itemStatus'] +'","' + dataArray[i]['productDescription']+ '")');


    }

}





// for getting products for pasabuy
function getProducts(userID){
   var myID = userID;
   var query = "myID="+myID;
    
    var xmlhttp = new XMLHttpRequest();
    document.getElementById('AvailableServicesContainer_Content').innerHTML = "";
    

    xmlhttp.open("POST", "Backend/Get_myProducts.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
   

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);
                document.getElementById('AvailableServicesContainer_Content').innerHTML = "No Products";

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
    
    xmlhttp.send(query);
    
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












function addQuantity(){
    var quantity = document.getElementById("quantity");

        if(quantity.value <=0){
            quantity.value = 1;
        } else if(quantity.value >= 99){
            quantity.value = quantity.value;
        } else {
            quantity.value = parseInt(quantity.value) + 1;
            
        }
        
}


function subQuantity(){
    var quantity = document.getElementById("quantity");

        if(quantity.value >= 99){
            quantity.value = 99;

        } else if(quantity.value <= 1){

            quantity.value = 1

        } else {
            quantity.value = parseInt(quantity.value) - 1;
            
        }
        
}


function quantityLimit(){
    var quantity = document.getElementById("quantity");

    if(quantity.value >= 99){
        quantity.value = 99;

    } else if(quantity.value <= 1){

        quantity.value = 1

    }
}

function closeForm(id){
    var id = id;
    document.getElementById(id).style.display = "none";
    document.getElementById("quantity").value = "1";
    document.getElementById("quantity1").value = "1";

}





function addQuantity1(){
    var quantity = document.getElementById("quantity1");

        if(quantity.value <=0){
            quantity.value = 1;
        } else if(quantity.value >= 99){
            quantity.value = quantity.value;
        } else {
            quantity.value = parseInt(quantity.value) + 1;
            setTotal();
        }
        
}


function subQuantity1(){
    var quantity = document.getElementById("quantity1");

        if(quantity.value >= 99){
            quantity.value = 99;

        } else if(quantity.value <= 1){

            quantity.value = 1

        } else {
            quantity.value = parseInt(quantity.value) - 1;
            setTotal();
        }
        
}

function setTotal(){
    
    var quantity1 = document.getElementById('quantity1');
    var orderPrice = document.getElementById('orderPrice');
    

    totalPriceDisplay.innerText = parseInt(orderPrice)*parseInt(quantity1);
}


function setEditProduct(id,name,brand,price,deliveryPrice,status,description){
    var name = name;
    var brand = brand;
    var price = price;
    var deliveryPrice = deliveryPrice;
    var status = status;
    var id = id;
    var description = description;

    productIDHidden = document.getElementById('productIDHidden');
    productNameText = document.getElementById('productNameText');
    productBrandText = document.getElementById('productBrandText');
    productPriceText = document.getElementById('productPriceText');
    productDeliveryPriceText = document.getElementById('productDeliveryPriceText');
    productStatus = document.getElementsByClassName('productStatus');
    productDescriptionText = document.getElementById('productDescriptionText');

    updateProductFormBack = document.getElementById('updateProductFormBack');

    productIDHidden.value = "";
    productNameText.value = "";
    productBrandText.value = "";
    productPriceText.value = "";
    productDeliveryPriceText.value = "";
    productDescriptionText.value = "";

    productIDHidden.value = id;
    productNameText.value = name;
    productBrandText.value = brand;
    productPriceText.value = price;
    productDeliveryPriceText.value = deliveryPrice;
    productDescriptionText.value = description;

    if(status === "Not Available"){
        productStatus[1].checked = true; 
    }else{
        productStatus[0].checked = true; 
        
    }
    updateProductFormBack.style.display = "grid";





}