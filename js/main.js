import addParagraph from './addParagraph.js';
import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwig-editor', Editor);
customElements.define('wysiwig-editable-text', EditableText);

// listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

// listen for add paragraph button click
document.getElementById('add-button').addEventListener('click', addParagraph);