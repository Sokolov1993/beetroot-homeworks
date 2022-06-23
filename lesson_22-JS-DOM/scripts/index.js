'use strict';

const playlist = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

const orderedList = document.querySelector('#ordered-list');

for (let key in playlist) {
  let { author, song } = playlist[key];
  const orderedListElement = document.createElement('li');

  orderedList.appendChild(orderedListElement);
  orderedListElement.innerHTML = `Author: ${author}. Song: ${song}`;
}

/*********************************************************************************************************/
const btnForModalWindowOpen = document.querySelector('#btn-open-modal');
const btnForModalWindowClose = document.querySelector('#btn-close-modal');
const modalWindow = document.querySelector('#modal-window');
let flag = true;

btnForModalWindowOpen.addEventListener('click', () => {
  if (flag) {
    modalWindow.style.display = 'block';
    btnForModalWindowOpen.innerHTML = 'CLOSE';
  } else {
    modalWindow.style.display = 'none';
    btnForModalWindowOpen.innerHTML = 'OPEN';
  }

  flag = !flag;
});

btnForModalWindowClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  btnForModalWindowOpen.innerHTML = 'OPEN';

  flag = !flag;
});

/***************************************************************************************/
const trafficLightsObj = document.querySelector('#traffic-lights-all-obj');
const trafficLightRed = document.querySelector('#traffic-light-red-elem');
const trafficLightOrange = document.querySelector('#traffic-light-orange-elem');
const trafficLightGreen = document.querySelector('#traffic-light-green-elem');
const trafficLightControlBtn = document.querySelector('#traffic-light-control');

let trafficLightsFlag = 0;

trafficLightControlBtn.addEventListener('click', () => {
  switch (trafficLightsFlag) {
    case 0:
      trafficLightRed.style.backgroundColor = 'red';
      break;

    case 1:
      trafficLightRed.style.backgroundColor = 'black';
      trafficLightOrange.style.backgroundColor = 'orange';
      break;

    case 2:
      trafficLightOrange.style.backgroundColor = 'black';
      trafficLightGreen.style.backgroundColor = 'green';
      break;

    case 3:
      trafficLightRed.style.backgroundColor = 'red';
      trafficLightOrange.style.backgroundColor = 'orange';
      trafficLightGreen.style.backgroundColor = 'green';
      break;

    case 4:
      trafficLightRed.style.backgroundColor = 'black';
      trafficLightOrange.style.backgroundColor = 'black';
      trafficLightGreen.style.backgroundColor = 'black';
      trafficLightsFlag = -1;
      break;
  }

  trafficLightsFlag += 1;
});
