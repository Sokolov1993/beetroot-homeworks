'use strict';

import {
  getData,
  postNewData,
  updateData,
  deleteData,
} from './fetchRequests.js';

const textInput = document.querySelector('#textInput');
const addItemBtn = document.querySelector('#addItemBtn');
const todolistUl = document.querySelector('#todoList');

// renderData
const dataRenderFunc = async () => {
  const data = await getData();

  data.map((item) => {
    const li = document.createElement('li');
    todolistUl.appendChild(li);
    li.innerHTML = `${item['message']}`;

    // edit item
    li.addEventListener('dblclick', async () => {
      const input = document.createElement('input');
      const okBtn = document.createElement('button');

      input.value = li.textContent;
      li.innerText = '';
      li.appendChild(input);
      okBtn.innerText = 'OK';
      input.after(okBtn);

      okBtn.addEventListener('click', async () => {
        li.innerText = input.value;
        await updateData({ message: input.value }, item['_id']);
        input.remove();
        okBtn.remove();
      });
    });

    //delete item
    li.addEventListener('mousedown', async (event) => {
      if (event.button === 2) {
        li.remove();
        await deleteData(item['_id']);
      }
    });
  });
};

//add new item
addItemBtn.addEventListener('click', async () => {
  todolistUl.innerHTML = '';
  await postNewData({ message: textInput.value });
  textInput.value = '';
  await dataRenderFunc();
});

document.addEventListener('DOMContentLoaded', dataRenderFunc);
document.addEventListener('contextmenu', (event) => event.preventDefault());
