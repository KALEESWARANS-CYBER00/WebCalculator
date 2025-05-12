// @author:kaleeswaran.s

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const display = document.getElementById('display');

 
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
    appendValue(key);
  }

  else if (key === 'Enter') {
    event.preventDefault(); 
    calculate();
  }
  
  else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
 
  else if (key === 'Escape') {
    clearDisplay();
  }
});
