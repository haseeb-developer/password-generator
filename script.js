function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
  const numbersCharset = "0123456789";
  const specialCharset = "!@#$%^&*()_+{}|:<>?-=[];,./`~";

  let charset = "";
  if (includeUppercase) charset += uppercaseCharset;
  if (includeLowercase) charset += lowercaseCharset;
  if (includeNumbers) charset += numbersCharset;
  if (includeSpecial) charset += specialCharset;

  if (charset === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById("password").value = password;

  // Animation effect for the input box when a new password is generated
  const input = document.getElementById("password");
  input.classList.add("shake");
  setTimeout(() => {
    input.classList.remove("shake");
  }, 500);
}
function copyPasswordToClipboard() {
  var passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
