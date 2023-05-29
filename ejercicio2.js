// 2) Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si
// el número es primo o no.

function numPrimo(num){
    let contador = 0;
    for (i=0;i<=num;i++){
        if (num % i === 0){
          contador += 1;
        }
    }
    let mensaje = "";
    if(contador === 2){
      mensaje = "Es primo"
    }
    else{
      mensaje = "No es primo"
    }
    return mensaje
  }
  
  let number = 0;
  number = parseInt(prompt("Ingrese un numero para comprobar si es primo o no"));
  resultado = numPrimo(number);
  console.log(resultado);