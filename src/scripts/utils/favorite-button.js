import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';

const FavoriteButton = {
  async init({ detailItemElement, restaurant }) {
    this._elem = detailItemElement;
    this._restaurant = restaurant;
    this._button = document.createElement('button');
    this._button.className = 'btn__favorite ';
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._likedButton();
    } else {
      this._likeButton();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },
  _likeButton() {
    this._button.innerHTML = '<i class="far fa-heart"></i>';
    this._elem.append(this._button);
    this._button.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _likedButton() {
    this._button.innerHTML = '<i class="fa fa-heart"></i>';
    this._elem.append(this._button);
    this._button.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButton;
