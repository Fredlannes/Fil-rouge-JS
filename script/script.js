//créer un livre avec des variables (cour 2)
let book;
let title = "les miserables";
let autor = "Victor Hugo"
let price = 14.95;
let category = "drame";
let releaseDate = new Date(1997,05,23);
let nbSales = 345; 

/* ------------------------*/

//creer un livre avec des objets et des tableaux (cour 3)

// Nous avons crée un fichier books.js, un tableau d'objet avec des livres
console.log("BOOK LIST");
console.log(books);

// pour recupérer le vote 3 de l'objet 1 du tableau
// console.log(books[0].vote[2]);

//Tableau d'objet pour le panier

let cart = [
    {id: "0", qtt: 1 },
    {id: "1", qtt: 1 },
];
console.log("Panier :");
console.log(cart);
let totalPrice; //prix total du panier à stocker dans cette variable

/* ----------------------*/
//Conditions (cours 4)
/*-----------------------*/

//gestion des stocks
if (books[0].nbStock === 0) {
    console.log("rupture de stock");
} else {
    console.log("il en reste " + books[0].nbStock + " en stock.");
}


//sorties récentes
if (books[0].relaseDate > books[1].relaseDate){
    console.log(books[0].title + " est le plus récent des 2 livres.");
} else {
    console.log(books[1].title + " est le plus récent des 2 livres.");
}

//Meilleurtes ventes
if(books[0].ndSale > books[1].ndSale){
    console.log(books[0].title + " est le livre le plus vendu.");
} else {
    console.log(books[1].title + " est le livre le plus vendu.");
}

// Panier: augmenter la quantiter d'un article

if(cart[1]){ //equivaut à cart[1]=== true
    console.log("quantité avant ajout: "+ cart[1].qtt);
    cart[1].qtt ++ // ou cart[1].qtt = cart[1].qtt + 1
    console.log("quantité après ajout: "+ cart[1].qtt++);
}


