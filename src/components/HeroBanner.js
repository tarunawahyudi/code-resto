class HeroBanner extends HTMLElement {
    constructor() {
        super();
        this.fragment = this.attachShadow({mode: "closed"});
        this.render();
    }

    render() {

            let acceebilityText = `
                ini adalah banner website.
                pesan sekarang.
            `
            this.setAttribute('aria-label', acceebilityText);
            this.fragment.innerHTML = 
            `
                <style>
                    :host {
                        display: block;
                        background-image: linear-gradient( 
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.3) ), 
                            url('images/heros/hero-image_2.jpg');
                        background-position: top;
                        background-repeat: no-repeat;
                        background-size: cover;
                        height: auto;
                        padding: 150px 150px
                    }
                    h1 {
                        color: white;
                        font-family: 'Helvetica Neue';
                        text-align: center;
                        font-size: 35px;
                    }

                    p {
                        color: white;
                        text-align: center;
                        margin-bottom: 2em;
                    }

                    button#pesan {
                        display: block;
                        text-align: center;
                        width: 150px;
                        margin: 0px auto;
                        padding: 20px;
                        color: white;
                        text-transform: uppercase;
                        font-family: Arial;
                        border: 1px solid #fff;
                        text-decoration: none;
                        border-radius: 10px;
                    }

                    @media screen and (max-width: 992px) {
                        :host {
                            padding: 100px 100px
                        }

                        h1 {
                            font-size: 24px;
                        }
                      }

                    @media screen and (max-width: 600px) {
                        :host {
                            padding: 50px 50px
                        }
                      }

                      button {
                          cursor: pointer;
                          background: none;
                          color: white;
                          text-decoration: none;
                      }

                      button:hover {
                          background-color: #982121;
                          transition: 0.5s;
                      }

                    
                </style>
                <h1>Tempat makan untuk para Developer</h1>
                <p>Code Resto jadi solusi bagi anda yang lapar saat sedang coding sehari suntuk. Selain terdapat rasa yang lezat, anda juga dapat ide cemerlang disini. Tunggu apa lagi? Buruan klik link dibawah ini!</p>
                <button tabindex="1" onclick="window.open('https://github.com/tarunawahyudi', '_blank')" id="pesan">Pesan</a>
                
            `;
        }
}

customElements.define("hero-banner", HeroBanner);