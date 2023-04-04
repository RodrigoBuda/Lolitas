import { services } from "./data.js";
const contServicio = document.getElementById("contServicio");
let queryString = location.search;
let params = new URLSearchParams(queryString);
const id = params.get("id");
const serv = services.find((d) => d._id == id);

let servicio = "";
servicio = `<div class="card">
          <img class="tarjetas-img" src="${serv.image}" alt="" />
          <div class="card-body">
            <h3 class="card-title"><b>${serv.name}</b></h3>
            <p class="card-text"> ${serv.description} </p>
            <p class="p-price"><b> ${serv.price}</b> </p>
          </div>
        </div>`;

contServicio.innerHTML = servicio;
