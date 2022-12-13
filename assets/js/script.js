// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    var calendarArray = JSON.parse(localStorage.getItem("calendarArray")) || [];
        
    // TODO: SECTON 1: SAVE BUTTON/STORE LOCAL - COMPLETE
    $(".saveBtn").on("click", function (e) {
        e.preventDefault();
        var time = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val(); 
        var calendar = {
            time: time,
            activity: activity,
        };
            
        calendarArray.push(calendar);
        localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
        
    });

    // TODO: SECTION 2 - PAST/PRESENT/FUTURE ATTRIBUTES - COMPLETE
    $(".time-block").each(function () {
        //set hour to the current time in 24 hour
        var hour = dayjs().hour(); 
        //split the ID attribute into an integer only
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
    
        // update attrubite loop
        //if else blockHour < hour, attrubte equals past
        if (blockHour < hour) {
            $(this).addClass("past"); 
        } //if blockHour === hour, attrubte equals present,
        else if (blockHour === hour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } //else blockHour > hour, attrubte equals future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });

    // For each timeblock
    $(".time-block").each(function () {
        var timeBlock = $(this).attr("id"); //parent
        var localTime = JSON.parse(localStorage.getItem("calendarArray"));

        for (let i=0; i<calendarArray.length; i++){
            if (timeBlock==(localTime[i].time)) {
              console.log(localTime[i].time);
              var message = localTime[i].activity;
            //   console.log($("#"+timeBlock).children(1));
              $("#"+timeBlock).children(".description").text(message);
            } else {
                console.log("is broken - fix me")
            }
        };
    });


    // window.localStorage.clear();

    //TODO: SECTION 4 - SET CURRENT DATE - COMPLETE
    //FIXME: ordinal value of date is not working properly (1st, 5th, etc)
    var rightNow = dayjs().format('dddd D MMM, YYYY');
    $("#currentDay").text(rightNow);
  });