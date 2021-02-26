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

var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").append(currentDay);