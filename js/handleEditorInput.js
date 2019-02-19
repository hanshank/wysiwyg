// update text ( or style) of siblings
export default function handleEditorInput(event) {
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');
  if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
  const text = event.target.value;
  textElement.innerText = text;
  } else {
     // handle styles
    const styleName = event.target.name;
    const unit = event.target.dataset.unit || '';
    const value = event.target.value;
    textElement.style[styleName] = `${value}${unit}`;

  }
}