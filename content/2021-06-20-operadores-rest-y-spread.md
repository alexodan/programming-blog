---
date: 2021-06-08
title: "Operadores rest y spread"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: operadores-rest-y-spread
categories:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
tags:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
---

## Operadores rest y spread ...

En JavaScript podemos componer muy facilmente objetos nuevos a partir de otros, lo cual resulta muy conveniente cuando necesitamos combinar propiedades o funcionalidades de distintos objetos para componer uno nuevo:

```js
const person = {
  firstname: "George",
  lastname: "Clooney"
};
const actor = {
  movies: ["Ocean's Eleven", "The descendants", "Up in the air"]
};
const combinedObject = Object.assign({}, person, actor);
console.log(combinedObject);
// { firstname: "George", lastname: "Clooney", movies: Array(3) }
```
