import '../css/common.css'; 
import '../css/03-feedback.css'; 
import { loadFromLS, saveToLS } from './helpers';
import throttle from 'lodash.throttle';

// Select form elements and get initial form data from local storage
const formElem = document.querySelector('.feedback-form');
const nameElem = formElem.elements.name;
const messageElem = formElem.elements.message;
const formData = loadFromLS('feedbackFormData') ?? {};
nameElem.value = formData?.name;
messageElem.value = formData?.message;

// Save form data to local storage using a throttled function
const saveFormToLS = () => {
  const { name, message } = formData;
  saveToLS('feedbackFormData', { name: nameElem.value, message: messageElem.value });
};
const throttledSaveFormToLS = throttle(saveFormToLS, 500);

// Handle form submission by saving form data to local storage and resetting the form
formElem.addEventListener('submit', e => {
  e.preventDefault();
  throttledSaveFormToLS();
  formElem.reset();
});

