import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((resto) => resto.id == id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto)
  },

  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },

  searchRestos(query) {
    return this.getAllRestos().filter((resto) => {
      const loweredCaseRestoName = (resto.name || '-').toLowerCase();
      const jammedRestoName = loweredCaseRestoName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoName.indexOf(jammedQuery) !== -1;
    });
  }
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});