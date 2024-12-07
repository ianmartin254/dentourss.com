document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("responseMessage");

    // Simple validation
    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.className = "response";
        responseMessage.classList.remove("hidden");
        responseMessage.style.color = "red";
        return; // Exit the function if validation fails
    }

    // Simulate form submission success
    responseMessage.textContent = "Thank you for your message, we will get back to you soon on your Email!";
    responseMessage.className = "response";
    responseMessage.classList.remove("hidden");
    responseMessage.style.color = "green";

    // Clear the form fields
    document.getElementById("contactForm").reset();
});