//Домашня робота 4

//***1***

//Перепишіть функцію, використовуючи '?' або '||'.

/* 

 function checkAge(age) { 
        if (age > 18) {
    return true; 
    } 
    else {
        return confirm('Батьки дозволили?');
    }
}

 */

//***Відповідь***

/* 

function checkAge(age) { 
    return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
    return age > 18 || confirm('Батьки дозволили?');
}

checkAge(18);

*/

//***2***

//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

//***Відповідь***

/* 

let min = (a, b) => {
    if (a < b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

min(7, 8);

*/

//***3***

/* 


function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}



ask(
        
    "Ви згодні?",
        function () {
            alert("Ви погодились."); 
            
        },

        function () {
            alert("Ви скасували виконання.");
        }
);

*/

//***Відповідь***

/* 

let ask = (question, yes, no) => {
    if (confirm(question))
        yes();
    else
        no();
} 

ask(
    "Ви згодні?",

    () => {
        alert("Ви погодились.");
    },
    
    () => {
        alert("Ви скасували виконання.");
    }
)

*/