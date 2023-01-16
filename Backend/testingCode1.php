<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();


$latestIDQuery = "SELECT MAX(transactionID) FROM transactions";
 $latestID = $DBHandler->runGETLatestTransactionID($latestIDQuery);
echo $latestID[0];