$(document).ready(function() {
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work_responses").show()
    $("input:checkbox[name=work_transportation]:checked").each(function() {
      var workTransportationMode = $(this).val ();
      $('#work_responses').append(workTransportationMode + "<br>");
    });
    $('transportation_survey').hide();
  });
});
