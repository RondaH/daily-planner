/*var currentDayEl = $("#currentDay");

function displayDate() {
    var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.text(rightNow);
}
console.log (currentDay)
taken from momentsjs.com

$(document).ready(function () {

$(".saveBtn").on("click", function (){

})

$("currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

})*/
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
})