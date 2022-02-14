let btnComprobar = document.querySelector(".btnComprobar");

function pruebaTabla() {
  for (var i = 1, row; (row = tablaEspera.rows[i]); i++) {
    //alert(cell[i].innerText);
    for (var j = 1, col; (col = row.cells[j]); j++) {
      //alert(col[j].innerText)
      //onsole.log(`Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}`);
      let valor = parseInt(col.innerText);
      let comprobar = contadorMarcoPagina + valor;
      let letra = obtenerLetraCadena(row.innerText);
      if (comprobar <= maximoMarcoPagina) {
        contadorMarcoPagina = contadorMarcoPagina + valor;
        let remover = document.querySelector(`#${letra + valor}`);
        remover.remove();
        añadirActivo(letra, valor);
      } else {
        alert("un proceso sigue en espera");
      }
    }
  }
}

btnComprobar.addEventListener("click", () => {
  pruebaTabla();
});
