//Домашня робота 6

//***1***
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

//***Відповідь***

/* 

class Abonent {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    get fullAbonent() {
        return `${this.name} ${this.number}`;
    }

    set fullAbonent(name) {
        const parts = name.split(' ');
        this.name = parts[0];
        this.number = parts[1];
    }
}

const abonent = new Abonent('Victor', 380994545444);
const abonent1 = new Abonent('Petr', 380994545002);
const abonent2= new Abonent('Oksana', 380674545083);

console.log(abonent.fullAbonent);
console.log(abonent1.fullAbonent);
console.log(abonent2.fullAbonent);

*/