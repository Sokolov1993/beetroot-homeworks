/* TODO:
Створити HTML-сторінку для відображення/редагування тексту. 

При відкритті сторінки текст відображається за допомогою тега div. 

При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 

При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. 
Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
*/

const textEditorBehaviorControl = (event) => {
  const showTextArea = document.querySelector('#textParagraph');
  const showTextAreaDiv = document.querySelector('#showTextAreaDiv');
  const inputTextArea = document.querySelector('#textAreaInputEl');

  if (event.ctrlKey === true && event.key === 'e') {
    event.preventDefault();
    showTextAreaDiv.style.display = 'none';
    inputTextArea.style.display = 'inline-block';
    inputTextArea.removeAttribute('readonly');
    inputTextArea.innerHTML = showTextArea.textContent.trim();
    console.log('I`m work!');
  } else if (
    event.ctrlKey === true &&
    (event.key === '+' || event.key === '=')
  ) {
    event.preventDefault();
    inputTextArea.style.display = 'none';
    showTextAreaDiv.style.display = 'block';
    showTextArea.innerHTML = inputTextArea.value;
  }
};

document.addEventListener('keydown', textEditorBehaviorControl);

/* 
TODO:
Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

*/

const sortEventTarget = document.querySelector('#sortEventTarget');

const sortTable = () => {
  const table = document.querySelectorAll('tr');
  const arrayFromTable = Array.from(table);

  //text copy
  let sortedArray = [];
  for (let column = 0; column < arrayFromTable[1]['cells'].length; column++) {
    for (let row = 2; row < arrayFromTable.length; row++) {
      sortedArray.push(arrayFromTable[row]['cells'][column].innerText);
    }
  }

  //sort new array
  sortedArray.sort((a, b) => {
    if (isNaN(a)) {
      return a > b ? 1 : -1; //string sort
    } else {
      return +a - +b; //numbers sort
    }
  });

  // sorted text insert
  let count = 0;
  for (let column = 0; column < arrayFromTable[1]['cells'].length; column++) {
    for (let row = 2; row < arrayFromTable.length; row++) {
      arrayFromTable[row]['cells'][column].innerText = sortedArray[count];
      count++;
    }
  }
};

sortEventTarget.addEventListener('click', sortTable);

/* 
TODO:
Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі. 
*/

const resizeBlock = document.querySelector('#resizableBlockP');

const dragFunction = (event) => {
  let startX = event.clientX,
    startY = event.clientY,
    startWidth = parseInt(
      document.defaultView.getComputedStyle(resizeBlock).width,
      10
    ),
    startHeight = parseInt(
      document.defaultView.getComputedStyle(resizeBlock).height,
      10
    );

  const dragElement = (event) => {
    resizeBlock.style.width = startWidth + event.clientX - startX + 'px';
    resizeBlock.style.height = startHeight + event.clientY - startY + 'px';
  };

  resizeBlock.addEventListener('mousemove', dragElement);

  const stopDragging = () => {
    resizeBlock.removeEventListener('mousemove', dragElement);
  };

  resizeBlock.addEventListener('mouseup', stopDragging);
};

resizeBlock.addEventListener('mousedown', dragFunction);
