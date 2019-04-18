'use strict';


let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let obRash = prompt('Введите обязательную статью расходов в этом месяце','');
let obo = prompt('Во сколько обойдется?','');


let appData = {
    budget: money,
    timeData: time,
    expenses: {obRash: obo},
    optionalExpenses: '',
    income: [],
    savings: false
};

alert(appData.budget/30);