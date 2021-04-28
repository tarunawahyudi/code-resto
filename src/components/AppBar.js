class AppBar extends HTMLElement {
    constructor() {
        super();
        this.fragment = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        this.render();
    }

    render() {

        let acceebilityText = `
                ini adalah application bar website.
                pilih menu.
            `
        this.setAttribute('aria-label', acceebilityText);
        this.fragment.innerHTML = 
        `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #982121;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                font-family: 'Helvetica Neue';
            }

            header {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 1em;
            }

            h1 {
                padding: 0.5em;
            }

            .main-menu  {
                list-style: none;
                display: grid;
                grid-template-columns: 100px 100px 150px;
                grid-template-rows: 1fr;
                align-items: center;
                justify-content: end;
            }

            .main-menu a {
                color: #fff;
                text-decoration: none;
                padding: 1em;
                border-radius: 15px;
            }

            .main-menu a:hover {
                background-color: #ffb80e;
                transition: 0.5s;
            }

            #hamburger {
                display: none;
            }

            #drawer {
                display: none;
            }

            @media screen and (max-width: 924px) {

                .main-menu {
                    display: none;
                }

                #drawer {
                    display: block;
                    position: relative;
                    transform: translate(0, 0);
                    padding-top: 2em;
                    padding-bottom: 2em;
                }

                .app-title {
                    display: grid;
                    align-items: center;
                    font-size: 20px;
                }

                #hamburger {
                    display: block;
                    font-size: 32px;
                    text-decoration: none;
                    color: #fff;
                    display: grid;
                    grid-template-columns: 70px;
                    align-items: center;
                    justify-content: end;
                    height: 60px;
                }

                #drawer {
                    width: 250px;
                    height: 100%;
                    position: absolute;
                    transform: translate(-250px, 0);
                    transition: transform 0.3s ease-in-out;
                    background-color:  #e9a300;
                }
    
                #drawer ul {
                    list-style-type: none;
                    padding: 0 16px;
                }
                    
                    
                #drawer li {
                    padding: 20px 0px;
                }
                
                
                #drawer a {
                    text-decoration: none;
                    font-size: 30px;
                    color: white;
                }
                
                #drawer.open {
                    transform: translate(0,0);
                }
            }

            </style>
            <nav id="drawer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/tarunawahyudi" target="_blank">About Us</a></li>
                </ul>
            </nav>
            <header>
                <h1 class="app-title">CODE RESTO</h1>
                <a id="hamburger" href="#">☰</a>
                <ul class="main-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/tarunawahyudi" target="_blank">About Us</a></li>
                <ul>
            </header>
        `;

        const hamburger = this.fragment.querySelector("#hamburger");
        const drawer = this.fragment.querySelector("#drawer");

        hamburger.addEventListener('click', function(event){
            drawer.classList.toggle("open");
            event.stopPropagation();
        })

        this.addEventListener("click", event => {
            drawer.classList.remove("open");
            event.stopPropagation();
        })
    }
}

customElements.define("app-bar", AppBar);