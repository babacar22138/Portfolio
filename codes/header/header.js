const burgerMenu = document.querySelector('header');

const closeBtn = burgerMenu.querySelector('a.close-btn');

const openBtn = document.querySelector('a.open-btn');

const liens = document.querySelectorAll('.nav a, #btn-contact');
console.log(liens)

openBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.add('visible');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.remove('visible');
});

const menuMobile = document.querySelector('header');

liens.forEach(lien => {
    lien.addEventListener('click', () => {
        menuMobile.classList.remove('visible');
        console.log("Menu fermé ");
    });
});