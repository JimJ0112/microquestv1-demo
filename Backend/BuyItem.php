<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();




date_default_timezone_set("Asia/Manila");
$today= date("Y-m-d");

$dataArray = [];



  //	pasabuyTransactionID	productID	serviceID	requestorID	responderID	price	quantity	orderDate	orderStatus	paymentFile	transactionStartDate	transactionEndDate	
   

            $productID = $_POST['productID'];
            $serviceID = $_POST['serviceID'];
            $requestorID = $_POST['requestorID'];
            $responderID = $_POST['responderID'];
            $price = $_POST['price'];
            $quantity = $_POST['quantity'];
            $orderDate = $_POST['dateAssigned'];
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
            

            echo  $DBHandler->registerPasabuyTransaction($productID,$serviceID,$requestorID,$responderID,$price,$quantity,$orderDate,$orderStatus,$paymentFile,$transactionStartDate,$transactionEndDate,$totalPrice,$dueDate);



        







 












//header("location:../Requestor_PasabuyTransactions.php?msg=Transaction Success!&type=pasabuy&nav=1");


