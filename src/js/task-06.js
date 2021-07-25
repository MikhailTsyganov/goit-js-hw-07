const InputEl = document.querySelector('#validation-input');
InputEl.style.border = '3px solid #bdbdbd';

InputEl.classList.add('valid', 'invalid')

InputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if (InputEl.value.length == InputEl.dataset.length) {
        const validClass = document.querySelector('.valid');
        
        return validClass.style.borderColor = '#4caf50';;
    } 
    const invalidClass = document.querySelector('.invalid');
    invalidClass.style.borderColor = '#f44336';

}
