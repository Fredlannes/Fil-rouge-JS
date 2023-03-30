//créer un livre avec des variables (cour 2)
// let book;
// let title = "les miserables";
// let autor = "Victor Hugo"
// let price = 14.95;
// let category = "drame";
// let releaseDate = new Date(1997,05,23);
// let nbSales = 345;

//creer un livre avec des objets et des tableaux (cour 3)

let books = [
    {
        id: "0"
        title: "les miserable",
        autor: "Victor Hugo",
        price: 14.95,
        category: "drame",
        relaseDate: new Date("1997,05,23"),
        ndSale: 345,
        resume:"",
        vote: [5, 4, 4, 5, 6]
    },
    {
        id: "1"
        title: "les miserable",
        autor: "Victor Hugo",
        price: 14.95,
        category: "drame",
        relaseDate: new Date("1997,05,23"),
        ndSale: 345,
        resume:"",
        vote: [5, 4, 4, 5, 6]
    },
];

// pour recupérer le vote 3 de l'objet 1 du tableau
// console.log(books[0].vote[2]);

//Tableau d'objet pour le panier

let cart = [
    {id: "0", qtt: 1 },
    {id: "1", qtt: 2 },
];