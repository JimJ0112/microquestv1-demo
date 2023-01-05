function getLeaderBoard(category){
  

    var xmlhttp = new XMLHttpRequest();
    
    
    var category = category;
    var query = "Category=" + category;
    
 

    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
            var dataArray = this.response;
            //console.log(dataArray);

            if(dataArray != ""){
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                createElements(number);
                setData(dataArray);

            } else{
                console.log("no result");
                
                document.getElementById('LeaderBoardContent').innerHTML = "";
                document.getElementById('LeaderBoardContent').innerHTML = " No Leaderboard Result yet";


            }


     
        }else{
           
           console.log("error");
        }      
    };

    xmlhttp.onreadystatechange = function() {
        document.getElementById('LeaderBoardContent').innerHTML = "Loading...";

    
    };

    xmlhttp.open("POST", "Backend/LeaderBoardBackend.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);

    
}// end of function

function getSelectValue(){
    var category = document.getElementById('LeaderBoardCategories').value;
    console.log(category);
    getLeaderBoard(category);
}



// set options to dropdown  
function setOptions(array){

    var dataArray = array;
    var number = dataArray.length;

    var serviceDropDown = document.getElementById("LeaderBoardCategories");
    


    for(var i = 0; i<number;i++){
        
        if(dataArray[i]["serviceCategory"] === "Pasabuy"){

        } else{
            var option = new Option;
            option.innerText = dataArray[i]["serviceCategory"];
            option.value = dataArray[i]["serviceCategory"];
            serviceDropDown.add(option);
        }


    }



    
}


// gets all services 
function getServices(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "Backend/Get_allServices.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
           

            var dataArray = this.response;

            if(dataArray === "failed to fetch"){


            } else{

            dataArray = JSON.parse(dataArray);
            console.log(dataArray);


            var number = dataArray.length;
          
            //document.getElementById("LeaderBoardCategories").innerHTML = "";
            //setOptions(dataArray);
            //getSelectValue(); 
            createCategoryElements(number);
            setCategoryDatas(dataArray);

     
            }
        }else{
            console.log(err);
        }      
    };
    
    xmlhttp.send();
    
}// end of function


function createElements(number){

    document.getElementById('LeaderBoardContent').innerHTML = "";
    var table = document.getElementById('LeaderBoardContent');
    var number = number;

    for(var i = 0; i<number;i++){

        var tr = document.createElement('tr');
        var rank = document.createElement('td');
        var responderInfo = document.createElement('td');
        var rating = document.createElement('td');

        tr.setAttribute('class','leaderboardTR');
        rank.setAttribute('class','rankTR');
        responderInfo.setAttribute('class','responderInfo');
        rating.setAttribute('class','rating');

        tr.appendChild(rank);
        tr.appendChild(responderInfo);
        tr.appendChild(rating);

        table.appendChild(tr);


    }



    

}


function setData(dataArray){
    var dataArray = dataArray;
    var number = dataArray.length;

    tr =document.getElementsByClassName('leaderboardTR');
    rank=document.getElementsByClassName('rankTR');
    responderInfo=document.getElementsByClassName('responderInfo');
    rating=document.getElementsByClassName('rating');


    for(var i = 0; i<number;i++){

        var image = new Image();
        image.src = dataArray[i]['userPhoto'];
        image.setAttribute('class','leaderBoardUserPhoto');
        responderInfo[i].appendChild(image);



        rank[i].innerText = i+1;
        responderInfo[i].innerHTML = "<a href='ViewUserProfile.php?userID=" + dataArray[i]['userID'] +"&userType=Responder'>"+ responderInfo[i].innerHTML + dataArray[i]['userName'] +  dataArray[i]['userEmail'] + "</a>";
        rating[i].innerHTML = "⭐ "+dataArray[i]['totalRatings'].toFixed(2);
    }
}


function createCategoryElements(number){
    var number = number;
    var cetegoriesContainer = document.getElementById('cetegoriesContainer');

    for(var i=0; i<number; i++){

        var div = document.createElement('div');
        div.setAttribute('class','grid-item');

        cetegoriesContainer.appendChild(div);

    }

}


// set options to dropdown  
function setCategoryDatas(array){

    var dataArray = array;
    var number = dataArray.length;

    //var serviceDropDown = document.getElementById("LeaderBoardCategories");
    var grid_item = document.getElementsByClassName('grid-item');


    for(var i = 0; i<number;i++){
        
        if(dataArray[i]["serviceCategory"] === "Pasabuy"){

            grid_item[i].style.display = "none";

        } else{

            /*
            var option = new Option;
            option.innerText = dataArray[i]["serviceCategory"];
            option.value = dataArray[i]["serviceCategory"];
            serviceDropDown.add(option);
            */
            grid_item[i].innerText = dataArray[i]["serviceCategory"];
           // grid_item[i].setAttribute("onclick","getLeaderBoard('" + dataArray[i]['serviceCategory'] + "')");

            grid_item[i].setAttribute("onclick","chooseNav('" + dataArray[i]['serviceCategory'] + "'," + i +")" );
        }


    }
    chooseNav(dataArray[0]["serviceCategory"],0)



    
}



function chooseNav(category,number){
    var category = category;
    var number = number;
    var grid_item = document.getElementsByClassName('grid-item');
    var length = grid_item.length;

    for(var i=0;i<length;i++){

        grid_item[i].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        grid_item[i].style.color = "black";

    }

    grid_item[number].style.backgroundColor = "orangered";
    grid_item[number].style.color = "white";
    

    getLeaderBoard(category);



}