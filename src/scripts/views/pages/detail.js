import DataSource from '../../data/data-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import '../../component/detail-item';
import CONFIG from '../../globals/config';
import LoaderInitiator from '../../utils/loader-initiator';
import FavoriteButton from '../../utils/favorite-button';

const Detail = {
  async render() {
    return `
        <div class="nav__color"></div> 
        <div class="container">
                <detail-item class="detail__grid"></detail-item>
        </div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailItemElement = document.querySelector('detail-item');

    const renderResult = (results) => {
      detailItemElement.restaurant = results;
      document.querySelector('.nav__color').style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CONFIG.BASE_IMAGE_URL}/images/medium/${results.pictureId})`;
    };

    const favoriteButton = async (restaurant) => {
      if (!document.querySelector('.btn__favorite')) {
        await FavoriteButton.init({
          detailItemElement,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            description: restaurant.description,
            rating: restaurant.rating,
            city: restaurant.city,
            pictureId: restaurant.pictureId,
          },
        });
      }
    };

    const renderError = (message) => {
      detailItemElement.renderError(message);
    };

    const onLoadData = async () => {
      try {
        LoaderInitiator.add(detailItemElement);
        const restaurant = await DataSource.Detail(url.id);
        favoriteButton(restaurant);
        LoaderInitiator.remove(detailItemElement);
        renderResult(restaurant);
      } catch (message) {
        renderError(message);
      }
    };

    onLoadData();
  },
};

export default Detail;
