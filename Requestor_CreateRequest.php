<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:LoginForm.php?msg=Please Login First");
    }

    if(isset($_SESSION["userType"])){
        $usertype = $_SESSION["userType"];
        if($usertype != "Requestor"){
            header("location: User_Profile.php?msg= Not a Reponder");
        }
    }


    date_default_timezone_set("Asia/Manila");
    //echo date("Y-m-d H:i:s",time());
    //$today = date("Y-m-d H:i:s",time());
    $today = date("Y-m-d",time());

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="manifest" href="manifest.json">
    
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>
    

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/Requestor_CreateRequest.css">

    <script src="js/CreateRequest.js"> </script>


    <title> Create a Request </title>
</head>

<body onload="getServices()" id="Responder_CreateServiceBackground">
    <?php
                //require_once("imports/RequestorNavBar.php");
    ?>


<?php
	//require_once("imports/RequestorNavBar.php");


	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];
		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not verified yet");

		}else{
			if($userType === "Requestor"){
				require_once("imports/RequestorNavBar.php");
			} else{
				header("location: Responder_RequestBoard.php?msg=Not a Responder!");
			}

		}


	}

?>

<!-- Main -->
    
       
 
<div id="Requestor_CreateRequestMainBack">
<div class="grid-container" id="TransactionsNav">

<a href="Requestor_CreateRequest.php">
    <div id="TransactionTypeTd" class="grid-item">
        <div id="TransactionTypeDropDown">
            +Create
        </div>
    </div>
</a>
  

<div id="TransactionsNavItem1" class="TransactionsNavItems grid-item"> <a href="Requestor_RequestBoard.php?fil=0"> <img class="navIcon" src="img/select-all.png"> <span class="sideNav-text">  All Requests </span></a> </div>  
<div id="TransactionsNavItem2" class="TransactionsNavItems grid-item"> <a href="Requestor_RequestBoard.php?fil=1">  <img class="navIcon" src="img/wall-clock.png"> <span class="sideNav-text">  On Going </span> </a> </div>  
  <div id="TransactionsNavItem3" class="TransactionsNavItems grid-item"> <a href="Requestor_RequestBoard.php?fil=2">  <img class="navIcon" src="img/power.png"> <span class="sideNav-text"> Active  </span> </a> </div> 
  <div id="TransactionsNavItem4" class="TransactionsNavItems grid-item"> <a href="Requestor_RequestBoard.php?fil=3">  <img class="navIcon" src="img/sleep-mode.png"> <span class="sideNav-text"> Inactive  </span> </a> </div> 
  <div id="TransactionsNavItem5" class="TransactionsNavItems grid-item"> <a href="Requestor_RequestBoard.php?fil=4">  <img class="navIcon" src="img/check.png"> <span class="sideNav-text"> Completed  </span> </a> </div>   
  

</div>
<center><h1 id="RequestOrdersTitle"> Create a Request</h1> </center>
    <div id="Requestor_CreateRequestMain">
            
        
        
        <center>
       
            <div id="CreateRequestControlsContainer">

                <div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/g838.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_AvailableServices.php"> <span id="RequestsButtonText"> Avail Services </span> </a>
                            </td>
                        <tr>
                    </table>
                </div>
            <div>

            <div id="ControlItemRequestsButton">
                    <table>
                        <tr class="navControlSelected">
                            <td>
                                <image src="img/requests.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Requestor_RequestBoard.php" > <span id="RequestsButtonText"> My Requests </span> </a>
                            </td>
                        <tr>
                    </table>
            </div>

            
      

        </center>
    
    <!-- Forms for creating request -->

    <!-- regular requests --> 

    <div id="FormsContainer">

            <div class="CreateRequestControlsDropDown" id="AvailableServicesCategoryContainer" onchange="setCategory()"> 
						<select id="DropDownRequestCategory"> 
							<option selected disabled> Category</option>
						</select> 
			</div>


        <form method="post" action="Backend/CreateRequestBackend.php" id="regularRequestForm" class="requestForm">


            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="formType" value="regularRequest"/> 
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>">
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="requestCategory" id="requestCategory">
            <input type="hidden" name="datePosted" value="<?php $today?>">
        <Table id="formsTable">
            <tr>
                <td class="infoTD">
                <p title="Specific title for the request.(e.g: 'Lawn Mowing', 'Logo Making', 'Computer Repair')">&#9432;</p>
                </td>
                <td class="tdright">
                    <label> Title of Request:</label> 
                </td>
                <td>
                    <input type="text" name="requestTitle" required>  <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>

            <tr>
                <td class="infoTD">
                <p title="Amount the responder will recieve after completing the request.">&#9432;</p>
                </td>
                <td class="tdright">
                    <label> Request Fee: </label> 
                </td> 
                <td>   
                    <input type="number" name="requestExpectedPrice" required><span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>

            <tr>
                <td class="infoTD">
                <p title="Fee can set to lower or higher amount depends on the agreed price.">&#9432;</p>
                </td>
                <td class="tdright">    
                    <label> Negotiable Fee: </label> 
                </td> 
                <td>   
                    <select name="isNegotiable" required> 
                        <option value="Negotiable"> Negotiable </option> 
                        <option value="NotNegotiable"> Not-negotiable </option> 
                    </select><span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
                
            <tr>
                <td class="infoTD">
                <p title= "Responders can only apply on request until this date.">&#9432;</p>
                </td>
                <td class="tdright"> 
                    <label> Available Until: </label> 
                </td> 
                <td>
                    <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required>
                    <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
    
            <tr>
                <td class="infoTD">
                <p title="Please give atleast simple description of your request.">&#9432;</p>
                </td>
                <td class="tdright">
                    <label> More Details: </label> 
                </td> 
                <td>
                    <textarea name="requestDescription" rows="10" cols="50" required></textarea> 
                    <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
        </Table>

            <input type="submit" value="Post">
        </form>

        <!-- pasabuy requests --> 

        <form method="post" action="Backend/CreatePasabuyRequestBackend.php" id="pasabuyRequestForm" class="requestForm" enctype="multipart/form-data">
       
            <input type="hidden" name="formType" value="Pasabuy"> 

            <h2 id="selectedCategory"> Pasabuy Request </h2>
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>">
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="requestCategory" value="pasabuy">
            <input type="hidden" name="datePosted" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>">

            <label> Sample picture of your requested product </label> 
            <input type="file" name="productImage"required> 

            <label> Product name: </label> 
            <input type="text" name="productName"required>
            <label> Product Brand: </label> 
            <input type="text" name="productBrand"required>

            <label> Price: </label> 
            <input type="number" name="requestExpectedPrice" required>

            <label> Negotiable: </label> 
            <select name="isNegotiable" required>
                <option> Negotiable </option> 
                <option> Not-negotiable </option> 
            </select>  

            <label> Due Date </label> 
            <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required> 

            <label> More Details: </label> 
            <textarea name="requestDescription" rows="10" cols="50" required></textarea> 

            <input type="submit" value="Post"> 



        </form>

<!-- other category of requests --> 

        <form method="post" action="Backend/CreateRequestBackend.php" id="otherCategoriesRequestForm" class="requestForm">

            <input type="hidden" name="formType"> 

            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>"> 
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="datePosted" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>">

            <Table id="formsTable">

            <tr>
                <td class="tdright">
                    <label> Category</label> 
                </td>
                <td>
                <input type="text" name="requestCategory" required>   <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
            <tr>
                <td class="tdright">
                    <label> Title:</label> 
                </td>
                <td>
                    <input type="text" name="requestTitle" required>  <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>

            <tr>
                <td class="tdright">
                    <label> Price: </label> 
                </td> 
                <td>   
                    <input type="number" name="requestExpectedPrice" required><span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>

            <tr>
                <td class="tdright">    
                    <label> Negotiable: </label> 
                </td> 
                <td>   
                    <select name="isNegotiable" required> 
                        <option value="Negotiable"> Negotiable </option> 
                        <option value="NotNegotiable"> Not-negotiable </option> 
                    </select><span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
                
            <tr>
                <td class="tdright"> 
                    <label> Due Date: </label> 
                </td> 
                <td>
                    <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required>
                    <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
    
            <tr>
                <td class="tdright">
                    <label> More Details: </label> 
                </td> 
                <td>
                    <textarea name="requestDescription" rows="10" cols="50" required></textarea> 
                    <span class="asteriskRequiredField"> * </span>
                </td> 
            </tr>
        </Table>

            <input type="submit" value="Post">
        </form>

    </div>





<!--End of main div-->
    </div>
</div>
    




</body>
</html>