function generatePassword() {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?-=[];,./`~";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById("password").value = password;
}

// Animation effect for the input box when a new password is generated
document.querySelector("button").addEventListener("click", () => {
  const input = document.getElementById("password");
  input.classList.add("shake");
  setTimeout(() => {
    input.classList.remove("shake");
  }, 500);
});
