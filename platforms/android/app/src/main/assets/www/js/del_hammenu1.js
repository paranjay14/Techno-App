$(document).ready(function(){


drawer();


});

function drawer(){
  $(document).ready(function(){

    $(".mdl-layout__drawer-button").click(function(){




  $(".mdl-layout__drawer").css({"width" : "86%"});

  $(".mdl-layout__obfuscator").click(function(){
    setTimeout(function(){$(".mdl-layout__drawer").css({"width" : "0px"})}, 200);
    drawer();



});

});
});


};
