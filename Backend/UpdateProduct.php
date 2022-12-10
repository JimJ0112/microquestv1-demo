<?php

session_start();
include "../Classes/DBHandler.php";

$DBHandler = new DBHandler();



$productStatus = $_POST['productStatus'];
$productDeliveryPrice = $_POST['productDeliveryPrice'];
$productPrice = $_POST['productPrice'];
$productBrand = $_POST['productBrand'];
$productName = $_POST['productName'];
$productID = $_POST['productID'];
$productDescription = $_POST['productDescription'];



echo $result = $DBHandler -> updateMyProducts($productStatus,$productDeliveryPrice,$productPrice,$productBrand,$productName,$productID,$productDescription);
header("location:../Responder_PasabuyProducts.php?msg= Product Updated");

