//parametros por default en las funciones

const actividad = function (
 nombre = 'walter white',
 actividad = 'enseñar quimica'
) {
 console.log(
  `la persona ${nombre}, esta realizando la actividad  de ${actividad}`
 )
}
actividad('Juan', 'Aprender JavaScript')
actividad('pedro', 'creando un sitio web')
actividad('antonio')
