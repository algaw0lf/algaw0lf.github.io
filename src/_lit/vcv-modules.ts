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

    origin = ""
    constructor() {
        super()
        origin = window.location.origin
    }

    s = () => this.over || !this.focused ? "" : "scale-95 filter-grayscale-100"
    c = () => this.over ? "" : "opacity-0 transform -translate-y-5"
    f = () => this.over ? 'bg-white ' : 'text-transparent transform translate-y-9'
    b = () => this.over ? "border-gray-400 border" : ""

    feature = (f) => html`
    <div >
        <div class="inline-block transition duration-300 px-4 ${this.f()}">${f}</div>
    </div>`

    render() {
        return html`
        <img src="${this.origin}/icons/caret--down.svg" alt="\\\/" class="relative mx-auto pb-4 transition duration-300 ${this.c()}">
        <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
        class="flex-row space-y-12 items-start w-60 transition duration-200 transform ${this.s()}">
            <div>
                <img class="mx-auto py-3 px-3 ${this.b()}" src="${this.mod.src}">
            </div>
            <div class="text-sm">
                <div class="my-2">
                    <span class="text-white bg-black py-0_5 px-4 ${this.over ? "font-bold" : ""} tracking-wide8">${this.mod.title}</span>
                </div>
                ${this.mod.features.map(this.feature)}
            </div>
        </div>
        `
    }
}


@customElement('vcv-modules')
export class VcvModules extends RootLitElement {
    @property({ type: Number })
    over = 0

    mod = (m) => html`<vcv-module focused=${this.over} .mod=${m}></vcv-module>`

    render() {
        return html`
            <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
                class="flex-col-centered drop-shadow fadeIn-1000 mx-32 gap-y-12">
                ${mods.map(this.mod)}
            </div>
            `
    }
}
