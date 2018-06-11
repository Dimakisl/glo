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
});