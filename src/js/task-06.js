const inputEl = document.querySelector('#validation-input');
inputEl.style.border = '3px solid #bdbdbd';



inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
        const validClass = document.querySelector('.valid');
        validClass.style.borderColor = '#4caf50';
        return;
    }
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
    const invalidClass = document.querySelector('.invalid');
    
    invalidClass.style.borderColor = '#f44336';

}
