const params = new URLSearchParams(window.location.search)
fetch("http://localhost:3000/empleado/"+params.get('id'))
.then(resp=>resp.json())
.then(data=>{
  document.getElementById('nombre').value=data[0].nombre;
  document.getElementById('apellido').value=data[0].apellido;
  document.getElementById('dni').value=data[0].dni;
  document.getElementById('sector').value=data[0].sector;
  let date = new Date(data[0].fecha_ingreso)
  let mes = "";
  let dia = "";
  if(date.getMonth() >= 10){
    mes = date.getMonth();
  }else{
    mes = "0"+(date.getMonth()+1)
  }
  if(date.getDay() >= 10){
    dia = date.getDay()
  }else{
    dia = "0"+(date.getDay()-1);
  }
  document.getElementById('fecha').value=date.getFullYear()+"-"+mes+"-"+dia
  document.getElementById('activo').checked = data[0].activo;
})
.catch(err=>console.log(err))

var form = document.querySelector('form');

form.onsubmit = (e)=>{
  e.preventDefault()

  var nombre = document.getElementById('nombre').value
  var apellido = document.getElementById('apellido').value
  var dni = document.getElementById('dni').value
  var sector = document.getElementById('sector').value
  var fecha = document.getElementById('fecha').value
  var activo = document.getElementById('activo').checked
  const data = new URLSearchParams();
  data.append('legajo',params.get('id'))
  data.append('nombre',nombre)
  data.append('apellido',apellido)
  data.append('dni',dni)
  data.append('sector',sector)
  data.append('fecha_ingreso',fecha)
  data.append('activo',activo)
  console.log(data)
  data.forEach((e)=>{
    console.log(e)
  })
    fetch("http://localhost:3000/update/"+params.get('id'),{
      method: 'PUT',
      body:data
    })
    .then(resp=>resp.json())
    .then(data=>{console.log(data);alert('Editado con exito');window.location.href = "../../index.html"})
    .catch(err=>{console.log(err);alert('ERROR AL EDITAR')})
}
