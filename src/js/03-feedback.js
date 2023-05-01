import '../css/common.css'; 
import '../css/03-feedback.css'; 
import { loadFromLS, saveToLS } from './helpers';
import throttle from 'lodash.throttle';

const formElem = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
formElem.elements.email.value = formData.email || '';
formElem.elements.message.value = formData.message || '';

const saveFormData = throttle((key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}, 500);

formElem.addEventListener('input', () => {
  const formData = {
    email: formElem.elements.email.value,
    message: formElem.elements.message.value,
  };
  saveFormData('feedback-form-state', formData);
});

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    email: formElem.elements.email.value,
    message: formElem.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formElem.reset();
});




