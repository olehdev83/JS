//Домашня робота 5

//***1***

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять.

// 2) написати метод який буде виводити цю інформацію 
// 3) написати три варіанти студентів.

// 4) прикріпити знначення за допомогою call apply bind.


//***Відповідь***

/*

const studentInfo = {
    name: name,
    Display : function (specialty, averageScore, missedClasses) {
        console.group(`Student`);
        console.log(`Імʼя: ${this.name}`);
        console.log(`Спеціальність: ${specialty}`);
        console.log(`Середній бал: ${averageScore}`);
        console.log(`Кількість пропущених занять: ${missedClasses}`);
        console.groupEnd(`Student`);
    }
}

const Vasyl = {
    name: 'Vasyl',
}

const Peter = {
    name: 'Peter',
}

const Oksana = {
    name: 'Oksana',
}

studentInfo.Display.call(Vasyl, 'Каменщик', 1.2 , 5);
studentInfo.Display.apply(Peter,['Электрик', 3.2 , 4]);
studentInfo.Display.bind(Oksana, 'Кухар', 5, 0)();

*/

//***2***

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

//***Відповідь***

/* 
const htmButton = document.getElementById('info__html');
const cssButton = document.getElementById('info__css');
const information = document.getElementById('info__text');


htmButton.addEventListener('click', () => {
    information.textContent = 'HTML - це стандартна розмітка для створення веб-сторінок.';
});

cssButton.addEventListener('click', () => { 
    information.textContent = 'CSS — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду';
});

 */

//***3***

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість

// перевірити на варіантах: 
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

//***Відповідь***

/* 

const shop = (name, price, quantity) => {
    const suma = price * quantity;

    return `Товар: ${name}, Вартість: ${suma} грн.`;
}

console.log(shop('banana', 30, 4.5));
console.log(shop('cherry', 58, 1.3));
console.log(shop('cherry', 89, 3.4));

*/