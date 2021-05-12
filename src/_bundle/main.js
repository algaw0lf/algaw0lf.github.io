// CSS
import './main.pcss'

// JS
import 'alpinejs'
import 'lazysizes'
// import './fn.js'
import './anim.js'

// import Turbolinks from 'turbolinks'
// Turbolinks.start()

import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`p { color: blue }`;
  }
z
  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
    html
  }
}

customElements.define('simple-greeting', SimpleGreeting);