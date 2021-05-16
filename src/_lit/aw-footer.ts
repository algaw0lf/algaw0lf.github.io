import { customElement, html, RootLitElement } from './lit'

@customElement('aw-footer')
export class Footer extends RootLitElement {
    render() {
        return html`
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
            </footer>`
    }
}


