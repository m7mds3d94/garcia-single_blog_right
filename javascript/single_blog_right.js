




// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page








// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 







// start event search input

$(".btnSearch").on("click",function() {
     $(this).siblings().focus()

})

// end event search input