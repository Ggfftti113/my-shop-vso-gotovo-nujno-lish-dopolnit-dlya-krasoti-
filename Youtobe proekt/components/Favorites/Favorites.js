class Favorites {
  render(){
    const root = document.getElementById('favorites-root');
    if(!root) return;
    const fav = localStorageUtil.getFavorites();
    if(fav.length === 0){
      root.innerHTML = `<div class="card"><h3>Список желаний пуст</h3></div>`;
      headerPage.render(); return;
    }
    let html = '<div>';
    fav.forEach(id => {
      const it = CATALOG.find(x => x.id === id);
      if(!it) return;
      const imgSrc = encodeURI(it.img);
      html += `<div class="fav-item">
        <img src="${imgSrc}" class="fav-img">
        <div style="flex:1"><b>${it.name}</b><div class="price">${it.price.toLocaleString()} so'm</div></div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn add" onclick="addFromFavToCart('${it.id}')">Добавить в корзину</button>
          <button class="btn" onclick="toggleFavoriteAndRefresh('${it.id}')">Удалить</button>
        </div>
      </div>`;
    });
    html += '</div>';
    root.innerHTML = html;
    headerPage.render();
  }
}
const favoritesPage = new Favorites();

function addFromFavToCart(id){
  localStorageUtil.putProducts(id);
  headerPage.render();
  // don't auto-redirect; user can open cart
}
function toggleFavoriteAndRefresh(id){
  localStorageUtil.toggleFavorite(id);
  favoritesPage.render();
}
