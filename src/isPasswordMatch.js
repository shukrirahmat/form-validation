const pwinput = document.querySelector("#pw");
const pwconfirminput = document.querySelector("#pwconfirm");

const isPasswordMatch = function isPasswordMatch() {
  return (pwinput.value === pwconfirminput.value);
};

export default isPasswordMatch;
