//waiting for the DOM content to be loaded (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
  //selecting the elements using the getElementByID
  var colorBox = document.getElementById("color-box");
  var changeColorButton = document.getElementById("change-color-button");

  //implementing .getRandomColor() function
  function getRandomColor() {
    let maxVal = 0xffffff; // getting the maximum hexadecimal value for color (256 colors)
    let randomNumber = Math.random() * maxVal; //returns a floating point random number
    randomNumber = Math.floor(randomNumber); //converting the floating-point number to an integer
    randomNumber = randomNumber.toString(16); //converting the integer into a hexadecimal
    let randomColor = randomNumber.padStart(6, "0"); // Ensuring the hex color string has 6 characters by padding with zeros if necessary
    return `#${randomColor.toUpperCase()}`; // giving back the hex color string in uppercase format
  }
  console.log(getRandomColor());
  // handling the click events (Adding EventListeners to the button)
  changeColorButton.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor(); //calling the getRandomColor function within the click event to change the background color of the colorbox.
  });
});
