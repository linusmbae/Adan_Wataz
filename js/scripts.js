function AddMySupplier()
{
  this.name=[];
  this.email=[];
  this.phone=[];
  this.location=[];
}
var addMySupplier=new AddMySupplier("","","","");


$(document).ready(function()
{
  function formClear()
  {
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#location").val("");
  }



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
                                      "<input id='email' class='form-control-sm' type='email' placeholder='Supplier Email' required><br><br>"+
                                      "<input id='phone' class='form-control-sm' type='number' placeholder='Phone Number' required>"+
                                      "<input id='location' class='form-control-sm' type='text' placeholder='SupplierLocation' required><br><br>"+
                                  "</form>"+
                                  "<button class='btn-primary' id='addSupplier'>Submit</button>"+
                              "</div>"
                              );
    $("#addSupplier").click(function()
    {
      var sName=$("#name").val();
      var sMail=$("#email").val();
      var sPhone=$("#phone").val();
      var sLocation=$("#location").val();
      addMySupplier.name.push(sName);
      addMySupplier.email.push(sMail);
      addMySupplier.phone.push(sPhone);
      addMySupplier.location.push(sLocation);
      alert("Supplier "+sName+" added succesfully");
      formClear();
    });
});

  /*Admin Supplier Ends*/
  /*Admin manage customer Starts*/
$("#divManageCustomer").click(function()
{
  $("#displaySideBar").empty();
    $("#displaySideBar").append(
                                "<br><div class='jumbotron'>"+
                                    "<h3>Customers</h3>"+
                                    "<table cellpadding='15' class='table table-bordered' id='tableManage'>"+
                                        "<tr>"+
                                            "<th>Name</th>"+
                                            "<th>Email</th>"+
                                            "<th>Phone</th>"+
                                            "<th>Location</th>"+
                                        "</tr>"+
                                            "<td contenteditable='true'>"+addMySupplier.name+"<br>"+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.email+"<br>"+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.phone+"<br>"+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.location+"<br>"+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                                "<div class='row' id='border'>"+
                                    "<h4>Actions</h4>"+
                                    "<div class='col-sm-2'>"+
                                        "<br><br><button class='btn-primary'>Update</button>"+
                                    "</div>"+
                                    "<div class='col-sm-2'>"+
                                        "<br><br><button class='btn-danger' id='remove'>Remove</button>"+
                                    "</div>"+
                                "</div>"
                                );

  });
  /*Admin manage customer Ends*/
  /*Admin manage supplier Starts*/
$("#divManage").click(function()
{
  $("#displaySideBar").empty();
    $("#displaySideBar").append(
                                "<br><div class='jumbotron'>"+
                                    "<h3>Registered Suppliers</h3>"+
                                    "<table cellpadding='15' class='table table-bordered' id='tableManage'>"+
                                        "<tr>"+
                                            "<th>Name</th>"+
                                            "<th>Email</th>"+
                                            "<th>Phone</th>"+
                                            "<th>Location</th>"+
                                        "</tr>"+
                                            "<td contenteditable='true'>"+addMySupplier.name+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.email+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.phone+"</td>"+
                                            "<td contenteditable='true'>"+addMySupplier.location+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                                "<div class='row' id='border'>"+
                                    "<h4>Actions</h4>"+
                                    "<div class='col-sm-2'>"+
                                        "<br><br><button class='btn-primary'>Update</button>"+
                                    "</div>"+
                                    "<div class='col-sm-2'>"+
                                        "<br><br><button class='btn-danger' id='remove'>Remove</button>"+
                                    "</div>"+
                                "</div>"
                                );

  });
  /*Admin manage supplier Ends*/
  /*Admin Home Starts*/
  $("#divHome").click(function()
{
  $("#displaySideBar").empty();
  $("#displaySideBar").append(
                        "<div class='row' id='myWater'>"+
                            "<div class='col-sm-6'>"+
                                "<h3>Registered Suppliers</h3>"+
                                "<table cellpadding='15' class='table table-striped' id='tableHome'>"+
                                    "<tr>"+
                                        "<th>Name</th>"+
                                        "<th>Email</th>"+
                                        "<th>Phone</th>"+
                                        "<th>Location</th>"+
                                    "</tr>"+
                                        "<td>"+addMySupplier.name+"</td>"+
                                        "<td>"+addMySupplier.email+"</td>"+
                                        "<td>"+addMySupplier.phone+"</td>"+
                                        "<td>"+addMySupplier.location+"</td>"+
                                    "</tr>"+
                                "</table>"+
                            "</div><br><br>"+
                        "</div><br>"+
                        "<div class='row' id='myWater'>"+
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
});
