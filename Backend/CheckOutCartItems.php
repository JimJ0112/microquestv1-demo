<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


//	getRow($tablename,$column,$condition,$orderby = null)
$tablename ="cart";
$column ="cartID";

date_default_timezone_set("Asia/Manila");
$today= date("Y-m-d");

$dataArray = [];

if(isset($_POST['cartItem'])){
    $cartItem = $_POST['cartItem'];

    foreach($cartItem as $item){
        $condition = $item;
        $getRow = $DBHandler->getRow($tablename,$column,$condition);

        $dataArray[$item] = $getRow;
        $DBHandler->updateColumn("cart","productStatus","Checked Out","cartID",$item);

    }

   //echo json_encode($dataArray);
  // echo $dataArray;

  //	pasabuyTransactionID	productID	serviceID	requestorID	responderID	price	quantity	orderDate	orderStatus	paymentFile	transactionStartDate	transactionEndDate	
   foreach($dataArray as $array){
        //var_dump($array);

 
        foreach($array as $data ){

            $productID = $data['productID'];
            $serviceID = $data['serviceID'];
            $requestorID = $data['requestorID'];
            $responderID = $data['responderID'];
            $price = $DBHandler->getData("products","productID",$productID,"productPrice");
            $quantity = $data['quantity'];
            $orderDate = $data['dateAssigned'];
            $orderStatus = "pending";
            $paymentFile = "none";
            $transactionStartDate = $today;
            $transactionEndDate = "none";
        
            $totalPrice = (int)$price * (int)$quantity;
            $totalPrice;
            
            if(isset($_POST['dueDate'])){
                $dueDate = $_POST['dueDate'];
            } else {
                $dueDate = "no due date";

            }


            echo $dueDate;

            echo  $DBHandler->registerPasabuyTransaction($productID,$serviceID,$requestorID,$responderID,$price,$quantity,$orderDate,$orderStatus,$paymentFile,$transactionStartDate,$transactionEndDate,$totalPrice,$dueDate);



        }







   }





}






//header("location:../Requestor_MyCart.php?msg=Transaction Success!");


