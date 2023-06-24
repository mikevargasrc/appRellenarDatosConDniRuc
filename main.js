var boton = document.getElementById("boton");


const dniini = document.getElementById('dni');
const botonBuscar = document.getElementById('boton');
const documento = document.getElementById('doc');
const nombress = document.getElementById('nombre');
const apellidoss = document.getElementById('apellido');

botonBuscar.addEventListener('click', traer);


function traer(){
    const dni = dniini.value;

fetch (
        `https://dniruc.apisperu.com/api/v1/dni/${encodeURIComponent(dni)}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRlc2Fycm9sbGFkb3JAcGF0cm9sLmNvbS5wZSJ9.JJo1ILgQu-w0zv4sTmUqKWl_H5MOcNOo3m4PAME20NE`
      )
    .then(response => response.json())
    .then(({dni, nombres, apellidoMaterno, apellidoPaterno}) => {

        documento.value = dni;
        nombress.value = nombres;
        apellidoss.value = `${apellidoPaterno} ${apellidoMaterno}`;





    });
}










