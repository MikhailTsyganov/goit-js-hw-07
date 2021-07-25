const InputEl = document.querySelector('#font-size-control');
const SpanEl = document.querySelector('#text');

InputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    
    return SpanEl.style.fontSize = `${event.currentTarget.value}px`;
}
