document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputElementById("deposit-amount");
  if (isNaN(depositAmount)) {
    alert("Please Provide a amount");
    return;
  }
  const previousDepositAmount = getTextElementById("total-deposit");
  const newDepositAmount = depositAmount + previousDepositAmount;
  setTextElementById("total-deposit", newDepositAmount);
  const previousTotalAmount = getTextElementById("balance-total");
  const newBalance = previousTotalAmount + newDepositAmount;
  setTextElementById("balance-total", newBalance);
});
