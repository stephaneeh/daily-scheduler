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

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    

    //Display the current hour in 24-hour time
    var hour = dayjs().hour();
    console.log("current hour = ", hour);
 
    //split the ID attribute into an integer only
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(blockHour);
        
        //if else blockHour < hour, attrubte equals past
        
        if (blockHour < hour) {
            $(this).addClass("past"); 
        } //if blockHour === hour, attrubte equals present,
        else if (blockHour === hour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } //else blockHour > hour, attrubte equals future
        else {
            $(this).removeClass("present");
            $(this).addClass("future");
        }



        
        


    }
    );

    




    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //








    //COMPLETE
    //TODO: Add code to display the current date in the header of the page.
    //FIXME: ordinal value of date is not working properly (1st, 5th, etc)
    var rightNow = dayjs().format('dddd D MMM, YYYY');
    $("#currentDay").text(rightNow);

    
  });

