var player1 = "#player1_strip td.active"
var player2 = "#player2_strip td.active"

$(document).ready(function() {

  $("#start").on('click', function(game) {

    $(document).on('keyup', function(event) {
      if(event.keyCode == 65){
      $(player1).next("td").addClass("active");
        if($("#player1_strip td:last").hasClass("active")) {
            $("#playerOneWins").show();
        }
      $(player1).prev("td").removeClass("active");
      }
    });

    $(document).on('keyup', function(event) {
      if(event.keyCode == 80){
        $(player2).next("td").addClass("active");
          if($("#player2_strip td:last").hasClass("active")) {
            $("#playerTwoWins").show();
          }
        $(player2).prev("td").removeClass("active");
      };
    });

    $(document).on('keyup', function(event) {
      if(event.keyCode == 78){
        location.reload();
      };
    });
  });
});
