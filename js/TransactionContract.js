// get Finished Jobs

function getContract(transactionID){
    var transactionID = transactionID;
 
    var query = "transactionID=" + transactionID;
    var xmlhttp = new XMLHttpRequest();
    
    
  
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           
  
  
            var dataArray = this.response;
  
            if(dataArray === "failed to fetch"){
             
  
            } else {
                
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 

  
                //document.getElementById("contractView").src= URL.createObjectURL(new Blob([dataArray[0]['contractAgreement']] , {type:'application/pdf'}));
                //document.getElementById("contractView").src= URL.createObjectURL(new Blob([dataArray[0]['contractAgreement']] , {type:'application/pdf'}))

                //document.getElementById("contractView").src = URL.createObjectURL(new Blob( [dataArray[0]['contractAgreement']], {type:'image/png'}));

                //document.getElementById('contractLink').href= URL.createObjectURL(new Blob( [dataArray[0]['contractAgreement']], {type:'application/pdf'}));
 

                //document.getElementById("contractView").src=base64ToBlob(dataArray[0]['contractAgreement'])
                console.log(dataArray[0]['contractAgreement'].length)
                if(dataArray[0]['contractAgreement'].length > 1000){
                    pdfjsLib.getDocument(dataArray[0]['contractAgreement']).then((pdf) => {

                        myState.pdf = pdf;
                        render();
                    
                    });

                } else {
                    document.getElementById('my_pdf_viewer').innerHTML = " <h1> Pdf cannot read</h1>";
                }

            
            
            }
  
        }else{

           console.log("Loading...");
  
        }      
    };
    
    xmlhttp.open("POST", "Backend/Get_contract.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    
  }// end of function



var myState = {
    pdf: null,
    currentPage: 1,
    zoom: 2
}


function render() {
    myState.pdf.getPage(myState.currentPage).then((page) => {
  
        var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');

        var viewport = page.getViewport(myState.zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}
