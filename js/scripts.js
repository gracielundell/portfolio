$(document).ready(function() {
  $('a').each(function() {
    if($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    };
  });
  $("#angularVSember").click(function(){
    $("#blogPost2").slideDown("slow");
    $("#angularVSember").click(function() {
         $("#blogPost2").slideUp("slow");
    });
  });
  $("#htmlBasics").click(function(){
    $("#blogPost1").slideDown("slow");
    $("#htmlBasics").click(function() {
         $("#blogPost1").slideUp("slow");
    });
  });

});
