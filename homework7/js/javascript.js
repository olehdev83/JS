//Домашня робота 7

//***1***

/* 

Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.

*/


//***Відповідь***

/* 

function Calculator() {
    this.number_a = 0;
    this.number_b = 0;

    this.red = function () {
        this.number_a = +prompt("Введіть перше число:", 0);
        this.number_b = +prompt("Введіть друге число:", 0);
    }

    this.sum = function () {
        return this.number_a + this.number_b;
    }

    this.mul = function () {
        return this.number_a * this.number_b;
    }
}

let calculator = new Calculator();

calculator.red();
console.log("Сума:", calculator.sum());
console.log("Добуток:", calculator.mul());

*/