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
 
    

  /*Admin Home Starts*/
  $("#divHome").click(function()
{
  $("#displaySideBar").empty();
  $("#displaySideBar").append(
                        "<div class='row' id='myWater'>"+
                            "<div class='col-sm-6'>"+
                                "<h3>Registered Suppliers</h3>"+
                                "<table table cellpadding='15'>"+
                                "<tr>"+
                                "<th>Name</th>"+
                                "<th>Email</th>"+
                                "<th>Phone</th>"+
                                "<th>Location</th>"+
                                "</tr>"+
                                "</table>"+
                            "</div><br><br>"+
                            "<div class='col-sm-6'>"+
                                "<h3>Customers</h3>"+
                                "<table cellpadding='15'>"+
                                "<tr>"+
                                "<th>Name</th>"+
                                "<th>Email</th>"+
                                "<th>Phone</th>"+
                                "<th>Location</th>"+
                                "</tr>"+
                                "</table>"+
                            "</div>"+
                        "</div>"
                      );
});
  /*Admin Home ends*/
  /*Admin add Supplier Starts*/
$("#divSupplier").click(function()
{
  $("#displaySideBar").empty();
  $("#displaySideBar").append("<div class=card-header>"+
                              "<h2>Suppliers Registration Form</h2>"+
                              "</div>"+
                              "<div class='jumbotron'>"+
                              "<form id='addForm'>"+
                              "<input id='name' class='form-control-sm' type='text' placeholder='Supplier Name' required>"+
                              "<input class='form-control-sm' type='text' placeholder='Supplier Email' required><br><br>"+
                              "<input class='form-control-sm' type='text' placeholder='Phone Number' required>"+
                              "<input class='form-control-sm' type='text' placeholder='SupplierLocation' required><br><br>"+
                              "</form>"+
                              "<button class='btn-primary' id='addSupplier'>Submit</button>"+
                              "</div>"
                              );
    $("#addSupplier").click(function()
    {
      var sName=$("#name").val();
      var sMail=$("#name").val();
      var sPhone=$("#name").val();
      var sLocation=$("#name").val();

      alert("Supplier "+sName+" added succesfully");
    });
});


  /*Admin Supplier Ends*/
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

