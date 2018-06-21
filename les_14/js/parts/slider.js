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