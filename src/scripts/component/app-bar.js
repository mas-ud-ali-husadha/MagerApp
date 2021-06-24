class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="nav" >
            <a id="brand" href="/" class="nav__brand" tabindex="0">Mager </a><br>
            <ul  id="drawer"  class="nav__list" >
                <li class="nav__item" id="home"><a href="/">Home</a> </li>
                <li class="nav__item" id="favorite"><a href="/#/favorite">Favorite</a> </li>
                <li class="nav__item" id="about"><a href="https://github.com/mas-ud-ali-husadha/">About Us</a> </li>
            </ul>
            <button id="menu" tabindex="0" class="header__menu">☰</button> 
         </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
