class Footer {
  render(){
    const html = `<footer class="footer card">© 2025 MyShop — Все права защищены.  <a href="#" onclick="renderPage('catalog')">Каталог</a> ----- <a href="#" onclick="renderPage('favorites')">Желания</a></footer>`;
    ROOT_FOOTER.innerHTML = html;
  }
}
const footerPage = new Footer();
footerPage.render();
