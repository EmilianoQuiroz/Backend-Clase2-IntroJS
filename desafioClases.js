/**Consigna: implementar un programa que contenga una clase llamada contenedor que implemente los siguienetes metodos
 * Save(Objet): void - Recibe un objeto y lo guarda
 * getById(Number): Objet - Recibe un id y devuelve un objeto con ese id
 * getAll(): Objet[] - Devuelve un Array con los objetos presentes
 * deleteById(Number): void - Elimina el objeto con el id buscado
 * deleteAll(): void - Eliminar todos los objetos presentes
 */
class Contenedor {
    /** Creamos el constructor con los atributos que vamos a necesitar */
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  /**Creamos la funcion que nos retornara el nombre y el apellido del usuario */
  getFullName() {
    //Retorno el nombre y el apellido
    return `${this.nombre} ${this.apellido}`;
  }
  /** Creamos el array donde se almacenara la cantidad de mascotas que tienen el usuario */
  addMascota(mascota) {
    //Agrego la mascota en el array
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  /** Creamos el array de objetos donde guardamos el nombre del libro y el autor */
  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }
  getBookNames() {
    let arr = [];
    for(let i = 0 ; i < this.libros.length ; i++) {
        arr.push(this.libros[i].nombre)
        arr.push(this.libros[i].autor)
    }
    return arr;
  }
}
/**Creamos la constante usuario donde invocamos todos sus metodos */
let Santiago = new Contenedor(
  "Santiago",
  "Quiroz",
  /*Array de objetos */ [
    { nombre: "C para ingeniria electronica", autor: "Jorge Argibay" },
    { nombre: "eloquent javascript", autor: "Marijn Haverbeke" },
    { nombre: "Algoritmos y estructuras de datos", autor: "Augusto Vega" },
  ],
  /*Array de mascotas*/ ["Michi", "Pichi", "Chichi"]
);
/**Muestro en consola el nombre completo */
console.log(Santiago.getFullName());
/**Agrego una mascota nueva al contador de mascotas */
Santiago.addMascota("Pepe")
/**Muestro en consola el numero de mascotas junto con la nueva mascota adicionada */
console.log(Santiago.countMascotas())
/**Agrego un nuevo libro a la lista de nombres de libros */
Santiago.addBook("Redes De Computadores", "Daniel Martins")
/**Muestro por consola los nombre de libros mas el libro adicionado recientemente */
console.log(Santiago.getBookNames())
