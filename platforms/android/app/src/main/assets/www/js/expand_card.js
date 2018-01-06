
document.addEventListener("DOMContentLoaded",  function(){

  /*var card = document.getElementById("card");
  var more = document.getElementById("more");*/
  var more0 = document.getElementById('more');
  clicked(more0);




  $(document).ready(function(){

    exp();
    function exp(){
    $(".text6").hide();
    $("#more").click(function(){
      $(".text6").toggle(200);



    });



  };});

  });

  /*document.addEventListener("DOMContentLoaded", function(){
    var more1=document.getElementById('cmore1');
    clicked(more1);
  });*/

  /*document.addEventListener("DOMContentLoaded", function(){
    var more2=document.getElementById('cmore2');
    clicked(more2);
  });

  document.addEventListener("DOMContentLoaded", function(){
    var more3=document.getElementById('cmore3');
    clicked(more3);
  });

  document.addEventListener("DOMContentLoaded", function(){
    var more4=document.getElementById('cmore4');
    clicked(more4);
  });

  document.addEventListener("DOMContentLoaded", function(){
    var more5=document.getElementById('cmore5');
    clicked(more5);
  });

  document.addEventListener("DOMContentLoaded", function(){
    var more6=document.getElementById('cmore6');
    clicked(more6);
  });*/


function clicked(more){

  if(more){
    more.addEventListener("click", function(event){more.innerHTML = "LESS";

    more.addEventListener("click", function(event){more.innerHTML = "MORE"; clicked(more);})
  


  });
  }
}



/*function expand_card()
{

    var card = document.getElementById("card");
    var more = document.getElementById("more");
    more.addEventListener("click", function(event){

      card.innerHTML="<ul><li>Technopedia is Live!!</li><li>Technothlon '17 Official Curtain Raiser is OUT!</li><li>Know your City Rep. for registration</li><li>The Solutions and the Answer Key for Technothlon'16</li><li>Go to our OFFICIAL DISCUSSION FORUM for Technothlon'16 Question Paper</li></ul>";
      more.innerHTML="LESS";


      more.addEventListener("click", function(event){

        card.innerHTML="<ul><li>Technopedia is Live!!</li></ul>";
        more.innerHTML="MORE";
        setTimeout(expand_card(), 3000);



      });

});

} */



/* About Us */

/* What are we */


document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text").hide();
    $("#head").click(function(){


      $("#text").toggle(200);
      setTimeout(function(){$("#head").toggleClass("about1 about2")}, 200)




    });




  });
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text3").hide();
    $("#head3").click(function(){

      $("#text3").toggle(200);
      setTimeout(function(){$("#head3").toggleClass("about1 about2")}, 200)




    });




  });
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text4").hide();
    $("#head4").click(function(){
      $("#text4").toggle(200);
      setTimeout(function(){$("#head4").toggleClass("about1 about2")}, 200)




    });




  });
});


document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text2").hide();
    $("#head2").click(function(){
      $("#text2").toggle(200);
      setTimeout(function(){$("#head2").toggleClass("about1 about2")}, 200)




    });




  });
});


/*function expand()
{

    var head = document.getElementById("head");
    var text = document.getElementById("text");
    head.addEventListener("click", function(event){

      text.innerHTML="<p>Technothlon is an international school championship organized by the student fraternity of IIT Guwahati. Technothlon began in 2004 in a small room with an aim to Inspire Young Minds. Starting on our journey with a participation of 200 students confined to the city of Guwahati, over the past 12 years we have expanded our reach to over 300 cities all over India and various centers abroad. The championship is organized over 2 rounds:</p><ol><li><b>Prelims:</b> a written preliminary examination which takes place in numerous schools all over India in the month of July.</li><li><b>Mains:</b> an event based competition which is conducted at IIT Guwahati, among the top 100 students from each squad.</li></ol>";
      head.style.paddingLeft="0px";
      head.style.paddingRight="16px";
      head.style.marginRight="60%";
      head.style.borderLeft ="0px solid #212121";
      head.style.borderRight = "4px solid #f57c00";



      head.addEventListener("click", function(event){

        text.innerHTML="<p></p>";
        head.style.paddingLeft= "16px";
        head.style.paddingRight= "inherit";
        head.style.marginRight= "inherit";
        head.style.borderLeft = "4px solid #f57c00";
        head.style.borderRight = "inherit";

        /*head.addEventListener("click", expand());*/


/* Structure */

document.addEventListener("DOMContentLoaded",  function(){

  /*var head = document.getElementById("head1");
  var text = document.getElementById("text1");*/
  $(document).ready(function(){
    $("#text1").hide();
      $("#head1").click(function(){
          $("#text1").toggle(200);
        setTimeout(function(){$("#head1").toggleClass("about1 about2");}, 200);





      });
  });

  });

  document.addEventListener("DOMContentLoaded",  function(){

    /*var head = document.getElementById("head1");
    var text = document.getElementById("text1");*/
    $(document).ready(function(){
      $("#text5").hide();
        $("#head5").click(function(){
            $("#text5").toggle(200);
          setTimeout(function(){$("#head5").toggleClass("about1 about2");}, 200);





        });
    });

    });



  /*expand1();
});


function expand1()
{

    var head = document.getElementById("head1");
    var text = document.getElementById("text1");
    head.addEventListener("click", function(event){

      text.innerHTML="Students participate in teams of 2.<p> There are two squads:<ol><li><b>Junior Squad</b> - Students of classes 9th and 10th</li><li><b>Hauts Squad</b> - Students of classes 11th and 12th</li></ol></p><p>The members can belong to the same class or as well as different class. For example: a team consisting of one member from class IX and one of class X is perfectly acceptable for Junior squad. The basic requirements for team formation are they should consist exactly two members from the same squad and the same institution.</p>";
      head.style.paddingLeft="0px";
      head.style.paddingRight="16px";
      head.style.marginRight="65%";
      head.style.borderLeft ="0px solid #212121";
      head.style.borderRight = "4px solid #f57c00";



      head.addEventListener("click", function(event){

        text.innerHTML="<p></p>";
        head.style.paddingLeft= "16px";
        head.style.paddingRight= "inherit";
        head.style.marginRight= "inherit";
        head.style.borderLeft = "4px solid #f57c00";
        head.style.borderRight = "inherit";

        /*head.addEventListener("click", expand());*/
      /*  expand1();



      });

});}


/* Levels */

/*Contact*/

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text7").hide();
    $(".heads:eq(0)").click(function(){
      $("#text9").hide();
      $("#text8").hide();

      $("#text7").toggle(200);





    });




  });
});

document.addEventListener("DOMContentLoaded",  function(){

  var count = 0;

  $(document).ready(function(){
    $("#text8").hide();
    $(".heads:eq(1)").click(function(){

      if($("#text8").is(":visible"))
      {
      $("img:eq(0)").removeClass("mascot2");
      $("img:eq(0)").addClass("mascot1");
      $('body').removeClass("bg-color2");
      $('body').addClass("bg-color1");
      }
      if($("#text8").is(":hidden"))
      {
      $("img:eq(0)").removeClass("mascot1");
      $("img:eq(0)").addClass("mascot2");
      $('body').removeClass("bg-color1");
      $('body').addClass("bg-color2");
      }

      $("#text9").hide();
      $("#text7").hide();


      $("#text8").toggle(200);





    });




  });
});


/* contact */

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika").hide();
    $("#contact_info").hide();
    $(".ex:eq(0)").click(function(){
      $("#jitika").toggle(200);
      $("#northzone").toggle(200);
      $("#contact_info").toggle(200);
      $("#name").toggleClass("name2 name1");






    });




  });
});


document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika1").hide();
    $("#contact_info1").hide();
    $(".ex:eq(1)").click(function(){
      $("#jitika1").toggle(200);
      $("#northzone1").toggle(200);
      $("#contact_info1").toggle(200);
      $("#name1").toggleClass("name2 name1");

});
});
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika2").hide();
    $("#contact_info2").hide();
    $(".ex:eq(2)").click(function(){
      $("#jitika2").toggle(200);
      $("#northzone2").toggle(200);
      $("#contact_info2").toggle(200);
      $("#name2").toggleClass("name2 name1");

});
});
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika3").hide();
    $("#contact_info3").hide();
    $(".ex:eq(3)").click(function(){
      $("#jitika3").toggle(200);
      $("#northzone3").toggle(200);
      $("#contact_info3").toggle(200);
      $("#name3").toggleClass("name2 name1");

});
});
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika4").hide();
    $("#contact_info4").hide();
    $(".ex:eq(4)").click(function(){
      $("#jitika4").toggle(200);
      $("#northzone4").toggle(200);
      $("#contact_info4").toggle(200);
      $("#name4").toggleClass("name2 name1");

});
});
});

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){

    $("#jitika5").hide();
    $("#contact_info5").hide();
    $(".ex:eq(5)").click(function(){
      $("#jitika5").toggle(200);
      $("#northzone5").toggle(200);
      $("#contact_info5").toggle(200);
      $("#name5").toggleClass("name2 name1");

});
});
});

/* social media */

document.addEventListener("DOMContentLoaded",  function(){

  $(document).ready(function(){
    $("#text9").hide();
    $(".heads:eq(2)").click(function(){


      $("#text8").hide();
      $("#text7").hide();
      if($("#text9").is(":visible"))
      {
      $("img:eq(0)").removeClass("mascot2");
      $("img:eq(0)").addClass("mascot1");
      $('body').removeClass("bg-color2");
      $('body').addClass("bg-color1");
      }
      if($("#text9").is(":hidden"))
      {
      $("img:eq(0)").removeClass("mascot1");
      $("img:eq(0)").addClass("mascot2");
      $('body').removeClass("bg-color1");
      $('body').addClass("bg-color2");
      }
      $("#text9").toggle(200);





    });
}); });
