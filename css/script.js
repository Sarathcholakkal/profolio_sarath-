function validateForm() {
    var name = document.forms["contactForm"]["Name"].value;
    var email = document.forms["contactForm"]["Email"].value;
    var phone = document.forms["contactForm"]["Phone"].value;
    var message = document.forms["contactForm"]["Message"].value;

    if (name == "" || name == "Name") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "" || email == "Email") {
        alert("Please enter your email address.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone == "" || phone == "Phone") {
        alert("Please enter your phone number.");
        return false;
    }

    if (message == "" || message == "Message...") {
        alert("Please enter your message.");
        return false;
    }

    return true;
}