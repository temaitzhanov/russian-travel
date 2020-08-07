const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.header__popup-open');
const popupCloseButton = popup.querySelector('.popup__close');
console.log({
  popup,
  popupCloseButton,
  popupOpenButton
})
const popupToggle = function(){
  popup.classList.toggle('popup_opened');
}
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


