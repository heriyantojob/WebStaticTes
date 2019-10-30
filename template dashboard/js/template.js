// function menuClick(){
//     if($(window).width() < 1080 ){
//         $("#nav-menu").toggle();
//     }

//     // alert("terklcik");
// }

$( document ).ready(function() {
    //click header nav
    $( ".nav-list-content" ).click(function()     {
   
        var thisParent = $(this).parent();
        var isHidden = thisParent.find(".nav-sub").is(':hidden');
        if(isHidden){
            $( ".nav-sub" ).hide();     
        }
        thisParent.find(".nav-sub").toggle();  
    });
    
    //scroll
    // if($(window).width()<1080 ){
    //     $(".nav-menu ul ul").overlayScrollbars({
    //         sizeAutoCapable : true 
    //     });
    // }
    
     //check nav menu
    var down = `<div class="nav-menu-down">
                    <i class="fas fa-arrow-down nav-menu-arrow" ></i>
                </div> `;
                
              
    $( "#nav-menu ul li:has(ul)  " ).children( ".nav-menu-content" ).append( down); 
    $( "#nav-menu ul li .nav-menu-down" ).click(function() { 

    });

    //clik menu list

    
     
        //menu drawer klick
        $( "#nav-menu ul li" ).click(function()     {
            //CHECK JIKA HIDE MAKA tutup menu lain
            var isHidden = $(this).find("ul").is(':hidden');
            if(isHidden){
                $( "#nav-menu ul li ul" ).hide();     
            }
            $(this).find("ul").toggle();       
        });


        // nav slide
        $(".nav-slide").slick({
            dots: true,
            infinite: false,
            speed: 300,
            // slidesToShow: 1,
            // rtl: false,
            variableWidth: true
        });

        $('.nav-slide').on('edge', function(event, slick, direction){
            console.log('edge was hit')
          });
          
          


});