const openButton = document.querySelector('.profile__popup');
const addButton = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
const lockPage = document.querySelector('.page');
const infoPopupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

openButton.addEventListener('click', () =>{
  addButton.classList.add('popup_opened');
  lockPage.classList.add('page__contant_lock');
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileJob.innerHTML;
})


closeButton.addEventListener('click', () =>{
  addButton.classList.remove('popup_opened');
  lockPage.classList.remove('page__contant_lock');
})

infoPopupForm.addEventListener('submit', (event) =>{
  event.preventDefault();
  profileName.innerHTML = nameInput.value;
  profileJob.innerHTML = jobInput.value;
  addButton.classList.remove('popup_opened');
})
