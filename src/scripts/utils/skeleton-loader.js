const SkeletonLoader = {
  init(elem){
    this._elem = elem;
    for(let i = 1; i<=6;i++){
        this._loader = document.createElement("div");
        this._loader.className = 'card__menu card_skeleton_loader_home';
        this._renderLoader(this._loader);
    }
  },
  _renderLoader(loader){
    this._elem.append(loader);
  },
  // onLoadHome(element) {
  //   this._Homeloader(element);
  // },
  // removeonLoadHome() {
  //   this._HomeloaderRemove();
  // },
  // _Homeloader(element) {
  //   const elem = element;
    
  // },
  remove() {
    document.querySelector('restaurant-list').innerHTML = "";
  },
};

export default SkeletonLoader;
