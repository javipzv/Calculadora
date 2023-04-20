const buttons = document.querySelectorAll("button");
const operadores = ["+", "-", "*"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var operador;
var resultado;
var val;
var expresion;
var error = false;

function guardarValor(el){
    const value = el.target.textContent;
    if (operadores.includes(value)){
        operador = value;
        expresion += operador;
        document.getElementById('result').textContent += " " + operador + " ";
        v1 = true;
    }
    else if (value == "="){
        try{
            resultado = eval(expresion);
        }
        catch (e){
            document.getElementById('result').textContent = error;
            error = true;
        }
        if (error){
            document.getElementById('result').textContent = "Inválido";
            expresion = undefined;
            resultado = undefined;
        }
        else{
            document.getElementById('result').textContent = resultado;
            expresion = resultado;
        }
    }
    else if (nums.includes(value)){
        if (error){
            document.getElementById('result').textContent = "";
            error = false;
        }
        if (!expresion){
            expresion = value;
        }
        else{
            expresion += value;
        }
        document.getElementById('result').textContent += value;
    }
    else{
        expresion = undefined;
        operador = undefined;
        val = false;
        document.getElementById('result').textContent = ""
    }
}

function añadirEventListener(){
    this.addEventListener("click", guardarValor);
}

buttons.forEach(añadirEventListener);