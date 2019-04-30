'use strict';


let btnStart = document.getElementById('start'),
    resultItems = document.querySelectorAll('.result-table div'),
    inputs = document.querySelectorAll('.expenses-item'),
    btnUtverdit = document.getElementsByTagName('button')[0],
    btnUtverdit2 = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    inputsNot = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];




console.log();
