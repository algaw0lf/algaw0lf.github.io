var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, html, RootLitElement } from './lit';
const mods = require('@data/vcvModules');
let VcvModule = class VcvModule extends RootLitElement {
    constructor() {
        super(...arguments);
        this.focused = 0;
        this.over = 0;
        this.mod = { src: '', title: '', features: [] };
    }
    render() {
        return html `
        <img src="http://localhost:8080/icons/caret--down.svg" alt="\\\/" class="relative mx-auto pb-4 transition duration-300 ${this.over ? "" : "opacity-0 transform -translate-y-5"}">
        <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
        class="flex-row space-y-12 items-start w-60 transition duration-200 transform ${this.over || !this.focused ? "" : "scale-95 filter-grayscale-100"}">
            <div>
                <img class="mx-auto py-5 px-3 ${this.over ? "border-gray-400 border" : ""}" src="${this.mod.src}">
            </div>
            <div class="text-sm">
                <div class="my-2">
                    <span class="text-white bg-black py-0_5 px-4 ${this.over ? "font-bold" : ""} tracking-wide8">${this.mod.title}</span>
                </div>
                ${this.mod.features.map(f => html `
                <div >
                    <div class="inline-block transition duration-300 ${this.over ? 'bg-white ' : 'text-transparent transform translate-y-9'} px-4">${f}</div>
                </div>`)}
            </div>
        </div>
        `;
    }
};
__decorate([
    property({ type: Number })
], VcvModule.prototype, "focused", void 0);
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
    constructor() {
        super(...arguments);
        this.over = 0;
    }
    render() {
        return html `
            <div @mouseover="${() => this.over = 1}" @mouseout="${() => this.over = 0}"
                class="flex-col-centered drop-shadow fadeIn-1000 mx-32 gap-y-12">
                ${mods.map(m => html `<vcv-module focused=${this.over} .mod=${m}></vcv-module>`)}
            </div>
            `;
    }
};
__decorate([
    property({ type: Number })
], VcvModules.prototype, "over", void 0);
VcvModules = __decorate([
    customElement('vcv-modules')
], VcvModules);
export { VcvModules };
//# sourceMappingURL=vcv-modules.js.map