/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:
input: 20 Output: El 20 es divisible por 2.
Dificultad: 🟢🟡
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)
Ejemplo:
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3,
por 5 y por 7.
*/

let num = parseInt(prompt('Por favor ingrese un valor: '))

if (num !== 0)
{
    if (num%2===0)
    {
        alert('El número es divisible en dos.')
    }
    if(num%3===0)
    {
        alert('El número es divisible en tres.')
    }
    if(num%5===0)
    {
        alert('El número es divisible en cinco.')
    }
    if(num%7===0)
    {
        alert('El número es divisible en siete')
    }
}
else
{
    alert('El número ingresado no es divisible por ningún número de la lista.')
}
