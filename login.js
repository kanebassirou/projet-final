function seConnecter() {

    var motDepasse = "admin";
    var login = "etudiant@univ-thies.sn";
    var login2 = document.getElementById("nom").value;
    var motDepasse2 = document.getElementById("motDepasse").value;
    if ((motDepasse == motDepasse2) && (login == login2)) {
        alert("connexion reussi");
        window.location.href = "./acceuil.html";

    } else {
        alert("connexion non reussi");
        alert("votre de mot de passe et nom d' utilisateur ne correspond pas veuillez donner les bonnes identifiants ");

    }


}