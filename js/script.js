import { burgerMenu } from "./burger-menu.js";
import { sendForm } from "./formulario.js";

const menu = document.querySelector('#menu');
const formBtn = document.querySelector('.form__btn');

menu.addEventListener('click',burgerMenu);

formBtn.addEventListener('click',sendForm);

