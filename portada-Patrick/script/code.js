
$(function()
{
    $("#alerta").click(function()
    {
        alert("Te saluda Patrick");
    })

    $("#alerta_parrafo1").click(function()
    {
        alert($("#parrafo1").text());
    })

    $("#ocultar").click(function()
    {
        $("#parrafo1").hide();
    })

    $("#mostrar").click(function()
    {
        $("#parrafo1").show();
        $("h1").show();
    })

    $("#salida1").mouseenter(function()
    {
        $("#mapa").slideDown();
    })

    $("#salida1").mouseleave(function()
    {
        $("#mapa").slideUp();
    })

    $("#salida2").mouseenter(function()
    {
        $("#mapa").fadeOut();
    })

    $("#salida2").mouseleave(function()
    {
        $("#mapa").fadeIn();
    })

})
