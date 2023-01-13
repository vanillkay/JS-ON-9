

// hello1();

// hello3();

// hello2()

// // Function declaration
// function hello1(){
//     alert('Hello');
// }

// // Function expression
// const hello2 = function(){
//     alert('Hello');
// }


// function hello3(){
//     alert('Hello3');
// }

// a = 2;


// alert(`a = ${a}`)

// var a;
// console.log(b);
// console.log(c);


// console.log(a);

// if(a === 1){
//     let b = 4;

//     const c = 6;

//     console.log('Inside if',  b, c);
// }

// let b = 2;
// const c = 3;


// console.log('Outside from if', b, c);



// function hello4(){

//     let a;
//     a = 1;
//     message = 'Hello World ' + a;


//     alert(message);

//     var message;
// }



// hello4();

// console.log(a)
// console.log(message)


// function hello5(){

//     let a = 6;

//     console.log(a);


//     if(a === 6){
//         a = 8;

//         console.log(a)
//     }
// }

// console.log('Before function', a);

// hello5();

// console.log('After function', a);


// let a = 2;

// let b = a;

// a = 4;

// b = 9

// console.log(a, b)

const object1 = { 
    a: 1, 
    b: 2, 
    c: { 
        name: 'Hello',
    },
};

const object2 = cloneObjDeep(object1); // link for object1


object2.c.name = 'Bye';

function cloneObjDeep(object){
    const copy = {};

    for(const key in object){
        const value = object[key];

        if(typeof value === 'object'){
            copy[key] = cloneObjDeep(value);
        }else{
            copy[key] = value;
        }
    }

    return copy;
}


// console.log('cehck', object1, object2);


object1.a = 2;

object2.b = 4;

object2.c.name = 'Bye';

// console.log('First object ', object1); // { a: 2, b: 2}
// console.log('Second object', object2); // { a: 1, b: 4}



// class Car{
//     model = 2000;

//     speed;

//     constructor(speed){
//         this.speed = speed;
//     }

//     helloWorld(){
//         console.log(`Car speed is ${this.speed}`)
//     }
// }


// const ford = new Car(200);

// ford.helloWorld()

// console.log(ford)

// !

// let counter = 1;

// function logCounter(){
//     console.log('Counter', counter)
// }

// counter = 5;

// logCounter();


// let name = 'Ann';

// function logCounter2(){

//     const counter = 5;

//     // debugger;
//     console.log(name);

//     return function (){
//         console.log('Counter', counter)
//     }

// }

// let counter = 10;



// const counterFunc = logCounter2()

// counterFunc();

// function getCounterFunction(){
//     let counter = 0;

//     return function (){
//         console.log(++counter);
//     }

// }




// const counterFunction = getCounterFunction(); // Function Scope -> { counter: 0 }

// const counterFunctionV2 = getCounterFunction(); // Function Scope -> { counter: 0 }


// counterFunction(); // 1
// counterFunction(); // 2

// counterFunctionV2(); // 1
// counterFunctionV2(); // 2



// immediate invoked function expression
// (function(param){


//     console.log('From IIFE - ', param)

//     for(let i = 0 ; i < 10; i++){
//         console.log(i)
//     }


// })("Param for IIFE")

// function sum(firstNumber){

//  return function(secondNumber){
//     return firstNumber + secondNumber;
//  };
// }

// const result = sum(2)(3) // 8

// console.log(result)



