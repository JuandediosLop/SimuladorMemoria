let maximoMarcoPagina = 15;
let contadorMarcoPagina = 0;

let grafica = document.querySelector(".marcoPagina");
añadirGrafica();

function añadirGrafica() {
  for (let index = 1; index <= maximoMarcoPagina; index++) {
    let contenedorGrafica = `
      <div class="progress-bar blue stripes shine">
        <span id="llenar${index}" style="width: 0%"></span>
      </div>
        `;
    grafica.innerHTML += contenedorGrafica;
  }
}
function llenarGrafica(recorrer) {
  for (index = 1; index <= recorrer; index++) {
    let llenar = document.querySelector(`#llenar${index}`);
    llenar.style.width = "100%";
  }
}

function vaciarGrafica(recorrer, activos) {
  let resta = activos - recorrer;
  for (pin = activos; pin > resta; pin--) {
    let llenar = document.querySelector(`#llenar${pin}`);
    llenar.style.width = "0%";
  }
}
