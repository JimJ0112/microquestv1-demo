//create Elements
function createElements(number){

    var number = number;
    var table = document.getElementById("myCartItemsTableBody");

    for(var i = 0; i<number;i++){

        // create Elements
        var tr = document.createElement('tr');
        var checkBoxTD = document.createElement('td');
        var product = document.createElement('td');
        var productInfo = document.createElement('td');
        var itemPrice = document.createElement('td');
        var quantity = document.createElement('td');
        var totalPrice = document.createElement('td');
        var actionsTD = document.createElement('td');


        tr.setAttribute("class","productRow");
        checkBoxTD.setAttribute("class","checkBoxTD");
        product.setAttribute("class","product");
        productInfo.setAttribute("class","productInfo");
        itemPrice.setAttribute("class","itemPrice");
        quantity.setAttribute("class","quantity");
        totalPrice.setAttribute("class","totalPrice");
        actionsTD.setAttribute("class","actionsTD");

        tr.appendChild(checkBoxTD);
        tr.appendChild(product);
        tr.appendChild(productInfo);
        tr.appendChild(itemPrice);
        tr.appendChild(quantity);
        tr.appendChild(totalPrice);
        tr.appendChild(actionsTD);


        table.appendChild(tr)






    }

}



function setData(array){
    var dataArray = array;
    var number = dataArray.length;

    productRow = document.getElementsByClassName("productRow");
    checkBoxTD = document.getElementsByClassName("checkBoxTD");
    product = document.getElementsByClassName("product");
    productInfo = document.getElementsByClassName("productInfo");
    itemPrice = document.getElementsByClassName("itemPrice");
    quantity = document.getElementsByClassName("quantity");
    totalPrice = document.getElementsByClassName("totalPrice");
    actionsTD = document.getElementsByClassName("actionsTD");


    for(var i=0; i<number; i++){

       
        var checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("name","cartItem[]");
        checkBox.value = dataArray[i]['cartID'];
        checkBox.setAttribute("onchange","getCheckedTotal()");
        checkBox.setAttribute("class","cartItemCheckBox");




        var image = new Image();
        image.src = dataArray[i]['productImage'];
        image.setAttribute("class","productImage");

        var computedTotalPrice = parseInt(dataArray[i]['productPrice']) * parseInt(dataArray[i]['quantity']);

        var deleteButton = document.createElement("img");
        deleteButton.src = "img/delete.png";
        deleteButton.setAttribute("class","cartItemDeleteButton");

        checkBoxTD[i].appendChild(checkBox);
        product[i].appendChild(image);
        productInfo[i].innerText = dataArray[i]['productName'] + " - " + dataArray[i]['productDescription'];
        itemPrice[i].innerText = "₱ "+dataArray[i]['productPrice'];
        quantity[i].innerText = dataArray[i]['quantity'];
       // quantity[i].appendChild(inputNumber);
        totalPrice[i].innerText = "₱ "+computedTotalPrice;
        actionsTD[i].appendChild(deleteButton);


    }

}

// for getting products for pasabuy
function getMyCartItems(requestorID){
   var requestorID = requestorID
    
    var xmlhttp = new XMLHttpRequest();
    var query = "requestorID="+requestorID;

    xmlhttp.open("POST", "Backend/Get_myCartItems.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var table = document.getElementById("myCartItemsTableBody");
            document.getElementById("myCartItemsTableBody").innerHTML="";

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){

                console.log(dataArray);
                table.innerHTML="<h1> No Items <h1> ";

            } else{

                dataArray = JSON.parse(dataArray);
                var number = dataArray.length;
                createElements(number);
                setData(dataArray);
                console.log(dataArray);
 
    
            }



        

     
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send(query);
    
}// end of function



// for getting products for pasabuy
/*
function updateQuantity(cartID){
    var requestorID = requestorID
     
     var xmlhttp = new XMLHttpRequest();
     var query = "cartID="+requestorID;
 
     xmlhttp.open("POST", "Backend/Get_myCartItems.php", true);
     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xmlhttp.onload = function() {
         if (this.readyState === 4 || this.status === 200){ 
            
             var table = document.getElementById("myCartItemsTableBody");
             document.getElementById("myCartItemsTableBody").innerHTML="";
 
             var dataArray = this.response;
 
             if(dataArray === "failed to fetch"){
 
                 console.log(dataArray);
                 table.innerHTML="<h1> No Items <h1> ";
 
             } else{
 
                 dataArray = JSON.parse(dataArray);
                 var number = dataArray.length;
                 createElements(number);
                 setData(dataArray);
                 console.log(dataArray);
  
     
             }
 
 
 
         
 
      
         }else{
             console.log(err);
         }      
     };
     
     xmlhttp.send(query);
     
 }// end of function
 */


 function showForms(){
    document.getElementById('deliverDateBack').style.display = "grid";
 }

 function closeForms(){
    document.getElementById('deliverDateBack').style.display = "none";

 }

 function getCheckedTotal(){
    var cartItemCheckBox = document.getElementsByClassName('cartItemCheckBox');
    var totalPrice = document.getElementsByClassName('totalPrice');
    var number = cartItemCheckBox.length;
    var allTotal = document.getElementById('allTotal');
    var totalPriceDisplay = document.getElementById('totalPriceDisplay');
    var total = 0;


    for(var i = 0; i<number; i++){
        if(cartItemCheckBox[i].checked){

            var strPrice = totalPrice[i].innerText;
            strPrice = strPrice.substr(1);

           // var price = parseInt(totalPrice[i].innerText);
           var price = parseInt(strPrice);
           total = total + price;

           // allTotal.innerText = parseInt(allTotal.innerText) + price;

        }

    }
    allTotal.innerText = parseInt(total);
    totalPriceDisplay.innerText = parseInt(total);
    //alert(total);

 }