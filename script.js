// Get the modal and its content elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

/**
 * Opens the modal (lightbox) when a thumbnail is clicked.
 * @param {HTMLElement} element - The clicked image element (the thumbnail).
 */
function openModal(element) {
  // 1. Show the modal
  modal.style.display = "block";
  
  // 2. Set the full image source from the data-full attribute
  // This loads the high-res image specified in the HTML
  modalImg.src = element.getAttribute("data-full");
  
  // 3. Set the caption text from the alt attribute of the thumbnail
  captionText.innerHTML = element.alt; 
}

/**
 * Closes the modal (lightbox).
 */
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the image/close button
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}