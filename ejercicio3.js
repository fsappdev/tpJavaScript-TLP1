// 3) Crear un programa que convierta la temperatura de grados Celsius a Faranheit y
// viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere
// convertir.

// Para convertir de Celsius a Fahrenheit, simplemente multiplica por 1.8 (o 9/5) y suma 32.


function convertirF(grados){
    let gradosF= 0;
    gradosF = (grados*1.8)+32;
    return gradosF;
}

// Para convertir de Fahrenheit a Celsius, simplemente resta 32 y multiplica por 0.5556 (o 5/9).

// Ejemplo: (75F - 32) x 0.5556 = 23.6C

function convertirC(grados){
    let gradosC = 0;
    gradosC = (grados - 32) * 0.5556;
    return gradosC
}

let opcion = "";
let grados = 0;

opcion = prompt("Que tipo de converción desea hacer? F para Fahrenheit o  C para Celsius");
opcion = opcion.toLowerCase()
if (opcion === "f" ){
    grados = parseInt(prompt("Ingrese los grados a convertir"));
    grados = convertirF(grados)
    console.log(grados,"f°");
}
else if(opcion === "c"){
    grados = parseInt(prompt("Ingrese los grados a convertir"))
    grados = convertirC(grados);
    console.log(parseInt(grados));
}
