import FavoriteRestoIdb from "../src/scripts/data/favoritresto-idb";
import FavoriteRestoSearchView from "../src/scripts/views/pages/liked-restos/favorite-resto-search-view";
import FavoriteRestoShowPresenter from "../src/scripts/views/pages/liked-restos/favorite-resto-show-presenter";

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getFavoriteRestoTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  })

  describe('When no restaurants have been liked', () => {
    it('should the information that no restaurants have been liked', () => {
      
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
 
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
 
      expect(favoriteRestos.getAllRestos).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
          expect(document.querySelectorAll('.resto-item__not__found').length)
            .toEqual(1);
          done();
        });

        const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
        favoriteRestos.getAllRestos.and.returnValues([]);

        new FavoriteRestoShowPresenter({
          view,
          favoriteRestos,
        })
    });
  });

  describe('When favorite restaurants exist', () => {

    it('should show the restaurants', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });

      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteRestos.getAllRestos.and.returnValues([
        {
          id: 11, name: 'A', city: 'Bandung', description: 'restoran Bandung',
        },
        {
          id: 12, name: 'B', city: 'Jakarta', description: 'restoran Jakarta',
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });

  });
});