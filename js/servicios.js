import { services } from "./data.js";
const contServicios = document.getElementById("contServicios");

function mostrarServicios(servicios) {
  let tarjetas = "";
  for (const s of servicios) {
    tarjetas += `
         <div class="card">
          <img class="tarjetas-img" src="${s.image}" alt="" />
          <div class="card-body">
            <h3 class="card-title"><b>${s.name}</b></h3>
            <p class="card-text p-description"> ${s.description} </p>
            <h5 > <b>...</b></h5>
            <button id="botonJs" type="button" class="boton" onclick="window.location.href='../pages/servicio.html?id=${s._id}';">Mas Detalles</button>
          </div>
        </div>`;
  }
  return tarjetas;
}

function actualizarServicios(servicios) {
  contServicios.innerHTML = mostrarServicios(servicios);
}

actualizarServicios(services);
