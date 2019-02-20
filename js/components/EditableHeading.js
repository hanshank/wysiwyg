import EditableText from "./EditableText.js";

export default class EditableHeading extends EditableText {
  static get observedAttributes() {
    return ['heading'];
  }

  // getter/setter
  get heading() {
    // this.heading
    if (this.hasAttribute('heading')) {
      return this.getAttribute('heading');
    }
    return 'h1';
  }

  set heading(val) {
    this.setAttribute('heading', val);
  }

  render() {
    this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <button type="button" class="del-button">Delete</button>
        <${this.heading} class="text-element">Title Goes Here!</${this.heading}>

        <wysiwyg-editor></wysiwyg-editor>
    `

    // select edit button
    const editButtons = this.querySelectorAll('.edit-button, .save-button');
    // add event listener (click)
    editButtons.forEach(button => button.addEventListener('click', this.toggleActive));

    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);

    // delete button
    const delButton = this.querySelectorAll('.del-button');
    delButton.forEach(button => button.addEventListener('click', this.deleteHeading))
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render;
  }

  deleteHeading(event) {
    // console.log(event.target.parentElement);
    this.parentElement.remove();
  }
}