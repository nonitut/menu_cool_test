// Wait for the DOM content to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Select the menu button and menu elements using their respective classes
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');

    // Add a click event listener to the menu button
    menuBtn.addEventListener('click', function(){
        // Toggle the 'active' class on the menu button and menu to show/hide the menu
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

