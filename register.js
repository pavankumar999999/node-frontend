document.addEventListener('DOMContentLoaded', function () {
    var registerButton = document.getElementById('register-button');
    if (registerButton) {
        registerButton.addEventListener('click', function () {
            // Redirect to the registration page
            window.location.href = './registration.html';
        });
    }
    else {
        console.error("Register button not found in the DOM");
    }
});
