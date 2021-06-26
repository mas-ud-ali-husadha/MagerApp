const SkeletonLoader = {
  homeLoader(elem) {
    this._elem = elem;
    for (let i = 1; i <= 6; i += 1) {
      this._loader = document.createElement('div');
      this._loader.className = 'card__menu card_skeleton_loader_home';
      this._renderLoader(this._loader);
    }
  },
  detailLoader(elem) {
    this._elem = elem;
    this._class = ['card__menu card_skeleton_loader_detail_img',
      'card_skeleton_loader_detail_description'];
    this._class.forEach((classname) => {
      this._loader = document.createElement('div');
      this._loader.className = classname;
      this._renderLoader(this._loader);
    });
  },
  _renderLoader(loader) {
    this._elem.append(loader);
  },
  remove(elem) {
    const element = elem;
    element.innerHTML = '';
  },
};

export default SkeletonLoader;
