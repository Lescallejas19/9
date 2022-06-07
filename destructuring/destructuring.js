//destructuring de objetos
const aprendiendojs = {
 version: {
  nueva: 'es6',
  anterior: 'es5',
 },
 frameworks: ['react', 'vuejs', 'angularjs'],
}
//destructuring es extraer valores de un objeto
//console.log(aprendiendojs)
//version anterior
//let version= aprendiendojs.version.nueva;
//let framework= prendiendojs.frameworks[1];
//drestructuring forma nueva
let { anterior } = aprendiendojs.version
console.log(anterior)
