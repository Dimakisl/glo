//2.1 Получить кнопку "Открыть магазин" через id
let btn = document.getElementById('open-btn');
console.log('btn');

//2.2  Получить все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value').value;
let budgetValue = document.getElementsByClassName('budget-value').value;
let goodsValue = document.getElementsByClassName('goods-value').value;
let itemsValue = document.getElementsByClassName('items-value').value;
let employersValue = document.getElementsByClassName('employers-value').value;
let discountValue = document.getElementsByClassName('discount-value').value;

//2.3 Получить все 3 кнопки через Tag
let btn1 = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[1];
let btn3 = document.getElementsByTagName('button')[2];
console.log(btn1, btn2, btn3);


//2.4  Получить поля ввода товаров, времени и расчета бюджета через querySelector
let goods1  = document.querySelectorAll('goods-item')[0].value;
let goods2  = document.querySelectorAll('goods-item')[1].value;
let goods3  = document.querySelectorAll('goods-item')[2].value;
let goods4  = document.querySelectorAll('goods-item')[3].value;

let localTIme = document.querySelector('#time');

//2.5 Получить поля имен сотрудников через querySelectorAll
let emp1 = document.querySelector('#employers_1').value;
let emp2 = document.querySelector('#employers_2').value;
let emp3 = document.querySelector('#employers_3').value;

console.log(emp1);

