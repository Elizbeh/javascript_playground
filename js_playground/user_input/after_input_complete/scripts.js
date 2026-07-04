const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', () => {
    if(passwordInput.value === confirmPassword.value) {
        passwordInput.style.border='1px solid green'
        confirmPassword.style.border='1px solid green'
        errorMsg.style.display = 'none'
    } else {
        passwordInput.style.border='1px solid red'
        confirmPassword.style.border='1px solid red'
        errorMsg.style.display = 'block'
    }
})