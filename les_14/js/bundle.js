(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calc(){
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
        

    totalValue.innerHTML = 0;

    persons.onkeyup = function (){
        return this.value = this.value.replace(/[^\d]/g, '');

    }

    restDays.onkeyup = function (){
        return this.value = this.value.replace(/[^\d]/g, '');

    }

    persons.addEventListener('change', function (e) {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if(restDays.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
        } else{
            totalValue.innerHTML = total;
           }        
        });

    restDays.addEventListener('change', function () {
        daysSum  = +this.value;
        total = (daysSum + personsSum) * 4000;
        if(persons.value == '' ||  restDays.value == ''){
            totalValue.innerHTML = 0;
        }else{
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function(){
        if(restDays.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
        } else{
            let a = total;
             totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;
},{}],2:[function(require,module,exports){
function formAjax(){
    let message = new Object();
    message.loading = 'Загрузка ...';
    message.success = 'Спасибо! Скоро мы с вами свяжемся!';
    message.failure = 'Что-то пощло не так...';

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
    //делаем div
        statusMessage = document.createElement('div');
        statusMessage.classList = 'status'; 


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        //настройка запроса
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form); //объект для хранения данных формы

        //посылка запроса
        request.send(formData);

    request.onreadystatechange = () => {
            if(request.readyState < 4){
               statusMessage.innerHTML = message.loading;

            } else if(request.readyState === 4){
                if(request.status == 200 && request.status < 300){
                    statusMessage.innerHTML = message.success;
                    //Добавляем контент. Прелоадер

                }
                else{
                   statusMessage.innerHTML = message.failure;
                    }
                }
            }

         //очищяем поля ввода
        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }

    });
}

module.exports = formAjax;
},{}],3:[function(require,module,exports){
function formContact(){
    let formContact = document.getElementById('form'), //форма контакты        
    inputContact = formContact.getElementsByTagName('input');  // кнопки формы контактов

    formContact.addEventListener('submit', (e) => {
        e.preventDefault();
        formContact.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        //настройка запроса
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form); //объект для хранения данных формы

        //посылка запроса
        request.send(formData);

    request.onreadystatechange = () => {
            if(request.readyState < 4){
            statusMessage.innerHTML = message.loading;

            } else if(request.readyState === 4){
                if(request.status == 200 && request.status < 300){
                    statusMessage.innerHTML = message.success;
                    //Добавляем контент. Прелоадер

                }
                else{
                statusMessage.innerHTML = message.failure;
                    }
                }
            }

        //очищяем поля ввода
        for(let i = 0; i < inputContact.length; i++){
            inputContact[i].value = '';
    }

});
}

module.exports = formContact;
},{}],4:[function(require,module,exports){
function modal (){
    let more = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

for(let i = 0; i < more.length; i++)
{
    more[i].addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
}

close.addEventListener('click', function(){
    overlay.style.display = '';
    for(let i = 0; i < more.length; i++){
        more[i].classList.remove('more-splash');
    }
    document.body.style.overflow = '';
});

}

module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll(){
    function animate(draw, duration){
        let start = performance.now();//Получаем время сейчас

        requestAnimationFrame(function animate(time){
            let timePassed = time - start;
            if(timePassed > duration){
                timePassed = duration;
            }
            draw(timePassed);

            if(timePassed < duration){
                requestAnimationFrame(animate);
            }

        })
    }

    let navigation = document.getElementsByTagName('nav')[0];

    navigation.addEventListener('click', (e) => {
        e.preventDefault();

        animate((timePassed) => {
            let target = e.target;

            let section = document.getElementById(target.getAttribute('href').slice(1));

            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500);
    });
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider(){
    let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'), //получаем слайды
    prev = document.querySelector('.prev'), //кнопка назад
    next = document.querySelector('.next'), //кнопка вперед
    dotsWrap = document.querySelector('.slider-dots'), //обертка точек слайдера
    dots = document.getElementsByClassName('dot');  //получаем точки

    showSlides(slideIndex);

    function showSlides(n){
        if(n > slides.length)
        {
            slideIndex = 1;
        };

        if(n < 1){
        
            slideIndex = slides.length;
        };
        //скрываем слайды
        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        };
        //удаляем у точек класс активности
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove('dot-active');
        };

        slides[slideIndex - 1].style.display = ''; //показываем первый слайд
        dots[slideIndex - 1].classList.add('dot-active'); //добавляем класс активности для точки перекл.

    };

    //функц переключения
    function plusSlides(n){
    showSlides(slideIndex += n);
    };

    prev.addEventListener('click', () =>{
        plusSlides(-1);
    });

    next.addEventListener('click', () =>{
        plusSlides(1);
    });
      
    //функция какой сейчас слайд по счету
    function currentSlide(n){
        showSlides(slideIndex = n);
    };

    dotsWrap.addEventListener('click', (e) =>{
        for (let i = 0; i < dots.length + 1; i++){
            if(e.target.classList.contains('dot') && e.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab(){

let tab = document.getElementsByClassName('info-header-tab'), //таб на который щелкнули
tabContent = document.getElementsByClassName('info-tabcontent'), // содержимое таба, которое надо скрыть/показать
info = document.getElementsByClassName('info-header')[0]; // принцип делегирования

function hideTabContent(a){
for (let i = a; i < tabContent.length; i++){
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
}   

hideTabContent(1); //показываем первый таб, т. к. он активный

function showTabContent(b){
if(tabContent[b].classList.contains('hide')){
    hideTabContent(0);
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
}
}

info.addEventListener('click', function(e){
let target = e.target;
if(target.className == 'info-header-tab'){
    for(let i = 0; i < tab.length; i++){
        if(target == tab[i]){
            showTabContent(i);
            break;
        }
    }
};

});
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer(){
    let deadline = '2018-12-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()); // разница между конечной датой и текущей в мс.
        let seconds = Math.floor((t / 1000) % 60); //отсекаем целые минуты и оставляем остаток в секундах
        let minutes = Math.floor((t / 1000 / 60) % 60); //отсекаем целые часы и получаем остаток в минутах
        let hours = Math.floor((t/(1000 * 60 * 60))); //отсекаем целые часы и получаем остаток часов

        if(t < 0){
            seconds = 0;
            minutes = 0;
            hours = 0;   
        }

        if(hours < 10)
		{
			hours = "0" + hours; 
		}

		if(minutes < 10)
		{
			minutes = "0" + minutes; 
		}

		if(seconds < 10)
		{
			seconds = "0" + seconds; 
		}

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timerInterval;  //переменная интервала
            
            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;

                if(t.total <= 0){
                    clearInterval(timerInterval);
                 }

            };         

            updateClock();
            timerInterval = setInterval(updateClock, 1000);
        };
    

    setClock('timer', deadline);

}

module.exports = timer;
},{}],9:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){


    let tab = require('../js/parts/tabs');
    let timer = require('../js/parts/timer');
    let modal = require('../js/parts/modal');
    let formAjax = require('../js/parts/form');
    let scroll = require('../js/parts/scroll');
    let formContact = require('../js/parts/formContact');
    let slider = require('../js/parts/slider');
    let calc = require('../js/parts/calc');
    

     tab();
     timer();
     modal();
     formAjax();
     scroll();
     formContact();
     slider();
     calc();   


 
});
},{"../js/parts/calc":1,"../js/parts/form":2,"../js/parts/formContact":3,"../js/parts/modal":4,"../js/parts/scroll":5,"../js/parts/slider":6,"../js/parts/tabs":7,"../js/parts/timer":8}]},{},[9]);
