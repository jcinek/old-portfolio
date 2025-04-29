// gets visit count and user's saved name from local storage
localStorage.getItem("visitCount");
localStorage.getItem("savedName")

// declares variable for "new game" button on index page
const clearButton = document.getElementById("clearBtn");

// adds event listener to "new game" button
// arrow function clears local storage cache and reloads the page on click
clearButton.addEventListener("click", () => {
    localStorage.removeItem("visitCount");
    localStorage.removeItem("savedName");
    location.reload();
});