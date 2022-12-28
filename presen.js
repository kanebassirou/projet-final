var nom = prompt("donnez votre nom");
var prenom = prompt("donnez votre prenom");
var nd = prompt("donnez votre numero Dossier");
var nomFiliere = prompt("donnez LE nom du filiere");
var nn = prompt("donnez niveau");
const perso = document.querySelector(".per h2");
const emploiDuTemp = document.querySelector(".per h3");
const corps = document.querySelector("body");

alert(`nom: ${nom} prenom: ${prenom} numero carte :${nd} niveau:${nn} `);
perso.innerText = `bienvenue ${prenom} ${nom} filiere: ${nomFiliere} ${nn} numero de carte:${nd} !!!`;
emploiDuTemp.style.cursor = ("pointer");
emploiDuTemp.addEventListener("click", () => {
    perso.classList.toggle("comp");
    if (nomFiliere == "lgi" || nomFiliere == "lmi" || nomFiliere == "informatique") {
        emploiDuTemp.innerHTML =
            "<table><tr><th>horaire</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th><th>Samedi</th></tr><tr><td>9h -12h</td><td>reseaux</td><td>developpement web1</td><td>systeme d'exploitation</td><td>structure de donnees</td><td>gestion de projet</td><td>base de donnees</td></tr><tr><td>14h - 18h</td><td>Anglais</td><td>td Anglais</td><td>Acsq</td><td>td reseau</td><td>gestrion des projets</td><td>----------</td></tr><table/>";
    } else
    if (nomFiliere == "lsse" || nomFiliere == "LSSE") {
        emploiDuTemp.innerHTML =
            "</table><table><tr><th>horaire</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th><th>Samedi</th></tr><tr><td>9h -12h</td><td>Assaindissement</td><td>Anglais</td><td>Analyse</td><td>Informatique</td><td>topologie</td><td>Geologie</td></tr><tr><td>14h - 18h</td><td>hydrologie</td><td>td geologie</td><td>td analyse</td><td>td anglais</td><td>TP Topo</td><td>----------</td></tr></table>"
    } else {
        emploiDuTemp.innerHTML =
            "<h2>votre emploi du temps n'est pas disponible pour le moment veuillez le consulter plus tard</h2>";
    }
});