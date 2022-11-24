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
                require_once("imports/RequestorNavBar.php");
    ?>
<img src="img/b.jpg" id="BodyBackgroundImg"/>


<!-- Main -->
    
       
 
<div id="Requestor_CreateRequestMainBack">
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
							<option selected disabled value="other"> Category</option>
						</select> 
			</div>


        <form method="post" action="Backend/CreateRequestBackend.php" id="regularRequestForm" class="requestForm">


            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="formType" value="regularRequest"/> 
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>">
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="requestCategory" id="requestCategory">
            <input type="hidden" name="datePosted" value="<?php $today ?>">
        <Table id="formsTable">
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
<!--
        <form method="post" action="Backend/CreateRequestBackend.php" id="otherCategoriesRequestForm" class="requestForm">

            <input type="hidden" name="formType"> 

            <h2 id="selectedCategory"> </h2>
            <input type="hidden" name="requestorID" value="<?php echo $_SESSION['userID']?>"> 
            <input type="hidden" name="requestorMunicipality" value="<?php echo $_SESSION['municipality']?>">
            <input type="hidden" name="datePosted" value="<?php 
                date_default_timezone_set("Asia/Manila");
                echo date("Y-m-d H:i:s",time());?>">

            <label> Category </label> 
            <span class="asteriskRequiredField"> * </span>
            <input type="text" name="requestCategory" required> 
            
            <label> Title of your request </label> 
            <span class="asteriskRequiredField"> * </span>
            <input type="text" name="requestTitle" required> 
            
            <label> How much do you offer for this request </label> 
            <span class="asteriskRequiredField"> * </span>
            <input type="number" name="requestExpectedPrice" required> 

            <label> Negotiable  </label> 
            <span class="asteriskRequiredField"> * </span>
            <select name="isNegotiable" required>
                <option value="Negotiable"> Negotiable </option> 
                <option value="Not-negotiable"> Not-negotiable </option> 
            </select>   

            <label> Due Date:  </label> 

            <span class="asteriskRequiredField"> * </span>
            <input type="date" name="dueDate" min="<?php echo $today; ?>" max="" value="<?php echo $today;?>" required> 

            <span class="asteriskRequiredField"> * </span>
            <label> More Details </label> 
            <textarea name="requestDescription" rows="10" cols="50" required></textarea> 


            <input type="submit" value="Post">

        </form>
-->
    </div>





<!--End of main div-->
    </div>
</div>
    



</body>
</html>