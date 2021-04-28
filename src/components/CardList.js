class CardList extends HTMLElement {
    
    set food(value) {
        this._food = value;
        this.render();
    }

    render() {
        
        let data = '';
        this._food.forEach(restaurant => {
            data += `
                <article class="card-item">
                    <img class="card-item-thumbnail"
                            src="${restaurant.pictureId}"
                            alt="${restaurant.name}">
                    <div class="card-item-content">
                    <h1 class="card-item-title"><a href="#">${restaurant.name}</a></h1>
                    <p class="card-item-city">City: ${restaurant.city}</p>
                    <p class="card-item-rating">Rating: ${restaurant.rating}</p>
                        <p class="card-item-description">${restaurant.description}</p>
                    </div>
                </article>
            `;
        });
        
        this.innerHTML = data;
        this.setAttribute('aria-label', 'daftar makanan');

    }

}

customElements.define('card-list', CardList);