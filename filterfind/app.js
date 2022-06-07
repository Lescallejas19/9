//metodos de arreglo

const personas = [
 { nombre: 'juan', edad: 23, aprendiendo: 'javascript' },
 { nombre: 'Pablo', edad: 18, aprendiendo: 'php' },
 { nombre: 'alejandra', edad: 21, aprendiendo: 'adobexd' },
 { nombre: 'caren', edad: 30, aprendiendo: 'python' },
 { nombre: 'miguel', edad: 35, aprendiendo: 'reactj5' },
]
console.log(personas)

//mayores de 28 años
const mayores = personas.filter((persona) => {
 return persona.edad > 28
})
//console.log(mayores);

//que aprende alejandra y su edad
const alejandra = personas.find((persona) => {
 return persona.nombre === 'alejandra'
})
//console.log("alejandra esta aprendiendo: " + alejandra.aprendiendo);
let total = personas.reduce((edadtotal, persona) => {
 return edadtotal + persona.edad
}, 0)
