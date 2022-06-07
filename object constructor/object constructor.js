//objetos

//object literal
const persona = {
 nombre: 'juan',
 profesion: 'desarrollador web',
 edad: 500,
}
console.log(persona)
//object constructor
function tarea(nombre, urgencia) {
 this, (nombre = nombre)
 this, (urgencia = urgencia)
}

//crear una nueva tarea
const tarea1 = new tarea('aprender javascript y react', 'urgente')
const tarea2 = new tarea('preparar cafe', 'urgente')
const tarea3 = new tarea('pasear al perro', 'media')
const tarea4 = new tarea('conocer a mis suegros', 'baja')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)
