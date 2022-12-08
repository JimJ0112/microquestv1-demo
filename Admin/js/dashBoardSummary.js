// gets Requestors
function getTotalNewUsers(){
    
    totalNewUsers = document.getElementById("totalNewUsers");
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload  = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("totalNewUsers").innerHTML = "";
         
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                document.getElementById("totalNewUsers").innerText = dataArray["COUNT('userID')"];

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
            document.getElementById("totalNewUsers").innerText="Loading..";
            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_AllNewUsers.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


function getTotalUsers(){
    
    totalNewUsers = document.getElementById("totalUsers");
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload  = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("totalUsers").innerHTML = "";
        
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                document.getElementById("totalUsers").innerText = dataArray["COUNT('userID')"];

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
          
            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_AllUsers.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


function getTotalBannedUsers(){
    
    totalNewUsers = document.getElementById("totalBannedUsers");
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload  = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("totalBannedUsers").innerHTML = "";
        
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                document.getElementById("totalBannedUsers").innerText = dataArray["COUNT('reportedAccountID')"];

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";
           
            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_AllBannedUsers.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


function getTotalRestrictedUsers(){
    
    totalNewUsers = document.getElementById("totalRestrictedUsers");
    var xmlhttp = new XMLHttpRequest();
    



    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 

            
            document.getElementById("totalRestrictedUsers").innerHTML = "";
        
           
            //hideNavMenu();
            

           
            var dataArray = this.response;
           

                dataArray = JSON.parse(dataArray);
                console.log(dataArray);

                var number = dataArray.length;
                document.getElementById("totalRestrictedUsers").innerText = dataArray["COUNT('reportedAccountID')"];

        

     
        }else{
            //document.getElementById("DashBoardContent_TableBody").innerHTML = "Loading...";

            
            //console.log(err);
        }      
    };
    
    xmlhttp.open("POST", "backend/Get_AllRestrictedUsers.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    
}// end of function


function init() { 
    getTotalUsers();
    getTotalNewUsers();
    getTotalRestrictedUsers();
    getTotalBannedUsers();

    var int = self.setInterval(function () {

        getTotalUsers();
        getTotalNewUsers();
        getTotalRestrictedUsers();
        getTotalBannedUsers();

    }, 2200); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
}
