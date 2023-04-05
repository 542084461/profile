let result = document.getElementById("result");

function calculate(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  result.value = eval(result.value);
}
