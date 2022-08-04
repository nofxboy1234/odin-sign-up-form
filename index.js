const userPassword = document.getElementById('userPassword');
const userConfirmPassword = document.getElementById('userConfirmPassword');
const passwordMessage = document.getElementById('passwordMessage');

function checkPassword(event) {
  if (userPassword.value !== userConfirmPassword.value) {
    userPassword.classList.add('error');
    userConfirmPassword.classList.add('error');
    passwordMessage.classList.add('password-message');
  } else {
    userPassword.classList.remove('error');
    userConfirmPassword.classList.remove('error');
    passwordMessage.classList.remove('password-message');
  }
}

userPassword.addEventListener('input', checkPassword);
userConfirmPassword.addEventListener('input', checkPassword);
