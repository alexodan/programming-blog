---
date: 2021-06-08
title: "Aprendiendo a programar funcionalmente, parte 2"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: aprendiendo-programacion-funcional-p-2
categories:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
tags:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
---

## Programando funcionalmente, filter y reduce

En un [artículo anterior](https://programandoconresaca.netlify.app/aprendiendo-programacion-funcional-p-1), introdujimos algunos métodos sumamente útiles de `Array`: forEach y map. Prosigamos con algunos más que son también muy usados:

- filter
- reduce

### Filtrando elementos de un array

Al igual que forEach y map, el método [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) también toma un callback que se aplica a cada elemento del array, y el cual debe retornar verdadero o falso, dependiendo si queremos que el elemento forme parte o no del nuevo array que crea y retorna filter.

```javascript
const movies = [
  { id: 70111470, title: "Die Hard", rating: 4.1 },
  { id: 654356453, title: "Bad Boys", rating: 3.9 },
  { id: 65432110, title: "Man in fire", rating: 4.7 }
];

function filterGoodMoviesOnly(movies) {
  const goodMovies = movies.filter(movie => {
    if (movie.rating >= 4) {
      return true;
    }
    return false;
  });
  return goodMovies;
}

filterGoodMoviesOnly(movies);
// [{ id: 70111470, title: "Die Hard", rating: 4.1 }, { id: 65432110, title: "Man in fire", rating: 4.7 }]
```

Podemos escribir la función anterior también de forma mucho más concisa, sin necesidad de usar if y usando arrow functions:

```js
const filterGoodMoviesOnly = movies =>
  movies.filter(movie => movie.rating >= 4);
```

### Reduce

Probablemente `reduce` sea el metodo mas poderoso y versatil, ya que con este podriamos si quisieramos mapear elementos de un array, filtrarlos y muchas cosas mas. A su vez es el mas complejo, pero al igual que el resto a medida que lo vayamos usando con mas frecuencia nos iremos acostumbrando.

[Reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) comunmente se usa pasandole dos argumentos. El primero es un callback (similar a map, filter, etc.) que suele llamarse **reducer**, y el segundo argumento (opcional) que suele denominarse **acumulador**, que puede ser un string, un numero, un array, un objeto, etcetera.

La funcion reducer toma hasta cuatro argumentos, el acumulador, el valor actual de la iteracion, el indice y el array sobre el que se invoca reduce. El acumulador en la primera iteracion se inicializa con el valor que le pasamos como segundo argumento a reduce. Luego cada valor que devuelve la función reducer se le asigna al acumulador, cuyo valor se recuerda en la proxima iteración del array y, en última instancia, se convierte en el valor final resultante.

Veamos algunos ejemplos:

```js
const total = [1, 2, 3, 4, 5].reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
console.log(total); // 15
```

Vemos que reduce toma un callback (el _reducer_) y en este caso un numero, 0. En la primera iteracion `acumulador` se inicializa en 0, y `numero` toma de valor 1, ya que el segundo argumento corresponde al valor sobre el cual se esta iterando. La primera vez devolvemos entonces 0 + 1, por lo cual en la siguiente pasada acumulador va a ser igual a 1, numero sera igual a 2, y retornaremos 1 + 2, o sea 3. Asi sucesivamente hasta completar las pasadas y devolver como resultado 15.

Vamos con otro ejemplo:

```js
const str = ['Este', 'es', 'otro', 'ejemplo'].reduce((acumulador, palabra) => {
  return acumulador + " " + palabra;
}, '');
console.log(str); // ' Este es otro ejemplo'
```

Si bien podemos hacer uso de `trim()` para remover ese espacio sobrante inicial, tal vez este no sea un caso de uso muy comun, pero sirve para ilustrar como podemos retornar distintas cosas usando reduce, inclusive estructura mas complejas:

```js
const objetos = [{ propA: 'a' }, { propB: 'b' }, { propC: 'c' }];
const objetoCompuesto = objetos.reduce((acumulador, obj) => {
  return {
    ...acumulador,
    ...obj,
  }
}, {});
console.log(objetoCompuesto); // {propA: "a", propB: "b", propC: "c"}
```

Las utilidades que le podemos dar a reduce son muy variadas y de muy diversa complejidad, al principio cuesta adaptarse pero vale la pena aprender a utilizarla bien y ganar comodidad tanto en su uso como su lectura, ya que aparece con muchisima frecuencia.

Saludos!
