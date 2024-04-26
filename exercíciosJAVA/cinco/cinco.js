function converterParaCentimetros() {
    // Obter o valor inserido pelo usuário
    let metros = parseFloat(document.getElementById('metros').value);
    
    // Converter metros para centímetros
    let centimetros = metros * 100;
    
    // Exibir o resultado
    document.getElementById('resultado').innerHTML = metros + " metros é igual a " + centimetros + " centímetros.";
}