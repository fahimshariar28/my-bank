document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputElementById("withdraw-amount");
  const previousWithdrawAmount = getTextElementById("withdraw-total");
  const previousTotalAmount = getTextElementById("balance-total");
  if (isNaN(withdrawAmount)) {
    alert("Please Enter a number");
    return;
  }
  if (withdrawAmount > previousTotalAmount) {
    alert("You don not have sufficient balance");
    return;
  }
  const newWithdrawAmount = withdrawAmount + previousWithdrawAmount;
  setTextElementById("withdraw-total", newWithdrawAmount);
  const newTotalBalance = previousTotalAmount - newWithdrawAmount;
  setTextElementById("balance-total", newTotalBalance);
});
