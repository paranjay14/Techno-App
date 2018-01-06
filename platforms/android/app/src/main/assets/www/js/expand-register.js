document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text11").hide();
    $("#head11").click(function(){
      $("#text11").toggle(200);
      setTimeout(function(){$("#head11").toggleClass("about1 about2")}, 200)
});
});
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text22").hide();
    $("#head22").click(function(){
      $("#text22").toggle(200);
      setTimeout(function(){$("#head22").toggleClass("about1 about2")}, 200)
});
});
});

/*document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#clickhere").click(function(){
      $(document).load("www.facebook.com")
    });

  });
})*/
