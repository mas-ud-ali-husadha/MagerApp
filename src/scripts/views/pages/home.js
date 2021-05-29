import DataSource from '../../data/data-source';
import '../../component/restaurant-list';
import LoaderInitiator from '../../utils/loader-initiator';

const Home = {
  async render() {
    return `
        <hero-section></hero-section>
          <div class="container">
            <h1 class="post__name">Daftar Restaurant</h1>
                <restaurant-list class="card__grid" id="menu__grid"></restaurant-list>
          </div>
        `;
  },
  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');

    const renderResult = (results) => {
      restaurantListElement.restaurants = results;
    };

    const onLoadData = async () => {
      try {
        LoaderInitiator.add(restaurantListElement);
        const restaurants = await DataSource.Home();
        LoaderInitiator.remove();
        renderResult(restaurants);
      } catch (message) {
        console.log(message);
      }
    };

    onLoadData();
  },
};

export default Home;
