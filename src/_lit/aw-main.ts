
import "./ascii-wolf"; import { customElement, html, RootLitElement, property } from './lit'
import "./aw-footer";
import "./content-loader";
import "./vcv-modules";
import "./aw-title";
import "./aw-header";

@customElement('aw-main')
export class AwMain extends RootLitElement {

  @property()
  page = 1

  render() {
    return html`
        <body>
          <div class="wrapper">
            <div id="overlay" class="fixed wh-100 bg-white z-50 pointer-events-none fadeOut-500"></div>
            <aw-header></aw-header>
            <main>
              <div class="flex justify-center pt-8">
                <button @click=${() => this.page = ++this.page % 2}>Select page</button>
              </div>
              <ascii-wolf></ascii-wolf>
              ${this.main()}
            </main>
          </div>
          <aw-footer></aw-footer>
        </body>`
  }

  main = () => {
    switch (this.page) {
      case 0: return this.vcvModules()
      case 1: return this.contact()
      case -1: return this._404()
      default: return html`<h1 class="text-center">Unhandled page index!</h1>`
    }
  }

  _404 = () => html`<content-loader path="404.html"></content-loader>`

  vcvModules = () => html`
    <aw-title title="VCV Rack Modules" tag="Lean & Mean"></aw-title>
      <vcv-modules></vcv-modules>
    <content-loader path=""></content-loader>`

  contact = () => html`
    <aw-title title="Contact" tag=""></aw-title>
    <content-loader path="contact/index.html"></content-loader>`

}