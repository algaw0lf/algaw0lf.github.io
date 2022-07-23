import "./ascii-wolf"; import { customElement, html, RootLitElement, property } from './lit'
import "./aw-footer";
import "./content-loader";
import "./vcv-modules";
import "./aw-title";
import "./aw-header";

@customElement('aw-main')
export class AwMain extends RootLitElement {

  @property()
  page = 0

  @property()
  content = ""

  scrollHistory = [0]

  wrapper = () => document.getElementsByClassName('wrapper')[0]

  constructor() {
    super()
    this.addEventListener('click', this.onClick)
    this.addEventListener('mouseup', this.onMouse)
    // const le = new Event('load-content')
    // document.addEventListener('load-content', this.onLoadContent)
  }
  onMouse(e) {
    console.log(e.button)
    switch (e.button) {
      case 3: this.top();
    }
  }

  onLoadContent(e) {
    throw new Error("Method not implemented.");
    e
  }

  onClick(e) {
    let s = 1
    switch (e.target.getAttribute('page')) {
      case null: s = 0; break
      case 'algawolf': this.page = 0; break
      case 'contact': this.page = 1; break;
      default: this.page = -1; break
    }
    if (s) this.top()
    if (e.target.href != null) this.scrollHistory.push(this.wrapper().scrollTop)
    this.content = this.page == 0 ? "work/index.html" : "blog/index.html"
  }

  top() { this.wrapper().scrollTo(0, 0) }

  render() {
    return html`
          <div id="overlay" class="fixed wh-100 bg-white z-50 pointer-events-none fadeOut-500"></div>
          <div class="wrapper">
            <aw-header></aw-header>
            <main>
              <ascii-wolf></ascii-wolf>
              ${this.main()}
            </main>
          </div>
          <aw-footer></aw-footer>`
  }

  main = () => {
    switch (this.page) {
      case 0: return this.mods()
      case 1: return this.con()
      case -1: return this._404()
      default: return html`<h1 class="text-center">Unhandled page index!</h1>`
    }
  }

  _404 = () => html`<content-loader path="404.html"></content-loader>`

  mods = () => html`
    <aw-title title="VCV Rack Modules" tag="Lean & Mean"></aw-title>
      <vcv-modules></vcv-modules>`
    // <content-loader path=${this.content}></content-loader>`

  con = () => html`
    <aw-title title="Contact" tag="Wolves hunt in packs for a reason"></aw-title>
    <content-loader path="contact/index.html"></content-loader>`

}