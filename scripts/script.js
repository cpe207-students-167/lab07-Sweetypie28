// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}
emailInput.onkeyup =() => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}
confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
}

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  // validate first name
  if (firstNameInput.value !== "CPE207") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value !== ""){
    lastNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }

  // validate email
  if (emailInput.value !== ""){
    emailInput.classList.add("is-valid");
    isemailOk = true;
  } else {
    emailInput.classList.add("is-Invalid");
  }

  // validate password
  if (passwordInput.value.length >= 6){
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  // validate confirm password
  if (passwordInput.value === passwordConfirm.value && passwordInput.value !== ""){
    confirmPasswordInput.classList.add("is-valid");
    isConfirmPasswordOk = true;
  } else {
    confirmPasswordInput.classList.add("is-invalid");
  }

  console.log(isFirstNameOk, isLastNameOk, isemailOk, isPasswordOk, isConfirmPasswordOk);

  if (isFirstNameOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBin.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";

  firstNameInput.onkeyup();
  lastNameInput.onkeyup();
  emailInput.onkeyup();
  passwordInput.onkeyup();
  passwordConfirm.onkeyup();
};
