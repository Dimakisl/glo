//2 Первая будет спрашивать "Ваш бюджет на месяц?"
// Вторая "Название вашего магазина?"
let budget = +prompt('Ваш бюджет на месяц');
let nameShop = prompt('Название вашего магазина');

let span = document.getElementsByTagName('span');


//3 Создать объект mainList
mainList = {
    budgetMonth: budget,
    nameShop: nameShop,
    shopGoods: [],
    employers: {},
    open,
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
*/
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


//урок 4
mainList.shopGoods.forEach((item, i, arr) => {
    console.log(`У нас вы можете купить товары: ${i+1}. ${item} `); 
});

for(let goods in  mainList.shopGoods){
    console.log(`Наш магазин включает в себя ${+goods + 1} : ${mainList.shopGoods[goods]}`);
}



//6 
let p = document.getElementsByTagName('p');
p[0].innerHTML = mainList.shopGoods;


//----------------------------

// урок 3
//3.1 Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней), как функцию
function budgetСalculation(budget, day) {
    span[0].innerHTML = `Ваш бюджет на день равен: ${mainList.budgetMonth/day}`;
}

budgetСalculation(budget, 30);

//3.2 Создать функцию дисконтной системы
function disc(price, discount, disc) {
if(discount)
{
    price = price - (price * 80 / 100);
}

console.log('Цена товара со скидкой: ' + price);
}
disc(mainList.price, mainList.discount, mainList.disc);

//3.3 Найм сотрудников
function hiringEmployees(){
    for(let i = 0; i < 3; i++){
        let emp = prompt('ФИО сотрудника');
        mainList.employers[i] = emp;
    }
    console.log(mainList.employers);
}

hiringEmployees();



