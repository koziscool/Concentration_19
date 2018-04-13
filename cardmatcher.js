
matcherController = {

  init: function( size ) {
    console.log("koz");
  },
    

};


$(document).ready( function() {
  $("#grid-size").focus();
  $("#grid-size-button").click( function(e){
    e.preventDefault();
    var size = $("#grid-size").val();
    matcherController.init(size);
    $("#grid-size-form").hide();
  })
});
  
