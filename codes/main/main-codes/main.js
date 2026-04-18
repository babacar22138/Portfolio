
// --------- Loader ------------

function ecritLogin() {

    identifant.classList.add('curseur');
    if (index < loginContent.length) {
        identifant.textContent += loginContent.charAt(index);
        index++;
        setTimeout(ecritLogin, 70);
    } else {
        setTimeout(ecritPassword, 1200);
    }
}

function ecritPassword() {

    identifant.classList.remove('curseur');
    password.classList.add('curseur');
    if (index2 < passwordContent.length) {
        password.textContent += passwordContent.charAt(index2);
        index2++;
        setTimeout(ecritPassword, 70);
    } else {
        setTimeout(welcome, 2200);
        identifant.classList.remove('curseur');
    }
}

function welcome() {
    password.classList.remove('curseur');
    welcome1.classList.add('curseur');
    if (index3 < welcomeContent.length) {
        welcome1.textContent += welcomeContent.charAt(index3);
        index3++;
        setTimeout(welcome, 70);
    } else {
        setTimeout(startApp, 1100);
    }
}


setTimeout(ecritLogin, 1000);

function startApp() {
    // 1. On cache le loader
    loader.classList.add('loader-hidden');

    setTimeout(() => {
        content.style.opacity = "1";
    }, 400);
    setTimeout(acceuilVisible, 400);
}

// --------------------------------------------------------- apparition des sections après scroll --------------------------------------------------------------------- 

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll(".competences-outils,.titre, .a_propos, .projets, .contact, .cards, .form, .projet");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.style.opacity = "1";
        }
    });
});


// -------------------------------------------------------------------- à propos ----------------------------------------------------------------------------

const paragraphe_content = document.getElementById('paragraphe');
const infos = document.getElementById('infos');
const centreInteret = document.querySelector('.centre_interet');
const objectif = document.querySelector('.objectif');
const soft_skills = document.querySelector('.soft_skills');
console.log(paragraphe_content, infos, centreInteret, objectif ,soft_skills);

function apparitionParagraphe() {
    paragraphe_content.style.opacity = '1';

    setTimeout(() => {
        apparitionInfos();
    }, 300);
}

function apparitionInfos(){
    centreInteret.style.opacity = '1';

    setTimeout(() => {
        objectif.style.opacity = '1';
    }, 300);

    setTimeout(() => {
        soft_skills.style.opacity = '1';
    }, 600);

}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            apparitionParagraphe();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1.0 });

if (paragraphe_content) {

    observer.observe(paragraphe_content);

} 

// -----------------------------------------------------compétences et outils-----------------------------------------------------------------


const cardsContainer = document.querySelector('.container-cards');
const allIcons = document.querySelectorAll('.icons');


allIcons.forEach(icon => {
    icon.style.opacity = "0";
    icon.style.transform = "translateY(30px)";
    icon.style.transition = "opacity 0.6s ease-in, transform 1.0s ease-in";
});

const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            allIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.opacity = "1";
                    icon.style.transform = "translateY(0)";
                }, index * 100);
            });
            cardsObserver.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.2
});

if (cardsContainer) {
    cardsObserver.observe(cardsContainer);
}


// -----------------------------------------------------Loader avant l'ouverture de la page-----------------------------------------------------------------

const identifant = document.getElementById('identifiant');
const password = document.getElementById('mdp');
const welcome1 = document.getElementById('welcome');
const loader = document.getElementById('loader');
const content = document.getElementById('main-content');
const loginContent = "Babacar.Sow";
const passwordContent = "************";
const welcomeContent = "Welcome to my portfolio !";
let index = 0;
let index2 = 0;
let index3 = 0;




// ---------------------------------------------------------------- acceuil visible apères loader ---------------------------------------------------------------

function acceuilVisible() {
    const acceuil = document.querySelector('.acceuil');
    acceuil.classList.add('visible');
    setTimeout(apparition, 300);
}

const h3Content1 = 'Je suis ';
const h3Content2 = ', étudiant en BUT informatique.';
const spanPresentationContent = 'développeur web junior';

const partie1 = document.getElementById('partie1');
const partie2 = document.getElementById('partie2');
const spanPresentation = document.getElementById('spanPresentation');
console.log(h3Presentation, spanPresentation);
let index4 = 0;
let index5 = 0;
let index6 = 0;

function ecrireh3e1() {
    partie1.classList.add('curseur');
    if (index4 < h3Content1.length) {
        partie1.textContent += h3Content1.charAt(index4);
        index4++;
        setTimeout(ecrireh3e1, 70);
    } else {
        partie1.classList.remove('curseur');
        setTimeout(ecrireSpan, 300);
    }
}

function ecrireSpan() {
    spanPresentation.classList.add('curseur');
    if (index5 < spanPresentationContent.length) {
        spanPresentation.textContent += spanPresentationContent.charAt(index5);
        index5++;
        setTimeout(ecrireSpan, 70);
    } else {
        spanPresentation.classList.remove('curseur');
        setTimeout(ecrirh3e2, 300);
    }
}

function ecrirh3e2() {
    partie2.classList.add('curseur');
    if (index6 < h3Content2.length) {
        partie2.textContent += h3Content2.charAt(index6);
        index6++;
        setTimeout(ecrirh3e2, 70);
    }
}

// --------------------------------------------------------- apparition des éléments de l'accueil ----------------------------------------------------------------


console.log(paragraphe_content);
const h2 = document.querySelector('.prenom-nom');
const reseaux = document.querySelector('.reseaux-acceuil')
const photo = document.getElementById('photo-profil');
const h3 = document.querySelector('.presentation h3');
const btnT = document.getElementById('btn-telecharger');
const btnC = document.getElementById('btn-contact');
console.log(h3);
console.log(photo);


function apparition() {
    photo.style.opacity = '1';

    setTimeout(() => {
        h2.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        h3.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        btnT.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        btnC.style.opacity = "1";
    }, 900);
    ecrireh3e1();
}



const sectionsAfter = document.querySelectorAll('.a_propos, .competences-outils, .contact, .projets');

const afterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            afterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

sectionsAfter.forEach(section => afterObserver.observe(section));

// --------------------------------------------------------------- background ----------------------------------------------------------------------------------

particlesJS("particles-js", { "particles": { "number": { "value": 90, "density": { "enable": true, "value_area": 10000 } }, "color": { "value": "#efebe2" }, "shape": { "type": "polygon", "stroke": { "width": 1, "color": "#3fa9f5" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 73.08694910712106, "size_min": 20.301930307533627, "sync": true } }, "line_linked": { "enable": true, "distance": 180, "color": "#ffffff", "opacity": 0.10422178395625899, "width": 1 }, "move": { "enable": true, "speed": 10, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 1200, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;