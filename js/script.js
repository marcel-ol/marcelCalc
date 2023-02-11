function start() {
  var buttonCalculate = document.querySelector('#button-calculate');
  buttonCalculate.addEventListener('click', handleButtonClick);
}
function handleButtonClick() {
  var inputA = document.querySelector('#input-a');
  var inputB = document.querySelector('#input-b');

  var valueA = Number(inputA.value);
  var valueB = Number(inputB.value);
  var resultAdition = adition(valueA, valueB);
  var resultSubtractionAB = subtraction(valueA, valueB);
  var resultSubtractionBA = subtraction(valueB, valueA);
  var resultMultiplication = multiplication(valueA, valueB);
  var resultDivisonAB = divison(valueA, valueB);
  var resultDivisonBA = divison(valueB, valueA);
  var resultExponentiationAB = exponentiation(valueA, valueB);
  var resultExponentiationBA = exponentiation(valueB, valueA);
  var resultSquareA = square(valueA);
  var resultSquareB = square(valueB);
  var resultFactorialA = factorial(valueA);
  var resultFactorialB = factorial(valueB);
  var resultPercentAB = percent(valueA, valueB);
  var resultPercentBA = percent(valueB, valueA);
  var resultAverage = average(valueA, valueB);
  var outputAdition = document.querySelector('#resultAdition');
  var outputSubtractionAB = document.querySelector('#resultSubtractionAB');
  var outputSubtractionBA = document.querySelector('#resultSubtractionBA');
  var outputMultiplication = document.querySelector('#resultMultiplication');
  var outputDivisionAB = document.querySelector('#resultDivisionAB');
  var outputDivisionBA = document.querySelector('#resultDivisionBA');
  var outputExponentiationAB = document.querySelector(
    '#resultExponentiationAB'
  );
  var outputExponentiationBA = document.querySelector(
    '#resultExponentiationBA'
  );
  var outputSquareA = document.querySelector('#resultSquareA');
  var outputSquareB = document.querySelector('#resultSquareB');
  var outputFactorialA = document.querySelector('#resultFactorialA');
  var outputFactorialb = document.querySelector('#resultFactorialB');
  var outputPercentAB = document.querySelector('#resultPercentAB');
  var outputPercentBA = document.querySelector('#resultPercentBA');
  var outputAverage = document.querySelector('#resultAverage');
  outputAdition.textContent = resultAdition;
  outputSubtractionAB.textContent = resultSubtractionAB;
  outputSubtractionBA.textContent = resultSubtractionBA;
  outputMultiplication.textContent = resultMultiplication;
  outputDivisionAB.textContent = resultDivisonAB;
  outputDivisionBA.textContent = resultDivisonBA;
  outputExponentiationAB.textContent = resultExponentiationAB;
  outputExponentiationBA.textContent = resultExponentiationBA;
  outputSquareA.textContent = resultSquareA;
  outputSquareB.textContent = resultSquareB;
  outputFactorialA.textContent = resultFactorialA;
  outputFactorialb.textContent = resultFactorialB;
  outputPercentAB.textContent = resultPercentAB;
  outputPercentBA.textContent = resultPercentBA;
  outputAverage.textContent = resultAverage;
}

function adition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}

function divison(num1, num2) {
  return (num1 / num2).toFixed(2).replace('.', ',');
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function exponentiation(num1, num2) {
  return num1 ** num2;
}
function square(num) {
  return Math.sqrt(num).toFixed(2).replace('.', ',');
}
function factorial(factor) {
  var result = factor;
  for (var i = 1; i < factor; i++) {
    result *= i;
  }
  return result;
}
function percent(num1, num2) {
  percentResult = (num1 / num2) * 100;
  return percentResult.toFixed(2).replace('.', ',');
  +'%';
}
function average(num1, num2) {
  return ((num1 + num2) / 2).toFixed(2).replace('.', ',');
}

start();
