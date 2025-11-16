class Profile {
  render(){
    const root = document.getElementById('profile-root');
    if(!root) return;
    const p = localStorageUtil.getProfile();
    root.innerHTML = `<div class="profile-box">
      <img src="${encodeURI(p.avatar)}" style="width:80px;height:80px;border-radius:50%;display:block;margin-bottom:10px">
      <div style="margin-bottom:8px">Имя</div>
      <input id="profile-name" value="${p.name}" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:8px">
      <div style="display:flex;gap:8px">
        <button class="btn add" onclick="saveProfile()">Сохранить</button>
        <button class="btn" onclick="resetProfile()">Сбросить</button>
      </div>
    </div>`;
    headerPage.render();
  }
}
const profilePage = new Profile();

function saveProfile(){
  const name = document.getElementById('profile-name').value || 'Гость';
  localStorageUtil.saveProfile({ name, avatar: 'img/avatar.png' });
  alert('Профиль сохранён');
}
function resetProfile(){
  localStorageUtil.saveProfile({ name: 'Гость', avatar: 'img/avatar.png' });
  profilePage.render();
}
