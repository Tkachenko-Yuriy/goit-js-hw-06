const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');
const DEFAULT_NAME = "Anonymous";

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value === "" ? DEFAULT_NAME : event.currentTarget.value
}

