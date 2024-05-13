let displayValue = "";

function appendValue(val) {
    displayValue += val;
    document.querySelector('.display').value = displayValue;
    document.querySelector('.display').scrollLeft = document.querySelector('.display').scrollWidth;
}

function calculate() {
    if(displayValue === ''){
        document.querySelector('.display').value = '';
        return;
    }
    try {
        displayValue = eval(displayValue);
        document.querySelector('.display').value = displayValue;
    } catch (error) {
        document.querySelector('.display').value = 'SYNTEX ERROR';
    }
}

function clearDisplay() {
    displayValue = '';
    document.querySelector('.display').value = displayValue;
}


function deleteValue() {
    displayValue = displayValue.slice(0,-1);
    document.querySelector('.display').value = displayValue
}