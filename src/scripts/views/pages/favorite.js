import '../../component/restaurant-list';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
        <hero-section></hero-section>
          <div class="container">
            <h1 class="post__name" id="main__content">Your Liked Restaurant</h1>
                <restaurant-list class="card__grid" id="menu__grid"></restaurant-list>
          </div>
        `;
  },
  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');

    const renderResult = (results) => {
      if(results.length){
        restaurantListElement.restaurants = results;
      }else{
        restaurantListElement.renderEmptyData();
      }
    };

    const onLoadData = async () => {
      try {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        renderResult(restaurants);
      } catch (message) {
        restaurantListElement.renderError(message);
      }
    };

    onLoadData();
  },
};

export default Favorite;
