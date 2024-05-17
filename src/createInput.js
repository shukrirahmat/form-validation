import isPasswordMatch from "./isPasswordMatch";

const createInput = function createInput(input, error) {
  const getNode = () => input;

  const isValid = () => {
    return input.validity.valid;
  };

  const clearError = () => {
    error.textContent = "";
  };

  const showError = () => {
    if (input.id === "mail") {
      if (input.validity.valueMissing) {
        error.textContent = "Email address is required";
      } else if (input.validity.typeMismatch) {
        error.textContent = "Email address must be valid";
      }
    }
    if (input.id === "country") {
      if (input.validity.valueMissing) {
        error.textContent = "Country is required";
      }
    }
    if (input.id === "zipcode") {
      if (input.validity.valueMissing) {
        error.textContent = "Zip Code is required";
      } else if (input.validity.patternMismatch) {
        error.textContent = "Zip Code should be 5 digits number";
      }
    }
    if (input.id === "pw") {
      if (input.validity.valueMissing) {
        error.textContent = "Password is required";
      } else if (!isPasswordMatch()) {
        error.textContent = "Password mismatch";
      }
    }
    if (input.id === "pwconfirm") {
      if (input.validity.valueMissing) {
        error.textContent = "Password is required";
      } else if (!isPasswordMatch()) {
        error.textContent = "Password mismatch";
      }
    }
  };

  return { getNode, clearError, isValid, showError };
};

export default createInput;
