---
date: 2021-05-07
title: "Conceptos fundamentales: Callbacks y funciones de orden superior"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: callbacks-y-funciones-de-orden-superior
categories:
  - JavaScript
  - Conceptos fundamentales
  - Functional Programming
  - Programacion Funcional
tags:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
---

Sin duda alguna dos conceptos importantísimos para aprender sobre programación funcional son el de callbacks y el de funciones de orden superior **(higher order functions)**.

### Que es un callback?

Es una función que se le pasa como argumento a otra función.

```javascript
function log(message) {
  console.log(message);
}

[10, 20, 30].forEach(log);
// Imprimirá por consola
// 10
// 20
// 30
```

## Map 🗺

Hay otra forma de recorrer y a la vez crear un nuevo array a partir de otro, que resulta mas prolija y nos abstrae de como se lleva a cabo la creacion del array resultante. Es justamente a traves del metodo [**map**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) de `Array.prototype`.

El metodo `map` crea un nuevo array con los nuevos elementos transformados en base a la función indicada (callback) aplicados a cada uno de sus elementos.

```javascript
function mapMoviesToMovieNames() {
  return movies.map(movie => {
    return movie.title;
  });
}
// Al invocar mapMoviesToMovieNames retornara un nuevo array de strings:
// ["Die Hard", "Bad Boys", "The Chamber","Fracture"]
```
