const addParagraph = (event) => {
  // create element (section w/ the class of 'editable-text)
  const newEditableText = document.createElement('wysiwig-editable-text');
  
  document.querySelector('main').insertBefore(newEditableText, event.target)
}

export default addParagraph;