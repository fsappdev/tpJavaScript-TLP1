// Ejercicios Arreglos

// Crea una función llamada &quot;obtenerSuma&quot; que reciba un arreglo de números como parámetro y
// devuelva la suma de todos los elementos del arreglo.

function obtenerSuma(arregloNum){
    let resultado = 0;
    for (i=0 ; i < arregloNum.length ;i++){
      resultado += arregloNum[i];
    }
    
    return resultado
  }
  
  let arregloNum = [2, 4, 6, 8, 10];
  let sumaTotal = obtenerSuma(arregloNum);
  console.log(sumaTotal);
  

//   Implementa una función llamada &quot;obtenerPares&quot; que tome un arreglo de números como
//   parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.

function obtenerPares(numeros){
    let numPares = [];
    for (i=0;i < numeros.length;i++){
        if (numeros[i] % 2 === 0){
            numPares.push(numeros[i])
        }
    }
    return numPares
}
arreglo = [1,2,3,4,5,6,7,8];
resultado = obtenerPares(arreglo);
console.log(resultado);

// Escribe una función llamada &quot;obtenerPromedioPonderado&quot; que reciba dos arreglos: uno con
// las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y
// devolver el promedio ponderado de las notas.

function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
      throw new Error("Los arreglos de notas y pesos deben tener la misma longitud");
    }
  
    let sumaPonderada = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaPonderada += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
  
    let promedioPonderado = sumaPonderada / sumaPesos;
  
    return promedioPonderado;
  }
  
  let notas = [75, 85, 90, 65, 70];
  let pesos = [0.2, 0.3, 0.3, 0.1, 0.1];
  let promedio = obtenerPromedioPonderado(notas, pesos);
  console.log("Promedio ponderado: " + promedio);
  


//   Crea una función llamada &quot;obtenerMaximo&quot; que tome un arreglo de números como
//   parámetro y devuelva el número máximo encontrado en el arreglo.

function obtenerMaximo(arregloNumeros){
    let numMax = 0;
    for (i=0;i < arregloNumeros.length;i++){
        if (arregloNumeros[i] > numMax){
            numMax = arregloNumeros[i];
        }
    }
    return numMax
}

let array = [56,54,55232,9862,65,4545];
numeroMax = obtenerMaximo(array);
console.log(numeroMax);
