class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="nav" >
            <a id="home" href="/" class="nav__brand" tabindex="2">Mager </a><br>
            <ul  id="drawer"  class="nav__list" >
                <li class="nav__item" id="home"><a href="/">Home</a> </li>
                <li class="nav__item" id="favorite"><a href="#">Favorite</a> </li>
                <li class="nav__item" id="about"><a href="https://github.com/mas-ud-ali-husadha/">About Us</a> </li>
            </ul>
            <button id="menu" tabindex="3" class="header__menu">☰</button> 
         </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
