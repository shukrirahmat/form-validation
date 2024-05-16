import "./styles.css";

const form = document.querySelector("form");
const mail = document.querySelector("#mail");
const mailerror = document.querySelector("#mail + p.error");

const showMailError = function showMailError() {
  if (mail.validity.valueMissing) {
    mailerror.textContent = "Email address is required";
  } else if (mail.validity.typeMismatch) {
    mailerror.textContent = "Email adress must be valid";
  }
};

mail.addEventListener("input", (event) => {
  if (mail.validity.valid) {
    mailerror.textContent = "";
  } else {
    showMailError();
  }
});

form.addEventListener("submit", (event) => {
  if (!mail.validity.valid) {
    showMailError();
    event.preventDefault();
  }
});


