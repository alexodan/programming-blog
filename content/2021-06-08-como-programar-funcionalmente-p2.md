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
