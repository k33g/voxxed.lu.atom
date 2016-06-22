'use babel';

import Small from './small';

class MyForm extends Small {
  constructor() { super(); }
  template(data) {
    return `<div>
      <h3>${data.message}</h3>
      <form>
        <input type="text" placeholder="${data.placeholder}"/>
        <button>Click Me!</button>
      </form>
    </div>`;
  }
  events(data) {
    this.querySelector('button').addEventListener('click', (e) => {
      let value = this.querySelector("input").value;
      this.querySelector("h3").innerHTML = value;
    });
  }
  init(data) {
    console.log('Inititialize ...', data)
  }
}

export default class GololangWebcomponentsView {

  constructor(serializedState) {
    // Create root element
    this.element = document
      .createElement('div')
      .appendChild(
        MyForm.of('my-form', {message:'Hello World!', placeholder:'???'})
      )
  }

  serialize() {}
  destroy() {
    this.element.remove;
  }
  getElement() {
    return this.element;
  }

}
