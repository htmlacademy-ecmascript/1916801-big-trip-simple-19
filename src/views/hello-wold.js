import { html } from '../utils';

export default class HelloWorldView extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`<h1>Hello World</h1>`;
  }

  chengeColor() {
    this.style.color = 'coral';
  }
}

customElements.define('hello-world', HelloWorldView);
