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

// let numero = parseInt(prompt(`Ingrese un numero`));

// while (numero != "ESC") {
//   for (i = 1; i <= numero; i++) {
//     alert("Hola " + i);
//   }
//   numero = parseInt(prompt(`Ingrese un numero`));
// }

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "Syntax Error";
  }
}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let operacion = prompt("Ingrese la operacion (+ , - , * , / )");
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

let resultado = calculadora(numero1, numero2, operacion);
let mensaje = `El resultado es ${resultado}`;

alert(mensaje);
