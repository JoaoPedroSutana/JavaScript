function converterParaFahrenheit() {
    // Obter o valor digitado em Celsius
    let celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Fazer a conversão para Fahrenheit usando a fórmula
    let fahrenheit = (celsius * 9/5) + 32;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2) + " °F";
}