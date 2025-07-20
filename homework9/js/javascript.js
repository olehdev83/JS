//Домашнє завдання 9

/* -----1---- */

/* 

Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
<div id="text"> зникав.

*/

//***Відповідь***

/* 

const btnClick__hidentext = document.querySelector('.buttonHiden');
const textElement = document.querySelector('.text');

btnClick__hidentext = addEventListener('click', () => {
    textElement.classList.add('hide-element');
})

*/


/* -----2---- */

/*

Напишіть такий код, щоб після натискання на кнопку, вона зникала.

*/

//***Відповідь***

/*

const btnClick_hide = document.querySelector('.buttonHiden-one');

btnClick_hide = addEventListener('click', () => {
    btnClick_hide.disabled = 'true';
    btnClick_hide.classList.add('hide-element');
})

*/


/* -----3---- */

/* 

Створіть дерево, яке показує / приховує дочірні вузли при кліці

*/

//***Відповідь***

/*

document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const parentLi = this.parentElement;
        const childUl = parentLi.querySelector('ul');

        if (childUl) {
            childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
            this.textContent = this.textContent === '+' ? '-' : '+';
        }
    });
});

// Сховати всі дочірні списки за замовчуванням
document.querySelectorAll('#tree ul').forEach(ul => {
    ul.style.display = 'none';
});

*/


