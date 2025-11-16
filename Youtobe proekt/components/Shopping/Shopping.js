class Shopping {
  render(){
    const root = document.getElementById('shopping-root');
    if(!root) return;
    const productsIds = localStorageUtil.getProducts();
    if(productsIds.length === 0){
      root.innerHTML = `<div class="card"><h3>Корзина пуста</h3><p>Добавьте товары из каталога.</p></div>`;
      headerPage.render();
      return;
    }

    let html = '<div class="card">';
    let sum = 0;
    productsIds.forEach(id => {
      const it = CATALOG.find(x => x.id === id);
      if(!it) return;
      const imgSrc = encodeURI(it.img);
      sum += it.price;
      html += `<div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
        <img src="${imgSrc}" style="width:90px;height:70px;object-fit:cover;border-radius:8px">
        <div style="flex:1"><b>${it.name}</b><div>${it.price.toLocaleString()} so'm</div></div>
        <button class="btn remove" onclick="removeFromCart('${it.id}')">Удалить</button>
      </div>`;
    });
    html += `<hr><div style="text-align:right;font-weight:700">Итого: ${sum.toLocaleString()} so'm</div>`;
    html += `<div style="margin-top:12px;display:flex;gap:8px"><button class="btn" onclick="clearCart()">Очистить корзину</button><button class="btn add" onclick="checkout()">Оформить заказ</button></div>`;
    html += '</div>';
    root.innerHTML = html;
    headerPage.render();
  }
}
const shoppingPage = new Shopping();

function removeFromCart(id){
  localStorageUtil.putProducts(id);
  shoppingPage.render();
  const cnt = localStorageUtil.getProducts().length;
  const el = document.getElementById('cart-count'); if(el) el.textContent = cnt;
}
function clearCart(){
  localStorage.setItem(localStorageUtil.productsKey || 'products', JSON.stringify([]));
  shoppingPage.render();
  headerPage.render();
}
function checkout(){
  alert('Спасибо за заказ! (демо)');
  clearCart();
}
