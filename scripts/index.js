const buttonPopupOpen = document.querySelector('.profile__popup');
const popupBox = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const buttonPopupSubmit = document.querySelector('.popup__submit');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
/*открыть  popup*/
function openPopup(){
  popupBox.classList.add('popup_opened');
}
/*закрыть popup*/
 function closePopup(){
  popupBox.classList.remove('popup_opened');
 }

 buttonPopupOpen.addEventListener('click', () =>{
  openPopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
 });

 buttonPopupClose.addEventListener('click',closePopup);

 popupForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
 })

