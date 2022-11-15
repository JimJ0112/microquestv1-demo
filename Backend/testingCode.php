<?php
require("../Classes/DBHandler.php");

$DBHandler = new DBHandler();




              // check if user is reported

              $tablename = "reportsinfo";
              $column = "reportedAccountID";
              $condition = 11;
              $column1 = "reportStatus";
              $condition1 = "Banned";

              $isBanned = $DBHandler->checkUserReported($tablename,$column,$condition,$column1,$condition1);
              

              $tablename = "reportsinfo";
              $column = "reportedAccountID";
              $condition = 11;
              $column1 = "reportStatus";
              $condition1 = "Restricted";


              $results =$DBHandler-> checkUserRestricted($tablename,$column,$condition,$column1,$condition1);

              if($results !== "failed to fetch"){
                  $results = json_encode($results);
                  $results = json_decode($results,true);

                  $restrictDuration =  $results[0]['restrictDuration'];
                  $isRestricted = true;

              } else {
                  $isRestricted = false;
              }


              echo"is banned: " ;
              echo $isBanned;
              echo"is restricted " ;
              echo $isRestricted;