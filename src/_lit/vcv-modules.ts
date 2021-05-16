import { customElement, property, html, RootLitElement } from './lit'
const mods = require('@data/vcvModules')

@customElement('vcv-module')
export class VcvModule extends RootLitElement {
    @property({ type: Number })
    focused = 0
    @property()
    over = 0
    @property()
    mod = { src: '', title: '', features: [] }

    render() {
        return html`
        <img src="http://localhost:8080/icons/caret--down.svg" alt="\\\/" class="relative m-auto pb-4 transition duration-300 ${this.over ? "": "opacity-0 transform -translate-y-8"}">
        <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
        class="flex-row space-y-12 items-start w-60 transition duration-200 transform ${this.over || !this.focused ? "" : "scale-95 filter-grayscale-100"}">
            <div>
                <img class="mx-auto" src="${this.mod.src}">
            </div>
            <div class="text-sm my-2">
                <div class="my-2">
                    <span class="text-white bg-black py-0_5 px-4 ${this.over ? "font-bold": ""} tracking-wide8">${this.mod.title}</span>
                </div>
                ${this.mod.features.map(f => html`
                <div >
                    <div class="inline-block transition duration-300 ${this.over ? 'bg-white' : 'text-transparent transform translate-y-12'} px-4">${f}</div>
                </div>`)}
            </div>
        </div>
        `
    }
}

@customElement('vcv-modules')
export class VcvModules extends RootLitElement {
    @property({ type: Number })
    over = 0

    render() {
        return html`
            <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
                class="flex-col-centered drop-shadow fadeIn-1000 mx-32 gap-y-12">
                ${mods.map(m => html`<vcv-module focused=${this.over} .mod=${m}></vcv-module>`)}
            </div>
            `
    }
}
