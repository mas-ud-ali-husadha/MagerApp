import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import '../../component/detail-item';
import CONFIG from '../../globals/config';
import likeButtonPresenter from '../../utils/like-button-presenter';
import PostData from '../../utils/post-data';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import SkeletonLoader from '../../utils/skeleton-loader';

const Detail = {
  async render() {
    return `
        <div class="nav__color"></div> 
        <div class="container">
                <detail-item class="detail__grid" id="main__content"></detail-item>
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
        await likeButtonPresenter.init({
          elemContainer: detailItemElement,
          favoriteRestaurants: FavoriteRestaurantIdb,
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

    const reviewPost = (itemId) => {
      const form = document.querySelector('#form__review');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const id = itemId;
          const reviewUrl = `${CONFIG.BASE_URL}/review`;
          const name = document.getElementById('yourname').value;
          const review = document.getElementById('reviewtxt').value;
          PostData({
            url: reviewUrl,
            data: {
              id,
              name,
              review,
            },
          }).then(() => {
            // eslint-disable-next-line no-use-before-define
            onLoadData();
          }).catch((err) => {
            console.log(err);
          });
        });
      }
    };

    const onLoadData = async () => {
      try {
        SkeletonLoader.detailLoader(detailItemElement);
        const restaurant = await DataSource.Detail(url.id);
        SkeletonLoader.remove(detailItemElement);
        favoriteButton(restaurant);
        renderResult(restaurant);
        reviewPost(restaurant.id);
      } catch (message) {
        renderError(message);
      }
    };

    onLoadData();
  },
};

export default Detail;
