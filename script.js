// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener once DOM is fully loaded
  let homeButton = document.getElementById("home-btn");
  if (homeButton) {
      homeButton.addEventListener("click", function() {
          // Your click event handler logic here
          console.log("Home button clicked");
      });
  } else {
      console.error("Button with ID 'home-btn' not found");
  }
});