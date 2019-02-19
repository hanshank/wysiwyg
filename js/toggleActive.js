/**
 * function that adds an active class to editable-text
 * Opens up the edit panel
 * @param {event} event
 */

const toggleActive = event => event.target.parentNode.classList.toggle('active');

export default toggleActive;
