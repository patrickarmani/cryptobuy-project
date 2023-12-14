document.addEventListener('DOMContentLoaded', function () {
    let alertBox = document.getElementById('alertBox');

    // Display the alert box
    alertBox.style.display = 'block';

    // Hide alert box after 4 seconds
    setTimeout(function () {
        alertBox.style.display = 'none';
    }, 4000);
});