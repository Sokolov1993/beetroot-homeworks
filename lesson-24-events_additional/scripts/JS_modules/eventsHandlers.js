import { loginUserData } from './user.js';

export const mainContentObj = document.querySelector('#mainContentObj');
export const loginFormObj = document.querySelector('#loginFormObj');
export const passwordForgot = document.querySelector('#passwordForgot');

const inputPasswordField = document.querySelector('#passwordInputFieldObj');
const inputLoginField = document.querySelector('#loginInputFieldObj');

export const onclickEventsHandler = (event) => {
  const btnShowLoginForm = document.querySelector('#loginBtnObj');
  const showLoginFormObj = document.querySelector('#loginDivObj');

  const xmarkCloseForm = document.querySelector('#xmarkCloseForm');
  const openEye = document.querySelector('#openEye');
  const closeEye = document.querySelector('#closeEye');

  if (event.target === btnShowLoginForm) {
    // show form
    loginFormObj.style.visibility = 'unset';
    loginFormObj.style.transform = 'translateX(0px)';
    loginFormObj.style.transition = 'transform ease-in-out 0.7s';

    // hide button and welcome title
    showLoginFormObj.style.transform = 'translateY(-500px)';
    showLoginFormObj.style.transition = 'transform ease-in-out 0.7s';

    setTimeout(() => {
      showLoginFormObj.style.visibility = 'hidden';
    }, 1000);
  } else if (
    !loginFormObj.contains(event.target) ||
    event.target === xmarkCloseForm
  ) {
    //xmark onclick behavior
    //hide form
    loginFormObj.style.transform = 'translateX(-2000px)';
    loginFormObj.style.transition = 'transform ease-in-out 0.7s';

    setTimeout(() => {
      loginFormObj.style.visibility = 'hidden';
    }, 1000);

    //show button and welcome title
    showLoginFormObj.style.visibility = 'unset';
    showLoginFormObj.style.transform = 'translateY(0px)';
    showLoginFormObj.style.transition = 'transform ease-in-out 0.7s';
  } else if (event.target === openEye || event.target === closeEye) {
    //show and hide password
    if (inputPasswordField.type === 'password') {
      openEye.style.visibility = 'hidden';
      closeEye.style.visibility = 'unset';
      inputPasswordField.setAttribute('type', 'text');
    } else {
      openEye.style.visibility = 'unset';
      closeEye.style.visibility = 'hidden';
      inputPasswordField.setAttribute('type', 'password');
    }
  } else if (event.target === passwordForgot) {
    alert('Цю фічу ми ще не допілили, тож згадуй сам :)');
  }
};

export const formSubmitHandler = (event) => {
  const formDataObj = new FormData(event.target);
  const userName = formDataObj.get('login');
  const userPassword = formDataObj.get('password');

  if (
    loginUserData.login === userName &&
    loginUserData.password === userPassword
  ) {
    event.preventDefault();

    setTimeout(() => {
      alert('You are successfully logged in!');
    }, 2000);

    setTimeout(() => {
      loginFormObj.submit();
    }, 2500);
  } else {
    event.preventDefault();
    setTimeout(() => {
      alert(
        "Invalid login or password! Please try again or click 'Forgot password'."
      );

      inputPasswordField.value = '';
      inputLoginField.value = '';
    }, 2000);
  }
};
