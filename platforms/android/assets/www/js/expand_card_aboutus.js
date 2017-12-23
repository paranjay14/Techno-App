document.addEventListener("DOMContentLoaded",  function(){

  var cards = document.getElementById("more");
  var mores = document.getElementById("card");

  more.addEventListener("click", expand());
});


function expand()
{

    var card = document.getElementById("head");
    var more = document.getElementById("text");
    more.addEventListener("click", function(event){



      /*card[0].innerHTML="<p>Technothlon is an international school championship organized by the student fraternity of IIT Guwahati. Technothlon began in 2004 in a small room with an aim to Inspire Young Minds. Starting on our journey with a participation of 200 students confined to the city of Guwahati, over the past 12 years we have expanded our reach to over 300 cities all over India and various centers abroad. The championship is organized over 2 rounds:</p><ol><li>Prelims: a written preliminary examination which takes place in numerous schools all over India in the month of July</li><li>Mains: an event based competition which is conducted at IIT Guwahati, among the top 100 students from each squad.</li></ol>";*/
     card.innerHTML = "<p>black</p>";

      more.addEventListener("click", function(event){

        card.innerHTML = "<p></p>";

        more.addEventListener("click", expand());



      });

});







}
