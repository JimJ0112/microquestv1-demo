<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();




date_default_timezone_set("Asia/Manila");
$today= date("Y-m-d");




  //	pasabuyTransactionID	productID	serviceID	requestorID	responderID	price	quantity	orderDate	orderStatus	paymentFile	transactionStartDate	transactionEndDate	
   

          echo  $productID = $_POST['productID'];
          echo  $serviceID = $_POST['serviceID'];
          echo  $requestorID = $_POST['requestorID'];
          echo  $responderID = $_POST['responderID'];
          echo  $price = $_POST['price'];
          echo  $quantity = $_POST['quantity'];
          echo  $orderDate = $_POST['dateAssigned'];
          echo  $orderStatus = "pending";
          echo  $paymentFile = "none";
          echo  $transactionStartDate = $today;
          echo  $transactionEndDate = "none";
            
        
            $totalPrice = (int)$price * (int)$quantity;
            $totalPrice;
            
            if(isset($_POST['dueDate'])){
                echo  $dueDate = $_POST['dueDate'];
            } else {
                echo  $dueDate = "no due date";

            }
            

            echo  $DBHandler->registerPasabuyTransaction($productID,$serviceID,$requestorID,$responderID,$price,$quantity,$orderDate,$orderStatus,$paymentFile,$transactionStartDate,$transactionEndDate,$totalPrice,$dueDate);



        







 












header("location:../Requestor_PasabuyTransactions.php?msg=Transaction Success!&type=pasabuy&nav=1");


