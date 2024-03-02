function calcular(operacion) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No se puede dividir por cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida");
            return;
    }

    document.getElementById('result').innerHTML = "Resultado: " + resultado;
}
