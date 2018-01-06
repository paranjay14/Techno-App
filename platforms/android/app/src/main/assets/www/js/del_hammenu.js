document.addEventListener("DOMContentLoaded", function(){

$(document).ready(function(){

  $(".mdl-layout__drawer-button").click(function(){drawer();});


  });

});

function drawer(){
  $(".mdl-layout__drawer").css({"width" : "86%"});

  $(".mdl-layout__obfuscator").click(function(){
    setTimeout(function(){$(".mdl-layout__drawer").css({"width" : "0px"})}, 200);
  


});




};
