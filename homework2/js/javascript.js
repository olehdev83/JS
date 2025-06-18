//Домашня робота 2

//***1***
// Якщо змінна більше нуля - виведіть true, менше - false. 
//Перевірте це на варіантах 1, 0, -3.

//***Відповідь***
/*
let valueNum = 0;
if (valueNum > 0) {
    console.log(true);
} else {
    console.log(false);
}
    
*/

//***2***
// Якщо змінна ="test" - виведіть true, 
//Перевірте це на варіантах 'test', "qwerty", true

//***Відповідь***
/*
let valueStr = true
if (valueStr === "test") {
    console.log(true);
} else {
    console.log(false);
}

*/

//***3***
// Якщо змінна більше 10 - відніміть 5, 
//менше - додайте 5, результат виведіть в консоль 
//Перевірте це на варіантах 1, 10, 13.

//***Відповідь***
/*
let valueNum = 13;
(valueNum < 10) ? console.log(valueNum - 5) : console.log(valueNum + 5);

*/

//***4***
//Зробіть сервіс який отримує число від 1 до 12 
// виведіть місяць який дорівнює числу

//***Відповідь***
/*
const valueNum = prompt('Введіть число від 1 до 12');
let valueName;

switch (valueNum) {
    case "1":
        valueName = "Січень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "2":
        valueName = "Лютий";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "3":
        valueName = "Березень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "4":
        valueName = "Квітень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "5":
        valueName = "Травень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "6":
        valueName = "Червень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "7":
        valueName = "Липень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "8":
        valueName = "Серпень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "9":
        valueName = "Вересень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "10":
        valueName = "Жовтень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "11":
        valueName = "Листопад";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    case "12":
        valueName = "Грудень";
        alert(`Число ${valueNum} відповідає місяцю ${valueName}`);
        break;
    
    default: alert(`Число ${valueNum} Не відповідає місяцю`);
}

*/

//***5**
//Зробіть сервіс який отримує тризначне число 
//Поверніть користувачу сумму цих чисел

//***Відповідь***
