//objetos
function mostrarinformaciontarea(tarea, prioridad) {
 return `la tarea ${tarea} tiene una prioridad de ${prioridad}`
}
//object literal
const persona = {
 nombre: 'juan',
 profesion: 'desarrollador web',
 edad: 500,
}
//console.log(persona)
//const mostrarcliente = mostrarinformaciontarea(persona.tarea, persona.profesion)
//console.log(mostrarcliente)
//object constructor
function tarea(nombre, urgencia) {
 this, (nombre = nombre)
 this, (urgencia = urgencia)
}

//agregar un prototype o tarea
tarea.prototype.mostrarinformaciontarea = function () {
 return `la tarea ${this.nombre}tiene una prioridad de ${this.urgencia}`
}

//crear una nueva tarea
const tarea1 = new tarea('aprender javascript y react', 'urgente')
const tarea2 = new tarea('paseasr al perro', 'media')

console.log(tarea1)
console.log(tarea1.mostrarinformaciontarea())
console.log(tarea2)
console.log(tarea2.mostrarinformaciontarea())
