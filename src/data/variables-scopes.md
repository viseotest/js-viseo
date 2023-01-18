# **Les types de variables**

## Les instruction var, let et const
***

En javascript pour stocker des valeurs dans des variables, nous utilistions les instructions suivantes :

* const 
* let 
* var

ces trois types d'insctructions ont leur propre scope, vous trouverez ci-dessus la façon dont ils sont construits.

```jsx
const constElement = 'MON_ELEMENT'
let letElement
var varElement
```

### Instruction const

Comme son nom l'indique l'instruction __`const`__ peux etre mis au même niveau qu'une __`constante`__.
Cela signifie que la valeur affectée à ce type d'instruction ne peut changer et est toujours défini, par consequent sa valeur sera uniquement accessible en `lecture seul`.

```jsx
const number = 42;
```

> Une **const** est un conteneur de type **immuable**

```jsx
const number = 42

try {
  number = 99
} catch (err) {
  console.log(err)
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number); // Output: 42
``` 

dans l'exemple ci-dessous la variable **`number`** prent comme valeur **`42`**, qui par la suite change pour __`99`__ OR cette operation n'est pas possible car l'instruction de cette variable est une __`constante`__.

### Insctruction let

l'instruction __`let`__ permet de declarer une variable dont la portée est celle du scope courant.
Sa valeur peut etre initie ou non.

```jsx
let number = 0
// ou 
let number
```

Quand sa valeur n'est pas défini alors par defaut l'instruction renverra __`undefined`__.

```jsx
let number
// output : undefined
```

> Une **const** est un conteneur de type **immuable**

dans l'exemple ci-dessous la variable **`number`** prent comme valeur **`42`**, qui par la suite change pour `99` OR cette operation n'est pas possible car le decorateur de cette variable est une `constante`.

```jsx
let number = 42
number = 99
console.log(number) // Output: 42
``` 