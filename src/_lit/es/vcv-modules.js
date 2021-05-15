var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RootLitElement } from './root-lit-element';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const mods = require('../../_data/vcvModules');
let VcvModule = class VcvModule extends RootLitElement {
    constructor() {
        super(...arguments);
        this.over = 0;
        this.mod = { src: '', title: '', features: [''] };
    }
    render() {
        return html `
        <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
        class="flex-row space-y-12 items-start ${this.over ? "w-80" : "w-60"}">
            <div>
                <img class="mx-auto" src="${this.mod.src}">
            </div>
            <div class="text-sm my-2">
                <div class="my-2">
                    <span class="bg-black py-0_5 px-4 text-white tracking-wide8">${this.mod.title}</span>
                </div>
                <!-- ${this.mod.features.map(f => html `
                <div class="my-2" >
                    <span class="bg-white py-0_5 px-4">${f}</span>
                </div>`)} -->
            </div>
        </div>
        `;
    }
};
__decorate([
    property()
], VcvModule.prototype, "over", void 0);
__decorate([
    property()
], VcvModule.prototype, "mod", void 0);
VcvModule = __decorate([
    customElement('vcv-module')
], VcvModule);
export { VcvModule };
let VcvModules = class VcvModules extends RootLitElement {
    render() {
        return html `
            <div class="flex-col-centered drop-shadow fadeIn-1000 mx-32 gap-y-12">
                ${mods.map(m => html `<vcv-module .mod=${m}></vcv-module>`)}
            </div>`;
    }
};
VcvModules = __decorate([
    customElement('vcv-modules')
], VcvModules);
export { VcvModules };
//# sourceMappingURL=vcv-modules.js.map