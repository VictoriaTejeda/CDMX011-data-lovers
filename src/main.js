import {name,paisito} from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

/*let titulo = document.getElementById("olympics-title");
*/
let divAthletes =  document.getElementById("athletes");

let selectPais = document.getElementById("pais")


selectPais.addEventListener("change",function(e){
    divAthletes.innerHTML = "";
    paisito(e.target.value).forEach(a => divAthletes.appendChild(obtenerElementoAtleta(a)));

});

function obtenerElementoAtleta(atleta){
    const ul = document.createElement("ul");
    const aName = document.createElement("li");
        aName.innerHTML = "Nombre: " + atleta.name;
    const aSport = document.createElement("li");
        aSport.innerHTML = atleta.sport;
    const aTeam = document.createElement("li");
        aTeam.innerHTML = atleta.team;
    const aEvent = document.createElement("li");
        aEvent.innerHTML = atleta.event;
    const aMedal = document.createElement("li");
        aMedal.innerHTML = atleta.medal;
    const aGender = document.createElement("li");
        aGender.innerHTML = atleta.gender;
    const aAge = document.createElement("li");
        aAge.innerHTML = atleta.age;
    const aWeight = document.createElement("li");
        aWeight.innerHTML = atleta.weight;
    const aHeight = document.createElement("li");
        aHeight.innerHTML = atleta.height;
    const aNoc = document.createElement("li");
        aNoc.innerHTML = atleta.noc;    
    ul.appendChild(aName);
    ul.appendChild(aAge);
    ul.appendChild(aGender);
    ul.appendChild(aAge);
    ul.appendChild(aWeight);
    ul.appendChild(aHeight);
    ul.appendChild(aTeam);
    ul.appendChild(aNoc);
    ul.appendChild(aSport);
    ul.appendChild(aEvent);
    ul.appendChild(aMedal);
    return ul;
}

/*titulo.innerHTML = data.games + " Ciudad: "+data.city;
let cards= function showData () {
    data.athletes.forEach(function(atleta){
    
   
        divAthletes.appendChild(ul);
    })
}
console.log(cards);
*/