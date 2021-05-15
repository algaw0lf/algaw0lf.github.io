import { RootLitElement } from './root-lit-element'
import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
const mods = require('../../_data/vcvModules')

@customElement('vcv-module')
export class VcvModule extends RootLitElement {

    @property()
    over = 0
    @property()
    mod = {src:'', title:'', features:['']}

    render() {
        return html`
        <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
        class="flex-row space-y-12 items-start ${this.over ? "w-80" : "w-60"}">
            <div>
                <img class="mx-auto" src="${this.mod.src}">
            </div>
            <div class="text-sm my-2">
                <div class="my-2">
                    <span class="bg-black py-0_5 px-4 text-white tracking-wide8">${this.mod.title}</span>
                </div>
                <!-- ${this.mod.features.map(f => html`
                <div class="my-2" >
                    <span class="bg-white py-0_5 px-4">${f}</span>
                </div>`)} -->
            </div>
        </div>
        `
    }
}

@customElement('vcv-modules')
export class VcvModules extends RootLitElement {
    render() {
        return html`
            <div class="flex-col-centered drop-shadow fadeIn-1000 mx-32 gap-y-12">
                ${mods.map(m => html`<vcv-module .mod=${m}></vcv-module>`)}
            </div>`
    }
}
