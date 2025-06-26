//Домашня робота 4

//***1***
// У вас є масив об’єктів fruts, і в кожному з них є name 
// Напишіть код, який перетворює їх в масив імен.

/* 

 const fruts = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
];

 */

//***Відповідь***

/* 

let arrayFrutsName = fruts.map(item => item.name); // Використаєм метод map для перебору масива та повернем значення ключа name
console.log(arrayFrutsName);

*/

//***2***
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

//***Відповідь***

/* 

for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

 */


//***3***

//Замініть цикл "for" на "while" // for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` ); // }

//***Відповідь***

/* 

let i = 0
while (i < 5) {
    console.log(`цифра ${i}!`);
i++;

} 

*/

//***4***

//Напишіть цикл, який пропонує prompt ввести число більше за 100. 
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі. 
//Цикл повинен запитувати число доти, доки відвідувач не введе число, 
// більше за 100, або не скасує ввід/введе порожній рядок.

//***Відповідь***

/* 

while (true) {
    let valueNum = prompt("Введіть число більше за 100 (або натисніть Cancel для виходу):");
    // Перевірка на скасування вводу
    if (valueNum === null || valueNum.trim() === "") {
        break;
    }
    // Перетворення введеного значення строки на число
    let number = Number(valueNum);
    
    if (true) { // Перевірка чи щось ввели
        if (number > 100) {
            alert(`Ви ввели число: ${number}`);
            break;
        } else {
            alert('Число повинно бути більше за 100. Спробуйте ще раз');
        }
    }
}

*/

//***5**
// Вирахуйте середній вік

/* 

const girls = [
    { age: 23, name: "Оля" },
    { age: 29, name: "Аня" },
    { age: 10, name: "Юля" },
    { age: 20, name: "Катя" },
];

//***Відповідь***

// Сума віків

let sumaAges = girls.reduce((sum, girl) => sum + girl.age, 0);

// Середній вік

let avarageAge = sumaAges / girls.length;
console.log(Math.floor(avarageAge));

 */