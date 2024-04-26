function calcularArea() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    
    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
      // Calcular a soma
      let soma = (num1 * num2)*2;
      
      // Exibir o resultado
      document.getElementById("resultado").innerHTML = "A área é: " + soma;
    }
  }