'use babel';

class Small extends HTMLElement {
  constructor() { super(); }
  createdCallback() {}
  attachedCallback(){}
  template(data) { return `<div></div>`; }
  html(data) {
    this.innerHTML = this.template(data);
    this.events(data);
  }
  init(data) {}
  static of(tagName, data) {
    let Element = document.registerElement(tagName, this);
    let instance = new Element()
    instance.init(data)
    instance.html(data)
    return instance
  }
}
export default Small;
