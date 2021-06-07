---
date: 2021-05-25
title: "Aprendiendo a programar funcionalmente"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: aprendiendo-programacion-funcional-p-1
categories:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
tags:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
---

## Primeros pasos para programar funcionalmente

Una muy buena forma de introducirse al paradigma funcional es aprendiendo a usar estas funciones:

- map
- filter
- concatAll
- reduce
- zip

Estas cinco funciones son extremadamente poderosas, y son claves para entender conceptos más complejos sobre programación asíncrona. En este artículo vamos a hablar de `map`.

## Pero primero, veamos forEach!

Hay varias formas de recorrer un array en JS, una bastante frecuente en muchos otros lenguajes también es usando un for loop con subíndices, por ejemplo:

```javascript
const names = ["Ben", "Claude", "Tiffa", "Jess"];
function printNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
```

Esta forma de iterar sobre arrays no tiene nada de malo en sí, sin embargo vamos a querer acostumbrarnos a un enfoque más declarativo, propio de la [programación funcional](https://programandoconresaca.netlify.com/intro-programacion-funcional) (en contraste al enfoque imperativo, que usa subíndices), y para eso usaremos el método `forEach` de `Array.prototype`.

El método [**forEach**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ejecuta la función indicada (callback) por cada elemento en el array.

### Ejemplo

```javascript
const names = ["Ben", "Claude", "Tiffa", "Jess"];
function printNames(names) {
  names.forEach(function(name) {
    console.log(name);
  });
}
```

La porción de código que recibe de parámetro `forEach` se le denomina [**callback**](http://programandoconresaca.netlify.com/callbacks-y-funciones-de-orden-superior).

```javascript
function(name) {
    console.log(name);
}
```

Una aclaración, en el callback del ejemplo anterior usamos la notación tradicional usando la keyword `function`, pero también podemos usar perfectamente la notación abreviada de `arrow function`:

```javascript
const numbers = [1, 2, 3, 4, 5];
function printEven(numbers) {
  numbers.forEach(number => {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
}
```

### Proyectando un array (A.K.A. `mapear`)

Cuando aplicamos una función a un valor y obtenemos uno nuevo se lo llama proyección. Pero la verdad que es más conocido el uso del spanglish _mapear_.

En este ejemplo, proyectamos un array de peliculas a un array de strings.

```javascript
const movies = [
  { id: 70111470, title: "Die Hard", rating: 4.1 },
  { id: 654356453, title: "Bad Boys", rating: 3.9 },
  { id: 65432110, title: "Man in fire", rating: 4.7 }
];

function mapMoviesToMovieNames(movies) {
  const movieTitles = [];
  movies.forEach(movie => {
    movieTitles.push(movie.title);
  });
  return movieTitles;
}
```

## Map 🗺

Hay otra forma de recorrer y a la vez crear un nuevo array a partir de otro, que resulta más prolija y nos abstrae de como se lleva a cabo la creación del array resultante. Es justamente a través del método [**map**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) de `Array.prototype`.

El método `map` crea un nuevo array con los nuevos elementos transformados en base a la función indicada (callback) aplicados a cada uno de sus elementos.

Ejemplo:

```javascript
function mapMoviesToMovieNames(movies) {
  return movies.map(movie => {
    return movie.title;
  });
}
// Al invocar mapMoviesToMovieNames retornara un nuevo array de strings:
// ["Die Hard", "Bad Boys", "The Chamber","Fracture"]
```

Usando la notación más concisa de `arrow` function podemos obviar las llaves `{}`, y al hacerlo también debemos obviar el `return` (podemos hacer esto únicamente porque el callback es una sola línea de codigo).

```javascript
function mapMoviesToMovieNames(movies) {
  return movies.map(movie => movie.title);
}
```

O alternativamente:

```javascript
const mapMoviesToMovieNames = movies => movies.map(movie => movie.title);
```

## Importante sobre forEach y map

Notemos algunas diferencias entre el uso de `forEach` y `map`.

Tal vez hayas notado que no usamos la keyword `return` dentro del callback al usar forEach, cosa que hacemos en el caso de `map`. Esto es porque `map` nos devuelve un nuevo array, y necesita que el callback a su vez devuelva un nuevo valor por cada elemento del array, resultando estos elementos en el array resultante. Si no usaramos `return`, el nuevo array que obtendriamos sería uno del mismo tamaño pero todos sus valores `undefined`, probalo por tu cuenta!

¿Que sucedería si usáramos `return` en el callback de `forEach`? En principio no marca ninguna diferencia, ya que con o sin `return` el callback se seguirá ejecutando hasta aplicarse a cada elemento del array. Por esta razon se omite, ya que no tiene ningun efecto.

_Sin embargo_, `return` va a detener la ejecucion del ciclo que se esta ejecutando en ese momento, para pasar al siguiente. Por ejemplo:

```javascript
[1, 2, 3, 4, 5].forEach(num => {
  if (num % 2 !== 0) {
    return;
  }
  console.log(num);
});
// En este ejemplo, al ejecutar el codigo vemos en la consola: 2, 4.
// PD: Evitar escribir codigo asi... puede ser confuso!
```

En la primera iteracion, `num` es igual a 1, al cumplirse la condición se ejecuta el return, lo cual interrumpe la actual iteración pero ésto no cancela las siguientes, que se siguen ejecutando.
