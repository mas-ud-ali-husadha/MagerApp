import DataSource from '../../data/data-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import '../../component/detail-item';
import CONFIG from '../../globals/config';

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
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CONFIG.BASE_IMAGE_URL}/images/large/${results.pictureId})`;
    };

    const onLoadData = async () => {
      try {
        const restaurant = await DataSource.Detail(url.id);
        renderResult(restaurant);
      } catch (message) {
        console.log(message);
      }
    };

    onLoadData();
  },
};

export default Detail;
