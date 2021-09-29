const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("cash-given");
const checkbutton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkbutton.addEventListener("click", function validateBillAndCAshAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
    } else {
      showMessage("the Cash provided should atleast equal to 0");
    }
  } else {
    showMessage("Invalid bill Amount");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
