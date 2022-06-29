'use strict';

import {
  onclickEventsHandler,
  mainContentObj,
  loginFormObj,
  formSubmitHandler,
} from './JS_modules/eventsHandlers.js';

/* 
Homework:
Створити кнопку, яка буде відкривати модалку.
Вміст модалки - це форма логіну (інпут для username, інпут для password, кнопка для сабміту форми, кнопка для закривання модалки).
Також модалка повинна закриватись при кліку ззовні модалки.
Користувач повинен мати можливсіть переглянути символи паролю, що вводить.
Якщо хоча б один інпут (username або password) при сабміті пустий, то показувати alert з відповідним попередженням.

Якщо введені дані невірні, показувати alert з відповідним повідомленням.
Якщо введені дані вірні, закривати модалку і показувати привітальне повідомлення на екрані (welcome, username).
// new FormData
*/

mainContentObj.addEventListener('click', onclickEventsHandler);

loginFormObj.addEventListener('submit', formSubmitHandler);
