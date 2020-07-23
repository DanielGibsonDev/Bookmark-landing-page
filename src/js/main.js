// ** Declare variables
const buttonOpen = document.getElementById("mobile-open");
const buttonClose = document.getElementById("mobile-close");
const mobileNav = document.getElementById("popup-nav");
const mobileNav2 = document.getElementById("popup-nav-2");

const featureTab1Btn = document.getElementById("btn-bookmarking");
const featureTab2Btn = document.getElementById("btn-searching");
const featureTab3Btn = document.getElementById("btn-sharing");

const featureTab1 = document.getElementById("tab-bookmarking");
const featureTab2 = document.getElementById("tab-searching");
const featureTab3 = document.getElementById("tab-sharing");

let featureBtns = [featureTab1Btn, featureTab2Btn, featureTab3Btn];

const accordionBtns = document.getElementsByClassName("accordion__question link");

const inputEmail = document.getElementById("email");
const formBtn = document.getElementsByClassName("signup__button")[0];
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let emailValid = false;

// ** Functions

// Toggle hidden class
let toggleHidden = (elementOne, elementTwo, elementThree) => {
  elementOne.classList.toggle("hidden");
  elementTwo.classList.toggle("hidden");
  elementThree.classList.toggle("hidden");
};

// Handle event click for mobile
let clickMobileToggle = (elementClick) => {
  elementClick.addEventListener('click', event => {
    event.preventDefault();
    toggleHidden(buttonOpen, buttonClose, mobileNav);
  }, false);
};

// Show active Feature tabs content
let showHideTabs = (showElement, hideElement1, hideElement2, activeBtn, notActiveBtn1, notActiveBtn2) => {
  showElement.classList.remove("hidden");
  hideElement1.classList.add("hidden");
  hideElement2.classList.add("hidden");

  activeBtn.classList.add("active-link")
  notActiveBtn1.classList.remove("active-link")
  notActiveBtn2.classList.remove("active-link")
}

// Clicking outside of mobile menu popup closes mobile menu
window.onclick = function (event) {
  if (event.target === mobileNav || event.target === mobileNav2) {
    toggleHidden(buttonOpen, buttonClose, mobileNav);
  }
}

// Form error validation
let isEmailValid = () => {
  if (regex.test(String(inputEmail.value).toLowerCase())) {
    emailValid = true;
  } else {
    emailValid = false;
  }
}

// ** Calling functions

// Mobile menu opening / closing
clickMobileToggle(buttonOpen);
clickMobileToggle(buttonClose);

// Switching between feature tabs
for (let tab of featureBtns) {
  tab.addEventListener('click', event => {
    event.preventDefault();

    if (tab === featureTab1Btn) {
      showHideTabs(featureTab1, featureTab2, featureTab3, featureTab1Btn, featureTab2Btn, featureTab3Btn);
    }

    if (tab === featureTab2Btn) {
      showHideTabs(featureTab2, featureTab1, featureTab3, featureTab2Btn, featureTab1Btn, featureTab3Btn);
    }

    if (tab === featureTab3Btn) {
      showHideTabs(featureTab3, featureTab1, featureTab2, featureTab3Btn, featureTab1Btn, featureTab2Btn);
    }
  }, false);
}

// Toggle Accordion FAQ
for (let btn of accordionBtns) {
  btn.addEventListener('click', event => {
    btn.children[0].classList.toggle("active-arrow");

    let answer = btn.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.marginBottom = "0";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.marginBottom = "2.2rem";
    }
  })
}

// Submit email signup form handler
formBtn.addEventListener('click', event => {
  event.preventDefault();
  isEmailValid();
  if (emailValid) {
    inputEmail.classList.remove("input-error")
    inputEmail.nextElementSibling.classList.add("hidden");
    inputEmail.nextElementSibling.nextElementSibling.classList.add("hidden");
    formBtn.classList.remove("button-error");
  } else {
    inputEmail.classList.add("input-error")
    inputEmail.nextElementSibling.classList.remove("hidden");
    inputEmail.nextElementSibling.nextElementSibling.classList.remove("hidden");
    formBtn.classList.add("button-error");
  }
}, false);
