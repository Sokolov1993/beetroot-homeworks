'use strict';

/*
Створи масив «Список покупок». 

Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 

Написати кілька функцій для роботи з таким масивом:

Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

Створення списку (не) придбаних продуктів. 

НОРМА

Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 

При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

МАКСИМУМ

Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

Підрахунок суми всіх (не) придбаних продуктів.

Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

*/

const shoppingList = [
  {
    produce: 'apples',
    quantity: 10,
    purchased: false,
    unitCost: 30,
    amount: 300,
  },

  {
    produce: 'lemons',
    quantity: 5,
    purchased: true,
    unitCost: 35,
    amount: 175,
  },

  {
    produce: 'eggs',
    quantity: 20,
    purchased: true,
    unitCost: 2,
    amount: 40,
  },

  {
    produce: 'pasta',
    quantity: 2,
    purchased: false,
    unitCost: 200,
    amount: 400,
  },

  {
    produce: 'popcorn',
    quantity: 1,
    purchased: false,
    unitCost: 50,
    amount: 50,
  },
];

// Сортування. Першими - непридбані продукти.

const getSortingList = (list) => {
  return list.sort((a, b) => +a.purchased - +b.purchased);
};

// Покупка продукту. Створює новий масив, сортує і змінює булеве значення обраної позиції на true.

const getProductName = (produce) => {
  let newArray = structuredClone(shoppingList);
  newArray = newArray.map((item) => {
    produce === item.produce ? (item.purchased = true) : item;
    return item;
  });
  return getSortingList(newArray);
};

// Формує список непридбаних продуктів.

const unpurchasedProducts = (list) => {
  return list.filter((item) => item.purchased === false);
};

// Видаляє продукт і створює новий масив.

const deleteValue = (value) => {
  let delProduct = shoppingList.filter((item) => {
    return item.produce != value;
  });
  return getSortingList(delProduct);
};

// Додати покупку і створити новий список.

let newArrayWithNewProduct;
const addProduct = (product) => {
  newArrayWithNewProduct = shoppingList.map((item) => {
    if (item.produce === product) {
      item.quantity++;
      item.amount = item.quantity * item.unitCost;
    }
    return item;
  });

  if (
    shoppingList.find((item) => {
      return item.produce === product;
    }) === undefined
  ) {
    newArrayWithNewProduct.push({
      produce: product,
      quantity: 1,
      purchased: false,
      unitCost: 10,
      amount: 10,
    });
  }
  return getSortingList(newArrayWithNewProduct);
};

// Підрахунок суми всіх продуктів

const getSumAllProducts = (list) => {
  const result = list.reduce((acc, currentItem) => {
    acc += currentItem.amount;
    return acc;
  }, 0);
  return result;
};

// Підрахунко суми всіх непридбаних продуктів

const getSumUnpurchasedProducts = (list) => {
  const result = unpurchasedProducts(list).reduce((acc, currentItem) => {
    acc += currentItem.amount;
    return acc;
  }, 0);
  return result;
};

// Варіативне сортування

const getSortedBySum = (fromTo) => {
  return shoppingList.sort((a, b) => {
    if (fromTo === 'min') {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });
};

console.log('Початковий, невідсортований масив:', shoppingList);

console.log(
  'Купівля продукту і сортування від false до true:',
  getProductName('pasta')
);

console.log('Список непридбаних продуктів:', unpurchasedProducts(shoppingList));

console.log(
  'Видалити вказане значення і створити новий масив:',
  deleteValue('apples')
);

console.log('Додати продукт:', addProduct('cola'));

console.log(
  'Cума всіх продуктів в початковому списку:',
  getSumAllProducts(shoppingList),
  '\nСума всіх продуктів у відсортованому списку із новими продуктами:',
  getSumAllProducts(newArrayWithNewProduct)
);

console.log(
  'Сума всіх непридбаних продуктів:',
  getSumUnpurchasedProducts(shoppingList)
);

console.log(
  'Сортування по amount від min to max або від max to min:',
  getSortedBySum('min')
);
