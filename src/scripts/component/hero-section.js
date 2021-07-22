class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
                <div class="hero__inner">
                    <!-- Picture From https://www.freepik.com/free-vector/happy-male-chef-holding-ramen-noodle-cartoon-icon-illustration_11787945.htm --> 
                    <img width="720" height="720" class="hero__img" src="../images/logo.png" alt="logo" > 
                    <div class="hero__text">
                            <h1>Selamat Datang </h1>
                            <p>Daftar Restaurant Terbaik SeIndonesia</p>
                    </div>
                </div> 
        </div>
    `;
  }
}
customElements.define('hero-section', Hero);
