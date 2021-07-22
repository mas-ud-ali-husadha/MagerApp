/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');
});

Scenario('liking  restaurant and unlike  restaurant', async ({ I }) => {
  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');

  I.amOnPage('/');

  for (let i = 1; i <= 3; i += 1) {
    I.seeElement('restaurant-item a');
    const Restaurant = locate('.card__text').at(i);
    const RestaurantText = await I.grabTextFrom(Restaurant);

    I.click(Restaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-item a');
    const favoriteRestaurant = locate('.card__text').first();
    const FavoritedRestaurantText = await I.grabTextFrom(favoriteRestaurant);
    assert.strictEqual(RestaurantText, FavoritedRestaurantText);

    I.click(favoriteRestaurant);

    I.click('#likedButton');

    I.amOnPage('/#/favorite');

    I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');
    I.amOnPage('/');
  }
});
