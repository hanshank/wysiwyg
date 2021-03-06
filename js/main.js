import addParagraph from './addParagraph.js'
import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js'

// select edit buttons and call toggle function on click
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

// listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

// listen for add paragraph button click
document.getElementById('add-button').addEventListener('click', addParagraph);