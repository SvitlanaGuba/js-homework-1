//#1
/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let isHamburger = 4;
let isPotatoFry = 1;

if (isHamburger >= 4 && isPotatoFry >= 1) {
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
}

//#2
/* Напишіть умовну інструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

let OurPrice = 1500;

if (OurPrice >= 1000 && OurPrice <= 1900) {
    console.log('Good price');
} else {
    console.log('The price is not good');
}

//#3
/* Напишіть умовну інструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

let userPrice = 15;

if (!(userPrice>=1000 && userPrice<=1900)) {
    console.log('OK')
} if (userPrice<1000 ||  userPrice > 1900) {
    console.log('Price good for users')
} else {
    console.log('Bad good for users')
}

//№4
/*
 За номером пори року вивести назву цієї пори року використовуючи інструкцію if-else-if
    Результат виводити в консоль.
*/

let seasonNumber = 3;
let seasonArr = ['Winter', 'Spring', 'Summer', 'Autumn'];

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

//#5
/* Задано 3 числа (a, b, c), які не рівні між собою.
    Використовуючи вкладені умовні оператори (інструкції) if визначте середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
    Результат виводити в консоль.*/

let a = 5;
let b = 3;
let c = 20;

if ((a>b&&a<c)||(a<b&&a>c)) {
    console.log(a)
} else if ((b>a&&b<c)||(b<a&&b>c)){
    console.log(b)
} else {
    console.log(c)
}

//#6
/* Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

let NumberForWeek = 3;

switch (NumberForWeek) {
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

//#7
/* За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.  */

let d = 10;
let e = 5;
let operation = "*";
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

//#8
/* Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray. */

let myArray = [];

for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}
console.log(myArray);

//# 9
/*Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у змінну myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у змінну myArray за допомогою циклу for.*/

let newArr= [];
for (let i = 1; i <= 9; i++) {
    if (i % 2===0) {
        newArr.push(i);
    }
}
console.log( newArr);

let new2Arr= [];
for (let i = 1; i <= 9; i++) {
    if (i % 2!==0) {
        new2Arr.push(i);
    }
}
console.log(new2Arr);

//#10
/*
Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6]; */

let total =0;
const myArr = [2, 3, 4, 5, 6];

for (let i = 0; i < myArr.length; i++) {
     total += myArr[i];
}
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

for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

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
//a
const sumArr = [[1], [2], [3]];
let product = 1;

for(let i=0; i< sumArr.length; i++) {
    for (let j=0; j< sumArr[i].length; j++) {
        product*=(sumArr[i][j]);
    }

}
console.log(product);
//b
const sumArr1 = [[1, 2], [3, 4], [5, 6, 7]];
let product1 = 1;

for(let i=0; i< sumArr1.length; i++) {
    for (let j=0; j< sumArr1[i].length; j++) {
        product1*=(sumArr1[i][j]);
    }

}
console.log(product1);

//c
const sumArr2 = [[5, 1], [0.2, 4, 0.5], [3, 9]];

let product2 = 1;

for(let i=0; i< sumArr2.length; i++) {
    for (let j=0; j< sumArr2[i].length; j++) {
        product2*=(sumArr2[i][j]);
    }

}
console.log(product2);


//#13
/*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

let someWords = 'Beautiful place';
let someNewWords = someWords.replace(/[aeiou]/gi, '');
console.log(someNewWords);


//#14
/* Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

    Дані (метри) для перевірки написаного рішення: [0, 5, 11, 19, 21, 101, 1001, 2, 3, 4, 22, 23, 24, 10, 20, 25, 30, 40, 1.5, 2.3, 100.7] */


let metersArray = [0, 5, 11, 19, 21, 101, 1001, 2, 3, 4, 22, 23, 24, 10, 20, 25, 30, 40, 1.5, 2.3, 100.7];

metersArray.forEach(meters => {
    let kilometers = meters / 1000;
    let kmText = (kilometers % 10 === 1 && kilometers % 100 !== 11) ? 'кілометр' : (kilometers >= 2 && kilometers <= 4) ? 'кілометри' : 'кілометрів';
    let mText = (meters % 10 === 1 && meters % 100 !== 11) ? 'метр' : (meters >= 2 && meters <= 4) ? 'метри' : 'метрів';

    if (meters % 10 === 1 && meters % 100 !== 11) {
        console.log(`${meters} метр це ${kilometers.toFixed(3)} ${kmText}`);
    } else if (meters >= 2 && meters <= 4) {
        console.log(`${meters} метри це ${kilometers.toFixed(3)} ${kmText}`);
    } else if (meters >= 5) {
        console.log(`${meters} метрів це ${kilometers.toFixed(3)} ${kmText}`);
    } else {
        console.log(`${meters} ${mText} це ${kilometers.toFixed(3)} ${kmText}`);
    }
});
