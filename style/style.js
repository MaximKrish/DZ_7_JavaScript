//  "use strict";

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach и querySelectorAll и
свойство classList у элементов.
 */
console.log('Задание 1');
const dropEl = document.querySelectorAll('.dropdown-item');
const dropEl1 = document.querySelector('.dropdown-item');

dropEl.forEach(element => {
    element.classList.add("super-dropdown");
    console.log(element);
});


/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
 */
console.log('Задание 2');
const btnEl = document.querySelector('.btn');

btnEl.classList.toggle('btn-secondary');
console.log(btnEl);


/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
 */
console.log('Задание 3');
const menuEl = document.querySelector('.menu');

menuEl.classList.remove('dropdown-menu');
console.log(menuEl);


/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
 */
console.log('Задание 4');
const markupEl = document.querySelectorAll('.dropdown')[1];

markupEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');


/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
 */
console.log('Задание 5');
const dropMenuEl = document.getElementById('dropdownMenuButton').id = "superDropdown";

console.log(dropMenuEl);


/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
 */
console.log('Задание 6');
const atrAria = document.querySelector('[aria-labelledby="dropdownMenuButton"]');

atrAria.dataset.dd = 3;
atrAria.setAttribute('class', 'heading')

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
 */
console.log('Задание 7');
const buttonEl = document.querySelector('.dropdown-toggle');

buttonEl.removeAttribute('type');
console.log(buttonEl);