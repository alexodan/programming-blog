---
date: 2021-05-29
title: "Funciones Flecha (Arrow Functions)"
cover: "https://unsplash.it/400/300/?random?TheFallenTime"
slug: funciones-flecha
categories:
  - JavaScript
tags:
  - JavaScript
  - ES6
---

## Que son las funciones flecha?

Antes de [EcmaScript6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015), no teníamos una forma concisa de escribir funciones, sino que necesariamente teníamos que usar la siguiente sintaxis:

```js
function felicitar() {
  return "Felicitaciones!";
}
```

## (No tan) Nueva sintaxis

A partir de 2015 se añade la sintaxis de flecha para escribir funciones.

Las funciones flecha (muchas veces nos encontramos con el término en inglés, más popular, de arrow function) comienzan con una lista de parametros que espera la función:

`(a, b, c)` seguida de una flecha `=>`, seguida a su vez por el cuerpo de la función:

```js
const miFuncion = (a, b, c) => {
  console.log("Sumando a, b y c...");
  return a + b + c;
};
```

<br/>

_Si la función solo toma un parámetro, sos libre de usar paréntesis o no, como prefieras! Si en cambio no toma ningún parametro de entrada (o toma más de uno) tenés que usarlos obligadamente._

### Más ejemplos de arrow functions

```js
const felicitar = () => "Felicitaciones!";
```

```js
const incrementar = num => num + 1;
// Al recibir un solo parametro, podemos omitir los paréntesis ()!
```

### Importante! 👀

_Si nuestra función es de una sola línea y usamos la notación de flecha, podemos omitir el uso de llaves, pero debemos prescindir del `return` también, de lo contrario nos dará un error, ya que esta forma hace un return implícito._

```js
// ❌ Declarar la siguiente funcion nos da un error:
const saludar = (nombre) => return "Hola " + nombre;
// ✅ Si omitimos el return funciona como esperamos:
const saludar = (nombre) => "Hola " + nombre;
```

En cambio cuando se hace uso de las llaves `{}` debemos explícitamente usar la keyword `return` si queremos devolver algo al finalizar la función.

```js
const felicitar = () => {
  "Felicitaciones!";
};
// felicitar() va a devolver undefined ☹️
```

## Para qué sirven las funciones flecha?

Como adelantamos en los ejemplos, son muy útiles para declarar funciones de línea (inline functions), tomemos un caso:

```js
["this", "is", "sparta!"].map(function(str) {
  return str.toUpperCase();
});
// este bloque devolverá ['THIS','IS','SPARTA!']
```

Con arrow functions podemos tomar ventaja de una sintaxis menos _ruidosa_, haciendo nuestro código más conciso y claro (una vez nos acostumbramos!):

```js
["this", "is", "sparta!"].map(str => str.toUpperCase());
// este bloque también devolverá ['THIS','IS','SPARTA!']
```

<br/>

También son útiles para declarar funciones `curried` de manera más concisa. Las curried functions son funciones que toman múltiples argumentos, uno a la vez, y retornan una función que espera el próximo argumento, y así sucesivamente:

```js
function sumar(a) {
  return function(b) {
    return a + b;
  };
}
```

Con arrow function:

```js
const sumar = a => b => a + b;
```

Hay varias cosas adicionales adicionales para mencionar sobre las funciones de flecha, pero lo dejaremos para la [segunda parte](https://programandoconresaca.netlify.com/funciones-flecha-p2) de este artículo!

No dejes que las arrow function te intimiden, al principio tal vez te cueste más leerlas y entenderlas, pero cuánto más las uses más fáciles te resultarán.
