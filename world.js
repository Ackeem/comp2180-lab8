

     function onload() {

        var button = document.getElementById("Lookup");

        if(button.addEventListener){
             button.addEventListener("click", function() { alert("alert");});
        } else {
             button.attachEvent("click", function() { alert("alert");});
        
            
        };
     };
          window.onload = onload;


    