// gets visit count from local storage
localStorage.getItem("visitCount")

// declares variable for start button on index page
// variable is later used to add event listener to button
const startBtn = document.getElementById("startBtn");

// checks if the user is visiting the page for the first time, or has clicked the "new game" button
// if so, an input field will appear for user to enter their name
// if a user has been to the site more than once, this field will not appear
if (localStorage.getItem("visitCount") < 1) {
    document.getElementById("getNameContainer").style.display = "flex";
    document.getElementById("getNameContainer").style.flexDirection = "column";
    document.getElementById("getNameContainer").style.alignItems = "center";
}

// assigns an event listener to the start button if the user is visiting the site for the first time, or clicks the "new game" button (which refreshes their cache)
// arrow function takes user's input (their name) and saves it to local storage
startBtn.addEventListener("click", () => {
    if(localStorage.getItem("visitCount") < 1) {
        setName = document.getElementById("getName").value;
        localStorage.setItem("savedName", setName);
        alert("Welcome, " + setName + ".");
    }
    else {
        return;
    }
});

