var form = document.querySelector('form');
console.log(form)

form.onsubmit = (e)=>{
  e.preventDefault()

  var nombre = document.getElementById('nombre').value
  var apellido = document.getElementById('apellido').value
  var dni = document.getElementById('dni').value
  var sector = document.getElementById('sector').value
  var fecha = document.getElementById('fecha').value
  var activo = document.getElementById('activo').checked
  const data = new URLSearchParams();
  data.append('nombre',nombre)
  data.append('apellido',apellido)
  data.append('dni',dni)
  data.append('sector',sector)
  data.append('fecha_ingreso',fecha)
  data.append('activo',activo)
    fetch("http://localhost:3000/insert",{
      method: 'POST',
      body:data
    })
    .then(resp=>resp.json())
    .then(data=>{console.log(data);alert('Creado con exito');window.location.href = "../../index.html"})
    .catch(err=>{console.log(err);alert('ERROR AL CREAR')})
}
