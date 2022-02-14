/*

  *Archivo donde se manejara la parte de los procesos: para darles de alta y baja

   ? En este archivo esta la generacion de nuevos procesos y bajas de procesos

*/

let btnIniciarProceso = document.getElementById("btnIniciar");
let procesoActual;
let tipoPaginaActual;
let tablaEspera = document.getElementById("tEspera");
/*
  !Importante: selectProcesos y selectTipoPagina las llamamos desde el js datos.js 

  ? Atento a cuando el usuario realice un cambio en el comboBox para guardar el valor a utilizar
*/
selectProcesos.addEventListener("change", function () {
  var selectedOption = this.options[selectProcesos.selectedIndex];
  procesoActual = selectedOption.value;
});

selectTipoPagina.addEventListener("change", function () {
  var selectedOption = this.options[selectTipoPagina.selectedIndex];
  tipoPaginaActual = parseInt(selectedOption.value);
});

/*
  ? Atento a cuando el usuario realice click en el boton de iniciar proceso para añadir a nuestro arrays de procesos activos y mostrarlo en la tabla de procesos activos
*/

btnIniciarProceso.addEventListener("click", () => {
  if (procesoActual == undefined || tipoPaginaActual == undefined) {
    alert("Seleciona un proceso y un tipo de pagina");
  } else {
    contadorMarcoPagina = contadorMarcoPagina + tipoPaginaActual;
    if (contadorMarcoPagina <= maximoMarcoPagina) {
      añadirActivo(procesoActual, tipoPaginaActual);
    } else {
      contadorMarcoPagina -= tipoPaginaActual;
      alert("Marco de Pagina lleno, lo enviaremos a proceso de espera");

      let contenedorProcesoEspera = `
      <tbody id="${procesoActual + tipoPaginaActual}">
        <tr>
          <td>${procesoActual}</td>
          <td>${tipoPaginaActual}</td>      
        </tr>
      </tbody>
    
      `;
      tablaEspera.innerHTML += contenedorProcesoEspera;
    }
  }
});

function añadirActivo(proceso, numero) {
  let tablaActivos = document.getElementById("tActivos");
  let contenedorProcesos = `
      <tbody id="${proceso + numero}">
        <tr>
          <td>${proceso}</td>
          <td>${numero}</td>        
        </tr>
      </tbody>
    `;
  tablaActivos.innerHTML += contenedorProcesos;
  llenarGrafica(contadorMarcoPagina);
  insertarProcesosParaFinalizar(proceso, numero);
}
