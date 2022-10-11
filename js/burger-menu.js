export const burgerMenu = () => {
        // console.log(menu);
        menu.querySelector('#menu__bar').classList.toggle('change');
        menu.querySelector('#nav').classList.toggle('change');
        document.querySelector('#menu__bg').classList.toggle('change-bg');
}