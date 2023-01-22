<?php 
session_start();
    if(!isset($_SESSION["userEmail"])){
        header("location:LoginForm.php?msg=Please Login First");
    }

    if(isset($_SESSION["userType"])){
        $usertype = $_SESSION["userType"];
        if($usertype != "Responder"){
            header("location: User_Profile.php?msg= Not a Reponder");
        }
    }

    if(isset($_GET['msg'])){
        $msg = $_GET['msg'];
        echo "<script> alert('$msg');</script> ";
    }
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
    

    <link rel="stylesheet" href="css/style2.css">
    <link rel="stylesheet" href="css/Responder_CreateService.css">

    <script src="js/createService.js"> </script>


    <title> Offer a Service </title>
</head>

<!--<body onload="getServices()" id="Responder_CreateServiceBackground"> -->
<body id="Responder_CreateServiceBackground"> 

    <?php
         //require_once("imports/ResponderNavBar.php");
    ?>

<?php
	//require_once("imports/ResponderNavBar.php");

	if(isset($_SESSION["userStatus"]) && isset($_SESSION["userType"])){
		$status = $_SESSION["userStatus"];
		$userType = $_SESSION["userType"];

		echo $status;

		if($status === "not verified" || $status === "Declined"){
			header("location: NotVerifiedMessage.php?msg=Not Verified yet");

		}else{
			if($userType === "Responder"){
				require_once("imports/ResponderNavBar.php");
			} else{
				header("location: Requestor_AvailableServices.php?msg=Not a Responder!");
			}

		}


	}
?>


<script>otherPosition(); </script>
<!-- forms -->
<div id="regularServicesFormBack" class="formBack">

    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="regularServicesForm" class="ServicePopUp"> 
        <input type="hidden" name="formType" value="regularServices">
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
        <input type="hidden" name="serviceCategory" id="serviceCategoryRegular">
            <div id="closeButton" onclick="closeForms()"> ✕ </div> <br/><br/><br/>
            <center>
                <h3 id="selectedCategoryText"> Category </h3>
                <p class="addToSpecializationMessage"> ⓘ This category will be added to your specializations </p> <br/>
            </center>
            <table id="home_computerRelated_Table">
                

                <tr class="home_computerRelated_Tr">
                    <td class="home_computerRelated_Td" id="OtherServicePositionText"  style="display:none">
                        Other Service:
                    </td>

                    <td>
                    <span class="asteriskRequiredField" title="This Field is Required" id="asteriskRequiredFieldHidden"  style="display:none"> * </span>
                        <input name="otherServicePosition"  id="otherServicePosition" type="text" placeholder="Please enter" style="display:none"/>
                        
                    </td>

                    
                </tr>

                <tr class="home_computerRelated_Tr" id="serviceDescriptionTR">
                    <td id="serviceDescriptionText">Description </td>
                    <td id="serviceDescriptionInput"> 
                        <span class="asteriskRequiredField" title="This Field is Required" id="asteriskRequiredFieldHiddenDescription"  style="display:none"> * </span>
                        <input type="text" name="serviceDescription"> 
                    </td>
                </tr>

                <tr class="home_computerRelated_Tr">
     
                    <td class="home_computerRelated_Td column1_td"> Service:&nbsp </td>
               
                    <td>
                        <select required name="servicePosition" id="servicePositionDropDown" onchange="otherPosition()"  Required>
                            
                        </select><span class="asteriskRequiredField"> * </span>
                      
                    </td>
               
                </tr>
                

                <tr class="home_computerRelated_Tr">

                    <td class="home_computerRelated_Td column1_td"> Service Fee:&nbsp </td>
                    <td>
                        <input required type="number" name="rate"  Required> <span class="asteriskRequiredField"> * </span>
                    </td> 
                </tr>

                <tr>
                    <td>Banner Image </td>
                    <td> <input type="file" name="bannerImage" accept="image/*"> </td>
                </tr>



                
            </table>
            <br/> <br/> <br/> <br/>
        <input type="submit"/>
    </form>
</div>

<!-- For Pasabuy -->

<div id="pasabuyFormBack" class="formBack">
    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="pasabuyForm" class="ServicePopUp"> 
        <input type="hidden" name="formType" value="pasabuy">
        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
        <input type="hidden" name="serviceCategory" id="serviceCategory" value="Pasabuy">
        <div id="closeButton" onclick="closeForms()"> ✕ </div> <br/> <br/><br/> <br/>
        
  
            <center>
                <h1> Pasabuy </h1>
                <p class="addToSpecializationMessage"> ⓘ This category will be added to your specializations </p> <br/>
            </center>

        <table id="pasabayTable">

        <!--
            <tr> 
                
                
                <td class="column1_td"> Category </td>
                <td>
                    <select name="itemCategory"  Required>
                        <option value= "Groceries"> Groceries </option>
                        <option value= "FastFood"> FastFood </option>
                    </select>
                </td>

            </tr>
        -->
        <input type="hidden" name="itemCategory" value="Groceries" />
        
            <tr>
                <td class="column1_td"> Product Name </td>
                <td> <input name="productName" type="text"  Required/></td>
            </tr>

            <tr>
                <td class="column1_td"> Product Brand </td>
                <td> <input name="productBrand" type="text"  Required/></td>
            </tr>

            <tr>
                <td class="column1_td"> Product Description </td>
                <td> <input name="productDescription" type="text"  Required/></td>
            </tr>

            <tr>
                <td class="column1_td"> Product Price </td>
                <td> <input placeholder="Php" name="productPrice" type="number"  Required/></td>
            </tr>

            <tr>
                <td class="column1_td"> Delivery fee </td>
                <td> <input type="number" name="rate"  Required> </td> 
            </tr>

            <tr>
                <td class="column1_td"> Product Picture </td>
                <td> <input name="productImage" type="file"  Required/> </td>
            </tr>


        </table>

        <br/> <br/> <br/>
        <input type="submit">
    </form>
</div>
<!-- For other categories -->

<div id="otherCategoriesFormBack" class="formBack">

    <form action="Backend/CreateServiceBackend.php" method="post" enctype="multipart/form-data" id="otherCategoriesForm" class="ServicePopUp"> 

        <input type="hidden" name="responderID" value="<?php echo $_SESSION["userID"];?>"> 
        <input type="hidden" name="formType" value="otherCategories">
        
        <div id="closeButton" onclick="closeForms()"> ✕ </div>
            <table id="otherTable">
                <tr>
                    
                    <td class="column1_td"> Category </td>
                    <td> 
                        <p class="addToSpecializationMessage"> ⓘ This category will be added to your specializations </p> 
                        <input type="text" name="serviceCategory" id="serviceCategory"  Required> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span>
                    </td>
                </tr>

                <tr>
                    <td class="column1_td"> Service: </td>
                    <td> 
                        <input type="text" name="servicePosition" Required/>
                        <span class="asteriskRequiredField" title="This Field is Required" > * </span>
                    </td>
                </tr>

                <tr>
                    <td class="column1_td"> Service Fee </td>
                    <td> 
                        <input type="number" name="rate" Required> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span>
                    </td> 
                </tr>

                <!--
                <tr>
                    <td class="column1_td">Training/Certificate</td>
                    
                    <td> 
                        <span class="asteriskRequiredField" title="This Field is Required"> * </span>
                        <span class="enterNone"> Enter "none" if not applicable </span> 
                        <input type="text" name="certification" Required> 
                    </td> 
                </tr>

                <tr>
                    <td class="column1_td">Training/Certificate File </td>
                    <td> <input type="file" name="certificateFile" accept="image/png, image/jpg, image/jpeg"> </td>
                </tr>
                -->
                
                <tr>
                    <td>Banner Image </td>
                    <td> <input type="file" name="bannerImage" accept="image/*"> </td>
                </tr>

                <tr>
                    <td>Description </td>
                    <td> <input type="text" name="serviceDescription"> </td>
                </tr>
                
            </table>

            <input type="submit"/>
    </form>
</div>

<!-- Main -->

<?php
            if(isset($_GET['newUser'])){
                echo" <a href='Responder_Home.php'> <div class='createRequestButton'> Skip for now </div> <a/>";
            }
            
?>


<div id="Responder_CreateServiceMainBack">
   
        <br/>
            <center> <h1 id="RequestOrdersTitle"> Offer a Service</h1> </center>
        <br/>

        
 <div id="Responder_CreateServiceMain">

    <center>
 
           <!-- <div id="CreateServiceControlsContainer">
                <form method="GET" action="Backend/Get_products.php" id="SearchForm"> 
                    <button id="CreateServiceSearchButton">🔍</button>
                    <span>
                        <input type="Search" name="q" id="CreateServiceSearch" placeholder="Search..">
                    </span>
                </form> 
                <div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/requests.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Responder_RequestBoard.php"> <span id="RequestsButtonText"> RequestBoard </span> </a>
                            </td>
                        <tr>
                    </table>
                </div>

                <div id="ControlItemRequestsButton">
                    <table>
                        <tr>
                            <td>
                                <image src="img/work-icon.png" class="RequestsButtonImage"> 
                                
                            </td>

                            <td>
                                <a href="Responder_MyServices.php"> <span id="RequestsButtonText"> My Services </span> </a>
                            </td>
                        <tr>
                    </table>
                </div>
            <div>-->
      

    </center>
    


<div>
    <div id="createServiceNavMain"> 

     <ul>
        
        <li class="serviceNavItem" onclick="setCategory('Home Service')"> 
            <table>
                <tr>
                    <td> <image src="img/493_n.png" class="controlImage"> </td>
                    <td> <span class="categoryTitle"> Home Services </span> </td>
                </tr>
            </table>
        </li> 


        <li class="serviceNavItem" onclick="setCategory('Pasabuy')"> 
            <table>
                <tr>
                    <td> <image src="img/n.png" class="controlImage"> </td>
                    <td> <span class="categoryTitle"> Pasabuy </span> </td>
                </tr>
            </table>
        </li>


        <li class="serviceNavItem" onclick="setCategory('Computer related work')">
            <table>
                <tr>
                    <td> <image src="img/23_n.png" class="controlImage"> </td>
                    <td> <span class="categoryTitle"> Computer Related </span>  </td>
                </tr>
            </table>
        </li>

        <!--<li class="serviceNavItem" onclick="setCategory('Other')"> 
            <table>
                <tr>
                    <td> <image src="img/work-icon.png" class="controlImage"> </td>
                    <td> <span class="categoryTitle"> Other </span> </td>
                </tr>
            </table>
        </li>-->
        <li class="serviceNavItem" onclick="getServices()" id="otherServiceNavItem"> 
            <table>
                <tr>
                    <td> <image src="img/work-icon.png" class="controlImage"> </td>
                    <td> <span class="categoryTitle"> Other </span> </td>
                </tr>
            </table>
        </li>
     
     </ul>

    </div>
</div>

    
<!--<button onclick="getServices()" value="Click me" id="otherButton">Other Services</button>--> 
    <div id="OtherServicesContainer">
        
    </div>

 </div>
</div>
    

<script> getServices() </script>

<?php
	require_once("imports/footer.php"); 
?>
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">




</body>
</html>