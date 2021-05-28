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
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/service-worker.js').then((registration) => {
  //     console.log('SW registered: ', registration);
  //   }).catch((registrationError) => {
  //     console.log('SW registration failed: ', registrationError);
  //   });
  // }
});
