// Number

const number = 5;

const notNumber = NaN;

// console.log(NaN === NaN)


function customIsNaN(value){
    return value !== value;
}

function addFive(number){
    if(customIsNaN(number)){
        alert("Error, not valid number");
        return;
    }
    return number + 5;
}


// const askedNumber = Number(prompt('Enter the number'));

// console.log('Number from user -> ', askedNumber)

// const result = addFive(askedNumber);

// const inifnity = 5 / 0;

// console.log(inifnity, typeof inifnity)

// String

const num = 2;

const str1 = 'Hello';

const str2 = "From";

const str3 = `JS`;


const str4 = str1 + ' ' +  str2 + ' ' + str3 + ' ' + num;

const str5 = `${str1} ${str2} ${str3} ${num}`;


// console.log(str4, str5);


// Boolean

const firstBoolean = true;
const secondBoolean = false;


// console.log(firstBoolean, secondBoolean)



// const askedNumber = Number(prompt('Enter the number'));

// const isMoreThanFive = askedNumber >= 5;

// const isLessThanFour = askedNumber < 4;


// console.log(isLessThanFour);


// if(isMoreThanFive){
//     alert('Your number is more than five');
// }else{
//     alert('Your number is less than five');
// }


// console.log(false == 0)

//Null

// let account = {
//     login: 'qwerty'
// };


// console.log(account.login)


// account = null;


// console.log(account.login)

// Undefined

let value;


// console.log(value, typeof value)


// function show5(){
//     alert(5);
//     return 5;
// }


// const result = show5();

// console.log('Result -> ', result)

// const obj = {
//     a: 1, 
//     b: 3,
//     c: undefined
// }

// console.log('c' in obj)
// console.log('d' in obj)

// console.log(obj.hasOwnProperty('d'))




// function showNumber(){
//     const arr = [1,2,3,4,0];

//     const index = Number(prompt('Enter the number index'));
    
//     const arrayElement = arr[index]
    
//     console.log(arrayElement);

//     if(arrayElement === undefined){
//         alert('Wrong index');
//         return;
//     }

//     alert(`Number at index ${index} = ${arrayElement}`)

// }

// console.log(Boolean(0))
// showNumber();


// Object

// function sayHello(name){
//     console.log(`Hello ${name}, i'm ${this.name}`)
// }

// const age = 30;

// const user = {
//     name: 'Qwerty',
//     age,
//     password: '1234',
//     // sayHello, // sayHello: sayHello,
//     phone: 1234,
//     phone: 5462
// }

// user.phone = 1234;

// user.phone = 5462;


// console.log(user)


// const objKeys = [];
// const objValues = [];
// const objEntries = [];

// for(const key in user){
//     console.log(`Key - ${key}, Value - ${user[key]}`)
//     objKeys.push(key)
//     objValues.push(user[key])
//     objEntries.push([key, user[key]])
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(user.lastLogin)

// user.lastLogin = '04.06.2022';

// console.log(user.lastLogin)


// const sayHelloFunc = user.sayHello;

// sayHelloFunc('Peter');

// user.age = 30;

// delete user.password;

// user.sayHello("John")


// function getUserValue(key){
//     return user[key]; // user.age
// }

// const key = 'address';

// console.log(user[key]);

// console.log(getUserValue('password'))

// typeof

// console.log(typeof 'hello');
// console.log(typeof 23);
// console.log(typeof NaN);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); // !object
// console.log(typeof { name: 'Hello'});
// console.log(typeof [1,2,3]); // !object

// console.log('From method', Array.isArray([1,2,3]));

// console.log([1,2,3]) // proto Array -> proto Object
// console.log({name: 'hello'})


// Arrays

// const numbers = [[1,2,3], [4,5,6], [7,8,9]];

// for(let i = 0; i < numbers.length; i++){
//     for(let j = 0; j < numbers[i].length; j++){
//         console.log(numbers[i][j])
//     }
// }


// const users = [
//     {
//         name: 'John',
//         age: 30,
//     },
//     {
//         name: 'Peter',
//         age: 28,
//     },
//     {
//         name: "Ann",
//         age: 29
//     }
// ]


// for(let i = 0; i < users.length; i++){
//     if(i === 1){
//         break;
//     }
//     const currentUser = users[i];
//     console.log(currentUser);
// }

// console.log('---------');

// for(const element of users){
//     if(element.name === 'Peter'){
//         break
//     }
//     console.log(element);
// }

// console.log('---------');

// try{
// users.forEach(function(item){
//     if(item.name === 'Peter'){
//         throw new Error('Stop');
//     }
//     console.log(item);
// })
// }catch(err){
//     console.log(err)
// }

// console.log('next')





