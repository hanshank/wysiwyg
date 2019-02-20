export default function addHeader(event) {
  // create element (section w/ the class of 'editable-text')
  const newEditableHeader = document.createElement('wysiwyg-editable-heading');
  newEditableHeader.className = 'wysiwyg-editable-heading';
  // append that to main (before our button)
  //document.querySelector('main').insertBefore(newEditableHeader, event.target);
  document.querySelector('main').append(newEditableHeader, event.target);
}