// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".saveBtn").on("click", function (e) {
        e.preventDefault();
        
        var calendarArray = JSON.parse(localStorage.getItem("calendarArray")) || [];
        var time = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val();

        var calendar = {
            time: time,
            activity: activity,
        };
        
        calendarArray.push(calendar);
        localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
        
 
    
    });


    // localStorage.getItem




    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //






    // COMPLETE
    // TODO: SECTION 2 - PAST/PRESENT/FUTURE ATTRIBUTES
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
        }
    });

    //COMPLETE
    //TODO: SECTION 1 - SET CURRENT DATE
    //FIXME: ordinal value of date is not working properly (1st, 5th, etc)
    var rightNow = dayjs().format('dddd D MMM, YYYY');
    $("#currentDay").text(rightNow);
  });

