const ticket = document.querySelector("h3");
const affiche = document.querySelector(".codi p");
ticket.addEventListener("click", () => {
    var nbreTicketDej = prompt("donnez le nombre de ticket petit dejeuner achete");
    var nbreTicketRepas = prompt(" le nombre tickets repas a acheter");
    ptR = nbreTicketRepas * 100;
    ptD = nbreTicketDej * 50;
    alert(`le prix total des ticketS petit dejeuner  sont : ${ptD} CFA `);
    alert(`le prix total des ticketS repas  sont : ${ptR} CFA`);
    PT = ptD + ptR;
    alert(`le prix à payer =${PT} Cfa`);
    affiche.innerText = (`le nombre de ticket achete pour le repas= ${nbreTicketRepas}, 
    le ticket achete pour le petit dejeuner =${nbreTicketDej} 
    et prix totale des tickets =${PT} CFA`);

})