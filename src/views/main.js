import data from '../DATA.json';
import '../components/CardList.js';

const main = ()=> {
    const cards = document.querySelector('card-list');
    cards.food = data.restaurants;
    
}

export default main;