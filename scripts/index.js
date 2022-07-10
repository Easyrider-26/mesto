
const popupElement = document.querySelector('.popup');

const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
// console.log(popupCloseButtonElement);

const popupOpenButtonElement = document.querySelector('.profile__edit-button');
// console.log(popupOpenButtonElement);

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
};
// console.log('open popup clicked');

const closePopup = function() {
    popupElement.classList.remove('popup_opened'); 
}
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
// console.log(profileName);

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

//togglePopupVisibility();


// console.log(jobInput);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 