$(document).ready(function()
{
    $("#check").click(function()
    {
        $("h2").hide();
    });
});

$(document).ready(function()
{
    $("#p2").mousedown(function()
    {
        alert("20000");
    });
});

$(document).ready(function()
{
    $("input").focus(function()
    {
        $(this).css("background-color", "yellow");
    });
});

$.get("addServlet", function(responseJson) {
   var name
});

$(document).ready(function()
{
    $.get("addServlet", function(responseJson) {
        var name = responseJson;
        console.log(typeof(name));
     });
});

