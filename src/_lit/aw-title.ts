import { customElement, html, RootLitElement, property } from './lit'

@customElement('aw-title')
export class AwTitle extends RootLitElement {

    @property()
    title = ""
    @property()
    tag = ""
    
    render() {
        return html`<div class="text-center pt-11 pb-3 px-6">
                        <h1>${this.title}</h1>
                        <p class="text-gray-700 p-2 mx-auto text-sm tracking-wide3">${this.tag}</p>
                    </div>`

    }
}