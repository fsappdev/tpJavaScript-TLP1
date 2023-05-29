// 4) Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al
// usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la
// palabra &quot;total&quot; devolverle el total de la compra.

function carritoCompras(precios){

}
let precioProducto = 0;
let precios = [];
let option = "";
let sum = 0;
let cont = 0;
precioProducto = parseInt(prompt("Ingrese el precio de los productos"));

while (option != "todos"){
    precios.push(precioProducto);
    sum += precios[cont];
    option = prompt("Desea cargar otro producto? para seguir ingrese 'S' para salir ingrese 'TOTAL'");
    option = option.toLowerCase()
    if (option === "s"){
        precioProducto = parseInt(prompt("Ingrese el precio de los productos"));
        cont += 1;
    }else{
        break
    }
}
console.log("Total a pagar: ",sum);

