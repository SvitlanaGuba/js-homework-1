// if else statement

if ( 9 === 9) {
    console.log('Expression is true')
}


if ( 9 === 9) {
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}


if ( 9 ) { // 9 - true
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}

let num = 5;

if(num < 49){
    console.log('error')
} else if(num > 100){
    console.log('too big')
} else {
    console.log('ok')
}

// Я хочу купити картоплю фрі та гамбургер, якщо обидва товари є в наявності, то я куплю їх і буду ситий

let isPotatoFry = true,
    isHamburger = true;

if (isPotatoFry) {
    if (isHamburger) {
        console.log('Я куплю картоплю фрі та гамбургер і буду ситий');
    }
}

// тернарний оператор
(9 === 9) ? console.log('Expression is true') : console.log('Expression is false');
//? - если условие  true
// : - если условие  false



// switch statement

let num = 49;

switch (num) {
    case 49: //case num < 49
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 100:
        console.log('Your value is 100');
        break;
    default:
        console.log('This is default output');
        break;
}

let num = null;
let comparisonResult = num < 49;

switch (comparisonResult) {
    case true:
        console.log('Your value less than 49');
        break;
    case false:
        console.log('Your value more than 49');
        break;
    default:
        console.log('This is default output');
        break;
}
