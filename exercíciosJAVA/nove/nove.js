function converterParaCelsius() {
    // Obter o valor digitado em Fahrenheit
    let fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);

    // Fazer a conversão para Celsius usando a fórmula
    let celsius = 5 * ((fahrenheit - 32) / 9);

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "A temperatura em Celsius é: " + celsius.toFixed(2) + " °C";
}