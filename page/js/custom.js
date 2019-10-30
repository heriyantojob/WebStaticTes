// Accordions
function elementAdd(x,className){
  x.className += " "+className;
}
function elementRemove(x){
  x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" "+className, "");
}
function globalPageHeaderMenu(){
 
  var elemetGlobalPageHeaderMenu = document.getElementById("globalPageHeaderMenu");
  var elemetGlobalPageHeader = document.getElementById("globalPageHeader");
  if (elemetGlobalPageHeaderMenu.className.indexOf("w3-hide-small") == -1) {
    elemetGlobalPageHeaderMenu.classList.add('w3-hide-small');
   elementAdd(elemetGlobalPageHeader,"w3-card a");
  
    // x.previousElementSibling.className += " w3-theme";
  } else { 
    elemetGlobalPageHeaderMenu.classList.remove('w3-hide-small');
    elementRemove(elemetGlobalPageHeader,"w3-card a" );
    
  
  }
}

  function smallShow(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-hide-small") == -1) {
      x.classList.add('w3-hide-small');
    } else { 
      x.classList.remove('w3-hide-small');

    }
  }
  