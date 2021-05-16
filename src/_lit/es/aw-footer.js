var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, RootLitElement } from './lit';
let Footer = class Footer extends RootLitElement {
    render() {
        return html `
            <footer class="fixed bottom-0 w-full m-auto text-center my-9">
                <span>Alga<b>wolf</b> | © ${new Date().getFullYear()}</span>
                <!-- <div class="w-full flex items-center justify-center space-x-3 mt-4 md:w-auto md:mt-0 md:ml-6">
                    {% for item in navigation.external  %}
                    <a
                        aria-label="{{ item.icon }} profile link"
                        href="{{ item.link }}"
                        target="_blank"
                        rel="noopener"
                        class="w-5 h-5 text-gray-500"
                    >
                        {% include 'icons/' + item.icon + '.svg' %}
                    </a>
                    {% endfor  %}
                </div> -->
            </footer>`;
    }
};
Footer = __decorate([
    customElement('aw-footer')
], Footer);
export { Footer };
//# sourceMappingURL=aw-footer.js.map