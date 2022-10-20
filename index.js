//Principios básicos de Javascript
//--- Tipos de datos en Javascript ---//
/*
Let
Un bloque en JavaScript se puede entender como “lo que queda entre dos llaves”, ya sean definiciones de funciones o bloques if, while, for y loops similares. Si una variable es declarada con let en el ámbito global o en el de una función, la variable pertenece al ámbito global o al ámbito de la función respectivamente.

Const
Al igual que con let, el ámbito (scope) para una variable declarada con const es el bloque. 
Sin embargo, const además prohíbe la reasignación de valores (const viene de constant).
*/

//--- Funciones en Javascript ---//
/*
Declaración
- nombre:  Es el nombre de la función. Se puede omitir, en ese caso la función se conoce como función anónima.
- param: Es el nombre de un argumento que se pasará a la función. Una función puede tener hasta 255 argumentos.
- instrucciones: Son las instrucciones que forman el cuerpo de la función

Funciones Anónimas
- Cuando una función se define sin un nombre, se conoce como una función anónima
- La función se almacena en la memoria, pero el tiempo de ejecución no crea automáticamente una referencia a la misma
- Hay varios escenarios donde las funciones anónimas son muy convenientes.

Ejemplo: 
function([param[,param[, ...param]]]) {
    instrucciones
 }

 Usos de una funcion anonima
 Asignando una función anónima a una variable

var foo = function( ){ /.../ }; 
Devolviendo una función anónima desde otra función

function foo( ) { return function( ){ /.../ } };
Invocando inmediatamente una función anónima

(function( ){  var foo = ''; })( )

Funciones IIFE
Las expresiones de función ejecutadas inmediatamente (“IIFE”: Immediately Invoked Function Expressions), son funciones que se ejecutan tan pronto como se definen.

Se componen por dos partes
- función anónima con alcance léxico encerrado por el  Operador de Agrupación ()
- expresión de función cuya ejecución es inmediata ()

Scope
- Indica el ámbito o alcance actual de ejecución.
- En él los valores y las expresiones son "visibles" o pueden ser referenciados.
- Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito
- Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.

Ejemplo Scope válido
const x = 'declarada en el scope global'

function exampleFunction() {
   console.log(x) // x existe acá adentro
}

exampleFunction() // esto no lanza error

console.log(x) // x existe acá afuera también

Closure

- Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). 
- En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. 
- En JavaScript, las clausuras se crean cada vez que una función es creada.

Template String
Las plantillas de texto (o Template Strings) son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones.
Caracteristicas
- Los template string utilizan las comillas invertidas ` (grave accent o backtick) para delimitar las cadenas, en lugar de las comillas sencillas o dobles.

- Si se utiliza ${ } dentro de su expresión se habilita la interpolación, sustituyendo el fragmento por el valor al que apunta. Pueden ejecutar código en su interior.

- Soportan texto multilínea, manteniendo el formato introducido, incluyéndose los saltos de línea y las tabulaciones.

Funciones y Closures
- Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
- Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
- Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

Clases
Declaración de clases
class Cliente {
    constructor (nombre, fecha, direccion) {
            this.nombre = nombre;
            this.fechaNacimiento = fecha;
            this.direccion = direccion;
       }
}

Caracteristicas
- El contenido de una clase es la parte que se encuentra entre las llaves { }. En ella se declaran los atributos y los métodos, tanto de instancia como de clase.
- Poseen un método constructor donde se declaran los atributos usando la palabra reservada this.
- Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase.
- Las clases son sólo azucar sintáctica, es decir, no son una nueva funcionalidad, solo una nueva manera de escribir lo que antes ya se podía pero de otra manera menos convencional.
*/
//Ejemplo de funcion
// function saludar(){
//     let nombre = 'Santiago'
//     let apellido = 'Quiroz'

//     let saludo = `Hola soy ${nombre} ${apellido}`
//     console.log(saludo)
// }

// saludar()

//Creacion de objetos
class Persona {
    #nombre
    #colores

    constructor(nombre) {
        this.#nombre = nombre
        this.#colores =[] 
    }
    obtenerNombre() {
        return this.nombre
    }
    obtenerColores() {
        return this.nombre
    }
    agrgarColor(color){
        this.#colores.push(color)
    }
}

const p1 = new Persona('Santiago')
const p2 = new Persona('Pepe')
const p3 = new Persona('Luis')

console.log(p1.obtenerNombre())
console.log(p2.obtenerNombre())
console.log(p3.obtenerNombre())

//042000