const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.header__popup-open');
const popupCloseButton = popup.querySelector('.popup__close');
const root = document.querySelector('.root');
console.log(root);
const popupToggle = function(event){
  event.preventDefault();
  popup.classList.toggle('popup_opened');
}
const closePopup = function(){
  if(event.target !== event.currentTarget){
    return;
  }
  popupToggle(event);
}
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup)

