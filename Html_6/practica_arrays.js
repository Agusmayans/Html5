var amig1 = "Juan";
var amig2 = "Peep";
var amig3 = "Jorje";
var amig4 = "Jose";

var amigos = ["uno","dos","tres","cuatro"];

var numbers = [1,2,3,5,79];

console.log(numbers[numbers.length]); //no funciona juazzz

var frutas = ["banana", "manzana", "coco", "fresa"];

frutas.push("kiwi"); //agregar al array

frutas.pop() //saca el ultimo elemento del array

//unshift() y shift() funciona igual que el pushpop pero al principiooooo unshift coloca y shift saca

//slice() te crea una copia para modificar xq si no se pudre todo :V

//.splice() saca un número de elementos de un arreglo empezando desde una posición en particular

var str = "one two three"
var arr = str.split(' ')  // ["one", "two", "three"]
// El string con un espacio como argumento señala donde será el corte
var arr2 = str.split("e") // ["on", " two thr", "", ""]
// Como vemos ahora las e desaparecieron, y donde estaban las e, se separo cada elemento.

var new_str = arr.join(" ") // "one two three"
//ahora utilizamos el espacio para unir cada elemento del arreglo
var new_str = arr.join(' and a ') // "one and a two and a three"
// Podemos utilizar cualquier cadena de caracteres para unir nuestros elementos.