const body = document.body;
const colorValue = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click',onBodyChangeBgColorClick)

function onBodyChangeBgColorClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}








