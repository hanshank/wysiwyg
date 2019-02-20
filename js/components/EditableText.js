export default class EditableText extends HTMLElement{
  constructor(){
    super();

    // bind functions
    // this.toggleActive = this.toggleActive.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor></wysiwyg-editor>
    `

    // select edit button
  const editButtons = this.querySelectorAll('.edit-button, .save-button');
  // add event listener (click)
  editButtons.forEach(button => button.addEventListener('click', this.toggleActive));
  
  this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }

  toggleActive = () => {
    // toggle the class active (on some element)
    this.classList.toggle('active');
    // console.log(event.target);
  }

  handleInput = (event) => {
    const textElement = this.querySelector('.text-element');
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
}