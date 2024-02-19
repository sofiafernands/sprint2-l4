class Card extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Get the custom color attributes
        const primaryColor = this.getAttribute('data-primary-color') || '#c9ab81';
        const primaryComplementColor = this.getAttribute('data-primary-complement-color') || '#819fc9';
        const primaryDarkColor = this.getAttribute('data-primary-dark-color') || '#7c5e35';
        const primaryDarkestColor = this.getAttribute('data-primary-darkest-color') || '#352817';
        const primaryLightColor = this.getAttribute('data-primary-light-color') || '#f7f2ec';
        const primaryLightestColor = this.getAttribute('data-primary-lightest-color') || 'white';

        // Define the template content
        const templateContent = `
            <style>
                /* Estilos del componente card */
                .card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 20px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: ${primaryColor};
                    padding-top: 10rem;
                    border: none;
                }
                .card h3 {
                    margin-top: 0;
                }
                .card p {
                    margin-bottom: 0;
                }
                .card ul {
                    list-style: none;
                    padding: 0;
                }
                
            </style>
            <div class="card">
                <ul>
                    <li><hr></li>
                    <li><b>Color --primary-color</b></li>
                    <li>--primary-color: ${primaryColor}</li>
                    <li>--primary-complement-color: ${primaryComplementColor}</li>
                    <li>--primary-dark-color: ${primaryDarkColor}</li>
                    <li>--primary-darkest-color: ${primaryDarkestColor}</li>
                    <li>--primary-light-color: ${primaryLightColor}</li>
                    <li>--primary-lightest-color: ${primaryLightestColor}</li>
                </ul>
            </div>
        `;

        // Append the template content to the shadow DOM
        this.shadowRoot.innerHTML = templateContent;
    }
}

// Define the custom element
customElements.define('custom-card', Card);