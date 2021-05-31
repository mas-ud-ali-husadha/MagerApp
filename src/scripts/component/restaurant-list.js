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
            <h2>Error Ketika Menload Data</h2>
            <h4 class="card__text">Detail : ${message}</h4>
            <h5>Coba Cek Koneksi Anda Dan Coba Lagi</h5>
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
