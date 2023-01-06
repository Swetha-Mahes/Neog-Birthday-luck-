const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-number");
const resultBox = document.querySelector("#result-box")

function compressValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    resultBox.innerText = "Your Birthday is luckyy!";
  } else {
    resultBox.innerText = "Your birthday doesnt go well with your lucky number";
  }
}
function checkIfLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob)
    compressValue(sum, luckyNumber.value)
  else
    resultBox.innerText = "Enter both the details";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum

}

checkBtn.addEventListener("click", checkIfLucky)

