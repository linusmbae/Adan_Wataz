$(document).ready(function()
{
    $("#domestic").click(function()
    {
        $("#serviceSuppliers").append(
                                        "<br><br><div class='row' id='appendedDomestic'>"+
                                            "<div class='col-md-2'>"+
                                                "<h2>Drinking</h2>"+
                                                "<img src='images/water-glass.jpg'>"+
                                            "</div>"+
                                            "<div class='col-md-2'>"+
                                                "<h2>Laundry</h2>"+
                                                "<img src='images/laundry.jpg'>"+
                                            "</div>"+
                                        "</div>"
                                     );
    });
});