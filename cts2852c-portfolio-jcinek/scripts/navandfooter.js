// generates footer
function genFooter() {
    // writes footer to html page, based on appropriate footer tag ID
    document.getElementById("jsfooter").innerHTML = 
    '<p>&copy; Copyright John Cinek 2023</p> <p><a href="wireframe.html">Wireframe</a> | <a href="comments.html">Comments</a> | <a href="contactme.html">Contact</a> | <a href="index.html">Return To Start</a></p>';
}

// generates navbar
function genNavbar() {
    // retrieves current page url and stores it in a variable
    let currentPage = location.href;

    // 2D array which holds each page's navbar links
    // one string per nested array has its <a> tags omitted, and the appropriate array will be populated on the navbar based on which page is active
    // 'wireframe.html' and 'comments.html' nav links were left out of the array, per assignment instructions
    navItems = [
        ["<li id='activepage'><a>Home</a></li>", "<li><a href ='aboutme.html'>About</a></li>", "<li><a href ='contactme.html'>Contact</a></li>", "<li><a href ='gallery.html'>Gallery</a></li>", "<li><a href ='mypage.html'>Chatroom</a></li>"].join(""),

        ["<li><a href ='home.html'>Home</a></li>", "<li id='activepage'><a>About</a></li>", "<li><a href ='contactme.html'>Contact</a></li>", "<li><a href ='gallery.html'>Gallery</a></li>", "<li><a href ='mypage.html'>Chatroom</a></li>"].join(""),

        ["<li><a href ='home.html'>Home</a></li>", "<li><a href ='aboutme.html'>About</a></li>", "<li id='activepage'><a>Contact</a></li>", "<li><a href ='gallery.html'>Gallery</a></li>", "<li><a href ='mypage.html'>Chatroom</a></li>"].join(""),

        ["<li><a href ='home.html'>Home</a></li>", "<li><a href ='aboutme.html'>About</a></li>", "<li><a href ='contactme.html'>Contact</a></li>", "<li id='activepage'><a>Gallery</a></li>", "<li><a href ='mypage.html'>Chatroom</a></li>"].join(""),

        ["<li><a href ='home.html'>Home</a></li>", "<li><a href ='aboutme.html'>About</a></li>", "<li><a href ='contactme.html'>Contact</a></li>", "<li><a href ='gallery.html'>Gallery</a></li>", "<li id='activepage'><a>Chatroom</a></li>"].join(""),

        ["<li><a href ='home.html'>Home</a></li>", "<li><a href ='aboutme.html'>About</a></li>", "<li><a href ='contactme.html'>Contact</a></li>", "<li><a href ='gallery.html'>Gallery</a></li>", "<li><a href ='mypage.html'>Chatroom</a></li>"].join(""),
    ]

    // each 'if' or 'else if' statement populates the appropriate nested array to the navbar of its corresponding html page 
    // each page gets a unique navbar when active
    if (currentPage.includes("home")) {
        document.getElementById("jsnav").innerHTML = navItems[0];
    }
    else if (currentPage.includes("aboutme")) {
        document.getElementById("jsnav").innerHTML = navItems[1];
    }
    else if (currentPage.includes("contactme")) {
        document.getElementById("jsnav").innerHTML = navItems[2];
    }
    else if (currentPage.includes("gallery")) {
        document.getElementById("jsnav").innerHTML = navItems[3];
    }
    else if (currentPage.includes("mypage")) {
        document.getElementById("jsnav").innerHTML = navItems[4];
    }

    // closing else statement - populates nav bar to 'comments.html' and 'wireframe.html' pages with all nav hyperlinks enabled
    else {
        document.getElementById("jsnav").innerHTML = navItems[5];
    }
}

// calls functions on page load
window.onload = function(){
    genFooter();
    genNavbar();
}