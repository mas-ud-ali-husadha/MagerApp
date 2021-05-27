import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../component/app-bar';
import '../component/hero-section';

class App {
  constructor({
    button, drawer, body, navbar, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._body = body;
    this._content = content;
    this._navbar = navbar;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._body,
      navbar: this._navbar,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
