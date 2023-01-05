<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$tablename = "certificates";
$column = "responderID";
$condition = $_POST['responderID'];
//$condition = 11;



$certificates = $DBHandler->getMyCertificates($tablename,$column,$condition);

if($certificates != "failed to fetch"){
    echo json_encode($certificates);
} else {
    echo $certificates;
}
