'use strict';

const URL = 'https://api.instantwebtools.net/v1/';
const allInfoAboutPassengers = document.querySelector(
  '#allinfoAboutPassengers'
);

let page = 0;

const showPassengers = (passengers) => {
  let counterOfPassengers = 10;
  // console.log('passengers.data', passengers.data);

  passengers.data.map((passengerAllInfo) => {
    const div = document.createElement('div');
    let counterOfInfoP = 0;
    let counterOfAirlineP = 0;

    counterOfPassengers--;
    div.setAttribute(
      'class',
      `passenger_${counterOfPassengers} passenger_style`
    );
    allInfoAboutPassengers.after(div);

    // console.log(passengerAllInfo);

    for (let key in passengerAllInfo) {
      if (!Array.isArray(passengerAllInfo[key]) && key !== '__v') {
        //passenger info
        const paragraph = document.createElement('p');
        counterOfInfoP++;
        document
          .querySelector(`.passenger_${counterOfPassengers}`)
          .appendChild(paragraph);
        paragraph.setAttribute('class', `passenger_info_${counterOfInfoP}`);
        paragraph.innerHTML = `<strong>${key
          .replace('_', ' ')
          .toUpperCase()}</strong>  = <em> ${passengerAllInfo[key]} </em>`;

        if (paragraph.getAttribute('class') === 'passenger_info_1') {
          const h2 = document.createElement('h2');
          paragraph.before(h2);
          h2.innerHTML = `<h2>Passenger ${passengerAllInfo.name} info: </h2>`;
        }
      } else {
        for (let newkey in passengerAllInfo[key][0]) {
          //airline info
          const paragraph2 = document.createElement('p');
          counterOfAirlineP++;
          paragraph2.setAttribute('class', `airline_info_${counterOfAirlineP}`);
          document
            .querySelector(`.passenger_${counterOfPassengers}`)
            .appendChild(paragraph2);
          paragraph2.innerHTML = `<strong>${newkey
            .replace('_', ' ')
            .toUpperCase()} </strong> = <em> ${
            passengerAllInfo[key][0][newkey]
          } </em>`;

          if (newkey === 'logo') {
            const img = document.createElement('img');
            img.setAttribute('src', `${passengerAllInfo[key][0][newkey]}`);
            paragraph2.innerHTML = '<strong> LOGO: </strong>';
            paragraph2.appendChild(img);
          }

          if (paragraph2.getAttribute('class') === 'airline_info_1') {
            const h2 = document.createElement('h2');
            paragraph2.before(h2);
            h2.innerHTML = `<h2>Information about the airline that provides services to the passenger ${passengerAllInfo.name}:</h2>`;
          }
        }
      }
    }
  });
};

const currentPage = document.querySelector('#currentPage');
const previousPage = document.querySelector('#previousPage');
const nextPage = document.querySelector('#nextPage');
const allPaginationElement = document.querySelector('#allPagEl');

const fetchPage = () => {
  fetch(`${URL}passenger?page=${page}&size=${10}`)
    .then((response) => response.json())
    .then((data) => {
      showPassengers(data);
    })
    .catch((err) =>
      console.log(`We have some problem with pagination fetch! ${err}`)
    );
};

const pagination = (data) => {
  const paginationLogic = (event) => {
    if (event.target === previousPage && page !== 0) {
      page--;
      currentPage.innerHTML = `<b>${page}</b>/${data.totalPages}`;
      document.body.innerHTML = '';
      document.body.appendChild(allInfoAboutPassengers);
      allInfoAboutPassengers.after(allPaginationElement);
      fetchPage();
    } else if (event.target === nextPage && page < data.totalPages) {
      page++;
      currentPage.innerHTML = `<b>${page}</b>/${data.totalPages}`;
      document.body.innerHTML = '';
      document.body.appendChild(allInfoAboutPassengers);
      allInfoAboutPassengers.after(allPaginationElement);
      fetchPage();
    }
  };

  allPaginationElement.addEventListener('click', paginationLogic);

  currentPage.innerHTML = `<b>${page}</b>/${data.totalPages}`;
};

if (page === 0) {
  fetch(`${URL}passenger?page=${page}&size=${10}`)
    .then((response) => response.json())
    .then((data) => {
      showPassengers(data);
      pagination(data);
    })
    .catch((err) =>
      console.log(`We have some problem with main fetch! ${err}`)
    );
}
