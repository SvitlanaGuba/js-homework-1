// + для конкатенація, объединение рядов

// конкатенація рядків
console.log('Hello' + ' ' + 'world'); // Hello world

// додавання чисел
console.log(5 + 5); // 10

console.log(5 + '5'); // 55// тип даннных при сравнении или условия для цикла, то переводит типы к одному (строку и цифру, то цифру привело в строке)
console.log(5 + + '5'); // 10// здесь приводит строку к число с ++

// інкремент та декремент, для скорочення коду , увели или уменьшают значения на единицу

let incr = 5
    decr = 5;

console.log(incr);//5
console.log(++incr); // 6 // префиксная форма, увелич число на +1, изменяет значения и только потом использует в том месте где использ
console.log(incr++); // 6 // постпрефиксная форма, сначала возвращает значение, и только потом его изменяет

console.log(decr);//5
console.log(--decr); // 4 //уменьшает на 1
console.log(decr--); // 4
//Примемр префикса и постпрефикса (такая же логика при --а и а--)
let a = 10;
b = 10;

console.log(a++); // 10// вернуло 10, ничего не изменилось при а++ постпрефиксная форма
console.log(a);//11, будет уже 11, постпрефиксная форма, сначала вернула 10 и вторым запросом увеличила на 1

console.log(++b); // 11// префиксная форма, изменила сразу на +1
console.log(b);//11

// порівняння

console.log(5 > 10); // false
console.log(15 > 10); // true

console.log(10 <= 10); // true
console.log(10 >= 10); // true

// остаток від ділення
console.log(5 % 2); // 1 // в 5 входит две двойки, это 4 , и 5 - 4=1

// =
let c = 5; // присвоєння
console.log(5 == 5); // не строге порівняння// true
console.log(5 === 5); // строге порівняння//true

console.log(5 == '5'); // true , прировняли и привелось к одному типу
console.log(5 === '5'); // false//лучше всегда использовать ===, так как число не равно строке

console.log(5 != '5'); // false // != это не равно

// && - логічне І (И)// аперсанд
// || - логічне АБО (ИЛИ)

let isChecked = true;
    isClosed = false;

console.log(true && true); // true// должно выполняться два условия, чтобы было true
console.log(true && false); // false
console.log(false && false); // false
console.log(isChecked && isClosed); // false

console.log(true || true); // true//хотя бы одно из условий выполняется, то будет true
console.log(true || false); // true
console.log(false || false); // false
console.log(isChecked || isClosed); // true

console.log(!true); // false
console.log(!false); // true

console.log(isChecked && !isClosed); // true
console.log(!isChecked || isClosed); // false

// Я хочу купити картоплю фрі та гамбургер, якщо обидва товари є в наявності, то я куплю їх і буду ситий

let isPotatoFry = true,
    isHamburger = true;

console.log(isPotatoFry && isHamburger); // true
isPotatoFry = false;
console.log(isPotatoFry && isHamburger); // false


isPotatoFry = 5;
isHamburger = 3;

console.log(isPotatoFry && isHamburger); // true

isPotatoFry = false;
console.log(isPotatoFry && isHamburger); // false

// Я хочу купити картоплю фрі та гамбургер, якщо обидва товари є в наявності, то я куплю їх і буду ситий

// let isPotatoFry = true,
//     isHamburger = true;

// console.log(isPotatoFry && isHamburger); // true
//
// isPotatoFry = false;
// console.log(isPotatoFry && isHamburger); // false


let isPotatoFry = 0,
    isHamburger = 5;

if (isPotatoFry && isHamburger) {
    console.log('I will buy both');
}

// Значення що приводяться до false
// 0
// null
// undefined
// ''
// NaN
/*if (0) {
/     console.log('....');
 }*/

