import { customElement, html, RootLitElement } from './lit'

@customElement('aw-header-nav')
export class HeaderNav extends RootLitElement {
    constructor()
    {
        super()
    }
    render() {
        let o = window.location.origin
        return html`
            <nav class="flex justify-end space-x-3 text-right tracking-wide6 w-32 sm:w-52">
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" 
                aria-label="icons/email.svg profile link" href="https://github.com/algawolf">
                    <img src="${o}/icons/email.svg" alt="email" class="w-5_5 h-5_5">
                </a>
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" 
                aria-label="icons/logo--linkedin.svg profile link" href="https://www.linkedin.com/in/aeronmiles/">
                    <img src="${o}/icons/logo--linkedin.svg" alt="linkedin" class="w-5_5 h-5_5">
                </a>
                <a target="_blank" rel="noopener" class="flex items-center justify-end w-8 h-8" 
                aria-label="icons/logo--github.svg profile link" href="https://github.com/algawolf">
                    <img src="${o}/icons/logo--github.svg" alt="github" class="w-5_5 h-5_5">
                </a>
            </nav>`
    }
}

@customElement('aw-header')
export class Header extends RootLitElement {
    render() {
        return html`
            <header class="bg-white text-gray-900 z-40 gap-4">
                <div class="container flex justify-between items-center py-2 max-w-6xl">
                    <a href="/" class="w-32 sm:w-52 items-center">
                        <span class="leading-none font-normal text-base tracking-wide9 hidden sm:block">
                            ALGA<b>WOLF</b>
                        </span>
                        <span class="transform scale-100 h-px40 sm:hidden">
                            <img src="/assets/wolf.png" alt="wolf">
                        </span>
                    </a>

                    <a href="/">
                    <span class="transform scale-100 h-px40 hidden sm:block">
                        <img src="/assets/wolf.png" alt="wolf">
                    </span>
                    </a>
                    <aw-header-nav></aw-header-nav>
                </div>
            </header>`
    }
}



