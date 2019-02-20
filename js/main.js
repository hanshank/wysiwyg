import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

// Listen for 'input' events form editor when fired
document.querySelectorAll('.editor').forEach
(editor => editor.addEventListener('input', handleEditorInput));

// Event listener for add paragraph
document.getElementById('add-button').addEventListener('click', addParagraph);