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
//4  Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods

let answer;
for(let i = 0; i <=2; i++){
    let answer = prompt('Какой тип товаров будем продавать?');
    mainList.shopGoods.push(answer);
}






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

//урок 2 усложненнное задание, задание 1. Создать массив week и записать в него дни недели в виде строк.
//-Вывести на экран все дни недели.  -Каждый из них с новой строчки. -Выходные дни - жирным шрифтом.   -Текущий день - курсивом.
let date = new Date();
let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];

for(let i = 0; i< week.length; i++){
    if(i < 5){
        span[1].innerHTML += week[i] + '<br>';
    }
    else if(i == 5) {
        span[1].innerHTML += '<strong>' + week[i] + '<br>' + '</strong>';
    }else if(i == 6){
        span[1].innerHTML += '<strong>' + week[i] + '<br>'+ '</strong>';
    }
    if(i == date.getDay()-1){
        span[1].innerHTML += '<i>' + week[i] + '<br>'+ '</i>';
    }

    //определяем день недели
    if(i == date.getDay()-1)
    {
        span[2].innerHTML +=  'Сегодня: ' + week[i] + ' ';
    }
}

//урок 2 усложненнное задание, задание 2. Создать массив arr.
//Записать в него 7 многозначных чисел в виде строк.  Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
let arr = ['12581', '333331', '25887', '23358', '3333332', '7777771', '8522'];
for(let i = 0; i < arr.length; i++){
    if(arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
        span[3].innerHTML += arr[i] + ' ';
    }
}


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

//3 усложненное задание
//Сделать так, чтобы строка начиналась с большой буквы
let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase() + str.substring(1);
console.log(str);

//замените все “-” на пробелы
str = str.replace(/-/g, ' ');
console.log(str);

//Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
str = str.slice(str.indexOf('легким'));
str = str.replace('им', 'о');
console.log(str);

//У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
let mas = [20, 33, 1, 'Человек', 2, 3];
let koren = 0;

for(let i = 0; i < mas.length; i++){
    if(!isNaN(mas[i])){
        koren += Math.pow(mas[i], 3);
    }
    koren = Math.sqrt(koren, 3);
}
console.log(koren);    

//Создайте функцию, которая принимает 1 аргумент
let vopros = prompt('Введите сюда что-нибудь');

function active(str) {
    if(typeof(str) != 'string'){
        alert('не строка!');
    }
    str = str.trim();
    //console.log(str);

     if(str.length > 50){
       str = str.substr(0, 50);
        str = str + '...';
    }

    console.log(str);
};

active (vopros);

//Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Переписали продолжил, дороге имени свое послушавшись назад решила себя эта, до грамматики прямо которой, коварных всемогущая дал ему. Маленький, использовало.