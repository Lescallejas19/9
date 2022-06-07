const descargarusuarios = (cantidad) =>
 new Promise((resolve, reject) => {
  //pasar la cantidad a la api
  const api = `https://randomadauser.me/api/?results=${cantidad}&nat=us`
  //llamado a ajax
  const xhr = new XMLHttpRequest()
  //abrir la conexion
  xhr.open('get', api, true)
  //on load
  xhr.onload = () => {
   if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText).results)
   } else {
    reject(error(xhr.statusText))
   }
  }
  //opcional (on error)
  xhr.oneror = (error) => reject(error)
  //send
  xhr.send()
 })
descargarusuarios(30).then(
 (miembros) => console.log(miembros),
 (error) => console.error(new error('hubo un error' + error))
)
