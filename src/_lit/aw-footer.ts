import { customElement, html, RootLitElement } from './lit'
const nav = require('@data/navigation.js')

@customElement('aw-footer')
export class Footer extends RootLitElement {
    render() {
        return html`
            <footer class="fixed bottom-0 w-full-scroll m-auto text-center bg-white">
                <!-- <div class="flex items-center justify-center space-x-3 my-2">
                    ${nav.external.map(n =>
            html`
            <a
                        aria-label="${n.icon} profile link"
                        href="${n.link}"
                        target="_blank"
                        rel="noopener"
                        class="w-5 h-5 text-gray-500"
                    >
                        <img src=${window.location.origin + '/' + n.icon}>
                    </a>`)}
                    <img src=${window.location.origin + '/icons/email.svg'}
                    class="w-5 h-5">
                </div> -->
                <div class="flex items-center justify-center space-x-3 p-1">
                    <a href="/">Alga<b>wolf</b> | © ${new Date().getFullYear()}</a>
                    <a target="_blank" rel="noopener" href="https://www.carbondesignsystem.com/">
                        <img src="http://localhost:8080/icons/carbon.svg" class="w-5_5 h-5_5">
                    </a>
                </div>
            </footer>`
    }
}


