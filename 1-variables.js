let number= 5;//змінні
const userScore = 100;//не змінні

//ERROR name для змінних
let 5number = 5;
let user-score = 5;
let user score = 100;
let *number = 5

//Good name для змінних
camelCase
snake_case
UPPER_ANAKE_CASE - for const
PascalCase - классы
kebab-case - паттерн имени для директорий

//Виведення значення зміної в консоль
console.log(12);
console.log(number);

//Перезапис значення змінної
let number= 5;//змінні
const userScore = 100;//не змінні

console.log(number);
number = 10;
console.log(number);

console.log(userScore);
userScore = 16;//ERROR for const
console.log(userScore);//ERROR for const

//Прямих констант в JS немає
const obj = {
    a:1,
    b:2,
    c:3,
}
console.log(obj);//{ a: 1, b: 2, c: 3 }

obj =10;
console.log(obj);//ERROR for const

obj.a = 10;//Тип константі ми змінити не можемо, а сам обєкт ми можемо змінювати
console.log(obj);//{ a: 10, b: 2, c: 3 }

//var старий вариант оголошггя змшнних
var a = 5;//старий вариант let, змінюєм на let
console.log(a);

//Як let і var працюють з областю видимості
let a;
console.log(a); //Error
let a = 10;

//BUT if
let a;
console.log(a); //undefined
a = 10;

console.log(b);//undefined -змінна існує, але їй не призначено ні якого значення, пустота
var b = 5;

//Область видимості - доступность змінних, функцій в певній області. Є глобальні і є блочна в {обєкти, функції, класи }, і всі змінні будуть існувати тільуи внутри ціх { }
{
    let result = 5;//змінна тільки в блоці, чи коли обявили
    console.log(result);//5
}
//BUT if
{
    let result = 5;
}
console.log(result);//ERROR
//BUT if we use var
{
    var result = 5;
}
console.log(result);//5
//AND if with var
{
    var result = 5;//вона існує завжди
    console.log(result);//5
}
//Завжди у кінці ставимо ;
cy
    .get()
    .find('button')
    .click();
//Назва змінних повинна бути краткою та вичерпаною
a = 2000;
const b = 3000;

console.log("ширина авто:" + a + "mm, висота авто:" + b+ "мм");

const width = 2000;
const lengh = 3000;

console.log("ширина авто:" + width + "mm, висота авто:" + lengh+ "мм");

const vehicBodyWidth = 2000;//GOOD NAME
const vehicBodyLengh = 3000;

console.log("ширина авто:" + vehicBodyWidth + "mm, висота авто:" + vehicBodyLengh + "мм");
//Приклад поганого іменування змінних однаі та ж сутність назви по-різному
const carBodyLength = 3000;//
const careBodyWidth = 5000;
console.log("ширина авто:" + careBodyWidth + "mm, висота авто:" + carBodyLengh + "мм");

