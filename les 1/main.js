//2 Первая будет спрашивать "Ваш бюджет на месяц?"
// Вторая "Название вашего магазина?"
let budget = +prompt('Ваш бюджет на месяц');
let nameShop = prompt('Название вашего магазина');

//3 Создать объект mainList
mainList = {
    budgetMonth: budget,
    nameShop: nameShop,
    shopGoods: [],
    employers: {},
    open
};
//4  Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
let answer;
for(let i = 0; i <=2; i++){
    let answer = prompt('Какой тип товаров будем продавать?');
    mainList.shopGoods.push(answer);
}

//console.log('Бюджет на день равен: ' + mainList.budgetMonth/30);

//5 Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
let span = document.getElementsByTagName('span');
span[0].innerHTML = `Ваш бюджет на день равен: ${mainList.budgetMonth/30}`;

//6 
let p = document.getElementsByTagName('p');
p[0].innerHTML = mainList.shopGoods;


//----------------------------
/*
Создать переменную num со значением 33721
    Вывести в консоль произведение (умножение) цифр этого числа
    Полученный результат возвести в степень 3, используя только 1 оператор
    Вывести его на экран первые 2 цифры полученного числа
*/
let num = '33721';
let sum = 1;

for(let i = 0; i < num.length; i++)
{
    
    sum *= Math.floor(num[i]);
}
/*
sum = Math.floor(num[0]) +  Math.floor(num[1]) +  Math.floor(num[2])+  Math.floor(num[3]) + Math.floor(num[4])*/
let result = Math.pow(sum, 3);
console.log(result);
console.log(Math.floor(result/100000));