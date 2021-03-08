$(document).ready(function() {

  $(".with-dropdown").mouseenter(function() {
   
   $(this).find(".dropdown-menu").slideDown(500);
   $(this).find(".dropdown-menu").addClass("active");
   

  });
 
  $(".with-dropdown").mouseleave(function() {

   $(this).find(".dropdown-menu").slideUp(500);
   $(this).find(".dropdown-menu").removeClass("active");
   

  });
   
});
