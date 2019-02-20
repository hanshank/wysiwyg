export default class EditableText extends HTMLElement {
  constructor() {
    super();

    // bind functions
    // this.toggleActive = this.toggleActive.bind(this);
  }

  // getter/setter
  get active() {
    return this.hasAttribute('active');
    // this.active
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active')
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <button type="button" class="del-button">Delete</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor></wysiwyg-editor>
    `

    // select edit button
    const editButtons = this.querySelectorAll('.edit-button, .save-button');
    // add event listener (click)
    editButtons.forEach(button => button.addEventListener('click', this.toggleActive));

    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);

    // delete button
    const delButton = this.querySelectorAll('.del-button');
    delButton.forEach(button => button.addEventListener('click', this.deleteParagraph))
  }

  toggleActive = () => {
    // toggle the class active (on some element)
    // this.classList.toggle('active');
    // this.setAttribute('active', ''); // example
    // console.log(event.target);
    this.active = !this.active;
    // if (this.hasAttribute('active')) {
    //   this.removeAttribute('active');
    // } else {
    //   this.setAttribute('active', '');
    // }
  }

  handleInput = (event) => {
    const textElement = this.querySelector('.text-element');
    if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
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

  deleteParagraph() {
    this.parentElement.remove();
  }
}