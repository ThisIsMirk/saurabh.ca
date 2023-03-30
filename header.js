$(document).ready(function() {
    $("#heading").hide(); //hide your div initially
    var topOfOthDiv = $("#heading-invis").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#heading").show(200); //reached the desired point -- show div
        }
        if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $("#heading").hide(200); //reached the desired point -- show div
        }
    });
});