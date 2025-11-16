// Применение сохранённой темы при загрузке
(function applySavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }
})();

// Переключение темы
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    animateThemeTransition();
    updateThemeIcon(isDark);
}

// Анимация затемнения
function animateThemeTransition() {
    const overlay = document.createElement('div');
    overlay.className = "theme-fade";
    document.body.appendChild(overlay);

    setTimeout(() => overlay.classList.add("fade-out"), 20);
    setTimeout(() => overlay.remove(), 400);
}

// Обновление иконки + положения переключателя
function updateThemeIcon(isDark){
    const switcher = document.querySelector(".theme-switch");
    const icon = document.querySelector(".theme-icon");

    if (isDark){
        icon.textContent = "🌙";
        switcher.classList.add("active");
    } else {
        icon.textContent = "☀️";
        switcher.classList.remove("active");
    }
}

