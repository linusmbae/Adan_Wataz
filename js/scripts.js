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
    $("#domestic").unbind("click").click(function()
    {
        $("#serviceSuppliers").empty();
        $("#serviceSuppliers").append(
                                        "<br><br><div class='row' id='appendedDomestic'>"+
                                            "<div class='col-md-2'>"+
                                                "<h2>Drinking</h2>"+
                                                "<img src='images/water-glass.jpg' id='drink'>"+
                                            "</div>"+
                                            "<div class='col-md-2'>"+
                                                "<h2>Laundry</h2>"+
                                                "<img src='images/laundry.jpg'id='makeLaundry'>"+
                                            "</div>"+
                                            "<input class='form-control-sm' type='number' id='totalLiters' value='1'>"+
                                        "</div>"+
                                        "<button class='btn-primary' id='myButton'>Submit</button>"
                                     );
    $("#drink").unbind("click").click(function()
    {
        $("#show").empty();
        $("#show").append(
                                        "<div>"+
                                        "<p id='displayLitterm'>1 Litre @ Ksh.</p>"+
                                        "<p id='displayLitter'>50</p>"+
                                        "</div>"
                                    );
    });
    $("#makeLaundry").unbind("click").click(function()
    {
        $("#show").empty();
        $("#show").append(
                                        "<div>"+
                                        "<p id='displayLitterm'>Cylinder @ Ksh.</p>"+
                                        "<p id='displayLitter'>20</p>"+
                                        "</div>"
                                    );
    });
    $("#myButton").unbind("click").click(function()
    {
        var cash=$("#displayLitter").html();
        var tot=$("#totalLiters").val();
        var res=(cash+tot);
        $("#show").append(
                                        "<div>"+
                                        "<p>"+res+"</p>"+
                                        "</div>"
                                    );
    });
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
