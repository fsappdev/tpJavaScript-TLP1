// 1) Crear un programa que pida al usuario que ingrese un número y le devuelva un
// mensaje indicando si el número es positivo, negativo o si es 0.

function tipoNum(numero){
    let mensaje = "";
    if(numero > 0){
        mensaje = "Es positivo";
    }
    else if(numero < 0){
        mensaje = "Es negativo";
    }
    else{
        mensaje = "Es nulo"
    }
    return mensaje

}

num = parseInt(prompt("Ingrese un numero para calcular si es positivo, negativo o nulo"))
resultado = tipoNum(num);
console.log(resultado);