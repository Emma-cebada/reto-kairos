"use strict";

//Creamos el array con la frase traducida.
let phraseArray = ["c", "o", "m", "o", "s", "e", "r", "a", "d", "a", "r", "c", "o", "n", "n", "e", "k", "g", "i", "k", "i", "s", "v", ".", ".", "."];

//Creamos el array con los números encontrados.
let numbersArray = [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22,];

//Creamos un array vacío para meter el resultado.
let myArray = [];

//Itineramos el array de la frase, añadiendo la lectura de las letras y la posición en la que deberían estar.
for (let i = 0; i < phraseArray.length; i++) {
  let letters = phraseArray[i];
  let position = numbersArray[i];
  myArray[position] = letters;
}

//Consoleamos el array que declaramos vacío que ya se ha llenado con letras en el orden correcto para que podamos leer en consola la url para la inscripción.
console.log(myArray);