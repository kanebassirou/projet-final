var nom = prompt('entrez votre nom');
var prenom = prompt('entrez votre prenom');
var nf = prompt('donnez le nom de la filiere');
var td = prompt('donnez le matiere pour le tp');

// document.createElement(p).innerText = `nom :${nom} prenom :${prenom} nom du filiere :${nf}`;
const nomtp = document.querySelector("h2 span");
nomtp.innerText = `${td}`;
const groupe = document.querySelector(".groupe h3");
var premiervartre = nom.slice(0, 1);
groupe.style.cursor = ("pointer");

groupe.addEventListener("click", () => {
    if (premiervartre == 'a' || premiervartre == 'b' || premiervartre == 'c' || premiervartre == 'd') {
        groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 1 pour le tp de ${tp}`;

    } else
    if (premiervartre === "e" || premiervartre == "f" || premiervartre == "g" || premiervartre == "h") {
        groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 2 pour le tp de ${tp}`;
    } else
    if (premiervartre === "i" || premiervartre == "j" || premiervartre == "k" || premiervartre == "l") {

        groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 3 pour le tp de ${tp}`;
    } else
        groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 4 pour le tp de ${tp}`;


})