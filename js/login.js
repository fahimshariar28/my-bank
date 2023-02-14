document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;
  if (email === "fahimshariar28@gmail.com" && password === "komuna") {
    window.location.href = "bank.html";
  } else {
    alert("Mone koira thik password de");
  }
});
