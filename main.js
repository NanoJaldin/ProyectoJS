// let entrada = prompt("Ingrese su nombre");
// // let salida = entrada + " " + "ingresada";
// let salida = ` ${entrada} `;
// alert(`Lo siento pero el nombre ${salida}, es feo.`);
// console.log("Bienvenido " + entrada);

// let numero = Number(prompt("Ingrese un numero"));
// let salidaNumero = numero;
// if (salidaNumero % 2 === 0) {
//   alert(`El numero ${salidaNumero} es par`);
// } else {
//   alert(`El numero ${salidaNumero} es impar`);
// }

let numero = parseInt(prompt(`Ingrese un numero`));

while (numero != "ESC") {
  for (i = 1; i <= numero; i++) {
    alert("Hola " + i);
  }
  numero = parseInt(prompt(`Ingrese un numero`));
}
