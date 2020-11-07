// ARRAYS
// ES6 <<>> ES5 (javascript puro)
// métodos da classe Array
// forEach
// map
// filter
// find
// every
// some
// reduce

// 1) FOREACH - percorre todos elementos mas NAO retorna valor (VOID)
var arrayFrutas = ['maça', 'manga', 'uva', 'pera'];
// iteração dentro do aray (FOR)
for (var i = 0; i < arrayFrutas.length; i++) {
	// console.log(arrayFrutas[i]);
}
// forEach() - preciso percorrer todo o meu array
// passamos como parametro do metodo forEach uma funcao de retorno
// definicao de uma funcao (ANONIMA) ----  function(){}
// fucacao ANONINA - comumente chamda de funcao de CALLBACK
arrayFrutas.forEach(function (fruta) {
	arrayFrutas.push('abacate'); // este elemento será ignorado no array original
	console.log(fruta);
});

// console.log(arrayFrutas)

// funcao tradicional no JS
function listaFrutas(fruta) {
	console.log(fruta);
}
arrayFrutas.forEach(listaFrutas);

// 2) MAP - percorre todos elementos e retorna um valor (NOVO ARRAY)
var arrayNumeros = [10, 20, 30, 40];
// como duplicar os numeros do meu array (elemento * 2)
// precisamos NAO somente percorrer os ementos do array (forEach), mas
// tambem precisamos nesse caso modificar os valores dos elementos
var arrayDobro = [];
for (var i = 0; i < arrayNumeros.length; i++) {
	arrayDobro.push(arrayNumeros[i] * 2);
}
console.log(arrayNumeros);
console.log(arrayDobro);
// MAP - retornar um novo ARRAY com valores alterados/modificados
var arrayDobro2 = arrayNumeros.map(function (numero) {
	return numero * 2;
});
console.log(arrayDobro2);

// calcular o dobro usando o conceito de arrow function
// ()=>{}
// (numero)=>{return numero * 2}
// numero => numero * 2;
var arrayDobro3 = arrayNumeros.map(numero => numero * 2);
console.log(arrayDobro3);

// ???? como podemos usar conceito de MAP e FOREACH
// no caso do calculo do valor total dos itens da lista de produtos????