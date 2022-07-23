function OpenNav(){
    var closeBtn = document.getElementById("closeBtn");       
     var Snav = document.getElementById("SideNav");  
     var OpenBtn = document.getElementById("Menu");
     var contactSection = document.getElementById("ContactSection");
     var cakeSection = document.getElementById("CakeSection");
     var cupcakeSection = document.getElementById("CupCakeSection");
     var macaronSection = document.getElementById("MacaronSection");
     var donutSection = document.getElementById("DonutSection");
      cakeSection.style.visibility = "visible";
     donutSection.style.visibility = "visible";
     macaronSection.style.visibility = "visible";
     cupcakeSection.style.visibility = "visible";
    OpenBtn.hidden = true;    
    contactSection.style.visibility = "hidden";
    closeBtn.style.visibility = "visible";                  
    closeBtn.style.top = "0px";
    closeBtn.style.left = "0px";
    closeBtn.style.fontSize ="20px";
    Snav.style.width = "250px";
    Snav.style.height = "100%";
    Snav.style.top = "70px";
 
   }
   function CloseNav(){
    var closeBtn = document.getElementById("Menu");  
    var Snav = document.getElementById("SideNav");
    var OpenBtn = document.getElementById("closeBtn"); 
    var contactSection= document.getElementById("ContactSection");
    var cakeSection = document.getElementById("CakeSection");
    var cupcakeSection = document.getElementById("CupCakeSection");
    var macaronSection = document.getElementById("MacaronSection");
    var donutSection = document.getElementById("DonutSection");
     cakeSection.style.visibility = "hidden";
    donutSection.style.visibility = "hidden";
    macaronSection.style.visibility = "hidden";
    cupcakeSection.style.visibility = "hidden"; 
    OpenBtn.style.visibility = "hidden";
    contactSection.style.visibility = "visible";      
    closeBtn.hidden = false;
     Snav.style.width = "60px";
     Snav.style.top = "0px";
    Snav.style.height = "60px";
    
  }