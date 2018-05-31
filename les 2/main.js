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

i = 0;
/* цикл while

while(i < 3){
    let answer = prompt('Какой тип товаров будем продавать?');
    mainList.shopGoods.push(answer);
    i++;
}
*/
/* цикл do-while
do{
    let answer = prompt('Какой тип товаров будем продавать?');
    mainList.shopGoods.push(answer);
    i++;
} while(i< 3)
*/




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