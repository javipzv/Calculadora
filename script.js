const buttons = document.querySelectorAll("button");
const operadores = ["+", "-", "*"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const valids = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "=", "B", "b", "+", "-", "*", "Backspace", "Enter"]
var operador;
var resultado;
var val;
var expresion;
var error = false;

function guardarValor(el, key_option=false){
    if (key_option){
        var value = el.key;
    }
    else
    {
        var value = el.target.textContent;
    }
    if (operadores.includes(value)){
        operador = value;
        expresion += operador;
        document.getElementById('result').textContent += " " + operador + " ";
        v1 = true;
    }
    else if (value == "=" || value == "Enter"){
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
    else if (value == "Borrar" || value == "B" || value == "b"){
        expresion = undefined;
        operador = undefined;
        val = false;
        document.getElementById('result').textContent = ""
    }
    else if(value == "Backspace"){
        expresion = expresion.replace(/.$/, '');
        document.getElementById('result').textContent = expresion;
    }
}

function añadirEventButton(){
    this.addEventListener("click", guardarValor);
}

buttons.forEach(añadirEventButton);

window.addEventListener('keydown', (event) => {
    if (valids.includes(event.key)){
        guardarValor(event, true);
    }
})