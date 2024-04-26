function calcularSalario() {
    let valorHora = parseFloat(document.getElementById("valor-hora").value);
    let horasMes = parseFloat(document.getElementById("horas-mes").value);
    let salarioTotal = valorHora * horasMes;
    document.getElementById("resultado").innerHTML = "O salário total no referido mês é: R$ " + salarioTotal.toFixed(2);
}