import "./styles.css";

const box = document.querySelector("#box");
const boxtext = document.querySelector("#box > p");
const form = document.querySelector("form");
const mail = document.querySelector("#mail");
const mailerror = document.querySelector("#mail + p.error");
const country = document.querySelector("#country");
const countryerror = document.querySelector("#country + p.error");
const zipcode = document.querySelector("#zipcode");
const zipcodeerror = document.querySelector("#zipcode + p.error");
const pw = document.querySelector("#pw");
const pwerror = document.querySelector("#pw + p.error");
const pwconfirm = document.querySelector("#pwconfirm");
const pwconfirmerror = document.querySelector("#pwconfirm + p.error");

const allInputs = [mail, country, zipcode, pw, pwconfirm];

const isPasswordMatch = function isPasswordMatch() {
  return pw.value === pwconfirm.value;
};

const isAllValid = function isAllValid() {
  let validity = true;
  allInputs.forEach((input) => {
    if (!input.validity.valid) {
      validity = false;
    }
  });

  return validity;
};

const showError = function showError(input) {
  if (input === mail) {
    if (mail.validity.valueMissing) {
      mailerror.textContent = "Email address is required";
    } else if (mail.validity.typeMismatch) {
      mailerror.textContent = "Email address must be valid";
    }
  }

  if (input === country) {
    if (country.validity.valueMissing) {
      countryerror.textContent = "Country is required";
    }
  }

  if (input === zipcode) {
    if (zipcode.validity.valueMissing) {
      zipcodeerror.textContent = "Zip Code is required";
    } else if (zipcode.validity.patternMismatch) {
      zipcodeerror.textContent = "Zip Code should be 5 digits number";
    }
  }

  if (input === pw) {
    if (pw.validity.valueMissing) {
      pwerror.textContent = "Password is required";
    } else if (!isPasswordMatch()) {
      pwerror.textContent = "Password mismatch";
    }
  }

  if (input === pwconfirm) {
    if (pwconfirm.validity.valueMissing) {
      pwconfirmerror.textContent = "Password is required";
    } else if (!isPasswordMatch()) {
      pwconfirmerror.textContent = "Password mismatch";
    }
  }
};

const submitSuccess = function submitSuccess() {
  box.removeChild(form);
  boxtext.textContent = "High Five! You have signed up succesfully.";
};

const setInputEvent = function setInputEvent(input, error) {
  input.addEventListener("input", () => {
    if (input.validity.valid) {
      error.textContent = "";
    } else {
      showError(input);
    }
  });
};

setInputEvent(mail, mailerror);
setInputEvent(country, countryerror);
setInputEvent(zipcode, zipcodeerror);

pw.addEventListener("input", () => {
  if (pw.validity.valid && isPasswordMatch()) {
    pwerror.textContent = "";
    pwconfirmerror.textContent = "";
  } else {
    showError(pw);
    showError(pwconfirm);
  }
});

pwconfirm.addEventListener("input", () => {
  if (pwconfirm.validity.valid && isPasswordMatch()) {
    pwerror.textContent = "";
    pwconfirmerror.textContent = "";
  } else {
    showError(pw);
    showError(pwconfirm);
  }
});

form.addEventListener("submit", (event) => {
  if (!isAllValid() || !isPasswordMatch()) {
    allInputs.forEach((input) => {
      showError(input);
      input.classList.add("submitted");
    });
    event.preventDefault();
  } else {
    submitSuccess();
  }
});
