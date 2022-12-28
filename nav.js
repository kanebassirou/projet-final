const navbar = document.querySelector("#menu");
navbar.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("Smenu");



});

// window.addEventListener("scroll",(e)=>{

// });
const imageDefile = document.querySelectorAll(".bloc1 img");
for (let i = 0; i < imageDefile.length; i++) {
    imageDefile[i].style.display = "none";

}

let k = 0;
// setTimeout(defiler, 3000) ;


function defiler() {
    imageDefile[k].style.display = "none";
    if (k < imageDefile.length - 1)
        k++;
    else
        k = 0;
    imageDefile[k].style.display = "block";
    document.querySelector(".blo").style.background = `url(./media/chantier${k}.jpg)`;


    setTimeout("defiler()", 3000);


}

window.onload = defiler;

function validation() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input1").value;
    const input3 = document.getElementById("input1").value;
    if ((input1 == '') || (input2 == '') || (input3 == '')) {
        alert("veuillez remplir ce champ");
    }
}