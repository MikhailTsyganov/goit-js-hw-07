
const spanValue = document.querySelector('#value')


const btnEl = document.querySelectorAll('#counter button');

let counterValue = 0;


const increment = function () {
        counterValue += 1;
        return spanValue.textContent = counterValue;
}

btnEl[1].addEventListener('click', increment)


const decrement = function () {
        counterValue -= 1;
        return spanValue.textContent = counterValue;
}

btnEl[0].addEventListener('click', decrement)


