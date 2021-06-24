import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/home.css';
import '../styles/responsive.css';
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
