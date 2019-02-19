// function that will add a class to editable-text

/**
 * Toggles active class on editable-text
 * @param {Event} event 
 */
export default function toogleActive(event) {
  // get parent element
    const editableText = event.target.parentElement;
  // toggle the class active (on some element)
    editableText.classList.toggle('active');
  }