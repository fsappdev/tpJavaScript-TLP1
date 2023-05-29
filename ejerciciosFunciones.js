//1° funcion que calcula si una edad ingresada es mayor a 18 ✅
function esMayorEdad(edad) {
  if (edad > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorEdad(3));


//funcion que calcula el area de un rectangula a partir de ingresar una base y altura ✅
function calcularAreaRectangulo(base, altura) {
  let resultado = base * altura;
  return resultado;
}
let area = calcularAreaRectangulo(3, 3);
console.log(area);

// funcion que calcula si una string es palindromo o no.✅
function esPalindromo(cadena) {
  let mensaje
  // Comparar la cadena original con su reverso
  let reverso = cadena.split("").reverse().join("");
  if (cadena === reverso) {
    mensaje = "Es palindromo";
  }
  else{
    mensaje = "No es palindromo";
  }
  return mensaje
}
console.log(esPalindromo("radar"));

//funcion que genera numeros aleatorios del 1 al 10 ✅

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  return numeroAleatorio;
}
let numero = generarNumeroAleatorio();
console.log(numero);


//ejemplo de uso del metodo reduce
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);
// se espera que salga: 10
