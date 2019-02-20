export default function addParagraph(event) {
  // create element (section w/ the class of 'editable-text')
  const newEditableText = document.createElement('wysiwyg-editable-text');
  newEditableText.className = 'wysiwyg-editable-text';
  // append that to main (before our button)
  //document.querySelector('main').insertBefore(newEditableText, event.target);
  document.querySelector('main').append(newEditableText, event.target);
}