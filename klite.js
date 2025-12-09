class SpecialHeader extends HTMLElement {
  ConnectedCallback() {
    this.innerHTML = `<div class="header" id="header" style=" display: flex;
  justify-content: space-between;
  /* position: fixed; */
  position: sticky;">
        <div class="logo">
          <a href="#">
            <img src="Image/klitelogo.png" alt="" />
          </a>
        </div>
        <div class="top-nav">
          <a href="#about">ABOUT US</a>
          <a href="">PROJECTS</a>
          <a href="">PRODUCTS</a>
          <a href="">DOWNLOADS</a>
          <a href="">CONTACT</a>
          <span><i class="fa-solid fa-magnifying-glass"></i></span>
          <!-- <a href="">ABOUT US</a> -->
        </div>
        </div>`;
  }
}
