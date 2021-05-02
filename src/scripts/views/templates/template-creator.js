import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail__resto">
  <div class="resto__info">
      <h1 class="resto">${resto.name}</h1>
      <h3 class="resto__info-title">Information</h3>
      <h4>Alamat Lengkap</h4>
      <p>${resto.address}, ${resto.city}</p>
      <h3>Kategori Menu</h3>
      <ul>
        ${resto.categories.map((category) => `<li>${category.name}</li>`).join('')}
      </ul>
      <h3>Menu Makanan</h3>
      <ul>
        ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
      <h3>Menu Minuman</h3>
      <ul>
        ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
    <div>
      <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}large/${resto.pictureId}" alt="${resto.name}" />
      <p>Rating ⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      <div class="customer__reviews">
        <h3>Customer Reviews</h3>
        <ul class="review__box">
          ${resto.customerReviews.map((review) => `<li><h3>${review.name}</h3><p>${review.review}</p><i>${review.date}</i></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  `;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img src="${CONFIG.BASE_IMAGE_URL}small/${resto.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <h4>📍 ${resto.city}</h4>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button arial-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
