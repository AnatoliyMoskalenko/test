'use strict';


let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    liMenu = document.createElement('li'),
    title = document.getElementById('title'),
    reklama = document.querySelector('.adv'),
    promptDiv = document.querySelector('#prompt'),
    promptText = prompt('Как вы относитесь к технике apple?', '');

liMenu.classList.add('menu-item')
liMenu.textContent = 'Пятый пункт';

menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(liMenu);

document.body.style.background = 'url("img/apple_true.jpg")';

title.textContent = 'Получится - "Мы продаем только подлинную технику Apple"';

reklama.remove();

promptDiv.textContent = promptText;

console.log(menuItem);