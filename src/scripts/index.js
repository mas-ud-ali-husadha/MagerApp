import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const drawer = document.querySelector('#drawer');
const content = document.querySelector('#content');
const nav = document.querySelector('.nav');

const app = new App({
  button: menu,
  drawer,
  body,
  navbar: nav,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
// let card = "";
// data.restaurants.forEach((data)=>{
//     card += `<div class="card__menu">
//                 <div class="rating">⭐️: ${data.rating}</div>
//                 <img src="${data.pictureId}" alt="${data.pictureId}">
//                 <div class="card__body">
//                     <h4 class="card__name">
//                          <div class="card__text"> ${data.name} </div>
//                         <div class="location" >Kota ${data.city}</div>
//                     </h4>
//                     <p>${data.description}</p>
//                 </div>
//             </div>`
// })

// document.querySelector('#menu__grid').innerHTML = card
