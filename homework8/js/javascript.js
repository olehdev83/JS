//Домашня робота 8

//***1***

/*

Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
та прочитати його значення. 
    
< !DOCTYPE html >
<html>
<body>
<div data-widget-name="menu">Виберіть жанр</div> <script>/* ваш код</script>
</body>
</html>

*/

//***Відповідь***

/*

const element = document.querySelector('[data-widget-name]');

// Перевірка, елемента існує
if (element) {
    // Читання значення атрибута
    let attributElement = element.getAttribute('data-widget-name');
    console.log(attributElement);
} else {
    console.log('Елемент з не знайдено');
}

*/
