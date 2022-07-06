const URL = 'https://beetroot-todo-app.herokuapp.com/todos';

export const getData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Ooooops! We have some problem with GET: ${err}`);
  }
};

export const postNewData = async (newData) => {
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  } catch (err) {
    console.error(`Ooooops! We have some problem with POST: ${err}`);
  }
};

export const updateData = async (newData, id) => {
  try {
    await fetch(`${URL}?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  } catch (err) {
    console.error(`Ooooops! We have some problem with PUT: ${err}`);
  }
};

export const deleteData = async (id) => {
  try {
    await fetch(`${URL}?id=${id}`, { method: 'DELETE' });
  } catch (err) {
    console.error(`Ooooops! We have some problem with DELETE: ${err}`);
  }
};
