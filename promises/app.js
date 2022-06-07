//Promises

const aplicarDescuento = new Promise((resolve, reject) => {
 setTimeout(() => {
  let descuento = true

  if (descuento) {
   resolve('descuento aplicado!')
  } else {
   reject('no se pudo aplicar el descuento')
  }
 }, 3000)
})
aplicarDescuento
 .then((resultado) => {
  console.log(resultado)
 })
 .catch((error) => {
  console.log(error)
 })
