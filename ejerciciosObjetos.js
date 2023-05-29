//Ejercicios Objetos


// Crea un objeto llamado &quot;producto&quot; con las propiedades &quot;nombre&quot;, &quot;precio&quot; y &quot;cantidad&quot;.
// Luego, escribe una función llamada &quot;calcularTotal&quot; que tome un objeto producto como
// parámetro y devuelva el total a pagar (precio * cantidad).
  
  function calcularTotal(producto) {
    let total = producto.precio * producto.cantidad;
    return total;
  }
  

  let producto = {
    nombre: "Producto 1",
    precio: 10,
    cantidad: 2
  };

  let totalAPagar = calcularTotal(producto);
  console.log("Total a pagar: " + totalAPagar);



  


//   Implementa un objeto llamado &quot;persona&quot; con las propiedades &quot;nombre&quot;, &quot;edad&quot; y &quot;profesion&quot;.
//   A continuación, escribe una función llamada &quot;presentarPersona&quot; que tome un objeto persona
//   como parámetro y muestre en la consola una presentación de la persona.

function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
}
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};
presentarPersona(persona);

// Crea una función llamada &quot;esMayorEdad&quot; que reciba un objeto persona como parámetro y
// devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso
// contrario.

function esMayorEdad(persona) {
    return persona.edad >= 18;
  }
  
let persona1 = { nombre: "Juan", edad: 25 };
let persona2 = { nombre: "María", edad: 16 };
  
console.log(persona1.nombre + " es mayor de edad: " + esMayorEdad(persona1));
console.log(persona2.nombre + " es mayor de edad: " + esMayorEdad(persona2));
  