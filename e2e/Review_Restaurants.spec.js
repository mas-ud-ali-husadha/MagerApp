/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review 1 restaurants', async ({ I }) => {
  const firstRestaurant = locate('restaurant-item a').first();

  I.click(firstRestaurant);

  I.seeElement('#yourname');
  I.seeElement('#reviewtxt');

  I.fillField('#yourname', 'Review e2e');
  I.fillField('#reviewtxt', 'Review e2e');

  const url = await I.grabCurrentUrl();
  const reviewedText = await I.grabValueFrom('#reviewtxt');
  I.click('#reviewsubmit');
  I.amOnPage(url);
  I.seeElement('#reviewlbl');
  I.click('#reviewlbl');
  const yourreview = await I.grabTextFrom(locate('#yourreview').last());
  assert.strictEqual(reviewedText, yourreview);
});

Scenario('review 3 restaurants', async ({ I }) => {
  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('restaurant-item a').at(i));
    I.seeElement('#yourname');
    I.click('#reviewtxt');
    I.fillField('#yourname', 'Review e2e');
    I.fillField('#reviewtxt', 'Review e2e');
    const url = await I.grabCurrentUrl();
    const reviewedText = await I.grabValueFrom('#reviewtxt');
    I.click('#reviewsubmit');
    I.amOnPage(url);
    I.seeElement('#reviewlbl');
    I.click('#reviewlbl');
    const yourreview = await I.grabTextFrom(locate('#yourreview').last());
    assert.strictEqual(reviewedText, yourreview);
    I.amOnPage('/');
  }
});
