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