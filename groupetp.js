var nom = prompt('entrez votre nom');
var prenom = prompt('entrez votre prenom');
var nf = prompt('donnez le nom de la filiere');
var tp = prompt('donnez le matiere pour le tp'); // document.createElement(p).innerText = `nom :${nom} prenom :${prenom} nom du filiere :${nf}`;
const nomTp = document.querySelector("h2 span");
nomTp.innerText = `${tp}`;
const groupe = document.querySelector(".groupe h3");
var premierLettre = nom.slice(0, 1);
groupe.style.cursor = ("pointer");

groupe.addEventListener("click", () => {
        if (premierLettre == 'a' || premierLettre == 'b' || premierLettre == 'c' || premierLettre == 'd') {
            groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 1 pour le tp de ${tp}`;

        } else
        if (premierLettre === "e" || premierLettre == "f" || premierLettre == "g" || premierLettre == "h") {
            groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 2 pour le tp de ${tp}`;
        } else
        if (premierLettre === "i" || premierLettre == "j" || premierLettre == "k" || premierLettre == "l") {

            groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 3 pour le tp de ${tp}`;
        } else
            groupe.innerText = `${nom} ${prenom} vous etez dans la groupe 4 pour le tp de ${tp}`;


    })
    // console.log(nom.slice(0,3));