<?php
session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();


if(isset($_POST['cartItem'])){
    $cartItem = $_POST['cartItem'];

    foreach($cartItem as $item){
  

        $dataArray[$item] = $getRow;
        $DBHandler->updateColumn("cart","productStatus","Deleted","cartID",$item);

    }


}






header("location:../Requestor_MyCart.php?msg=Deleted!");


