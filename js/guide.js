class GuideContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="guide-content">
                <div class="guide-content__container">
                    <div class="guide-content__example">
                        <p><b>${this.getAttribute('title')}</b></p>
                        <hr>
                        <p><b>Ejemplo:</b></p>
                        <p>${this.getAttribute('example')}</p>
                    </div>
                    <div class="guide-content__properties">
                        <p><b>Código:</b></p>
                        <code>
                            ${this.getAttribute('code')}
                        </code>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('guide-content', GuideContent);