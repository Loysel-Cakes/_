
var isOpen = false;
var isClicked = false;
    var MenuBtn = document.getElementById("Menu");  
    var Snav = document.getElementById("SideNav");
    var contactSection= document.getElementById("ContactSection");
    var cakeSection = document.getElementById("CakeSection");
    var cupcakeSection = document.getElementById("CupCakeSection");
    var macaronSection = document.getElementById("MacaronSection");
    var donutSection = document.getElementById("DonutSection");
    function MenuBtnPressed(){
      console.log("haspressed");
            isClicked = true;
      if(isClicked && !isOpen){ 
        OpenNav();
      }           
      if(isClicked && isOpen){
        CloseNav();
      }
    }
    function OpenNav(){
    cakeSection.style.visibility = "visible";
    donutSection.style.visibility = "visible";
    macaronSection.style.visibility = "visible";
    cupcakeSection.style.visibility = "visible";
    contactSection.style.visibility = "hidden";
    Snav.style.width = "250px";
    Snav.style.height = "100%";
    Snav.style.top = "70px";
    isOpen = true;
    }
   function CloseNav(){ 
    cakeSection.style.visibility = "hidden";
    donutSection.style.visibility = "hidden";
    macaronSection.style.visibility = "hidden";
    cupcakeSection.style.visibility = "hidden"; 
    contactSection.style.visibility = "visible";
    
    Snav.style.width = "60px";
    Snav.style.top = "0px";
    Snav.style.height = "60px"; 
    isOpen = false; 
    }
