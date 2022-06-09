/***********************************/
/* Ejercicios con tipos de datos: */
/**********************************/

// Declaración de una variable de tipo number de tipo entero

// Declaración de una variable de tipo number de tipo flotante

/* Colocar el resultado después de cada // */
const nombre = 'JS'
let apellido

console.log(parseFloat('10.5.56')) // 10.5
console.log(parseInt('10.5 usd')) // 10

console.log(`Hola ${1}`) // Hola 1
console.log(`Hola ${'nombre'}`) // Hola nombre
console.log(`Hola ${nombre}`) // Hola JS

console.log('Una cadena de texto'[4]) // c
console.log('Una cadena de texto'[0]) // U

console.log('LasQuinceLetras'.length) // 15

console.log(1 / 0) // Infinity
console.log(typeof 1 / 'dos') // Nan

console.log(apellido) // undefined

// Convierta la cadena a un número entero
const cadenaEntero = '250px'
let cadenaEnteroParse = parseInt(cadenaEntero);


// Convierta la cadena a un número flotante
const cadenaFlotante = '250.5px'
let cadenaFlotanteParse = parseFloat(cadenaFlotante);

// Responda las siguientes preguntas:
// 1. ¿Qué tipo de dato es el número negativo?
    //numeric

// 2. ¿Qué tipo de dato es el número NaN?
    //No number

// 3. ¿Qué tipo de dato es el valor boleano true?
    //lógico

// 4. Si una varibale fue declarada con let, pero no se le asignó un valor, ¿qué valor tiene?
    //undefined

// 5. ¿Cual es el tipo de dato que se le conoce como valor vacio o desconocido?
    //null


    console.log('iou' / 'uy');