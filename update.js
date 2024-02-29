document.addEventListener('DOMContentLoaded', function () {
    var updateButton = document.getElementById('update-profile-button');
    if (updateButton) {
        updateButton.addEventListener('click', function () {
            // Redirect to the user profile page
            window.location.href = './updateuser.html';
        });
    }
    else {
        console.error("Update button not found in the DOM");
    }
});
