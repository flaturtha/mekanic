/*============================================
=          EMAIL OPTIN JAVASCRIPT            =
============================================*/


$(document).ready(function(){
  $("open").click(function(){
    $("#optin-bar").effect("bounce","slow");
    $("open").slideUp()
  });

  $("close").click(function(){
      $("#optin-bar").slideUp();$("open").slideDown();
     $("#optin-bar").effect("bounce","slow");
    });
});