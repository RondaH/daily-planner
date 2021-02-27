/* added current day to jumbotron, set vars and function to save in local storage*/

var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").append(currentDay);
$(".saveBtn").on("click", function(){
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time, text);
})
/* loop for rowTime*/
var currentTime = moment().hour();
$(".time-block").each(function() {
    var rowTime = parseInt($(this).attr("id").split("hour")[1]);

    if(rowTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if(rowTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
$("#hour9 .description") .val(localStorage.getItem("hour9"));
$("#hour10 .description") .val(localStorage.getItem("hour10"));
$("#hour11 .description") .val(localStorage.getItem("hour11"));
$("#hour12 .description") .val(localStorage.getItem("hour12"));
$("#hour13 .description") .val(localStorage.getItem("hour13"));
$("#hour14 .description") .val(localStorage.getItem("hour14"));
$("#hour15 .description") .val(localStorage.getItem("hour15"));
$("#hour16 .description") .val(localStorage.getItem("hour16"));
$("#hour17 .description") .val(localStorage.getItem("hour17"));
})
