const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length == input.dataset.length) {
    onInputValid();
  } else if (input.value.length == "") {
    onInputEmpty();
  } else {
    onInputInvalid();
  }
}

function onInputValid() {
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function onInputEmpty() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}

function onInputInvalid() {
  input.classList.remove('valid');
  input.classList.add('invalid');
}
