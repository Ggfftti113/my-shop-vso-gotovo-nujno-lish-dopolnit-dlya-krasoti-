class LocalStorageUtil {
  constructor() {
    this.productsKey = 'products';
    this.favoritesKey = 'favorites';
    this.profileKey = 'profile';
  }

  // Cart
  getProducts() {
    return JSON.parse(localStorage.getItem(this.productsKey) || '[]');
  }
  putProducts(id) {
    const arr = this.getProducts();
    const idx = arr.indexOf(id);
    let added = false;
    if(idx === -1){ arr.push(id); added = true; } else { arr.splice(idx,1); }
    localStorage.setItem(this.productsKey, JSON.stringify(arr));
    return { added, products: arr };
  }

  // Favorites
  getFavorites() {
    return JSON.parse(localStorage.getItem(this.favoritesKey) || '[]');
  }
  toggleFavorite(id) {
    const arr = this.getFavorites();
    const idx = arr.indexOf(id);
    let added = false;
    if(idx === -1){ arr.push(id); added = true; } else { arr.splice(idx,1); }
    localStorage.setItem(this.favoritesKey, JSON.stringify(arr));
    return added;
  }

  // Profile
  getProfile() {
    return JSON.parse(localStorage.getItem(this.profileKey) || JSON.stringify({ name: 'Гость', avatar: 'img/avatar.png' }));
  }
  saveProfile(profileObj) {
    localStorage.setItem(this.profileKey, JSON.stringify(profileObj));
  }
}

const localStorageUtil = new LocalStorageUtil();
