import { searchByTeam, sortByAtoZ, searchBySport, searchByGender, searchByMedal } from "./data.js";

let selectPais = document.getElementById("pais");
let selectSport = document.getElementById("deportes");
let selectGender = document.getElementById("genero");
let selectMedal = document.getElementById("medallas");
let divAthletes = document.getElementById("athletes");
const firstPage = document.querySelector(".reseña");
let ocultarPaginacion = document.querySelector("#hidePagination");
let imgNoResult = document.getElementById("root");
let pagination = document.getElementById("pagination");
let avatar = 12;
let currentPage = 1;
document.querySelector(".button").addEventListener("click", reset);

hideFpageBtn(false);



function listenerFn() {
  filtrar();
  hideFpageBtn(true);
}

selectPais.addEventListener("change", listenerFn )

selectSport.addEventListener("change", listenerFn )

selectGender.addEventListener("change", listenerFn )

selectMedal.addEventListener("change", listenerFn )

function filtrar() {
  let items = []; //determinamos el array vacio para que lo ocupe dataX cuando se hace una busqueda previa
  let pais = selectPais.value;
  let deporte = selectSport.value;
  let genero = selectGender.value;
  let medal = selectMedal.value;
  divAthletes.innerHTML = "";
  pagination.innerHTML = "";
  let opcionesSeccionadas = [];

  if (pais != "Selecciona un país") {
    opcionesSeccionadas.push("pais");
    if (opcionesSeccionadas.length == 1) {
      items = searchByTeam(items, pais, true);
    }
    items = searchByTeam(items, pais, false);
    //console.log(items);
  }

  if (deporte != "Selecciona una disciplina") {
    opcionesSeccionadas.push("disciplina");
    if (opcionesSeccionadas.length == 1) {
      items = searchBySport(items, deporte, true);
    }
    items = searchBySport(items, deporte, false);
  }

  if (genero != "Selecciona el género") {
    opcionesSeccionadas.push("genero");
    if (opcionesSeccionadas.length == 1) {
      items = searchByGender(items, genero, true);
    }
    items = searchByGender(items, genero, false);
  }

  if (medal != "Selecciona una medalla") {
    //console.log("traigo esta medalla: "+medal);
    opcionesSeccionadas.push("medalla");
    if (opcionesSeccionadas.length == 1) {
      items = searchByMedal(items, medal, true);
    }
    items = searchByMedal(items, medal, false);
  }
  imgNoResult.hidden = !items.length == 0;
  //console.log(items);
  if(items.length > 0){
    items = sortByAtoZ(items);
    setupPagination(items, pagination, avatar);
    DisplayList(items, divAthletes, avatar, currentPage);
  }
}

function setupPagination(items, wrapper, avatarPerPage) {
  wrapper.inderHtml = "";

  let pageCount = Math.ceil(items.length / avatarPerPage);
  //console.log("page_count"+page_count);
  for (let i = 1; i < pageCount + 1; i++) {
    //console.log("estoy en la pagina "+i);
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
  //console.log("Esto tiene el wrapper");
  //console.log(wrapper);
}
function paginationButton(page, items) {
  let button = document.createElement("button");
  button.value = page;
  let currentPage = page;
  button.innerText = button.value;
  // button.classList.add("botoncito");
  //console.log("Boton creado "+ button.value);
  if (currentPage == page);
  button.addEventListener("click", function () {
    divAthletes.innerHTML = "";
    DisplayList(items, divAthletes, avatar, currentPage);
    buttonActive(currentPage, page, button);
    imgNoResult.hidden=true;
  });
  return button;
}
function buttonActive(currentPage, page, button) {
  currentPage == page;
  let currentBtn = document.querySelector(".botoncito button.active");
  button.classList.add("active");
  currentBtn.classList.remove("active");
}

function DisplayList(items, divAthletes, avatarPerPage, page) {
  page--;
  let loopStart = avatarPerPage * page;
  //console.log(loopStart)
  let paginatedItems = items.slice(loopStart, loopStart + avatarPerPage);
  //console.log(paginatedItems);
  paginatedItems.forEach((a) =>
    divAthletes.appendChild(obtenerElementoAtleta(a))
    
  );
}


function obtenerElementoAtleta(atleta) {
  const divTarjeta = document.createElement("div");
  divTarjeta.classList.add("tarjeta");
  const divInner = document.createElement("div");
  divInner.classList.add("tarjeta-inner");
  const div = document.createElement("div");
  div.classList.add("collection");
  let divContainerImage = document.createElement("div");
  divContainerImage.classList.add("circular_landscape");
  let img = document.createElement("IMG");
  img.src = "images/" + atleta.gender + ".png";
  divContainerImage.appendChild(img);
  div.appendChild(divContainerImage);
  let divContainerMedal = document.createElement("div");
  divContainerMedal.classList.add("circularMedal");
  let imgMedal = document.createElement("IMG");
  imgMedal.src = "images/" + atleta.medal + ".png";
  divContainerMedal.appendChild(imgMedal);
  div.appendChild(divContainerMedal);
  const aName = document.createElement("p");
  aName.innerHTML = atleta.name;
  aName.classList.add("name_athlet");
  const aNameBack = document.createElement("div");
  aNameBack.innerHTML = atleta.name;
  aNameBack.classList.add("nameBack");
  const aSport = document.createElement("p");
  aSport.classList.add("sport");
  const aTeam = document.createElement("p");
  aTeam.classList.add("team_athlet");
  
  div.appendChild(aName);
  div.appendChild(getFormatStrong("País: ", atleta.team + " (" + atleta.noc + ")"));
  div.appendChild(getFormatStrong("Deporte: ", atleta.sport));
   
  const divAtras = document.createElement("div");
  divAtras.classList.add("atras");
  divAtras.appendChild(aNameBack);
  divAtras.appendChild(getFormatStrong("Evento: ", atleta.event));
  divAtras.appendChild(getFormatStrong("Edad: ", atleta.age + " años"));
  divAtras.appendChild(getFormatStrong("Peso: ", atleta.weight + " kg"));
  divAtras.appendChild(getFormatStrong("Estatura: ", atleta.height + " cm"));

  divInner.appendChild(div);
  divInner.appendChild(divAtras);
  divTarjeta.appendChild(divInner);
  return divTarjeta;
}
function reset() {
  selectPais.value = "Selecciona un país";
  selectSport.value = "Selecciona una disciplina";
  selectGender.value = "Selecciona el género";
  selectMedal.value = "Selecciona una medalla";
  divAthletes.innerHTML = "";
  hideFpageBtn(false);
  imgNoResult.hidden=true;
}
function hideFpageBtn(ocultar) {
    firstPage.hidden = ocultar;
    ocultarPaginacion.hidden = !ocultar;
  }
  
  function getFormatStrong(titulo, valor){
  const aSpan = document.createElement("span");
  aSpan.classList.add("a-span");
  const sStrong = document.createElement("span");
  sStrong.classList.add("strong");
  aSpan.innerHTML = titulo;
  sStrong.innerHTML=  valor;
  aSpan.appendChild(sStrong);
  return aSpan;
  }
