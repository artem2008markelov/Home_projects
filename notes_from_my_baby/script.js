const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const content = document.getElementById('content');
const settings_btn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settings_close_btn = document.getElementById('close_settings')

let count = 0;

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    content.classList.toggle('shifted');
});

settings_btn.addEventListener('click', () => {
    settings.classList.toggle('active');
});

settings_close_btn.addEventListener('click', () => {
    settings.classList.toggle('active')
});
