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