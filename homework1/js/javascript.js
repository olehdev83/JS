//Домашня робота 1

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//***Відповідь***
/*
let name = 'Петро';
let city = name;;
console.log(city); 
*/

//***2***
//Який буде результат виконання скрипта? // let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***Відповідь***
/* 
let name = 'Olga';
console.log(`привіт ${1}`); // привіт 1
console.log(`привіт ${"name"}`); // привіт name
console.log(`привіт ${name}`); // привіт Olga
*/

//***3*** //
// Видобути число зі змінних 
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

//***Відповідь***
/* 
let num = Number(a);
console.log(num);
console.log(typeof num);

let num1 = parseInt(b);
console.log(num1);
console.log(typeof num1);

let num2 = parseFloat(c);
console.log(num2);
console.log(typeof num2);
*/

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

//***Відповідь***
/*
let num1 = 0.1;
let num2 = 0.2;

let suma = Number((num1 + num2).toFixed(1)); //** toFixed(1) - Округлює до однго знака після коми
console.log(typeof suma); // 0.3
*/

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//***Відповідь***
/*
let num1 = 20;
let num2 = 10;
let num3 = 50;
let num4 = 40;

let nums = Math.max(num1, num2, num3, num4);

console.log(nums);
*/

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

//***Відповідь***
/*
let result = Math.random() * (4 - 2 + 2);
console.log(Number(result.toFixed(1)));
*/

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

//***Відповідь***
/*
const message = "Welcome to Bahamas!";
let result = message.length;
console.log(result);
*/

//***8**
//вивести в консоль message великими літерами

//***Відповідь***
/*
const message = "Welcome to Bahamas!";
let result = message.toLocaleUpperCase();
console.log(result);
*/

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers // вивести результат в консоль

//***Відповідь***
/*
let person = {};

person.name = 'Петро';
person.age = 29;
person.city = 'Вінниця';
person['like flowers'] = true;
delete person.city;

console.log(person);
*/

//***10**
// За допомогою циклу “for...in” вивести в консоль ключі і значення об*єкта

//***Відповідь***
/*
let person = {};

person.name = 'Петро';
person.age = 29;
person.city = 'Вінниця';

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}
*/
