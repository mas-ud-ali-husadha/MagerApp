const DrawerInitiator = {
  init({
    button, drawer, content, navbar,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this._toggleDrawer(event, drawer);
      }
    });

    button.addEventListener('focus', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    window.addEventListener('scroll', () => {
      this._colorDrawer(navbar);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _colorDrawer(navbar) {
    const nav = navbar;
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0)';
    }
  },

};

export default DrawerInitiator;
