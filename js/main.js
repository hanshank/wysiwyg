import toggleActive from './toggleActive.js';

// select edit button
const editButtons = document.querySelectorAll('.edit-button, .save-button');
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));

// Listen for 'input' events form editor when fired
document.querySelectorAll('.editor').forEach
(editor => editor.addEventListener('input', handleEditorInput));

// update text ( or style) of siblings
function handleEditorInput(event) {
  if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');
  const text = event.target.value;
  textElement.innerText = text;
  }
}

