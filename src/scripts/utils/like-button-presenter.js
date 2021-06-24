const likeButtonPresenter = {
  async init({ elemContainer, favoriteRestaurants, restaurant }) {
    this._elem = elemContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
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
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },
  _likeButton() {
    this._button.innerHTML = '<i class="far fa-heart"></i>';
    this._button.ariaLabel = 'like this restaurant';
    this._button.id = 'likeButton';
    this._elem.append(this._button);
    this._button.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _likedButton() {
    this._button.innerHTML = '<i class="fa fa-heart"></i>';
    this._button.ariaLabel = 'unlike this restaurant';
    this._button.id = 'likeButton';
    this._elem.append(this._button);
    this._button.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default likeButtonPresenter;
