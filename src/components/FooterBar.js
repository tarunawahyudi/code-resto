class FooterBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Copyright © 2021 - <b>CODE Resto</b></p>
        `;
    }
}
    
customElements.define("footer-bar", FooterBar);