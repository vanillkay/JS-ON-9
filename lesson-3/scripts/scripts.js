// alert('From file !' )


// function sayHello(){
//     alert('Hello')
// }

// window.sayHello()


// alert(`You window height is ${window.innerHeight}`)
let a = 3;

// function logger(message = "From function"){

//     a = 'Hello';
//     console.log(message)

//     // return 5;

//     // return 'Hello';

//     // return

//     // console.log('After return')

// }




// console.log('A1 -> ', a)

// const loggerResult = logger();

// console.log('REsult from func - >', loggerResult)

// console.log('A2 -> ', a)

// logger('From parameter');


// logger('From second param');


// for(let i = 0; i <= 5; i += 1){


//     // if(i % 2 === 0){
//     //     continue;
//     // }

//     // if(i === 3){
//     //     break;
//     // }

//     console.log(`Step ${i}`);
// }

// console.log('After for')

// const string = 'HeLLo';

// const string2 = 'Bye';


// console.log(string.slice(2))
// console.log(string.localeCompare(string))


const array = [1,2,3,4,5,6];
const array2 = new Array();
// array.push(7)

// console.log(array);

// array.unshift(0);

for(let i = 0; i < array.length; i += 1){
    console.log(`Array element ${array[i]} at positon ${i}`);
}


// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.
console.log("Task#1");
for (let i = 1; i <= 10; i++) {

    if(i%3 === 0) {
        console.log(i + "FizBuz");
    }
    else {
        if (i%2 !== 0) {
            console.log(i + "Buz");
        }
        else {
            console.log(i + "Fiz");
        }
    }
}

// 2) Написати логіку знаходження факторіалу числа 10.
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log("Task#2, 10! = " +factorial);

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
let weekAmount = 1200;
let packAmount = 500;
let weeks = 8;
let neededPackages = Math.ceil(weekAmount*weeks/packAmount);
console.log("Task#3, you will need " + neededPackages + " packages");

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3
function getFloorNumber(flatNumber) {
    if (isNaN(flatNumber) || flatNumber > 9*3 || flatNumber<1) {
        console.log("Task#4, Invalid flat number, put a number in range of 1 to 27");
        return 0;
    }
    let floorNumber = Math.ceil(flatNumber/3);
    console.log("Task#4, The floor number of flat " + flatNumber + " is " + floorNumber)
}
getFloorNumber("73");

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків
function drawPyramide(rows) {
    if (isNaN(rows)) {
        console.log("Task#5, impossible to draw, not a number")
        return 0;
    }
    for (let i = 1; i <= rows; i++) { 
        for (let k = i; k < rows; k++) {
          console.log(" "); 
        }
        for (let j = 0; j < i; j++) { 
          console.log(j); 
        }  

      }
}

drawPyramide(10);
