let budget,
    nameShop,
    time,
    price;


let span = document.getElementsByTagName('span');


//3 Создать объект mainList
const  mainList = {
    budgetMonth: budget,
    nameShop: nameShop,
    shopGoods: [],
    shopItems: [],
    employers: {},
    open: false,
    discount: true,
    price: 10000,
    disc: 80

};
//  Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods

let answer;
/*
for(let i = 0; i <=2; i++){
    answer = prompt('Какой тип товаров будем продавать?');
    alert(answer);
    if (answer != null && typeof answer !== "undefined") {
        mainList.shopGoods.push(answer);
     }
     
     if (!answer) { 
        alert('Ошибка пустое значeние');
     }
}

let i = 0;
while(i < 3){
    answer = prompt('Какой тип товаров будем продавать?').trim();

    if(answer){
        mainList.shopGoods.push(answer);
        i++;
    }
     
    if (!answer || answer == null) { 
        alert('Ошибка пустое значeние');
        i--;
        if(i <= 0){
            i = 0;
        }
    }
    }
*/


//----------------------------


//3.2 Создать функцию дисконтной системы
function disc(price, discount, disc) {
if(discount)
{
    price = price - (price * 80 / 100);
}

console.log('Цена товара со скидкой: ' + price);
}
disc(mainList.price, mainList.discount, mainList.disc);






//2.1 Получить кнопку "Открыть магазин" через id
let open_btn = document.getElementById('open-btn');

//2.2  Получить все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];

//2.3 Получить все 3 кнопки через Tag
let goods_btn = document.getElementsByTagName('button')[1];
let budget_btn = document.getElementsByTagName('button')[2];
let employers_btn = document.getElementsByTagName('button')[3];
let countBudgetValue = document.querySelector('.count-budget-value');

let chooseItem = document.querySelector('.choose-item');

let isopenValue = document.getElementsByClassName('isopen-value')[0];

//2.4  Получить поля ввода товаров, времени и расчета бюджета через querySelector
let goods_item  = document.querySelectorAll('.goods-item');

let localTime = document.querySelector('#time');

//2.5 Получить поля имен сотрудников через querySelectorAll
let hireEmployersItem = document.querySelectorAll('.hire-employers-item');



open_btn.addEventListener('click', () => {
    budget = +prompt('Ваш бюджет на месяц');

    while(isNaN(budget) || budget == '' || budget == null){
        budget = +prompt('Ваш бюджет на месяц');
    }
    budgetValue.textContent = budget;

    nameValue.textContent = prompt('Название вашего магазина');
});

goods_btn.addEventListener('click', () => {
    for(let i = 0; i < goods_item.length; i++){
        let a = goods_item[i].value;
        if((typeof (a)) == 'string' && (typeof(a)) != null && a.length < 50){
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        } else{
            i = i - 1;
        }
    }
});

chooseItem.addEventListener('change', () => {
    let items = chooseItem.value;

    if(isNaN(items) && items != ''){
        mainList.shopItems = items.split(', ');
        mainList.shopItems.sort();

        itemsValue.textContent = mainList.shopItems;
    }
});

localTime.addEventListener('change', () =>{
    let time = localTime.value;

    if(time < 0){
        console.log('Такого не может быть');
        mainList.open = false;
    } else if( time > 8 && time < 20){
        console.log('Время работать');
        mainList.open = true;
        } else if(time < 24){
            console.log('Слишком поздно');
            mainList.open = false;
        } else {
            console.log('В сутках 24 часа');
            mainList.open = false;
        };

        if(mainList.open){
            isopenValue.style.backgroundColor = 'green';
        }
        else{
            isopenValue.style.backgroundColor = 'red';
        }
});

budget_btn.addEventListener('click', () =>{
    countBudgetValue.value = Math.floor(budget / 30);
})

employers_btn.addEventListener('click', () =>{
    for(let i = 0; i < hireEmployersItem.length; i++){
        let name = hireEmployersItem[i].value;
        mainList.employers[i] = name;
        employersValue.textContent += mainList.employers[i] + ', '; 

    }
});