import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    if (!document.querySelector('.btn__favorite')) {
        await LikeButtonPresenter.init({
            elemContainer: document.querySelector('detail-item'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant,
        });
    };
}


// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
