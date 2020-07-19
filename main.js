// THEN the current day is displayed at the top of the calendar
var currentDay = $("#currentDay");

currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// THEN I am presented with timeblocks for standard business hours
var workHours=["9am", "10am", "11am", "12pm", "1pm", "2pm,", "3pm","4pm", "5pm"]
var militaryHours=[9,10,11,12,13,14,15,16,17]
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future



for (let index = 0; index < 9; index++) {
  
  if(localStorage.getItem(militaryHours[index])){
    $("#" + militaryHours[index]).val(localStorage.getItem(militaryHours[index]))
    }

  if(militaryHours[index]===moment().hour())
  {
    $("#"+ militaryHours[index]).addClass("present")
  }
  else  if(militaryHours[index]>moment().hour()){
    $("#" + militaryHours[index]).addClass("future")
  }
  else if(militaryHours[index]<moment().hour()){
    $("#" + militaryHours[index]).addClass("past")
  }
}
$(".saveBtn").on("click",function(){
     var time=$(this).attr("data-id")
     var getCurrentText =$("#"+ time).val()
     localStorage.setItem(time,getCurrentText)
})


