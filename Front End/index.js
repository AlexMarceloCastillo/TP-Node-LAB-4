
fetch("http://localhost:3000/empleados")
.then(resp=>resp.json())
.then(data=>{
  data.forEach((e)=>{
    document.getElementById('tablebody').innerHTML += "<tr>" +
        '<td>' + e.legajo + '</td>' +
        '<td>' + e.nombre + '</td>' +
        '<td>' + e.apellido + '</td>' +
        '<td>' + e.dni + '</td>' +
        '<td>' + e.sector + '</td>' +
        '<td>' + e.fecha_ingreso + '</td>' +
        '<td>' + e.activo + '</td>' +
        "<td><a href='pages/put/put.html?id="+e.legajo+"'><button class='btn btn-warning'>Editar</button></a></td>" +
        "<td onclick=eliminar("+e.legajo+")><button class='btn btn-danger'>Eliminar</button></td>" +
        +"</tr>";
  })
})
.catch(error=>console.log(error))

function eliminar(legajo){
if(confirm('DESEA ELIMINAR ESTE EMPLEADO?')){
  fetch("http://localhost:3000/delete/"+legajo,{
    method:'DELETE',
    mode: 'cors'
  })
  .then(()=>{alert('Borrado con exito');location.reload()})
  .catch(err=>console.log(err))
}

}
