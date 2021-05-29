const LoaderInitiator = {
  add(element) {
    this._loader(element);
  },
  remove() {
    this._loaderRemove();
  },
  _loader(element) {
    const elem = element;
    elem.innerHTML = `
        <div id="loader" class="loader">
            <img src="./images/loader.gif" />
        </div> 
    `;
  },
  _loaderRemove() {
    document.querySelector('.loader').remove();
  },
};

export default LoaderInitiator;
