import FavoriteRestoIdb from "../src/scripts/data/favoritresto-idb"
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

describe('Favorite Resto Dicoding Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});