/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.
Ejemplo:
input: 15 , 3, 9 Output: El 15 es el número más
grande*/

let num1 = parseInt(prompt('Ingrese el primer valor: '))
let num2 = parseInt(prompt('Ingrese el segundo valor: '))
let num3 = parseInt(prompt('Ingrese el tercer valor: '))

alert('El valor más grande de los 3 ingresados es el número: ' + Math.max(num1,num2,num3))