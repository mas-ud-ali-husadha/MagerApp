import CONFIG from '../globals/config';
import StarRating from '../utils/star-rating';
import LimitText from "../utils/description-text";
class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._data = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
       <a href="${`/#/detail/${this._data.id}`}">
        <div class="card__menu hover">
            <div>
                <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}/images/small/${this._data.pictureId}" alt="${this._data.pictureId}">
                <div class="rating">${StarRating.getStars(this._data.rating)} : ${this._data.rating}</div>
            </div>
            <div class="card__body">
                <div class="card__name">
                    <div class="card__text"> ${this._data.name} </div>
                    <div class="location" >Kota ${this._data.city}</div>
                </div>
                <p class="card__description">${LimitText.descriptionTxt(this._data.description)}</p>
            </div>
        </div>
    </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
