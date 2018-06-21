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