/*
Задача:
    1) из инпутов генерируется объект фильма, записывается в moviesDB

    2) вывод на страницу объектов из moviesDB
=================>
    3) стилизация разметки
=================>(php)
    4) Генерация самой формы. 5) Текстовое описание: 6) Тип инпута
=================>
    7) Возможность добавлять поля, если инпут подразумевает выбор из преложенных
*/
'use strict';
/* // Вариант1. Работает, но слушает ползунок только при его отжатии
'use strict';
let ratingInput = document.querySelector('#ratingInput');
let ratingValue = document.querySelector('#ratingValue');

ratingValue.innerHTML = ratingInput.value;// Отображение значения по умолчанию
ratingInput.onchange = ratingChange; // Изменение отображённого значения при движении ползунка

function ratingChange() {
    ratingValue.innerHTML = ratingInput.value;
} */

let ratingInput = document.querySelector('#ratingInput');
let ratingValue = document.querySelector('#ratingValue');

function getValue(donor, recipient) { // функция получает значение с инпута и делает его содержимым другого элемента
    recipient.innerHTML = donor.value;  
}
getValue(ratingInput, ratingValue);

ratingInput.addEventListener('input', function() { 
    //во время движения ползунка
    getValue(ratingInput, ratingValue);
}, false);

ratingInput.addEventListener('change', function() { 
    //после отжатия мыши с ползунка
    getValue(ratingInput, ratingValue);
}, false);

//https://qna.habr.com/q/300431 решение

