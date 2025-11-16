class Products {
  render(){
    const container = document.getElementById('products-root');
    if(!container) return;
    const productsInCart = localStorageUtil.getProducts();
    const favorites = localStorageUtil.getFavorites();

    let html = '<div class="products-grid">';
    CATALOG.forEach(item => {
      const inCart = productsInCart.includes(item.id);
      const isFav = favorites.includes(item.id);
      // use encodeURI for src so spaces work
      const imgSrc = encodeURI(item.img);

      html += `
        <div class="card">
          <img src="${imgSrc}" alt="${item.name}">
          <h4>${item.name}</h4>
          <div class="price">${item.price.toLocaleString()} so'm</div>
          <button class="btn ${inCart ? 'remove' : 'add'}" onclick="handleCart('${item.id}', this)">${inCart ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
          <div style="height:8px"></div>
          <button class="btn" onclick="handleFavorite('${item.id}', this)">${isFav ? '★ В избранном' : '☆ В избранное'}</button>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
    headerPage.render();
  }
}
const productsPage = new Products();

// global helper functions used in inline onclick
function handleCart(id, btn){
  const { added, products } = localStorageUtil.putProducts(id);
  if(added){ btn.classList.remove('add'); btn.classList.add('remove'); btn.textContent = 'Удалить из корзины'; }
  else { btn.classList.remove('remove'); btn.classList.add('add'); btn.textContent = 'Добавить в корзину'; }
  const countEl = document.getElementById('cart-count'); if(countEl) countEl.textContent = products.length;
}

function handleFavorite(id, btn){
  const added = localStorageUtil.toggleFavorite(id);
  btn.textContent = added ? '★ В избранном' : '☆ В избранное';
}
