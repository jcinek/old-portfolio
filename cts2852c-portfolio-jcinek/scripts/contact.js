function formValidate() {
    let firstName = document.forms["contactForm"]["firstName"].value;
    let lastName = document.forms["contactForm"]["lastName"].value;
    let email = document.forms["contactForm"]["email"].value;
    let date = document.forms["contactForm"]["date"].value;
    let password = document.forms["contactForm"]["password"].value;
    let message = document.forms["contactForm"]["textBox"].value;

    let firstNameBox = document.getElementById("firstNmError");
    let lastNameBox = document.getElementById("lastNmError");
    let emailBox = document.getElementById("emailError");
    let dateBox = document.getElementById("dateError");
    let passBox = document.getElementById("passError");
    let passWarn = document.getElementById("passWarn")
 

    const stringRegex = /^[a-zA-Z]+$/;

    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;

    // ------first name------
    if (firstName == "") {
        firstNameBox.style.display = "block"
        return false;
    }

    if (!firstName.match(stringRegex)) {
        firstNameBox.style.display = "block"
        return false;
    }

    // ------last name------
    if (lastName == "") {
        lastNameBox.style.display = "block"
        return false;
    }

    if (!lastName.match(stringRegex)) {
        lastNameBox.style.display = "block"
        return false;
    }

    // ------email------
    if (email == "") {
        emailBox.style.display = "block"
        return false;
    }

    if (!email.match(emailRegex)) {
        emailBox.style.display = "block"
        return false;
    }

    // ------date------
    if (date == "") {
        dateBox.style.display = "block"
        return false;
    }
    
    // ------password------
    if (password == "") {
        passBox.style.display = "block"
        passWarn.style.display = "none"
        return false;
    }

    if (password.length < 8) {
        passBox.style.display = "block"
        passWarn.style.display = "none"
        return false;
    }

    if (password.length > 16) {
        passBox.style.display = "block"
        passWarn.style.display = "none"
        return false;
    }

    if (!password.match(passRegex)) {
        passBox.style.display = "block"
        passWarn.style.display = "none"
        return false;
    }
}

