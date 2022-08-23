var timeBlock = document.querySelector(".container");
var date = document.querySelector("#currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentHour = moment().format("HH");

date.innerText = ("Today is " + currentDate)


var hours = [ "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM",]

var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17 ]


// var taskText = [ ]

$(".container").on("click","button", function(event) {
            
    var buttonID = event.currentTarget.id 

    var taskText = $(this).siblings(".text-area").val();
    
    localStorage.setItem(buttonID, taskText)


})



var createHTML = function() {
    for (var i=0; i < hours.length; i++ ){
        // using create element as $("<div>") returns an object not HTML element...
        var timeSlot = document.createElement("div")
        timeSlot.classList = ("row time-block")

        var slotTime = document.createElement("div")
        slotTime.classList = ("hour col-1 center")
        slotTime.innerText = (hours[i])

        var editTask = document.createElement("textarea")
        editTask.classList = ("text-area col-10");
        var taskText = localStorage.getItem(i)
        console.log(taskText)
        editTask.innerText = (taskText)

        var saveTask = document.createElement("button")
        saveTask.classList = ("saveBtn col-1 ")
        saveTask.innerText = ("save")
        saveTask.setAttribute("id", i)

        timeSlot.append(slotTime, editTask, saveTask)
        timeBlock.append(timeSlot)

        // var timeSlot = $("<div>").addClass("row time-block ")
        // var slotTime = $("<div>").addClass("hour col-1 center").text(hours[i])
        // var editTask = $("<textarea>").addClass("text-area col-10");
        // var saveTask = $("<button>").addClass("saveBtn col-1 ")

        var currentTime = moment().format("HH")
        
        console.log(currentTime)

        if (currentTime > militaryHours[i]) {
            editTask.classList.add("past")
        } else if (currentTime < militaryHours[i]) {
            editTask.classList.add("future")
        } else {
            editTask.classList.add("present")
        } 
      
        
               

    }
}


createHTML();