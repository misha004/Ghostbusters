const burger = document.querySelector('#button');
const popup = document.querySelector('#popup');
const nav = document.querySelector('#nav').cloneNode(1);
const body = document.body;

burger.addEventListener('click', burgerHandler);

   function burgerHandler(){
      burger.classList.toggle('active');
      popup.classList.toggle('open');
      body.classList.toggle('noscroll');
      renderPopup();
   }

   function renderPopup(){
      popup.appendChild(nav);
   }