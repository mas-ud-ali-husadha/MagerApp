import CONFIG from '../globals/config';
import StarRating from '../utils/star-rating';

class DetailItem extends HTMLElement {
  set restaurant(restaurant) {
    this._data = restaurant;
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

  render() {
    const { customerReviews } = this._data;
    const { menus } = this._data;
    this.innerHTML = `
        <div class="detail__img">
            <img class="lazyload" width="807" height="540" data-src="${CONFIG.BASE_IMAGE_URL}/images/medium/${this._data.pictureId}" alt="${this._data.pictureId}" />
        </div>

        <div class="detail__text ">
            <h1 class="detail__name">${this._data.name}</h1>
            <div class="detail__rating">Rating : ${StarRating.getStars(this._data.rating)} (${this._data.rating})</div>
            <div class="detail__address"><i class="fa fa-map-marker-alt"></i> : <span class="square">${this._data.address}, ${this._data.city}</span></div>
            <div class="detail__categories"><i class="fa fa-utensils"></i> : 
                ${this._data.categories.map((category) => `<span class="square">${category.name}</span>`).join('')}
            </div>
            <p class="detail__description"> ${this._data.description}</p>    
        </div>

       <div class="tabs">
        
        <input type="radio" name="tabs" id="tabone" checked="checked">
        <label for="tabone">Menu</label>
        <div class="tab">

          <div class="detail__menu">

            <div class="card__menu foods">
              <h1><i class="fa fa-hamburger">&nbsp&nbsp&nbsp</i>FOODS</h1>
              <div class="card__body">
                <div class="card__name">
                 <ul>
                  ${menus.foods.map((food) => `
                      <li class="card__text">${food.name}</li>
                  `).join('')}
                 </ul>
                </div>
              </div>
            </div> 

            <div class="card__menu drinks">
              <h1><i class="fa fa-mug-hot">&nbsp&nbsp&nbsp</i>DRINKS</h1>
              <div class="card__body">
                <div class="card__name">
                  <ul>
                    ${menus.drinks.map((drink) => `
                        <li class="card__text">${drink.name}</li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div> 
            
            <div class="card__menu comment">
              <h1><i class="far fa-comment-dots">&nbsp&nbsp&nbsp</i>Give Your Riview </h1>
              <div class="card__body">
                <form id="form__review">
                  <div>Name : </div>
                  <input id="yourname" name="name" type="text" class="input__input" placeholder="Masukan Nama Mu"/>
                  <div>Review : </div>
                  <textarea rows="5" id="reviewtxt" name="reviewtxt" type="text" class="input__input" placeholder="Masukan Review Mu"></textarea>
                  <button id="reviewsubmit" class="btn" type="submit"><i class="fa fa-paper-plane"></i>&nbsp&nbspPost Review</button>    
                </form>
              </div>
            </div> 

           </div>
        </div>

        <input type="radio" name="tabs" id="tabtwo">
        <label for="tabtwo" id="reviewlbl">Review</label>
        <div class="tab">
          <h1>${customerReviews.length} Komentar</h1>
          <div class="user__review">
          ${customerReviews.map((review) => `
                  <div class="user__name square">
                    <b>${review.name}</b> <span>${review.date}</span>
                    <p id="yourreview">
                      ${review.review}
                    </p>
                  </div>
          `).join('')}
                  
           </div>
        </div>
        
       </div>
    `;
  }
}

customElements.define('detail-item', DetailItem);
