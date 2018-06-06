//2.1 Восстановить порядок в меню, добавить пятый пункт
let menu = document.getElementsByClassName('menu')[0];

let itemMenu_0 = document.getElementsByClassName('menu-item')[0]; //Первый пункт

let itemMenu_1 = document.getElementsByClassName('menu-item')[2]; //Второй пункт

let itemMenu_2 = document.getElementsByClassName('menu-item')[1]; //Третий пункт

let el = document.getElementsByClassName('menu-item')[1]; //элемент для клонирования

let cloneEl = el.cloneNode(); //клон

menu.insertBefore(itemMenu_1, itemMenu_2); //делаем по порядку меняем третий (2-й по счету пункт на второй)

cloneEl.textContent = 'Пятый элемент'; //клону меняем текст
menu.appendChild(cloneEl); // вставляем 5 пункт в меню


//2.2 Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(img/apple_true.jpg';

//2.3  Поменять заголовок, добавить слово "подлинную"
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple ';

//2.4  Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv.remove();

//2.5 Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let question = prompt('Как относитесь к технике apple');
let answer = document.querySelector('#prompt').textContent = question;

