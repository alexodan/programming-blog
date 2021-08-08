---
date: 2021-07-04
title: "Destructuring de objetos y arrays"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: destructuring-objetos-y-arrays
categories:
  - JavaScript
tags:
  - JavaScript
---

### Destructuring de objetos...

Manipular objetos y arrays es una tarea muy común, por eso es que una de las funcionalidades de JavaScript es la posibilidad de hacer **destructuring** de objetos y arrays.

Es bastante frecuente encontrarnos con la necesidad de declarar variables a partir de un objeto (que podemos recibir como parametro o a través de un request, por ejemplo):

```js
const usuario = {
  nombre: "Freddo",
  email: "freddo@mail.com",
  permisos: {
    lectura: true,
    escritura: false
  }
};
const nombre = usuario.nombre;
const email = usuario.email;
const puedeLeer = usuario.permisos.lectura;
const puedeEscribir = usuario.permisos.escritura;
```

Sin embargo esto es un poco tedioso y tambien abulta nuestro codigo sin agregar mucho valor, por eso fue que se agrego la sintaxis de _destructuring_:

```js
const usuario = {
  nombre: "Freddo",
  email: "freddo@mail.com",
  permisos: {
    lectura: true,
    escritura: false
  }
};
const { nombre, email } = usuario;
const { lectura: puedeLeer, escritura: puedeEscribir } = usuario.permisos;
console.log(nombre, email); // Freddo freddo@mail.com
console.log(puedeLeer, puedeEscribir); // true false
```

Al hacer _destructuring_ usamos como nombres de variables el nombre de las propiedades del objeto sobre el cual 'extraemos' la información. Notese que `nombre` e `email` son propiedades de `usuario`. Si no queremos extraer la propiedad usando una variable con el mismo nombre podemos asignarle un sinónimo, tal como se ve al extraer `lectura` y `escritura` de `usuario.permisos` donde la sintaxis es `const { nombrePropiedad: sinonimo } = objeto`.

También podemos hacer destructuring en una sola sentencia:

```js
const {
  nombre,
  email,
  permisos: { lectura: puedeLeer, escritura: puedeEscribir }
} = usuario;
console.log(nombre, email); // Freddo freddo@mail.com
console.log(puedeLeer, puedeEscribir); // true false
```

Puede ocurrir que la propiedad que queremos extraer no se encuentre en el objeto, y tal vez queramos resguardarnos de esa posibilidad usando un valor predeterminado al hacer destructuring:

```js
const producto = {
  nombre: "mesa",
  color: "musgo",
  precio: 2900
};
const { stock = 0 } = producto;
console.log(stock); // 0
```

### Destructuring en arrays

A diferencia del caso de los objetos, en el cual el orden en que extraemos las propiedades no importa, el caso de los array el orden si es importante.

```js
const [primerItem, segundoItem] = [100, 200, 300, 400];
console.log(primerItem); // 100
console.log(segundoItem); // 200
```

También podemos extraer el resto de los elementos usando el operador de spread (...)

```js
const [primerItem, segundoItem, ...otrosItems] = [100, 200, 300, 400];
console.log(primerItem); // 100
console.log(segundoItem); // 200
console.log(otrosItems); // [300, 400]
```

### Ejemplos tipicos

Es sumamente común encontrarnos con estos usos también al declarar funciones:

```js
const producto = {
  nombre: "mesa",
  precio: 1000
};
function calcularPrecioConImpuestos({ precio }, recargo) {
  return precio + (precio * recargo) / 100;
}
calcularPrecioConImpuestos(producto, 15); // 1150
```

Otro caso muy típico es extraer cierta propiedad o propiedades de un array de objetos:

```js
const usuarios = [
  { nombre: "Freddo", email: "freddo@mail.com" },
  { nombre: "Nadia", email: "nadia@mail.com" },
  { nombre: "Steph", email: "steph@mail.com" }
];
const nombres = usuarios.map(({ nombre }) => nombre);
console.log(nombres); // ["Freddo", "Nadia", "Steph"]
```
