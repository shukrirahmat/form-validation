import "./styles.css";
import createInput from "./createInput";
import isPasswordMatch from "./isPasswordMatch";

const box = document.querySelector("#box");
const boxtext = document.querySelector("#box > p");
const form = document.querySelector("form");
const mailinput = document.querySelector("#mail");
const mailerror = document.querySelector("#mail + p.error");
const countryinput = document.querySelector("#country");
const countryerror = document.querySelector("#country + p.error");
const zipcodeinput = document.querySelector("#zipcode");
const zipcodeerror = document.querySelector("#zipcode + p.error");
const pwinput = document.querySelector("#pw");
const pwerror = document.querySelector("#pw + p.error");
const pwconfirminput = document.querySelector("#pwconfirm");
const pwconfirmerror = document.querySelector("#pwconfirm + p.error");

const mail = createInput(mailinput, mailerror);
const country = createInput(countryinput, countryerror);
const zipcode = createInput(zipcodeinput, zipcodeerror);
const pw = createInput(pwinput, pwerror);
const pwconfirm = createInput(pwconfirminput, pwconfirmerror);

const allInputs = [mail, country, zipcode, pw, pwconfirm];

const isAllValid = function isAllValid() {
  let validity = true;
  allInputs.forEach((input) => {
    if (!input.isValid()) {
      validity = false;
    }
  });

  return validity;
};


const submitSuccess = function submitSuccess() {
  box.removeChild(form);
  boxtext.textContent = "High Five! You have signed up succesfully.";
};

const setInputEvent = function setInputEvent(input) {
  input.getNode().addEventListener("input", () => {
    if (input.isValid()) {
      input.clearError();
    } else {
      input.showError();
    }
  });
};

setInputEvent(mail);
setInputEvent(country);
setInputEvent(zipcode);

pw.getNode().addEventListener("input", () => {
  if (pw.isValid() && isPasswordMatch()) {
    pw.clearError();
    pwconfirm.clearError();
  } else {
    pw.showError();
    pwconfirm.showError();
  }
});

pwconfirm.getNode().addEventListener("input", () => {
    if (pwconfirm.isValid() && isPasswordMatch()) {
      pw.clearError();
      pwconfirm.clearError();
    } else {
      pw.showError();
      pwconfirm.showError();
    }
  });

form.addEventListener("submit", (event) => {
  if (!isAllValid() || !isPasswordMatch()) {
    allInputs.forEach((input) => {
      input.showError();
      input.getNode().classList.add("submitted");
    });
    event.preventDefault();
  } else {
    submitSuccess();
  }
});
