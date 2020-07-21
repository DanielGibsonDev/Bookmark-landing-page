// Mobile menu opening / closing
const buttonOpen = document.getElementById("mobile-open");
const buttonClose = document.getElementById("mobile-close");
const mobileNav = document.getElementById("popup-nav");

const mobileNav2 = document.getElementById("popup-nav-2");

let toggleHidden = (elementOne, elementTwo, elementThree) => {
  elementOne.classList.toggle("hidden");
  elementTwo.classList.toggle("hidden");
  elementThree.classList.toggle("hidden");
};

buttonOpen.addEventListener('click', event => {
  event.preventDefault();
  toggleHidden(buttonOpen, buttonClose, mobileNav);
}, false);

buttonClose.addEventListener('click', event => {
  event.preventDefault();
  toggleHidden(buttonOpen, buttonClose, mobileNav);
}, false);

window.onclick = function (event) {
  if (event.target === mobileNav || event.target === mobileNav2) {
    toggleHidden(buttonOpen, buttonClose, mobileNav);
  }
}

