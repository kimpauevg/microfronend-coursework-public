import * as ReactDOM from 'react-dom';
export function register(Component, name) {
    const WebComponent = class extends HTMLElement {
        connectedCallback() {

            // Create a ShadowDOM
            const root = this.attachShadow({ mode: 'open' });

            // Create a mount element
            const mountPoint = document.createElement('div');

            root.appendChild(mountPoint);

            // You can directly use shadow root as a mount point
            ReactDOM.render(<Component />, mountPoint);
        }
    }

    customElements.define(name, WebComponent);
}