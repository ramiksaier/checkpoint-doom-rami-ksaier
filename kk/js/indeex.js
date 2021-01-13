// console.log("testing");
let plus = document.querySelectorAll(".plus");
let imagesf = document.querySelectorAll(".image3");
let qte = document.querySelectorAll(".qte");
let moin = document.querySelectorAll(".moin");
let pri = document.getElementById("prix");
let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
let image = Array.from(document.querySelectorAll(".image"));
let btnprice = document.getElementById("bprice");
let del = Array.from(document.querySelectorAll(".btn-dark"));
let sup = Array.from(document.querySelectorAll(".col-lg-4"));
let coulmn1 = document.querySelector(".sec1");
let favs = Array.from(document.querySelectorAll(".fa-grin-hearts"))
let pr=Array.from(document.querySelectorAll(".prix-quantite"));
let totalPri = document.querySelector(".price-total")

console.log(btnprice);
console.log(del, "hello rami");


// changer le couleur en noir et en rouge
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}

// add bouton 
let result = 0;
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
         result = (+ unitPrices[i].innerHTML) * (+ qte[i].innerHTML)
        pr[i].value = result; 
        totalInput()
      
    });

}


// moin
for (let i = 0; i < moin.length; i++) {
    moin[i].addEventListener("click", function () {
        if (qte[i].innerHTML > 0) {
            qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
            result = result -(+ unitPrices[i].innerHTML) 
            pr[i].value = result;
            
            
            totalInput()
        } else {
            alert("il nya pas un panier negative")
        }
        totalInput()
    });

}
function totalInput() {
    let prixQuantite = Array.from(document.querySelectorAll(".prix-quantite"));
    let qte = Array.from(document.querySelectorAll(".qte"));
    let s = 0;

    for (let i in qte) {
        s +=Number( prixQuantite[i].value)
    }
    totalPri.value = s

} 


 // resultat final
/*function priceTotal() {
    let price = document.querySelectorAll(".price-total");
    let prixQuantite = Array.from(document.querySelectorAll(".prix-quantite"));
    result = 0;
    for (let i in prixQuantite) {


        result = prixQuantite[i] + prixQuantite[i + 1]
        price.value = result

    }
}; */

// bouton delete
for (let i in del) {
    del[i].addEventListener("click", function () {
        del[i].parentNode.parentNode.remove()
        // sup[i].remove()
        totalInput()
    })
}
