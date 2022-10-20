class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = apellido
    }
 
    static saludoCorto = 'hola'
 
    saludoCompleto() {
        console.log(`buenaaass, soy ${this.nombre}`)
    }
 
    saludoEstatico() {
        console.log(Persona.saludoCorto)
    }
 }
 