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

// let tarjeta = "";
// let cardDetails = document.getElementById("cardDetails");

// let queryString = location.search;
// let params = new URLSearchParams(queryString);
// const id = params.get("id");
// const details = events.find((d) => d._id == id);

// tarjeta = `
//     <div class="card card-details">
//       <div class="cont-img-details">
//         <img class="img" src="${details.image}" alt="..." />
//       </div>
//       <h1>${details.name}</h1>
//       <p class="text-details">
//         ${details.description}
//       </p>
//       <p>
//         <b> Asistance:</b> ${details.assistance}
//       </p>
//       <p>
//         <b> Place:</b> ${details.place}
//       </p>
//       <p>
//         <b> Capacity:</b> ${details.capacity}
//       </p>
//       <p>
//         <b> Price:</b> ${details.price}
//       </p>
//     </div>`;
// cardDetails.innerHTML = tarjeta;
