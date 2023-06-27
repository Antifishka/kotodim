// Siema
const slider = document.querySelector('.hero__list');
const prev = document.querySelector('.hero__btn--prev');
const next = document.querySelector('.hero__btn--next');

const mySiema = new Siema({
    selector: slider,
    duration: 1000,
    easing: 'cubic-bezier(.17,.67,.32,1.34)',
    loop: true,
    onInit: () => { console.log("Siema work!")},
});

prev.addEventListener('click', onPrevClick)
next.addEventListener('click', onNextClick);

function onPrevClick() {
    mySiema.prev();
};

function onNextClick() {
    mySiema.next();
};

// SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    closeText: '&#128420;',
});

// AOS
AOS.init();







