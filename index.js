const txtop1 = document.getElementById('op1')
const txtoperador = document.getElementById('operador')
const txtoperador2 = document.getElementById('operador2')
const btnCalcular = document.getElementById('boton')
const presultado = document.getElementById('resultado')

btnCalcular.addEventListener('click',calcular)
function calcular(){
    const operador = txtoperador.value
    const op1 = parseFloat(txtop1.value)
    const operador2 = parseFloat(txtoperador2.value)
    
    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(operador2) ){
        let resultado
        switch(operador){
            case "+":
               resultado = op1 + operador2
                break;
            case "-":
                resultado = op1 - operador2
                break;
            case "*":
                resultado = op1*operador2
                break;
                case "/":
                resultado = op1/operador2 
                break;  
        }

       presultado.innerText = "= " + resultado
       presultado.style = "color: green"
    }else{
        presultado.innerText = "no seas maje esta malo"
        presultado.style = "color: red"
    }

}

