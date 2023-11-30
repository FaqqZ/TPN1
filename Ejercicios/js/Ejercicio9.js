/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo Output: oauo*/

let frase = prompt('Por favor ingrese una frase: ')
let vocales = ''

for(let i=0;i<frase.length;i++)
{
    var letra = frase.charAt(i).toLowerCase();
    if(letra==='a' || letra==='e' || letra==='i' || letra==='o' || letra==='u')
    {
        vocales += letra
    }
}

alert('Las vocales de la frase ingresada son: ' + vocales )