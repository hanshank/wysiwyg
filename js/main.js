import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';
import addHeader from './addHeader.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';
import EditableHeading from './components/EditableHeading.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);

// Listen for 'input' events form editor when fired
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

// Event listener for add paragraph
document.getElementById('add-button').addEventListener('click', addParagraph);

// Event listerner for add header paragraph
document.getElementById('add-header-button').addEventListener('click', addHeader);