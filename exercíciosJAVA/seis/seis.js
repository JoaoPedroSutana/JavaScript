function calcularArea() {
    let raio = parseFloat(document.getElementById("raio").value);
    let area = Math.PI * Math.pow(raio, 2);
    document.getElementById("resultado").innerHTML = "A área do círculo é: " + area.toFixed(2);
}