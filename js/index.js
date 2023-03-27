import { services } from "./data.js";
const contIndexServ = document.querySelector(".contIndexServ");

function TresServicios(servicios) {
  let tarjetas = "";
  for (const s of servicios.slice(0, 3)) {
    tarjetas += `<div class="cont-serv">
        
            <div style=" background-image: linear-gradient(
                        0deg,
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                        ),
                        url( ${s.image} );
                        background-position: center, center;
                        background-size: cover;
                        padding: 20px;
                        margin: 20px;
                        border-radius: 15px;">
            <h3>${s.name} </h3>
            <p class="p-description">
                    ${s.description}
            </p>
                    <button type="button" class="boton" onclick="window.location.href='../pages/servicio.html?id=${s._id}'">+info</button>

            </div>

        </div>
       `;
  }
  return tarjetas;
}

contIndexServ.innerHTML = TresServicios(services);
