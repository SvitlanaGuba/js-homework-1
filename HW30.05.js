//#1
/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

const checkOrder = () => {
    let isHamburger = 4;
    let hamburgersAvailable = 4;
    let isPotatoFry = 1;

    if (hamburgersAvailable >= isHamburger && isPotatoFry >= 1) {
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
};

checkOrder();

//#2
/* Напишіть умовну інструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/


let ourPrice = 1500;

let somePrice = (price) => {
    if (price >= 1000 && price <= 1900) {
        console.log('Good price');
    } else {
        console.log('The price is not good');
    }
    return price;
};

somePrice(ourPrice);

//#3
/* Напишіть умовну інструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

let userNewPrice = (userPrice) => {
    if (!(userPrice>=1000 && userPrice<=1900)) {
        console.log('OK')
    }

    if (userPrice<1000 ||  userPrice > 1900) {
        console.log('Price good for users')
    } else {
        console.log('Bad good for users')
    }
}
userNewPrice(15);

//№4
/*
 За номером пори року вивести назву цієї пори року використовуючи інструкцію if-else-if
    Результат виводити в консоль.
*/

let seasonNumber = 3;
let seasonArr = ['Winter', 'Spring', 'Summer', 'Autumn'];

let someSeasons = (seasonNumber,seasonArr) => {
    if (seasonNumber === 1) {
        console.log(seasonArr[0])
    } else if (seasonNumber === 2) {
        console.log(seasonArr[1])
    } else if (seasonNumber === 3) {
        console.log(seasonArr[2])
    } else if (seasonNumber === 4) {
        console.log(seasonArr[3])
    } else {
        console.log('ERROR')
    }
}
someSeasons(seasonNumber, seasonArr);

//#5
/* Задано 3 числа (a, b, c), які не рівні між собою.
    Використовуючи вкладені умовні оператори (інструкції) if визначте середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
    Результат виводити в консоль.*/

let comparisonNumber = (a,b,c) => {

    if ((a>b&&a<c)||(a<b&&a>c)) {
        console.log(`${a}`)
    } else if ((b>a&&b<c)||(b<a&&b>c)){
        console.log(`${b}`)
    } else if (c>a && c<b || a>c && b>c){
        console.log(`${c}`)
    }
}

comparisonNumber(5,3,20)

//#6
/* Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

const checkAllDays =(numberForWeek) =>{
    switch (numberForWeek) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Wrong day');
    }

}

checkAllDays(3)

//#7
/* За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.  */

let operation = "+";

const sum = (d, e) => {
    let result;

    switch (operation) {
        case "+":
            result = d + e;
            console.log(result);
            break;
        case "-":
            result = d - e;
            console.log(result);
            break;
        case "*":
            result = d * e;
            console.log(result);
            break;
        case "/":
            result = d / e;
            console.log(result);
            break;
        default:
            console.log('Stop calculation');
    }
};

sum(2, 3);

//#8
/* Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray. */

let myArray = [];
const someArray = (myArray) =>{

    for (let i = 1; i <= 5; i++){
        myArray.push(i);

    }
    console.log(myArray);
}
someArray(myArray);

//# 9
/*Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у змінну myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у змінну myArray за допомогою циклу for.*/

const getSomeNumbers = () => {
    let newArray = [];

    for (let i = 1; i <= 9; i++) {
        if (i % 2 === 0) {
            newArray.push(i);
        }
    }

    return newArray;
};

console.log(getSomeNumbers());

const  getOddNumbers = () => {
    let new2Array = [];

    for (let i = 1; i <= 9; i++) {
        if (i % 2!==0) {
            new2Array.push(i);
        }
    }

    return new2Array;
};

console.log( getOddNumbers());


//#10
/*
Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6]; */

let total = 0;
const myArr = [2, 3, 4, 5, 6];

function result2(total, myArr) {
    for (let i = 0; i < myArr.length; i++) {
        total += myArr[i];
    }
    return total;
}
total = result2(total, myArr);
console.log(total);

//#11
/* Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    Console output:
    1
    2
    3
    4
    5
    6 */

const arr = [ [1, 2], [3, 4], [5, 6] ];

let funcArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
};

funcArr(arr);

//#12
/*Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product); */

const sumArr2 = [[5, 1], [0.2, 4, 0.5], [3, 9]];
let product2 = 1;
const resultForArr = () => {

    for(let i=0; i< sumArr2.length; i++) {
        for (let j=0; j< sumArr2[i].length; j++) {
            product2*=(sumArr2[i][j]);

        }

    }
}
resultForArr();
console.log(product2);

//#13
/*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

function removeVowels(words) {
    return words.replace(/[aeiou]/gi, '');
}

let someWords = 'Beautiful place';
let someNewWords = removeVowels(someWords);
console.log(someNewWords);

//#14
/* Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

    Дані (метри) для перевірки написаного рішення: [0, 5, 11, 19, 21, 101, 1001, 2, 3, 4, 22, 23, 24, 10, 20, 25, 30, 40, 1.5, 2.3, 100.7] */


let isSomeConvert = (metersArray) =>{
    let kilometr = metersArray/1000;
    let someArr = [metersArray, kilometr];
    let resultsAccount = "";

    for (let i = 0; i< someArr.length; i++) {
        let numbers = someArr[i];
        let ending = "";
        if (numbers === Math.round(numbers)) {
            if (numbers >= 5 && numbers <= 19) {
                ending = "ів"
            } else if (numbers % 10 === 1) {
                ending = ""
            } else if ((numbers >= 2 && numbers <= 4) || (numbers % 10 >= 2 && numbers % 10 <= 4)) {
                ending = "и"
            } else if (numbers % 10 === 0 || numbers % 10 >= 5 && numbers % 10 <= 10) {
                ending = "ів"
            }
        } else {
            ending = "а"
        }
        if (i === 0) {
            resultsAccount = (`${metersArray} метр${ending} це`);
        } else {
            resultsAccount = `${resultsAccount} ${kilometr} кілометр${ending}`;

        }
    }
    console.log(resultsAccount);
}
isSomeConvert(1100);