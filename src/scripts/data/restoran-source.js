import API_ENDPOINT from '../globals/api-endpoint';

class RestoranSource {
  static async daftarRestoran() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTORAN);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoranSource;
