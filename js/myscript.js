// Get the value of the search field whenever a user types in that field.
document.getElementById("search-input").addEventListener("keyup", keyPress);

// Make the value case insensitive by using the​ t​oLowerCase()​ m​ethod.
// Log that value to the screen with a console.log() statement.
function keyPress() {
  var input = document.getElementById("search-input");
  input.value = input.value.toLowerCase();
  console.log(input.value);
}

// Target the entire caption by using the​ g​etAttribute()​ m​ethod.
document.getElementsByClassName("large-img").getAttribute("data-title", captionString);

// Then loop ​and log the all lowercase version of the captions to the console.
function captionString() {
  var caption = document.getElementById("search-input");
  caption.value = caption.value.toLowerCase();
  console.log(caption.value);
}

// Check if the current value of the search input is​ i​ncluded ​w​ithin any of the captions, and if so, log the associated image to the console.

// Use a​ c​onditional​ ​so that if there's a match,​ d​isplay​ t​he container of the image, and if not, h​ide it​.