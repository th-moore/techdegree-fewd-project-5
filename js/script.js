// FilterImages function is called on the keyup event listener.
// The function filters the images that don't match search input.
const filterImages = () => {  
  
  // Make the value case insensitive by using the​ t​oLowerCase()​ m​ethod.
  // Log that value to the screen with a console.log() statement.
  let filterValue = document.getElementById("search-input");
  filterValue.value = filterValue.value.toLowerCase();
  console.log(filterValue.value);
  
  // Create an array of the large images.
  let images = document.getElementsByClassName("large-img");
  
  // Use a conditional loop to loop through the captions
  for (let i = 0; i < images.length; i++) {
    
    let caption = images[i].getAttribute("data-title");
    console.log(caption);
    
    // If the caption matches the search input then display. Else hide the image.
    if (caption.toLowerCase().indexOf(filterValue.value) > -1) {
      images[i].style.display = '';
    } else {
      images[i].style.display = 'none';
    }
  }
}

// Listen for a key input in the search bar. 
// When pressed, call the function FilterImages.
document.getElementById("search-input").addEventListener("keyup", filterImages);
