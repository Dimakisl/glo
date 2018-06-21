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