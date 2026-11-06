const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (fullName === "")  {
        formMessage.textContent = "please enter your first name";
        return;
    }
    
    if (email.trim() === "") {
        formMessage.textContent = "please enter your email";
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }
    
    if (subject === "") {
        formMessage.textContent = "please enter a message";
    }
    
    if (message === "") {
        formMessage.textContent = "please enter your message";
        return;
    }
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("subject:", subject);
    console.log("message:", message);
    
    formMessage.textContent = "Your Message was successfully validated!";
    
    contactForm.reset();
});
    
}


const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    


menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    
    if (navLinks.classList.contains("show")) {
        menuButton.textContent = "X";
    }else {
        menuButton.textContent = "☰";
    }
});

}

