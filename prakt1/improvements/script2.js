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
let submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', function formDataCollector(evt) {
    evt.preventDefault(); //отключает поведение сабмита по умолчанию
    function findId (id) {return document.getElementById(id);} //сокращение записи getElementById
    let formData = {}; // инициализация объекта для заполнения его с формы

    let name = findId('name').value;
    let country = findId('country').value;
    let genre = findId('genre').value;
    let slogan = findId('slogan').value;
    let actors = findId('actors').value;
    let description = findId('description').value;
    let minAge = findId('minAge').value;
    let ratingInput = findId('ratingInput').value;
    let duration = findId('duration').value;
    let poster = findId('poster').value;
    formData.name = name;
    formData.country = country;
    formData.genre = genre;
    formData.slogan = slogan;
    formData.actors = actors;
    formData.description = description;
    formData.minAge = minAge;
    formData.ratingInput = ratingInput;
    formData.duration = duration;
    formData.poster = poster;
    console.log(formData);
});
//https://www.cyberforum.ru/javascript/thread508909.html

let ratingInput = document.querySelector('#ratingInput'); // получаем ползунок, откуда забираем значение рейтинга
let ratingValue = document.querySelector('#ratingValue'); // элемент, куда будем передавать значение рейтинга

function showInputValue(donor, recipient) { 
    /* функция получает значение с инпута(donor)
    и делает его содержимым другого элемента(recipient) */
    recipient.innerHTML = donor.value;  
}
showInputValue(ratingInput, ratingValue);

ratingInput.addEventListener('input', function() { 
    showInputValue(ratingInput, ratingValue);
}, false);