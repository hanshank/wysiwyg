import toggleActive from './toggleActive.js';

// select edit buttons and call toggle function on click
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));