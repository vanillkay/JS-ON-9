// let message = 'Hello world !'; // string
// let message2 = "Hello world !"; // string

// // console.log(message);


// message = 'Hello from JS';

// // console.log(message);

// let firstNumber = 22; // number 
// let secondNumber = 45; // number

// // console.log(firstNumber, secondNumber)

// // console.log('+', firstNumber + secondNumber);
// // console.log('-', secondNumber - firstNumber);
// // console.log('/', secondNumber / firstNumber);
// // console.log('*', firstNumber * secondNumber);
// // console.log('%', secondNumber % firstNumber);


// // console.log('Before', firstNumber);
// // // firstNumber = firstNumber + 3;
// // firstNumber += 3

// // console.log('After', firstNumber)

// // console.log(5 + 3 * 2) // 5 + 6
// // console.log((4 - 6) * 2 + 8 / 4) // -2


// // let string = `Hello world !`;

// // console.log('First number is ' + firstNumber + ', Second number is ' + secondNumber)
// // console.log(`First number is ${firstNumber}, Second number is ${secondNumber}`)


// // let stringNumber = '34asdas';

// // console.log(Number(stringNumber)) // V1 

// // console.log(+stringNumber) // V2

// // console.log(parseInt(stringNumber)) // V2

// // console.log(parseFloat(stringNumber))

// let result = prompt('Enter the number', 9);

// console.log(Number(result))


// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

let weight = '88.3';
let height = '1.75';

const bmi = Math.round((Number (weight) / Number (height)**2));
console.log(bmi)



// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

console.log(Math.floor(Number(27.9))); //all<
console.log(Math.ceil(Number(27.3))); //all>
console.log(Math.round(Number(bmi)));//0.5+-



// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01


function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

console.log(toHoursAndMinutes(70)); // 01:10
console.log(toHoursAndMinutes(450)); // 07:30
console.log(toHoursAndMinutes(1441)); // 24:01

//const totalMinutes = 70;



/* 
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */


//let number = prompt('Enter the number');
//console.log(number)






/** За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */

const result = prompt('Введите число', '')
const result2 = prompt('Введите число', '')
console.log(Number(result) + Number(result2))
console.log(Number(result) - Number(result2))
console.log(Number(result) * Number(result2))
console.log(Number(result) / Number(result2))



