/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');
});

Scenario('liking 1 restaurant and unlike 1 restaurant', ({ I }) => {
  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  const firstRestaurant = locate('.card__text').first();

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('restaurant-item a');

  const favoriteRestaurant = locate('.card__text').first();

  I.click(favoriteRestaurant);

  I.click('#likedButton');

  I.amOnPage('/#/favorite');

  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');
});

Scenario('liking 3 restaurant and unlike 1 restaurant', ({ I }) => {
  I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('restaurant-item a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');

    I.seeElement('restaurant-item a');

    const favoriteRestaurant = locate('restaurant-item a').first();

    I.click(favoriteRestaurant);

    I.click('#likedButton');

    I.amOnPage('/#/favorite');

    I.see("Your don't have any favorite Restaurant yet", '.restaurant_empty_text');
    I.amOnPage('/');
  }
  I.amOnPage('/');
});
