const hum = document.querySelector('#open');
const close = document.querySelector('#close');
const navBar = document.querySelector('.nav__');
const hidden = document.querySelector('.hidden');
const removeHidden = () => hidden.classList.remove('.hidden');
const navToggle = () => navBar.classList.toggle('active');
hum.addEventListener('click',navToggle);
close.addEventListener('click',() => {
    navToggle();
    removeHidden();
});