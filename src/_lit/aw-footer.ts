import { customElement, html, RootLitElement } from './lit'

@customElement('aw-footer')
export class Footer extends RootLitElement {
    render() {
        return html`
            <footer class="fixed bottom-0 w-full-scroll m-auto text-center bg-white">
                <div class="flex items-center justify-center space-x-3 p-1">
                    <a href="/">Alga<b>wolf</b> | © ${new Date().getFullYear()}</a>
                    <a target="_blank" rel="noopener" href="https://www.carbondesignsystem.com/">
                        <img src="http://localhost:8080/icons/carbon.svg" class="w-5_5 h-5_5">
                    </a>
                </div>
            </footer>`
    }
}


