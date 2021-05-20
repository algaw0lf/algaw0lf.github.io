import { customElement, html, RootLitElement } from './lit'

@customElement('aw-header-nav')
export class HeaderNav extends RootLitElement {
    origin = ""
    constructor()
    {
        super()
        this.origin = window.location.origin
    }
    render() {
        return html`
            <nav class="flex justify-end space-x-3 text-right tracking-wide6 w-56">
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" aria-label="icons/email.svg profile link" href="https://github.com/algawolf">
                    <img src="${this.origin}/icons/email.svg" class="w-5_5 h-5_5">
                </a>
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" aria-label="icons/logo--linkedin.svg profile link" href="https://www.linkedin.com/in/aeronmiles/">
                    <img src="${this.origin}/icons/logo--linkedin.svg" class="w-5_5 h-5_5">
                </a>
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" aria-label="icons/logo--github.svg profile link" href="https://github.com/algawolf">
                    <img src="${this.origin}/icons/logo--github.svg" class="w-5_5 h-5_5">
                </a>
            </nav>`
    }
}

@customElement('aw-header')
export class Header extends RootLitElement {
    render() {
        return html`
            <header class="bg-white text-gray-900 z-40 gap-4">
                <div class="container flex justify-evenly items-center py-2 max-w-7xl">
                    <a href="/" class="w-56 items-center">
                    <span class="leading-none font-normal text-base tracking-wide9 hidden sm:block">
                        ALGA<b>WOLF</b>
                    </span>
                    <span class="transform scale-100 h-px40 sm:hidden">
                        <img src="/assets/wolf.png">
                    </span>
                    </a>

                    <a href="/">
                    <span class="transform scale-100 h-px40 hidden sm:block">
                        <img src="/assets/wolf.png">
                    </span>
                    </a>
                    <aw-header-nav></aw-header-nav>
                </div>
            </header>`
    }
}



