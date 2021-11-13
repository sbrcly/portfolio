const nav = document.querySelector('.nav');


if (window.innerWidth > 540) {
    nav.addEventListener('mouseenter', () => {
        nav.classList.toggle('showHome');
        nav.classList.toggle('hideHome');
    })
    
    nav.addEventListener('mouseleave', () => {
        nav.classList.toggle('hideHome');
        nav.classList.toggle('showHome');
    })
}   else {
    nav.classList.remove('hideHome');
    nav.classList.add('showHome');
}


const themeToggler = document.querySelector('.themeOverlay');
const mainContent = document.querySelector('main');
const allNotesBtn = document.querySelectorAll('.allNotes');
const header = document.querySelector('header');

themeToggler.addEventListener('click', () => {
    mainContent.classList.toggle('darkMode');
    themeToggler.classList.toggle('darkMode');
    themeToggler.parentElement.classList.toggle('darkMode');
    document.body.classList.toggle('darkMode');
});