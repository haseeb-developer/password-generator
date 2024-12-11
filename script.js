function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;
  const includeAdvancedSpecial = document.getElementById("include-advanced-special").checked;

  const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
  const numbersCharset = "0123456789";
  const specialCharset = "!@#$%^&*()_+{}|:<>?-=[];,./`~";
  const advancedSpecialCharset = "§¶•‽‣₿₹₸∑∏∂∆⊕⊗⋆⊞⊖⊘⊙√∫≠≤≥≪≫⇔⟨⟩∎\u200B\u200C\u200D\u2060\uFEFF";

  let charset = "";
  if (includeUppercase) charset += uppercaseCharset;
  if (includeLowercase) charset += lowercaseCharset;
  if (includeNumbers) charset += numbersCharset;
  if (includeSpecial) charset += specialCharset;  
  if (includeAdvancedSpecial) charset += advancedSpecialCharset; 

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

const lengthButtons = document.querySelectorAll('.length-btn');
lengthButtons.forEach(button => {
  button.addEventListener('click', function () {
    lengthButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedLength = button.getAttribute('data-length');
    document.getElementById('length').value = selectedLength;
  });
});

window.addEventListener('load', () => {
  const defaultButton = document.querySelector('.length-btn[data-length="32"]');
  if (defaultButton) {
    defaultButton.classList.add('active');
    document.getElementById('length').value = defaultButton.getAttribute('data-length');
  }
});