import DaftarRestoran from '../views/pages/daftar-resto';
import DetailRestoran from '../views/pages/detail';
import RestoranFavorit from '../views/pages/restoran-favorit';

const routes = {
  '/': DaftarRestoran, // default page
  '/daftar-restoran': DaftarRestoran,
  '/restoran-favorit': RestoranFavorit,
  '/detail/:id': DetailRestoran,
};

export default routes;
