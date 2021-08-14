---
date: 2021-06-20
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

## Composicion de objetos

Con JavaScript podemos componer muy fácilmente objetos nuevos a partir de otros, lo cual resulta muy conveniente cuando necesitamos combinar propiedades o funcionalidades de distintos objetos, y para eso tenemos `Object.assign`:

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

<br/>

`Object.assign` combina las propiedades de los objetos que le pasamos por parámetro (de derecha a izquierda) y se las asigna al primer objeto que recibe como argumento. Si una propiedad ya se encuentra en un objeto la va a pisar. Por último retorna el objeto compuesto por los anteriores.

En el ejemplo anterior, primero toma la propiedad `movies` del objeto `actor` y las combina con las propiedades del objeto `person` en un objeto nuevo, y luego combina sus propiedades nuevamente con un objeto vacío, y finalmente retorna ese objeto combinado. Esto de usar un objeto vacío como primer parámetro se suele utilizar para no modificar accidentalmente un objeto que no pretendíamos cambiar.

```js
const person = {
  firstname: "George",
  lastname: "Clooney"
};
const actor = {
  movies: ["Ocean's Eleven", "The descendants", "Up in the air"]
};
const combinedObject = Object.assign(person, actor);
console.log(combinedObject);
// { firstname: "George", lastname: "Clooney", movies: Array(3) }
console.log(person);
// { firstname: "George", lastname: "Clooney", movies: Array(3) }
// Ahora 'person' tambien tiene una propiedad movies 😱.
```

<br/>

## Operador spread (...)

Gracias al operador de spread podemos (entre otras cosas) componer objetos sin tener que usar _Object.assign_ o preocuparnos por el detalle del primer argumento.

Lo que hace es "desestructurar" o "expandir" un objeto o array en sus elementos. Es decir que nos permite obtener solo las propiedades de un objeto en lugar del objeto en sí mismo.

Veamos el ejemplo anterior esta vez usando este operador:

```js
const person = {
  firstname: "George",
  lastname: "Clooney"
};
const actor = {
  movies: ["Ocean's Eleven", "The descendants", "Up in the air"]
};
const combinedObject = {
  ...person,
  ...actor
};
console.log(combinedObject);
// { firstname: "George", lastname: "Clooney", movies: Array(3) }
```

<br/>

Otro ejemplo, en este caso muy útil para combinar arrays:

```js
const clooneyMovies = [
  ...combinedObject.movies,
  "Gravity",
  "The perfect storm"
];
console.log(clooneyMovies);
// ["Ocean's Eleven", "The descendants", "Up in the air", "Gravity", "The perfect storm"]
```

<br/>

Notemos que si en cambio hubiéramos hecho:

```js
const clooneyMovies = [combinedObject.movies, "Gravity", "The perfect storm"];
console.log(clooneyMovies);
// [["Ocean's Eleven", "The descendants", "Up in the air"], "Gravity", "The perfect storm"]
```

Tendríamos un array de **tres** elementos, el primero un array, y luego dos strings.

## Operador rest (...)

El operador rest es exactamente el mismo que spread, tres puntos `...`, la diferencia esta en cómo funciona y cómo lo utilizamos.

### En arrays

Nos sirve para aceptar una cantidad indefinida de argumentos en una función como si fuera un array. Entonces contrario a spread, rest "recompone" varios elementos en un array:

```js
function doubleNumbers(...numbers) {
  return numbers.map(n => n * 2);
}
console.log(doubleNumbers(1, 2, 3, 4, 5));
// [2, 4, 6, 8, 10]
```

<br/>

Podemos utilizar argumentos "normales" en combinación con rest de la siguiente forma:

```js
function multiplyBy(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}
console.log(multiplyBy(3, 1, 2, 3, 4, 5));
// [3, 6, 9, 12, 15]
```

### En objetos

Podemos combinar los conceptos de [object destructuring] con el operador de rest para extraer propiedades de un objeto a la vez que creamos uno nuevo en base al resto de propiedades del objeto del cual estamos extrayendo:

```js
const user = {
  name: "Alex",
  address: "Fake Street 123",
  age: 31
};
const { name, ...otherProps } = user;
console.log(otherProps);
// { address: "Fake Street 123", age: 31 }
```

Como toda nueva sintaxis que aprendemos al principio es complicado adaptarse! Pero tanto rest como spread tienen muchos usos y mucha versatilidad, y son muy utilizados en React y en casi todos los frameworks de UI.

Lo mejor es adoptarlos poco a poco!
