document.addEventListener('DOMContentLoaded', function () {
    var deleteButton = document.getElementById('delete-button');
    if (deleteButton) { // Check if deleteButton is not null
        deleteButton.addEventListener('click', function () {
            window.location.href = './delete.html'; // Redirect to delete.html page
        });
    }
    else {
        console.error("Delete button not found in the DOM");
    }
});
