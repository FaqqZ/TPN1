/*Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.
Ejemplo:
input: 15 , 3 Output: El 15 es el número más
grande*/

let num1 = parseInt(prompt('Ingrese un valor: '))
let num2 = parseInt(prompt('Ingrese un segundo valor: '))

alert(('El valor más grande ingresado es: ' + Math.max(num1,num2)))