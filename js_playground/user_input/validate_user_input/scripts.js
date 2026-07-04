const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');


passwordInput.addEventListener('input', (e) => {
    if(e.target.value.length >= 6 && e.target.value.length <= 12) {
        submitButton.removeAttribute('disabled')
    } else {
        submitButton.setAttribute('disabled', 'true')
    }
})