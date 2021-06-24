Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Anda Belum Memiliki Restaurant Favorit', '.restaurant_empty_text');
});

Scenario('liking 1 restaurant', async ({ I }) =>{
  I.see('Anda Belum Memiliki Restaurant Favorit', '.restaurant_empty_text');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  const firstRestaurant = locate('.card__text').first();
  
  I.click(firstRestaurant);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');

});

Scenario('liking 3 restaurant', async ({ I }) => {
  I.see('Anda Belum Memiliki Restaurant Favorit', '.restaurant_empty_text');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  for(let i = 1; i <= 3 ; i++){
    I.click(locate('restaurant-item a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
  }
  I.amOnPage('/#/favorite');

});

