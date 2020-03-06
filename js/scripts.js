$(document).ready(function() {
  $("#clickable1").click(function(){
      $("#domesticHidden").toggle(800);
    });

    $("#clickable2").click(function(){
        $("#commercialHidden").toggle(800);
      });


    $('#view').click(function(){
        // alert('click ok to toggle!')
        $('#hideToggle').toggle();

    });

    $(".flip").click(function(){
      $("#panel").toggle(500);
    });

});

function myFunction()
{
  var name=document.getElementById("nameDetails").value;
  var email=document.getElementById("email").value;
  if (name=="")
  {
    alert("empty field");
  }else if(email=="")
  {
    alert("empty field");
  }else
  {
  alert(name+"we have received your message. Thank you for reaching out to us.");
  }
};

  /*Admin Supplier Ends*/
