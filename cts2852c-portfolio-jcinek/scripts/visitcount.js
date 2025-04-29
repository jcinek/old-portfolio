// declares variable for visit count, creates localStorage data
let visitCount = localStorage.getItem("visitCount");


// increases visit count by one, converts localStorage value to a number
// ensures when 1 is added to the value, it is not concatenated to the end of a string
visitCount = +visitCount + 1;


// adds incremented visit count to localStorage, and displays it on the screen
localStorage.setItem("visitCount", visitCount);
document.getElementById("showCount").innerHTML = "Thank you for visiting my homepage " + visitCount + " times!";

// displays custom message for first time site visitors
if (visitCount < 2) {
    document.getElementById("showCount").innerHTML = "Thank you for visiting my homepage for the first time!";
}