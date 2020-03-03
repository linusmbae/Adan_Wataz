$(document).ready(function()
{
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
                                "<th>Location</th>"+
                                "</tr>"+
                                "</table>"+
                            "</div>"+
                        "</div>"
                      );
});
});
