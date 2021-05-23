import { customElement, html, unsafeHTML, RootLitElement, until, property } from './lit'

@customElement('content-loader')
export class ContentLoader extends RootLitElement {

    @property({ type: String })
    @property()
    path = ""

    constructor() {
        super()
    }

    content = () => fetch(window.location.origin + '/' + this.path).then(r => r.text()).then(t => unsafeHTML(t))

    render() {
        if (this.path === "" || this.path === undefined) return
        return html`${until(this.content(), "")}`
    }
}


