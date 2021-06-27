/* eslint-disable no-undef */
Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review 1 restaurants', ({ I }) => {
  const firstRestaurant = locate('restaurant-item a').first();

  I.click(firstRestaurant);

  I.seeElement('#yourname');
  I.seeElement('#reviewtxt');

  I.fillField('#yourname', 'Review e2e');
  I.fillField('#reviewtxt', 'Review e2e');

  I.click('#reviewsubmit');

  I.amOnPage('/');
});

Scenario('review 3 restaurants', ({ I }) => {
  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('restaurant-item a').at(i));
    I.seeElement('#yourname');
    I.click('#reviewtxt');
    I.fillField('#yourname', 'Review e2e');
    I.fillField('#reviewtxt', 'Review e2e');
    I.click('#reviewsubmit');
    I.amOnPage('/');
  }
});
