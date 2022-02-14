let btnTerminarProceso = document.getElementById("terminar");
let procesoActualTerminar;

selectTerminarProceso.addEventListener("change", function () {
  var selectedOption = this.options[selectTerminarProceso.selectedIndex];
  procesoActualTerminar = selectedOption.value;
});

btnTerminarProceso.addEventListener("click", () => {
  let remover = document.querySelector(`#${procesoActualTerminar}`);
  if (remover == null) {
    alert("Selecciona una opcion para remover");
  } else {
    remover.remove();
    selectTerminarProceso.remove(selectTerminarProceso.selectedIndex);
    insertarProcesosFinalizados();

    pruebaTabla();
  }
});

function insertarProcesosFinalizados() {
  let tablaFin = document.getElementById("tFin");

  let contenedorFin = `
      <tr> 
        <td>${obtenerLetraCadena(procesoActualTerminar)}</td>
        <td>${convertirNumeroDeCadena(procesoActualTerminar)}</td>
       </tr>
      `;
  tablaFin.innerHTML += contenedorFin;

  vaciarGrafica(
    convertirNumeroDeCadena(procesoActualTerminar),
    contadorMarcoPagina
  );
  contadorMarcoPagina =
    contadorMarcoPagina - convertirNumeroDeCadena(procesoActualTerminar);
}

function convertirNumeroDeCadena(proceso) {
  let obtenerTipoPagina = proceso.charAt(1);
  let obtenerTipoPagina2 = proceso.charAt(2);
  obtenerTipoPagina = obtenerTipoPagina + obtenerTipoPagina2;
  let conversion = parseInt(obtenerTipoPagina);
  return conversion;
}

function obtenerLetraCadena(proceso) {
  return proceso.charAt(0);
}
