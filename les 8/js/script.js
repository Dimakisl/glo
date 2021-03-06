window.addEventListener('DOMContentLoaded', function(){
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

    //таймер
    // преобразовать время в милиссекунды ---------- Date.parse(deadline)
    let deadline = '2018-06-14';

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

});