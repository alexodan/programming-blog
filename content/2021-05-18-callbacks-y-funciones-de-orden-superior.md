---
date: 2021-05-18
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

Sin duda alguna dos conceptos importantísimos para aprender sobre programación funcional son el de **callbacks** y el de **funciones de orden superior (higher order functions)**.

### Que es un callback?

Un callback es una función que se le pasa como argumento a otra función. En JavaScript, las funciones son ciudadanas de primer orden (first class citizens), lo cual significa que podemos tratarlas como valores, es decir guardarlas en variables, retornarlas o incluso pasarlas como argumento.

```javascript
[10, 20, 30].forEach(message => {
  console.log(message);
});
// Imprimirá por consola
// 10
// 20
// 30
```

En este ejemplo `(message) => { console.log(message); }` es una función callback, la cual tiene la particularidad de ser anónima (no lleva nombre!), se lo podríamos poner, pero para la cuestión que estamos tratando no haría una diferencia significativa.

Podríamos definir la función aparte, dándole un nombre y referenciarla cuando invocamos forEach. La siguiente porción de código es equivalente a la anterior.

```javascript
function print(message) {
  console.log(message);
}
[10, 20, 30].forEach(print);
// Imprimirá por consola
// 10
// 20
// 30
```

No hay que confundirse y escribir algo como `[10, 20, 30].forEach(print(x))`, ya que no queremos invocar print por nuestra cuenta, sino que forEach sea quien se encargue de llamar a la función.

### Funciones de orden superior (higher order functions)

Son funciones que a su vez toman otra(s) funcion(es) como argumento, retornan una nueva función, o ambas cosas. Clásicos ejemplos muy usados en JavaScript son los métodos de `Array.prototype` map, filter, forEach, reduce, etc.

Se suelen utilizar para abstraer ciertas acciones o efectos, crear funciones que puedan actuar sobre distintos tipos de datos y crear funciones a partir de otras funciones (llamado composición de funciones).

Ejemplo:

```javascript
function salute(salutation) {
  return function(name) {
    return salutation + ", " + name + "!";
  };
}
const christmasGreeting = salute("Happy Christmas");
const birthdayGreeting = salute("Happy birthday");
console.log(christmasGreeting("Amanda")); // Happy Christmas, Amanda!
console.log(birthdayGreeting("Ricardo")); // Happy birthday, Ricardo!
```

En el ejemplo, `salute` es función de orden superior, ya que **retorna** una función, por lo tanto christmasGreeting y birthdayGreeting son funciones que reciben un parámetro `name`, y devuelven el saludo inicial más el nombre una vez sean invocadas.

La razón de por qué la función _interna_ que retorna salute puede conocer el valor de `salutation` al momento de ser invocada se lo debemos a algo llamado **closure**, que amerita su propio artículo y hablamos de eso [acá](https://programandoconresaca.netlify.com/javascript-closure)!
