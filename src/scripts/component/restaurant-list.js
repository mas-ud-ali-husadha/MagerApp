import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <div class="card__menu error__data">
        <div class="card__body">
          <div class="card__name">
            <h1><i class="fa fa-exclamation-triangle"></i></h1>
            <h2>Error When Loading Data</h2>
            <h4 class="card__text">Detail : ${message}</h4>
            <h5>Try Checking Your Connection And Try Again</h5>
          </div>
        </div>
      </div>
    `;
  }

  renderEmptyData(){
    this.innerHTML = `
      <div class="card__menu error__data">
        <div class="card__body">
          <div class="card__name">
            <h1><i class="fa fa-exclamation-triangle"></i></h1>
            <h1 class="restaurant_empty_text"> Your don't have any favorite Restaurant yet </h1>
          </div>
        </div>
      </div>
    `;
  }
  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
