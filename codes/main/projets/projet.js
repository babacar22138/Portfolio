const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('.img');
const h2_details = document.querySelector('h2');
const img_langage = document.querySelector('.langage')
const btn_details = document.querySelector('.btn-voir');
console.log(h1, p, h2_details, img_langage, btn_details)

function apparitionContenu() {
    h1.style.opacity = '1';
    
    setTimeout(() => {
        p.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        img.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        h2_details.style.opacity = "1";
    }, 300);


    setTimeout(() => {
        img_langage.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        btn_details.style.opacity = "1";
    }, 600);

}

apparitionContenu();