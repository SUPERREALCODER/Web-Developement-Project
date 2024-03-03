$("button").click(function(){
    $("h1").css("color","red");
})
$(document).keydown(function(event){
$("h1").html(event.key);
});