/*
 * Archivo donde encontraremos los datos a utilizar

  ! Importante: si se desea añadir otro proceso acomodar la tabla si no se rompe el diseño
   
  ? En este archivo esta la insercion de los datos al DOM

*/

/*
  ? Array con los datos
*/
const proceso = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const tipoPagina = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let selectProcesos = document.getElementById("selectProceso");
let selectTipoPagina = document.getElementById("selectPagina");
let selectTerminarProceso = document.getElementById("sTerminarProceso");

insertarProcesos();
insertarTipoPagina();

/* 
  ? iteramos nuestro array de procesos para luego insertarlos al DOM al elemento con el ID #selectProceso
 */
function insertarProcesos() {
  for (let process of proceso) {
    let contenedorProcesos = `
      <option id="${process}" value="${process}">${process}</option>
    `;
    selectProcesos.innerHTML += contenedorProcesos;
  }
}
/* 
  ? iteramos nuestro array de tipoPagina para luego insertarlos al DOM al elemento con el ID #selectTipoPagina
 */
function insertarTipoPagina() {
  for (let tpagina of tipoPagina) {
    let contenedorPagina = `
      <option id="${tpagina}" value="${tpagina}">${tpagina}</option>
    `;
    selectTipoPagina.innerHTML += contenedorPagina;
  }
}

function insertarProcesosParaFinalizar(nombre, valor) {
  let contenedorPagina = `
      <option value="${nombre + valor}">${nombre} - ${valor}</option>
    `;
  selectTerminarProceso.innerHTML += contenedorPagina;
}
