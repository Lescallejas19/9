//template strings
const nombre = 'ronald'
const edad = '30'
const empleo = 'docente'
console.log(
 `mi nombre es:${nombre} y tengo ${edad} años de edad, actualmente soy ${empleo}`
)
const contenedorApp = document.querySelector('.app')
let html = `
 <ul>
  <li>nombre: ${nombre}</li>
  <li>edad: ${edad}</li>
  <li>empleo: ${empleo}</li>
 </ul>
`
contenedorApp.innerHTML = html
