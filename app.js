const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// check requierd fields for all inputs
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${fieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check length for username and password
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${fieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${fieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check email
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, `email is invalid`);
  }
}

//password marching
function passwordMatching(input, input2) {
  if (input2.value !== input.value) {
    showError(input2, `passwords don't match`);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.querySelector("small").innerText = message;
  formControl.className = "form__control error";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

// shows the name of each field
function fieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  passwordMatching(password, password2);
});
