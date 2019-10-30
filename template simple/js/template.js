function menuClick(){
    $("#nav-menu").toggle();
    // alert("terklcik");
}

$( document ).ready(function() {

    //check nav menu
    var down = `<div class="nav-menu-down">
                    <i class="fas fa-arrow-down nav-menu-arrow" ></i>
                </div> `;
    $( "#nav-menu ul li:has(ul)" ).append( 
        down
    ); 
    $( "#nav-menu ul li .nav-menu-down" ).click(function() { 
     
    });

    // Handler for .ready() called.
    $( "#nav-menu ul li" ).click(function() {
        // $( "#target" ).click();
        //alert(mqMatcher.getMatches() );
        //$(window).width()
        if(  mqMatcher.getMatches()!="d"){
            
            //var btnLink = $(getObj).find( "a" ).css( "color", "red" );
            var isHidden = $(this).find("ul").is(':hidden');
            if(isHidden){
                $( "#nav-menu ul li ul" ).hide();     
            }
            $(this).find("ul").toggle();
           
           
        }
    });
   
});
