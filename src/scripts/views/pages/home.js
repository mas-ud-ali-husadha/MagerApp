import DataSource from '../../data/data-source';
import '../../component/restaurant-list';
import SkeletonLoader from '../../utils/skeleton-loader';

const Home = {
  async render() {
    return `
        <hero-section></hero-section>
          <div class="container" >
            <h1 class="post__name" id="main__content">Daftar Restaurant</h1>
                <restaurant-list class="card__grid" id="menu__grid"></restaurant-list>
          </div>
        `;
  },
  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');

    const renderResult = (results) => {
      restaurantListElement.restaurants = results;
    };

    const renderError = (message) => {
      restaurantListElement.renderError(message);
    };

    const onLoadData = async () => {
      try {
        SkeletonLoader.homeLoader(restaurantListElement);
        const restaurants = await DataSource.Home();
        SkeletonLoader.remove(restaurantListElement);
        renderResult(restaurants);
      } catch (message) {
        renderError(message);
      }
    };
    onLoadData();
  },
};

export default Home;
