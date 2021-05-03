import RestoranSource from '../../data/restoran-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const DaftarRestoran = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">Explore Your Favorite Resto</h1>
        <h3 class="content__subheading">Ayo koding ayo makan</h3>
        <div id="restos" class="restos">
  
        </div> 
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestoranSource.daftarRestoran();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto, index) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto, index);
    });
  },
};

export default DaftarRestoran;
