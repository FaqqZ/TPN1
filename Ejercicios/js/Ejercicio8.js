/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let num = parseInt(prompt('Ingrese un valor: '))

if (num%2===0)
{
    alert('El valor ingresado es divisible en dos.')
}
else
{
    alert('El número ingresado no es divisible en dos.')
}