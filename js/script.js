function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  console.log(buttonCalculateImc);
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

// Função para calcular IMC
function calculateImc(weight, height) {
  return weight / (height * height);
}

// Função do clique do botão
function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  displayDiagnostic();
}

// Função para calcular o grau de IMC
function diagnosticImc() {
  var result = parseFloat(document.querySelector('#imc-result').textContent);

  if (result < 16.0) {
    return 'Resultado inválido.';
  } else if (result >= 16.0 && result <= 16.9) {
    return 'Muito abaixo do peso.';
  } else if (result >= 17.0 && result <= 18.4) {
    return 'Abaixo do peso.';
  } else if (result >= 18.5 && result <= 24.9) {
    return 'Peso normal.';
  } else if (result >= 25.0 && result <= 29.9) {
    return 'Acima do peso.';
  } else if (result >= 30.0 && result <= 34.9) {
    return 'Obesidade grau I.';
  } else if (result >= 35.0 && result <= 40.0) {
    return 'Obesidade grau II.';
  } else if (result > 40.0) {
    return 'Obesidade grau III.';
  } else {
    return 'Resultado inválido.';
  }
}

// Função para mostrar o diagnóstico
function displayDiagnostic() {
  var display = document.querySelector('#imc-diagnostic');
  display.textContent = diagnosticImc();
}

start();
