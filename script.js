$(document).ready(function(){

$(".container").children().mouseover(function() {
    $(this).children(".description").show();
}).mouseout(function() {
    $(this).children(".description").hide();
});

});