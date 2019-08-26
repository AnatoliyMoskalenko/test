function calc(){
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function(){
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if (restDays.value == '' || this.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function(){
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if (persons.value == '' || this.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    let c1 = 12;
    let c2 = '12';
    console.log(c1 + ' - ' + typeof(c1));
    console.log(c2 + ' - ' + typeof(c2));
}

module.exports = calc;
