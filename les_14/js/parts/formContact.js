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