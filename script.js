'use strict';

let body;
let modal;
let overlay;
let closeModalBtn;
let showModalBtns;

main();

function main() {
    init();
    setUpClickListeners();
}

function init() {
    modal = document.querySelector('.modal');
    overlay = document.querySelector('.overlay');
    closeModalBtn = document.querySelector('.close-modal');
    showModalBtns = [...document.querySelectorAll('.show-modal')];
}

function setUpClickListeners() {
    closeModalBtn.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modalIsOpen()) {
            console.log('Closing modal!');
            hideModal();
        }
    });
    showModalBtns.forEach(btn => {
        btn.addEventListener('click', showModal);
    });
}

function modalIsOpen() {
    return !(
        modal.classList.contains('hidden') &&
        overlay.classList.contains('hidden')
    );
}

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
