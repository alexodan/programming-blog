---
date: 2021-05-11
title: "Intro a la programación funcional con JavaScript"
thumbnail: "../thumbnails/wp.png"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: intro-programacion-funcional
categories:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
tags:
  - JavaScript
  - Functional Programming
  - Programacion Funcional
---

<!-- ![park](./images/park.jpg) -->

![Functional Programming](./images/intro-programacion-funcional.jpg)

<p style="text-align: center;">Photo by <a href="https://unsplash.com/photos/KFIjzXYg1RM">Jeremy Bishop</a> on <a href="https://unsplash.com">Unsplash</a></p>

### Que es programación funcional?

Es uno de los tantos paradigmas de programación que existen. Cada paradigma propone un modelo mental, una formar de pensar a la programación, y va a influir radicalmente en cómo expresamos nuestro código y diseñamos nuestra aplicación.

En un sentido más práctico, la programación funcional se basa fundamentalmente en programar a través de funciones (_yes I know_), pero dichas funciones deben cumplir con ciertas reglas! 👇

- Usar **funciones puras** (Use pure functions).
- Evitar **efectos colaterales** (Avoid side effects).
- Evitar **estado compartido** (Avoid shared state).
- Evitar la **mutación de datos** (Avoid mutable data).

Seguir estas normas nos va a ayudar a escribir código más resiliente, más fácil de leer, menos propenso a errores y más fácil de predecir.

Veamos en mayor detalle como podemos cumplir con estas reglas y como es que nos pueden beneficiar.

### Funciones puras

Que una función sea pura significa que para un mismo input, siempre va a retornar el mismo output. También implica que la función no produce efectos colaterales.

**Esta función NO es pura**

```js
const increaseBalance = account => {
  account.balance += 1;
  return obj;
};
const account = {
  balance: 100
};
increaseBalance(account); // retornará { balance: 101 }
increaseBalance(account); // esta vez retornará { balance: 102 }
```

Tener una variable que es accesible y pueda ser modificada desde distintos scopes (en este caso, el global y el scope de increaseBalance) hace nuestro código mas difícil de seguir, ya que conforme la aplicación crece, tenemos que conocer toodo el flujo del programa para saber si algo cambió o no, y por qué.

**Esta función SI es pura**

```js
const increaseBalance = account => {
  return {
    ...account,
    balance: obj.balance + 1
  };
};
const account = {
  balance: 100
};
increaseBalance(account); // retornará { balance: 101 }
increaseBalance(account); // también retornará { balance: 101 }
```

<br/>

Si programamos de manera funcional, no vamos a tener que preocuparnos de que la invocación a una función cambie algo inesperado en el programa, ya que las funciones puras no modifican variables que estén fuera de su scope.

> _Favorecer el uso de funciones puras ayuda muchísimo a que éstas sean más predecibles y fáciles de testear._

### Evitar los **efectos colaterales**

Esto está muy conectado con el punto anterior. Un efecto colateral es cualquier cambio en el estado de la aplicación que pueda ser visible por fuera de la invocación a una función, excluyendo el valor que retorna.

Los siguientes escenarios son efectos colaterales:

- Modificar una variable externa o una propiedad de un objeto fuera del scope de la función.
- Escribir en la consola, escribir en la pantalla, escribir en un archivo.
- Disparar un proceso externo.
- Llamar otras funciones con efectos colaterales.

Entonces la siguiente función:

```js
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
```

</br>

Produce un efecto colateral, ya que escribimos en la consola! (Booo...)

Es cierto, y es natural pensar que esto es un tanto extremo, es inevitable (_y deseable_) que tarde o temprano tengamos funciones impuras en nuestro programa, después de todo si éste no hiciera requests o no escribiera en una base de datos, no serviría de mucho.

Lo que debemos rescatar es que podemos aplicar las reglas de la programación funcional para aislar lo mejor que podamos las funciones puras de las impuras, ya que de esa manera vamos a poder hacer nuestro programa más escalable, y simple de refactorizar y de mantener. Es la razón por la cual la mayoría de las librerías o frameworks de front-end nos invitan a manejar el estado de nuestra aplicación por un lado y el renderizado de los componentes por otro, teniendo a ambos desacoplados.

El próximo paso para seguir aprendiendo sobre programación funcional es conocer el rol de los [**callbacks y funciones de orden superior**](https://programandoconresaca.netlify.com/callbacks-y-funciones-de-orden-superior)
