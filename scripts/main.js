const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.header__popup-open');
const popupCloseButton = popup.querySelector('.popup__close');
const popupToggle = function(){
  popup.classList.toggle('popup_open');
}
popupToggle();


