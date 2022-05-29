//zmieniające się ikony w sekcji pierwszej

const icons = document.querySelectorAll(".section-1-icons i");

let i = 1;

setInterval(() => {
    i++;

    const icon = document.querySelector(".section-1-icons .change");

    icon.classList.remove("change");

    if(i > icons.length)
    {
        icons[0].classList.add("change");
        i = 1;
    }
    else
    {
        icon.nextElementSibling.classList.add("change");
    }

}, 3500);

//menu 

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    });
});

//scroll

//do sekcji 1

const start = document.getElementById('home');
const sekcja1 = document.querySelector('.section-1');

start.addEventListener('click', () => {
    sekcja1.scrollIntoView(true);
})

//do sekcji 2

const atrakcje = document.getElementById('atrakcje');
const sekcja2 = document.querySelector('.section-2');

atrakcje.addEventListener('click', () => {
      sekcja2.scrollIntoView(true);
})

//do sekcji 3

const galeria = document.getElementById('galeria');
const sekcja3 = document.querySelector('.section-3');

galeria.addEventListener('click', () => {
    sekcja3.scrollIntoView(true);
})

//do sekcji 4

const faq = document.getElementById('faq');
const sekcja4 = document.querySelector('.section-4');

faq.addEventListener('click', () => {
    sekcja4.scrollIntoView(true);
})

//do sekcji 5

const kontakt = document.getElementById('kontakt');
const sekcja5 = document.querySelector('.section-5');

kontakt.addEventListener('click', () => {
    sekcja5.scrollIntoView(true);
})

//Koniec automatycznego scrolla 

//faq 

const toggless = document.querySelectorAll(".faq-toggle");

toggless.forEach((toggle)  => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});