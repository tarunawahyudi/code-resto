import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-restos/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoritresto-idb';

describe('Searching restos', () => {

  let presenter;

  const searchRestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="restos">
                </ul>
            </div>
        </div>
        `;
  }

  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    presenter = new FavoriteRestoSearchPresenter({ 
      favoriteRestos: FavoriteRestoIdb 
    });
  }

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestos('resto a');

    expect(presenter.latestQuery).toEqual('resto a');
  });

  it('should ask the model to search for liked restos', () => {
    searchRestos('resto a');

    expect(FavoriteRestoIdb.searchRestos)
      .toHaveBeenCalledWith('resto a');
  });

  it('should show the found restos', () => {
    presenter._showFoundRestos([{ id: 1 }]);
    expect(document.querySelectorAll('.resto').length).toEqual(1);

    presenter._showFoundRestos(
      [{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]
    );

    expect(document.querySelectorAll('.resto').length).toEqual(2);
  });

  it('should show the name of the found restos', () => {
    presenter._showFoundRestos([{
      id: 1,
      name: 'Satu',
    }]);
    expect(document.querySelectorAll('.resto__name').item(0).textContent)
      .toEqual('Satu');
    
    presenter._showFoundRestos(
      [{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua'}],
    );

    const restoNames = document.querySelectorAll('.resto__name');
    expect(restoNames.item(0).textContent).toEqual('Satu');
    expect(restoNames.item(1).textContent).toEqual('Dua');
  })

  it('should show - for found resto without name', () => {
    presenter._showFoundRestos([{ id: 1 }]);

    expect(document.querySelectorAll('.resto__name').item(0).textContent)
      .toEqual('-');
  })
});