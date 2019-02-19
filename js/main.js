import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';

// select edit button
const editButtons = document.querySelectorAll('.edit-button, .save-button');
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));

// Listen for 'input' events form editor when fired
document.querySelectorAll('.editor').forEach
(editor => editor.addEventListener('input', handleEditorInput));



