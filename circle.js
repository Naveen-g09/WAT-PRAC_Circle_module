// circle.js

// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to calculate the perimeter (circumference) of a circle
  function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Export the functions to make them available in other files
  module.exports = {
    calculateArea,
    calculatePerimeter,
  };
  