'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?', ' ');
    time = prompt('Введите дату в формате YYYY-MM-DD', ' ');

    while (isNaN(money) || money == "" || money == null) {
money = +prompt('Ваш бюджет на месяц?', ' ');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {
     1 : ""   
    },
    income: [],
    savings: true, 
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", ''); 
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b; 
            } else {
                console.log ('Неправильный ввод данных');
            }
        }
    },
    chooseOptExpenses: function() {
        for (let j = 0; j <= 3; j ++) {
            let  c = prompt("Статья необязательных расходов?", ' ');
                appData.optionalExpenses[j] = c;
                console.log(appData.optionalExpenses);
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень достатка");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        
        let isError = true;
        while (isError) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                prompt("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
            isError = false;
            }
        } 
        appData.income.forEach(function(items, i) {
        alert("Способы дополнительногo заработка: " + (i+1) + ':' + items);
        });       
    }
};

for (let key in appData) {
    console.log( "Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
/*let i = 0;
while (i < 2) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt ("Во сколько обойдется?", ''); 
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b; 
    } else {
        console.log ('Неправильный ввод данных');  
    }
    i++;
}
let i = 0;
do { let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
b = prompt ("Во сколько обойдется?", ''); 
if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
&& a != '' && b != '' && a.length < 50 ) {
console.log("done");
appData.expenses[a] = b; 
} else {
console.log ('Неправильный ввод данных');  
}
i++;
}
while (i < 2);*/
/*let num = 20;
function showFirstMessage(text) {
    alert(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);



let calc = function(a, b) {
    return (a + b);
}

let calc = (a, b) => a + b

console.log(calc(3, 4));
console.log(calc(8, 4));

function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));*/