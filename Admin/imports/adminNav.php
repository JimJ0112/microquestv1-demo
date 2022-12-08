<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    
    <link rel="stylesheet" href="css/adminNav.css">
   

    <link rel="manifest" href="../manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
  
    
    <title>Document</title>
</head>
<body>
        <!-- Nav -->
    <div id="NavContainer">
	    <img src="img/logo.png" id="Nav-Logo" title="Home"> 

	        <ul id="navUL">
			<a href="adminDashboard.php">
			        <li class="Nav-item" title="Get requestors" onclick="getRequestors()">
                        <?php
					        $pagename = basename($_SERVER['PHP_SELF']);
					        if($pagename === "adminDashboard.php"){
						        echo '<u>  Dashboard  </u>';
					        } else{
						        echo " Dashboard ";
					        }
				        ?>

			        </li>
                </a>


                <a href="approveRequestors.php">
			        <li class="Nav-item" title="Get requestors" onclick="getRequestors()">
                        <?php
					        $pagename = basename($_SERVER['PHP_SELF']);
					        if($pagename === "approveRequestors.php"){
						        echo '<u>  Approve requestors  </u>';
					        } else{
						        echo "Approve requestors";
					        }
				        ?>

			        </li>
                </a>

	
                <a href="approveResponders.php">
			        <li class="Nav-item" title="Get responders" onclick="getResponders()">
     
                        <?php
					        $pagename = basename($_SERVER['PHP_SELF']);
					        if($pagename === "approveResponders.php"){
						        echo '<u>  Approve responders  </u>';
					        } else{
						        echo "Approve responders";
					        }
				        ?>

			        </li> 
                </a>

                <a href="pendingReports.php">
			        <li class="Nav-item" title="Get reports" onclick="getAllReports()"> 
   
                        <?php
					        $pagename = basename($_SERVER['PHP_SELF']);
					        if($pagename === "pendingReports.php"){
						        echo '<u>  Pending Reports  </u>';
					        } else{
						        echo "Pending Reports";
					        }
				        ?>

			        </li>
                </a>
	
			    <li class="Nav-item" title="Me">
                    <?php
                        if(isset($_SESSION["microquest_AdminUsername"]) && isset($_SESSION["microquest_AdminType"])){
                            $userName = $_SESSION["microquest_AdminUsername"];
                            $adminType= $_SESSION["microquest_AdminType"];

                            echo " <b>  $userName | $adminType  </b>  ";
                        }
                    ?>

			    </li>

			    <li class="Nav-item" id="LogOutButton"> 
                    <a href="backend/Logout.php"> Logout </a>
			    </li>
	        </ul>

    </div>


</body>
</html>